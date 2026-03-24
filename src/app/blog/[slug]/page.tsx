import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles, getArticle } from "@/content/blog/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — SatoshisAndRands`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  CARF: "var(--red)",
  Filing: "var(--gold)",
  "Tax Basics": "var(--green)",
  CGT: "var(--gold)",
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const color = CATEGORY_COLORS[article.category] ?? "var(--gold)";
  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

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
          <Link href="/blog" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 800, color: "var(--gold)", textDecoration: "none", padding: "6px 16px" }}>Guides</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 40px 80px" }} className="market-content">
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 32 }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)", textDecoration: "none" }}>Guides</Link>
          <span style={{ color: "var(--border)", fontSize: 12 }}>›</span>
          <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>{article.category}</span>
        </div>

        {/* Article header */}
        <div style={{ marginBottom: 36 }}>
          <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color, background: `${color}18`, border: `1px solid ${color}33`, padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 16 }}>
            {article.category}
          </span>
          <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 36, letterSpacing: "0.04em", color: "var(--white)", lineHeight: 1.05, marginBottom: 16 }}>
            {article.title}
          </h1>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 15, fontWeight: 600, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>
            {article.excerpt}
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
              {new Date(article.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11, color: "var(--muted)" }}>
              {article.readTime} min read
            </span>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--border)", marginBottom: 36 }} />

        {/* Article body */}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div style={{ height: 1, background: "var(--border)", margin: "40px 0" }} />

        {/* Disclaimer */}
        <div style={{ padding: "16px 20px", background: "rgba(245,166,35,0.05)", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 10, marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 700, color: "var(--muted)", lineHeight: 1.6 }}>
            ⚠️ This guide is for general information only. It is not tax advice. Consult a registered tax practitioner before filing your ITR12.
          </p>
        </div>

        {/* More guides */}
        {others.length > 0 && (
          <div>
            <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 11, fontWeight: 900, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>More Guides</p>
            <div style={{ display: "grid", gap: 12 }}>
              {others.map((a) => {
                const c = CATEGORY_COLORS[a.category] ?? "var(--gold)";
                return (
                  <Link key={a.slug} href={`/blog/${a.slug}`} style={{ display: "block", background: "var(--card)", border: "1px solid var(--border)", borderLeft: `3px solid ${c}`, borderRadius: 10, padding: "14px 18px", textDecoration: "none" }}>
                    <p style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 17, letterSpacing: "0.04em", color: "var(--white)", marginBottom: 4 }}>{a.title}</p>
                    <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>{a.readTime} min read</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
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
