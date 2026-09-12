"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneTwoCopy } from "@/data/story";
import { MakeupShopDoodle } from "./MakeupShopDoodle";

gsap.registerPlugin(ScrollTrigger);

export function SceneTwo() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=2600" : "+=4300"),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .fromTo(".shop-route-bridge path", { strokeDashoffset: 800 }, { strokeDashoffset: 0, duration: 0.8, ease: "sine.inOut" }, 0.1)
        .fromTo(".scene-two-intro", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0.25)
        .to(".scene-two-intro", { autoAlpha: 0, y: -12, duration: 0.45, ease: "power2.in" }, 1.25)
        .fromTo(".makeup-shop", { autoAlpha: 0, y: 24, scale: 0.95 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }, 1.35)
        .to(".shop-route-bridge", { autoAlpha: 0, duration: 0.35 }, 2.0)
        .fromTo(".shop-awning, .shop-sign", { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.12 }, 2.05)
        .fromTo(".product-shelf, .shop-mirror, .counter", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.1 }, 2.3)
        .fromTo(".person-idara", { autoAlpha: 0, x: 45 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }, 2.9)
        .fromTo(".person-narrator", { autoAlpha: 0, x: -52 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }, 3.15)
        .fromTo(".scene-two-date", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 3.75)
        .to(".scene-two-date", { autoAlpha: 0, duration: 0.35 }, 5.15)
        .to(".makeup-shop", { scale: 1.44, xPercent: -14, yPercent: 8, duration: 1.0, ease: "power2.inOut" }, 5.55)
        .fromTo(".shelf-zoom", { autoAlpha: 0, rotate: -3, scale: 0.88 }, { autoAlpha: 1, rotate: 1, scale: 1, duration: 0.55, ease: "power2.out" }, 6.15)
        .fromTo(".label-contour", { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.35 }, 6.65)
        .fromTo(".label-bronzer", { autoAlpha: 0, x: 12 }, { autoAlpha: 1, x: 0, duration: 0.35 }, 7.1)
        .to(".confused-mark", { autoAlpha: 1, scale: 1.35, duration: 0.3, ease: "power2.out" }, 7.2)
        .fromTo(".scene-two-lesson", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 7.6)
        .to(".scene-two-lesson", { autoAlpha: 0, duration: 0.35 }, 8.95)
        .to(".shelf-zoom", { autoAlpha: 0, scale: 0.88, duration: 0.4 }, 9.1)
        .to(".makeup-shop", { scale: 1, xPercent: 0, yPercent: 0, duration: 0.85, ease: "power2.inOut" }, 9.25)
        .to(".person-narrator", { rotate: -4, x: -8, duration: 0.4 }, 10.05)
        .fromTo(".scene-two-awkward", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 10.2)
        .to(".scene-two-awkward", { autoAlpha: 0, duration: 0.35 }, 11.5)
        .to(".person-idara", { y: -5, rotate: 2, duration: 0.4, ease: "sine.inOut" }, 11.7)
        .fromTo(".scene-two-adventures", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "sine.out" }, 12.05)
        .to(".scene-two-adventures", { autoAlpha: 0, duration: 0.35 }, 13.55)
        .to(".makeup-shop", { autoAlpha: 0.22, scale: 0.92, duration: 0.65, ease: "power2.inOut" }, 13.9)
        .fromTo(".scene-two-ending", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }, 14.2);
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <section className="scene-two" ref={sceneRef}>
      <div className="paper-grain" />
      <p className="scene-marker">two / a very plausible date</p>
      <p className="scene-two-scroll">keep going <span>↓</span></p>
      <svg className="shop-route-bridge" viewBox="0 0 1000 400" fill="none" aria-hidden="true"><path d="M-20 288C191 154 278 384 498 249S761 146 1030 266" /></svg>
      <div className="scene-two-copy scene-two-intro">{sceneTwoCopy.opening}</div>
      <MakeupShopDoodle />
      <div className="scene-two-copy scene-two-date">{sceneTwoCopy.opening}</div>
      <div className="scene-two-copy scene-two-lesson">{sceneTwoCopy.lesson}</div>
      <div className="scene-two-copy scene-two-awkward">{sceneTwoCopy.awkward}</div>
      <div className="scene-two-copy scene-two-adventures">{sceneTwoCopy.adventures}</div>
      <div className="scene-two-copy scene-two-ending">{sceneTwoCopy.ending}</div>
    </section>
  );
}
