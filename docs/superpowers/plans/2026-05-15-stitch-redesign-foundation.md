# SatoshisAndRands Stitch Redesign — Foundation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Land the design-system foundation (tokens + Ndebele pattern asset + reusable component library) needed to rebuild the SatsxRands homepage to match the Stitch mockup at `/tmp/stitch-satsxrands/screen.png`, without yet touching the live homepage.

**Architecture:** Build all new pieces behind a hidden `/design-system` preview route so visual review can happen against the mockup before any production page changes. Tokens live in `globals.css` as CSS variables (extending the existing set). Components live in `src/components/brand/*` and consume only tokens — never raw hex. The Ndebele pattern ships as a single SVG that recolors via `currentColor` + `--gold`. Homepage migration is a separate plan that consumes this library.

**Tech Stack:** Next.js 16 app-router, React 19, Tailwind v4 (already wired), CSS variables for tokens, hand-authored SVG for the Ndebele pattern, existing Google Fonts (Bebas Neue / Space Mono / Nunito).

**Reference asset:** `/tmp/stitch-satsxrands/screen.png` — keep open in a viewer while building.

---

## File Structure

**Create:**
- `src/app/design-system/page.tsx` — preview route rendering every token + component side-by-side with mockup notes. Not linked from production nav.
- `src/components/brand/NdebelePattern.tsx` — SVG component, props `{ opacity?: number; accent?: string }`.
- `src/components/brand/HeroPanel.tsx` — full-bleed hero wrapper with pattern backdrop, brand wordmark slot (left), `children` slot (right, intended for the inline CGT card).
- `src/components/brand/ToolCard.tsx` — the new tool card with top accent bar. Props `{ href; icon; accent; title; desc }`.
- `src/components/brand/SectionHeader.tsx` — eyebrow + heading pair used by "TOOLS & MARKET DATA" and "THE FULL PLATFORM".
- `src/components/brand/BrandWordmark.tsx` — the stacked "SATOSHIS / & RANDS" lockup used in hero + footer.
- `src/components/brand/PrimaryNav.tsx` — the new top nav (Home / News / Market / Tools / Education + social icons right). Drop-in replacement candidate, but only mounted in `/design-system` for now.

**Modify:**
- `src/app/globals.css:3-15` — extend `:root` token block with new tokens (accent scales, pattern opacity, motion). Existing tokens stay intact.

**Test:**
- Visual verification on `/design-system` against `/tmp/stitch-satsxrands/screen.png`. No Jest/RTL tests — this is presentational scaffolding.
- After each component, run `npm run build` to catch type / import errors.

---

### Task 1: Branch + design-system preview route skeleton

**Files:**
- Create: `src/app/design-system/page.tsx`

- [ ] **Step 1: Create branch**

```bash
cd /Users/base/Projects/SatsxRands/website
git checkout -b redesign/stitch-foundation
```

- [ ] **Step 2: Create the preview route**

```tsx
// src/app/design-system/page.tsx
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
```

- [ ] **Step 3: Run dev server + verify**

Run: `npm run dev`
Expected: visit `http://localhost:3000/design-system` and see all 5 section headings on dark bg.

- [ ] **Step 4: Commit**

```bash
git add src/app/design-system/page.tsx
git commit -m "feat(redesign): scaffold /design-system preview route"
```

---

### Task 2: Extend token set in globals.css

**Files:**
- Modify: `src/app/globals.css:3-15`

- [ ] **Step 1: Add new tokens directly below the existing `:root` block**

Locate the `:root { ... }` block (lines ~3-15) and append these new variables inside it, just before the closing brace:

```css
  /* Stitch redesign — added 2026-05-15 */
  --gold-hi: #FFC04A;
  --gold-lo: #B8761A;
  --accent-blue: #627EEA;
  --accent-purple: #8B5CF6;
  --card-border: rgba(245, 166, 35, 0.18);
  --card-border-hover: rgba(245, 166, 35, 0.45);
  --pattern-opacity: 0.12;
  --radius-card: 12px;
  --radius-pill: 999px;
  --shadow-card: 0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.35);
  --motion-fast: 140ms;
  --motion-base: 220ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
```

- [ ] **Step 2: Render a token swatch grid in the preview**

