export function FinalDoodle() {
  return (
    <div className="final-stage" aria-label="Two people walking together toward what comes next">
      <svg className="final-path" viewBox="0 0 920 360" fill="none" aria-hidden="true"><path d="M-20 282C142 236 213 332 370 280S620 205 940 298" /></svg>
      <div className="memory-trace trace-message">any plans<br />this weekend?</div>
      <div className="memory-trace trace-ticket">cinema<br />ticket</div>
      <div className="memory-trace trace-lipstick">▯</div>
      <div className="memory-trace trace-camera"><i /></div>
      <div className="memory-trace trace-mark">56</div>
      <div className="final-pair"><FinalPerson type="narrator" /><FinalPerson type="idara" /></div>
    </div>
  );
}

function FinalPerson({ type }: { type: "idara" | "narrator" }) {
  return <div className={`final-person final-person-${type}`}><i /><b /><span /><em /></div>;
}
