import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import randiPortrait from "@/assets/randi-portrait.jpg";
import gallery01 from "@/assets/gallery-01.jpg";
import gallery02 from "@/assets/gallery-02.jpg";
import gallery03 from "@/assets/gallery-03.jpg";
import gallery04 from "@/assets/gallery-04.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";

export const Route = createFileRoute("/")({
  component: ArtRestartHome,
});

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const palette = {
  paper: "#F2E9E4",
  paperDeep: "#E8DFD7",
  paperDark: "#DCD1C7",
  terracotta: "#D96C4A",
  teal: "#2A4B5C",
  mustard: "#E8A547",
  rose: "#C97B6D",
  ink: "#1A1612",
  inkMuted: "#5C5048",
  inkLight: "#8A7F75",
  line: "#1A1612",
  lineLight: "#C9BFB5",
};

const fonts = {
  display: `"Fraunces", "Playfair Display", Georgia, serif`,
  body: `"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`,
  mono: `"JetBrains Mono", "Courier New", monospace`,
};

const size = {
  hero: "clamp(3rem, 9vw, 7.5rem)",
  h1: "clamp(2.25rem, 6vw, 4.5rem)",
  h2: "clamp(1.75rem, 4vw, 3rem)",
  h3: "clamp(1.25rem, 2.5vw, 1.875rem)",
  h4: "clamp(1.125rem, 1.75vw, 1.375rem)",
  body: "clamp(1rem, 1.15vw, 1.125rem)",
  small: "0.875rem",
  caption: "0.75rem",
};

const space = {
  section: "clamp(5rem, 10vw, 9rem)",
  block: "clamp(3rem, 5vw, 5rem)",
  gap: "clamp(1.5rem, 3vw, 2.5rem)",
  tight: "1rem",
};

// ============================================================================
// HOOKS
// ============================================================================

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ============================================================================
// SVG MARKS
// ============================================================================

const ArrowMark = ({
  size: s = 80,
  color = palette.terracotta,
  style = {},
}: {
  size?: number;
  color?: string;
  style?: CSSProperties;
}) => (
  <svg viewBox="0 0 120 80" width={s} height={s * 0.66} style={style} aria-hidden="true">
    <path
      d="M8 42 C 30 28, 55 58, 82 36 M 70 22 L 82 36 L 72 52"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Starburst = ({
  size: s = 60,
  color = palette.mustard,
  style = {},
}: {
  size?: number;
  color?: string;
  style?: CSSProperties;
}) => (
  <svg viewBox="0 0 100 100" width={s} height={s} style={style} aria-hidden="true">
    <g stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 50 + Math.cos(angle) * 18;
        const y1 = 50 + Math.sin(angle) * 18;
        const x2 = 50 + Math.cos(angle) * (i % 2 === 0 ? 38 : 30);
        const y2 = 50 + Math.sin(angle) * (i % 2 === 0 ? 38 : 30);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  </svg>
);

// ============================================================================
// PRIMITIVES
// ============================================================================

const Container = ({
  children,
  style = {},
  as: Tag = "div",
}: {
  children: ReactNode;
  style?: CSSProperties;
  as?: React.ElementType;
}) => {
  const Comp = Tag;
  return (
    <Comp
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        ...style,
      }}
    >
      {children}
    </Comp>
  );
};

const Section = ({
  children,
  bg,
  style = {},
  id,
}: {
  children: ReactNode;
  bg?: string;
  style?: CSSProperties;
  id?: string;
}) => (
  <section
    id={id}
    style={{
      background: bg || "transparent",
      padding: `${space.section} 0`,
      position: "relative",
      ...style,
    }}
  >
    {children}
  </section>
);

type ButtonVariant = "primary" | "secondary" | "ghost";

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  style = {},
  type,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
  type?: "button" | "submit";
}) => {
  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: palette.teal,
      color: palette.paper,
      borderBottom: `3px solid ${palette.ink}`,
    },
    secondary: {
      background: palette.terracotta,
      color: palette.paper,
      borderBottom: `3px solid ${palette.ink}`,
    },
    ghost: {
      background: "transparent",
      color: palette.ink,
      border: `1.5px solid ${palette.ink}`,
    },
  };
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.95rem 1.6rem",
    fontFamily: fonts.body,
    fontSize: "0.95rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    borderRadius: "2px",
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    textDecoration: "none",
    ...variants[variant],
    ...style,
  };
  const hover = (e: React.MouseEvent | React.FocusEvent, isOver: boolean) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = isOver ? "translateY(-2px)" : "translateY(0)";
    el.style.boxShadow = isOver ? `0 6px 0 -1px ${palette.ink}` : "none";
  };
  const handlers = {
    onMouseEnter: (e: React.MouseEvent) => hover(e, true),
    onMouseLeave: (e: React.MouseEvent) => hover(e, false),
    onFocus: (e: React.FocusEvent) => hover(e, true),
    onBlur: (e: React.FocusEvent) => hover(e, false),
  };
  return href ? (
    <a href={href} style={base} {...handlers} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type={type || "button"} style={base} {...handlers} onClick={onClick}>
      {children}
    </button>
  );
};

const FigLabel = ({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) => (
  <div className="fig-label" style={style}>
    {children}
  </div>
);

const SectionEyebrow = ({ number, label }: { number: string; label: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.75rem",
    }}
  >
    <FigLabel>Fig. {number}</FigLabel>
    <span
      style={{
        height: "1px",
        background: palette.ink,
        flex: "0 0 3rem",
        opacity: 0.4,
      }}
    />
    <FigLabel style={{ color: palette.ink }}>{label}</FigLabel>
  </div>
);

