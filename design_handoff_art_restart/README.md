# Art Restart — Developer Handoff

**Project:** Art Restart therapeutic creative-arts studio website
**Prepared by:** Lumin8 Agency
**Date:** April 2026
**Fidelity:** High-fidelity — pixel-accurate colors, typography, spacing, and interactions. Recreate these designs precisely in your codebase.

---

## About These Files

The files in `reference/` are **HTML/JSX design prototypes** — they show exactly how the site should look and behave. Your task is to **recreate these designs in your existing codebase** (React, Next.js, etc.) using its established patterns.

Do not ship the reference files directly. Use them as a precise visual and behavioral spec.

Open `reference/index.html` in a browser (or via a local server) to see the full interactive prototype: Home → For You → For Orgs → Writing → About → Book a call modal → Confirm screen.

---

## Quick Start

### 1. Import the token file
Copy `colors_and_type.css` to your project and import it globally:

```css
/* In your global CSS entry point */
@import './colors_and_type.css';
```

This gives you every design token as CSS custom properties immediately.

### 2. Copy the assets
```
assets/
  logo.svg       — primary hand-drawn wordmark (260×80)
  mark.svg       — circular "A" brand mark (80×80)
  doodles.svg    — SVG sprite of 12 filled shapes + line doodles
```

Use doodles via `<use>`:
```html
<svg viewBox="0 0 80 80" width="40" height="40" style="color: #E86A33;">
  <use href="/assets/doodles.svg#sparkle-thick"/>
</svg>
```

### 3. Reference the component JSX
Each file in `reference/` maps to a page section. Lift the structure and styles into your own components.

---

## Design Tokens — Full Reference

### Colors

#### Retro Pigment Palette (the four brand colors)
| Token | Value | Usage |
|---|---|---|
| `--orange` | `#E86A33` | Primary CTA, italic display emphasis, active states |
| `--orange-deep` | `#B64715` | Hover on orange, dark field variant |
| `--orange-light` | `#F19467` | Apricot tint, hover highlights |
| `--teal` | `#3FB6B8` | For-Orgs sections, cool anchor |
| `--teal-deep` | `#1F7E82` | Dark teal fields |
| `--teal-light` | `#8FD6D8` | Pool tint, quiet backgrounds |
| `--yellow` | `#FCD848` | Sunny pop, marquee bands, badge fills |
| `--yellow-deep` | `#D9AE1E` | Hover on yellow |
| `--yellow-light` | `#FFE98A` | Butter tint, soft banners |
| `--pink` | `#F29FB6` | Warm accent, soft cards |
| `--pink-deep` | `#CE5F82` | Dark pink fields |
| `--pink-light` | `#F9C8D5` | Powder tint, callouts |

#### Base Surfaces
| Token | Value | Usage |
|---|---|---|
| `--paper` | `#F2E8D5` | Primary field — warm eggshell cream |
| `--paper-warm` | `#EADFC7` | Alt section backgrounds |
| `--paper-cool` | `#E8E2D0` | Cooler cream variant |
| `--paper-dark` | `#D9CBAE` | Footer field, aged page |
| `--ink` | `#1F1A14` | All text, borders, card shadows |
| `--ink-soft` | `#3A2F22` | Body text |
| `--ink-faint` | `#6B5C48` | Fig. labels, metadata, captions |
| `--rule` | `#C4B494` | Hairline dividers on paper |
| `--fg-on-dark` | `#F6EDD9` | Text on ink/dark fields |

#### Semantic aliases
```css
--accent-primary:   var(--orange)
--accent-secondary: var(--teal)
--accent-warm:      var(--yellow)
--accent-soft:      var(--pink)
/* Back-compat: --terracotta = --orange, --mustard = --yellow, --rose = --pink */
```

---

### Typography

#### Font Families
```css
--font-display: 'Fraunces', 'Cooper Black', Georgia, serif;
--font-body:    'DM Sans', -apple-system, 'Helvetica Neue', sans-serif;
--font-mono:    'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
--font-hand:    'Caveat', 'Bradley Hand', cursive;  /* signatures only */
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@400..700&display=swap" rel="stylesheet">
```

