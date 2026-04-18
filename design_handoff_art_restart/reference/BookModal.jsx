/* BookModal.jsx — booking modal */
function BookModal({ open, onClose, onBooked }) {
  if (!open) return null;
  function submit(e) {
    e.preventDefault();
    onBooked && onBooked();
  }
  return (
    <div className={"modal-backdrop " + (open ? "open" : "")} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--fg3)", marginBottom:10}}>Fig. 00 — 20-min intro call</div>
        <h3>Book a <em>free call.</em></h3>
        <p>No commitment. We'll talk for twenty minutes about what's going on and whether this is a fit.</p>
        <form onSubmit={submit}>
          <label><span className="cap">Name</span><input defaultValue="" placeholder="Your name" required /></label>
          <label><span className="cap">Email</span><input type="email" placeholder="you@somewhere.com" required /></label>
          <label><span className="cap">What's up?</span><textarea placeholder="A sentence or two."></textarea></label>
          <button className="submit" type="submit">Send request →</button>
        </form>
      </div>
    </div>
  );
}
window.BookModal = BookModal;
