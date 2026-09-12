"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { finalSceneCopy } from "@/data/story";
import { FinalDoodle } from "./FinalDoodle";
import { AdventureResponse } from "./AdventureResponse";

gsap.registerPlugin(ScrollTrigger);

export function FinalScene() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: scene, start: "top top", end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=2300" : "+=3600"), scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
      });

      timeline
        .fromTo(".final-stage", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 0.2)
        .fromTo(".final-pair", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 0.55)
        .fromTo(".final-somehow", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 1.15)
        .to(".final-somehow", { autoAlpha: 0, duration: 0.35 }, 2.15)
        .fromTo(".trace-message", { autoAlpha: 0, scale: 0.86 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power2.out" }, 2.45)
        .fromTo(".final-beginning", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 2.7)
        .to(".final-beginning, .trace-message", { autoAlpha: 0, duration: 0.4 }, 4.25)
        .fromTo(".final-glad", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 4.6)
        .to(".final-glad", { autoAlpha: 0, duration: 0.35 }, 5.8)
        .to(".final-pair", { xPercent: 26, duration: 1.15, ease: "sine.inOut" }, 5.95)
        .fromTo(".trace-ticket, .trace-lipstick, .trace-camera, .trace-mark", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, stagger: 0.13, duration: 0.3 }, 6.3)
        .fromTo(".final-next", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "sine.out" }, 7.0)
        .to(".final-next", { autoAlpha: 0, duration: 0.35 }, 8.65)
        .fromTo(".final-with-you", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 8.95)
        .to(".final-with-you", { autoAlpha: 0, duration: 0.4 }, 10.25)
        .to(".memory-trace", { autoAlpha: 0, duration: 0.5 }, 10.55)
        .to(".final-pair", { xPercent: 82, scale: 0.88, duration: 1.35, ease: "sine.inOut" }, 10.7)
        .fromTo(".final-adventures", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "sine.out" }, 12.1)
        .call(() => window.dispatchEvent(new Event("adventure-response-ready")), [], 13.05)
        .fromTo(".adventure-response", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "sine.out" }, 13.05);
    }, scene);

    return () => context.revert();
  }, []);

  return <section className="final-scene" ref={sceneRef}><div className="paper-grain" /><p className="scene-marker">the end / for now</p><FinalDoodle /><div className="final-copy final-somehow">{finalSceneCopy.somehow}</div><div className="final-copy final-beginning">{finalSceneCopy.beginning}</div><div className="final-copy final-glad">{finalSceneCopy.glad}</div><div className="final-copy final-next">{finalSceneCopy.next}</div><div className="final-copy final-with-you">{finalSceneCopy.withYou}</div><div className="final-adventures">{finalSceneCopy.adventures}</div><AdventureResponse /></section>;
}
