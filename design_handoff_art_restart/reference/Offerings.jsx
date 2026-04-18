/* Offerings.jsx — what the practice does */
function Offerings() {
  const items = [
    {
      tone: "",
      fig: "Fig. 01 · For You",
      title: <>Individual <em>sessions</em></>,
      body: "Sixty minutes, one-to-one. In-person in the Leslieville studio or online across Ontario. Open-ended or time-bound — your call.",
      price: "$160 / session",
    },
    {
      tone: "teal",
      fig: "Fig. 02 · For Orgs",
      title: <>Group <em>residencies</em></>,
      body: "Weekly art-therapy programs for long-term care homes, schools, and inclusion programs. Typical residency: 8–12 weeks.",
      price: "By brief",
    },
    {
      tone: "terra",
      fig: "Fig. 03 · Talks",
      title: <>Speaking &amp; <em>writing</em></>,
      body: "Workshops and keynotes on creative grief, estrangement, and re-starting. Available for conferences, podcasts, and staff days.",
      price: "By invite",
    },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Fig. II — What we do</div>
          <h2>Three ways in,<br/><em>one practice.</em></h2>
        </div>
        <p>Every piece of the work is held to the same standard: ethically sound, clinically grounded,
        and open to anyone who is tired of being asked how they feel and would like to make something instead.</p>
      </div>
      <div className="offerings">
        {items.map((it, i) => (
          <div key={i} className={"offer " + it.tone}>
            <div className="fig">{it.fig}</div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
            <div className="offer-meta">
              <span className="price">{it.price}</span>
              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Offerings = Offerings;
