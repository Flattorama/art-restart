/* Writing.jsx — essays list */
function Writing() {
  const essays = [
    { tag: "Essay", date: "Apr 2026", title: <>On <em>restarting</em> after loss</>, body: "Why starting again isn't a metaphor — it's a material practice. Notes from a year of intake sessions." },
    { tag: "Field note", date: "Mar 2026", title: <>The <em>clay</em> tells on you</>, body: "What happens when a client who has talked around something for six weeks sits down at a wheel for the first time." },
    { tag: "Essay", date: "Feb 2026", title: <>A case for <em>ugly</em> art</>, body: "Every beautiful piece in this studio was made by someone not trying to make a beautiful piece. There is a lesson there." },
    { tag: "Talk", date: "Jan 2026", title: <>Grief, on a <em>schedule</em></>, body: "From a keynote at the OATA annual gathering. On building time-bound rituals for open-ended pain." },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Fig. IV — From the studio</div>
          <h2>Writing, talks,<br/><em>field notes.</em></h2>
        </div>
        <p>Short essays and longer pieces from inside the practice. Nothing is prescriptive —
        everything here is something that happened on a particular Tuesday.</p>
      </div>
      <div className="essays">
        {essays.map((e, i) => (
          <a key={i} className="essay">
            <div className="row">
              <span className="tag">{e.tag}</span>
              <span className="date">{e.date}</span>
            </div>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
window.Writing = Writing;
