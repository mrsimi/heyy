"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { soundtrack } from "@/data/soundtrack";

const FINAL_FADE_DURATION_MS = 2800;

type SoundtrackContextValue = {
  started: boolean;
  muted: boolean;
  finished: boolean;
  begin: (withSound: boolean) => void;
  toggleMute: () => void;
};

const SoundtrackContext = createContext<SoundtrackContextValue | null>(null);

export function SoundtrackProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const startedRef = useRef(false);
  const mutedRef = useRef(false);
  const finishedRef = useRef(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [finished, setFinished] = useState(false);

  const cancelFade = useCallback(() => {
    if (fadeFrameRef.current !== null) cancelAnimationFrame(fadeFrameRef.current);
    fadeFrameRef.current = null;
  }, []);

  const fadeTo = useCallback((audio: HTMLAudioElement, targetVolume: number, duration: number, onComplete?: () => void) => {
    cancelFade();
    const initialVolume = audio.volume;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      audio.volume = initialVolume + (targetVolume - initialVolume) * progress;
      if (progress < 1) {
        fadeFrameRef.current = requestAnimationFrame(tick);
        return;
      }
      fadeFrameRef.current = null;
      onComplete?.();
    };
    fadeFrameRef.current = requestAnimationFrame(tick);
  }, [cancelFade]);

  const playSoundtrack = useCallback(async () => {
    if (finishedRef.current) return;
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio(soundtrack.url);
      audio.loop = false;
      audio.preload = "metadata";
      audio.volume = soundtrack.volume;
      audioRef.current = audio;
    }
    try {
      await audio.play();
    } catch {
      if (process.env.NODE_ENV === "development") console.warn(`Unable to play ${soundtrack.title}.`);
    }
  }, []);

  const begin = useCallback((withSound: boolean) => {
    if (startedRef.current) return;
    startedRef.current = true;
    mutedRef.current = !withSound;
    setStarted(true);
    setMuted(!withSound);
    if (withSound) void playSoundtrack();
  }, [playSoundtrack]);

  const toggleMute = useCallback(() => {
    if (finishedRef.current) return;
    const nextMuted = !mutedRef.current;
    mutedRef.current = nextMuted;
    setMuted(nextMuted);
    if (nextMuted) {
      audioRef.current?.pause();
      return;
    }
    void playSoundtrack();
  }, [playSoundtrack]);

  const finishSoundtrack = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    mutedRef.current = true;
    setFinished(true);
    setMuted(true);
    const audio = audioRef.current;
    if (!audio) return;
    fadeTo(audio, 0, FINAL_FADE_DURATION_MS, () => audio.pause());
  }, [fadeTo]);

  useEffect(() => {
    const handleVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        audio.pause();
      } else if (startedRef.current && !mutedRef.current && !finishedRef.current) {
        void audio.play().catch(() => undefined);
      }
    };
    const handleFinalResponse = () => finishSoundtrack();
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("adventure-response-ready", handleFinalResponse);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("adventure-response-ready", handleFinalResponse);
      cancelFade();
      audioRef.current?.pause();
      audioRef.current?.removeAttribute("src");
      audioRef.current = null;
    };
  }, [cancelFade, finishSoundtrack]);

  return <SoundtrackContext.Provider value={{ started, muted, finished, begin, toggleMute }}>{children}</SoundtrackContext.Provider>;
}

function useSoundtrack() {
  const context = useContext(SoundtrackContext);
  if (!context) throw new Error("Soundtrack controls must be inside SoundtrackProvider.");
  return context;
}

export function SoundEntry() {
  const { started, begin } = useSoundtrack();
  if (started) return null;
  return <div className="sound-entry"><p>this story has a soundtrack <span>♪</span></p><div><button onClick={() => begin(true)}>begin with sound</button><button onClick={() => begin(false)}>continue quietly</button></div></div>;
}

export function SoundControls() {
  const { started, muted, finished, toggleMute } = useSoundtrack();
  const [creditsOpen, setCreditsOpen] = useState(false);
  if (!started) return null;
  return <><div className="sound-controls"><button type="button" onClick={toggleMute} disabled={finished} aria-label={finished ? "Soundtrack finished" : muted ? "Turn sound on" : "Mute soundtrack"}>{muted ? "♪ ×" : "♪"}</button><button type="button" onClick={() => setCreditsOpen((open) => !open)} aria-expanded={creditsOpen}>credits</button></div>{creditsOpen && <aside className="music-credits" aria-label="Music credits"><button onClick={() => setCreditsOpen(false)} aria-label="Close music credits">×</button><p>music credits</p><div><strong>{soundtrack.title}</strong> — {soundtrack.artist}<br /><a href={soundtrack.source} target="_blank" rel="noreferrer">{soundtrack.license}</a><pre>{soundtrack.attribution}</pre></div></aside>}</>;
}
