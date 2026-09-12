export function ThingsDoodle() {
  return (
    <div className="things-stage" aria-label="Three little doodled things the narrator likes about Idara">
      <div className="things-ground" />
      <div className="things-idara things-idara-cute"><Person /><span className="cute-spark">✳</span><span className="tiny-point">→</span></div>
      <div className="things-narrator things-watching"><Person narrator /><i className="watching-eye">◌</i></div>
      <div className="things-camera"><i /><b /><span>click</span></div>
      <div className="things-idara things-idara-photo"><Person /><span className="photo-pose">!</span></div>
      <div className="things-narrator things-photographer"><Person narrator /><i className="camera-hands" /></div>
      <div className="photo-frame"><i /><i /><span>one more</span></div>
      <div className="things-idara things-idara-talking"><Person /><span className="talking-mouth">~</span></div>
      <div className="things-narrator things-listening"><Person narrator /><i className="listening-ear">◖</i></div>
      <div className="talk-bubble talk-bubble-one">and then...</div>
      <div className="talk-bubble talk-bubble-two">actually—</div>
      <div className="talk-bubble talk-bubble-three">wait!</div>
      <div className="things-hints"><i className="hint-camera" /><i className="hint-bubble">...</i><i className="hint-star">✦</i></div>
    </div>
  );
}

function Person({ narrator = false }: { narrator?: boolean }) {
  return <><i className="things-head" /><b className={`things-body${narrator ? " narrator-body" : ""}`} /><span className="things-legs" /><em className="things-arm" /></>;
}
