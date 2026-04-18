/* Contact.jsx — the dark-ink contact section */
function Contact({ onSubmit }) {
  const [sent, setSent] = React.useState(false);
  function handle(e) {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit();
  }
  return (
    <section className="section section-dark" id="contact">
      <div className="contact-wrap">
        <div className="contact-copy">
          <div className="eyebrow" style={{color:"rgba(246,237,217,0.5)"}}>Fig. V — Start here</div>
          <h2>Say <em>hello.</em></h2>
          <p>Tell me a little about what brought you. No commitment, no long intake form — I write back personally within a couple of days.</p>
          <div style={{marginTop:24, fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(246,237,217,0.55)"}}>
            Or email · randi@artrestart.studio
          </div>
        </div>
        {!sent ? (
          <form className="contact-form" onSubmit={handle}>
            <label><span className="cap">Your name</span><input defaultValue="" placeholder="Alex Martin" /></label>
            <label><span className="cap">Email</span><input type="email" placeholder="you@somewhere.com" /></label>
            <label><span className="cap">What brought you here?</span><textarea placeholder="A sentence or two is plenty."></textarea></label>
            <button type="submit">Send it along →</button>
          </form>
        ) : (
          <div style={{fontFamily:"var(--font-display)", fontSize:28, lineHeight:1.15, color:"#F6EDD9"}}>
            Got it. I'll write back <em style={{fontStyle:"italic", color:"var(--mustard)"}}>within a couple of days</em>.
          </div>
        )}
      </div>
    </section>
  );
}
window.Contact = Contact;
