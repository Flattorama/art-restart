import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

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

const BASE = import.meta.env.BASE_URL;
const doodle = (id: string) => `${BASE}brand/doodles.svg#${id}`;
const markUrl = `${BASE}brand/mark.svg`;

type Section = "home" | "you" | "orgs" | "writing" | "about";

// ---------- TopBar ----------
function TopBar({
  current,
  onNavigate,
  onBook,
}: {
  current: Section;
  onNavigate: (s: Section) => void;
  onBook: () => void;
}) {
  const [open, setOpen] = useState(false);
  const items: { key: Section; label: string }[] = [
    { key: "home", label: "The Studio" },
    { key: "you", label: "For You" },
    { key: "orgs", label: "For Orgs" },
    { key: "writing", label: "Writing" },
    { key: "about", label: "About" },
  ];
  return (
    <nav className={"topbar" + (open ? " open" : "")}>
      <div
        className="brand"
        onClick={() => {
          onNavigate("home");
          setOpen(false);
        }}
      >
        <img src={markUrl} alt="" />
        <span className="brand-name">
          Art <em>Restart</em>
        </span>
      </div>
      <div className="nav">
        {items.map((it) => (
          <a
            key={it.key}
            className={current === it.key ? "active" : ""}
            onClick={() => {
              onNavigate(it.key);
              setOpen(false);
            }}
          >
            {it.label}
          </a>
        ))}
      </div>
      <button className="cta" onClick={onBook}>
        Book a call →
      </button>
      <button
        className="menu-btn"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
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
    </nav>
  );
}

