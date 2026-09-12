"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneOneCopy } from "@/data/story";
import { HandDrawnPhone } from "./HandDrawnPhone";
import { RestaurantDoodle } from "./RestaurantDoodle";

gsap.registerPlugin(ScrollTrigger);

export function SceneOne() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=2500" : "+=4200"),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(".scroll-invitation", { autoAlpha: 0, duration: 0.3 }, 0)
        .fromTo(".opening-copy", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.2)
        .to(".opening-copy", { autoAlpha: 1, duration: 0.8 }, 1.25)
        .to(".opening-copy", { autoAlpha: 0, y: -20, duration: 0.55, ease: "power2.in" }, 2.1)
        .fromTo(".phone-wrap", { autoAlpha: 0, y: 46, rotate: 3 }, { autoAlpha: 1, y: 0, rotate: -2, duration: 0.85, ease: "power3.out" }, 2.25)
        .fromTo(".phone", { scale: 0.92 }, { scale: 1, duration: 0.8, ease: "power2.out" }, 2.25)
        .fromTo(".chat-message-0", { autoAlpha: 0, x: 28 }, { autoAlpha: 1, x: 0, duration: 0.45, ease: "power2.out" }, 3.25)
        .fromTo(".chat-message-1", { autoAlpha: 0, x: 28 }, { autoAlpha: 1, x: 0, duration: 0.45, ease: "power2.out" }, 4.25)
        .fromTo(".chat-message-2", { autoAlpha: 0, x: 28 }, { autoAlpha: 1, x: 0, duration: 0.45, ease: "power2.out" }, 5.3)
        .to(".typing-dots", { autoAlpha: 1, duration: 0.35 }, 5.95)
        .to(".phone-wrap", { xPercent: -35, scale: 0.82, autoAlpha: 0.35, duration: 0.8, ease: "power2.inOut" }, 6.8)
        .fromTo(".reflection-copy", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" }, 6.95)
        .to(".reflection-copy", { autoAlpha: 0, y: -12, duration: 0.4 }, 8.2)
        .fromTo(".glad-copy", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "sine.out" }, 8.55)
        .to(".glad-copy", { autoAlpha: 0, duration: 0.35 }, 9.65)
        .to(".phone-wrap", { autoAlpha: 0, xPercent: -60, duration: 0.45 }, 9.65)
        .fromTo(".restaurant-stage", { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 10.0)
        .fromTo(".map-lines .route-long, .map-lines .route-short, .map-street", { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 1.5, ease: "sine.inOut" }, 10.15)
        .fromTo(".restaurant", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 11.0)
        .fromTo(".thought-copy", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 11.4)
        .to(".thought-copy", { autoAlpha: 0, duration: 0.35 }, 12.45)
        .fromTo(".restaurant-copy", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "sine.out" }, 12.65)
        .to(".restaurant-copy", { autoAlpha: 0, duration: 0.35 }, 13.8)
        .to(".route-cross", { autoAlpha: 1, strokeDashoffset: 0, duration: 0.55, ease: "power2.out" }, 14.05)
        .to(".restaurant", { rotate: -2, x: 10, duration: 0.4 }, 14.3)
        .fromTo(".ending-copy", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }, 14.65);
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <section className="scene-one" ref={sceneRef}>
      <div className="paper-grain" />
      <p className="scene-marker">one / an innocent question</p>
      <p className="scroll-invitation">scroll gently <span>↓</span></p>
      <div className="story-copy opening-copy">{sceneOneCopy.opening}</div>
      <div className="phone-scene"><HandDrawnPhone /></div>
      <div className="story-copy reflection-copy">{sceneOneCopy.reflection}</div>
      <div className="story-copy glad-copy">{sceneOneCopy.glad}</div>
      <RestaurantDoodle />
      <div className="story-copy thought-copy">{sceneOneCopy.thought}</div>
      <div className="story-copy restaurant-copy">{sceneOneCopy.restaurant}</div>
      <div className="story-copy ending-copy">{sceneOneCopy.ending}</div>
    </section>
  );
}
