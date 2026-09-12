"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { beninSceneCopy } from "@/data/story";
import { BeninDoodle } from "./BeninDoodle";

gsap.registerPlugin(ScrollTrigger);

export function SceneBenin() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: scene, start: "top top", end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=2500" : "+=3600"), scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true } });
      timeline
        .fromTo(".benin-cinema-bridge", { autoAlpha: 1, scaleY: 0.4 }, { autoAlpha: 0.42, scaleY: 1, duration: 0.65, ease: "sine.inOut" }, 0)
        .fromTo(".benin-stage", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, 0.15)
        .fromTo(".benin-road", { autoAlpha: 0, y: -25 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "sine.out" }, 0.4)
        .fromTo(".scene-benin-trip", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 0.8)
        .to(".scene-benin-trip", { autoAlpha: 0, duration: 0.3 }, 1.95)
        .fromTo(".benin-sign, .benin-bag, .benin-horizon", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.1 }, 2.05)
        .fromTo(".scene-benin-wonderful", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 2.55)
        .to(".scene-benin-wonderful", { autoAlpha: 0, duration: 0.3 }, 3.75)
        .fromTo(".scene-benin-disbelief", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 4.1)
        .to(".scene-benin-disbelief", { autoAlpha: 0, duration: 0.25 }, 4.9)
        .fromTo(".benin-bike", { autoAlpha: 0, y: 28, scale: 0.88 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }, 5.0)
        .fromTo(".scene-benin-together", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 5.45)
        .to(".scene-benin-together", { autoAlpha: 0, duration: 0.25 }, 6.35)
        .fromTo(".scene-benin-expressway", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 6.65)
        .to(".benin-bike", { y: 40, duration: 0.85, ease: "sine.inOut" }, 6.8)
        .to(".road-centre", { strokeDashoffset: -280, duration: 0.85, ease: "none" }, 6.8)
        .to(".benin-motion-mark", { autoAlpha: 1, y: 28, stagger: 0.12, duration: 0.45 }, 7.05)
        .to(".benin-stage", { scale: 0.96, yPercent: -5, duration: 0.6, ease: "sine.inOut" }, 8.05)
        .to(".benin-bike, .benin-sign, .benin-bag, .benin-horizon", { autoAlpha: 0, duration: 0.45 }, 8.45)
        .to(".benin-road", { scaleY: 1.2, autoAlpha: 0.3, duration: 0.7, ease: "sine.inOut" }, 8.45);
    }, scene);
    return () => context.revert();
  }, []);

  return <section className="scene-benin" ref={sceneRef}><div className="paper-grain" /><p className="scene-marker">four / going somewhere</p><div className="benin-cinema-bridge" /><BeninDoodle /><div className="scene-benin-copy scene-benin-trip">{beninSceneCopy.trip}</div><div className="scene-benin-copy scene-benin-wonderful">{beninSceneCopy.wonderful}</div><div className="scene-benin-copy scene-benin-disbelief">{beninSceneCopy.disbelief}</div><div className="scene-benin-copy scene-benin-together">{beninSceneCopy.together}</div><div className="scene-benin-copy scene-benin-expressway">{beninSceneCopy.expressway}</div></section>;
}
