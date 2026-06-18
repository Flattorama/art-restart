import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

// ---------- TopBar ----------
function TopBar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#mission", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Why Art" },
    { href: "#randi", label: "Randi" },
    { href: "#community", label: "Community" },
  ];
  return (
    <nav className={"topbar" + (open ? " open" : "")}>
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <img src={markUrl} alt="" />
        <span className="brand-name">
          Art <em>Restart</em>
        </span>
      </a>
      <div className="nav">
        {items.map((it) => (
          <a key={it.href} href={it.href} onClick={() => setOpen(false)}>
            {it.label}
          </a>
        ))}
      </div>
      <button className="cta" onClick={onBook}>
        Book a free consult →
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
    <section className="hero2" id="top">
      <div className="hero2-bg-pink" />
      <div className="hero2-bg-yellow" />

      {/* Decorative doodles — kept off the copy column */}
      <svg viewBox="0 0 80 80" className="hero2-doodle d1" aria-hidden="true">
        <use href={doodle("sparkle-thick")} />
      </svg>
      <svg viewBox="0 0 80 80" className="hero2-doodle d2" aria-hidden="true">
        <use href={doodle("asterisk-thick")} />
      </svg>

      <div className="hero2-inner">
        <div className="hero2-copy">
          <h1 className="hero2-headline">
            Welcome to <em>Art Restart.</em>
          </h1>
          <p className="hero2-tag">
            Where creativity meets healing, and stick figures are highly encouraged.
          </p>
          <p className="hero2-lede">
            Whether you are seeking a creative therapeutic outlet to escape life's daily stresses, or an organization
            looking for an engaging wellness program — you've found a safe space to grow.
          </p>
          <div className="hero2-ctas">
            <button className="btn btn--primary" onClick={onBook}>
              Book a free consult →
            </button>
            <a className="btn btn--ghost" href="#mission">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero2-plates">
          <div className="hero2-plate plate-a">
            <img src={gallery01} alt="A bright, messy art-making table." />
          </div>
          <div className="hero2-plate plate-b">
            <img src={gallery02} alt="Hands working with paint." />
          </div>

          <div className="hero2-badge" aria-hidden="true">
            <svg viewBox="0 0 150 150" className="spin" style={{ width: "100%", height: "100%" }}>
              <defs>
                <path id="arcTxt" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
              </defs>
              <text style={{ fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: ".18em", fontWeight: 600 }} fill="var(--ink)">
                <textPath href="#arcTxt">A SPACE FOR REAL PEOPLE · A SPACE FOR REAL PEOPLE · </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Mission ----------
function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="mission-inner">
        <h2>
          Art is for <em>everyone.</em>
        </h2>
        <p className="mission-sub">Kids, teens, adults, and seniors — you belong here.</p>
        <p className="mission-body">
          Nervous about your art skills? If you only know how to scribble, can't hold a tune to save your life,
          constantly trip while dancing, or consider drawing stick figures your peak artistic achievement — perfect.
          You are exactly where you need to be. Art Restart is a nurturing environment focused on empowerment and
          expression, not perfection.
        </p>
      </div>
    </section>
  );
}

