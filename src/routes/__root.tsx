import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const ldJson = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://art-restart.com/#business",
      name: "Art Restart",
      description:
        "Creative arts therapy and expressive arts programming in the Greater Toronto Area.",
      url: "https://art-restart.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thornhill",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
        { "@type": "AdministrativeArea", name: "Ontario" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://art-restart.com/#randi",
      name: "Randi Yaffa",
      jobTitle: "Art Therapist",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "D-TATI, Toronto Art Therapy Institute",
        },
        { "@type": "EducationalOccupationalCredential", name: "BAA, Film & Photography" },
      ],
      award: "BAFTA Nomination — Best Short Animation (Plumber)",
      worksFor: { "@id": "https://art-restart.com/#business" },
    },
  ],
});

function NotFoundComponent() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fcf9f0",
        color: "#2c2c2c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: "32rem", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: '"Fraunces", Georgia, serif',
            fontSize: "5rem",
            fontWeight: 500,
            color: "#f45a1d",
          }}
        >
          404
        </h1>
        <h2
          style={{
            marginTop: "0.5rem",
            fontFamily: '"Fraunces", Georgia, serif',
            fontSize: "1.5rem",
            fontWeight: 500,
          }}
        >
          Page not found
        </h2>
        <p style={{ marginTop: "1rem", color: "#5f5f5f" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "0.85rem 1.5rem",
              background: "#00bcd4",
              color: "#2c2c2c",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              borderBottom: "3px solid #2c2c2c",
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Art Restart — Creative Arts Therapy in Thornhill & the GTA" },
      {
        name: "description",
        content:
          "Art Restart is a creative arts therapy studio in Thornhill, Ontario. Individual sessions and organizational programming for seniors, adults, teens, and kids. In person and virtual across Ontario.",
      },
      { name: "author", content: "Randi Yaffa, D-TATI" },
      {
        property: "og:title",
        content: "Art Restart — Creative Arts Therapy in Thornhill & the GTA",
      },
      {
        property: "og:description",
        content:
          "Therapeutic creative arts for individuals, families, and the organizations that care for them. Led by Randi Yaffa, D-TATI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://art-restart.com" },
      { property: "og:image", content: "/og-cover.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-cover.jpg" },
      {
        name: "twitter:title",
        content: "Art Restart — Creative Arts Therapy in Thornhill & the GTA",
      },
      {
        name: "twitter:description",
        content:
          "Therapeutic creative arts for individuals, families, and the organizations that care for them.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=Space+Grotesk:wght@400..700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@400..700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: ldJson }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