#### Type Scale
| Token | Value | Usage |
|---|---|---|
| `--fs-hero` | `clamp(3.5rem, 8vw, 7.5rem)` | Hero headline (~120px) |
| `--fs-h1` | `clamp(2.5rem, 5vw, 4.25rem)` | Page titles (~68px) |
| `--fs-h2` | `clamp(2rem, 3.6vw, 3rem)` | Section headings (~48px) |
| `--fs-h3` | `clamp(1.5rem, 2.4vw, 2rem)` | Subsection (~32px) |
| `--fs-h4` | `1.375rem` | 22px |
| `--fs-body` | `1.0625rem` | 17px — main body text |
| `--fs-small` | `0.9375rem` | 15px |
| `--fs-caption` | `0.8125rem` | 13px — italic captions |
| `--fs-fig` | `0.75rem` | 12px — mono archival labels |

#### Typography rules
- **Display headings** (Fraunces): `font-variation-settings: "opsz" 144, "SOFT" 40, "WONK" 1`
- **Italic emphasis** within a heading: same font, italic, color `var(--orange)`, `font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1`
- **Fig. labels**: `font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-faint)`
- **Body text**: `font-family: var(--font-body); font-size: 17px; line-height: 1.6; color: var(--ink-soft); max-width: 64ch`
- Line heights: display `0.98`, headings `1.08`, body `1.6`

---

### Spacing
```css
--sp-1:  4px    --sp-2:  8px    --sp-3:  12px
--sp-4:  16px   --sp-5:  24px   --sp-6:  32px
--sp-7:  48px   --sp-8:  64px   --sp-9:  96px
--sp-10: 144px
```
Section vertical padding: typically `72px` top/bottom. Side padding: `40px` at desktop.

---

### Border Radii
| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Buttons, inputs, small tags |
| `--radius-md` | `8px` | — |
| `--radius-lg` | `14px` | Cards |
| `--radius-xl` | `24px` | Large image plates |
| `--radius-blob` | `60% 40% 55% 45% / 50% 60% 40% 50%` | Decorative blob shapes |

---

### Shadows
**Ink-offset shadows** (hard, no blur — like misregistered print):
```css
/* Default card */
box-shadow: 4px 4px 0 var(--ink);
/* Hover — nudge element -2px,-2px simultaneously */
box-shadow: 6px 6px 0 var(--ink);
/* Pressed */
box-shadow: 2px 2px 0 var(--ink);
/* Color offset (e.g. on pink card) */
box-shadow: 4px 4px 0 var(--pink-deep);
/* Soft lift (modals only) */
box-shadow: 0 18px 32px -10px rgba(31,26,20,0.25);
```

---

### Motion
```css
--ease-paper:   cubic-bezier(0.22, 0.61, 0.36, 1);
--ease-dissolve: cubic-bezier(0.4, 0.0, 0.2, 1);
--t-fast:  160ms
--t-base:  280ms
--t-slow:  520ms
```
Hover on buttons/cards: `transform: translate(-2px, -2px)` + shadow grows. Active/press: `translate(2px, 2px)` + shadow shrinks.

---

### Paper Grain
Apply a subtle noise texture to any surface:
```css
/* Add class="grain" to any container, OR copy this pattern: */
.my-section {
  position: relative;
}
.my-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--grain); /* defined in colors_and_type.css */
  background-size: 220px 220px;
  opacity: 0.35;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 0;
}
.my-section > * { position: relative; z-index: 1; }
```

---

## Page Sections

### 1. TopBar (`reference/TopBar.jsx`)
- **Height:** ~68px. `position: sticky; top: 0; z-index: 10`
- **Background:** `var(--paper)`. Border-bottom: `1px solid var(--rule)`
- **Brand:** mark SVG (36px) + Fraunces 700 22px wordmark. "Restart" in italic orange.
- **Nav links:** DM Sans 14.5px. Active state: squiggly orange underline drawn in SVG (`underline-scribble` doodle), `bottom: -6px`, `height: 6px`
- **CTA button:** `background: var(--ink); color: var(--fg-on-dark); padding: 10px 16px; border-radius: 3px`

