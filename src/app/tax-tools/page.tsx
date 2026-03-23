import Link from "next/link";

const tools = [
  {
    href: "/tax-tools/cgt",
    icon: "📊",
    color: "var(--gold)",
    title: "CGT Calculator",
    desc: "Calculate your capital gains tax on crypto using SARS 2026/27 brackets. Investor and trader paths.",
  },
  {
    href: "/tax-tools/classifier",
    icon: "⚖️",
    color: "var(--green)",
    title: "Trader Classifier",
    desc: "5-question quiz to determine if SARS will treat you as an investor (CGT) or a trader (income tax).",
  },
  {
    href: "/tax-tools/carf",
    icon: "🔍",
    color: "var(--red)",
    title: "CARF Checker",
    desc: "Check your CARF compliance risk. SA exchanges report to SARS — find out where you stand.",
  },
];

export default function TaxToolsIndex() {
  return (
    <div className="tool-page" style={{ padding: "40px", maxWidth: 720, width: "100%" }}>
      <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: 16, marginBottom: 36 }}>
        <h1
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: 36,
            color: "var(--white)",
            letterSpacing: "0.05em",
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          TAX TOOLS
        </h1>
        <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
          Free tools for South African crypto holders. No signup, no data stored.
        </p>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 20,
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderLeft: `3px solid ${t.color}`,
              borderRadius: 12,
              padding: "20px 24px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{t.icon}</span>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: 22,
                  letterSpacing: "0.05em",
                  color: "var(--white)",
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                {t.title}
              </h3>
              <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 600, color: "var(--muted)", lineHeight: 1.5, marginBottom: 10 }}>
                {t.desc}
              </p>
              <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 900, color: t.color, letterSpacing: "0.04em" }}>
                Open tool →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
