import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/content/blog/articles";
import BlogFilter from "@/components/BlogFilter";

export const metadata: Metadata = {
  title: "SA Crypto Tax Guides — SatoshisAndRands",
  description: "Free South African crypto tax guides. CARF, CGT calculator, ITR12 filing, trader vs investor classification. SARS 2026/27 brackets.",
  openGraph: {
    title: "SA Crypto Tax Guides — SatoshisAndRands",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function BlogIndex() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--white)" }}>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, height: "var(--topnav-h)", background: "rgba(13,13,13,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", padding: "0 40px", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/satslogo.png" alt="SatoshisAndRands" width={32} height={32} style={{ borderRadius: "50%" }} priority />
          <span className="home-brand-text" style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 20, color: "var(--gold)", letterSpacing: "0.1em" }}>
            SATOSHIS & RANDS
          </span>
        </Link>
        <div className="nav-links" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/tax-tools" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>Tax Tools</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/market" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--muted)", textDecoration: "none", padding: "6px 16px" }}>Market</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--gold)", padding: "6px 16px" }}>Guides</span>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 40px 80px" }} className="market-content">
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 900, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            Free Guides
          </p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
            <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 38, letterSpacing: "0.04em", color: "var(--white)" }}>
              SA CRYPTO TAX GUIDES
            </h1>
            <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
              {articles.length} guides
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
            Plain-English guides for South African crypto holders. SARS 2026/27 brackets. No fluff.
          </p>
        </div>

        {/* Filterable article list */}
        <BlogFilter articles={sorted} />

        {/* Disclaimer */}
        <div style={{ marginTop: 40, padding: "16px 20px", background: "rgba(245,166,35,0.05)", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 10 }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)", lineHeight: 1.6 }}>
            💡 These guides are for general information only. They are not tax advice. Consult a registered tax practitioner before filing.
          </p>
        </div>
      </div>

      <footer className="site-footer" style={{ borderTop: "1px solid var(--border)", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 18, color: "var(--gold)", letterSpacing: "0.1em" }}>SATOSHIS & RANDS</span>
        <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>
          Not tax advice. Consult a registered tax practitioner. © 2026 SatoshisAndRands
        </span>
      </footer>
    </div>
  );
}
