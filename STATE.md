# SatoshisAndRands — Session Checkpoint
**Date:** 2026-03-25

---

## Completed This Session

### Homepage + Burger Menu
- [x] News moved from "coming soon" to live tools grid
- [x] Education Hub only remaining "coming soon" item
- [x] Burger menu: `transform: translateY(110%)` + `pointerEvents: none` fix
- [x] Tool pages: `padding-bottom: 96px` so burger never covers disclaimer
- [x] Home icon in burger menu → SVG (was 🏠)

### Mobile Nav
- [x] Social links wrapped in single `nav-social` div — hidden on mobile
- [x] Guides + News hidden on mobile (`nav-secondary`)
- [x] News cards: `<div>` + explicit link (stops accidental popup navigation)

### Blog
- [x] `BlogFilter.tsx` — filter pills with article counts
- [x] 4 SEO articles live at `/blog/[slug]`

### News Page (`/news`)
- [x] Live RSS from 4 sources + finbert sentiment (public HF, no token)
- [x] Sentiment badges: ▲ Bullish / ▼ Bearish / ● Neutral + confidence %
- [x] Category filters: All / SA / BTC / Regulation / Market

### Vercel Analytics + Search Console
- [x] `@vercel/analytics` installed + `<Analytics />` in root layout
- [x] Both .com + .co.za verified in Google Search Console
- [x] `sitemap.ts` — `/sitemap.xml` live (13 URLs)
- [x] `vercel.json` — permanent 301 .co.za → .com redirect

### Growth Planning
- [x] `growth-plan-2026.md`, `weekly-post-rhythm.md`, `content-calendar-q2-2026.md`

### Education Hub Mockup
- [x] `/tmp/sxr_learn_mockup.html` — fully interactive (SVG icons, 14 lessons, 5 sections)
- [x] User reviewed and approved structure

### Brand SVG Icon System ✅ COMPLETE
- [x] `TaxToolIcons.tsx` — CgtIcon, ClassifierIcon, CarfIcon
- [x] `CoinIcons.tsx` — BtcIcon, EthIcon, SolIcon, XrpIcon (Variant B), BnbIcon
- [x] Zero emoji remaining: homepage, Sidebar, MobileMenu, tax-tools index, classifier results, education hub card, market page

### Security Audit ✅ COMPLETE
- [x] npm audit — 0 vulnerabilities
- [x] No hardcoded keys — all `process.env`, never committed
- [x] `src/lib/rateLimit.ts` — in-memory IP rate limiter
- [x] `/api/market` — 10 req/min per IP, 429 + Retry-After
- [x] `/api/news` — 4 req/min per IP, 429 + Retry-After
- [x] `next.config.ts` — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection
- [x] CMC key rotation flagged as manual periodic task

### Directory Restructure
- [x] `/Users/base/claude/` — all bots, admin, tasks, CLAUDE.md
- [x] `/Users/base/Projects/SatsxRands/` — website, agents, brand assets (this repo)
- [x] `/Users/base/Projects/teacher_agent/` — teacher agent
- [x] `/Users/base/claude/agent_trader/` — AgentTrader HTML files (moved from Downloads)
- [x] CLAUDE.md + MEMORY.md updated with all new paths

### Monetisation Plan (registry #037)
- [x] `notes/2026-03-25-monetisation.md` — 4 streams, timeline to Oct 2026

### November 2026 App Milestone (registry #036)
- [x] `notes/2026-03-25-app-nov-milestone.md` — scoping questions + rough timeline

---

## Pending Tasks

### Monetisation (target: live before Oct 2026)
- [ ] Apply for Luno + VALR + Binance affiliate programmes
- [ ] Add "Trusted Exchanges" section + affiliate CTAs on Classifier/CARF result pages
- [ ] Identify 2–3 SA crypto tax practitioners → referral deal
- [ ] Premium PDF report — PayFast + CGT Calculator download (July 2026)

### Content & SEO
- [ ] Submit sitemap in Search Console (.com + .co.za)
- [ ] Request indexing for 5 blog URLs
- [ ] Add more blog articles (target 8–10 before tax season)
- [ ] Queue 7 X/Twitter threads to Buffer (`69bfba13af47dacb6942111f`)
- [ ] Upload 4 TikTok MP4s to Buffer (`69bfbdc6af47dacb6942196c`)
- [ ] SA Personality Clip Series — source Stafford Masie / Ran Neu-Ner clips

