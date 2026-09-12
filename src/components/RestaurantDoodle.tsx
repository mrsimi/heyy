export function RestaurantDoodle() {
  return (
    <div className="restaurant-stage" aria-label="A small hand-drawn Mexican restaurant on a map">
      <svg className="map-lines" viewBox="0 0 820 500" fill="none" aria-hidden="true">
        <path className="route route-long" d="M66 351C130 315 161 380 211 350S294 266 351 309 414 421 498 377 596 231 738 173" />
        <path className="route route-short" d="M67 103C151 79 193 123 238 104S337 54 414 99 523 157 578 121 663 81 764 111" />
        <path d="M134 420C180 386 190 419 227 399M556 424C586 401 616 418 642 382" className="map-street" />
        <path className="route-cross" d="M323 281l164 148M487 279 323 429" />
      </svg>
      <div className="map-label map-label-one">somewhere worth going</div>
      <div className="map-label map-label-two">maybe here?</div>
      <div className="restaurant">
        <div className="restaurant-roof"><i /><i /><i /></div>
        <div className="restaurant-wall">
          <div className="restaurant-door" />
          <div className="restaurant-window"><i /><i /></div>
        </div>
        <div className="restaurant-sign">MEXICAN<br />FOOD</div>
        <span className="little-sun">✳</span>
      </div>
      <div className="map-pin"><i /> <span>the idea</span></div>
    </div>
  );
}
