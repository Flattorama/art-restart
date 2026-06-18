import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type TouchEvent } from "react";

import randiPortrait from "@/assets/randi-portrait.jpg";
import gallery01 from "@/assets/gallery-01.jpg";
import gallery02 from "@/assets/gallery-02.jpg";
import gallery03 from "@/assets/gallery-03.jpg";

export const Route = createFileRoute("/")({
  component: ArtRestartHome,
});

const BASE = import.meta.env.BASE_URL;
const doodle = (id: string) => `${BASE}brand/doodles.svg#${id}`;
const logoUrl = `${BASE}brand/logo.svg`;
const galleryPhotoFiles = [
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (1).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (2).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (3).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (4).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (5).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (6).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (7).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (8).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM (9).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.40 AM.jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (1).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (2).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (3).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (4).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (5).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (6).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (7).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM (8).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.41 AM.jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (1).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (10).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (11).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (12).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (13).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (2).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (3).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (4).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (5).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (6).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (7).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (8).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM (9).jpeg",
  "WhatsApp Image 2026-06-18 at 10.40.42 AM.jpeg",
] as const;
const galleryPhotos = galleryPhotoFiles.map((fileName, index) => ({
  src: `${BASE}gallery/${encodeURIComponent(fileName)}`,
  alt: `Art Restart gallery image ${index + 1} of ${galleryPhotoFiles.length}`,
}));

function Motif({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <use href={doodle(id)} />
    </svg>
  );
}

function WideMotif({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 180 72" className={className} aria-hidden="true" focusable="false">
      <use href={doodle(id)} />
    </svg>
  );
}

function TopBar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Why Art" },
    { href: "#randi", label: "Randi" },
    { href: "#community", label: "Community" },
  ];

  return (
    <nav className={"topbar" + (open ? " open" : "")} aria-label="Primary navigation">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <img src={logoUrl} alt="Art Restart" />
      </a>

      <div className="nav">
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>

      <button className="nav-cta" onClick={onBook}>
        Book a free consult <span aria-hidden="true">→</span>
      </button>

      <button
        className="menu-btn"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </nav>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="hero" id="top">
      <Motif id="sparkle-slim" className="hero-motif hero-motif-a" />
      <Motif id="starburst" className="hero-motif hero-motif-b" />
      <Motif id="sputnik" className="hero-motif hero-motif-c" />
      <WideMotif id="swoosh" className="hero-swoosh" />

      <div className="hero-copy">
        <div className="fig">Fig. 1 - Welcome</div>
        <h1>
          <span className="hero-title-line">Welcome to</span>
          <em>Art Restart.</em>
        </h1>
        <p className="hero-kicker">
          Where <em>creativity</em> meets <strong>healing</strong>, and stuck figures are gently encouraged.
        </p>
        <p className="hero-lede">
          Whether you&apos;re seeking a creative therapeutic outlet to escape life&apos;s daily stresses, or an
          organization looking for an engaging wellness program, you&apos;ve found a welcoming space to grow.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onBook}>
            Book a free consult <span aria-hidden="true">→</span>
          </button>
          <a className="btn btn-quiet" href="#about">
            Learn more
          </a>
        </div>
      </div>

      <div className="hero-art" aria-label="Art materials and painted textures">
        <div className="plate plate-main">
          <img src={gallery01} alt="Bright abstract paint strokes in orange, yellow, and teal." />
        </div>
        <div className="plate plate-detail">
          <img src={gallery03} alt="Close detail of layered paper and paint texture." />
        </div>
        <div className="plate plate-small">
          <img src={gallery02} alt="Hands working with paint during an art session." />
        </div>
        <Motif id="sputnik-color" className="plate-pin plate-pin-a" />
        <Motif id="sparkle-four" className="plate-pin plate-pin-b" />
      </div>
    </section>
  );
}

function AboutMission() {
  return (
    <section className="mission" id="about">
      <Motif id="sparkle-four" className="mission-motif mission-motif-a" />
      <Motif id="starburst" className="mission-motif mission-motif-b" />
      <div className="mission-inner">
        <div className="fig">Fig. 2 - Everyone</div>
        <h2>
          Art is for <em>everyone.</em>
        </h2>
        <p className="mission-sub">Kids, teens, adults, and seniors - you belong here.</p>
        <p>
          Nervous about your art skills? If you only know how to scribble, can&apos;t hold a tune to save your
          life, constantly trip while dancing, or consider drawing stick figures your peak artistic achievement -
          perfect. Art Restart is a nurturing environment focused on empowerment and expression, not perfection.
        </p>
      </div>
    </section>
  );
}

