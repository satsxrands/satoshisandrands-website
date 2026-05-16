# Stitch Redesign v2 — Homepage Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate `src/app/page.tsx` (the SatoshisAndRands homepage at `/`) from the current content-first marketing layout to the tools-first Stitch-mockup layout, using the brand library already shipped to `redesign/stitch-foundation`.

**Architecture:** Replace the in-file 613-line homepage with a composition of brand-library primitives (`HeroPanel`, `BrandWordmark`, `NdebelePattern`, `ToolCard`, `SectionHeader`) on top of the existing sticky top nav. CGT shifts from a tool-grid card to a hero-card teaser linking to `/tax-tools/cgt`; the grid keeps 4 cards (Trader Classifier, Card Checker, Live Market Data, SA Crypto News). The existing hero "CRYPTO IN RANDS. TAX IN PLAIN ENGLISH." headline and "Latest from the Hub" / value-prop sections, if present below the tool grid, are preserved below the new Full Platform section as a secondary lane — tools become primary, content stays indexed.

**Tech Stack:** Next.js 16 app router, React 19, TypeScript, brand library at `src/components/brand/`, no test framework added (smoke-verified via dev server + chrome-devtools-mcp screenshot comparison against `/tmp/stitch-satsxrands/screen.png`).

**Scope (locked):** Homepage only. Top nav, footer, other routes (`/learn`, `/blog`, `/tax-tools/*`, `/market`, `/news`) are NOT touched. New `PrimaryNav` brand component stays on `/design-system` only until a future plan.

**Out of scope:**
- Site-wide nav swap (deferred)
- New branded footer (deferred)
- Inline functional CGT calculator (hero card is a teaser linking to `/tax-tools/cgt`, not a live calc)
- Adding vitest/Playwright (visual verification only)

---

## File Structure

**Modify:**
- `src/app/page.tsx` — the homepage. Reduces from 613 lines to ~200 lines by replacing the in-file hero + tools grid + upcoming sections with brand-library compositions. Existing top nav block (lines ~76–167) is preserved verbatim.

**Create:**
- `src/lib/homepage-tools.ts` — extract the 4-card data array (was inline `tools` const in `page.tsx`). Single source of truth for design-system preview + homepage. Drops CGT card.

**No changes to:**
- Brand library (`src/components/brand/*`) — already shipped on the branch
- `globals.css` — tokens already in place
- `src/app/design-system/page.tsx` — preview keeps using its own inline array; can DRY-up in a future cleanup

---

## Branching