// ---------- Services ----------
function Services({ onBook }: { onBook: () => void }) {
  const items = [
    {
      icon: "sparkle-thick",
      tag: "Fig. 01 · Therapy",
      title: (<>Individual &amp; <em>group therapy</em></>),
      body: "Tailored in-person and virtual sessions spanning art, drama, dance, and music. A non-judgmental space to process complex emotions, reduce everyday anxiety, or just take a breath and relax.",
      cta: "View therapy options",
    },
    {
      icon: "asterisk-thick",
      tag: "Fig. 02 · Partnerships",
      title: (<>Organizational <em>partnerships</em></>),
      body: "We integrate creative arts therapies into your existing care model. Long-term wellness partnerships for retirement homes, inclusion and neurodiversity programs, and staff wellness workshops.",
      cta: "Partner with us",
    },
    {
      icon: "star-thick",
      tag: "Fig. 03 · Coming soon",
      title: (<>The <em>Studio,</em> coming soon</>),
      body: "We're growing. Soon, we'll be hosting one-off pop-up workshops (like creative journaling) and opening a full-time, vibrant studio space dedicated to all expressive arts.",
      cta: "Join the waitlist",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="section-head">
        <div>
          <h2>
            Three ways <em>in.</em>
          </h2>
        </div>
        <p>
          Whether you're looking for one-to-one support, a partner for your organization, or a space to make
          something on a Saturday — there's a place for you here.
        </p>
      </div>
      <div className="service-grid">
        {items.map((it, i) => (
          <article key={i} className="service-card">
            <svg viewBox="0 0 80 80" className="service-icon" aria-hidden="true">
              <use href={doodle(it.icon)} />
            </svg>
            <div className="service-tag">{it.tag}</div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
            <button className="btn btn--ghost service-cta" onClick={onBook}>
              {it.cta} →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- Benefits ----------
function Benefits() {
  const items = [
    { icon: "sparkle-thick", title: "Empowerment", body: "Boosting self-esteem and finding your voice." },
    { icon: "sun-thick", title: "Brain health", body: "Positive neurological impacts and improved cognitive and motor skills." },
    { icon: "heart-thick", title: "Emotional release", body: "A safe container for processing grief and big feelings." },
    { icon: "flower-thick", title: "Connection", body: "Building social skills and a sense of community." },
    { icon: "moon-thick", title: "Relaxation", body: "Proven reduction in everyday stress and anxiety." },
  ];
  return (
    <section className="benefits" id="benefits">
      <div className="section-head">
        <div>
          <h2>
            The transformative power of <em>art.</em>
          </h2>
        </div>
        <p>
          Art therapy isn't just about making things — it's about healing. Creative expression is profoundly impactful
          for managing anxiety, depression, PTSD, chronic illness, and trauma.
        </p>
      </div>
      <ul className="benefits-grid">
        {items.map((it, i) => (
          <li key={i} className="benefit">
            <svg viewBox="0 0 80 80" className="benefit-icon" aria-hidden="true">
              <use href={doodle(it.icon)} />
            </svg>
            <h4>{it.title}</h4>
            <p>{it.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- About Randi ----------
function AboutRandi() {
  return (
    <section className="about" id="randi">
      <div className="about-grid">
        <div className="about-photo">
          <img src={randiPortrait} alt="Randi Yaffa, art therapist." />
          <div className="plate-cap">Fig. 04 — Randi Yaffa</div>
        </div>
        <div className="about-copy">
          <h2>
            Meet <em>Randi Yaffa,</em> D-TATI
          </h2>
          <div className="about-role">Art therapist · storyteller · lifelong learner</div>
          <p>
            Hello — I'm Randi, a qualified art therapist (Toronto Art Therapy Institute) with a BAA in film and
            photography.
          </p>
          <p>
            Before transitioning into the world of art therapy, I spent my career telling stories as a world-class,
            award-winning film and television producer. With a BAFTA nomination and several Canadian Screen Award
            nominations under my belt, I've produced beloved series, films, and commercials.
          </p>
          <p>
            Today, I use that same passion for creative expression to help individuals and groups tell their own
            stories and heal through art. When I'm not working, I'm volunteering, chipping away at another master's
            degree, teaching my kids to be kind humans, or goofing around with my dog, Elvis.
          </p>
          <div className="signed">
            <span className="scribble">— Randi Yaffa</span>
            <span className="role">BAFTA-nominee · OATA, CATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Trust banner ----------
function Trust() {
  const partners = [
    "Reena: The Battle Centre",
    "JCC Inclusion Program",
    "Sheena's Place",
    "DANI",
    "United Health Network",
    "Youth Empowerment Programs",
  ];
  return (
    <section className="trust" aria-label="Past collaborators">
      <div className="trust-label">Proud to have collaborated with —</div>
      <div className="trust-list">
        {partners.map((p, i) => (
          <span key={i}>
            {p}
            {i < partners.length - 1 && <span className="sep"> · </span>}
          </span>
        ))}
      </div>
    </section>
  );
}

// ---------- Community ----------
function Community() {
  return (
    <section className="community" id="community">
      <div className="section-head">
        <div>
          <h2>
            Community &amp; <em>updates.</em>
          </h2>
        </div>
        <p>News from the studio, and a window into the work being made here.</p>
      </div>
      <div className="community-grid">
        <article className="community-card">
          <div className="community-tag">The blog &amp; news</div>
          <h3>
            Studio notes, <em>thoughts on creativity.</em>
          </h3>
          <p>
            Stay tuned for updates on our upcoming journaling pop-ups, studio expansion news, and short reads on
            wellness and creativity.
          </p>
          <a className="link-arrow" href="#community">
            Read the latest →
          </a>
        </article>
        <article className="community-card">
          <div className="community-tag">The gallery</div>
          <div className="gallery-collage">
            <img src={gallery04} alt="" />
            <img src={gallery05} alt="" />
            <img src={gallery06} alt="" />
          </div>
          <p>
            A celebration of expression — beautiful, messy, meaningful work from our clients (shared with their
            enthusiastic permission, of course).
          </p>
          <a className="link-arrow" href="#community">
            View the gallery →
          </a>
        </article>
      </div>
    </section>
  );
}

// ---------- Final CTA Footer ----------
function FinalFooter({ onBook }: { onBook: () => void }) {
  return (
    <footer className="final" id="contact">
      <div className="final-inner">
        <h2>
          Ready to <em>restart?</em>
        </h2>
        <p>Get in touch today to discuss availability, rates, and how we can create together.</p>
        <button className="btn btn--mustard" onClick={onBook}>
          Email Randi →
        </button>

        <div className="final-meta">
          <div>
            <div className="meta-label">Email</div>
            <div className="meta-val">[hello@artrestart.studio]</div>
          </div>
          <div>
            <div className="meta-label">Phone</div>
            <div className="meta-val">[+1 (416) 000-0000]</div>
          </div>
          <div>
            <div className="meta-label">Instagram</div>
            <div className="meta-val">[@artrestartstudio]</div>
          </div>
        </div>

        <div className="final-tiny">
          © 2026 Art Restart Studio · Registered member, OATA + CATA · All client art appears with consent,
          anonymised.
        </div>
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
            <h3>
              Book a <em>free consult.</em>
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
                <span className="cap">What brought you here?</span>
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
              Randi will write back personally within a couple of days — usually sooner. Check your inbox (and spam,
              just in case).
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

// ---------- Root ----------
function ArtRestartHome() {
  const [modal, setModal] = useState(false);
  const onBook = () => setModal(true);

  return (
    <div className="site">
      <TopBar onBook={onBook} />
      <Hero onBook={onBook} />
      <Mission />
      <Services onBook={onBook} />
      <Benefits />
      <AboutRandi />
      <Trust />
      <Community />
      <FinalFooter onBook={onBook} />
      <BookModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