### 2. Hero (`reference/Hero.jsx`)
- **Split color field:** top half `#F29FB6` (pink), bottom half `#FCD848` (yellow). Achieved with an absolutely-positioned yellow `div` from `top: 58%` to bottom.
- **Headline:** Fraunces 900, `clamp(56px, 8vw, 108px)`, uppercase, `-webkit-text-stroke: 1px #1F1A14`, color `#E86A33`. Italic `<em>` same color.
- **Three photo plates:** left (aqua, `rotate(-2deg)`), center (orange, oval `border-radius: 50% / 40%`), right (yellow, `rotate(3deg)`). All `border: 2px solid #1F1A14`, `box-shadow: 6px 6px 0 #1F1A14`.
- **Doodles scattered:** sparkle-thick (yellow), asterisk-thick (aqua), bolt-thick (aqua), star-thick (yellow).
- **Rotating badge:** circular SVG with `textPath` along arc reading "HELD SPACE FOR REAL PEOPLE ·". `animation: spin 22s linear infinite`.
- **Lede + CTAs:** bottom-left, max-width 320px. Orange primary button + ghost button.

### 3. Marquee (`reference/Marquee.jsx`)
- **Background:** `var(--yellow)` `#FCD848`. Border top+bottom `1.5px solid var(--ink)`.
- **Text:** Fraunces 600 italic 28px. Content loops: "No psych talk. · No wellness pastels. · No stock photos. · Real sessions. · Real materials. · Real mess."
- **Animation:** `translateX(-50%)` over `28s linear infinite`.

### 4. Offerings / Cards (`reference/Offerings.jsx`)
Three-column grid. Each card:
- Border: `1.5px solid var(--ink)`. Radius: `6px`. Shadow: `5px 5px 0 var(--ink)`.
- **16:9 image slot** at top with colored background + SVG placeholder + `Fig. 0X` plate-cap bottom-left.
- Body: Fraunces 700 30px title (italic orange `<em>`), DM Sans 14.5px body, dashed rule separator, price + arrow.
- **Variants:** default (paper), teal, orange — each flips all text/border/shadow to match.
- **Hover:** `translate(-2px, -2px)`, shadow grows to `7px 7px 0`.

### 5. Practitioner (`reference/Practitioner.jsx`)
- **Background:** `var(--paper-warm)`.
- Two-column grid: photo plate left (mustard yellow bg, `rotate(-1.2deg)`, `box-shadow: 6px 6px 0 var(--ink)`), blockquote right.
- **Quote:** Fraunces 500, `clamp(28px, 3.2vw, 42px)`. Italic `<em>` in orange.
- **Signature:** Caveat 32px, `rotate(-2deg)`. Role in mono uppercase beside it.

### 6. Writing / Essays (`reference/Writing.jsx`)
- Two-column grid of essay rows.
- Each row: `border-top: 1.5px solid var(--ink)`, padding-top 18px.
- Tag (mono uppercase orange) + date (mono faint) on one row.
- Fraunces 600 26px title + DM Sans 14.5px summary.
- Hover: title turns orange.

### 7. Contact (`reference/Contact.jsx`)
- **Background:** `var(--ink)` full-bleed dark section.
- Two-column: copy left, form right.
- Inputs: `border-bottom: 1.5px solid rgba(246,237,217,0.35)`. Focus: `border-color: var(--yellow)`.
- Textarea: `border: 1.5px solid rgba(246,237,217,0.35); border-radius: 4px`.
- Submit button: yellow bg `#FCD848`, ink text, `box-shadow: 4px 4px 0 var(--ink)`.
- On submit: replace form with confirmation copy.

### 8. Footer (`reference/Footer.jsx`)
- **Background:** `var(--paper-dark)` `#D9CBAE`. Border-top: `1.5px solid var(--ink)`.
- Four-column grid: brand blurb + three link columns.
- Attribution line at bottom in mono 10.5px uppercase: "© 2026 Art Restart Studio · Registered member, OATA + CATA · All client art appears with consent, anonymised."

### 9. Book Modal (`reference/BookModal.jsx`)
- Backdrop: `rgba(31,26,20,0.6)` + `backdrop-filter: blur(2px)`.
- Modal: `background: var(--paper); border: 1.5px solid var(--ink); border-radius: 6px; box-shadow: 8px 8px 0 var(--ink); max-width: 520px`.
- Same underline inputs as contact form.
- Submit: orange bg button.

---

## Button Patterns

