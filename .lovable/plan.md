

## Restructure home page — calmer, copy-first, Mack & Pouya flow

The user wants: (1) hero photo plates moved out from behind the headline so copy is readable, (2) hero must blend into the rest of the page (no hard seam), (3) less visual noise overall, (4) full new copy + new section structure.

### Approach

Rewrite `src/routes/index.tsx` to a single scrolling page with these sections in order, all on the same `--paper` background so nothing feels "disconnected":

1. **Hero** — Mack & Pouya pattern, but quieter:
   - Pink top half, yellow bottom half with the split running through the *middle of the headline area* (not under it). The same pink + yellow continues into the next section's top edge to remove the seam.
   - Headline left-aligned in its own column (≈55% width on desktop), photo plates pushed to the right column only — they no longer overlap the text. Two plates on desktop (rounded-rect aqua + oval orange), one plate stacks below copy on mobile.
   - Copy: "Welcome to Art *Restart*." + tagline "Where creativity meets healing, and stick figures are highly encouraged." + the two-sentence lede.
   - Two CTAs: orange primary "Book a free consult →", ghost "Learn more".
   - Doodles reduced from ~5 to 2 (one sparkle, one asterisk), kept off the text column.
   - Rotating badge moved to bottom-right of hero so it doesn't crowd the copy.

2. **Mission / "Art is for EVERYONE"** — paper bg, centered, generous whitespace. Fraunces headline "Art is for *everyone*." + the "Nervous about your art skills?" paragraph.

3. **Services — 3-card layout** — paper bg, three offering cards side-by-side (Individual & Group Therapy, Organizational Partnerships, Coming Soon: The Studio). Each card: small doodle icon (sparkle / asterisk / star from sprite — no emoji), Fraunces italic-orange title, body, ink-bordered ghost button. Ink-offset shadow `4px 4px 0 var(--ink)`.

4. **"The transformative power of *art*"** — slightly tinted band (warm paper variant). Short intro + 5-item benefits grid (Empowerment, Brain Health, Emotional Release, Connection, Relaxation), each with a small doodle bullet.

5. **About — 50/50 split** — left: Randi portrait in mustard plate (rotated -1.2°, ink-offset shadow). Right: "Meet Randi Yaffa, D-TATI" + role line + the three bio paragraphs + Caveat signature.

6. **Trust banner** — thin horizontal strip, mono uppercase: "Proud to have collaborated with —" then partner names separated by `·`.

7. **Community & Updates — 2 columns** — left: Blog/News teaser with "Read the latest →"; right: Gallery teaser (3-image collage from existing `gallery-*.jpg`) with "View the gallery →".

8. **Footer / Final CTA** — dark `--ink` bg anchoring the page. "Ready to *restart*?" + "Email Randi" button + Email/Phone/Instagram placeholder lines + the existing OATA/CATA compliance line.

### Changes to make seam disappear

- Remove the abrupt yellow→paper cut at hero bottom. Instead: hero's yellow band fades into a thin painted border into the Mission section's paper, OR the Mission section opens with a yellow accent bar at the very top so the eye reads continuity.
- Keep the body `.grain` overlay across all sections so texture is unbroken.
- All section dividers become Fraunces section eyebrows (`§ 02 — services`) instead of color blocks.

### Noise reduction

- Drop the marquee, the writing/essays grid, the painted-surface gallery tiles, and the hero-edge "Fig. 01 — The Studio · Toronto" caption.
- Doodles capped at ~1–2 per section, never near body copy.
- Keep ink-offset card shadow language but no rotated cards except the Randi plate.

### Files touched

- `src/routes/index.tsx` — full rewrite of section composition + new copy.
- `src/styles.css` — add `.hero-2col` grid, hero→mission transition rule, benefits grid, trust strip, two-col community block, footer-dark CTA. Remove unused marquee/writing-related classes if no longer referenced.
- No new assets needed; reuse `randi-portrait.jpg`, `gallery-01..06.jpg`, existing doodle sprite.

### Out of scope / flagged

- Real email, phone, Instagram handle — using bracketed placeholders per the brief; user fills in later.
- "Coming Soon: The Studio" waitlist button currently opens the existing book modal in newsletter mode (no separate backend); flag for future Lovable Cloud wiring.
- The "safe space" / "healing" wording in the new copy contradicts the earlier voice rules in `design_handoff_art_restart/README.md`. Honoring the user's explicit new copy verbatim and overriding the prior voice guard for this pass.

