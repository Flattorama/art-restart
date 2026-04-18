

## Art Restart redesign — to the 1970s artisan-studio system

This is a full visual rebuild of the existing single-page TanStack Start site to match the `design_handoff_art_restart/` system (eggshell paper, four retro pigments, Fraunces + DM Sans + JetBrains Mono, ink-offset shadows, doodle sprite, sentence-case headlines with italic emphasis). Existing route structure stays single-page; the booking modal and confirmation state are added.

### 1. Token + asset layer
- Copy `colors_and_type.css` → `src/styles/colors_and_type.css` and `@import` it at the top of `src/styles.css` so every `--paper`, `--orange`, `--teal`, `--yellow`, `--pink`, `--ink`, `--font-display`, `--sp-*`, `--grain` token is global.
- Copy `assets/logo.svg`, `mark.svg`, `doodles.svg` → `public/brand/`. All doodle references use `<use href={\`${import.meta.env.BASE_URL}brand/doodles.svg#sparkle-thick\`}/>` so GitHub Pages subpath resolves correctly.
- Append component CSS (offerings, marquee, practitioner, writing, contact, modal, confirm, footer) from `reference/styles.css` to `src/styles.css`, plus the `body.grain` paper-noise overlay.

### 2. Fonts
- Add Google Fonts `<link>` to `src/routes/__root.tsx` head() (Fraunces with full `opsz/wght/SOFT/WONK` axes, DM Sans, JetBrains Mono, Caveat).

### 3. Rebuild `src/routes/index.tsx`
Replace the entire current implementation. New section order matches `App.jsx`:
- **TopBar** — sticky paper bar, mark + "Art *Restart*" wordmark, nav with squiggle-underline active state, dark ink CTA "Book a call →". Mobile: hamburger drawer.
- **Hero** (split-field) — pink top / yellow bottom, chunky outlined orange uppercase headline "A studio for *starting* again — through *art.*", three photo plates (aqua / orange-oval / yellow with ink-offset shadows) using `gallery-01..03.jpg` cropped into the plates with `Fig. 0X` plate-caps, scattered thick doodles (sparkle, asterisk, bolt, star), rotating "HELD SPACE FOR REAL PEOPLE" badge, lede + orange primary + ghost CTAs.
- **Marquee** — yellow band, Fraunces italic 28px, "No psych talk. · No wellness pastels. · No stock photos. · Real sessions. · Real materials. · Real mess." looping at 28s.
- **Offerings** — three cards (paper / teal / orange variants), 16:9 image slot using `gallery-04..06.jpg` with Fig. captions, Fraunces italic-orange titles, dashed-rule price/arrow row.
- **Practitioner** — `paper-warm` band, mustard-yellow photo plate (rotated -1.2°) with `randi-portrait.jpg`, blockquote in Fraunces 500, Caveat signature "— Randi Yaffa" + mono role "BAFTA-nominee · OATA, CATA".
- **Writing** — two-column essay grid, ink top-rule per row, mono orange tag + faint date, Fraunces 26px title with italic emphasis.
- **Contact** — full-bleed `--ink` dark section, two-column copy + form, underline inputs focusing yellow, mustard submit "Send it along →" with ink-offset shadow, post-submit confirmation copy.
- **Footer** — `paper-dark`, four columns + mandatory mono tiny line "© 2026 Art Restart Studio · Registered member, OATA + CATA · All client art appears with consent, anonymised."
- **BookModal** — global modal triggered by every "Book a call" CTA. Backdrop blur, paper card with 8px ink-offset shadow, underline inputs, orange submit. On submit → switch view to **Confirm screen** ("That's *in.*" + back-to-studio link).

### 4. Voice + copy pass
Strip every wellness phrase from the current site ("journey", "safe space", "healing", "wellness", "show up as you are", "whole self"). Use sentence case, em-dashes with spaces, Oxford commas, italic on the emotional word in serif headlines, `→` (Unicode) on CTAs. All compliance copy from prior passes (no "psychotherapy/treat/cure/diagnose", no testimonials, footer scope disclosure) preserved.

### 5. Non-negotiables enforced
- No emoji anywhere — all decoration via `doodles.svg` `<use>` references.
- No pure white / pure black — only `--paper` surfaces and `--ink` text.
- Card shadows are `4px 4px 0 var(--ink)` (hover grows to `6px 6px 0`, press shrinks to `2px 2px 0`). No Gaussian blur on cards.
- Corners: 0 / 4px inputs / 6px cards / 14px modules. No pills.
- Body wears `.grain` paper-noise overlay.

### 6. Files touched
- **New**: `src/styles/colors_and_type.css`, `public/brand/logo.svg`, `public/brand/mark.svg`, `public/brand/doodles.svg`
- **Edited**: `src/routes/index.tsx` (full rewrite), `src/styles.css` (import tokens + append component CSS + grain), `src/routes/__root.tsx` (Google Fonts link, body class="grain", title/meta refresh)
- **Reused as-is**: `src/assets/randi-portrait.jpg`, `gallery-01..06.jpg`, `public/video/artrestartvideo1.mp4` (kept available but the new hero is the split-field design — video is no longer the hero background, since the spec calls for a static color-block composition; flagging this)
- **Untouched**: `design_handoff_art_restart/` (kept as living spec)

### 7. Flagged deviations / open items
- The new hero is a static split-field per the design spec — the previously-implemented hero video is dropped from the homepage. If you want the video preserved somewhere, say so and I'll place it in a secondary editorial section.
- Sub-routes ("For You", "For Orgs", "Writing", "About") in `App.jsx` are reached via in-page sections + smooth-scroll anchors in this build (matches the current single-page structure). Splitting into separate TanStack routes is a follow-up.
- Doodle SVG sprite is referenced via `${BASE_URL}brand/doodles.svg#id` so it works on Lovable preview and GitHub Pages.
- No real session photography yet — `gallery-*.jpg` placeholders are reused inside the new pigment plates with Fig. captions (per spec's "solid-pigment plate fallback" rule).

