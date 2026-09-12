export function MakeupShopDoodle() {
  return (
    <div className="makeup-shop" aria-label="A hand-drawn makeup shop with two people inside">
      <div className="shop-awning"><i /><i /><i /><i /><i /></div>
      <div className="shop-sign">a little<br />makeup shop</div>
      <div className="shop-frame">
        <div className="shop-window shop-window-left"><Shelf /></div>
        <div className="shop-door"><span>OPEN</span><i /></div>
        <div className="shop-window shop-window-right"><Mirror /></div>
      </div>
      <div className="counter"><span>try a little?</span><i /></div>
      <div className="shop-floor" />
      <div className="shop-spark shop-spark-one">✳</div>
      <div className="shop-spark shop-spark-two">✦</div>
      <div className="doodle-person person-idara">
        <div className="person-head"><i /><b /></div>
        <div className="person-body" /><div className="person-arm person-arm-left" /><div className="person-arm person-arm-right" />
        <div className="person-legs"><i /><i /></div>
        <span className="person-note">ooh!</span>
      </div>
      <div className="doodle-person person-narrator">
        <div className="person-head"><i /><b /></div>
        <div className="person-body" /><div className="person-arm person-arm-left" /><div className="person-arm person-arm-right" />
        <div className="person-legs"><i /><i /></div>
        <span className="confused-mark">?</span>
      </div>
      <div className="shelf-zoom">
        <div className="zoom-paper"><Shelf focus /><span className="zoom-tape zoom-tape-one" /><span className="zoom-tape zoom-tape-two" /></div>
        <div className="product-label label-contour">CONTOUR</div>
        <div className="product-label label-bronzer">BRONZER</div>
      </div>
    </div>
  );
}

function Shelf({ focus = false }: { focus?: boolean }) {
  return (
    <div className={`product-shelf${focus ? " product-shelf-focus" : ""}`}>
      <div className="shelf-line shelf-line-one" />
      <div className="shelf-line shelf-line-two" />
      <div className="makeup-item item-tube"><i /></div>
      <div className="makeup-item item-compact"><i /></div>
      <div className="makeup-item item-brush"><i /></div>
      <div className="makeup-item item-bottle"><i /></div>
      <div className="makeup-item item-lipstick"><i /></div>
    </div>
  );
}

function Mirror() {
  return <div className="shop-mirror"><i /><span>look<br />here</span></div>;
}