Work continues on `redesign/stitch-foundation` (PR #1). The v2 plan is additive to the existing PR — keeps the foundation + migration as a single reviewable unit.

If the foundation has been squash-merged to `main` before v2 starts, create a new branch `redesign/stitch-homepage-v2` off `main` and open PR #2.

---

### Task 1: Extract shared tool-card data

**Files:**
- Create: `src/lib/homepage-tools.ts`

- [ ] **Step 1: Write the data file**

```ts
import type { ReactNode } from "react";
import { ClassifierIcon, CarfIcon, CgtIcon, NewsIcon } from "@/components/TaxToolIcons";

export type HomepageTool = {
  href: string;
  icon: ReactNode;
  accent: string;
  title: string;
  desc: string;
};

export const homepageTools: HomepageTool[] = [
  {
    href: "/tax-tools/classifier",
    icon: <ClassifierIcon size={32} />,
    accent: "var(--gold)",
    title: "TRADER CLASSIFIER",
    desc: "5-question quiz: SARS investor vs trader.",
  },
  {
    href: "/tax-tools/carf",
    icon: <CarfIcon size={32} />,
    accent: "var(--red)",
    title: "CARD CHECKER",
    desc: "CARF compliance risk check for SA exchanges.",
  },
  {
    href: "/market",
    icon: <CgtIcon size={32} />,
    accent: "var(--accent-blue)",
    title: "LIVE MARKET DATA",
    desc: "BTC/ZAR, ETH/ZAR, SOL — live every 60 sec.",
  },
  {
    href: "/news",
    icon: <NewsIcon size={32} />,
    accent: "var(--green)",
    title: "SA CRYPTO NEWS",
    desc: "Sentiment-scored headlines, updated 15-min.",
  },
];
```

Note: the file uses JSX in a `.ts` file because `ReactNode` is constructed inline. Rename to `.tsx` if your linter complains.

- [ ] **Step 2: Rename to `.tsx` if needed and verify build**

```bash
cd /Users/base/Projects/SatsxRands/website
# If lint complains about JSX in .ts:
mv src/lib/homepage-tools.ts src/lib/homepage-tools.tsx
npx next build 2>&1 | tail -20
```

Expected: build succeeds, no missing-module errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/homepage-tools.tsx
git commit -m "feat(redesign): extract homepage tool-card data to src/lib"
```

---

### Task 2: Carve out the new homepage hero (replace existing hero section)

**Files:**
- Modify: `src/app/page.tsx` (replace lines roughly 169–~310 — the `{/* Hero */}` section through end of CTA group)

- [ ] **Step 1: Locate the current hero section**

```bash
cd /Users/base/Projects/SatsxRands/website
grep -n "{/\* Hero \*/}" src/app/page.tsx
grep -n "{/\* Tools" src/app/page.tsx  # boundary marker
```

Expected: line numbers for hero start and tools start. Use those as cut boundaries.

- [ ] **Step 2: Replace hero section content**

Delete the contents of the `<section className="hero-section">` block (the logo / eyebrow / h1 / para / CTAs). Replace with a new section using `HeroPanel` + `BrandWordmark` + a CGT-teaser card.

New block (paste between the closing `</nav>` and the existing `{/* Tools */}` marker — replacing the entire old `<section className="hero-section">`):

```tsx
{/* Hero — Stitch v2 */}
<section style={{ position: "relative", overflow: "hidden", background: "var(--bg)" }}>
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
```

Imports to add at the top of `page.tsx`:

```tsx
import { NdebelePattern } from "@/components/brand/NdebelePattern";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
```

- [ ] **Step 3: Verify dev server renders the new hero without error**

```bash
curl -sf http://localhost:3000/ -o /dev/null && echo "homepage 200" || echo "homepage broken"
```

Expected: `homepage 200`. If broken, inspect the dev server log at the path returned by the earlier `npm run dev` background task.

- [ ] **Step 4: Visual check via chrome-devtools-mcp**

Navigate the existing chrome page to `http://localhost:3000/` and screenshot. Compare hero block against `/tmp/stitch-satsxrands/screen.png` top half. Verify wordmark + CGT card layout matches.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(redesign): swap homepage hero to Stitch wordmark + CGT card"
```

---

### Task 3: Replace the 5-card tool grid with the 4-card brand grid

**Files:**
- Modify: `src/app/page.tsx` — the tools grid section (the part that `.map()`s over the old inline `tools` array)

- [ ] **Step 1: Find the tools grid block**

```bash
grep -n "tools.map\|{tools.map" src/app/page.tsx
```

Expected: a single `.map(...)` site. Note start + end of the wrapping `<section>` so you can replace cleanly.

- [ ] **Step 2: Delete the old inline `tools` const + the section that renders it**

Delete:
- The `const tools = [...]` declaration near the top of the file (lines ~5–57 — verify with grep)
- The entire `<section>` block that maps over `tools`

- [ ] **Step 3: Insert the new brand-library grid**

```tsx
{/* Tools — Stitch v2 */}
<section style={{ padding: "64px 32px", background: "var(--surface)" }}>
  <SectionHeader eyebrow="Tools" title="TOOLS & MARKET DATA" />
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 1200, margin: "0 auto" }}>
    {homepageTools.map((t) => (
      <ToolCard key={t.href} href={t.href} icon={t.icon} accent={t.accent} title={t.title} desc={t.desc} />
    ))}
  </div>
</section>
```

Imports to add:

```tsx
import { SectionHeader } from "@/components/brand/SectionHeader";
import { ToolCard } from "@/components/brand/ToolCard";
import { homepageTools } from "@/lib/homepage-tools";
```

- [ ] **Step 4: Verify the page still loads**

```bash
curl -sf http://localhost:3000/ -o /dev/null && echo "homepage 200" || echo "homepage broken"
```

- [ ] **Step 5: Visual check — confirm 4 tool cards render in a row, accent stripes visible, NewsIcon distinct from CgtIcon**

Screenshot via chrome-devtools-mcp + compare against mockup mid-section.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(redesign): swap homepage 5-card grid to 4-card brand ToolCards"
```

---

### Task 4: Add Full Platform 2-col section (wordmark + Education Hub)

**Files:**
- Modify: `src/app/page.tsx` — locate the current `upcoming` const + the section that renders it ("Education Hub" lockup)

- [ ] **Step 1: Find the upcoming/Education Hub section**

```bash
grep -n "upcoming\|Education Hub" src/app/page.tsx
```

- [ ] **Step 2: Delete the `const upcoming = [...]` array and the section that renders it**

- [ ] **Step 3: Insert the new Full Platform section**

```tsx
{/* Full Platform — Stitch v2 */}
<section style={{ padding: "64px 32px", background: "var(--bg)" }}>
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
```

- [ ] **Step 4: Verify load**

