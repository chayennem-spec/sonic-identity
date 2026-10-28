import { useEffect, useRef, useState } from "react";
import { HERO_MEDIA, LINKS } from "../../lib/constants";
import { Waveform } from "../sia/Waveform";

const fmt = (t: number) => {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

/** Full-song player: Chayenne's own signature sound. */
function SongPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    // Metadata can load before hydration, so read the duration once on mount too.
    const a = ref.current;
    if (a && a.readyState >= 1) setDur(a.duration);
  }, []);

  useEffect(() => {
    // Pause this player if the hero clip starts, and vice versa.
    const onOther = (e: Event) => {
      if (e.target !== ref.current) ref.current?.pause();
    };
    document.addEventListener("play", onOther, true);
    return () => document.removeEventListener("play", onOther, true);
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = ref.current;
    if (!a || !dur) return;
    const r = e.currentTarget.getBoundingClientRect();
    a.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * dur;
  };

  return (
    <div className={`sia-song${playing ? " is-playing" : ""}`}>
      <audio
        ref={ref}
        src={HERO_MEDIA.fullSong}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        onDurationChange={(e) => setDur(e.currentTarget.duration)}
      />
      <button type="button" className="sia-song__btn" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
        {playing ? (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M7 4.5v15l13-7.5z" /></svg>
        )}
      </button>
      <div className="sia-song__body">
        <div className="sia-song__meta">
          <span className="sia-song__title">Instant Recognition</span>
          <span className="sia-mono sia-song__time">
            {fmt(time)} / {fmt(dur)}
          </span>
        </div>
        <div
          className="sia-song__bar"
          onClick={seek}
          role="slider"
          tabIndex={0}
          aria-label="Song position"
          aria-valuemin={0}
          aria-valuemax={Math.round(dur || 0)}
          aria-valuenow={Math.round(time)}
          onKeyDown={(e) => {
            const a = ref.current;
            if (!a || !dur) return;
            if (e.key === "ArrowRight") a.currentTime = Math.min(dur, a.currentTime + 5);
            if (e.key === "ArrowLeft") a.currentTime = Math.max(0, a.currentTime - 5);
          }}
        >
          <i style={{ width: dur ? `${(time / dur) * 100}%` : "0%" }} />
        </div>
        <Waveform active={playing} className="sia-wave--song" />
      </div>
    </div>
  );
}

// Listen section. The old synthesizer "Audio Lab" (SonicPlayer) was retired in Oct 2026: it showed
// sample brands that weren't real clients.
export function MeetTheLab() {
  return (
    <section className="si si-lab" id="audio-lab">
      <div className="si-lab__left">
        <div>
          <p className="si-mono si-kicker">Listen</p>
          <h2 className="si-display si-lab__title">
            <span style={{ whiteSpace: "nowrap" }}>Press <em>play</em>.</span>
          </h2>
          <p className="si-lab__sub">
            This is my own signature sound. Now picture yours playing the second your launch video
            opens, before anyone sees your face.
          </p>
          {HERO_MEDIA.fullSong && <SongPlayer />}
          <p className="si-mono si-lab__note">Best with headphones</p>
          <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Hear yours tonight: $297 Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="si-lab__right si-lab__right--photo">
        <img
          className="si-lab__photo"
          src="/images/chayenne-headphones.webp"
          alt="Chayenne Mallari wearing red headphones"
          loading="lazy"
        />
        <p className="si-mono si-lab__cap">Side A · Instant Recognition</p>
      </div>
    </section>
  );
}
