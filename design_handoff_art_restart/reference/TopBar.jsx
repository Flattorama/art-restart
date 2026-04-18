/* TopBar.jsx — site navigation */
function TopBar({ current, onNavigate, onBook }) {
  const items = [
    { key: "home", label: "The Studio" },
    { key: "you", label: "For You" },
    { key: "orgs", label: "For Orgs" },
    { key: "writing", label: "Writing" },
    { key: "about", label: "About" },
  ];
  return (
    <nav className="topbar">
      <div className="brand" onClick={() => onNavigate("home")} style={{cursor:"pointer"}}>
        <img src="../../assets/mark.svg" alt="" />
        <span className="brand-name">Art <em>Restart</em></span>
      </div>
      <div className="nav">
        {items.map(it => (
          <a key={it.key} className={current === it.key ? "active" : ""} onClick={() => onNavigate(it.key)}>
            {it.label}
          </a>
        ))}
      </div>
      <button className="cta" onClick={onBook}>Book a call →</button>
    </nav>
  );
}
window.TopBar = TopBar;
