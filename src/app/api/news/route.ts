import { NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export interface NewsItem {
  title: string;
  excerpt: string;
  url: string;
  source: string;
  pubDate: string;
  category: "SA" | "BTC" | "Regulation" | "Market";
  sentiment: "bullish" | "bearish" | "neutral";
  sentimentScore: number;
}

const FEEDS = [
  { url: "https://cointelegraph.com/rss/tag/south-africa", source: "CoinTelegraph", category: "SA" },
  { url: "https://coindesk.com/arc/outboundfeeds/rss/", source: "CoinDesk", category: "Market" },
  { url: "https://cointelegraph.com/rss/tag/regulation", source: "CoinTelegraph", category: "Regulation" },
  { url: "https://cointelegraph.com/rss/tag/bitcoin", source: "CoinTelegraph", category: "BTC" },
];

// ProsusAI/finbert via public HF Inference API — no token required
const FINBERT_URL = "https://api-inference.huggingface.co/models/ProsusAI/finbert";

function parseRSS(xml: string, source: string, category: string): Omit<NewsItem, "sentiment" | "sentimentScore">[] {
  const items: Omit<NewsItem, "sentiment" | "sentimentScore">[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
      ?? block.match(/<title>(.*?)<\/title>/)?.[1]
      ?? "";
    const link = block.match(/<link><!\[CDATA\[(.*?)\]\]><\/link>/)?.[1]
      ?? block.match(/<link>(.*?)<\/link>/)?.[1]
      ?? block.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/)?.[1]
      ?? "";
    const desc = block.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]
      ?? block.match(/<description>(.*?)<\/description>/)?.[1]
      ?? "";
    const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

    if (!title || !link) continue;

    const excerpt = desc.replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ").trim().slice(0, 160) + (desc.length > 160 ? "…" : "");

    items.push({
      title: title.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
      excerpt,
      url: link,
      source,
      pubDate,
      category: category as NewsItem["category"],
    });
  }

  return items.slice(0, 8);
}

// Batch sentiment via finbert — public endpoint, no auth token
async function getSentiments(titles: string[]): Promise<Array<{ sentiment: NewsItem["sentiment"]; score: number }>> {
  try {
    const res = await fetch(FINBERT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: titles }),
      // No cache — sentiment is computed once per news refresh cycle
    });

    if (!res.ok) throw new Error(`finbert ${res.status}`);

    // finbert returns array of arrays: [[{label, score}, ...], ...]
    const data: Array<Array<{ label: string; score: number }>> = await res.json();

    return data.map((preds) => {
      // Pick highest-confidence prediction
      const top = preds.reduce((a, b) => (a.score > b.score ? a : b));
      const label = top.label.toLowerCase();
      const sentiment: NewsItem["sentiment"] =
        label === "positive" ? "bullish" :
        label === "negative" ? "bearish" : "neutral";
      return { sentiment, score: Math.round(top.score * 100) };
    });
  } catch {
    // Graceful fallback — return neutral for all if finbert is unavailable
    return titles.map(() => ({ sentiment: "neutral" as const, score: 0 }));
  }
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const { allowed, resetAt } = rateLimit(ip, 4, 60_000); // 4 req/min per IP (data revalidates every 15 min)
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    );
  }

  try {
    // 1. Fetch all RSS feeds in parallel
    const feedResults = await Promise.allSettled(
      FEEDS.map(async (feed) => {
        const res = await fetch(feed.url, {
          headers: { "User-Agent": "SatoshisAndRands/1.0" },
          next: { revalidate: 900 },
        });
        if (!res.ok) throw new Error(`${feed.source} feed failed`);
        const xml = await res.text();
        return parseRSS(xml, feed.source, feed.category);
      })
    );

    const rawItems = feedResults
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      .slice(0, 30);

    // 2. Run finbert sentiment on all headlines in one batched call
    const sentiments = await getSentiments(rawItems.map((i) => i.title));

    const items: NewsItem[] = rawItems.map((item, i) => ({
      ...item,
      sentiment: sentiments[i].sentiment,
      sentimentScore: sentiments[i].score,
    }));

    return NextResponse.json({ items, updatedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json({ error: "Failed to fetch news", items: [] }, { status: 500 });
  }
}
