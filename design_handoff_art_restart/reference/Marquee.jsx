/* Marquee.jsx — rotating value-band */
function Marquee() {
  const words = ["No psych talk.", "No wellness pastels.", "No stock photos.", "Real sessions.", "Real materials.", "Real mess."];
  const loop = [...words, ...words];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((w, i) => (
          <span key={i}>{w}<span className="dot"></span></span>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;
