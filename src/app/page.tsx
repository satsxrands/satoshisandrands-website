import Link from "next/link";
import Image from "next/image";
import { NdebelePattern } from "@/components/brand/NdebelePattern";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { ToolCard } from "@/components/brand/ToolCard";
import { homepageTools } from "@/lib/homepage-tools";

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

      {/* Hero — Stitch v2 */}
      <section className="v2-hero" style={{ position: "relative", overflow: "hidden", background: "var(--bg)" }}>
        <NdebelePattern opacity={0.7} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", maxWidth: 1200, margin: "0 auto", padding: "96px 32px 80px" }}>
          <div>
            <BrandWordmark size="hero" />
            <p style={{ marginTop: 24, color: "var(--muted)", fontSize: 18, lineHeight: 1.5, maxWidth: 420, fontFamily: "var(--font-nunito)" }}>
              South Africa&apos;s crypto tax tools and education hub. Built for SARS — in rands, plain English, free.
            </p>
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-card)", padding: 32, boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: 32, letterSpacing: "0.02em", color: "var(--white)" }}>CGT CALCULATOR</div>
            <div style={{ color: "var(--muted)", marginTop: 8, fontSize: 13 }}>Calculate your South African CGT in seconds.</div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, marginTop: 16, color: "var(--muted)", fontFamily: "var(--font-space-mono)", fontSize: 12 }}>
              Enter Gain (ZAR)
            </div>
            <Link href="/tax-tools/cgt" style={{ display: "inline-block", background: "var(--gold)", color: "var(--bg)", textDecoration: "none", borderRadius: "var(--radius-pill)", padding: "12px 24px", marginTop: 16, fontFamily: "var(--font-bebas)", fontSize: 16, letterSpacing: "0.08em" }}>
              CALCULATE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Tools — Stitch v2 */}
      <section className="v2-tools" style={{ padding: "64px 32px", background: "var(--surface)" }}>
        <SectionHeader eyebrow="Tools" title="TOOLS & MARKET DATA" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 1200, margin: "0 auto" }}>
          {homepageTools.map((t) => (
            <ToolCard key={t.href} href={t.href} icon={t.icon} accent={t.accent} title={t.title} desc={t.desc} />
          ))}
        </div>
      </section>

      {/* Full Platform — Stitch v2 */}
      <section className="v2-platform" style={{ padding: "64px 32px", background: "var(--bg)" }}>
        <SectionHeader eyebrow="Platform" title="THE FULL PLATFORM" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", maxWidth: 1200, margin: "24px auto 0" }}>
          <div><BrandWordmark size="xl" /></div>
          <Link href="/learn" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-card)", padding: 32, boxShadow: "var(--shadow-card)" }}>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em", color: "var(--white)" }}>EDUCATION HUB</div>
              <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 12, lineHeight: 1.5 }}>Crypto 101, SARS guides, beginner to advanced.</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Classifier Promo Banner — preserved secondary lane */}
      <section
        style={{
          padding: "40px 40px 80px",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <Link
          href="/tax-tools/classifier"
          style={{
            display: "block",
            background: "rgba(6, 214, 160, 0.08)",
            border: "1px solid rgba(6, 214, 160, 0.25)",
            borderRadius: 12,
            padding: "24px 28px",
            textDecoration: "none",
            transition: "background 200ms, border-color 200ms",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: 20,
                  letterSpacing: "0.04em",
                  color: "var(--green)",
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                NOT SURE IF YOU&apos;RE AN INVESTOR OR TRADER?
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--muted)",
                  lineHeight: 1.5,
                }}
              >
                Take a 2-minute quiz to determine your SARS classification before calculating tax. This answer changes everything.
              </p>
            </div>
            <span
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: 12,
                fontWeight: 900,
                color: "var(--green)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              START QUIZ →
            </span>
          </div>
        </Link>
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
