import Link from "next/link";
import Image from "next/image";

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

const upcoming = [
  { icon: "📈", label: "Live Market Data", desc: "BTC/ZAR, ETH/ZAR, top movers — real time" },
  { icon: "📰", label: "SA Crypto News", desc: "Curated news for South African investors" },
  { icon: "🎓", label: "Education Hub", desc: "Crypto 101, SARS guides, beginner to advanced" },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--white)" }}>
      {/* Top Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "var(--topnav-h)",
          background: "rgba(13,13,13,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/satslogo.png" alt="SatoshisAndRands" width={32} height={32} style={{ borderRadius: "50%" }} priority />
          <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 20, color: "var(--gold)", letterSpacing: "0.1em" }}>
            SATOSHIS & RANDS
          </span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link
            href="/tax-tools/cgt"
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
          >
            Tax Tools
          </Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <a
            href="https://instagram.com/satoshisandrands"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
          >
            Instagram
          </a>
          <a
            href="https://x.com/satsandrands"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
          >
            X
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "100px 40px 80px",
          maxWidth: 960,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <Image
            src="/satslogo.png"
            alt="SatoshisAndRands"
            width={120}
            height={120}
            style={{ borderRadius: "50%", boxShadow: "0 0 40px rgba(245,166,35,0.2)" }}
            priority
          />
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(245,166,35,0.1)",
            border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: 20,
            padding: "5px 16px",
            marginBottom: 28,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
          <span
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 12,
              fontWeight: 900,
              color: "var(--gold)",
              letterSpacing: "0.1em",
            }}
          >
            SOUTH AFRICA&apos;S CRYPTO EDUCATION PLATFORM
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: "clamp(52px, 8vw, 88px)",
            letterSpacing: "0.03em",
            lineHeight: 0.95,
            color: "var(--white)",
            marginBottom: 24,
          }}
        >
          CRYPTO IN RANDS.{" "}
          <span style={{ color: "var(--gold)" }}>TAX IN PLAIN ENGLISH.</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: 18,
            fontWeight: 600,
            color: "var(--muted)",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Free tools, real numbers, no jargon. Built for South African crypto holders who want to understand SARS, CGT, and CARF — without the confusion.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/tax-tools/cgt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--gold)",
              color: "#000",
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 14,
              fontWeight: 900,
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Try the Tax Tools →
          </Link>
          <a
            href="https://instagram.com/satoshisandrands"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--white)",
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 14,
              fontWeight: 900,
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              border: "1px solid var(--border)",
            }}
          >
            Follow @SatoshisAndRands
          </a>
        </div>

        {/* Trust strip */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 28,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["Free — no signup", "No data stored", "SARS 2026/27 brackets", "Built for Mzansi"].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: 12,
                fontWeight: 800,
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ color: "var(--green)" }}>✓</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Tax Tools section */}
      <section
        style={{
          padding: "0 40px 80px",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 36 }}>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 11,
              fontWeight: 900,
              color: "var(--gold)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Free Tools — Live Now
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: 38,
              letterSpacing: "0.04em",
              color: "var(--white)",
            }}
          >
            CRYPTO TAX TOOLS
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              style={{
                display: "block",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderLeft: `3px solid ${t.color}`,
                borderRadius: 12,
                padding: 24,
                textDecoration: "none",
                transition: "border-color 200ms, background 200ms",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{t.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: 22,
                  letterSpacing: "0.05em",
                  color: "var(--white)",
                  marginBottom: 8,
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {t.desc}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 12,
                  fontWeight: 900,
                  color: t.color,
                  letterSpacing: "0.04em",
                }}
              >
                Open tool →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>

      {/* Coming soon section */}
      <section
        style={{
          padding: "60px 40px 80px",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 36 }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 11,
              fontWeight: 900,
              color: "var(--muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "4px 14px",
              marginBottom: 12,
            }}
          >
            Coming Soon
          </span>
          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: 38,
              letterSpacing: "0.04em",
              color: "var(--white)",
            }}
          >
            THE FULL PLATFORM
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {upcoming.map((u) => (
            <div
              key={u.label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                opacity: 0.6,
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 12 }}>{u.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 15,
                  fontWeight: 900,
                  color: "var(--white)",
                  marginBottom: 6,
                }}
              >
                {u.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--muted)",
                }}
              >
                {u.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "28px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: 18,
            color: "var(--gold)",
            letterSpacing: "0.1em",
          }}
        >
          SATOSHIS & RANDS
        </span>
        <span
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--muted)",
          }}
        >
          Not financial or tax advice. Consult a registered tax practitioner. © 2026 SatoshisAndRands
        </span>
      </footer>
    </div>
  );
}