// ============================================================================
// NAV
// ============================================================================

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#individuals", label: "For You" },
    { href: "#organizations", label: "For Organizations" },
    { href: "#about", label: "About Randi" },
    { href: "#studio-notes", label: "Journal" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? palette.paper : "transparent",
        borderBottom: scrolled ? `1px solid ${palette.lineLight}` : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem clamp(1.25rem, 4vw, 3rem)",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: fonts.display,
            fontWeight: 600,
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: palette.ink,
          }}
          aria-label="Art Restart, home"
        >
          Art Restart
          <ArrowMark size={28} color={palette.terracotta} />
        </a>

        <nav
          className="hide-mobile"
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: palette.ink,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = palette.terracotta)}
              onMouseLeave={(e) => (e.currentTarget.style.color = palette.ink)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="primary" href="#contact" style={{ padding: "0.7rem 1.25rem" }}>
            Free Consult
          </Button>
        </nav>

        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          style={{ display: "none", padding: "0.5rem", color: palette.ink }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6 L22 22 M22 6 L6 22" strokeLinecap="round" />
            ) : (
              <>
                <line x1="4" y1="9" x2="24" y2="9" strokeLinecap="round" />
                <line x1="4" y1="19" x2="24" y2="19" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div
          style={{
            background: palette.paper,
            borderTop: `1px solid ${palette.lineLight}`,
            padding: "1.5rem 1.5rem 2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: fonts.display,
                  fontSize: "1.5rem",
                  color: palette.ink,
                }}
              >
                {l.label}
              </a>
            ))}
            <Button href="#contact" onClick={() => setOpen(false)}>
              Free Consult
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

// ============================================================================
// HERO
// ============================================================================

const PathCard = ({
  label,
  title,
  body,
  href,
  accent,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
  accent: string;
}) => (
  <a
    href={href}
    className="path-card"
    style={{
      display: "block",
      padding: "clamp(1.75rem, 3vw, 2.5rem)",
      background: palette.paperDeep,
      borderLeft: `3px solid ${accent}`,
      transition: "transform 0.25s ease, background 0.25s ease",
      textDecoration: "none",
      color: palette.ink,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.background = palette.paperDark;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.background = palette.paperDeep;
    }}
  >
    <FigLabel style={{ color: accent }}>{label}</FigLabel>
    <h3
      style={{
        marginTop: "0.75rem",
        fontSize: size.h3,
        color: palette.ink,
        fontVariationSettings: '"SOFT" 100',
      }}
    >
      {title} <span style={{ color: accent }}>→</span>
    </h3>
    <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: palette.inkMuted }}>{body}</p>
  </a>
);

const Hero = () => {
  return (
    <section
      id="top"
      style={{
        padding: "clamp(3rem, 7vw, 6rem) 0 clamp(4rem, 9vw, 7rem)",
        background: palette.paper,
        position: "relative",
        overflow: "hidden",
        minHeight: "min(92vh, 880px)",
      }}
    >
      {/* Video layer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          background: `linear-gradient(160deg, ${palette.paperDeep} 0%, ${palette.paper} 50%, ${palette.paperDark} 100%)`,
        }}
      >
        <div
          data-hero-poster-mobile
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 30% 20%, ${palette.paper} 0%, ${palette.paperDeep} 55%, ${palette.paperDark} 100%)`,
          }}
        />
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transformOrigin: "center center",
          }}
        >
          <source src={`${import.meta.env.BASE_URL}video/artrestartvideo1.mp4`} type="video/mp4" />
        </video>
        {/* Warm paper gradient overlay for legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, rgba(242,233,228,0.82) 0%, rgba(242,233,228,0.55) 35%, rgba(242,233,228,0.72) 70%, rgba(242,233,228,0.95) 100%)`,
          }}
        />
        {/* Terracotta/amber wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, rgba(217,108,74,0.18) 0%, rgba(232,165,71,0.10) 50%, rgba(42,75,92,0.12) 100%)`,
            mixBlendMode: "multiply",
          }}
        />
        {/* Film grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            mixBlendMode: "multiply",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content layer */}
      <Container style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <FigLabel>Vol. 01 — Thornhill, Ontario</FigLabel>
          <FigLabel>Est. by Randi Yaffa, D-TATI</FigLabel>
        </div>

        <div style={{ position: "relative" }}>
          <Starburst
            size={72}
            color={palette.mustard}
            style={{ position: "absolute", right: "8%", top: "-2.5rem" }}
          />
          <h1
            className="hero-in hero-in-1"
            style={{
              fontSize: size.hero,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 0.94,
              color: palette.ink,
              maxWidth: "18ch",
              fontVariationSettings: '"SOFT" 100',
              textShadow: "0 1px 0 rgba(242,233,228,0.8)",
            }}
          >
            A studio for{" "}
            <em
              style={{
                fontStyle: "italic",
                color: palette.terracotta,
                fontVariationSettings: '"SOFT" 100',
              }}
            >
              starting
            </em>{" "}
            again —{" "}
            <span style={{ position: "relative", whiteSpace: "nowrap" }}>
              through art.
              <ArrowMark
                size={64}
                color={palette.terracotta}
                style={{
                  position: "absolute",
                  right: "-3.5rem",
                  top: "0.4rem",
                  transform: "rotate(28deg)",
                }}
              />
            </span>
          </h1>

          <p
            className="hero-in hero-in-2"
            style={{
              marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
              fontSize: size.h4,
              lineHeight: 1.4,
              color: palette.inkMuted,
              maxWidth: "44ch",
              textShadow: "0 1px 0 rgba(242,233,228,0.6)",
            }}
          >
            Art therapy, creative workshops, and expressive arts programming — for people who want
            to feel something, and the organizations that make space for them.
          </p>
        </div>

        <div
          className="stack-mobile"
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: space.gap,
            maxWidth: "880px",
          }}
        >
          <div className="hero-in hero-in-3">
            <PathCard
              label="Path A"
              title="For You"
              body="Individual sessions, group work, and creative wellness for anyone who wants to start again — no art background required."
              href="#individuals"
              accent={palette.terracotta}
            />
          </div>
          <div className="hero-in hero-in-4">
            <PathCard
              label="Path B"
              title="For Your Organization"
              body="Art, drama, music and movement programming for retirement homes, inclusion programs, hospitals and schools."
              href="#organizations"
              accent={palette.teal}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

