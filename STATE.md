# SatoshisAndRands Website — State Checkpoint
_Last updated: 2026-03-27_

---

## Completed This Session

### ShareButton Component (2026-03-27)
- [x] Created `ShareButton.tsx` — reusable share component with dropdown menu
- [x] Integrated into blog articles (`/blog/[slug]`) — positioned far-right in header, next to read-time
- [x] Integrated into news cards (`/news`) — positioned far-right, next to "Read article" link
- [x] Share options: X, WhatsApp, Facebook, Copy Link
- [x] SVG share icon (replaced Unicode ↗) for consistent mobile rendering
- [x] Click-outside detection for menu dismissal
- [x] Mobile-friendly and responsive

### Previous Completed This Session

### On-Page SEO
- [x] Added `metadataBase: new URL("https://satoshisandrands.com")` to root `layout.tsx` (fixes OG image resolution)
- [x] Created `src/app/tax-tools/cgt/layout.tsx` — metadata for CGT Calculator (client component workaround)
- [x] Created `src/app/tax-tools/classifier/layout.tsx` — metadata for Trader Classifier
- [x] Created `src/app/tax-tools/carf/layout.tsx` — metadata for CARF Checker
- [x] Added metadata export to `src/app/tax-tools/page.tsx`
- [x] Added JSON-LD Article schema to `src/app/blog/[slug]/page.tsx`
- [x] Fixed duplicate `metadata` export build failure in `tax-tools/page.tsx`

### Blog Content (9 articles total, up from 4)
- [x] `crypto-losses-tax-south-africa` — CGT, capital loss deductions + carry-forward
- [x] `sars-crypto-audit-what-to-expect` — Filing, audit triggers + penalties
- [x] `bitcoin-dca-tax-south-africa` — Tax Basics, DCA + weighted average cost
- [x] `crypto-staking-yield-tax-south-africa` — Tax Basics, staking/yield income
- [x] `voluntary-disclosure-programme-crypto-sars` — Filing, VDP process

### Google Search Console Indexing (3/5 submitted — daily quota hit)
- [x] `crypto-losses-tax-south-africa` — Indexing requested ✅
- [x] `sars-crypto-audit-what-to-expect` — Indexing requested ✅
- [x] `bitcoin-dca-tax-south-africa` — Indexing requested ✅
- [ ] `crypto-staking-yield-tax-south-africa` — **quota exceeded, retry tomorrow**
- [ ] `voluntary-disclosure-programme-crypto-sars` — **not started, retry tomorrow**

### Previous Sessions
- [x] Homepage + Burger Menu fixes
- [x] Mobile nav fixes (social links, Guides + News hidden on mobile)
- [x] News page (`/news`) — live RSS + finbert sentiment badges
- [x] `@vercel/analytics` installed + `<Analytics />` in root layout
- [x] Both .com + .co.za verified in Google Search Console
- [x] `sitemap.ts` — `/sitemap.xml` live (auto-updates with articles array)
- [x] `vercel.json` — permanent 301 .co.za → .com redirect
- [x] Brand SVG Icon System — TaxToolIcons.tsx + CoinIcons.tsx (zero emoji)
- [x] Security audit — 0 vulnerabilities, rate limiting, CSP headers
- [x] Directory restructure — `/Users/base/Projects/SatsxRands/` canonical
- [x] Monetisation plan — registry #037, notes/2026-03-25-monetisation.md
- [x] November 2026 App Milestone — registry #036

---

## Pending Tasks

### Immediate (tomorrow — quota resets daily)
- [ ] Submit indexing request: `https://satoshisandrands.com/blog/crypto-staking-yield-tax-south-africa`
- [ ] Submit indexing request: `https://satoshisandrands.com/blog/voluntary-disclosure-programme-crypto-sars`
  → Search Console URL Inspection → paste URL → "Request indexing"

### Content
- [ ] Queue 7 X/Twitter threads to Buffer (`69bfba13af47dacb6942111f`)
- [ ] Upload 4 TikTok MP4s to Buffer (`69bfbdc6af47dacb6942196c`)
- [ ] SA Personality Clip Series — source Stafford Masie / Ran Neu-Ner clips

### Site Features
- [ ] `/learn` education hub — build into Next.js (go live ~21 June 2026)
- [ ] Add Guides + News to mobile burger menu
- [ ] Enable Vercel Analytics in dashboard

### Monetisation (phased)
- [ ] Apply for Luno + VALR + Binance affiliate programmes (target May 2026)
- [ ] Add "Trusted Exchanges" section + affiliate CTAs on Classifier/CARF result pages
- [ ] Identify 2–3 SA crypto tax practitioners → referral deal (June 2026)
- [ ] Premium PDF report — PayFast + CGT Calculator download (July 2026)

### Infrastructure
- [ ] Rotate CMC API key periodically
- [ ] App scoping session (registry #036) — PWA vs native, July/Aug 2026

---

## Running Processes

| Process | PID | Location |
|---------|-----|----------|
| next dev (website) | 41749 | `/Users/base/SatsxRands/website/` |
| next-server | 59478 | `/Users/base/SatsxRands/website/` |
| playwright-mcp | 26493, 29528 | system |

---

## Key Milestones

| Milestone | Target | Registry |
|-----------|--------|---------|
| Affiliate links live | May 2026 | #037 |
| Education hub (/learn) live | 21 Jun 2026 | — |
| Monetisation fully live | Oct 2026 | #037 |
| App go-live | Nov 2026 | #036 |

---

## Resume Commands

```bash
# Dev server (canonical path)
cd /Users/base/Projects/SatsxRands/website && npm run dev

# Deploy
cd /Users/base/Projects/SatsxRands/website && vercel deploy --prod

# View education hub mockup
open /tmp/sxr_learn_mockup.html
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — Analytics, metadataBase, fonts |
| `src/app/sitemap.ts` | Auto-generated sitemap (auto-updates with articles) |
| `src/content/blog/articles.ts` | All 9 blog articles |
| `src/app/blog/[slug]/page.tsx` | Article page — JSON-LD schema |
| `src/app/tax-tools/cgt/layout.tsx` | CGT Calculator metadata |
| `src/app/tax-tools/classifier/layout.tsx` | Classifier metadata |
| `src/app/tax-tools/carf/layout.tsx` | CARF Checker metadata |
| `vercel.json` | .co.za → .com 301 redirect |
| `next.config.ts` | Security headers (CSP + 5 others) |
| `src/lib/rateLimit.ts` | IP rate limiter for API routes |
| `src/components/TaxToolIcons.tsx` | CgtIcon, ClassifierIcon, CarfIcon SVGs |
| `src/components/CoinIcons.tsx` | BtcIcon, EthIcon, SolIcon, XrpIcon, BnbIcon SVGs |
| `notes/2026-03-25-monetisation.md` | Monetisation plan (4 streams, timeline) |
| `notes/2026-03-25-app-nov-milestone.md` | Nov 2026 app scoping notes |
