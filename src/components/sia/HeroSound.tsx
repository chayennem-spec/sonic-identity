import { useEffect, useRef, useState } from "react";
import { HERO_MEDIA, LINKS } from "../../lib/constants";

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
      a.currentTime = 0;
      a.play().catch(() => {});
    }
    setSounding(true);
    timer.current = window.setTimeout(() => setSounding(false), 9000);
  };

  return (
    <section id="top" className={`sia sia-hero${sounding ? " is-sounding" : ""}`}>
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
      {HERO_MEDIA.audioLogo && (
        <audio ref={audioRef} src={HERO_MEDIA.audioLogo} preload="auto" onEnded={stop} />
      )}

      <div className="sia-wrap sia-hero__inner">
        <p className="sia-mono sia-kicker">Sonic Identity Architect · Chayenne Mallari</p>
        <h1 className="sia-display">
          Be heard before you’re <em>seen</em>.
        </h1>
        <p className="sia-hero__sub">
          I compose the signature sound for founders, coaches and personal brands. One listen and
          they know it’s you, before they ever see your face.
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
            {sounding ? "Sound on" : "Turn your sound on"}
          </button>
          <a className="sia-btn sia-btn--ghost" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="sia-hero__foot sia-mono">
          <span>Recognized · Remembered · Felt</span>
          <span>Best with headphones</span>
        </div>
      </div>
    </section>
  );
}
