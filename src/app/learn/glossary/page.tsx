"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  glossaryTerms,
  getCategories,
  searchTerms,
  type DictTerm,
} from "@/content/learn/glossary";

function GlossaryContent() {
  const searchParams = useSearchParams();
  const termParam = searchParams.get("term");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    DictTerm["category"] | "All"
  >("All");
  const [expandedTermId, setExpandedTermId] = useState<string | null>(null);

  // Auto-expand term if URL param provided
  useEffect(() => {
    if (termParam) {
      setExpandedTermId(termParam);
      // Scroll to the term
      setTimeout(() => {
        const element = document.querySelector(`[data-term-id="${termParam}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [termParam]);

  const categories = getCategories();
  const categoryOptions: (DictTerm["category"] | "All")[] = ["All", ...categories];

  // Filter logic
  const filteredTerms = useMemo(() => {
    let results = searchQuery.trim()
      ? searchTerms(searchQuery)
      : glossaryTerms;

    if (selectedCategory !== "All") {
      results = results.filter((term) => term.category === selectedCategory);
    }

    return results.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--white)",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* Sticky Breadcrumb */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(13, 13, 13, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          zIndex: 50,
          padding: "12px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
            fontSize: "13px",
            fontFamily: "'Nunito', sans-serif",
            color: "var(--muted)",
            display: "flex",
            gap: "8px",
          }}
        >
          <Link href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Home
          </Link>
          <span>›</span>
          <Link href="/learn" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Learn
          </Link>
          <span>›</span>
          <span style={{ color: "var(--white)" }}>Glossary</span>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px 40px",
        }}
      >
        <h1
          style={{
            margin: "0 0 12px 0",
            fontSize: "48px",
            fontFamily: "'Bebas Neue', sans-serif",
            color: "var(--white)",
            letterSpacing: "2px",
            lineHeight: 1.2,
          }}
        >
          Crypto Dictionary
        </h1>

        <p
          style={{
            margin: "0 0 32px 0",
            fontSize: "16px",
            fontFamily: "'Nunito', sans-serif",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Learn crypto and tax terms in simple and advanced definitions. South
          African context included for all entries.
        </p>

        {/* Search Bar */}
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            gap: "12px",
          }}
        >
          <input
            type="text"
            placeholder="Search terms (e.g., 'Bitcoin', 'tax', 'security')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: "12px 16px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--white)",
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              outline: "none",
              transition: "border 0.2s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          />
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 16px",
                background:
                  selectedCategory === cat
                    ? "var(--gold)"
                    : "var(--card)",
                color:
                  selectedCategory === cat
                    ? "var(--bg)"
                    : "var(--white)",
                border: `1px solid ${
                  selectedCategory === cat
                    ? "var(--gold)"
                    : "var(--border)"
                }`,
                borderRadius: "6px",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                cursor: "pointer",
                transition: "all 0.2s",
                textTransform: "uppercase",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div
          style={{
            fontSize: "13px",
            fontFamily: "'Space Mono', monospace",
            color: "var(--muted)",
            marginBottom: "32px",
          }}
        >
          {filteredTerms.length} {filteredTerms.length === 1 ? "term" : "terms"}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      </div>

      {/* Terms List */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 40px",
        }}
      >
        {filteredTerms.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "var(--muted)",
            }}
          >
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              No terms found.
            </p>
            <p style={{ fontSize: "14px" }}>
              Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {filteredTerms.map((term) => (
              <div
                key={term.id}
                data-term-id={term.id}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "0",
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
              >
                {/* Term Header (Clickable) */}
                <button
                  onClick={() =>
                    setExpandedTermId(
                      expandedTermId === term.id ? null : term.id
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(245, 166, 35, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "6px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "16px",
                          fontFamily: "'Bebas Neue', sans-serif",
                          color: "var(--white)",
                          letterSpacing: "0.5px",
                          fontWeight: 700,
                        }}
                      >
                        {term.term}
                      </h3>
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          padding: "4px 10px",
                          background:
                            term.category === "Security"
                              ? "rgba(239, 35, 60, 0.1)"
                              : term.category === "Crypto 101"
                              ? "rgba(6, 214, 160, 0.1)"
                              : "rgba(245, 166, 35, 0.1)",
                          color:
                            term.category === "Security"
                              ? "#EF233C"
                              : term.category === "Crypto 101"
                              ? "#06D6A0"
                              : "#F5A623",
                          borderRadius: "4px",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {term.category}
                      </span>
                    </div>

                    {/* Simple Definition (Preview) */}
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        fontFamily: "'Nunito', sans-serif",
                        color: "var(--muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {term.simpleDefinition}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <div
                    style={{
                      fontSize: "20px",
                      color: "var(--gold)",
                      transition: "transform 0.2s",
                      transform:
                        expandedTermId === term.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedTermId === term.id && (
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      padding: "16px 20px",
                      background: "rgba(255, 255, 255, 0.02)",
                    }}
                  >
                    {/* Advanced Definition */}
                    <div style={{ marginBottom: "16px" }}>
                      <h4
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "12px",
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          color: "var(--gold)",
                          textTransform: "uppercase",
                        }}
                      >
                        Advanced Definition
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          fontFamily: "'Nunito', sans-serif",
                          color: "var(--white)",
                          lineHeight: 1.6,
                        }}
                      >
                        {term.advancedDefinition}
                      </p>
                    </div>

                    {/* Example */}
                    {term.example && (
                      <div style={{ marginBottom: "16px" }}>
                        <h4
                          style={{
                            margin: "0 0 8px 0",
                            fontSize: "12px",
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            color: "var(--gold)",
                            textTransform: "uppercase",
                          }}
                        >
                          Example
                        </h4>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            fontFamily: "'Nunito', sans-serif",
                            color: "var(--muted)",
                            lineHeight: 1.6,
                            paddingLeft: "12px",
                            borderLeft: "3px solid var(--border)",
                          }}
                        >
                          {term.example}
                        </p>
                      </div>
                    )}

                    {/* SA Context */}
                    {term.saContext && (
                      <div style={{ marginBottom: "16px" }}>
                        <h4
                          style={{
                            margin: "0 0 8px 0",
                            fontSize: "12px",
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            color: "var(--gold)",
                            textTransform: "uppercase",
                          }}
                        >
                          South African Context
                        </h4>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            fontFamily: "'Nunito', sans-serif",
                            color: "var(--muted)",
                            lineHeight: 1.6,
                            paddingLeft: "12px",
                            borderLeft: "3px solid var(--green)",
                          }}
                        >
                          {term.saContext}
                        </p>
                      </div>
                    )}

                    {/* Related Terms */}
                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <div>
                        <h4
                          style={{
                            margin: "0 0 8px 0",
                            fontSize: "12px",
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            color: "var(--gold)",
                            textTransform: "uppercase",
                          }}
                        >
                          Related Terms
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            flexWrap: "wrap",
                          }}
                        >
                          {term.relatedTerms.map((relatedId) => (
                            <button
                              key={relatedId}
                              onClick={() => {
                                setSearchQuery(relatedId);
                                setSelectedCategory("All");
                              }}
                              style={{
                                padding: "6px 12px",
                                background: "rgba(245, 166, 35, 0.1)",
                                border: "1px solid rgba(245, 166, 35, 0.3)",
                                borderRadius: "4px",
                                color: "var(--gold)",
                                fontSize: "12px",
                                fontFamily: "'Nunito', sans-serif",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                fontWeight: 600,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "var(--gold)";
                                e.currentTarget.style.color = "var(--bg)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(245, 166, 35, 0.1)";
                                e.currentTarget.style.color = "var(--gold)";
                              }}
                            >
                              {relatedId}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          borderTop: "1px solid var(--border)",
          padding: "40px",
          textAlign: "center",
          color: "var(--muted)",
          fontSize: "13px",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <p style={{ margin: "0 0 12px 0" }}>
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

export default function GlossaryPage() {
  return (
    <Suspense
      fallback={
        <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
          <div style={{ padding: "60px 40px", textAlign: "center", color: "var(--muted)" }}>
            Loading glossary...
          </div>
        </main>
      }
    >
      <GlossaryContent />
    </Suspense>
  );
}
