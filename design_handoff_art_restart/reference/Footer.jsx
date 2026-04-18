/* Footer.jsx */
function Footer() {
  return (
    <footer className="footer">
      <div className="col">
        <div className="brand"><img src="../../assets/mark.svg" style={{width:28, height:28}}/> Art <em>Restart</em></div>
        <div style={{color:"var(--fg2)", maxWidth:"30ch"}}>A therapeutic creative-arts studio in Toronto. Online across Ontario.</div>
      </div>
      <div className="col">
        <h5>The Practice</h5>
        <a>For You</a><a>For Orgs</a><a>Writing</a><a>About Randi</a>
      </div>
      <div className="col">
        <h5>Visit</h5>
        <a>The Studio</a><a>Book a call</a><a>Rates &amp; FAQ</a>
      </div>
      <div className="col">
        <h5>Find me</h5>
        <a>Instagram</a><a>Substack</a><a>OATA profile</a>
      </div>
      <div className="tiny">© 2026 Art Restart Studio · Registered member, OATA + CATA · All client art appears with consent, anonymised.</div>
    </footer>
  );
}
window.Footer = Footer;