```css
/* Base button */
padding: 14px 24px;
font-family: var(--font-body); font-size: 17px; font-weight: 500;
border: 2px solid var(--ink); border-radius: 4px;
box-shadow: 4px 4px 0 var(--ink);
transition: transform 160ms, box-shadow 160ms;

/* Hover */
transform: translate(-1px, -1px);
box-shadow: 5px 5px 0 var(--ink);

/* Active/press */
transform: translate(2px, 2px);
box-shadow: 2px 2px 0 var(--ink);

/* Primary (orange) */
background: #E86A33; color: #F6EDD9;

/* Secondary (teal) */
background: #3FB6B8; color: #F6EDD9;

/* Default (paper) */
background: var(--paper); color: var(--ink);

/* Ghost */
background: transparent; box-shadow: none;
/* Ghost hover: background: var(--paper-warm); no shadow, no translate */
```

---

## Form Field Patterns

```css
/* Underline input (default) */
border: 0;
border-bottom: 1.5px solid var(--ink);
padding: 8px 2px 10px;
font-family: var(--font-body); font-size: 16px;
background: transparent;

/* Focus */
border-bottom-color: var(--orange);

/* Textarea */
border: 1.5px solid var(--ink); border-radius: 4px;
padding: 10px 12px; resize: none;

/* Label */
font-family: var(--font-mono); font-size: 10.5px;
letter-spacing: 0.16em; text-transform: uppercase;
color: var(--ink-faint);
```

---

## Doodle Usage

All doodles in `assets/doodles.svg`. Reference via `<use>`:

```html
<!-- Filled shapes (retro palette) -->
<svg viewBox="0 0 80 80" width="48" height="48" style="color: #E86A33;">
  <use href="/assets/doodles.svg#sparkle-thick"/>
</svg>

<!-- Available filled IDs -->
sparkle-thick  star-thick    diamond-thick  heart-thick
asterisk-thick flower-thick  sun-thick      blob-thick
arrow-thick    circle-thick  moon-thick     bolt-thick

<!-- Line doodles (thin strokes) -->
arrow  arrow-curve  squiggle  underline-scribble  zigzag  scallop
```

**Rules:**
- Color via `currentColor` — set `color:` on the `<svg>` element.
- Max 2 doodles per screen section.
- Rotate randomly between `rotate(-14deg)` and `rotate(14deg)`.
- Typical size: 32–64px. Occasional large accent: up to 96px.
- **Never use emoji.** Use doodles instead.

---

## Voice & Copy Rules

- First-person ("I write back personally"), second-person for the reader ("You come in").
- Sentence case everywhere — no title case, no ALL CAPS except Fig. mono labels.
- No wellness vocabulary: never "journey", "healing space", "safe container", "show up as you are".
- CTA copy ends with `→` (Unicode, not `->`)
- Concrete nouns: "paint, clay, collage, scissors, tape, chairs, sink, Tuesday."
- Em-dashes `—` with spaces. Oxford comma.

---

## What to Replace

- **Photo plates:** SVG figure sketches are placeholders. Replace with real session photography (anonymised per OATA/CATA ethics). All photos should be warm-toned, film-grain treated, cropped to the plate's aspect ratio.
- **Logo/mark:** `assets/logo.svg` and `assets/mark.svg` are hand-drawn SVG prototypes. Replace with Naomi's final illustrated versions when ready.
- **Pricing copy:** "$160 / session" is placeholder. Update to current rates.
- **Contact email:** `randi@artrestart.studio` — confirm live address before shipping.

---

## Files in This Package

```
design_handoff_art_restart/
├── README.md                   ← this file
├── colors_and_type.css         ← all design tokens (IMPORT THIS)
├── assets/
│   ├── logo.svg                ← wordmark
│   ├── mark.svg                ← brand mark
│   └── doodles.svg             ← SVG sprite (12 filled + 6 line doodles)
└── reference/
    ├── index.html              ← full interactive prototype (open in browser)
    ├── styles.css              ← all component CSS
    ├── TopBar.jsx              ← sticky navigation
    ├── Hero.jsx                ← split-field hero
    ├── Marquee.jsx             ← scrolling values band
    ├── Offerings.jsx           ← three-card offerings grid
    ├── Practitioner.jsx        ← Randi quote block
    ├── Writing.jsx             ← essays list
    ├── Contact.jsx             ← dark ink contact form
    ├── Footer.jsx              ← footer
    ├── BookModal.jsx           ← booking modal
    └── App.jsx                 ← screen routing / orchestration
```
