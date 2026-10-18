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
              Press <em>play</em>.
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
        <div className="si-lab__right">
          <img
            className="si-lab__groove"
            src="/textures/groove-tall.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="si-vinyl">
            <svg
              className="si-vinyl__svg"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="CM monogram record"
            >
              <defs>
                <linearGradient id="si-sheen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0" />
                  <stop offset=".44" stopColor="#fff" stopOpacity=".08" />
                  <stop offset=".5" stopColor="#fff" stopOpacity="0" />
                  <stop offset=".56" stopColor="#fff" stopOpacity=".05" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g className="si-spin">
                <circle cx="200" cy="200" r="198" fill="#0d0c0b" />
                <circle
                  cx="200"
                  cy="200"
                  r="78.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.60"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="80.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.80"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="83.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.62"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="85.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.50"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="88.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.78"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="91.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.70"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="93.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.38"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="96.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.74"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="98.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.76"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="101.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.43"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="104.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.67"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="106.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.79"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="109.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.54"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="111.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.58"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="114.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.80"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="117.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.64"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="119.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.47"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="122.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.77"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="124.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.72"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="127.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.36"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="130.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.72"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="132.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.77"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="135.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.46"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="137.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.65"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="140.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.80"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="143.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.56"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="145.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.55"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="148.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.80"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="150.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.66"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="153.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.44"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="156.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.76"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="158.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.73"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="161.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.37"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="163.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.71"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="166.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.78"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="169.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.48"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="171.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.63"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="174.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.80"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="176.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.59"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="179.4"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.53"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="182.0"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.79"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="184.6"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.68"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="187.2"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.42"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="189.8"
                  fill="none"
                  stroke="#4a433e"
                  strokeWidth=".7"
                  strokeOpacity="0.75"
                />
                <circle cx="200" cy="200" r="70" fill="#4A0B0E" />
                <circle cx="200" cy="200" r="63" fill="none" stroke="#B52E2C" strokeOpacity=".35" />
                <text
                  x="200"
                  y="218"
                  textAnchor="middle"
                  fontFamily="'Bodoni Moda', Didot, serif"
                  fontSize="54"
                  fill="#E8E3DA"
                >
                  CM
                </text>
                <circle cx="200" cy="236" r="3" fill="#E8E3DA" />
              </g>
              <circle cx="200" cy="200" r="198" fill="url(#si-sheen)" />
            </svg>
          </div>
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
