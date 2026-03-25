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
          <span style={{ fontSize: 18 }}>🏠</span>
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
