"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tools = [
  {
    href: "/tax-tools/cgt",
    icon: "📊",
    label: "CGT Calculator",
    sub: "Capital gains tax",
  },
  {
    href: "/tax-tools/classifier",
    icon: "⚖️",
    label: "Trader Classifier",
    sub: "Investor vs trader",
  },
  {
    href: "/tax-tools/carf",
    icon: "🔍",
    label: "CARF Checker",
    sub: "Compliance check",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "var(--sidebar-w)",
        flexShrink: 0,
        borderRight: "1px solid var(--border)",
        background: "var(--surface)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header — same height as breadcrumb so borders align */}
      <div
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: 11,
            fontWeight: 900,
            color: "var(--muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Tax Tools
        </span>
      </div>

      {/* Tool list */}
      <nav style={{ padding: "12px 0", flex: 1 }}>
        {tools.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 20px",
                textDecoration: "none",
                background: active ? "rgba(245,166,35,0.08)" : "transparent",
                borderLeft: active
                  ? "3px solid var(--gold)"
                  : "3px solid transparent",
                transition: "background 150ms",
              }}
            >
              <span style={{ fontSize: 16 }}>{t.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 13,
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
                    lineHeight: 1.2,
                    marginTop: 2,
                  }}
                >
                  {t.sub}
                </div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom disclaimer */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted)",
            lineHeight: 1.5,
          }}
        >
          Not tax advice. Consult a registered tax practitioner.
        </p>
      </div>
    </aside>
  );
}