// ============================================================================
// SECTION DIVIDER (hand-drawn squiggle)
// ============================================================================

const SectionDivider = ({ color = palette.terracotta }: { color?: string }) => (
  <div
    aria-hidden="true"
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "clamp(2rem, 4vw, 3.5rem) 0",
      background: palette.paper,
    }}
  >
    <svg viewBox="0 0 320 24" width="240" height="18" style={{ overflow: "visible" }}>
      <path
        d="M2 12 C 30 2, 50 22, 80 12 S 130 2, 160 12 S 210 22, 240 12 S 290 2, 318 12"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// ============================================================================
// MANIFESTO
// ============================================================================

const Manifesto = () => (
  <Section bg={palette.ink} style={{ padding: `${space.block} 0`, color: palette.paper }}>
    <Container>
      <div
        className="stack-mobile"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          alignItems: "center",
        }}
      >
        <Starburst size={90} color={palette.mustard} />
        <p
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            lineHeight: 1.2,
            color: palette.paper,
            maxWidth: "none",
            fontVariationSettings: '"SOFT" 100',
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          If you can scribble, can’t hold a tune, tripped while dancing or draw stick people —{" "}
          <span style={{ color: palette.mustard, fontStyle: "normal" }}>
            you’re exactly who this is for.
          </span>
        </p>
      </div>
    </Container>
  </Section>
);

// ============================================================================
// TRUST BAR
// ============================================================================