Replace the `#tokens` section in `src/app/design-system/page.tsx` with:

```tsx
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
```

- [ ] **Step 3: Verify**

Reload `/design-system`. Expected: 12 swatches in a responsive grid, all colors rendering.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/design-system/page.tsx
git commit -m "feat(redesign): extend token set with gold scale + motion + radius"
```

---

### Task 3: Ndebele pattern SVG component

**Files:**
- Create: `src/components/brand/NdebelePattern.tsx`

- [ ] **Step 1: Author the pattern component**

Create `src/components/brand/NdebelePattern.tsx`:

```tsx
type Props = {
  opacity?: number;
  accent?: string;
};

export function NdebelePattern({ opacity = 0.12, accent = "var(--gold)" }: Props) {
  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="ndebele-tile" x="0" y="0" width="96" height="96" patternUnits="userSpaceOnUse">
          {/* Stacked Ndebele-inspired geometric motif. Triangles + chevrons + step blocks. */}
          <rect width="96" height="96" fill="transparent" />
          <path d="M0 0 L48 24 L96 0 L96 12 L48 36 L0 12 Z" fill={accent} />
          <path d="M0 24 L24 36 L48 24 L72 36 L96 24 L96 30 L72 42 L48 30 L24 42 L0 30 Z" fill={accent} />
          <rect x="12" y="48" width="12" height="12" fill={accent} />
          <rect x="36" y="48" width="12" height="12" fill={accent} />
          <rect x="60" y="48" width="12" height="12" fill={accent} />
          <rect x="84" y="48" width="12" height="12" fill={accent} />
          <rect x="0" y="48" width="12" height="12" fill={accent} />
          <path d="M0 72 L12 84 L24 72 L36 84 L48 72 L60 84 L72 72 L84 84 L96 72 L96 78 L84 90 L72 78 L60 90 L48 78 L36 90 L24 78 L12 90 L0 78 Z" fill={accent} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ndebele-tile)" />
    </svg>
  );
}
```

- [ ] **Step 2: Preview at three opacities**

Replace the `#pattern` section in `design-system/page.tsx`:

```tsx
import { NdebelePattern } from "@/components/brand/NdebelePattern";
// ...
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
```

- [ ] **Step 3: Verify against mockup**

Reload `/design-system`. Compare middle tile (opacity=0.12) against the mockup's hero background. Expected: similar density and visual weight. If too dense, drop `--pattern-opacity` token default to 0.10.

- [ ] **Step 4: Commit**

```bash
git add src/components/brand/NdebelePattern.tsx src/app/design-system/page.tsx
git commit -m "feat(redesign): Ndebele SVG pattern component"
```

---

### Task 4: BrandWordmark component

**Files:**
- Create: `src/components/brand/BrandWordmark.tsx`

- [ ] **Step 1: Author component**

```tsx
type Props = {
  size?: "sm" | "md" | "xl";
  stacked?: boolean;
};

const SIZE_PX = { sm: 24, md: 48, xl: 96 } as const;

export function BrandWordmark({ size = "xl", stacked = true }: Props) {
  const px = SIZE_PX[size];
  return (
    <div style={{
      fontFamily: "var(--font-bebas)",
      color: "var(--white)",
      lineHeight: 0.9,
      letterSpacing: "0.01em",
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      gap: stacked ? 0 : 12,
    }}>
      <span style={{ fontSize: px }}>SATOSHIS</span>
      <span style={{ fontSize: px, color: "var(--gold)" }}>{stacked ? "& RANDS" : "& RANDS"}</span>
    </div>
  );
}
```

- [ ] **Step 2: Preview at three sizes**

Add to `design-system/page.tsx` (replace `#hero` placeholder for now with a wordmark row):

```tsx
import { BrandWordmark } from "@/components/brand/BrandWordmark";
// ...
<section id="wordmark" style={{ marginTop: 48 }}>
  <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em" }}>Wordmark</h2>
  <div style={{ display: "flex", gap: 48, alignItems: "flex-end", marginTop: 16 }}>
    <BrandWordmark size="sm" />
    <BrandWordmark size="md" />
    <BrandWordmark size="xl" />
    <BrandWordmark size="md" stacked={false} />
  </div>
</section>
```