### Site Features
- [ ] `/learn` education hub — build into Next.js (go live ~21 June 2026)
- [ ] Add Guides + News to mobile burger menu (homepage)
- [ ] Enable Vercel Analytics in dashboard

### Security
- [ ] Rotate CMC API key periodically — CMC dashboard + update Vercel env var

### Infrastructure
- [ ] App scoping session (registry #036) — PWA vs native, July/Aug 2026
- [ ] Clean up stale `/Users/base/SatsxRands/` directory (old copy — Projects/SatsxRands is canonical)

---

## Running Processes

| Process | PID | Command |
|---------|-----|---------|
| Next.js dev server | 59478 | `node .../next dev` (running from old path — restart from Projects) |

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
| `src/app/layout.tsx` | Root layout — Analytics, verification tags, fonts |
| `src/app/sitemap.ts` | Auto-generated sitemap (13 URLs) |
| `vercel.json` | .co.za → .com 301 redirect |
| `next.config.ts` | Security headers (CSP + 5 others) |
| `src/lib/rateLimit.ts` | IP rate limiter for API routes |
| `src/app/globals.css` | Mobile overrides, article body styles |
| `src/components/TaxToolIcons.tsx` | CgtIcon, ClassifierIcon, CarfIcon SVGs |
| `src/components/CoinIcons.tsx` | BtcIcon, EthIcon, SolIcon, XrpIcon, BnbIcon SVGs |
| `src/components/Sidebar.tsx` | Desktop tax tools sidebar |
| `src/components/MobileMenu.tsx` | Mobile burger drawer |
| `src/app/api/news/route.ts` | RSS + finbert sentiment API (rate limited) |
| `src/app/api/market/route.ts` | CoinMarketCap proxy (rate limited) |
| `notes/2026-03-25-monetisation.md` | Monetisation plan (4 streams, timeline) |
| `notes/2026-03-25-app-nov-milestone.md` | Nov 2026 app scoping notes |

---

## Completed This Session

### Homepage + Burger Menu Fixes
- [x] News moved from "coming soon" to live tools grid
- [x] Education Hub only remaining "coming soon" item
- [x] Burger menu: `transform: translateY(110%)` + `pointerEvents: none` fix
- [x] Tool pages: `padding-bottom: 96px` so burger never covers disclaimer

### Mobile Nav Fixes
- [x] Social links wrapped in single `nav-social` div — hidden on mobile
- [x] Guides + News hidden on mobile (`nav-secondary`)
- [x] News cards: `<div>` + explicit link (stops accidental popup navigation)

### Blog
- [x] `BlogFilter.tsx` — filter pills with article counts
- [x] 4 SEO articles live at `/blog/[slug]`

### News Page (`/news`)
- [x] Live RSS from 4 sources + finbert sentiment (public HF, no token)
- [x] Sentiment badges: ▲ Bullish / ▼ Bearish / ● Neutral + confidence %
- [x] Category filters: All / SA / BTC / Regulation / Market

### Vercel Analytics + Search Console
- [x] `@vercel/analytics` installed + `<Analytics />` in root layout
- [x] Both .com + .co.za verified in Google Search Console
- [x] `sitemap.ts` — `/sitemap.xml` live (13 URLs)
- [x] `vercel.json` — permanent 301 .co.za → .com redirect

### Growth Planning
- [x] `growth-plan-2026.md` — 90-day goals, SA personality clip series
- [x] `weekly-post-rhythm.md` — daily schedule + hashtag stacks
- [x] `content-calendar-q2-2026.md` — week-by-week April–June 2026

### Education Hub Mockup
- [x] `/tmp/sxr_learn_mockup.html` — fully interactive (SVG icons, 14 lessons, 5 sections)
- [x] Filter pills, expand/collapse, sequential unlock, localStorage progress bar
- [x] User reviewed and approved structure

### Brand SVG Icon System
- [x] `TaxToolIcons.tsx` — CgtIcon, ClassifierIcon, CarfIcon
- [x] `CoinIcons.tsx` — BtcIcon, EthIcon, SolIcon, XrpIcon, BnbIcon
- [x] All emoji replaced across: homepage, Sidebar, MobileMenu (incl. home icon), tax-tools index, classifier results, education hub upcoming card, market page
- [x] XRP iterated to Variant B (dual S-curves + centre dot)
- [x] BNB revised to 5-diamond cross matching actual Binance mark

### Monetisation Plan
- [x] Registry #037 logged — target live before Oct 2026 tax season deadline
- [x] `notes/2026-03-25-monetisation.md` — 4 streams ranked by effort/return
- [x] Priority order: affiliates (May) → practitioner referrals (Jun) → PDF report (Jul)

### November 2026 App Milestone
- [x] Registry #036 logged
- [x] `notes/2026-03-25-app-nov-milestone.md` — scoping questions, rough timeline

### Deployments
- [x] All changes deployed to `satoshisandrands.com` — 18 routes live

---

## Pending Tasks

- [ ] **Enable Vercel Analytics** — vercel.com → satoshisandrands → Analytics → Enable
- [ ] **Submit sitemap** in Search Console (.com + .co.za): `satoshisandrands.com/sitemap.xml`
- [ ] **Request indexing** for 5 blog URLs in Search Console
- [ ] **Monetisation — Exchange affiliates**: Apply for Luno + VALR + Binance affiliate programmes (target May 2026)
- [ ] **Monetisation — Affiliate links on site**: "Trusted Exchanges" section + CTAs on tool result pages
- [ ] **Monetisation — Tax practitioner referrals**: Identify 2–3 SA crypto tax pros, approach for referral deal (target June 2026)
- [ ] **Monetisation — Premium PDF report**: PayFast + PDF generation for CGT Calculator (target July 2026)
- [ ] `/learn` education hub — build into Next.js (go live ~21 June 2026)
- [ ] Add Guides + News to mobile burger menu (homepage)
- [ ] Add more blog articles (target 8–10 before tax season)
- [ ] SA Personality Clip Series — source Stafford Masie / Ran Neu-Ner clips
- [ ] Queue 7 X/Twitter threads to Buffer (channel: `69bfba13af47dacb6942111f`)
- [ ] Upload 4 TikTok MP4s to Buffer (channel: `69bfbdc6af47dacb6942196c`)
- [ ] **Security audit** (registry #035) — CMC key, HF throttling, Buffer key, CSP headers, npm audit, Vercel access
- [ ] **App scoping session** (registry #036) — July/Aug 2026, PWA vs native decision

---

## Running Processes

| Process | PID | Command |
|---------|-----|---------|
| Next.js dev server | 41749 | `node .../next dev` |

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
# Dev server
cd /Users/base/SatsxRands/website && npm run dev

# Deploy
cd /Users/base/SatsxRands/website && vercel deploy --prod

# View education hub mockup
open /tmp/sxr_learn_mockup.html

# Next priority
# 1. Apply for Luno/VALR/Binance affiliate programmes
# 2. Add affiliate CTAs to Classifier + CARF result pages
# 3. Build /learn into Next.js
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — Analytics, verification tags, fonts |
| `src/app/sitemap.ts` | Auto-generated sitemap (13 URLs) |
| `vercel.json` | .co.za → .com 301 redirect |
| `src/app/globals.css` | Mobile overrides, article body styles |
| `src/components/TaxToolIcons.tsx` | CgtIcon, ClassifierIcon, CarfIcon SVGs |
| `src/components/CoinIcons.tsx` | BtcIcon, EthIcon, SolIcon, XrpIcon, BnbIcon SVGs |
| `src/components/Sidebar.tsx` | Desktop tax tools sidebar |
| `src/components/MobileMenu.tsx` | Mobile burger drawer |
| `src/components/BlogFilter.tsx` | Client-side category filter |
| `src/content/blog/articles.ts` | All 4 blog articles |
| `src/app/news/page.tsx` | News feed with sentiment badges |
| `src/app/api/news/route.ts` | RSS + finbert sentiment API |
| `src/app/api/market/route.ts` | CoinMarketCap proxy |
| `/tmp/sxr_learn_mockup.html` | Interactive education hub mockup |
| `notes/growth-plan-2026.md` | 90-day growth strategy |
| `notes/2026-03-25-monetisation.md` | Monetisation plan (4 streams, timeline) |
| `notes/2026-03-25-app-nov-milestone.md` | Nov 2026 app scoping notes |