const TrustBar = () => {
  const partners = [
    "Reena",
    "Sheena's Place",
    "JCC / Schwartz Reisman",
    "University Health Network",
    "The Battle Centre",
    "DANI",
    "Youth Empowerment",
  ];

  return (
    <Section
      bg={palette.paperDeep}
      style={{
        padding: `${space.block} 0`,
        borderTop: `1px solid ${palette.lineLight}`,
        borderBottom: `1px solid ${palette.lineLight}`,
      }}
    >
      <Container>
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(1.5rem, 4vw, 3rem)",
            alignItems: "center",
          }}
        >
          <div>
            <FigLabel>Fig. 02</FigLabel>
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: "1.15rem",
                marginTop: "0.5rem",
                color: palette.ink,
                fontStyle: "italic",
                maxWidth: "18ch",
              }}
            >
              Trusted by Ontario’s leading care communities.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(1.25rem, 3vw, 2.5rem)",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {partners.map((p) => (
              <div
                key={p}
                style={{
                  fontFamily: fonts.display,
                  fontSize: "1.05rem",
                  color: palette.inkMuted,
                  fontStyle: "italic",
                  letterSpacing: "0.01em",
                  opacity: 0.85,
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// WHAT WE DO
// ============================================================================

const WhatWeDo = () => {
  useReveal();
  const modalities = [
    {
      no: "01",
      title: "Visual Arts",
      body: "Painting, drawing, collage, mixed media — the original expressive language. Process over outcome, always.",
    },
    {
      no: "02",
      title: "Music",
      body: "Creating, listening, responding. A way in for people who struggle to put feelings into words.",
    },
    {
      no: "03",
      title: "Drama & Movement",
      body: "Play, embodiment, story. Especially powerful for kids, teens, and anyone who learned to live in their head.",
    },
    {
      no: "04",
      title: "Creative Writing",
      body: "Journalling, poetry, personal narrative. Sometimes the most direct route is still the written one.",
    },
  ];

  return (
    <Section id="services" bg={palette.paper}>
      <Container>
        <SectionEyebrow number="03" label="What Happens Here" />
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              className="reveal"
              style={{
                fontSize: size.h1,
                fontWeight: 500,
                lineHeight: 0.98,
                maxWidth: "14ch",
                fontVariationSettings: '"SOFT" 80',
              }}
            >
              Four doors{" "}
              <em style={{ color: palette.terracotta, fontVariationSettings: '"SOFT" 100' }}>
                into the same room.
              </em>
            </h2>
            <p
              className="reveal"
              style={{
                marginTop: "1.5rem",
                fontSize: "1.1rem",
                color: palette.inkMuted,
                maxWidth: "42ch",
              }}
            >
              Art Restart is a multi-modality creative wellness practice. We don’t pick one
              lane — we follow what works for you, weaving art, music, drama, movement and writing
              into sessions that meet you where you actually are.
            </p>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1rem",
                color: palette.inkMuted,
                maxWidth: "42ch",
              }}
            >
              In person in the GTA, or virtual anywhere in Ontario.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {modalities.map((m) => (
              <div
                key={m.no}
                className="reveal"
                style={{
                  padding: "1.75rem 1.5rem",
                  background: palette.paperDeep,
                  borderTop: `2px solid ${palette.terracotta}`,
                  minHeight: "190px",
                }}
              >
                <FigLabel style={{ color: palette.terracotta }}>{m.no}</FigLabel>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    margin: "0.6rem 0 0.75rem",
                    fontVariationSettings: '"SOFT" 100',
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: "0.93rem", color: palette.inkMuted, lineHeight: 1.5 }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// FOR INDIVIDUALS
// ============================================================================

const ForIndividuals = () => {
  useReveal();
  const outcomes = [
    {
      head: "You're dealing with something big.",
      body: "Grief. A diagnosis. A life that changed without asking. Art gives you a side door in when the front door feels impossible.",
    },
    {
      head: "You're anxious, stuck, or burnt out.",
      body: "Stress, anxiety, that low hum of overwhelm. Making something with your hands can shift what talking alone can\u2019t.",
    },
    {
      head: "You're a parent of a kid who doesn't do talk.",
      body: "Neurodivergent kids. Kids who\u2019ve been through something. Kids who just need a place that\u2019s theirs. Play is the work.",
    },
    {
      head: "You just want a creative, nourishing hour.",
      body: "You don\u2019t need a diagnosis to deserve time with materials, music, and someone who\u2019s rooting for you.",
    },
  ];

  return (
    <Section id="individuals" bg={palette.terracotta} style={{ color: palette.paper }}>
      <Container>
        <SectionEyebrow number="04" label="For You — Path A" />
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              className="reveal"
              style={{
                fontSize: size.h1,
                color: palette.paper,
                fontVariationSettings: '"SOFT" 80',
                lineHeight: 0.98,
              }}
            >
              You don’t need
              <br />
              to be{" "}
              <em style={{ color: palette.mustard, fontVariationSettings: '"SOFT" 100' }}>
                “an artist.”
              </em>
            </h2>
            <p
              className="reveal drop-cap"
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                color: palette.paper,
                maxWidth: "38ch",
                lineHeight: 1.6,
              }}
            >
              Art Restart is for everyone. Seniors, adults, teens, kids. If you can scribble,
              can’t hold a tune, or draw stick people — that’s perfect. This is a safe,
              nurturing space, tailored to individuals or small groups.
            </p>
            <p
              className="reveal"
              style={{
                marginTop: "1.25rem",
                fontSize: "1rem",
                color: palette.paper,
                opacity: 0.9,
                maxWidth: "38ch",
                lineHeight: 1.6,
              }}
            >
              Creative expression supports people through anxiety, depression, PTSD, chronic
              illness, grief, stress, and the ordinary weight of being a person right now.
              It’s also deeply helpful for neurodivergent individuals and survivors of trauma.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button
                href="#contact"
                style={{
                  background: palette.paper,
                  color: palette.ink,
                  borderBottom: `3px solid ${palette.ink}`,
                }}
              >
                Book a Free 15-min Chat
              </Button>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1.25rem" }}>
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "1.5rem 1.5rem 1.5rem 1.75rem",
                  background: "rgba(242, 233, 228, 0.08)",
                  borderLeft: `2px solid ${palette.mustard}`,
                }}
              >
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontVariationSettings: '"SOFT" 100',
                    color: palette.paper,
                    marginBottom: "0.5rem",
                  }}
                >
                  {o.head}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: palette.paper,
                    opacity: 0.85,
                    lineHeight: 1.5,
                  }}
                >
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// FOR ORGANIZATIONS
// ============================================================================

