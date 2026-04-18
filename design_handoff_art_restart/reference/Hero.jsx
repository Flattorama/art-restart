/* Hero.jsx — Mack-and-Pouya-inspired split-field hero */
function Hero({ onBook }) {
  return (
    <section style={{position:"relative", overflow:"hidden", background:"#F29FB6"}}>
      {/* horizontal color-block split: pink top, yellow bottom */}
      <div style={{position:"absolute", left:0, right:0, top:"58%", bottom:0, background:"#FCD848"}}/>
      <div style={{position:"relative", padding:"64px 40px 72px", minHeight: 680}}>
        {/* Headline — chunky outlined display */}
        <h1 style={{
          fontFamily:"var(--font-display)", fontWeight:900,
          fontSize:"clamp(56px, 8vw, 108px)", lineHeight:.92,
          letterSpacing:"-.015em", textTransform:"uppercase",
          color:"#E86A33", margin:"0 0 24px",
          WebkitTextStroke:"1px #1F1A14",
          maxWidth:"18ch",
          fontVariationSettings:'"opsz" 144, "SOFT" 20, "WONK" 1',
        }}>
          A studio for <em style={{fontStyle:"italic", color:"#E86A33"}}>starting</em> again —<br/>
          <em style={{fontStyle:"italic", color:"#E86A33"}}>through art.</em>
        </h1>

        {/* Scattered thick doodles */}
        <svg viewBox="0 0 80 80" style={{position:"absolute", top:40, left:"42%", width:44, height:44, color:"#FCD848", transform:"rotate(-12deg)"}}>
          <use href="../../assets/doodles.svg#sparkle-thick"/>
        </svg>
        <svg viewBox="0 0 80 80" style={{position:"absolute", top:180, left:"6%", width:36, height:36, color:"#FCD848", transform:"rotate(8deg)"}}>
          <use href="../../assets/doodles.svg#sparkle-thick"/>
        </svg>
        <svg viewBox="0 0 80 80" style={{position:"absolute", top:320, left:"44%", width:62, height:62, color:"#3FB6B8", transform:"rotate(-6deg)"}}>
          <use href="../../assets/doodles.svg#asterisk-thick"/>
        </svg>
        <svg viewBox="0 0 60 80" style={{position:"absolute", top:120, right:"28%", width:42, height:56, color:"#3FB6B8", transform:"rotate(10deg)"}}>
          <use href="../../assets/doodles.svg#bolt-thick"/>
        </svg>
        <svg viewBox="0 0 80 80" style={{position:"absolute", top:360, right:"7%", width:38, height:38, color:"#FCD848", transform:"rotate(14deg)"}}>
          <use href="../../assets/doodles.svg#star-thick"/>
        </svg>

        {/* Three photo plates — rounded-rect left, oval center, rounded-rect top-right */}
        <div style={{
          position:"absolute", left:"2%", top:"30%", width:260, aspectRatio:"4/5",
          border:"2px solid #1F1A14", borderRadius:14, overflow:"hidden",
          background:"#3FB6B8", transform:"rotate(-2deg)", boxShadow:"6px 6px 0 #1F1A14",
        }}>
          <svg viewBox="0 0 200 250" style={{width:"100%", height:"100%"}} fill="none" stroke="#F2E8D5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="80" cy="90" r="24"/><circle cx="130" cy="90" r="24"/>
            <path d="M80 114 L80 170"/><path d="M130 114 L130 170"/>
            <path d="M80 130 L56 160"/><path d="M130 130 L154 160"/>
            <path d="M80 170 L66 228"/><path d="M80 170 L96 228"/>
            <path d="M130 170 L114 228"/><path d="M130 170 L144 228"/>
          </svg>
        </div>

        <div style={{
          position:"absolute", left:"33%", top:"10%", width:380, aspectRatio:"3/4",
          border:"2px solid #1F1A14", borderRadius:"50% / 40%", overflow:"hidden",
          background:"#E86A33", boxShadow:"6px 6px 0 #1F1A14",
        }}>
          <svg viewBox="0 0 300 400" style={{width:"100%", height:"100%"}} fill="none" stroke="#F2E8D5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="150" cy="130" r="54"/>
            <path d="M150 184 L150 276"/>
            <path d="M150 210 L96 264"/>
            <path d="M150 210 L204 264"/>
            <path d="M150 276 L120 378"/>
            <path d="M150 276 L180 378"/>
            {/* palette in hand */}
            <ellipse cx="210" cy="260" rx="28" ry="18"/>
            <circle cx="200" cy="254" r="4" fill="#FCD848" stroke="none"/>
            <circle cx="216" cy="252" r="4" fill="#F29FB6" stroke="none"/>
            <circle cx="222" cy="266" r="4" fill="#3FB6B8" stroke="none"/>
          </svg>
        </div>

        <div style={{
          position:"absolute", right:"4%", top:"6%", width:220, aspectRatio:"4/5",
          border:"2px solid #1F1A14", borderRadius:14, overflow:"hidden",
          background:"#FCD848", transform:"rotate(3deg)", boxShadow:"6px 6px 0 #1F1A14",
        }}>
          <svg viewBox="0 0 180 220" style={{width:"100%", height:"100%"}} fill="none" stroke="#1F1A14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="90" cy="86" r="34"/>
            <path d="M58 82 C 58 58, 122 58, 122 82"/>
            <path d="M90 120 L90 180"/>
            <path d="M90 140 L60 170"/><path d="M90 140 L120 170"/>
          </svg>
        </div>

        {/* Rotating circular badge — "held space for real people" */}
        <div style={{position:"absolute", right:"24%", top:"44%", width:150, height:150}}>
          <svg viewBox="0 0 150 150" style={{width:"100%", height:"100%", animation:"spin 22s linear infinite"}}>
            <defs>
              <path id="arcTxt" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"/>
            </defs>
            <text style={{fontFamily:"var(--font-display)", fontSize:14, letterSpacing:".16em", fontWeight:600, textTransform:"uppercase", fill:"#1F1A14"}}>
              <textPath href="#arcTxt">HELD SPACE FOR REAL PEOPLE · HELD SPACE FOR REAL PEOPLE · </textPath>
            </text>
          </svg>
          <svg viewBox="0 0 60 32" style={{position:"absolute", inset:0, margin:"auto", width:44, height:24, color:"#1F1A14"}}>
            <use href="../../assets/doodles.svg#underline-scribble"/>
          </svg>
        </div>

        {/* Bottom lede + CTAs */}
        <div style={{position:"absolute", left:"2%", bottom:32, maxWidth:320}}>
          <p style={{fontSize:15, lineHeight:1.55, color:"#1F1A14", margin:"0 0 14px"}}>
            You come in. You make something. We talk about what shows up. No psych-talk, no prior art needed.
          </p>
          <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
            <button className="btn btn--primary" onClick={onBook} style={{background:"#E86A33", color:"#F2E8D5"}}>Book a free call →</button>
            <button className="btn btn--ghost">Read the practice</button>
          </div>
        </div>

        <div style={{position:"absolute", right:24, bottom:24, fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"#1F1A14"}}>
          Fig. 01 — The Studio · Toronto
        </div>
      </div>
      <style>{"@keyframes spin { to { transform: rotate(360deg);} }"}</style>
    </section>
  );
}
window.Hero = Hero;
