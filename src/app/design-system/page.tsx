export const metadata = { robots: { index: false, follow: false } };

export default function DesignSystemPreview() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--white)", minHeight: "100vh", padding: "48px 32px", fontFamily: "var(--font-nunito)" }}>
      <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: 48, letterSpacing: "0.02em" }}>
        Stitch Redesign — Design System Preview
      </h1>
      <p style={{ color: "var(--muted)", marginTop: 8 }}>
        Hidden route. Compare against /tmp/stitch-satsxrands/screen.png.
      </p>
      <section id="tokens" style={{ marginTop: 48 }}>Tokens — placeholder</section>
      <section id="pattern" style={{ marginTop: 48 }}>Pattern — placeholder</section>
      <section id="hero" style={{ marginTop: 48 }}>Hero — placeholder</section>
      <section id="cards" style={{ marginTop: 48 }}>Tool cards — placeholder</section>
      <section id="nav" style={{ marginTop: 48 }}>Primary nav — placeholder</section>
    </main>
  );
}
