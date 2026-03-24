# SatoshisAndRands — Session Checkpoint
**Date:** 2026-03-24

---

## Completed This Session

### Social Links
- [x] Added Facebook profile to nav and hero CTA buttons
  - URL: `https://www.facebook.com/profile.php?id=61578408320588`
- [x] Renamed Instagram hero button to "Follow on Instagram" for clarity

### Blog / Guides (`/blog`)
- [x] 4 SEO articles created (static TypeScript data, no CMS):
  - CARF South Africa Explained
  - How to Declare Crypto on ITR12
  - Investor vs Trader — SARS
  - Crypto CGT Calculator SA
- [x] Category filter pills (client component `BlogFilter.tsx`) — All / CARF / CGT / Filing / Tax Basics
- [x] Article count per category badge
- [x] "Guides" added to homepage nav and all page navs
- [x] Article body styles in globals.css (headings, tables, lists, links)

### News Page (`/news`)
- [x] `/api/news` route — fetches 4 RSS feeds (CoinTelegraph SA, CoinDesk, CT Regulation, CT Bitcoin)
- [x] 15-min server-side cache (`next: { revalidate: 900 }`)
- [x] finbert sentiment analysis via public HF Inference API (`ProsusAI/finbert`)
  - Batched: all 30 headlines in one API call
  - No HF token used — public endpoint only
  - Graceful fallback to neutral if finbert unavailable
  - Badge on each card: ▲ Bullish / ▼ Bearish / ● Neutral + confidence %
- [x] Category filter: All / SA / BTC / Regulation / Market
- [x] "News" added to homepage nav

### Growth Planning
- [x] `growth-plan-2026.md` — 90-day goals, platform strategy, content pillars, partnerships, ad budget
- [x] `weekly-post-rhythm.md` — daily schedule by platform, hashtag stacks, monthly anchors
- [x] `content-calendar-q2-2026.md` — week-by-week April–June 2026
- [x] SA Personality Clip Series added to growth plan (Stafford Masie, Ran Neu-Ner, Simon Dingle)

### Deployment
- [x] All changes live at `satoshisandrands.com`

---

## Pending Tasks

- [ ] **MOBILE BUG:** Nav overflow on mobile — social links (Instagram, X, Facebook) push off screen after adding News/Guides. Fix: hide social links from nav on mobile (they're in hero CTAs already)
- [ ] Queue all 7 X/Twitter threads to Buffer (channel: `69bfba13af47dacb6942111f`)
- [ ] Upload 4 TikTok MP4s to Buffer TikTok channel (`69bfbdc6af47dacb6942196c`)
- [ ] `/learn` education hub — mockup + go live ~21 June 2026 (week before tax season)
- [ ] SA Personality Clip Series — source Stafford Masie / Ran Neu-Ner clips
- [ ] Add more blog articles (target 8–10 before tax season)

---

## Running Processes

| Process | PID | Command |
|---------|-----|---------|
| Next.js dev server | 41749 | `node .../next dev` |

---

## Resume Commands

```bash
# Next.js dev
cd /Users/base/SatsxRands/website && npm run dev

# Deploy to prod
cd /Users/base/SatsxRands/website && vercel deploy --prod

# Fix mobile nav (first task next session)
# Hide .nav-social class on mobile in globals.css
# Add className="nav-social" to Instagram/X/Facebook links + adjacent separators in page.tsx
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Mobile overrides + article body styles |
| `src/components/BlogFilter.tsx` | Client-side category filter for blog |
| `src/components/MobileMenu.tsx` | Floating burger nav for tax tools |
| `src/content/blog/articles.ts` | All blog article data |
| `src/app/blog/page.tsx` | Blog index |
| `src/app/blog/[slug]/page.tsx` | Individual article pages |
| `src/app/news/page.tsx` | News page with sentiment badges |
| `src/app/api/news/route.ts` | RSS fetch + finbert sentiment API |
| `src/app/api/market/route.ts` | CoinMarketCap proxy |
| `src/app/market/page.tsx` | Live market data page |
| `public/og-image.png` | 1200×630 OG image |
| `notes/growth-plan-2026.md` | Full growth strategy |
| `notes/weekly-post-rhythm.md` | Daily posting schedule |
| `notes/content-calendar-q2-2026.md` | April–June content calendar |
