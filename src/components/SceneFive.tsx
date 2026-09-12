"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneFiveCopy } from "@/data/story";
import { ThingsDoodle } from "./ThingsDoodle";

gsap.registerPlugin(ScrollTrigger);

export function SceneFive() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: scene, start: "top top", end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=3000" : "+=5200"), scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
      });

      timeline
        .fromTo(".things-stage", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0.1)
        .fromTo(".things-camera", { autoAlpha: 0.28, scale: 0.52, y: 68 }, { autoAlpha: 0.5, scale: 0.62, y: 42, duration: 0.7, ease: "sine.inOut" }, 0.15)
        .fromTo(".scene-five-opening", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 0.4)
        .to(".scene-five-opening", { autoAlpha: 0, duration: 0.35 }, 1.75)
        .fromTo(".things-idara-cute", { autoAlpha: 0, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.55, ease: "power2.out" }, 2.15)
        .fromTo(".things-watching", { autoAlpha: 0, x: -18 }, { autoAlpha: 1, x: 0, duration: 0.45 }, 2.45)
        .to(".things-idara-cute", { y: -8, rotate: 3, duration: 0.35, ease: "sine.inOut" }, 2.95)
        .to(".things-idara-cute", { y: 0, rotate: -2, duration: 0.35, ease: "sine.inOut" }, 3.38)
        .to(".cute-spark, .tiny-point", { autoAlpha: 1, duration: 0.25 }, 3.42)
        .fromTo(".scene-five-watching", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 3.85)
        .to(".scene-five-watching", { autoAlpha: 0, duration: 0.35 }, 5.15)
        .to(".things-idara-cute, .things-watching", { autoAlpha: 0, duration: 0.4 }, 5.35)
        .to(".things-camera", { autoAlpha: 1, scale: 1, y: 0, rotate: -4, duration: 0.5, ease: "power2.out" }, 5.65)
        .fromTo(".things-idara-photo, .things-photographer", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, stagger: 0.13, duration: 0.5, ease: "power2.out" }, 6.0)
        .to(".photo-pose", { autoAlpha: 1, duration: 0.25 }, 6.55)
        .to(".things-camera", { scale: 1.14, duration: 0.18, ease: "power2.out" }, 6.8)
        .to(".photo-frame", { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power2.out" }, 6.95)
        .fromTo(".scene-five-photos", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 7.25)
        .to(".scene-five-photos", { autoAlpha: 0, duration: 0.35 }, 8.55)
        .to(".things-camera, .things-idara-photo, .things-photographer, .photo-frame", { autoAlpha: 0, duration: 0.4 }, 8.75)
        .fromTo(".things-idara-talking, .things-listening", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, stagger: 0.13, duration: 0.5, ease: "power2.out" }, 9.15)
        .fromTo(".talk-bubble", { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, stagger: 0.16, duration: 0.35, ease: "power2.out" }, 9.7)
        .to(".talking-mouth", { rotate: 18, duration: 0.28, repeat: 1, yoyo: true, ease: "sine.inOut" }, 10.25)
        .fromTo(".scene-five-talking", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 10.55)
        .to(".scene-five-talking", { autoAlpha: 0, duration: 0.35 }, 11.8)
        .to(".talk-bubble", { autoAlpha: 0, duration: 0.3 }, 12.0)
        .to(".things-idara-talking, .things-listening", { x: (index: number) => (index === 0 ? 40 : -40), duration: 0.55, ease: "sine.inOut" }, 12.25)
        .to(".things-hints i", { autoAlpha: 1, y: -4, stagger: 0.13, duration: 0.35 }, 12.8)
        .fromTo(".scene-five-ending", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.75, ease: "sine.out" }, 13.15);
    }, scene);

    return () => context.revert();
  }, []);

  return <section className="scene-five" ref={sceneRef}><div className="paper-grain" /><p className="scene-marker">six / the little things</p><p className="scene-five-scroll">take your time <span>↓</span></p><ThingsDoodle /><div className="scene-five-copy scene-five-opening">{sceneFiveCopy.opening}</div><div className="scene-five-copy scene-five-watching">{sceneFiveCopy.watching}</div><div className="scene-five-copy scene-five-photos">{sceneFiveCopy.photos}</div><div className="scene-five-copy scene-five-talking">{sceneFiveCopy.talking}</div><div className="scene-five-copy scene-five-ending">{sceneFiveCopy.ending}</div></section>;
}
