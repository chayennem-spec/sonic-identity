import React, { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sparkles,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";

interface Track {
  id: string;
  num: string;
  title: string;
  type: string;
  frequency: string;
  harmonicNote: string;
  description: string;
  frequencies: number[];
}

const TRACKS: Track[] = [
  {
    id: "luxury-signature",
    num: "01",
    title: "Maison Aurelia — Sonic Signature",
    type: "Haute Horlogerie & High Fashion",
    frequency: "528 Hz (Miracle Tone)",
    harmonicNote: "Root: C5 / Golden Ratio",
    description:
      "Crystalline acoustic chime cascading into warm analog sub-bass, evoking sovereign luxury and quiet authority.",
    frequencies: [261.63, 329.63, 392.0, 523.25, 659.25],
  },
  {
    id: "executive-resonance",
    num: "02",
    title: "The Sovereign Keynote Walk-On",
    type: "Global Female Founders Summit",
    frequency: "432 Hz (Universal Alignment)",
    harmonicNote: "Harmonic Cello & Rhodes",
    description:
      "Grounded acoustic overtone with ethereal harmonic swell, engineered to anchor attention and establish instant trust.",
    frequencies: [216, 272, 324, 432, 540],
  },
  {
    id: "wellness-sanctuary",
    num: "03",
    title: "Verve Botanicals — Biophilic Score",
    type: "Clean Beauty & Spa Rituals",
    frequency: "639 Hz (Heart Resonance)",
    harmonicNote: "Slow Ambient Modulation",
    description:
      "Organic textures layered with delicate crystal bowls, calming nervous systems in high-touch spaces.",
    frequencies: [196, 246.94, 293.66, 392, 493.88],
  },
  {
    id: "digital-audio-logo",
    num: "04",
    title: "Luminary App — Micro-Haptic Audio Logo",
    type: "FinTech & Luxury Digital Concierge",
    frequency: "852 Hz (Pure Intuition)",
    harmonicNote: "2.4s Signature Stinger",
    description:
      "An indelible 3-note micro-motif delivering neural satisfaction at digital checkout and onboarding points.",
    frequencies: [440, 554.37, 659.25, 880],
  },
];

export function SonicPlayer() {
  const [activeTrack, setActiveTrack] = useState<Track>(TRACKS[0]!);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(32);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const startSynthesizer = (track: Track) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      oscillatorsRef.current = [];

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.11, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      track.frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.2 + idx * 0.08;
        lfoGain.gain.value = 2.0;
        lfo.connect(osc.frequency);
        lfo.start();

        const baseGain = 0.07 / (idx + 1);
        oscGain.gain.setValueAtTime(0.001, ctx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(baseGain, ctx.currentTime + 1.2);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        oscillatorsRef.current.push(osc);
      });
    } catch (e) {
      console.warn("WebAudio ambient player error", e);
    }
  };

  const stopSynthesizer = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0.001,
          audioCtxRef.current.currentTime + 0.35,
        );
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // ignore
            }
          });
          oscillatorsRef.current = [];
        }, 400);
      } catch {
        // ignore
      }
    }
  };

  const togglePlay = (track?: Track) => {
    const target = track || activeTrack;
    if (isPlaying && (!track || track.id === activeTrack.id)) {
      setIsPlaying(false);
      stopSynthesizer();
    } else {
      setActiveTrack(target);
      setIsPlaying(true);
      startSynthesizer(target);
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      gainNodeRef.current.gain.setValueAtTime(newMuted ? 0 : 0.11, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 1.4));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      stopSynthesizer();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="border border-border bg-card/60 backdrop-blur-md relative overflow-hidden">
      {/* Elementis-style top index bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-foreground font-medium">Atelier Audio Laboratory</span>
          <span className="text-stone hidden sm:inline">• Live Synthesizer</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
            className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-3.5 w-3.5 text-terracotta" />
            ) : (
              <Volume2 className="h-3.5 w-3.5 text-primary" />
            )}
            <span>{isMuted ? "Muted" : "Acoustic Active"}</span>
          </button>
          <span className="text-border">|</span>
          <span className="text-foreground">{activeTrack.num} / 04</span>
        </div>
      </div>

      {/* Main player workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left active track hero */}
        <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-primary tracking-widest">
                {activeTrack.num}
              </span>
              <span className="text-border">—</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                {activeTrack.type}
              </span>
            </div>

            <h4 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-foreground font-normal leading-tight">
              {activeTrack.title}
            </h4>

            <p className="text-sm text-muted-foreground/90 font-light leading-relaxed max-w-xl">
              {activeTrack.description}
            </p>
          </div>

          {/* Precision acoustic waveform and control */}
          <div className="space-y-6 pt-4 border-t border-border">
            <div className="flex items-end justify-between gap-1.5 h-14 py-1">
              {[
                35, 60, 25, 80, 50, 95, 30, 75, 65, 90, 45, 85, 55, 90, 40, 95, 70, 50, 85, 65, 35,
                55, 75, 45, 85, 60, 40, 70, 90, 50, 30, 65,
              ].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 transition-all duration-200 ${
                    isPlaying ? "bg-primary" : "bg-muted-foreground/25"
                  }`}
                  style={{
                    height: isPlaying
                      ? `${Math.max(12, (h * ((playbackProgress % 35) + 65)) / 100)}%`
                      : "18%",
                  }}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => togglePlay()}
                  className="group relative inline-flex items-center gap-3 border border-foreground/60 px-6 py-3 text-xs uppercase tracking-[0.2em] font-mono text-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5 fill-current" />
                      <span>Halt Transmission</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>Audition Frequency</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-muted-foreground space-y-0.5 text-right">
                <div className="text-sand font-medium">{activeTrack.frequency}</div>
                <div>{activeTrack.harmonicNote}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right track list (Elementis numbered catalog style) */}
        <div className="lg:col-span-5 bg-card/40 flex flex-col divide-y divide-border">
          <div className="p-4 px-6 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground bg-secondary/30">
            Acoustic Library Showcase
          </div>

          {TRACKS.map((track) => {
            const isCurrent = track.id === activeTrack.id;
            return (
              <button
                key={track.id}
                onClick={() => togglePlay(track)}
                className={`p-6 text-left transition-all flex items-start justify-between gap-4 group ${
                  isCurrent
                    ? "bg-secondary/60 text-foreground"
                    : "hover:bg-secondary/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{track.num}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone">
                      {track.frequency.split(" ")[0]}
                    </span>
                  </div>
                  <h5 className="font-serif-luxury text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    {track.title}
                  </h5>
                  <p className="text-xs text-muted-foreground line-clamp-1">{track.type}</p>
                </div>

                <div className="shrink-0 pt-1">
                  <div
                    className={`w-7 h-7 flex items-center justify-center border transition-all ${
                      isCurrent && isPlaying
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground"
                    }`}
                  >
                    {isCurrent && isPlaying ? (
                      <Pause className="h-3 w-3 fill-current" />
                    ) : (
                      <ArrowUpRight className="h-3 w-3" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
