# SatoshisAndRands — Session Checkpoint
**Date:** 2026-03-24 (end of session)

---

## Completed This Session

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

---

## Pending Tasks

- [ ] **Enable Vercel Analytics** in dashboard: vercel.com → satoshisandrands → Analytics → Enable
- [ ] **Submit sitemap** in Search Console for both .com and .co.za: `satoshisandrands.com/sitemap.xml`
- [ ] **Request indexing** for 5 blog URLs in Search Console
- [ ] Queue 7 X/Twitter threads to Buffer (channel: `69bfba13af47dacb6942111f`)
- [ ] Upload 4 TikTok MP4s to Buffer TikTok channel (`69bfbdc6af47dacb6942196c`)
- [ ] `/learn` education hub — mockup + go live ~21 June 2026 (week before tax season)
- [ ] Tax tool icons — replace emoji (📊 ⚖️ 🔍) with custom brand SVGs
- [ ] SA Personality Clip Series — source Stafford Masie / Ran Neu-Ner clips
- [ ] Add more blog articles (target 8–10 before tax season)
- [ ] Add Guides + News to mobile nav (burger menu on homepage)

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

# Next tasks
# 1. Enable Vercel Analytics in dashboard
# 2. Submit sitemap in both Search Console properties
# 3. /learn education hub mockup
# 4. Tax tool custom SVG icons
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
| `notes/growth-plan-2026.md` | Full growth strategy |
| `notes/weekly-post-rhythm.md` | Daily posting schedule |
| `notes/content-calendar-q2-2026.md` | April–June content calendar |
