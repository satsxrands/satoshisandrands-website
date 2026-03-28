"use client";

import { useState } from "react";
import { modules, getCategories, type Category } from "@/content/learn/modules";
import { ModuleGrid } from "@/components/ModuleGrid";

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const categories = getCategories();

  const filteredModules =
    activeCategory === "All"
      ? modules
      : modules.filter((m) => m.category === activeCategory);

  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--white)",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* Top Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(13, 13, 13, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          zIndex: 100,
          padding: "16px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              fontSize: "18px",
              fontFamily: "'Bebas Neue', sans-serif",
              color: "var(--white)",
              textDecoration: "none",
              letterSpacing: "0.5px",
            }}
          >
            SATOSHIS & RANDS
          </a>
          <div style={{ display: "flex", gap: "32px" }}>
            <a
              href="/tax-tools"
              style={{
                fontSize: "13px",
                fontFamily: "'Nunito', sans-serif",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              TAX TOOLS
            </a>
            <a
              href="/news"
              style={{
                fontSize: "13px",
                fontFamily: "'Nunito', sans-serif",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              NEWS
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px 40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontFamily: "'Bebas Neue', sans-serif",
            margin: 0,
            color: "var(--white)",
            letterSpacing: "1px",
          }}
        >
          LEARN
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "'Nunito', sans-serif",
            color: "var(--muted)",
            margin: "12px 0 0",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Free guides on crypto basics, South African tax rules, and trading
          strategies. Start with security, then build your knowledge.
        </p>
      </section>

      {/* Filter Pills */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as Category | "All")}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.5px",
                border: `1px solid ${
                  activeCategory === category ? "var(--gold)" : "var(--border)"
                }`,
                background:
                  activeCategory === category
                    ? "rgba(245, 166, 35, 0.1)"
                    : "transparent",
                color:
                  activeCategory === category ? "var(--gold)" : "var(--muted)",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--white)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Module Grid */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 60px",
        }}
      >
        <ModuleGrid modules={filteredModules} />
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "40px",
          textAlign: "center",
          color: "var(--muted)",
          fontSize: "13px",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <p style={{ margin: 0, marginBottom: "12px" }}>
          © 2026 SatoshisAndRands. Education resources for South Africa.
        </p>
        <p style={{ margin: 0, fontSize: "12px" }}>
          Not financial advice. Always do your own research (DYOR) and consult
          professionals.
        </p>
      </footer>
    </main>
  );
}
