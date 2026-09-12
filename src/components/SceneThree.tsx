"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneThreeCopy } from "@/data/story";
import { CinemaDoodle } from "./CinemaDoodle";

gsap.registerPlugin(ScrollTrigger);

export function SceneThree() {
  const sceneRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: () => (window.matchMedia("(max-width: 620px)").matches ? "+=2900" : "+=4800"),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(".cinema-stage", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.75, ease: "power2.out" }, 0.05)
        .fromTo(".cinema-arrival-line path", { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 0.75, ease: "sine.inOut" }, 0.2)
        .fromTo(".cinema-facade, .ticket-booth, .street-line", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, 0.45)
        .fromTo(".cinema-sign", { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "sine.out" }, 1.0)
        .fromTo(".cinema-person-narrator", { autoAlpha: 0, x: -45 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }, 1.35)
        .fromTo(".cinema-person-idara", { autoAlpha: 0, x: 45 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }, 1.6)
        .to(".cinema-walkers", { xPercent: 23, duration: 1.25, ease: "sine.inOut" }, 2.05)
        .to(".cinema-arrival-line", { autoAlpha: 0, duration: 0.35 }, 2.35)
        .to(".cinema-doors i", { x: (index: number) => (index === 0 ? -13 : 13), duration: 0.55, ease: "power2.inOut" }, 2.55)
        .to(".cinema-exterior", { autoAlpha: 0, scale: 0.97, duration: 0.8, ease: "power2.in" }, 3.15)
        .fromTo(".cinema-interior", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.85, ease: "sine.out" }, 3.45)
        .fromTo(".seated-pair", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 4.0)
        .to(".cinema-screen", { autoAlpha: 1, duration: 0.7 }, 4.05)
        .to(".cinema-stage", { backgroundColor: "#1e1b21", duration: 1.0, ease: "power2.inOut" }, 4.1)
        .fromTo(".scene-three-opening", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "sine.out" }, 5.05)
        .to(".scene-three-opening", { autoAlpha: 0, duration: 0.4 }, 6.55)
        .to(".cinema-screen", { filter: "brightness(1.25)", duration: 0.5 }, 6.75)
        .fromTo(".scene-three-film", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "sine.out" }, 7.15)
        .to(".scene-three-film", { autoAlpha: 0, duration: 0.4 }, 8.75)
        .to(".film-shape", { autoAlpha: 0.25, duration: 0.75, stagger: 0.12, ease: "sine.inOut" }, 9.0)
        .fromTo(".scene-three-realization", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "sine.out" }, 9.75)
        .to(".scene-three-realization", { autoAlpha: 0, duration: 0.35 }, 10.9)
        .to(".seated-idara", { x: -3, duration: 0.5, ease: "sine.inOut" }, 11.15)
        .fromTo(".scene-three-ending", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "sine.out" }, 11.7)
        .to(".cinema-screen", { filter: "brightness(1.7)", duration: 1.1, ease: "sine.inOut" }, 14.2);
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <section className="scene-three" ref={sceneRef}>
      <div className="paper-grain" />
      <p className="scene-marker scene-three-marker">three / the cinema</p>
      <p className="scene-three-scroll">stay a while <span>↓</span></p>
      <CinemaDoodle />
      <div className="scene-three-copy scene-three-opening">{sceneThreeCopy.opening}</div>
      <div className="scene-three-copy scene-three-film">{sceneThreeCopy.film}</div>
      <div className="scene-three-copy scene-three-realization">{sceneThreeCopy.realization}</div>
      <div className="scene-three-copy scene-three-ending">{sceneThreeCopy.ending}</div>
    </section>
  );
}
