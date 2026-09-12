export function CinemaDoodle() {
  return (
    <div className="cinema-stage" aria-label="A hand-drawn cinema and two people watching a film together">
      <div className="cinema-exterior">
        <svg className="cinema-arrival-line" viewBox="0 0 860 350" fill="none" aria-hidden="true"><path d="M-20 280C160 214 276 338 438 269S676 201 880 251" /></svg>
        <div className="cinema-glow" />
        <div className="cinema-sign"><span>THE</span><strong>CINEMA</strong><i>✳</i></div>
        <div className="cinema-facade">
          <div className="poster poster-one"><i>THE<br />ODYSSEY</i></div>
          <div className="cinema-doors"><i /><i /><b>now showing</b></div>
          <div className="poster poster-two"><i>ONE<br />MORE<br />SCENE</i></div>
        </div>
        <div className="ticket-booth"><span>TICKETS</span><i /></div>
        <div className="street-line" />
        <div className="cinema-walkers">
          <CinemaPerson type="idara" />
          <CinemaPerson type="narrator" />
        </div>
      </div>
      <div className="cinema-interior">
        <div className="screen-light" />
        <div className="cinema-screen"><div className="film-shape shape-one" /><div className="film-shape shape-two" /><div className="film-shape shape-three" /></div>
        <div className="theatre-seats"><i /><i /><i /><i /><i /><i /></div>
        <div className="seated-pair">
          <div className="seated-person seated-narrator"><i /><b /><span /></div>
          <div className="seated-person seated-idara"><i /><b /><span /></div>
        </div>
      </div>
    </div>
  );
}

function CinemaPerson({ type }: { type: "idara" | "narrator" }) {
  return (
    <div className={`cinema-person cinema-person-${type}`}>
      <div className="cinema-person-head"><i /><b /></div>
      <div className="cinema-person-body" />
      <div className="cinema-person-arm" />
      <div className="cinema-person-legs"><i /><i /></div>
    </div>
  );
}
