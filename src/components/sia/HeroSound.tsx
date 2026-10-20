import { useEffect, useRef, useState } from "react";
import { HERO_MEDIA, LINKS } from "../../lib/constants";
import { Waveform } from "./Waveform";

const REST_AT = 6.2;

/**
 * Opening scene: Chayenne puts on her headphones against plain black.
 * The video plays once on load (muted, as browsers require) and rests on its last frame.
 * "Turn your sound on" replays it with the sound rings and, once HERO_MEDIA.audioLogo is set,
 * the audio logo.
 */
export function HeroSound() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [sounding, setSounding] = useState(false);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const connectAnalyser = () => {
    const a = audioRef.current;
    if (!a || analyserRef.current) {
      audioCtxRef.current?.resume().catch(() => {});
      return;
    }
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const src = ctx.createMediaElementSource(a);
      const an = ctx.createAnalyser();
      an.fftSize = 1024;
      src.connect(an);
      an.connect(ctx.destination);
      audioCtxRef.current = ctx;
      analyserRef.current = an;
    } catch {
      /* the song still plays; the lines just use their resting motion */
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    // Wait for the opening curtain to lift on a first visit, so she's seen putting the headphones on.
    let seen = false;
    try {
      seen = sessionStorage.getItem("sia-intro") === "1";
    } catch {
      /* ignore */
    }
    const start = window.setTimeout(() => v.play().catch(() => {}), seen ? 0 : 3300);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    // If another player on the page starts (the full song in Listen), stop the hero clip.
    const onOther = (e: Event) => {
      if (e.target instanceof HTMLAudioElement && e.target !== audioRef.current) {
        audioRef.current?.pause();
        window.clearTimeout(timer.current);
        setSounding(false);
      }
    };
    document.addEventListener("play", onOther, true);
    return () => document.removeEventListener("play", onOther, true);
  }, []);

  const stop = () => {
    window.clearTimeout(timer.current);
    audioRef.current?.pause();
    setSounding(false);
  };

  const turnOn = () => {
    if (sounding) return stop();
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    const a = audioRef.current;
    if (a) {
      connectAnalyser();
      a.currentTime = 0;
      a.play().catch(() => {});
    }
    setSounding(true);
    // On phones the photo (and its frequency bars) sits above the button: bring it into view.
    if (window.matchMedia("(max-width: 860px)").matches && window.scrollY > 80) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // With the real clip, the sound stops when the clip ends (onEnded); otherwise a short visual moment.
    if (!a) timer.current = window.setTimeout(() => setSounding(false), 9000);
  };

  return (
    <section id="top" className={`sia sia-hero${sounding ? " is-sounding" : ""}`}>
      {HERO_MEDIA.image ? (
        <div className="sia-hero__media sia-hero__media--still" aria-hidden="true">
          <figure className="sia-hero__figure sia-hero__figure--photo" data-drift="0.12">
            <img src={HERO_MEDIA.image} alt="Chayenne Mallari in a black leather jacket and sunglasses" />
            {/* Frequency bars sit between the room and Chayenne: photo, then waveform, then her cut-out. */}
            <Waveform active={sounding} analyser={analyserRef} className="sia-wave--behind" />
            {HERO_MEDIA.cutout && <img className="sia-hero__cutout" src={HERO_MEDIA.cutout} alt="" />}
          </figure>
          <div className="sia-hero__shade" />
        </div>
      ) : (
        <>
          <div className="sia-hero__media" aria-hidden="true">
            <video
              ref={videoRef}
              src={HERO_MEDIA.video}
              poster={HERO_MEDIA.poster}
              muted
              playsInline
              preload="auto"
              onTimeUpdate={(e) => {
                // Rest on the 6.2s frame (headphones on, rings starting) instead of the tight close-up ending.
                if (e.currentTarget.currentTime >= REST_AT) e.currentTarget.pause();
              }}
            />
            <div className="sia-hero__shade" />
          </div>
          <div className="sia-rings" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </>
      )}
      {!HERO_MEDIA.image && <Waveform active={sounding} analyser={analyserRef} className="sia-wave--hero" />}
      {HERO_MEDIA.audioLogo && (
        <audio ref={audioRef} src={HERO_MEDIA.audioLogo} preload="auto" onEnded={stop} />
      )}

      <div className="sia-filmedge" aria-hidden="true">
        <i>Rec</i>
        <span>
          Reel 01 · <b>SIA</b>
        </span>
        <span>35mm · 24 fps</span>
      </div>

      <div className="sia-wrap sia-hero__inner">
        <p className="sia-mono sia-kicker">Sonic Identity Architect · Chayenne Mallari</p>
        <h1 className="sia-display">
          Be heard before you’re <span className="sia-nw">even <em>seen</em>.</span>
        </h1>
        <p className="sia-hero__tag">Become recognized, remembered and felt.</p>
        <p className="sia-hero__sub">
          You’ve curated every photo and polished every caption. But your sound? It’s whatever was
          trending this morning. I make signature songs for female founders, so the second your audio
          plays, people know it’s you.
        </p>
        <div className="sia-hero__ctas">
          <button
            type="button"
            className={`sia-btn sia-btn--red sia-sound-btn${sounding ? " is-on" : ""}`}
            onClick={turnOn}
            aria-pressed={sounding}
          >
            <span className="sia-eq" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            {sounding ? "Pause" : "Turn your sound on"}
          </button>
          <a className="sia-btn sia-btn--ghost" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="sia-final__alt">
          Not sure yet?{" "}
          <a href={LINKS.audit} target="_blank" rel="noreferrer">
            Take the free three-minute audit
          </a>
          .
        </p>
        <div className="sia-hero__foot sia-mono">
          <span>Signature sound for female founders</span>
          <span>Best with headphones</span>
        </div>
      </div>
    </section>
  );
}
