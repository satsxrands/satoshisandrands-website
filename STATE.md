# SatoshisAndRands — Session Checkpoint
**Date:** 2026-03-24

---

## Completed This Session

### Mobile Responsiveness
- [x] Fixed nav overflow on mobile homepage — hides brand text, keeps Tax Tools / Instagram / X links
- [x] Tax tools pages fully mobile-friendly (`tool-page`, `input-grid` single-column)
- [x] Fixed burger menu CSS cascade bug (`.mobile-menu-btn` rule ordering)
- [x] Floating burger menu (`MobileMenu.tsx`) on all tax tool pages — slide-up drawer
- [x] Fixed "Tax Tools" breadcrumb link (was dead on CGT page) → now points to `/tax-tools`
- [x] `tax-tools/page.tsx` replaced redirect with proper tool selector page

### Market Data Page (`/market`)
- [x] Built `/api/market/route.ts` — CoinMarketCap proxy (BTC/ETH/SOL/XRP/BNB in ZAR)
- [x] Built `/market/page.tsx` — live prices, 60s auto-refresh, countdown timer
- [x] Fixed mobile horizontal scroll — restructured coin cards to `auto 1fr` grid
- [x] Created `/market/layout.tsx` for metadata (client component workaround)

### OG Image
- [x] Built `/tmp/og-image.html` — 1200×630, branded design
- [x] Rendered to `public/og-image.png` via headless Chromium
- [x] Updated `layout.tsx` with proper `openGraph` + `twitter` card metadata
- [x] Added metadata to `tax-tools/page.tsx` and `market/layout.tsx`

### Campaign Content
- [x] 7-day launch campaign copy written (Instagram + X threads + TikTok captions)
  - File: `/Users/base/SatsxRands/agents/output/campaign_launch_2026-03-23/x_tiktok_content.md`
- [x] 4 TikTok MP4 videos rendered (1080×1920, H.264, 25fps, ~7.5–8s each)
  - Dir: `/Users/base/SatsxRands/agents/output/tiktok_videos_2026-03-23/mp4/`
  - `day1_launch.mp4`, `day2_carf.mp4`, `day4_cgt.mp4`, `day7_checklist.mp4`

### Deployment
- [x] Deployed to `satoshisandrands.com` via `vercel --prod`
- [x] CMC API key added as Vercel env var (`CMC_API_KEY`)

---

## Pending Tasks

- [ ] Queue all 7 X/Twitter threads to Buffer
  - Channel ID: `69bfba13af47dacb6942111f`
  - Content: `x_tiktok_content.md`
- [ ] Upload 4 TikTok MP4s to Buffer TikTok channel (`69bfbdc6af47dacb6942196c`)
- [ ] Days 3, 5, 6: post square card PNGs to TikTok with captions
- [ ] Tax tools mobile polish — larger tap targets on small screens
- [ ] SA Crypto News page (currently "coming soon")

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
cd /Users/base/SatsxRands/website && vercel --prod --yes

# Re-render OG image
cd /tmp && python3 render_og.py  # (headless Chromium from og-image.html)

# Queue X threads to Buffer (next task)
# Buffer X channel: 69bfba13af47dacb6942111f
# Content: /Users/base/SatsxRands/agents/output/campaign_launch_2026-03-23/x_tiktok_content.md
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Mobile overrides (`@media max-width: 640px`) |
| `src/components/MobileMenu.tsx` | Floating burger nav for tax tools |
| `src/components/Breadcrumb.tsx` | Breadcrumb with fixed `/tax-tools` link |
| `src/app/api/market/route.ts` | CMC API proxy — server-side |
| `src/app/market/page.tsx` | Live market data page |
| `src/app/market/layout.tsx` | Market page metadata |
| `src/app/tax-tools/page.tsx` | Tool selector index page |
| `public/og-image.png` | 1200×630 OG image for social sharing |
| `/tmp/og-image.html` | Source HTML for OG image re-render |
