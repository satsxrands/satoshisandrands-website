"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const COIN_ICONS: Record<string, string> = {
  BTC: "₿",
  ETH: "Ξ",
  SOL: "◎",
  XRP: "✕",
  BNB: "⬡",
};

const COIN_COLORS: Record<string, string> = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  SOL: "#9945FF",
  XRP: "#00AAE4",
  BNB: "#F3BA2F",
};

interface Coin {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
}

interface Global {
  totalMarketCap: number;
  volume24h: number;
  btcDominance: number;
  activeCryptos: number;
  marketCapChange24h: number;
}

interface MarketData {
  coins: Coin[];
  global: Global;
  updatedAt: string;
}

function fmtZAR(n: number) {
  if (n >= 1_000_000_000_000) return `R${(n / 1_000_000_000_000).toFixed(2)}T`;
  if (n >= 1_000_000_000) return `R${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(1)}M`;
  return `R${n.toLocaleString("en-ZA", { maximumFractionDigits: 0 })}`;
}

function fmtPrice(n: number) {
  if (n >= 1000) return `R${n.toLocaleString("en-ZA", { maximumFractionDigits: 0 })}`;
  if (n >= 1) return `R${n.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `R${n.toFixed(4)}`;
}

function Pct({ value }: { value: number }) {
  const color = value >= 0 ? "var(--green)" : "var(--red)";
  return (
    <span style={{ color, fontFamily: "var(--font-space-mono), monospace", fontSize: 14, fontWeight: 700 }}>
      {value >= 0 ? "+" : ""}{value.toFixed(2)}%
    </span>
  );
}

export default function MarketPage() {
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(60);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/market");
      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json();
      setData(json);
      setLastRefresh(new Date());
      setCountdown(60);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  useEffect(() => {
    const tick = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(tick);
  }, [lastRefresh]);

  const muted: React.CSSProperties = { fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)" };
  const label: React.CSSProperties = { fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 900, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--white)" }}>

      {/* Nav */}
      <nav className="home-nav" style={{ position: "sticky", top: 0, zIndex: 100, height: "var(--topnav-h)", background: "rgba(13,13,13,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", padding: "0 40px", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/satslogo.png" alt="SatoshisAndRands" width={32} height={32} style={{ borderRadius: "50%" }} priority />
          <span className="home-brand-text" style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 20, color: "var(--gold)", letterSpacing: "0.1em" }}>
            SATOSHIS & RANDS
          </span>
        </Link>
        <div className="nav-links" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/tax-tools" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>Tax Tools</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--gold)", padding: "6px 16px" }}>Market Data</span>
        </div>
      </nav>

      <div className="market-content" style={{ maxWidth: 960, margin: "0 auto", padding: "48px 40px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 900, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            Live Prices
          </p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 38, letterSpacing: "0.04em", color: "var(--white)" }}>
              CRYPTO IN RANDS
            </h1>
            {lastRefresh && (
              <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
                Updated {lastRefresh.toLocaleTimeString("en-ZA")} · refreshing in {countdown}s
              </span>
            )}
          </div>
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 13, color: "var(--muted)" }}>Loading market data…</p>
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 13, color: "var(--red)" }}>Failed to load — retrying in {countdown}s</p>
          </div>
        )}

        {data && (
          <>
            {/* Global Stats Bar — 2×2 on mobile */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 1,
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                overflow: "hidden",
                marginBottom: 28,
              }}
            >
              {[
                { label: "Total Mkt Cap", value: fmtZAR(data.global.totalMarketCap), sub: data.global.marketCapChange24h !== undefined ? <Pct value={data.global.marketCapChange24h} /> : null },
                { label: "24h Volume", value: fmtZAR(data.global.volume24h), sub: null },
                { label: "BTC Dominance", value: `${data.global.btcDominance.toFixed(1)}%`, sub: null },
                { label: "Active Cryptos", value: data.global.activeCryptos.toLocaleString(), sub: null },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "var(--surface)", padding: "14px 16px" }}>
                  <p style={label}>{stat.label}</p>
                  <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 15, fontWeight: 700, color: "var(--white)", marginTop: 4 }}>{stat.value}</p>
                  {stat.sub && <div style={{ marginTop: 2 }}>{stat.sub}</div>}
                </div>
              ))}
            </div>

            {/* Coin Cards — 2-col layout works on all screen sizes */}
            <div style={{ display: "grid", gap: 10 }}>
              {data.coins.map((coin) => (
                <div
                  key={coin.symbol}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderLeft: `3px solid ${COIN_COLORS[coin.symbol] ?? "var(--gold)"}`,
                    borderRadius: 12,
                    padding: "16px 18px",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: `${COIN_COLORS[coin.symbol]}18`,
                    border: `1px solid ${COIN_COLORS[coin.symbol]}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, color: COIN_COLORS[coin.symbol],
                    fontWeight: 700, flexShrink: 0,
                  }}>
                    {COIN_ICONS[coin.symbol]}
                  </div>

                  {/* Content: name + price row, then changes row */}
                  <div>
                    {/* Row 1: symbol/name + price */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 19, letterSpacing: "0.05em", color: "var(--white)", lineHeight: 1 }}>{coin.symbol}</p>
                        <p style={{ ...muted, marginTop: 1, fontSize: 11 }}>{coin.name}</p>
                      </div>
                      <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 18, fontWeight: 700, color: "var(--white)", lineHeight: 1, whiteSpace: "nowrap" }}>
                        {fmtPrice(coin.price)}
                      </p>
                    </div>
                    {/* Row 2: changes + volume */}
                    <div style={{ display: "flex", gap: 14, marginTop: 6, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ ...muted, fontSize: 11 }}>24h</span>
                        <Pct value={coin.change24h} />
                      </span>
                      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ ...muted, fontSize: 11 }}>7d</span>
                        <Pct value={coin.change7d} />
                      </span>
                      <span style={{ ...muted, fontSize: 11, marginLeft: "auto" }}>Vol {fmtZAR(coin.volume24h)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SARS note */}
            <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(245,166,35,0.05)", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 10 }}>
              <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)", lineHeight: 1.6 }}>
                💡 <strong style={{ color: "var(--gold)" }}>SARS taxes gains in ZAR</strong> — even if you hold in crypto. Use the{" "}
                <Link href="/tax-tools/cgt" style={{ color: "var(--gold)" }}>CGT Calculator</Link>{" "}
                to estimate your tax on these prices. Prices refreshed every 60 seconds via CoinMarketCap.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="site-footer" style={{ borderTop: "1px solid var(--border)", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 18, color: "var(--gold)", letterSpacing: "0.1em" }}>SATOSHIS & RANDS</span>
        <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>
          Prices for reference only. Not financial advice. © 2026 SatoshisAndRands
        </span>
      </footer>
    </div>
  );
}

// Page-level OG metadata handled via layout — market page is a client component