const ForOrganizations = () => {
  useReveal();
  const programs = [
    {
      tag: "Retirement & Memory Care",
      title: "Creative programming that residents actually look forward to.",
      body: "Multi-week visual arts, music and movement residencies designed for senior living communities. Supports cognitive engagement, emotional expression, and social connection.",
    },
    {
      tag: "Inclusion Programs",
      title: "Neurodivergent-affirming creative sessions.",
      body: "Ongoing or project-based expressive arts programming for inclusion programs, day programs and support networks. Built from real experience with Reena, DANI, and the JCC.",
    },
    {
      tag: "Hospitals & Clinical Settings",
      title: "Art-based wellness for patients, families and staff.",
      body: "Wellness programming for hospital units, waiting areas, and clinical teams. Supports patients facing chronic illness, families in crisis, and the staff who hold them.",
    },
    {
      tag: "Schools & Youth Orgs",
      title: "Expressive arts for young people who need more than talk.",
      body: "Group sessions, assemblies, and staff workshops for schools, youth empowerment programs and community organizations.",
    },
    {
      tag: "Workplace Wellness",
      title: "Staff days that aren\u2019t another icebreaker.",
      body: "Half-day and full-day creative wellness workshops for teams. Real tools for stress, burnout and reconnection — facilitated with care, not corporate gloss.",
    },
  ];

  return (
    <Section id="organizations" bg={palette.teal} style={{ color: palette.paper }}>
      <Container>
        <SectionEyebrow number="05" label="For Organizations — Path B" />
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              className="reveal"
              style={{
                fontSize: size.h1,
                color: palette.paper,
                fontVariationSettings: '"SOFT" 80',
                lineHeight: 0.98,
              }}
            >
              Creative arts
              <br />
              that{" "}
              <em style={{ color: palette.mustard, fontVariationSettings: '"SOFT" 100' }}>
                integrate
              </em>{" "}
              into your care model.
            </h2>
            <p
              className="reveal"
              style={{
                marginTop: "1.5rem",
                fontSize: "1.05rem",
                color: palette.paper,
                opacity: 0.9,
                maxWidth: "38ch",
                lineHeight: 1.6,
              }}
            >
              Art Restart builds long-term partnerships with care communities across the GTA. We
              design programming that fits the rhythm of your residents, participants, or staff —
              and we stay long enough to see it work.
            </p>
            <p
              className="reveal"
              style={{
                marginTop: "1.25rem",
                fontSize: "1rem",
                color: palette.paper,
                opacity: 0.8,
                maxWidth: "38ch",
                lineHeight: 1.6,
              }}
            >
              We’ve worked with Reena, Sheena’s Place, UHN, the JCC, The Battle Centre,
              DANI, and Youth Empowerment. Each engagement is shaped around the community
              it’s for.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button
                href="#contact"
                style={{
                  background: palette.mustard,
                  color: palette.ink,
                  borderBottom: `3px solid ${palette.ink}`,
                }}
              >
                Request a Program Proposal
              </Button>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {programs.map((p, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "1.75rem",
                  background: "rgba(242, 233, 228, 0.06)",
                  borderLeft: `2px solid ${palette.mustard}`,
                }}
              >
                <FigLabel style={{ color: palette.mustard }}>{p.tag}</FigLabel>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    margin: "0.6rem 0 0.5rem",
                    fontVariationSettings: '"SOFT" 100',
                    color: palette.paper,
                    maxWidth: "34ch",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: palette.paper,
                    opacity: 0.8,
                    lineHeight: 1.55,
                    maxWidth: "48ch",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// STUDIO NOTES
// ============================================================================

const StudioNotes = () => {
  useReveal();
  const notes = [
    {
      type: "Studio Work",
      caption: "Exploring boundaries and emotional containment through mixed-media collage.",
      image: gallery01,
    },
    {
      type: "Group Session",
      caption:
        "A retirement community\u2019s collaborative piece — gesture, colour, and memory.",
      image: gallery02,
    },
    {
      type: "Journal",
      caption:
        "What actually happens in a first session (spoiler: a lot less than people expect).",
      image: gallery03,
      isArticle: true,
    },
    {
      type: "Studio Work",
      caption: "Processing transition through repetitive mark-making and layered paper.",
      image: gallery04,
    },
    {
      type: "Journal",
      caption:
        "Why \u201cI can\u2019t draw\u201d is the best starting point you could possibly bring.",
      image: gallery05,
      isArticle: true,
    },
    {
      type: "Organizational",
      caption: "Staff wellness day at a community service org — painting as reset.",
      image: gallery06,
    },
  ];

  return (
    <Section id="studio-notes" bg={palette.paper}>
      <Container>
        <SectionEyebrow number="06" label="Studio Notes — Journal & Work" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <h2
            className="reveal"
            style={{
              fontSize: size.h1,
              fontWeight: 500,
              maxWidth: "16ch",
              fontVariationSettings: '"SOFT" 80',
              lineHeight: 0.98,
            }}
          >
            A living archive of{" "}
            <em style={{ color: palette.terracotta, fontVariationSettings: '"SOFT" 100' }}>
              the work.
            </em>
          </h2>
          <p
            className="reveal"
            style={{ fontSize: "1rem", color: palette.inkMuted, maxWidth: "36ch" }}
          >
            Process notes, anonymized work from individuals and groups, and occasional writing on
            what art therapy actually looks like. All imagery shared with explicit written consent.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {notes.map((n, i) => (
            <div key={i} className="reveal">
              <div
                style={{
                  aspectRatio: "4 / 5",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  padding: "1rem",
                  background: `radial-gradient(ellipse at 25% 20%, rgba(242,233,228,0.55) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(26,22,18,0.45) 0%, transparent 60%), linear-gradient(${135 + (i % 3) * 25}deg, ${palette.paperDeep}, ${palette.paperDark})`,
                  boxShadow: "inset 0 0 60px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={n.image}
                  alt={`Placeholder studio image, ${n.type}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <FigLabel
                  style={{
                    color: palette.paper,
                    opacity: 0.95,
                    position: "relative",
                    zIndex: 1,
                    background: "rgba(0,0,0,0.35)",
                    padding: "0.3rem 0.55rem",
                  }}
                >
                  Fig. {String(i + 1).padStart(2, "0")}
                </FigLabel>
                {n.isArticle && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      fontSize: "0.7rem",
                      fontFamily: fonts.mono,
                      color: palette.paper,
                      background: "rgba(0,0,0,0.45)",
                      padding: "0.3rem 0.6rem",
                      letterSpacing: "0.1em",
                      zIndex: 1,
                    }}
                  >
                    READ →
                  </div>
                )}
              </div>
              <div style={{ padding: "0.85rem 0 0" }}>
                <FigLabel>{n.type}</FigLabel>
                <p
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.95rem",
                    color: palette.ink,
                    lineHeight: 1.45,
                  }}
                >
                  {n.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "0.82rem",
            color: palette.inkLight,
            fontStyle: "italic",
            maxWidth: "58ch",
          }}
        >
          All client artwork is displayed with explicit written consent and maintained in
          accordance with CATA and OATA ethical privacy guidelines. Identifying details have been
          removed unless the contributor has requested attribution in writing. Images shown here
          are placeholders.
        </p>
      </Container>
    </Section>
  );
};

// ============================================================================
// ABOUT
// ============================================================================

const About = () => {
  useReveal();
  return (
    <Section id="about" bg={palette.paperDeep}>
      <Container>
        <SectionEyebrow number="07" label="About Randi" />
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "start",
          }}
        >
          <div className="reveal">
            <div
              style={{
                aspectRatio: "4 / 5",
                position: "relative",
                overflow: "hidden",
                background: palette.paperDark,
              }}
            >
              <img
                src={randiPortrait}
                alt="Randi Yaffa, art therapist, in her studio"
                loading="lazy"
                width={896}
                height={1152}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(0,0,0,0.4)",
                  padding: "0.3rem 0.55rem",
                }}
              >
                <FigLabel style={{ color: palette.paper }}>Fig. 07 — The Practitioner</FigLabel>
              </div>
            </div>
            <div style={{ marginTop: "0.85rem", padding: "0 0.25rem" }}>
              <FigLabel>Randi Yaffa, D-TATI</FigLabel>
              <p style={{ marginTop: "0.4rem", fontSize: "0.9rem", color: palette.inkMuted }}>
                Art Therapist · BAFTA-nominated Producer · BAA, Film & Photography
              </p>
            </div>
          </div>

          <div>
            <h2
              className="reveal"
              style={{
                fontSize: size.h1,
                fontVariationSettings: '"SOFT" 80',
                lineHeight: 0.98,
                maxWidth: "16ch",
              }}
            >
              Before she was a therapist, she was a{" "}
              <em style={{ color: palette.terracotta, fontVariationSettings: '"SOFT" 100' }}>
                producer.
              </em>
            </h2>

            <p
              className="reveal drop-cap"
              style={{
                marginTop: "1.75rem",
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
              }}
            >
              Randi Yaffa is a qualified art therapist, a graduate of the Toronto Art Therapy
              Institute, and a world-class film and television producer. Her work has been
              recognized with a British Academy Award (BAFTA) nomination for the short animated
              film <em>Plumber</em>, and several Canadian Screen Award nominations. She’s
              produced some of the most talked-about television, shorts, and commercials on air,
              and has been trusted with some of the industry’s most iconic characters.
            </p>

            <p
              className="reveal"
              style={{
                marginTop: "1.25rem",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
                color: palette.inkMuted,
              }}
            >
              Two decades of helping artists tell stories on screen taught her something specific:
              creative expression isn’t decoration. It’s how people figure themselves
              out. Art Restart is the practice built from that conviction — a place where
              individuals, families, and care organizations can use the full spectrum of expressive
              arts to process what’s happening in their lives.
            </p>

            <p
              className="reveal"
              style={{
                marginTop: "1.25rem",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
                color: palette.inkMuted,
              }}
            >
              When she isn’t in the studio, Randi is volunteering, working on another graduate
              degree, walking her dog Elvis, and trying to raise two kids who are kind and curious
              about the world.
            </p>

            <div
              className="reveal"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <ArrowMark size={48} color={palette.terracotta} />
            </div>

            <div
              className="reveal"
              style={{
                marginTop: "2.5rem",
                padding: "1.75rem",
                background: palette.paper,
                borderLeft: `3px solid ${palette.teal}`,
              }}
            >
              <FigLabel>Credentials & Associations</FigLabel>
              <ul
                style={{
                  marginTop: "0.85rem",
                  display: "grid",
                  gap: "0.45rem",
                  fontSize: "0.95rem",
                  color: palette.ink,
                }}
              >
                <li>— D-TATI, Toronto Art Therapy Institute</li>
                <li>— BAA, Film & Photography</li>
                <li>— Member, Canadian Art Therapy Association (CATA)</li>
                <li>— Member, Ontario Art Therapy Association (OATA)</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// FAQ
// ============================================================================

const FAQ = () => {
  useReveal();
  const [open, setOpen] = useState<number>(0);

  const faqs = [
    {
      q: "Do I have to be good at art?",
      a: "Not even a little. Most of the people who walk in here haven\u2019t made art since high school. The work isn\u2019t about the result — it\u2019s about what happens while you\u2019re making it.",
    },
    {
      q: "What actually happens in a first session?",
      a: "We talk, briefly, about what brought you here. Then we work with materials — paint, collage, clay, whatever fits. You don\u2019t perform. You don\u2019t interpret. You just make, and we talk about it as it comes up. Sessions are 60 minutes.",
    },
    {
      q: "Is this therapy, or is it an art class?",
      a: "It\u2019s therapeutic creative arts facilitation. It\u2019s not a class — there\u2019s no skill you\u2019re trying to acquire. It\u2019s also not clinical psychotherapy in the regulated sense. It sits in the space between: real support, real tools, rooted in the creative process.",
    },
    {
      q: "Do you work with kids and teens?",
      a: "Yes. Individual and small group work for kids and teens, including neurodivergent young people and kids navigating family transitions, grief, or big feelings that don\u2019t have words yet.",
    },
    {
      q: "In person or virtual?",
      a: "Both. In-person sessions in the Thornhill / GTA area. Virtual sessions available across Ontario — materials can be shipped or sourced locally.",
    },
    {
      q: "How does it work for organizations?",
      a: "We design custom programming for your context — a retirement residence, an inclusion program, a hospital unit, a school, a staff team. Engagements range from single workshops to ongoing multi-week residencies. Start by requesting a proposal and we\u2019ll shape something that fits.",
    },
    {
      q: "Is this covered by insurance?",
      a: "Coverage depends on your specific plan and the exact service you\u2019re receiving. We\u2019re happy to provide receipts with full credential details so you can submit to your insurer directly. Ask on your free consult.",
    },
    {
      q: "What if I cry? What if I don't?",
      a: "Both are fine. Neither is the goal. The goal is that you leave having made something, and having felt a little more like yourself than when you walked in.",
    },
  ];

  return (
    <Section bg={palette.paper}>
      <Container>
        <SectionEyebrow number="08" label="Frequently Asked" />
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              className="reveal"
              style={{
                fontSize: size.h1,
                fontVariationSettings: '"SOFT" 80',
                lineHeight: 0.98,
                maxWidth: "12ch",
              }}
            >
              Questions people{" "}
              <em style={{ color: palette.terracotta, fontVariationSettings: '"SOFT" 100' }}>
                actually ask.
              </em>
            </h2>
            <p
              className="reveal"
              style={{
                marginTop: "1.5rem",
                fontSize: "1rem",
                color: palette.inkMuted,
                maxWidth: "36ch",
              }}
            >
              If your question isn’t here, book a free 15-minute chat and ask. There’s no
              wrong starting point.
            </p>
          </div>

          <div className="reveal" style={{ borderTop: `1px solid ${palette.lineLight}` }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${palette.lineLight}` }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  style={{
                    width: "100%",
                    padding: "1.35rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    textAlign: "left",
                    cursor: "pointer",
                    color: palette.ink,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.display,
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      fontVariationSettings: '"SOFT" 80',
                      lineHeight: 1.2,
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.display,
                      color: palette.terracotta,
                      fontSize: "1.5rem",
                      transform: open === i ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.2s",
                      flex: "0 0 auto",
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p
                    style={{
                      padding: "0 0 1.4rem",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: palette.inkMuted,
                      maxWidth: "58ch",
                    }}
                  >
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// CONTACT
// ============================================================================

const Field = ({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) => (
  <label style={{ display: "block", marginBottom: "1rem" }}>
    <span
      style={{
        display: "block",
        fontFamily: fonts.mono,
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: palette.inkMuted,
        marginBottom: "0.4rem",
      }}
    >
      {label} {required && "*"}
    </span>
    {textarea ? (
      <textarea
        name={name}
        required={required}
        rows={4}
        style={{
          width: "100%",
          padding: "0.75rem 0.85rem",
          background: palette.paperDeep,
          border: "none",
          borderBottom: `2px solid ${palette.ink}`,
          fontFamily: fonts.body,
          fontSize: "1rem",
          color: palette.ink,
          resize: "vertical",
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        required={required}
        style={{
          width: "100%",
          padding: "0.75rem 0.85rem",
          background: palette.paperDeep,
          border: "none",
          borderBottom: `2px solid ${palette.ink}`,
          fontFamily: fonts.body,
          fontSize: "1rem",
          color: palette.ink,
        }}
      />
    )}
  </label>
);

const FieldGroup = ({ children }: { children: ReactNode }) => (
  <div
    className="stack-mobile"
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      marginBottom: "1rem",
    }}
  >
    {children}
  </div>
);

const Contact = () => {
  useReveal();
  const [formType, setFormType] = useState<"individual" | "org">("individual");

  return (
    <Section id="contact" bg={palette.ink} style={{ color: palette.paper }}>
      <Container>
        <SectionEyebrow number="09" label="Start Here" />
        <div
          className="stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              className="reveal"
              style={{
                fontSize: size.h1,
                fontVariationSettings: '"SOFT" 80',
                color: palette.paper,
                lineHeight: 0.98,
              }}
            >
              Let’s see if
              <br />
              we’re a{" "}
              <em style={{ color: palette.mustard, fontVariationSettings: '"SOFT" 100' }}>
                good fit.
              </em>
            </h2>
            <p
              className="reveal"
              style={{
                marginTop: "1.5rem",
                fontSize: "1.05rem",
                color: palette.paper,
                opacity: 0.9,
                maxWidth: "32ch",
                lineHeight: 1.6,
              }}
            >
              A free 15-minute chat — phone or video, whichever feels easier — where you can ask
              anything and I can help you figure out if this is the right next step for you or your
              organization.
            </p>

            <div
              className="reveal"
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: `1px solid rgba(242, 233, 228, 0.2)`,
              }}
            >
              <FigLabel style={{ color: palette.mustard }}>Direct Contact</FigLabel>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontSize: "1rem",
                  color: palette.paper,
                  lineHeight: 1.8,
                }}
              >
                <div>
                  <a
                    href="mailto:hello@art-restart.com"
                    className="inline-link"
                    style={{ color: palette.paper }}
                  >
                    hello@art-restart.com
                  </a>
                </div>
                <div style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  Thornhill, Ontario · In person + virtual across Ontario
                </div>
              </div>
            </div>
          </div>

          <form
            className="reveal"
            style={{
              background: palette.paper,
              color: palette.ink,
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              borderTop: `3px solid ${palette.terracotta}`,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch within 48 hours.");
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
                marginBottom: "1.75rem",
              }}
            >
              {(
                [
                  { key: "individual", label: "I'm reaching out for myself / my family" },
                  { key: "org", label: "I'm reaching out for an organization" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setFormType(opt.key)}
                  style={{
                    padding: "0.85rem 1rem",
                    background: formType === opt.key ? palette.ink : palette.paperDeep,
                    color: formType === opt.key ? palette.paper : palette.ink,
                    fontFamily: fonts.body,
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    textAlign: "left",
                    lineHeight: 1.3,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    borderLeft: `2px solid ${
                      formType === opt.key ? palette.terracotta : palette.lineLight
                    }`,
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <FieldGroup>
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </FieldGroup>

            {formType === "org" && (
              <FieldGroup>
                <Field label="Organization" name="organization" required />
                <Field label="Your role" name="role" />
              </FieldGroup>
            )}

            {formType === "individual" ? (
              <Field
                label="What brings you here? (You can be brief — we'll talk more on the call.)"
                name="message"
                textarea
              />
            ) : (
              <Field
                label="Tell us a bit about what you have in mind — audience, goals, format, timing."
                name="message"
                textarea
              />
            )}

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="primary"
                style={{ background: palette.terracotta }}
              >
                {formType === "individual" ? "Book a Free 15-min Chat" : "Request a Proposal"}
              </Button>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: palette.inkLight,
                  maxWidth: "28ch",
                  lineHeight: 1.4,
                }}
              >
                We typically respond within 48 hours. Your information is kept confidential.
              </span>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

// ============================================================================
// FOOTER
// ============================================================================

const FooterCol = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <FigLabel>{title}</FigLabel>
    <div style={{ marginTop: "0.85rem", display: "grid", gap: "0.5rem" }}>{children}</div>
  </div>
);

const FooterLink = ({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    style={{ fontSize: "0.95rem", color: palette.ink, transition: "color 0.2s" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = palette.terracotta)}
    onMouseLeave={(e) => (e.currentTarget.style.color = palette.ink)}
  >
    {children}
  </a>
);

const Footer = () => (
  <footer
    style={{
      background: palette.paperDark,
      padding: `${space.block} 0 ${space.tight}`,
      color: palette.ink,
    }}
  >
    <Container>
      <div
        className="stack-mobile"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          marginBottom: "3rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: fonts.display,
              fontSize: "1.6rem",
              fontWeight: 600,
              fontVariationSettings: '"SOFT" 100',
            }}
          >
            Art Restart
            <ArrowMark size={32} color={palette.terracotta} />
          </div>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.95rem",
              color: palette.inkMuted,
              maxWidth: "38ch",
              lineHeight: 1.55,
            }}
          >
            Therapeutic creative arts for individuals, families, and the organizations that care
            for them. Based in Thornhill, Ontario. Serving the Greater Toronto Area in person, and
            all of Ontario virtually.
          </p>
        </div>

        <FooterCol title="Explore">
          <FooterLink href="#individuals">For You</FooterLink>
          <FooterLink href="#organizations">For Organizations</FooterLink>
          <FooterLink href="#about">About Randi</FooterLink>
          <FooterLink href="#studio-notes">Studio Notes</FooterLink>
        </FooterCol>

        <FooterCol title="Start">
          <FooterLink href="#contact">Free Consult</FooterLink>
          <FooterLink href="#contact">Request Proposal</FooterLink>
          <FooterLink href="mailto:hello@art-restart.com">hello@art-restart.com</FooterLink>
        </FooterCol>

        <FooterCol title="Find Us">
          <FooterLink href="https://instagram.com" external>
            Instagram
          </FooterLink>
          <FooterLink href="#studio-notes">Journal</FooterLink>
        </FooterCol>
      </div>

      <div
        style={{
          paddingTop: "2rem",
          borderTop: `1px solid ${palette.lineLight}`,
          display: "grid",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            color: palette.inkMuted,
            lineHeight: 1.55,
            maxWidth: "80ch",
          }}
        >
          <strong>Scope of practice.</strong> Art Restart provides therapeutic arts facilitation
          and creative wellness support. While creative arts therapy offers meaningful mental
          health and emotional benefits, these services do not constitute the clinical practice of
          psychotherapy as defined under the Psychotherapy Act (2007) and regulated by the College
          of Registered Psychotherapists of Ontario (CRPO).
        </p>
        <p
          style={{
            fontSize: "0.82rem",
            color: palette.inkMuted,
            lineHeight: 1.55,
            maxWidth: "80ch",
          }}
        >
          All client artwork displayed on this site is shared with explicit written informed
          consent and in accordance with the ethical standards of the Canadian Art Therapy
          Association (CATA) and the Ontario Art Therapy Association (OATA).
        </p>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.78rem",
            color: palette.inkLight,
            fontFamily: fonts.mono,
            letterSpacing: "0.05em",
          }}
        >
          <span>© {new Date().getFullYear()} Art Restart — Randi Yaffa, D-TATI</span>
          <span>
            <a href="#" style={{ color: palette.inkLight, marginRight: "1.25rem" }}>
              Privacy
            </a>
            <a href="#" style={{ color: palette.inkLight }}>
              Accessibility
            </a>
          </span>
        </div>
      </div>
    </Container>
  </footer>
);

// ============================================================================
// PAGE
// ============================================================================

function ArtRestartHome() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <SectionDivider color={palette.mustard} />
        <TrustBar />
        <WhatWeDo />
        <SectionDivider />
        <ForIndividuals />
        <ForOrganizations />
        <SectionDivider color={palette.teal} />
        <StudioNotes />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