- [ ] **Step 3: Verify**

Reload. Expected: stacked "SATOSHIS" white over "& RANDS" gold, at 24/48/96px + one horizontal variant.

- [ ] **Step 4: Commit**

```bash
git add src/components/brand/BrandWordmark.tsx src/app/design-system/page.tsx
git commit -m "feat(redesign): BrandWordmark stacked lockup"
```

---

### Task 5: HeroPanel with pattern backdrop

**Files:**
- Create: `src/components/brand/HeroPanel.tsx`

- [ ] **Step 1: Author component**

```tsx
import type { ReactNode } from "react";
import { NdebelePattern } from "./NdebelePattern";

type Props = {
  left: ReactNode;
  right: ReactNode;
};

export function HeroPanel({ left, right }: Props) {
  return (
    <section style={{
      position: "relative",
      background: "var(--bg)",
      overflow: "hidden",
      padding: "96px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <NdebelePattern opacity={0.12} />
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}>
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Preview with wordmark left + placeholder card right**

Replace the `#hero` section in `design-system/page.tsx`:

```tsx
import { HeroPanel } from "@/components/brand/HeroPanel";
// ...
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
```

- [ ] **Step 3: Verify against mockup**

Reload. Expected: hero matches mockup composition — wordmark left, dark card with CGT calc right, Ndebele pattern subtly behind. Pattern should be visible but not competing.

- [ ] **Step 4: Commit**

```bash
git add src/components/brand/HeroPanel.tsx src/app/design-system/page.tsx
git commit -m "feat(redesign): HeroPanel with pattern backdrop + 2-col layout"
```

---

### Task 6: ToolCard component

**Files:**
- Create: `src/components/brand/ToolCard.tsx`

- [ ] **Step 1: Author component**

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  icon: ReactNode;
  accent: string;
  title: string;
  desc: string;
};

export function ToolCard({ href, icon, accent, title, desc }: Props) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div style={{
        position: "relative",
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "var(--radius-card)",
        padding: "24px 20px 20px",
        boxShadow: "var(--shadow-card)",
        transition: `border-color var(--motion-base) var(--ease-standard), transform var(--motion-fast) var(--ease-standard)`,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: accent,
        }} />
        <div style={{ marginBottom: 16 }}>{icon}</div>
        <div style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.04em", color: "var(--white)" }}>
          {title}
        </div>
        <div style={{ marginTop: 8, color: "var(--muted)", fontSize: 13, lineHeight: 1.5 }}>
          {desc}
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Preview a 4-card row matching mockup**

Replace the `#cards` section in `design-system/page.tsx`:

```tsx
import { ToolCard } from "@/components/brand/ToolCard";
import { CgtIcon, ClassifierIcon, CarfIcon } from "@/components/TaxToolIcons";
// ...
<section id="cards" style={{ marginTop: 48 }}>
  <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em", marginBottom: 16 }}>Tool Cards</h2>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
    <ToolCard href="/tax-tools/classifier" icon={<ClassifierIcon size={32} />} accent="var(--gold)" title="TRADER CLASSIFIER" desc="5-question quiz: SARS investor vs trader." />
    <ToolCard href="/tax-tools/carf" icon={<CarfIcon size={32} />} accent="var(--red)" title="CARD CHECKER" desc="CARF compliance risk check." />
    <ToolCard href="/market" icon={<CgtIcon size={32} />} accent="var(--accent-blue)" title="LIVE MARKET DATA" desc="BTC/ZAR, ETH/ZAR, SOL — live." />
    <ToolCard href="/news" icon={<CgtIcon size={32} />} accent="var(--green)" title="SA CRYPTO NEWS" desc="Sentiment-scored headlines." />
  </div>
</section>
```

- [ ] **Step 3: Verify**

Reload. Expected: 4 cards in a row, each with a 3px top accent bar, matching mockup card layout.

- [ ] **Step 4: Commit**

```bash
git add src/components/brand/ToolCard.tsx src/app/design-system/page.tsx
git commit -m "feat(redesign): ToolCard with top-accent bar"
```

---

### Task 7: SectionHeader component

**Files:**
- Create: `src/components/brand/SectionHeader.tsx`

- [ ] **Step 1: Author component**

