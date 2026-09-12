"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cinemaElapsed, sceneFourCopy } from "@/data/story";
import { TimePassageDoodle } from "./TimePassageDoodle";

gsap.registerPlugin(ScrollTrigger);

const counter = [
  { value: cinemaElapsed.days, label: "days" },
  { value: cinemaElapsed.hours, label: "hours" },
  { value: cinemaElapsed.minutes, label: "minutes" },
];

export function SceneFour() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: scene, start: "top top", end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=2700" : "+=4400"), scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
      });

      timeline
        .fromTo(".time-screen-glow", { autoAlpha: 1, scale: 0.82 }, { autoAlpha: 0.38, scale: 1.35, duration: 1.05, ease: "sine.inOut" }, 0)
        .fromTo(".time-stage", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0.1)
        .fromTo(".time-sky", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "sine.out" }, 0.7)
        .fromTo(".calendar-page-1", { autoAlpha: 0, y: 18, rotate: -7 }, { autoAlpha: 1, y: 0, rotate: -4, duration: 0.45 }, 1.15)
        .fromTo(".calendar-page-28", { autoAlpha: 0, y: 18, rotate: 6 }, { autoAlpha: 1, y: 0, rotate: 3, duration: 0.45 }, 1.55)
        .fromTo(".calendar-page-56", { autoAlpha: 0, y: 18, rotate: -3 }, { autoAlpha: 1, y: 0, rotate: -1, duration: 0.45 }, 1.95)
        .fromTo(".time-line path", { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 1.45, ease: "sine.inOut" }, 2.0)
        .fromTo(".time-mark", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger: 0.18, duration: 0.35 }, 2.45)
        .fromTo(".scene-four-opening", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 3.0)
        .to(".scene-four-opening", { autoAlpha: 0, duration: 0.35 }, 4.35)
        .fromTo(".counter-piece", { autoAlpha: 0, y: 16, rotate: -2 }, { autoAlpha: 1, y: 0, rotate: 0, stagger: 0.18, duration: 0.5, ease: "power2.out" }, 4.7)
        .fromTo(".scene-four-reference", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 5.5)
        .to(".scene-four-reference", { autoAlpha: 0, duration: 0.35 }, 6.75)
        .fromTo(".memory", { autoAlpha: 0, scale: 0.7 }, { autoAlpha: 1, scale: 1, stagger: 0.14, duration: 0.4, ease: "power2.out" }, 7.0)
        .fromTo(".scene-four-since", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 8.05)
        .to(".scene-four-since", { autoAlpha: 0, duration: 0.35 }, 9.35)
        .fromTo(".time-pair", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 9.65)
        .to(".time-pair", { x: 3, duration: 0.5, ease: "sine.inOut" }, 10.4)
        .fromTo(".scene-four-ending", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "sine.out" }, 10.8)
        .to(".memory-camera, .memory-bubble", { y: -8, duration: 0.55, ease: "sine.inOut" }, 12.4);
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <section className="scene-four" ref={sceneRef}>
      <div className="paper-grain" />
      <p className="scene-marker">five / a little while later</p>
      <p className="scene-four-scroll">keep counting <span>↓</span></p>
      <TimePassageDoodle counter={counter} />
      <div className="scene-four-copy scene-four-opening">{sceneFourCopy.opening}</div>
      <div className="scene-four-copy scene-four-reference">{sceneFourCopy.reference}</div>
      <div className="scene-four-copy scene-four-since">{sceneFourCopy.since}</div>
      <div className="scene-four-copy scene-four-ending">{sceneFourCopy.ending}</div>
    </section>
  );
}
