"use client";

import { useState } from "react";
import Link from "next/link";
import { Article } from "@/content/blog/articles";

const CATEGORY_COLORS: Record<string, string> = {
  CARF: "var(--red)",
  Filing: "var(--gold)",
  "Tax Basics": "var(--green)",
  CGT: "var(--gold)",
};

export default function BlogFilter({ articles }: { articles: Article[] }) {
  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Filter pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
        {categories.map((cat) => {
          const color = cat === "All" ? "var(--gold)" : (CATEGORY_COLORS[cat] ?? "var(--gold)");
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
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
              {cat !== "All" && (
                <span style={{ marginLeft: 6, opacity: 0.6 }}>
                  {articles.filter((a) => a.category === cat).length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Article list */}
      <div style={{ display: "grid", gap: 16 }}>
        {filtered.map((article) => {
          const color = CATEGORY_COLORS[article.category] ?? "var(--gold)";
          return (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{
                display: "block",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderLeft: `3px solid ${color}`,
                borderRadius: 12,
                padding: "20px 24px",
                textDecoration: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color, background: `${color}18`, border: `1px solid ${color}33`, padding: "3px 10px", borderRadius: 20 }}>
                  {article.category}
                </span>
                <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
                  {new Date(article.date).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" })} · {article.readTime} min read
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 22, letterSpacing: "0.04em", color: "var(--white)", marginBottom: 8, lineHeight: 1.1 }}>
                {article.title}
              </h2>
              <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 600, color: "var(--muted)", lineHeight: 1.6, marginBottom: 12 }}>
                {article.excerpt}
              </p>
              <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 900, color, letterSpacing: "0.04em" }}>
                Read guide →
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