// ---------- Hero ----------
function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="hero-wrap">
      <div className="hero-yellow" />
      <div className="hero-inner">
        <h1 className="hero-headline">
          A studio for <em>starting</em> again — <em>through art.</em>
        </h1>

        {/* Doodles */}
        <svg viewBox="0 0 80 80" className="hero-doodle" style={{ top: 40, left: "42%", width: 44, height: 44, color: "var(--yellow)", transform: "rotate(-12deg)" }}>
          <use href={doodle("sparkle-thick")} />
        </svg>
        <svg viewBox="0 0 80 80" className="hero-doodle" style={{ top: 200, left: "4%", width: 36, height: 36, color: "var(--yellow-deep)", transform: "rotate(8deg)" }}>
          <use href={doodle("sparkle-thick")} />
        </svg>
        <svg viewBox="0 0 80 80" className="hero-doodle" style={{ top: 360, left: "44%", width: 62, height: 62, color: "var(--teal)", transform: "rotate(-6deg)" }}>
          <use href={doodle("asterisk-thick")} />
        </svg>
        <svg viewBox="0 0 60 80" className="hero-doodle" style={{ top: 130, right: "30%", width: 42, height: 56, color: "var(--teal)", transform: "rotate(10deg)" }}>
          <use href={doodle("bolt-thick")} />
        </svg>
        <svg viewBox="0 0 80 80" className="hero-doodle" style={{ top: 380, right: "6%", width: 38, height: 38, color: "var(--orange)", transform: "rotate(14deg)" }}>
          <use href={doodle("star-thick")} />
        </svg>

        {/* Plates */}
        <div
          className="hero-plate p1"
          style={{ left: "2%", top: "30%", width: 240, aspectRatio: "4/5", background: "var(--teal)", transform: "rotate(-2deg)", borderRadius: 14 }}
        >
          <img src={gallery01} alt="" loading="eager" />
          <span className="cap">Fig. 01 — Studio</span>
        </div>
        <div
          className="hero-plate p2"
          style={{ left: "33%", top: "10%", width: 360, aspectRatio: "3/4", background: "var(--orange)", borderRadius: "50% / 40%" }}
        >
          <img src={gallery02} alt="" loading="eager" />
          <span className="cap">Fig. 02 — Hands</span>
        </div>
        <div
          className="hero-plate p3"
          style={{ right: "4%", top: "6%", width: 220, aspectRatio: "4/5", background: "var(--yellow)", transform: "rotate(3deg)", borderRadius: 14 }}
        >
          <img src={gallery03} alt="" loading="eager" />
          <span className="cap">Fig. 03 — Table</span>
        </div>

        {/* Rotating badge */}
        <div className="hero-badge">
          <svg viewBox="0 0 150 150" className="spin" style={{ width: "100%", height: "100%" }}>
            <defs>
              <path id="arcTxt" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
            </defs>
            <text style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: ".16em", fontWeight: 600 }} fill="var(--ink)">
              <textPath href="#arcTxt">HELD SPACE FOR REAL PEOPLE · HELD SPACE FOR REAL PEOPLE · </textPath>
            </text>
          </svg>
          <svg viewBox="0 0 60 32" style={{ position: "absolute", inset: 0, margin: "auto", width: 44, height: 24, color: "var(--ink)" }}>
            <use href={doodle("underline-scribble")} />
          </svg>
        </div>

        {/* Lede */}
        <div style={{ position: "absolute", left: "2%", bottom: 32, maxWidth: 320, zIndex: 3 }}>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)", margin: "0 0 14px", maxWidth: "none" }}>
            You come in. You make something. We talk about what shows up — no psych-talk, no prior art needed.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn btn--primary" onClick={onBook}>
              Book a free call →
            </button>
            <button className="btn btn--ghost">Read the practice</button>
          </div>
        </div>

        <div className="hero-fig">Fig. 01 — The Studio · Toronto</div>
      </div>
    </section>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const words = [
    "No psych talk.",
    "No wellness pastels.",
    "No stock photos.",
    "Real sessions.",
    "Real materials.",
    "Real mess.",
  ];
  const loop = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((w, i) => (
          <span key={i}>
            {w}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Offerings ----------
function Offerings() {
  const items = [
    {
      tone: "",
      fig: "Fig. 01 · For You",
      cap: "Fig. 04 — Table light",
      img: gallery04,
      title: (
        <>
          Individual <em>sessions</em>
        </>
      ),
      body: "Sixty minutes, one-to-one. In-person at the Leslieville studio or online across Ontario. Open-ended or time-bound — your call.",
      price: "$160 / session",
    },
    {
      tone: "teal",
      fig: "Fig. 02 · For Orgs",
      cap: "Fig. 05 — Group hands",
      img: gallery05,
      title: (
        <>
          Group <em>residencies</em>
        </>
      ),
      body: "Weekly programs for long-term care homes, schools, and inclusion spaces. Typical residency runs 8–12 weeks with full ethics documentation.",
      price: "By brief",
    },
    {
      tone: "orange",
      fig: "Fig. 03 · Talks",
      cap: "Fig. 06 — On stage",
      img: gallery06,
      title: (
        <>
          Speaking &amp; <em>writing</em>
        </>
      ),
      body: "Workshops and keynotes on creative grief, estrangement, and re-starting. Available for conferences, podcasts, and staff days.",
      price: "By invite",
    },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Fig. II — What we do</div>
          <h2>
            Three ways in,
            <br />
            <em>one practice.</em>
          </h2>
        </div>
        <p>
          Every piece of the work is held to the same standard — ethically sound, clinically grounded, and open to anyone tired of being asked how they feel and would like to make something instead.
        </p>
      </div>
      <div className="offerings">
        {items.map((it, i) => (
          <div key={i} className={"offer " + it.tone}>
            <div className="img-slot">
              <img src={it.img} alt="" loading="lazy" />
              <span className="plate-cap">{it.cap}</span>
            </div>
            <div className="body">
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                {it.fig}
              </div>
              <h3>{it.title}</h3>
              <p className="desc">{it.body}</p>
              <div className="offer-meta">
                <span className="price">{it.price}</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Practitioner ----------
function Practitioner() {
  return (
    <section className="section section-warm">
      <div className="practitioner">
        <div className="photo">
          <img src={randiPortrait} alt="Randi Yaffa, in the studio." />
          <div className="plate-cap">Fig. 04 — The Practitioner</div>
        </div>
        <div>
          <div className="eyebrow">Fig. III — About Randi</div>
          <blockquote>
            "I spent twenty years making films about people in hard moments. Now I <em>sit with</em> them — and hand them a pencil."
          </blockquote>
          <div className="signed">
            <span className="scribble">— Randi Yaffa</span>
            <span className="role">BAFTA-nominee · OATA, CATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Writing ----------
function Writing() {
  const essays = [
    {
      tag: "Essay",
      date: "Apr 2026",
      title: (
        <>
          On <em>restarting</em> after loss
        </>
      ),
      body: "Why starting again isn't a metaphor — it's a material practice. Notes from a year of intake sessions.",
    },
    {
      tag: "Field note",
      date: "Mar 2026",
      title: (
        <>
          The <em>clay</em> tells on you
        </>
      ),
      body: "What happens when a client who has talked around something for six weeks sits down at a wheel for the first time.",
    },
    {
      tag: "Essay",
      date: "Feb 2026",
      title: (
        <>
          A case for <em>ugly</em> art
        </>
      ),
      body: "Every beautiful piece in this studio was made by someone not trying to make a beautiful piece. There is a lesson there.",
    },
    {
      tag: "Talk",
      date: "Jan 2026",
      title: (
        <>
          Grief, on a <em>schedule</em>
        </>
      ),
      body: "From a keynote at the OATA annual gathering. On building time-bound rituals for open-ended pain.",
    },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Fig. IV — From the studio</div>
          <h2>
            Writing, talks,
            <br />
            <em>field notes.</em>
          </h2>
        </div>
        <p>
          Short essays and longer pieces from inside the practice. Nothing prescriptive — everything here is something that happened on a particular Tuesday.
        </p>
      </div>
      <div className="essays">
        {essays.map((e, i) => (
          <a key={i} className="essay">
            <div className="row">
              <span className="tag">{e.tag}</span>
              <span className="date">{e.date}</span>
            </div>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section section-dark" id="contact">
      <div className="contact-wrap">
        <div className="contact-copy">
          <div className="eyebrow">Fig. V — Start here</div>
          <h2>
            Say <em>hello.</em>
          </h2>
          <p>
            Tell me a little about what brought you. No commitment, no long intake form — I write back personally within a couple of days.
          </p>
          <div
            style={{
              marginTop: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(246,237,217,0.55)",
            }}
          >
            Or email · randi@artrestart.studio
          </div>
        </div>
        {!sent ? (
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label>
              <span className="cap">Your name</span>
              <input placeholder="Alex Martin" />
            </label>
            <label>
              <span className="cap">Email</span>
              <input type="email" placeholder="you@somewhere.com" />
            </label>
            <label>
              <span className="cap">What brought you here?</span>
              <textarea placeholder="A sentence or two is plenty." />
            </label>
            <button type="submit">Send it along →</button>
          </form>
        ) : (
          <div style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.15, color: "var(--fg-on-dark)" }}>
            Got it. I'll write back{" "}
            <em style={{ fontStyle: "italic", color: "var(--yellow)", fontVariationSettings: '"SOFT" 100' }}>
              within a couple of days
            </em>
            .
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="col">
        <div className="brand-row">
          <img src={markUrl} style={{ width: 28, height: 28 }} alt="" />
          Art <em>Restart</em>
        </div>
        <div style={{ color: "var(--ink-soft)", maxWidth: "30ch" }}>
          A therapeutic creative-arts studio in Toronto. Online across Ontario.
        </div>
      </div>
      <div className="col">
        <h5>The Practice</h5>
        <a>For You</a>
        <a>For Orgs</a>
        <a>Writing</a>
        <a>About Randi</a>
      </div>
      <div className="col">
        <h5>Visit</h5>
        <a>The Studio</a>
        <a>Book a call</a>
        <a>Rates &amp; FAQ</a>
      </div>
      <div className="col">
        <h5>Find me</h5>
        <a>Instagram</a>
        <a>Substack</a>
        <a>OATA profile</a>
      </div>
      <div className="tiny">
        © 2026 Art Restart Studio · Registered member, OATA + CATA · All client art appears with consent, anonymised.
      </div>
    </footer>
  );
}

// ---------- BookModal ----------
function BookModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [confirmed, setConfirmed] = useState(false);
  if (!open) return null;
  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        onClose();
        setTimeout(() => setConfirmed(false), 200);
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="close"
          onClick={() => {
            onClose();
            setTimeout(() => setConfirmed(false), 200);
          }}
          aria-label="Close"
        >
          ×
        </button>
        {!confirmed ? (
          <>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginBottom: 10,
              }}
            >
              Fig. 00 — 20-min intro call
            </div>
            <h3>
              Book a <em>free call.</em>
            </h3>
            <p>No commitment. We'll talk for twenty minutes about what's going on and whether this is a fit.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
              }}
            >
              <label>
                <span className="cap">Name</span>
                <input placeholder="Your name" required />
              </label>
              <label>
                <span className="cap">Email</span>
                <input type="email" placeholder="you@somewhere.com" required />
              </label>
              <label>
                <span className="cap">What's up?</span>
                <textarea placeholder="A sentence or two." />
              </label>
              <button className="submit" type="submit">
                Send request →
              </button>
            </form>
          </>
        ) : (
          <div className="confirm-state">
            <svg viewBox="0 0 80 80" width={56} height={56} style={{ color: "var(--yellow-deep)" }}>
              <use href={doodle("sparkle-thick")} />
            </svg>
            <div className="big">
              That's <em>in.</em>
            </div>
            <p>
              Randi will write back personally within a couple of days — usually sooner. Check your inbox (and spam, just in case).
            </p>
            <button
              className="back"
              onClick={() => {
                onClose();
                setTimeout(() => setConfirmed(false), 200);
              }}
            >
              ← Back to the studio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Sub-screens ----------
function ScreenForYou({ onBook }: { onBook: () => void }) {
  return (
    <>
      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="section-head" style={{ gridTemplateColumns: "1fr", alignItems: "start" }}>
          <div>
            <div className="eyebrow">Fig. I · For individuals</div>
            <h2 style={{ fontSize: "clamp(48px,7vw,84px)" }}>
              Work <em>one-to-one.</em>
            </h2>
            <p style={{ maxWidth: "52ch", marginTop: 18 }}>
              Sixty-minute sessions, in the Leslieville studio or online. We use paint, clay, collage — whatever meets the moment. You do not need to know how to draw a hand.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn btn--primary" onClick={onBook}>
                Book a free call →
              </button>
              <button className="btn btn--ghost">See rates</button>
            </div>
          </div>
        </div>
      </section>
      <Offerings />
      <Contact />
    </>
  );
}

function ScreenForOrgs({ onBook }: { onBook: () => void }) {
  return (
    <>
      <section className="section" style={{ background: "var(--teal)", color: "var(--fg-on-dark)" }}>
        <div className="section-head" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <div className="eyebrow" style={{ color: "rgba(246,237,217,0.7)" }}>
              Fig. II · For organizations
            </div>
            <h2 style={{ fontSize: "clamp(48px,7vw,84px)", color: "var(--fg-on-dark)" }}>
              Residencies,
              <br />
              <em style={{ color: "var(--yellow-light)", fontStyle: "italic", fontVariationSettings: '"SOFT" 100' }}>
                on brief.
              </em>
            </h2>
            <p style={{ maxWidth: "54ch", marginTop: 18, color: "rgba(246,237,217,0.85)" }}>
              Weekly art-therapy programs for long-term care homes, schools, neurodivergent-inclusion spaces, and hospital units. Typical residency runs 8–12 weeks with full ethics documentation and outcome notes.
            </p>
            <div style={{ marginTop: 24 }}>
              <button className="btn btn--mustard" onClick={onBook}>
                Start a brief →
              </button>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

// ---------- Root ----------
function ArtRestartHome() {
  const [screen, setScreen] = useState<Section>("home");
  const [modal, setModal] = useState(false);

  const onBook = () => setModal(true);
  const onNavigate = (s: Section) => {
    setScreen(s);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let body: ReactNode = null;
  if (screen === "home") {
    body = (
      <>
        <Hero onBook={onBook} />
        <Marquee />
        <Offerings />
        <Practitioner />
        <Writing />
        <Contact />
      </>
    );
  } else if (screen === "you") {
    body = <ScreenForYou onBook={onBook} />;
  } else if (screen === "orgs") {
    body = <ScreenForOrgs onBook={onBook} />;
  } else if (screen === "writing") {
    body = (
      <section className="section">
        <Writing />
      </section>
    );
  } else if (screen === "about") {
    body = (
      <>
        <Practitioner />
        <Contact />
      </>
    );
  }

  return (
    <div className="site">
      <TopBar current={screen} onNavigate={onNavigate} onBook={onBook} />
      {body}
      <Footer />
      <BookModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
