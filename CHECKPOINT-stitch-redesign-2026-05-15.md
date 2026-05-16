# SatsxRands Stitch Redesign — Checkpoint

_Created: 2026-05-15_
_Plan: docs/superpowers/plans/2026-05-15-stitch-redesign-foundation.md_
_PR: https://github.com/satsxrands/satoshisandrands-website/pull/1_
_Branch: redesign/stitch-foundation_

## Done

- Branch `redesign/stitch-foundation` created off main `7f0124cf`
- 10 redesign commits landed:
  - `609c37b` Task 1: scaffold `/design-system` preview route
  - `04c2fd3` Task 2: extend tokens (gold scale, accents, motion, radius, shadow)
  - `4e64206` Task 3: NdebelePattern SVG component
  - `4a8717e` Task 3 fix: unique SVG pattern id via React `useId()` (caught by code review — multiple instances would have collided)
  - `d7b8d90` Task 4: BrandWordmark stacked lockup
  - `1f56550` Task 5: HeroPanel with pattern backdrop + 2-col layout
  - `3106e66` Task 6: ToolCard with top-accent bar
  - `ee86b0e` Task 7: SectionHeader (eyebrow pill + Bebas)
  - `130256b` Task 8: PrimaryNav sticky bar
  - `d6eb769` Task 9: full mockup recreation in `/design-system`
- PR #1 opened, not merged
- Dev server was running on `localhost:3000` at session pause

## Pending

- **Visual review** by Trimm against `docs/design-reference/stitch-mockup.png`
  - Ndebele pattern density (current default opacity 0.12)
  - Hero CGT card border/shadow weight
  - Tool card 3px accent bar
  - SectionHeader eyebrow pill contrast
  - Wordmark xl (96px) vs CGT card balance
  - PrimaryNav letter-spacing + social muted contrast
- **Stray commit decision**: `5d0052d feat(tracker): add Tracker types + zod schema with vitest` snuck into the branch between Task 1 and Task 2 (parallel autonomous session, Sonnet 4.6, 18:32). Unrelated infra. Either keep in PR or rebase out.
- **v2 plan**: homepage migration to consume the brand library — deferred. Will be a separate plan once visual deltas are captured.

## Blockers

- Chrome MCP (devtools + playwright) failed with `EAGAIN` mid-session — process limit hit. Shell also went exit-1 on every command shortly after. Need to: kill stray Chrome processes, kill background dev server, then retry.

## Resume Commands

```bash
# 1. Recover environment
pkill -f "Google Chrome" 2>/dev/null
pkill -f "next dev" 2>/dev/null

# 2. Restart dev server
cd /Users/base/Projects/SatsxRands/website
git checkout redesign/stitch-foundation
npm run dev   # localhost:3000/design-system

# 3. Inspect PR / log
gh pr view 1 --web
git log --oneline main..HEAD

# 4. (Optional) Rebase out the stray tracker commit
git rebase -i main   # drop the 5d0052d line, save

# 5. After visual review, run the v2 plan (writing-plans skill, scope = homepage migration)
```

## Files Created This Session

- `src/components/brand/NdebelePattern.tsx`
- `src/components/brand/BrandWordmark.tsx`
- `src/components/brand/HeroPanel.tsx`
- `src/components/brand/ToolCard.tsx`
- `src/components/brand/SectionHeader.tsx`
- `src/components/brand/PrimaryNav.tsx`
- `src/app/design-system/page.tsx`
- `docs/superpowers/plans/2026-05-15-stitch-redesign-foundation.md`

## Files Modified

- `src/app/globals.css` (13 new tokens appended to existing `:root`)
