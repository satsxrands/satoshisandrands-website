"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const tools = [
  { label: "CGT Calculator", href: "/tax-tools/cgt" },
  { label: "Trader Classifier", href: "/tax-tools/classifier" },
  { label: "CARF Checker", href: "/tax-tools/carf" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "var(--topnav-h)",
        background: "rgba(13,13,13,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: 0,
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          whiteSpace: "nowrap",
          marginRight: 32,
        }}
      >
        <Image
          src="/satslogo.png"
          alt="SatoshisAndRands"
          width={36}
          height={36}
          style={{ borderRadius: "50%" }}
          priority
        />
        <span style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: 18,
          color: "var(--gold)",
          letterSpacing: "0.1em",
        }}>
          SATOSHIS & RANDS
        </span>
      </Link>

      <div style={{ display: "flex", gap: 4, alignItems: "center", flex: 1 }}>
        {tools.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: 13,
                fontWeight: 800,
                color: active ? "var(--gold)" : "var(--muted)",
                padding: "6px 16px",
                borderRadius: 8,
                cursor: "pointer",
                textDecoration: "none",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                position: "relative",
                transition: "color 200ms",
              }}
            >
              {t.label}
              {active && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: 16,
                    right: 16,
                    height: 2,
                    background: "var(--gold)",
                    borderRadius: 1,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <span
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontSize: 11,
          fontWeight: 800,
          color: "var(--gold)",
          background: "rgba(245,166,35,0.12)",
          border: "1px solid rgba(245,166,35,0.3)",
          borderRadius: 20,
          padding: "3px 12px",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
        }}
      >
        FREE · NO SIGNUP
      </span>
    </nav>
  );
}
