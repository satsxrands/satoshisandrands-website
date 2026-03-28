"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgtIcon, ClassifierIcon, CarfIcon } from "@/components/TaxToolIcons";

const tools = [
  { href: "/tax-tools/cgt", icon: <CgtIcon size={22} />, label: "CGT Calculator", sub: "Capital gains tax" },
  { href: "/tax-tools/classifier", icon: <ClassifierIcon size={22} />, label: "Trader Classifier", sub: "Investor vs trader" },
  { href: "/tax-tools/carf", icon: <CarfIcon size={22} />, label: "CARF Checker", sub: "Compliance check" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 300,
          }}
        />
      )}

      {/* Slide-up drawer */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 400,
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderRadius: "20px 20px 0 0",
          padding: "20px 0 32px",
          transform: open ? "translateY(0)" : "translateY(110%)",
          transition: "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: "var(--border)" }} />
        </div>

        {/* Home link */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 24px",
            textDecoration: "none",
            borderBottom: "1px solid var(--border)",
            marginBottom: 8,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4,14 L16,4 L28,14 L28,28 L20,28 L20,20 L12,20 L12,28 L4,28 Z" fill="#888" fillOpacity="0.15" stroke="#888" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
          <span
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 15,
              fontWeight: 800,
              color: "var(--muted)",
            }}
          >
            Home
          </span>
        </Link>

        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: 10,
            fontWeight: 900,
            color: "var(--muted)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "8px 24px 4px",
          }}
        >
          Tax Tools
        </p>

        {/* Tool links */}
        {tools.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 24px",
                textDecoration: "none",
                background: active ? "rgba(245,166,35,0.08)" : "transparent",
                borderLeft: active ? "3px solid var(--gold)" : "3px solid transparent",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>{t.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 14,
                    fontWeight: 800,
                    color: active ? "var(--white)" : "var(--muted)",
                    lineHeight: 1.2,
                  }}
                >
                  {t.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--muted)",
                    marginTop: 2,
                  }}
                >
                  {t.sub}
                </div>
              </div>
              {active && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 10,
                    fontWeight: 900,
                    color: "var(--gold)",
                    letterSpacing: "0.08em",
                  }}
                >
                  CURRENT
                </span>
              )}
            </Link>
          );
        })}

        {/* Section label — More */}
        <p
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: 10,
            fontWeight: 900,
            color: "var(--muted)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "12px 24px 4px",
            borderTop: "1px solid var(--border)",
            marginTop: 8,
          }}
        >
          More
        </p>

        {/* Guides */}
        <Link
          href="/blog"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 24px",
            textDecoration: "none",
            background: pathname === "/blog" || pathname.startsWith("/blog/") ? "rgba(245,166,35,0.08)" : "transparent",
            borderLeft: pathname === "/blog" || pathname.startsWith("/blog/") ? "3px solid var(--gold)" : "3px solid transparent",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="3" width="16" height="18" rx="2" stroke="#888" strokeWidth="1.6" fill="none"/>
              <line x1="8" y1="8" x2="16" y2="8" stroke="#888" strokeWidth="1.6" strokeLinecap="round"/>
              <line x1="8" y1="12" x2="16" y2="12" stroke="#888" strokeWidth="1.6" strokeLinecap="round"/>
              <line x1="8" y1="16" x2="12" y2="16" stroke="#888" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 800, color: pathname.startsWith("/blog") ? "var(--white)" : "var(--muted)", lineHeight: 1.2 }}>
              Guides
            </div>
            <div style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 600, color: "var(--muted)", marginTop: 2 }}>
              Tax education
            </div>
          </div>
        </Link>

        {/* News */}
        <Link
          href="/news"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 24px",
            textDecoration: "none",
            background: pathname === "/news" ? "rgba(245,166,35,0.08)" : "transparent",
            borderLeft: pathname === "/news" ? "3px solid var(--gold)" : "3px solid transparent",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#888" strokeWidth="1.6" fill="none"/>
              <line x1="3" y1="9" x2="21" y2="9" stroke="#888" strokeWidth="1.6"/>
              <line x1="7" y1="13" x2="11" y2="13" stroke="#888" strokeWidth="1.6" strokeLinecap="round"/>
              <line x1="7" y1="16" x2="14" y2="16" stroke="#888" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 800, color: pathname === "/news" ? "var(--white)" : "var(--muted)", lineHeight: 1.2 }}>
              News
            </div>
            <div style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 600, color: "var(--muted)", marginTop: 2 }}>
              Crypto + sentiment
            </div>
          </div>
        </Link>
      </div>

      {/* Floating burger button — mobile only */}
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 20,
          zIndex: 500,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: open ? "var(--border)" : "var(--gold)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          transition: "background 200ms",
          flexDirection: "column",
          gap: open ? 0 : 5,
        }}
        aria-label="Menu"
      >
        {open ? (
          <span style={{ fontSize: 20, color: "var(--white)", lineHeight: 1 }}>✕</span>
        ) : (
          <>
            <span style={{ display: "block", width: 20, height: 2, background: "#000", borderRadius: 1 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "#000", borderRadius: 1 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "#000", borderRadius: 1 }} />
          </>
        )}
      </button>
    </>
  );
}
