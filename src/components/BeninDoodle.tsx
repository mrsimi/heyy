export function BeninDoodle() {
  return <div className="benin-stage" aria-label="Two people travelling together on a doodled bike">
    <div className="benin-horizon"><i /><i /><i /></div>
    <div className="benin-sign">BENIN<br />REPUBLIC</div>
    <div className="benin-bag"><i /></div>
    <svg className="benin-road" viewBox="0 0 500 780" fill="none" aria-hidden="true"><path className="road-edge road-edge-left" d="M113 0C155 217 165 483 68 780" /><path className="road-edge road-edge-right" d="M387 0C345 217 335 483 432 780" /><path className="road-centre" d="M250 35v82m0 72v105m0 86v128m0 109v130" /></svg>
    <div className="benin-bike"><i className="bike-wheel bike-wheel-left" /><i className="bike-wheel bike-wheel-right" /><b className="bike-frame" /><b className="bike-seat" /><b className="bike-handle" /><BeninPerson type="narrator" /><BeninPerson type="idara" /><span className="bike-wind bike-wind-one" /><span className="bike-wind bike-wind-two" /></div>
    <div className="benin-motion-mark mark-fast-one">—</div><div className="benin-motion-mark mark-fast-two">—</div>
  </div>;
}

function BeninPerson({ type }: { type: "idara" | "narrator" }) {
  return <div className={`benin-person benin-person-${type}`}><i /><b /><span /><em /></div>;
}
