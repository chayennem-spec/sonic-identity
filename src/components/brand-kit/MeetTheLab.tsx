import { LINKS } from "../../lib/constants";

// Listen section. The old synthesizer "Audio Lab" (SonicPlayer) was retired in Oct 2026: it showed
// sample brands that weren't real clients. Real client songs will be added here once approved.
export function MeetTheLab() {
  return (
    <section className="si si-lab" id="audio-lab">
      <div className="si-lab__left">
        <div>
          <p className="si-mono si-kicker">Listen</p>
          <h2 className="si-display si-lab__title">
            Press <span style={{ whiteSpace: "nowrap" }}><em>play</em>.</span>
          </h2>
          <p className="si-lab__sub">
            Reading about sound is like reading about perfume. The Blueprint gives you three sound
            directions for your brand, each with a first sketch you can actually press play on.
          </p>
          <p className="si-mono si-lab__note">Best with headphones</p>
          <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Hear your brand <span className="sia-arrow" aria-hidden="true">↗</span>
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
        <p className="si-mono si-lab__cap">Side A · Your sound, first listen</p>
      </div>
    </section>
  );
}
