# SatoshisAndRands — Session Checkpoint
**Date:** 2026-03-25

---

## Completed This Session

### Homepage + Burger Menu Fixes (2026-03-25)
- [x] News removed from "coming soon" — added as live green card in tools grid
- [x] Education Hub is now the only remaining "coming soon" item
- [x] Burger menu: switched from `bottom: -320px` to `transform: translateY(110%)` — always fully clears regardless of drawer height
- [x] Added `pointerEvents: none` when drawer closed — no accidental tap blocking
- [x] Tool pages: `padding-bottom: 96px` on mobile so burger button never covers disclaimer

### Mobile Nav Fixes
- [x] Social links (Instagram, X, Facebook) wrapped in single `nav-social` div — hidden on mobile
- [x] Guides + News also hidden on mobile nav (`nav-secondary`) — prevents overflow
- [x] Mobile nav shows only: **Tax Tools | Market**
- [x] News cards changed from full `<a>` wrapper → non-clickable `div` + explicit "Read article →" button (stops accidental tap popups)

### Blog — Category Filters
- [x] `BlogFilter.tsx` client component — filter pills (All / CARF / CGT / Filing / Tax Basics) with article count
- [x] Blog index page updated to use `BlogFilter`

### News Page (`/news`)
- [x] Live RSS feed from 4 sources (CoinTelegraph SA, CoinDesk, CT Regulation, CT Bitcoin)
- [x] finbert sentiment analysis via public HF Inference API (`ProsusAI/finbert`) — no token
- [x] Sentiment badge per card: ▲ Bullish / ▼ Bearish / ● Neutral + confidence %
- [x] Category filter: All / SA / BTC / Regulation / Market

### Vercel Analytics
- [x] `@vercel/analytics` installed + `<Analytics />` added to root layout
- [x] Live on satoshisandrands.com — enable in Vercel dashboard → Analytics tab

### Google Search Console
- [x] Verification tag for `satoshisandrands.com` added to layout metadata
- [x] Verification tag for `satoshisandrands.co.za` added to layout metadata
- [x] Both properties verified in Search Console ✓
- [x] `sitemap.ts` created — `/sitemap.xml` live with all 13 URLs + priorities

### .co.za Domain
- [x] `vercel.json` created — permanent 301 redirect `.co.za → .com` for all paths
- [x] Both domains live and verified

### Growth Planning
- [x] `growth-plan-2026.md` — 90-day goals, platform strategy, SA personality clip series
- [x] `weekly-post-rhythm.md` — daily schedule, hashtag stacks, monthly anchors
- [x] `content-calendar-q2-2026.md` — week-by-week April–June 2026

### Education Hub Mockup
- [x] `/tmp/sxr_learn_mockup.html` — fully interactive mockup built
- [x] SVG icons replacing all emoji (14 lessons across 5 sections)
- [x] Filter pills, lesson expand/collapse, sequential unlock, progress bar (localStorage)
- [x] Tool CTAs per lesson linking to CGT Calculator, Classifier, CARF Checker
- [x] User reviewed — approved structure, pending more testing

---

## Pending Tasks

- [ ] **Enable Vercel Analytics** in dashboard: vercel.com → satoshisandrands → Analytics → Enable
- [ ] **Submit sitemap** in Search Console for both .com and .co.za: `satoshisandrands.com/sitemap.xml`
- [ ] **Request indexing** for 5 blog URLs in Search Console
- [ ] Queue 7 X/Twitter threads to Buffer (channel: `69bfba13af47dacb6942111f`)
- [ ] Upload 4 TikTok MP4s to Buffer TikTok channel (`69bfbdc6af47dacb6942196c`)
- [ ] `/learn` education hub — build into Next.js, go live ~21 June 2026 (week before tax season)
- [ ] **Tax tool icons** — replace emoji (📊 ⚖️ 🔍) with custom brand SVGs on homepage + tool pages + MobileMenu
- [ ] SA Personality Clip Series — source Stafford Masie / Ran Neu-Ner clips
- [ ] Add more blog articles (target 8–10 before tax season)
- [ ] Add Guides + News to mobile nav (burger menu on homepage)
- [ ] **Security audit** (registry #035) — API key exposure, rate limiting, CSP headers, npm audit, Vercel/Buffer access controls, env var rotation
  - Scope: CMC key, HF public endpoint throttling, Buffer API key, CSP headers, `npm audit`, Vercel deploy access

---

## Running Processes

| Process | PID | Command |
|---------|-----|---------|
| Next.js dev server | 41749 | `node .../next dev` |

---

## Analytics & Tracking
| Tool | Status | Access |
|------|--------|--------|
| Vercel Analytics | Installed, needs enabling | vercel.com → satoshisandrands → Analytics |
| Google Search Console .com | ✅ Verified | search.google.com/search-console |
| Google Search Console .co.za | ✅ Verified | search.google.com/search-console |

---

## Resume Commands

```bash
# Dev server
cd /Users/base/SatsxRands/website && npm run dev

# Deploy
cd /Users/base/SatsxRands/website && vercel deploy --prod

# View education hub mockup
open /tmp/sxr_learn_mockup.html

# Next tasks
# 1. Build tax tool SVG icons (homepage + tool pages + MobileMenu)
# 2. Build /learn into Next.js
# 3. Enable Vercel Analytics in dashboard
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — Analytics, verification tags, fonts |
| `src/app/sitemap.ts` | Auto-generated sitemap (13 URLs) |
| `vercel.json` | .co.za → .com 301 redirect |
| `src/app/globals.css` | Mobile overrides, article body styles |
| `src/components/BlogFilter.tsx` | Client-side category filter |
| `src/content/blog/articles.ts` | All 4 blog articles |
| `src/app/blog/[slug]/page.tsx` | Individual article pages |
| `src/app/news/page.tsx` | News feed with sentiment badges |
| `src/app/api/news/route.ts` | RSS + finbert sentiment API |
| `src/app/api/market/route.ts` | CoinMarketCap proxy |
| `public/og-image.png` | 1200×630 OG image |
| `/tmp/sxr_learn_mockup.html` | Interactive education hub mockup (not yet in Next.js) |
| `notes/growth-plan-2026.md` | Full growth strategy |
| `notes/weekly-post-rhythm.md` | Daily posting schedule |
| `notes/content-calendar-q2-2026.md` | April–June content calendar |
