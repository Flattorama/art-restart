/* Practitioner.jsx — the "about Randi" block */
function Practitioner() {
  return (
    <section className="section" style={{background: "var(--paper-warm)"}}>
      <div className="practitioner">
        <div className="photo">
          <svg className="fig-sketch" viewBox="0 0 200 260" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="100" cy="80" r="38"/>
            <path d="M62 78 C 62 52, 138 52, 138 78"/>
            <path d="M100 118 L100 172"/>
            <path d="M100 132 L62 168"/>
            <path d="M100 132 L140 168"/>
            <path d="M100 172 L72 246"/>
            <path d="M100 172 L128 246"/>
            {/* brush */}
            <path d="M138 168 L172 200"/>
            <path d="M168 196 L180 208"/>
          </svg>
          <div className="plate-cap">Fig. 04 — The Practitioner</div>
        </div>
        <div>
          <div className="eyebrow" style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--fg3)", marginBottom:18}}>
            Fig. III — About Randi
          </div>
          <blockquote>
            "I spent twenty years making films about people in hard moments.
            Now I <em>sit with</em> them — and hand them a pencil."
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
window.Practitioner = Practitioner;
