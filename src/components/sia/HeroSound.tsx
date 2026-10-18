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
    // On phones the photo (and its frequency bars) sits above the button: bring it into view.
    if (window.matchMedia("(max-width: 860px)").matches && window.scrollY > 80) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    timer.current = window.setTimeout(() => setSounding(false), 9000);
  };

  return (
    <section id="top" className={`sia sia-hero${sounding ? " is-sounding" : ""}`}>
      {HERO_MEDIA.image ? (
        <div className="sia-hero__media sia-hero__media--still" aria-hidden="true">
          <figure className="sia-hero__figure sia-hero__figure--photo">
            <img src={HERO_MEDIA.image} alt="Chayenne Mallari in a black leather jacket and sunglasses" />
            {/* Frequency bars sit between the room and Chayenne: photo, then waveform, then her cut-out. */}
            <Waveform active={sounding} className="sia-wave--behind" />
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
      {!HERO_MEDIA.image && <Waveform active={sounding} className="sia-wave--hero" />}
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
          Be heard before you’re <span className="sia-nw"><em>seen</em>.</span>
        </h1>
        <p className="sia-hero__sub">
          Your photos are styled. Your brand is polished. And your sound? A trending clip half of
          Instagram used before breakfast. I make signature songs for female founders, so the room
          knows it’s you before you say a word.
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
