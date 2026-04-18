/* App.jsx — orchestrates screens */
function App() {
  const [screen, setScreen] = React.useState("home");
  const [modal, setModal] = React.useState(false);
  const [booked, setBooked] = React.useState(false);

  function onBook() { setModal(true); }
  function onBooked() { setModal(false); setBooked(true); setScreen("confirm"); }
  function onNavigate(k) { setScreen(k); setBooked(false); }

  return (
    <div className="site">
      <TopBar current={screen} onNavigate={onNavigate} onBook={onBook} />

      {screen === "home" && (
        <div className="screen active">
          <Hero onBook={onBook} />
          <Marquee />
          <Offerings />
          <Practitioner />
          <Writing />
          <Contact />
        </div>
      )}
      {screen === "you" && (
        <div className="screen active">
          <section className="section" style={{paddingTop:64, paddingBottom:24}}>
            <div className="section-head" style={{gridTemplateColumns:"1fr", alignItems:"start"}}>
              <div>
                <div className="eyebrow">Fig. I · For individuals</div>
                <h2 style={{fontSize:"clamp(56px,7vw,96px)"}}>Work <em>one-to-one.</em></h2>
                <p style={{maxWidth:"52ch", marginTop:18}}>Sixty-minute sessions, in the Leslieville studio or online. We use paint, clay, collage — whatever meets the moment. You do not need to know how to draw a hand.</p>
                <div style={{marginTop:24, display:"flex", gap:14}}><button className="btn btn--primary" onClick={onBook}>Book a free call →</button><button className="btn btn--ghost">See rates</button></div>
              </div>
            </div>
          </section>
          <Offerings />
          <Contact />
        </div>
      )}
      {screen === "orgs" && (
        <div className="screen active">
          <section className="section section-teal">
            <div className="section-head" style={{gridTemplateColumns:"1fr"}}>
              <div>
                <div className="eyebrow">Fig. II · For organizations</div>
                <h2 style={{fontSize:"clamp(56px,7vw,96px)"}}>Residencies,<br/><em>on brief.</em></h2>
                <p style={{maxWidth:"54ch", marginTop:18}}>Weekly art-therapy programs for long-term care homes, schools, neurodivergent-inclusion spaces, and hospital units. Typical residency runs 8–12 weeks with full ethics documentation and outcome notes.</p>
                <div style={{marginTop:24}}><button className="btn" style={{background:"var(--mustard)", color:"var(--ink)", borderColor:"var(--ink)", boxShadow:"4px 4px 0 var(--ink)"}} onClick={onBook}>Start a brief →</button></div>
              </div>
            </div>
          </section>
          <Contact />
        </div>
      )}
      {screen === "writing" && (
        <div className="screen active">
          <section className="section"><Writing/></section>
        </div>
      )}
      {screen === "about" && (
        <div className="screen active"><Practitioner /><Contact /></div>
      )}
      {screen === "confirm" && (
        <div className="screen active confirm">
          <Doodle name="starburst" size={64} color="var(--mustard-deep)"/>
          <div className="big">That's <em>in.</em></div>
          <p>Randi will write back personally within a couple of days — usually sooner. Check your inbox (and spam, just in case).</p>
          <button className="back" onClick={() => onNavigate("home")}>← Back to the studio</button>
        </div>
      )}

      <Footer />
      <BookModal open={modal} onClose={() => setModal(false)} onBooked={onBooked} />
    </div>
  );
}
window.App = App;