```bash
curl -sf http://localhost:3000/ -o /dev/null && echo "ok"
```

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(redesign): add Full Platform section to homepage"
```

---

### Task 5: Preserve secondary content lane (latest blog / value props if present)

**Files:**
- Modify: `src/app/page.tsx` — any remaining sections below the previous tool grid (e.g. "Latest from the Hub" blog feed, value props, FAQ)

- [ ] **Step 1: Inventory remaining sections**

```bash
grep -n "{/\*" src/app/page.tsx
```

Expected: list of comment-marked sections. Identify any that are NOT the new hero / tools / Full Platform — those are secondary content.

- [ ] **Step 2: Decide per section**

For each remaining section, choose one of:
- **Keep verbatim** (preserve SEO content) — no change needed
- **Re-style** with `SectionHeader` for visual consistency — wrap the section in a new `<section>` with the brand `SectionHeader` at top
- **Delete** if obsolete (e.g. duplicate Education Hub teaser superseded by Task 4)

For each kept section, ensure it lives **below** the Full Platform section so the tools-first narrative reads top-down.

- [ ] **Step 3: Re-style headings that stay**

If any section heading is being kept, replace inline `<h2>` styling with a `<SectionHeader eyebrow="..." title="..." />` call for visual consistency.

- [ ] **Step 4: Verify load + visual sweep**

```bash
curl -sf http://localhost:3000/ -o /dev/null && echo "ok"
```

Screenshot full-page in chrome-devtools-mcp. Verify reading order: hero → tools → platform → secondary content → end.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(redesign): preserve secondary content lane below v2 hero/tools"
```

---

### Task 6: Final smoke + lint + build

**Files:**
- Verify: `src/app/page.tsx`, the whole repo build

- [ ] **Step 1: Lint**

```bash
cd /Users/base/Projects/SatsxRands/website
npm run lint 2>&1 | tail -20
```

Expected: no new errors. If there are pre-existing warnings unrelated to the redesign, leave them.

- [ ] **Step 2: Production build**

```bash
npx next build 2>&1 | tail -30
```

Expected: build succeeds, no missing modules, no TS errors.

- [ ] **Step 3: Manual smoke**

Open `http://localhost:3000/` in chrome-devtools-mcp at viewport 1440×2400. Full-page screenshot. Confirm:
- Hero: huge wordmark left, CGT card right with bright `CALCULATE NOW` CTA
- Pattern visible behind hero at 0.7 opacity, multi-hue (gold + red + orange)
- 4 tool cards in a row, NewsIcon distinct from CgtIcon, accent stripes 5px
- Full Platform: wordmark left, Education Hub card right
- Existing top nav unchanged (Tax Tools / News / Market / Guides / News / social icons)
- Mobile viewport 375×800 doesn't break layout — grids should collapse via media query or `auto-fit`

If mobile breaks (likely — current snippets use hard `repeat(4,1fr)` and `1fr 1fr`), add a Task 7 to introduce `@media (max-width: 768px)` overrides in `globals.css` for the new section selectors.

- [ ] **Step 4: Final commit**

If any lint/build/mobile-fix commits were made, they happen here as their own commits. No final wrap-up commit needed.

---

### Task 7 (conditional): Mobile responsive polish

**Trigger:** Only if Task 6 step 3 confirms layout breakage at 375px width.

**Files:**
- Modify: `src/app/page.tsx` — add `className` hooks to the new sections so CSS can target them
- Modify: `src/app/globals.css` — add media queries

- [ ] **Step 1: Add classnames to v2 sections**

In `page.tsx`, give each new section a stable className:
- Hero section: `className="v2-hero"`
- Tools section: `className="v2-tools"`
- Full Platform section: `className="v2-platform"`

- [ ] **Step 2: Add media queries to globals.css**

At the bottom of `globals.css`:

```css
@media (max-width: 768px) {
  .v2-hero > div { grid-template-columns: 1fr !important; gap: 32px !important; padding: 48px 20px !important; }
  .v2-tools > div { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
  .v2-platform > div { grid-template-columns: 1fr !important; gap: 24px !important; }
}

@media (max-width: 480px) {
  .v2-tools > div { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 3: Verify mobile**

Resize chrome-devtools-mcp to 375×800, screenshot. Verify single-column hero, 2x2 tool grid on tablet, single-column on small phone.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/globals.css
git commit -m "feat(redesign): mobile responsive polish for v2 homepage sections"
```

---

## Done When

- [ ] Homepage at `/` renders the Stitch tools-first layout
- [ ] 4-card grid with distinct icons (NewsIcon ≠ CgtIcon)
- [ ] Ndebele pattern visible behind hero at 0.7 opacity
- [ ] CGT calc teaser in hero linking to `/tax-tools/cgt`
- [ ] Existing top nav unchanged
- [ ] `npm run lint` clean, `npx next build` succeeds
- [ ] Mobile viewport (375px) doesn't break layout
- [ ] Branch pushed, PR #1 (or new PR if foundation already merged) updated

## Push + Review

```bash
cd /Users/base/Projects/SatsxRands/website
git push
gh pr view 1 --web   # opens PR for visual diff review
```

If foundation has already merged: `gh pr create --title "Stitch redesign v2 — homepage migration" --body "Migrates / to tools-first layout per docs/superpowers/plans/2026-05-16-stitch-redesign-v2-homepage.md"`
