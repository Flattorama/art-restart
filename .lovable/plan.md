

## Art Restart R2 Revision Plan

Implement the R2 revision instructions, using the existing video at `public/video/artrestartvideo1.mp4` as the hero background. No webm/poster files exist, so the component renders gracefully with just the MP4.

### P0 — Hero video background
- Wrap hero in two layers: video layer (absolute) + content layer (relative, z-index 1).
- `<video autoPlay loop muted playsInline>` with single MP4 source `/video/artrestartvideo1.mp4`, object-fit cover, Ken Burns drift animation (`kenBurns 40s alternate`).
- Overlay: warm paper-colored vertical gradient (0.82 → 0.55 → 0.72 → 0.95) + terracotta/amber 135° wash for legibility.
- Film-grain SVG noise overlay at 0.18 opacity, multiply blend.
- Mobile (`<600px`): hide `<video>`, show `[data-hero-poster-mobile]` div with paper background fallback (no poster jpg available — use a paper gradient stand-in).
- Add `@keyframes kenBurns` and reduced-motion override to `src/styles.css`.
- Add `textShadow: "0 1px 0 rgba(242,233,228,0.8)"` and bump `SOFT` axis from 80 → 100 on the H1.

### P0 — Copy fixes
- Hero subcopy → "Art therapy, creative workshops, and expressive arts programming — for people who want to feel something, and the organizations that make space for them."
- Convert any `&apos;` / `&ldquo;` / `&rdquo;` to real curly characters (’ “ ”).
- Card title "For Your Organization" already correct — leave.

### P1 — Studio Notes painted surfaces
- Add `paintedSurface(colors, angle)` helper combining two radial gradients (light pool + dark pool) with linear gradient.
- Apply to all 6 tiles; add `box-shadow: inset 0 0 60px rgba(0,0,0,0.15)` on inner container.

### P1 — Hand-drawn section dividers (3 only)
- Add `<SectionDivider>` SVG component (squiggle path).
- Place: after Manifesto (before TrustBar), before ForIndividuals, before StudioNotes.

### P1 — Margin numbering (desktop only)
- Add vertical `§ NN — LABEL` mono labels to About (§ 07), ForIndividuals (§ 04), ForOrganizations (§ 05).
- `.hide-mobile` suppresses on small screens.

### P1 — Naomi's Arrow integration
- Replace starburst at "through art." with `<ArrowMark size={64} color={terracotta}>`, angled toward cards.
- Keep mustard starburst, move to upper-right above "starting again".
- Add centered `<ArrowMark size={40}>` end-of-article mark below About bio.

### P2 — Motion
- Stagger via `data-stagger-index` + `transition-delay: calc(var(--i,0) * 80ms)` on grid reveal cards (WhatWeDo, ForIndividuals, ForOrganizations).
- Hero cascade: `@keyframes heroIn` with delays 0/200/400/550ms on headline/subcopy/cards (instead of scroll-triggered reveal for above-fold).
- `.path-card h3::after` underline draw on hover.
- All gated by `prefers-reduced-motion`.

### Files touched
- `src/routes/index.tsx` — hero rewrite, copy fixes, dividers, margin numbers, arrow mark relocations, painted gallery surfaces, stagger attributes.
- `src/styles.css` — `@keyframes kenBurns`, `@keyframes heroIn`, mobile video hide rule, path-card underline, stagger CSS var, reduced-motion overrides.

### Notes / deviations
- No `hero-poster.jpg` or `.webm` exists in repo — using only the MP4 source and a paper-toned mobile fallback div. The component degrades gracefully if the MP4 is ever missing (overlay + paper bg still render).

