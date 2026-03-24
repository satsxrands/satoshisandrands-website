"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  title: string;
  excerpt: string;
  url: string;
  source: string;
  pubDate: string;
  category: "SA" | "BTC" | "Regulation" | "Market";
  sentiment: "bullish" | "bearish" | "neutral";
  sentimentScore: number;
}

const SENTIMENT_CONFIG = {
  bullish:  { label: "Bullish",  color: "var(--green)", bg: "rgba(6,214,160,0.12)",  dot: "▲" },
  bearish:  { label: "Bearish",  color: "var(--red)",   bg: "rgba(239,35,60,0.12)",  dot: "▼" },
  neutral:  { label: "Neutral",  color: "var(--muted)", bg: "rgba(136,136,136,0.1)", dot: "●" },
};

interface NewsData {
  items: NewsItem[];
  updatedAt: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  SA: "var(--gold)",
  BTC: "#F7931A",
  Regulation: "var(--red)",
  Market: "var(--green)",
};

const ALL_CATEGORIES = ["All", "SA", "BTC", "Regulation", "Market"] as const;

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function NewsPage() {
  const [data, setData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const fetchNews = useCallback(async () => {
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json();
      setData(json);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 900_000); // refresh every 15 min
    return () => clearInterval(interval);
  }, [fetchNews]);

  const filtered = data?.items.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  ) ?? [];

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--white)" }}>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, height: "var(--topnav-h)", background: "rgba(13,13,13,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", padding: "0 40px", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/satslogo.png" alt="SatoshisAndRands" width={32} height={32} style={{ borderRadius: "50%" }} priority />
          <span className="home-brand-text" style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 20, color: "var(--gold)", letterSpacing: "0.1em" }}>
            SATOSHIS & RANDS
          </span>
        </Link>
        <div className="nav-links" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/tax-tools" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>Tax Tools</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/market" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>Market</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/blog" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>Guides</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--gold)", padding: "6px 16px" }}>News</span>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 40px 80px" }} className="market-content">
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 900, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            Live Feed
          </p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
            <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 38, letterSpacing: "0.04em", color: "var(--white)" }}>
              SA CRYPTO NEWS
            </h1>
            {data?.updatedAt && (
              <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
                Updated {new Date(data.updatedAt).toLocaleTimeString("en-ZA")}
              </span>
            )}
          </div>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
            Crypto news relevant to South African holders. Refreshed every 15 minutes.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {ALL_CATEGORIES.map((cat) => {
            const color = cat === "All" ? "var(--gold)" : (CATEGORY_COLORS[cat] ?? "var(--gold)");
            const isActive = activeCategory === cat;
            const count = cat === "All" ? (data?.items.length ?? 0) : (data?.items.filter((i) => i.category === cat).length ?? 0);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: `1px solid ${isActive ? color : "var(--border)"}`,
                  background: isActive ? `${color}18` : "transparent",
                  color: isActive ? color : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 150ms ease",
                }}
              >
                {cat}
                {data && <span style={{ marginLeft: 6, opacity: 0.6 }}>{count}</span>}
              </button>
            );
          })}
        </div>

        {/* States */}
        {loading && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 13, color: "var(--muted)" }}>Loading news…</p>
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 13, color: "var(--red)" }}>Failed to load news feed.</p>
          </div>
        )}

        {/* News list */}
        {!loading && !error && (
          <div style={{ display: "grid", gap: 12 }}>
            {filtered.map((item, i) => {
              const color = CATEGORY_COLORS[item.category] ?? "var(--gold)";
              return (
                <div
                  key={i}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderLeft: `3px solid ${color}`,
                    borderRadius: 12,
                    padding: "16px 20px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color, background: `${color}18`, border: `1px solid ${color}33`, padding: "3px 10px", borderRadius: 20 }}>
                      {item.category}
                    </span>
                    {item.sentiment && (() => {
                      const s = SENTIMENT_CONFIG[item.sentiment];
                      return (
                        <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 10, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: s.color, background: s.bg, padding: "3px 10px", borderRadius: 20, display: "inline-flex", alignItems: "center", gap: 4 }}>
                          <span style={{ fontSize: 8 }}>{s.dot}</span> {s.label}{item.sentimentScore > 0 ? ` ${item.sentimentScore}%` : ""}
                        </span>
                      );
                    })()}
                    <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
                      {item.source}
                    </span>
                    <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)", marginLeft: "auto" }}>
                      {timeAgo(item.pubDate)}
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 19, letterSpacing: "0.04em", color: "var(--white)", lineHeight: 1.1, marginBottom: 6 }}>
                    {item.title}
                  </p>
                  {item.excerpt && (
                    <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 600, color: "var(--muted)", lineHeight: 1.5, marginBottom: 12 }}>
                      {item.excerpt}
                    </p>
                  )}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 900, color, letterSpacing: "0.04em", textDecoration: "none" }}
                  >
                    Read article →
                  </a>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 13, color: "var(--muted)", textAlign: "center", padding: "40px 0" }}>
                No news in this category right now.
              </p>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(245,166,35,0.05)", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 10 }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)", lineHeight: 1.6 }}>
            💡 News sourced from external publications. Not financial advice. Prices and developments can change rapidly.
          </p>
        </div>
      </div>

      <footer className="site-footer" style={{ borderTop: "1px solid var(--border)", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 18, color: "var(--gold)", letterSpacing: "0.1em" }}>SATOSHIS & RANDS</span>
        <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>
          News for reference only. Not financial advice. © 2026 SatoshisAndRands
        </span>
      </footer>
    </div>
  );
}
