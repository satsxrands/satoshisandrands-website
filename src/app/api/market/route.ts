import { NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

const CMC_KEY = process.env.CMC_API_KEY;
const SYMBOLS = "BTC,ETH,SOL,XRP,BNB";

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const { allowed, resetAt } = rateLimit(ip, 10, 60_000); // 10 req/min per IP
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    );
  }

  try {
    const [quotesRes, globalRes] = await Promise.all([
      fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${SYMBOLS}&convert=ZAR`,
        {
          headers: { "X-CMC_PRO_API_KEY": CMC_KEY! },
          next: { revalidate: 60 },
        }
      ),
      fetch(
        `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=ZAR`,
        {
          headers: { "X-CMC_PRO_API_KEY": CMC_KEY! },
          next: { revalidate: 60 },
        }
      ),
    ]);

    const [quotesData, globalData] = await Promise.all([
      quotesRes.json(),
      globalRes.json(),
    ]);

    const coins = SYMBOLS.split(",").map((sym) => {
      const info = quotesData.data[sym];
      const q = info.quote.ZAR;
      return {
        symbol: sym,
        name: info.name,
        price: q.price,
        change24h: q.percent_change_24h,
        change7d: q.percent_change_7d,
        marketCap: q.market_cap,
        volume24h: q.volume_24h,
      };
    });

    const gq = globalData.data.quote.ZAR;
    const global = {
      totalMarketCap: gq.total_market_cap,
      volume24h: gq.total_volume_24h,
      btcDominance: globalData.data.btc_dominance,
      activeCryptos: globalData.data.active_cryptocurrencies,
      marketCapChange24h: gq.total_market_cap_yesterday_percentage_change,
    };

    return NextResponse.json({ coins, global, updatedAt: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 });
  }
}
