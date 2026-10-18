import { useEffect, useRef, useState } from "react";
import { SonicPlayer } from "../SonicPlayer";

// Audio lab. Testimonials moved to the Proof section (Oct 2026); styles in brand-kit.css + sia.css.
export function MeetTheLab() {
  // Starts closed so the prerendered HTML and the hydrated page match.
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open]);

  return (
    <>
      <section className={`si si-lab${open ? " is-open" : ""}`} id="audio-lab">
        <div className="si-lab__left">
          <div>
            <p className="si-mono si-kicker">Listen</p>
            <h2 className="si-display si-lab__title">
              Press <span style={{ whiteSpace: "nowrap" }}><em>play</em>.</span>
            </h2>
            <p className="si-lab__sub">
              Four signature sounds, right here in your browser. Feel it before you read another
              word.
            </p>
            <p className="si-mono si-lab__note">Best with headphones</p>
            <button
              type="button"
              className="si-btn si-btn--onyx"
              id="si-lab-toggle"
              aria-expanded={open}
              aria-controls="atelier"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="si-ico" aria-hidden="true">
                {open ? "■" : "▶"}
              </span>
              <span className="si-lbl">{open ? "Close the Audio Lab" : "Enter the Audio Lab"}</span>
            </button>
          </div>
        </div>
        <div className="si-lab__right si-lab__right--photo">
          <img
            className="si-lab__photo"
            src="/images/chayenne-headphones.webp"
            alt="Chayenne Mallari wearing red headphones"
            loading="lazy"
          />
          <p className="si-mono si-lab__cap">Side A · 4 tracks · plays in your browser</p>
        </div>
      </section>
      {/* The original interactive Audio Lab, revealed by the button above. Mounted only while
        open, so closing the lab also stops any sound that is playing. */}
      <div
        id="atelier"
        ref={panelRef}
        hidden={!open}
        className="py-24 sm:py-32 border-b border-border"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">{open && <SonicPlayer />}</div>
      </div>
    </>
  );
}
