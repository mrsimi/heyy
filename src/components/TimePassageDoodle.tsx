type CounterProps = { value: number; label: string };

export function TimePassageDoodle({ counter }: { counter: CounterProps[] }) {
  return (
    <div className="time-stage" aria-label="A hand-drawn passage of time since the cinema">
      <div className="time-screen-glow" />
      <div className="time-sky"><i className="time-sun">☼</i><i className="time-moon">☾</i><b>·</b><b>·</b><b>·</b></div>
      <div className="calendar-stack"><CalendarPage day="1" /><CalendarPage day="28" /><CalendarPage day="56" /></div>
      <svg className="time-line" viewBox="0 0 840 280" fill="none" aria-hidden="true"><path d="M42 160C115 96 166 220 235 158S344 92 416 149 549 224 606 145 702 109 804 159" /></svg>
      <div className="time-mark mark-one">01</div><div className="time-mark mark-two">28</div><div className="time-mark mark-three">56</div>
      <div className="memory memory-cups"><i /><i /></div>
      <div className="memory memory-camera"><i /><b /></div>
      <div className="memory memory-note">♫</div>
      <div className="memory memory-bubble">...</div>
      <div className="memory memory-stars">✦ ✳</div>
      <div className="time-counter">{counter.map(({ value, label }) => <div className="counter-piece" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <div className="time-pair"><TimePerson type="narrator" /><TimePerson type="idara" /></div>
    </div>
  );
}

function CalendarPage({ day }: { day: string }) {
  return <div className={`calendar-page calendar-page-${day}`}><span>day</span><strong>{day}</strong><i /></div>;
}

function TimePerson({ type }: { type: "idara" | "narrator" }) {
  return <div className={`time-person time-person-${type}`}><i /><b /><span /><em /></div>;
}