```tsx
type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, align = "center" }: Props) {
  return (
    <header style={{ textAlign: align, marginBottom: 32 }}>
      <div style={{
        display: "inline-block",
        fontFamily: "var(--font-space-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--gold)",
        border: "1px solid var(--card-border)",
        borderRadius: "var(--radius-pill)",
        padding: "4px 12px",
      }}>
        {eyebrow}
      </div>
      <h2 style={{
        fontFamily: "var(--font-bebas)",
        fontSize: 40,
        letterSpacing: "0.03em",
        marginTop: 12,
        color: "var(--white)",
      }}>
        {title}
      </h2>
    </header>
  );
}
```

- [ ] **Step 2: Preview**

Add above the `#cards` grid in `design-system/page.tsx`:

```tsx
import { SectionHeader } from "@/components/brand/SectionHeader";
// inside #cards section, before the grid:
<SectionHeader eyebrow="Tools" title="TOOLS & MARKET DATA" />
```

- [ ] **Step 3: Verify**

Expected: gold pill eyebrow centered, large Bebas headline below — matches mockup section header.

- [ ] **Step 4: Commit**

```bash
git add src/components/brand/SectionHeader.tsx src/app/design-system/page.tsx
git commit -m "feat(redesign): SectionHeader eyebrow + Bebas heading"
```

---

### Task 8: PrimaryNav component

**Files:**
- Create: `src/components/brand/PrimaryNav.tsx`

- [ ] **Step 1: Author component**

```tsx
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/market", label: "Market" },
  { href: "/tax-tools", label: "Tools" },
  { href: "/learn", label: "Education" },
];

const SOCIALS: { href: string; label: string }[] = [
  { href: "https://instagram.com/satoshisandrands", label: "Instagram" },
  { href: "https://www.tiktok.com/@satsxrands", label: "TikTok" },
  { href: "https://www.facebook.com/profile.php?id=61578408320588", label: "Facebook" },
];

export function PrimaryNav() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(13,13,13,0.85)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border)",
      padding: "12px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
    }}>
      <ul style={{ display: "flex", gap: 20, listStyle: "none", margin: 0, padding: 0 }}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--white)",
              textDecoration: "none",
              padding: "6px 4px",
            }}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <ul style={{ display: "flex", gap: 16, listStyle: "none", margin: 0, padding: 0 }}>
        {SOCIALS.map((s) => (
          <li key={s.href}>
            <Link href={s.href} style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
            }}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 2: Mount at top of preview**

In `design-system/page.tsx`, render `<PrimaryNav />` immediately inside `<main>` before the H1.

- [ ] **Step 3: Verify**

Expected: dark blurred sticky bar with 5 primary nav items left + 3 socials right, matching mockup nav row.

- [ ] **Step 4: Commit**

```bash
git add src/components/brand/PrimaryNav.tsx src/app/design-system/page.tsx
git commit -m "feat(redesign): PrimaryNav sticky bar"
```

---

### Task 9: Composed preview = full mockup recreation

**Files:**
- Modify: `src/app/design-system/page.tsx`

- [ ] **Step 1: Add a composed-mockup section**

At the bottom of `design-system/page.tsx`, append a section that stitches all components into a full-page recreation of the mockup so visual diff against `screen.png` is direct:

```tsx
<section id="mockup-recreation" style={{ marginTop: 96 }}>
  <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 28, letterSpacing: "0.04em", marginBottom: 16 }}>
    Full Mockup Recreation
  </h2>
  <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
    {/* nav already mounted at top of page, so reuse the same look here */}
    <HeroPanel
      left={<BrandWordmark size="xl" />}
      right={
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-card)", padding: 32, boxShadow: "var(--shadow-card)" }}>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: 32, letterSpacing: "0.02em" }}>CGT CALCULATOR</div>
          <div style={{ color: "var(--muted)", marginTop: 8, fontSize: 13 }}>Calculate your South African CGT in seconds.</div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, marginTop: 16, color: "var(--muted)", fontFamily: "var(--font-space-mono)", fontSize: 12 }}>Enter Gain (ZAR)</div>
          <button style={{ background: "var(--gold)", color: "var(--bg)", border: "none", borderRadius: "var(--radius-pill)", padding: "12px 24px", marginTop: 16, fontFamily: "var(--font-bebas)", fontSize: 16, letterSpacing: "0.08em" }}>CALCULATE NOW</button>
        </div>
      }
    />
    <div style={{ padding: "64px 32px", background: "var(--surface)" }}>
      <SectionHeader eyebrow="Tools" title="TOOLS & MARKET DATA" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 1200, margin: "0 auto" }}>
        <ToolCard href="/tax-tools/classifier" icon={<ClassifierIcon size={32} />} accent="var(--gold)" title="TRADER CLASSIFIER" desc="5-question quiz: SARS investor vs trader." />
        <ToolCard href="/tax-tools/carf" icon={<CarfIcon size={32} />} accent="var(--red)" title="CARD CHECKER" desc="CARF compliance risk check." />
        <ToolCard href="/market" icon={<CgtIcon size={32} />} accent="var(--accent-blue)" title="LIVE MARKET DATA" desc="BTC/ZAR, ETH/ZAR, SOL — live." />
        <ToolCard href="/news" icon={<CgtIcon size={32} />} accent="var(--green)" title="SA CRYPTO NEWS" desc="Sentiment-scored headlines." />
      </div>
    </div>
    <div style={{ padding: "64px 32px", background: "var(--bg)", textAlign: "center" }}>
      <SectionHeader eyebrow="Platform" title="THE FULL PLATFORM" />
      <div style={{ display: "inline-block", background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "var(--radius-card)", padding: 24, marginTop: 8 }}>
        <div style={{ fontFamily: "var(--font-bebas)", fontSize: 20, letterSpacing: "0.04em" }}>EDUCATION HUB</div>
        <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 8 }}>Crypto 101, SARS guides, beginner to advanced.</div>
      </div>
    </div>
    <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <BrandWordmark size="sm" stacked={false} />
      <div style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)", fontSize: 11 }}>© 2026 SatoshisAndRands</div>
    </footer>
  </div>