function Services({ onBook }: { onBook: () => void }) {
  const services = [
    {
      tone: "mint",
      icon: "sputnik-color",
      eyebrow: "Fig. 2A - Therapy",
      title: (
        <>
          Individual <em>art therapy</em>
        </>
      ),
      body: "Tailored sessions and visual journaling spanning art, drama, dance, and music. A non-judgmental space to process complex emotions, reduce everyday anxiety, or simply take a breath.",
      cta: "View therapy options",
    },
    {
      tone: "lavender",
      icon: "starburst",
      eyebrow: "Fig. 2B - Partnerships",
      title: (
        <>
          Organizational <em>partnerships</em>
        </>
      ),
      body: "Creative arts therapies integrated into existing care models. Long-term wellness partnerships for nonprofits, schools, employee groups, and staff wellness workshops.",
      cta: "Partner with us",
    },
    {
      tone: "yellow",
      icon: "sparkle-slim",
      eyebrow: "Fig. 2C - Coming soon",
      title: (
        <>
          The <em>Studio,</em> coming soon
        </>
      ),
      body: "Soon, Art Restart will host pop-ups, workshops, creative journaling, and a full-time studio space dedicated to expressive arts.",
      cta: "Join the waitlist",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="section-head">
        <div>
          <div className="fig">Fig. 3 - Our services</div>
          <h2>
            Three ways <em>in.</em>
          </h2>
        </div>
        <p>
          Whether you&apos;re looking for one-to-one support, a partner for your organization, or a space to make
          something on a Saturday - there&apos;s a place for you here.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className={`service-card ${service.tone}`} key={service.eyebrow}>
            <Motif id={service.icon} className="service-icon" />
            <div className="fig">{service.eyebrow}</div>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <button className="card-link" onClick={onBook}>
              {service.cta} <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    { icon: "radial-burst", title: "Empowerment", body: "Boosting self-esteem and finding your voice." },
    { icon: "atomic", title: "Brain health", body: "Positive neurological impacts and improved cognitive skills." },
    { icon: "heart-thick", title: "Emotional release", body: "A steady place for grief and big feelings." },
    { icon: "sputnik", title: "Connection", body: "Building social skills and a sense of community." },
    { icon: "diamond", title: "Relaxation", body: "Proven reduction in everyday stress and anxiety." },
  ];

  return (
    <section className="benefits" id="benefits">
      <WideMotif id="swoosh" className="benefits-swoosh" />
      <Motif id="starburst" className="benefits-burst" />
      <div className="benefits-copy">
        <div className="fig">Fig. 4 - Why art therapy</div>
        <h2>
          The transformative power of <em>art.</em>
        </h2>
        <p>
          Art therapy isn&apos;t just about making things - it&apos;s about healing. Creative expression is profoundly
          impactful for managing anxiety, depression, PTSD, chronic illness, and trauma.
        </p>
      </div>
      <ul className="benefits-grid">
        {benefits.map((benefit) => (
          <li className="benefit" key={benefit.title}>
            <Motif id={benefit.icon} className="benefit-icon" />
            <h3>{benefit.title}</h3>
            <p>{benefit.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AboutRandi() {
  return (
    <section className="about-randi" id="randi">
      <div className="portrait-plate">
        <img src={randiPortrait} alt="Randi Yaffa seated at an art table." />
        <Motif id="sputnik-color" className="portrait-mark" />
      </div>
      <div className="randi-copy">
        <div className="fig">Fig. 5 - Meet the therapist</div>
        <h2>
          Meet <em>Randi Yaffa</em>
        </h2>
        <p className="role-line credential-line">D-TATI, Registered Psychotherapist (Qualifying)</p>
        <p className="role-line">Art therapist - storyteller - limitless creative</p>
        <p>
          I&apos;m Randi, a qualified art therapist (Toronto Art Therapy Institute) with a BAA in film and photography.
        </p>
        <p>
          Before transitioning into art therapy, I spent my career telling stories as a world-class,
          award-winning film and television producer. With a D-TATI, I combine story, material, and care to help
          people make meaning through art.
        </p>
        <p>
          Today, I use that same passion for creative expression to help individuals and groups tell their own
          stories and heal through art.
        </p>
        <div className="signature">- Randi Yaffa</div>
      </div>
    </section>
  );
}

function GalleryLightbox({
  open,
  currentIndex,
  onClose,
  onSelect,
}: {
  open: boolean;
  currentIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const currentPhoto = galleryPhotos[currentIndex];
  const goToPrevious = () => onSelect((currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  const goToNext = () => onSelect((currentIndex + 1) % galleryPhotos.length);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onSelect((currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onSelect((currentIndex + 1) % galleryPhotos.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentIndex, onClose, onSelect, open]);

  if (!open) return null;

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 50) return;
    if (deltaX > 0) {
      goToPrevious();
    } else {
      goToNext();
    }
  };

  return (
    <div className="gallery-lightbox-backdrop" onClick={onClose}>
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Art Restart photo gallery"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeButtonRef} className="gallery-lightbox-close" onClick={onClose} aria-label="Close gallery">
          x
        </button>
        <button className="gallery-lightbox-arrow previous" onClick={goToPrevious} aria-label="Previous photo">
          <span aria-hidden="true">‹</span>
        </button>
        <div
          className="gallery-lightbox-stage"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={onTouchEnd}
        >
          <img src={currentPhoto.src} alt={currentPhoto.alt} />
        </div>
        <button className="gallery-lightbox-arrow next" onClick={goToNext} aria-label="Next photo">
          <span aria-hidden="true">›</span>
        </button>
        <div className="gallery-lightbox-count" aria-live="polite">
          {currentIndex + 1} / {galleryPhotos.length}
        </div>
      </div>
    </div>
  );
}

function Community() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const previewPhotos = galleryPhotos.slice(0, 3);
  const openGallery = (index: number) => {
    setActivePhoto(index);
    setGalleryOpen(true);
  };

  return (
    <section className="community" id="community">
      <Motif id="sparkle-slim" className="community-sparkle" />
      <div className="section-head">
        <div>
          <div className="fig">Fig. 6 - Community & updates</div>
          <h2>
            Community &amp; <em>updates.</em>
          </h2>
        </div>
        <p>News from the studio, and a window into the work being made here.</p>
      </div>

      <div className="community-grid">
        <article className="update-card">
          <div className="fig">The blog - News</div>
          <h3>
            Studio notes, <em>thoughts on creativity.</em>
          </h3>
          <p>
            Stay tuned for updates on upcoming journaling pop-ups, studio expansion news, and short reads on
            wellness and creativity.
          </p>
          <a href="#community">Read the latest →</a>
        </article>

        <article className="gallery-card">
          <div className="fig">The gallery</div>
          <div className="gallery-strip">
            {previewPhotos.map((photo, index) => (
              <button
                className="gallery-thumb"
                key={photo.src}
                onClick={() => openGallery(index)}
                aria-label={`Open gallery at photo ${index + 1}`}
              >
                <img src={photo.src} alt={photo.alt} />
              </button>
            ))}
          </div>
          <p>A celebration of expression - beautiful, messy, meaningful work shared with permission.</p>
          <button className="gallery-action" onClick={() => openGallery(0)}>
            View the gallery <span aria-hidden="true">→</span>
          </button>
        </article>
      </div>
      <GalleryLightbox
        open={galleryOpen}
        currentIndex={activePhoto}
        onClose={() => setGalleryOpen(false)}
        onSelect={setActivePhoto}
      />
    </section>
  );
}

function FinalFooter({ onBook }: { onBook: () => void }) {
  return (
    <footer className="final-footer" id="contact">
      <Motif id="radial-burst" className="footer-motif footer-motif-a" />
      <WideMotif id="swoosh" className="footer-swoosh" />
      <div className="final-inner">
        <div className="fig">Fig. 7 - Get in touch</div>
        <h2>
          Ready to <em>restart?</em>
        </h2>
        <p>Get in touch today to discuss availability, rates, and how we can create together.</p>
        <button className="btn btn-yellow" onClick={onBook}>
          Email Randi <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="footer-meta">
        <div>
          <span>Email</span>
          <strong>hello@artrestart.studio</strong>
        </div>
        <div>
          <span>Phone</span>
          <strong>+1 (416) 000-0000</strong>
        </div>
        <div>
          <span>Instagram</span>
          <strong>@artrestartstudio</strong>
        </div>
      </div>
      <div className="footer-tiny">
        © 2026 Art Restart Studio - Registered member, OATA + CATA - All client art appears with consent,
        anonymised.
      </div>
    </footer>
  );
}

function BookModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        setTimeout(() => setConfirmed(false), 200);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const close = () => {
    onClose();
    setTimeout(() => setConfirmed(false), 200);
  };

  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="book-title" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={close} aria-label="Close">
          ×
        </button>

        {!confirmed ? (
          <>
            <Motif id="sputnik-color" className="modal-motif" />
            <div className="fig">Fig. 0 - Free 20-min consult</div>
            <h2 id="book-title">
              Book a <em>free consult.</em>
            </h2>
            <p>No commitment. We&apos;ll talk for twenty minutes about what&apos;s going on and whether this is a fit.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setConfirmed(true);
              }}
            >
              <label>
                <span>Name</span>
                <input placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@somewhere.com" required />
              </label>
              <label>
                <span>What brought you here?</span>
                <textarea placeholder="A sentence or two." />
              </label>
              <button className="submit" type="submit">
                Send request <span aria-hidden="true">→</span>
              </button>
            </form>
          </>
        ) : (
          <div className="confirm-state">
            <Motif id="starburst" className="confirm-star" />
            <h2>
              That&apos;s <em>in.</em>
            </h2>
            <p>Randi will write back personally within a couple of days - usually sooner.</p>
            <button onClick={close}>Back to the studio</button>
          </div>
        )}
      </div>
    </div>
  );
}

function ArtRestartHome() {
  const [modal, setModal] = useState(false);
  const onBook = () => setModal(true);

  return (
    <div className="site">
      <TopBar onBook={onBook} />
      <main>
        <Hero onBook={onBook} />
        <AboutMission />
        <Services onBook={onBook} />
        <Benefits />
        <AboutRandi />
        <Community />
      </main>
      <FinalFooter onBook={onBook} />
      <BookModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
