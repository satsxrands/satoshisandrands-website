import { NdebelePattern } from "@/components/brand/NdebelePattern";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { HeroPanel } from "@/components/brand/HeroPanel";
import { ToolCard } from "@/components/brand/ToolCard";
import { CgtIcon, ClassifierIcon, CarfIcon } from "@/components/TaxToolIcons";

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
      <section id="pattern" style={{ marginTop: 48 }}>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em" }}>Ndebele Pattern</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 16 }}>
          {[0.08, 0.12, 0.20].map((op) => (
            <div key={op} style={{ position: "relative", height: 200, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
              <NdebelePattern opacity={op} />
              <div style={{ position: "absolute", bottom: 8, left: 12, fontFamily: "var(--font-space-mono)", fontSize: 11, color: "var(--muted)" }}>opacity={op}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="wordmark" style={{ marginTop: 48 }}>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em" }}>Wordmark</h2>
        <div style={{ display: "flex", gap: 48, alignItems: "flex-end", marginTop: 16 }}>
          <BrandWordmark size="sm" />
          <BrandWordmark size="md" />
          <BrandWordmark size="xl" />
          <BrandWordmark size="md" stacked={false} />
        </div>
      </section>
      <section id="hero" style={{ marginTop: 48 }}>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em", marginBottom: 16 }}>Hero Panel</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <HeroPanel
            left={<BrandWordmark size="xl" />}
            right={
              <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-card)", padding: 32, boxShadow: "var(--shadow-card)" }}>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: 32, letterSpacing: "0.02em" }}>CGT CALCULATOR</div>
                <div style={{ color: "var(--muted)", marginTop: 8, fontSize: 13 }}>Calculate your South African CGT in seconds.</div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, marginTop: 16, color: "var(--muted)", fontFamily: "var(--font-space-mono)", fontSize: 12 }}>
                  Enter Gain (ZAR)
                </div>
                <button style={{ background: "var(--gold)", color: "var(--bg)", border: "none", borderRadius: "var(--radius-pill)", padding: "12px 24px", marginTop: 16, fontFamily: "var(--font-bebas)", fontSize: 16, letterSpacing: "0.08em", cursor: "pointer" }}>
                  CALCULATE NOW
                </button>
              </div>
            }
          />
        </div>
      </section>
      <section id="cards" style={{ marginTop: 48 }}>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em", marginBottom: 16 }}>Tool Cards</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          <ToolCard href="/tax-tools/classifier" icon={<ClassifierIcon size={32} />} accent="var(--gold)" title="TRADER CLASSIFIER" desc="5-question quiz: SARS investor vs trader." />
          <ToolCard href="/tax-tools/carf" icon={<CarfIcon size={32} />} accent="var(--red)" title="CARD CHECKER" desc="CARF compliance risk check." />
          <ToolCard href="/market" icon={<CgtIcon size={32} />} accent="var(--accent-blue)" title="LIVE MARKET DATA" desc="BTC/ZAR, ETH/ZAR, SOL — live." />
          <ToolCard href="/news" icon={<CgtIcon size={32} />} accent="var(--green)" title="SA CRYPTO NEWS" desc="Sentiment-scored headlines." />
        </div>
      </section>
      <section id="nav" style={{ marginTop: 48 }}>Primary nav — placeholder</section>
    </main>
  );
}
