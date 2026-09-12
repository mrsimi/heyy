"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { sceneSoundtrack, soundtrack, type SoundtrackKey } from "@/data/soundtrack";

type SoundtrackContextValue = { started: boolean; muted: boolean; begin: (withSound: boolean) => void; toggleMute: () => void; };
const SoundtrackContext = createContext<SoundtrackContextValue | null>(null);

function fade(audio: HTMLAudioElement, from: number, to: number, duration: number, onEnd?: () => void) {
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    audio.volume = from + (to - from) * progress;
    if (progress < 1) requestAnimationFrame(tick); else onEnd?.();
  };
  requestAnimationFrame(tick);
}

export function SoundtrackProvider({ children }: { children: React.ReactNode }) {
  const activeAudio = useRef<HTMLAudioElement | null>(null);
  const currentKey = useRef<SoundtrackKey | null>(null);
  const pendingKey = useRef<SoundtrackKey | null>(null);
  const sceneRatios = useRef(new Map<Element, number>());
  const startedRef = useRef(false);
  const mutedRef = useRef(false);
  const preloaded = useRef<Partial<Record<SoundtrackKey, HTMLAudioElement>>>({});
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const switchTrack = useCallback(async (key: SoundtrackKey) => {
    if (!startedRef.current || mutedRef.current || currentKey.current === key || pendingKey.current === key) return;
    pendingKey.current = key;
    const next = new Audio(soundtrack[key].url);
    next.loop = true;
    next.preload = "auto";
    next.volume = 0;
    try {
      await next.play();
      const previous = activeAudio.current;
      fade(next, 0, soundtrack[key].volume, 1900);
      if (previous) fade(previous, previous.volume, 0, 1900, () => { previous.pause(); previous.src = ""; });
      activeAudio.current = next;
      currentKey.current = key;
    } catch {
      if (process.env.NODE_ENV === "development") console.warn(`Unable to play ${soundtrack[key].title}.`);
    } finally {
      pendingKey.current = null;
    }
  }, []);

  const begin = useCallback((withSound: boolean) => {
    startedRef.current = true;
    setStarted(true);
    if (!withSound) { mutedRef.current = true; setMuted(true); return; }
    void switchTrack("beginning");
  }, [switchTrack]);

  const toggleMute = useCallback(() => {
    const nextMuted = !mutedRef.current;
    mutedRef.current = nextMuted;
    setMuted(nextMuted);
    if (nextMuted) { activeAudio.current?.pause(); return; }
    if (activeAudio.current) { void activeAudio.current.play().catch(() => undefined); return; }
    void switchTrack(currentKey.current ?? "beginning");
  }, [switchTrack]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => sceneRatios.current.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0));
      const visible = Array.from(sceneRatios.current.entries()).sort((a, b) => b[1] - a[1])[0];
      if (visible && visible[1] >= 0.6) void switchTrack(sceneSoundtrack[(visible[0] as HTMLElement).className.split(" ")[0]]);
    }, { threshold: [0.4, 0.6, 0.75] });
    const scenes = document.querySelectorAll(".scene-one,.scene-two,.scene-three,.scene-four,.scene-five,.final-scene");
    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, [switchTrack]);

  useEffect(() => {
    if (!started) return;
    const preloadFor = (key: SoundtrackKey) => {
      if (preloaded.current[key]) return;
      const audio = new Audio(soundtrack[key].url);
      audio.preload = "metadata";
      preloaded.current[key] = audio;
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      preloadFor(entry.target.classList.contains("scene-two") ? "middle" : "ending");
      observer.unobserve(entry.target);
    }), { threshold: 0.25 });
    const sceneTwo = document.querySelector(".scene-two");
    const sceneFour = document.querySelector(".scene-four");
    if (sceneTwo) observer.observe(sceneTwo);
    if (sceneFour) observer.observe(sceneFour);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) activeAudio.current?.pause();
      else if (startedRef.current && !mutedRef.current && activeAudio.current) void activeAudio.current.play().catch(() => undefined);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      activeAudio.current?.pause();
      activeAudio.current?.removeAttribute("src");
      activeAudio.current = null;
      Object.values(preloaded.current).forEach((audio) => { audio?.pause(); audio?.removeAttribute("src"); });
      preloaded.current = {};
    };
  }, []);

  return <SoundtrackContext.Provider value={{ started, muted, begin, toggleMute }}>{children}</SoundtrackContext.Provider>;
}

function useSoundtrack() { const context = useContext(SoundtrackContext); if (!context) throw new Error("Soundtrack controls must be inside SoundtrackProvider."); return context; }

export function SoundEntry() {
  const { started, begin } = useSoundtrack();
  if (started) return null;
  return <div className="sound-entry"><p>this story has a soundtrack <span>♪</span></p><div><button onClick={() => begin(true)}>begin with sound</button><button onClick={() => begin(false)}>continue quietly</button></div></div>;
}

export function SoundControls() {
  const { started, muted, toggleMute } = useSoundtrack();
  const [creditsOpen, setCreditsOpen] = useState(false);
  if (!started) return null;
  return <><div className="sound-controls"><button type="button" onClick={toggleMute} aria-label={muted ? "Turn sound on" : "Mute soundtrack"}>{muted ? "♪ ×" : "♪"}</button><button type="button" onClick={() => setCreditsOpen((open) => !open)} aria-expanded={creditsOpen}>credits</button></div>{creditsOpen && <aside className="music-credits" aria-label="Music credits"><button onClick={() => setCreditsOpen(false)} aria-label="Close music credits">×</button><p>music credits</p>{Object.values(soundtrack).map((track) => <div key={track.title}><strong>{track.title}</strong> — {track.artist}<br /><a href={track.source} target="_blank" rel="noreferrer">{track.license}</a><pre>{track.attribution}</pre></div>)}</aside>}</>;
}
