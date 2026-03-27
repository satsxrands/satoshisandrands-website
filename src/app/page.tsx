import Link from "next/link";
import Image from "next/image";
import { CgtIcon, ClassifierIcon, CarfIcon } from "@/components/TaxToolIcons";

const tools = [
  {
    href: "/tax-tools/cgt",
    icon: <CgtIcon size={36} />,
    color: "var(--gold)",
    title: "CGT Calculator",
    desc: "Calculate your capital gains tax on crypto using SARS 2026/27 brackets. Investor and trader paths.",
  },
  {
    href: "/tax-tools/classifier",
    icon: <ClassifierIcon size={36} />,
    color: "var(--green)",
    title: "Trader Classifier",
    desc: "5-question quiz to determine if SARS will treat you as an investor (CGT) or a trader (income tax).",
  },
  {
    href: "/tax-tools/carf",
    icon: <CarfIcon size={36} />,
    color: "var(--red)",
    title: "CARF Checker",
    desc: "Check your CARF compliance risk. SA exchanges report to SARS — find out where you stand.",
  },
  {
    href: "/market",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4,22 10,14 16,18 24,8 28,12" stroke="#627EEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="4,22 10,14 16,18 24,8 28,12 28,28 4,28" stroke="none" fill="#627EEA" fillOpacity="0.12" />
        <circle cx="28" cy="12" r="2.5" fill="#627EEA" />
      </svg>
    ),
    color: "#627EEA",
    title: "Live Market Data",
    desc: "BTC/ZAR, ETH/ZAR, SOL, XRP, BNB — live prices refreshed every 60 seconds via CoinMarketCap.",
  },
  {
    href: "/news",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="3" fill="#06D6A0" fillOpacity="0.12" stroke="#06D6A0" strokeWidth="1.5" />
        <line x1="9" y1="12" x2="23" y2="12" stroke="#06D6A0" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="16" x2="23" y2="16" stroke="#06D6A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="9" y1="20" x2="17" y2="20" stroke="#06D6A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
        <circle cx="24" cy="8" r="4" fill="#1C1C1C" />
        <circle cx="24" cy="8" r="4" fill="#06D6A0" fillOpacity="0.25" stroke="#06D6A0" strokeWidth="1.2" />
        <circle cx="24" cy="8" r="1.8" fill="#06D6A0" />
      </svg>
    ),
    color: "var(--green)",
    title: "SA Crypto News",
    desc: "Live crypto news with SA relevance. Sentiment-scored headlines updated every 15 minutes.",
  },
];

const upcoming = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4,13 L16,7 L28,13 L16,19 Z" fill="#888" fillOpacity="0.5" stroke="#888" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M9,16 L9,23 C9,23 12,26 16,26 C20,26 23,23 23,23 L23,16" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="28" y1="13" x2="28" y2="21" stroke="#888" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    label: "Education Hub",
    desc: "Crypto 101, SARS guides, beginner to advanced",
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--white)" }}>
      {/* Top Nav */}
      <nav
        className="home-nav"
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
          <span className="home-brand-text" style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 20, color: "var(--gold)", letterSpacing: "0.1em" }}>
            SATOSHIS & RANDS
          </span>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link
            href="/tax-tools"
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
          <Link
            href="/news"
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
          >
            News
          </Link>
          <Link
            href="/market"
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
          >
            Market
          </Link>
          <span className="nav-secondary" style={{ color: "var(--border)" }}>|</span>
          <Link className="nav-secondary" href="/blog" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>
            Guides
          </Link>
          <span className="nav-secondary" style={{ color: "var(--border)" }}>|</span>
          <Link className="nav-secondary" href="/news" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>
            News
          </Link>
          <div className="nav-social" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <span className="nav-secondary" style={{ color: "var(--border)" }}>|</span>
            <a href="https://instagram.com/satoshisandrands" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "var(--muted)", textDecoration: "none", padding: "6px 8px", display: "flex", alignItems: "center" }}>
              <span className="nav-social-label" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800 }}>Instagram</span>
              <svg className="nav-social-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://x.com/satsandrands" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: "var(--muted)", textDecoration: "none", padding: "6px 8px", display: "flex", alignItems: "center" }}>
              <span className="nav-social-label" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800 }}>X</span>
              <svg className="nav-social-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@satsxrands" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: "var(--muted)", textDecoration: "none", padding: "6px 8px", display: "flex", alignItems: "center" }}>
              <span className="nav-social-label" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800 }}>TikTok</span>
              <svg className="nav-social-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578408320588" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "var(--muted)", textDecoration: "none", padding: "6px 8px", display: "flex", alignItems: "center" }}>
              <span className="nav-social-label" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800 }}>Facebook</span>
              <svg className="nav-social-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="hero-section"
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
          className="eyebrow-badge"
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
            Follow on Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61578408320588"
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
            Follow on Facebook
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
            TOOLS & MARKET DATA
          </h2>
        </div>

        <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
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
              <div style={{ marginBottom: 14 }}>{t.icon}</div>
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

        <div className="upcoming-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
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
              <div style={{ marginBottom: 12 }}>{u.icon}</div>
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
        className="site-footer"
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
