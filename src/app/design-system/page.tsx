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
      <section id="tokens" style={{ marginTop: 48 }}>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em" }}>Tokens</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12, marginTop: 16 }}>
          {[
            ["--bg", "#0D0D0D"], ["--surface", "#141414"], ["--card", "#1C1C1C"],
            ["--gold", "#F5A623"], ["--gold-hi", "#FFC04A"], ["--gold-lo", "#B8761A"],
            ["--green", "#06D6A0"], ["--red", "#EF233C"], ["--accent-blue", "#627EEA"],
            ["--accent-purple", "#8B5CF6"], ["--white", "#F5F0E8"], ["--muted", "#888888"],
          ].map(([name, hex]) => (
            <div key={name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: 12 }}>
              <div style={{ background: `var(${name})`, height: 48, borderRadius: 6, marginBottom: 8 }} />
              <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 11 }}>{name}</div>
              <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: "var(--muted)" }}>{hex}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="pattern" style={{ marginTop: 48 }}>Pattern — placeholder</section>
      <section id="hero" style={{ marginTop: 48 }}>Hero — placeholder</section>
      <section id="cards" style={{ marginTop: 48 }}>Tool cards — placeholder</section>
      <section id="nav" style={{ marginTop: 48 }}>Primary nav — placeholder</section>
    </main>
  );
}
