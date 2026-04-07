"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [showHotspots, setShowHotspots] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMute = () => {
    setMuted((prev) => {
      const nextMuted = !prev;
      if (videoRef.current) {
        videoRef.current.muted = nextMuted;
      }
      return nextMuted;
    });
  };

  const handleStart = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleReplay = async () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setIsEnded(false);
    setShowHotspots(false);
    await handleStart();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const threshold = duration > 0 ? Math.max(0, duration - 10) : 21;
    setShowHotspots(current >= threshold);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => undefined);
    }
  }, [muted, isPlaying]);

  return (
    <div className="relative flex w-screen h-screen min-h-[100svh] overflow-hidden bg-[#0D0D0D]">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain object-center"
        src="/PREWIEV.mp4"
        muted={muted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onEnded={() => {
          setIsEnded(true);
          setShowHotspots(true);
        }}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="absolute inset-0 bg-black/20" />

      {!isPlaying && (
        <button
          type="button"
          onClick={handleStart}
          className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 px-6 py-3 text-sm uppercase tracking-[0.22em] text-white/90 backdrop-blur hover:bg-black/70 transition"
          aria-label="Play video"
        >
          Play
        </button>
      )}

      {isEnded && (
        <button
          type="button"
          onClick={handleReplay}
          className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 px-6 py-3 text-sm uppercase tracking-[0.22em] text-white/90 backdrop-blur hover:bg-black/70 transition"
          aria-label="Replay video"
        >
          Replay
        </button>
      )}

      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${
          showHotspots ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showHotspots}
      >
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex items-center gap-8">
          <a
            href="https://github.com/scareroll"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-black/40 px-6 py-5 text-white/90 backdrop-blur transition hover:border-white/50 hover:bg-black/60"
            aria-label="Github"
          >
            <span className="relative h-16 w-16">
              <Image src="/github.png" alt="Github" fill className="object-contain" />
            </span>
            <span className="text-xl font-display tracking-wide">github</span>
            <span className="text-sm text-white/70">@scareroll</span>
          </a>
          <a
            href="https://t.me/scareroll"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-black/40 px-6 py-5 text-white/90 backdrop-blur transition hover:border-white/50 hover:bg-black/60"
            aria-label="Telegram"
          >
            <span className="relative h-16 w-16">
              <Image src="/telegram.png" alt="Telegram" fill className="object-contain" />
            </span>
            <span className="text-xl font-display tracking-wide">telegram</span>
            <span className="text-sm text-white/70">@scareroll</span>
          </a>
          <a
            href="https://discord.com/users/scareroll"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-black/40 px-6 py-5 text-white/90 backdrop-blur transition hover:border-white/50 hover:bg-black/60"
            aria-label="Discord"
          >
            <span className="relative h-16 w-16">
              <Image src="/discord.png" alt="Discord" fill className="object-contain" />
            </span>
            <span className="text-xl font-display tracking-wide">discord</span>
            <span className="text-sm text-white/70">@scareroll</span>
          </a>
        </div>
      </div>

      <div className="absolute z-10 right-6 bottom-6 flex items-center gap-3 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90 backdrop-blur">
        <button
          type="button"
          onClick={toggleMute}
          className="flex items-center justify-center h-8 w-8 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/50 transition"
          aria-pressed={!muted}
          aria-label={muted ? "Enable sound" : "Disable sound"}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {muted ? (
              <>
                <path d="M11 5l-5 4H3v6h3l5 4V5z" />
                <path d="M23 9l-4 4" />
                <path d="M19 9l4 4" />
              </>
            ) : (
              <>
                <path d="M11 5l-5 4H3v6h3l5 4V5z" />
                <path d="M15.5 8.5a4 4 0 010 7" />
                <path d="M18.5 6a8 8 0 010 12" />
              </>
            )}
          </svg>
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => {
            const nextVolume = Number(event.target.value);
            setVolume(nextVolume);
            if (videoRef.current) {
              videoRef.current.volume = nextVolume;
            }
          }}
          className="h-1 w-28 cursor-pointer accent-white"
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