</section>
```

- [ ] **Step 2: Run build to catch type errors**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors.

- [ ] **Step 3: Visual diff vs mockup**

Open `http://localhost:3000/design-system` and `/tmp/stitch-satsxrands/screen.png` side-by-side. Note any deltas in a follow-up task list (do not fix in this plan — capture for a v2 polish plan).

- [ ] **Step 4: Commit**

```bash
git add src/app/design-system/page.tsx
git commit -m "feat(redesign): full mockup recreation in /design-system"
```

---

### Task 10: Open PR for foundation review

- [ ] **Step 1: Push branch**

```bash
git push -u origin redesign/stitch-foundation
```

- [ ] **Step 2: Open PR**

```bash
gh pr create --title "Stitch redesign — design system foundation" --body "$(cat <<'EOF'
## Summary
- Adds Ndebele pattern SVG, BrandWordmark, HeroPanel, ToolCard, SectionHeader, PrimaryNav
- Extends token set with gold scale, motion, radius, shadow tokens
- Hidden /design-system preview route assembles the full Stitch mockup recreation

## Test plan
- [ ] Visit /design-system on the preview deployment
- [ ] Diff against /tmp/stitch-satsxrands/screen.png — flag any meaningful gaps
- [ ] Verify no production routes changed (homepage still old design)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 3: Confirm PR URL with Trimm before merge**

No auto-merge. Wait for visual sign-off on the preview deployment.

---

## Self-Review Notes

- **Spec coverage:** Tokens ✅ (Task 2), Pattern ✅ (Task 3), Wordmark ✅ (Task 4), Hero ✅ (Task 5), Cards ✅ (Task 6), Section headers ✅ (Task 7), Nav ✅ (Task 8), Full recreation ✅ (Task 9). Homepage migration is intentionally deferred to a v2 plan.
- **Placeholders:** None — every step has full file paths + complete code.
- **Type consistency:** `ToolCard` accent typed as `string` (accepts CSS var refs); `NdebelePattern` accent same. `BrandWordmark size` union `"sm"|"md"|"xl"` consistent across previews.
- **Out of scope (deliberately):** mobile responsive variants of new components, font verification against mockup pixel-by-pixel, real CGT calculator hookup in hero, replacing live homepage. Each is its own follow-up plan.
