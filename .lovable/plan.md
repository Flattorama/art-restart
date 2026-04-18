
## Art Restart Website — Build Plan

Adapt the provided `App.jsx` (1970s Pan Am editorial aesthetic) into the existing TanStack Start project, preserving the single-page scrolling design with anchor sections (intentional per the brief — homepage as magazine cover).

### Sections (single-page with anchor nav)
1. **Sticky Nav** — wordmark + arrow logo, links to sections, "Free Consult" CTA, mobile menu
2. **Hero** — magazine cover with "A studio for *starting* again — through art." + dual-path cards (For You / For Organizations)
3. **Trust Bar** — institutional partner logos (typeset placeholders: Reena, Sheena's Place, JCC, UHN, etc.)
4. **For Individuals** (`#individuals`) — drop-cap intro, offerings (adults, teens/kids, seniors, neurodivergent-affirming), session formats
5. **For Organizations** (`#organizations`) — teal section, programming for retirement homes, hospitals, schools, workplaces
6. **About Randi** (`#about`) — portrait + bio, D-TATI credential, BAFTA nomination, CATA/OATA
7. **Studio Notes / Journal** (`#studio-notes`) — 6 placeholder gallery tiles with process-focused captions + CATA/OATA consent disclaimer
8. **FAQ** — accordion (including "Is this therapy or an art class?")
9. **Contact** (`#contact`) — toggle "For myself" / "For organization" with field/CTA changes
10. **Footer** — scope disclosure (mandatory, ≥0.78rem), Instagram, email

### Design system
- **Palette**: eggshell `#F2E9E4`, terracotta `#D96C4A`, slate teal `#2A4B5C`, mustard `#E8A547`, dusty rose, warm ink
- **Fonts**: Fraunces (display, with SOFT axis) + DM Sans (body) + JetBrains Mono (Fig. labels) — Google Fonts
- **Effects**: paper grain noise overlay, drop caps, "Fig. 01" eyebrows, hand-drawn SVG marks (arrow, starburst, squiggle, figure), reveal-on-scroll with `prefers-reduced-motion` respected

### Compliance guardrails (locked in)
- No "psychotherapy/psychotherapist/treat/cure/diagnose"
- No client testimonials
- Footer scope disclosure on every load
- Gallery captions describe process, not clients

### Generated placeholder images (AI, via Lovable AI Gateway)
- **Randi's headshot** — warm editorial portrait, 1970s magazine feel
- **6 gallery tiles** — abstract therapeutic process imagery (paint textures, collage, mark-making) — clearly NOT real client work
- **OG cover** (1200×630) — editorial magazine composition in brand palette
- **Favicon** — small terracotta arrow SVG

### Technical adaptation
- Build as a single TanStack Start route (`src/routes/index.tsx`) since the design is explicitly single-page editorial
- Inline style objects per the original (no Tailwind), shared palette/fonts/size/space constants
- Update `__root.tsx` head() with Art Restart title, meta description, OG tags, and JSON-LD LocalBusiness + Person schema
- Replace placeholder `index.tsx` content
- Anchor smooth-scroll, sticky nav with scroll state, mobile hamburger, FAQ accordion, contact form toggle (placeholder submit alert)

### Out of scope (flagged per instructions)
- CRPO registration confirmation (defaulting to NOT registered — safe copy)
- Real booking integration (CTA scrolls to contact form)
- Real client artwork (placeholders only)
- Form backend wiring
