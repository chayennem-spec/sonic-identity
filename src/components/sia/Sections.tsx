import { useEffect, useRef, useState } from "react";
import { ASSETS, LINKS, METHOD_LAYOUT } from "../../lib/constants";

// Homepage sections, Oct 2026 redesign. Copy written for Chayenne; edit freely.

const TICKER = [
  "Your launch video",
  "Your walk-on",
  "Your podcast open",
  "Your ads",
  "Your waiting room",
  "Your reels",
  "One song, everywhere",
];

export function Ticker() {
  const items = [...TICKER, ...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="sia sia-ticker" aria-hidden="true">
      <div className="sia-ticker__track">
        {items.map((t, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span>{t}</span>
            <i>●</i>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TheGap() {
  return (
    <section className="sia sia-gap" id="the-gap">
      <div className="sia-wrap sia-gap__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">The gap</p>
          <h2 className="sia-display">
            Everything about you is custom. Except <span className="sia-nw">your <em>sound</em>.</span>
          </h2>
        </div>
        <div className="sia-gap__side sia-reveal">
          <div className="sia-body">
            <p className="sia-lead">You hired the photographer, booked the stylist, and spent a full week choosing between two shades of beige. (Bone won. Obviously.)</p>
            <p>
              You don’t do off the rack, not ever, so be honest… how did it feel when the launch you spent
              months on opened with the same trending sound as every other masterclass in your niche? Mm-hmm, that feeling is exactly what we’re here to fix.
            </p>
            <p>
              Here’s the part nobody tells you: a borrowed song makes people remember <strong>someone else.</strong> Sound is the
              part of your brand that follows people home. Right now, it’s following them home wearing
              another artist’s name.
            </p>
            <p>
              You spent thousands so your brand doesn’t LOOK like everyone else’s…{" "}
              <strong>so why does it sound like everyone else’s?</strong>
            </p>
          </div>
          <p className="sia-hand">Make it yours.</p>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  {
    l: "R",
    t: "Recognized",
    d: "You know your favorite show from its first two notes, before the title even shows up. That wasn’t luck. They played those two notes on everything, for years, until your brain filed them under their name.",
  },
  {
    l: "R",
    t: "Remembered",
    d: "When the same song opens your reels, your podcast and your walk-on, people start to connect the dots. Swap in a new trending track every week and they never get the chance, because commitment issues aren’t cute on a brand.",
  },
  {
    l: "F",
    t: "Felt",
    d: "Music sets the mood before you’ve said a word. It’s the whole reason your getting-ready playlist exists. So choose the mood on purpose: calm, powerful, or a little bit obsessed.",
  },
];

export function WhySound() {
  return (
    <section className="sia sia-sound sia-rule" id="why-sound">
      <div className="sia-wrap">
        <div className="sia-sound__head sia-reveal">
          <div>
            <p className="sia-mono sia-kicker">Why sound works</p>
            <h2 className="sia-display">
              Your visuals get you noticed. Your sound gets you{" "}
              <span className="sia-nw"><em>remembered</em>.</span>
            </h2>
          </div>
          <p>
            Your launch video opens, your face hasn’t even loaded yet… and they already know it’s you.
            The lights drop at your event, your walk-on starts, and the room knows you’re coming before
            you reach the mic. It isn’t magic. It’s repetition, done on purpose: the same sound, so many times,
            that people can’t hear it without thinking of you.
          </p>
        </div>
        <div className="sia-sound__grid sia-sound__grid--three sia-reveal">
          {WHY.map((s) => (
            <article className="sia-letter" key={s.t}>
              <span className="sia-letter__l" aria-hidden="true">
                {s.l}
              </span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOR_HER = [
  "Built the business, hired the team, and gets booked for the stage (and the podcast, and the panel).",
  "Wears the tailored piece, not the trending one, and wants her brand to do the same.",
  "Is done with courses and homework, and has zero interest in logging into one more thing.",
  "Walks into rooms where people already know her name. Now she wants them to know her sound.",
];

export function ForHer() {
  return (
    <section className="sia sia-forher sia-rule" id="for-her">
      <div className="sia-wrap sia-forher__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">This is for the female founder who...</p>
          <h2 className="sia-display">
            You built the brand. Now let them <span className="sia-nw"><em>hear</em> it.</span>
          </h2>
        </div>
        <div className="sia-reveal">
          <ol className="sia-forher__list">
            {FOR_HER.map((line, i) => (
              <li key={line}>
                <span className="sia-mono" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </li>
            ))}
          </ol>
          <p className="sia-hand">Sounds like you, doesn’t it? Let’s find out what your brand should sound like.</p>
        </div>
      </div>
    </section>
  );
}


const ON_SET = [
  { src: "/images/chayenne-editorial.webp", alt: "Chayenne Mallari in black sunglasses and a leather jacket", w: 1233, h: 1275 },
  { src: "/images/chayenne-chrome-visor.webp", alt: "Chayenne Mallari in a chrome visor and red lip, black leather jacket", w: 941, h: 1672 },
  { src: "/images/chayenne-headphones.webp", alt: "Chayenne Mallari in red headphones and black sunglasses", w: 1233, h: 1275 },
  { src: "/images/chayenne-editorial-bw.webp", alt: "Chayenne Mallari in black and white, sunglasses and leather", w: 1233, h: 1275 },
];

/** Editorial film strip that slides sideways as you scroll (still for reduced motion). */
export function OnSet() {
  return (
    <section className="sia sia-onset sia-rule" id="on-set" aria-label="Chayenne Mallari, on set">
      <div className="sia-wrap sia-onset__head sia-reveal">
        <p className="sia-mono sia-kicker">On set</p>
        <h2 className="sia-display">
          The woman behind <span className="sia-nw">the <em>sound</em>.</span>
        </h2>
      </div>
      <div className="sia-onset__pin" data-pin>
      <div className="sia-onset__panel">
      <div className="sia-onset__viewport">
        <div className="sia-onset__track" data-pinx>
          {ON_SET.map((p, i) => (
            <figure className="sia-onset__frame" key={p.src} style={{ aspectRatio: `${p.w} / ${p.h}` }}>
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
              <figcaption className="sia-mono" aria-hidden="true">
                SIA · {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

const SOUND = [
  { l: "01", t: "Style", d: "The genre, era and vibe that fit who you actually are, not whatever’s on someone’s For You page." },
  { l: "02", t: "Outcome", d: "What people feel the second it plays: calm, powerful, wanted… or just “wait, who is that?”" },
  { l: "03", t: "Undertone", d: "The texture underneath, the part people feel but couldn’t name. Is it soft and expensive, or a little dangerous?" },
  { l: "04", t: "Narrative", d: "The story your sound tells, even when there isn’t a single word in it. And yes, even an instrumental can have a point of view." },
  { l: "05", t: "Delivery", d: "Tempo, voice, mix and length, made for wherever you show up: reels, podcasts, stages." },
];

export function Method() {
  return (
    <section className="sia sia-sound sia-rule" id="method">
      <div className="sia-wrap">
        <div className="sia-sound__head sia-reveal">
          <div>
            <p className="sia-mono sia-kicker">The method · The S.O.U.N.D. Framework</p>
            <h2 className="sia-display">
              How a signature sound <span className="sia-nw">is <em>built</em>.</span>
            </h2>
          </div>
          <p>
            You don’t need to know what a minor key is. That’s my job. Your Sonic Archetype tells me
            who you are, and I turn it into your sound through my S.O.U.N.D. Framework.
            You talk about your brand, I take it from there. Nothing gets pulled from a stock library,
            and nothing gets borrowed from someone else’s brand.
          </p>
        </div>
        <div className="sia-sound__grid sia-reveal">
          {SOUND.map((s) => (
            <article className="sia-letter" key={s.l}>
              <span className="sia-letter__l" aria-hidden="true">
                {s.l}
              </span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodSection() {
  return METHOD_LAYOUT === "reel" ? <MethodReel /> : <Method />;
}

const LETTERS = ["S", "O", "U", "N", "D"];

/** The S.O.U.N.D. Framework as a sideways film strip, pinned while you scroll. */
export function MethodReel() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;
    let raf = 0;
    const frame = () => {
      raf = 0;
      const box = pin.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = box.height - vh;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -box.top / scrollable)) : 0;
      const viewport = track.parentElement?.clientWidth || window.innerWidth;
      const travel = Math.max(0, track.scrollWidth - viewport);
      track.style.transform = `translate3d(${(-p * travel).toFixed(1)}px,0,0)`;
      // Which frame sits in the middle of the screen?
      const mid = viewport / 2;
      let idx = -1;
      track.querySelectorAll<HTMLElement>("[data-frame]").forEach((f, i) => {
        const r = f.getBoundingClientRect();
        if (r.left < mid + r.width * 0.2) idx = i;
      });
      setActive(idx);
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const shown = Math.min(5, Math.max(0, active + 1));
  return (
    <section className="sia sia-reel sia-rule" id="method" aria-label="The S.O.U.N.D. Framework">
      <div className="sia-wrap sia-reel__intro">
        <div className="sia-sound__head">
          <div>
            <p className="sia-mono sia-kicker">The method · The S.O.U.N.D. Framework</p>
            <h2 className="sia-display">
              How a signature sound <span className="sia-nw">is <em>built</em>.</span>
            </h2>
          </div>
          <p>
            You don’t need to know what a minor key is. That’s my job. Your Sonic Archetype tells me
            who you are, and I turn it into your sound through my S.O.U.N.D. Framework.
            You talk about your brand, I take it from there. Nothing gets pulled from a stock library,
            and nothing gets borrowed from someone else’s brand.
          </p>
        </div>
        <p className="sia-mono sia-reel__hint" aria-hidden="true">
          Keep scrolling <span className="sia-reel__nudge" />
        </p>
      </div>

      <div className="sia-reel__pin" ref={pinRef}>
        <div className="sia-reel__panel">
          <div className="sia-reel__sprockets" aria-hidden="true" />
          <div className="sia-reel__viewport">
            <div className="sia-reel__track" ref={trackRef}>
              {SOUND.map((s, i) => (
                <article
                  key={s.t}
                  data-frame
                  className={`sia-reel__frame${i <= active ? " is-lit" : ""}${i === 4 ? " is-last" : ""}`}
                >
                  <div className="sia-reel__top sia-mono">
                    <span>SIA · Reel 01</span>
                    <span className="sia-reel__count">{s.l} / 05</span>
                  </div>
                  <span className="sia-reel__letter" aria-hidden="true">{LETTERS[i]}</span>
                  <h3 className="sia-reel__word">{s.t}</h3>
                  <p className="sia-reel__line">{s.d}</p>
                </article>
              ))}
              <div className="sia-reel__end" data-frame>
                <p className="sia-reel__mark">Yours<span>.</span></p>
                <p className="sia-reel__script">Built letter by letter, around you and your brand.</p>
                <p className="sia-reel__closer">Everything I make starts with your archetype, not a stock library.</p>
              </div>
            </div>
          </div>
          <div className="sia-reel__sprockets" aria-hidden="true" />
          <div className="sia-reel__rail" aria-hidden="true">
            <span className="sia-reel__letters sia-mono">
              {LETTERS.map((l, i) => (
                <b key={l} className={i < shown ? "is-on" : ""}>{l}</b>
              ))}
            </span>
            <span className="sia-reel__bar"><i style={{ transform: `scaleX(${progress.toFixed(3)})` }} /></span>
            <span className="sia-reel__frames sia-mono">{String(Math.max(1, shown)).padStart(2, "0")} / 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const MONDAY = [
  { tag: "Ads", who: "Your ads manager", need: "needs a cleared 15-second cut by noon, and trending songs usually aren’t cleared for paid ads." },
  { tag: "Stage", who: "Your event producer", need: "needs a walk-on that isn’t the one the last speaker used." },
  { tag: "Podcast", who: "Your podcast editor", need: "needs an intro that sounds like you and won’t get flagged." },
];

export function Rights() {
  return (
    <section className="sia sia-rights sia-rule" id="usage-rights">
      <div className="sia-wrap">
        <div className="sia-rights__head sia-reveal">
          <p className="sia-mono sia-kicker">The fine print, out loud</p>
          <h2 className="sia-display">
            Can we use it? Does it sound <span className="sia-nw">like <em>us</em>?</span>
          </h2>
          <p className="sia-rights__lead">
            Your team asks both of these every week, usually with a little panic. It sounds like this:
          </p>
        </div>
        <ol className="sia-rights__grid sia-reveal">
          {MONDAY.map((m, i) => (
            <li key={m.who}>
              <span className="sia-mono">
                0{i + 1} · {m.tag}
              </span>
              <p>
                <strong>{m.who}</strong> {m.need}
              </p>
            </li>
          ))}
        </ol>
        <div className="sia-rights__close sia-reveal">
          <p>
            A trending track can’t say yes to either one. A song made for your brand says yes to both: it comes with{" "}
            <strong>brand-use rights in writing, licensed to your brand alone, with no expiry and no renewals.</strong>
          </p>
          <p className="sia-hand">Yes and yes.</p>
        </div>

        <div className="sia-ig sia-reveal">
          <div className="sia-ig__copy">
            <p className="sia-mono sia-kicker">Look at the corner of your last reel</p>
            <h3>Whose name is on your audio?</h3>
            <p>
              That little line under your handle. If you used a trending song, it’s someone else’s
              name, even on the reel you paid an editor to cut. Someone loves it, taps
              the sound… and ends up on a page full of strangers using the same song. Oof… you just sent
              your new fan to someone else’s party.
            </p>
            <p>
              You’d never let another woman’s logo sit on your launch. With a sound made for your brand,
              it says <strong>your</strong> name: “Original audio”
              with your handle, in the corner of every reel. Tap it and you land on your audio page,
              with your name at the top.
            </p>
          </div>
          <div className="sia-ig__chips" aria-hidden="true">
            <div className="sia-chip sia-chip--them">
              <span className="sia-chip__note">♫</span>
              <span>
                <b>Someone Else</b> · That Song Everyone Used
              </span>
            </div>
            <p className="sia-mono sia-ig__vs">Now</p>
            <div className="sia-chip sia-chip--you">
              <span className="sia-chip__note">♫</span>
              <span>
                <b>@yourbrand</b> · Original audio
              </span>
            </div>
            <div className="sia-sticker">
              <span className="sia-sticker__bars">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>
                <b>Original audio</b>
                <br />
                @yourbrand · your reels
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Offers, with pricing psychology built in (no prices on the site; they live on Eden):
 * high-to-low order, an "If it were mine..." tag on the Atelier, a "because" line and a short
 * what's-included list per offer and the First Listen Promise. No deadlines or price raises.
 */
const OFFERS = [
  {
    featured: true,
    tag: "If it were mine...",
    label: "",
    name: "The Instant Recognition Atelier",
    line: "One intake, one live read, and then I disappear into the studio.",
    desc: "The photoshoots, the website, the designer who finally got your logo right. You’ve spent thousands on how your brand looks. The Atelier is how it sounds. It’s a full brand soundtrack, so your reels, your launches, your podcast and your stage finally sound like the same woman. It starts with one intake and your Live Brand Read, a private 30-minute call where I read your brand with you, live. Then I disappear into the studio, and we meet again for your First Listen call, because I want to see your face when you hear it. What I build is made for your brand, and licensed to no one else.",
    includes: [
      "4 original tracks, spent your way: offers, anthem, walk-on, reels",
      "Two private 30-minute calls with me: your Live Brand Read and your First Listen",
      "Two refinement rounds, plus a private Telegram line to me for questions and updates",
      "A sound guide, so your team never guesses",
      "Brand-use rights in writing, licensed to your brand alone",
      "On Spotify and in the music libraries, if you want it",
      "First track in about 7 days, your full sound world in about 4 to 6 weeks",
    ],
    because: "Your brand gets one sound people recognize everywhere, and it’s never licensed to anyone else.",
    plan: "$8,000 · or 3 payments of $2,800",
    value: {
      title: "Instant Recognition Atelier",
      rows: [
        ["4 custom tracks, spend them your way", "$10,000 value"],
        ["Sonic Blueprint: your archetype and full sound direction", "$297 value"],
        ["The full sound family: every version and cut of all 4 tracks", "Included"],
        ["Live Brand Read: a private 30-minute call with me", "Included"],
        ["First Listen call: a private 30-minute call with me", "Included"],
        ["The First Listen Promise", "Included"],
        ["Brand-use rights in writing, licensed to your brand alone", "Included"],
      ],
      oneByOne: "$10,297",
      yoursLabel: "Your Atelier",
      yours: "$8,000",
    },
    cta: "Apply for the Atelier",
    href: LINKS.apply,
  },
  {
    tag: "Start with the song",
    label: "",
    name: "The Instant Recognition Anthem",
    line: "One signature song that says your name before you do",
    desc: "Want to start with one song? That’s a smart move, and this is it. It’s built from your story and your archetype, so when it plays under your walk-on, your launch video or your podcast open, people know it’s you before you say a word.",
    includes: [
      "One signature song",
      "30- and 15-second cuts for reels, ads and your podcast",
      "A private 20-minute First Listen call with me",
      "One refinement round",
      "First Listen Promise: not her? I rebuild it from a new direction",
      "First listen in about 7 to 10 days, finished in 2 to 4 weeks",
      "Brand-use rights in writing, licensed to your brand alone",
      "On Spotify and in the music libraries, if you want it (with a bonus ad song)",
      "Its full price comes off the Atelier within 30 days of delivery",
    ],
    because: "It’s your brand set to music, and it’ll never be licensed to another brand.",
    plan: "$2,500 · or 2 payments of $1,300",
    value: {
      title: "Instant Recognition Anthem",
      rows: [
        ["Sonic Blueprint: your archetype and sound direction", "$297 value"],
        ["Your custom anthem, full song, with 30- and 15-second cuts", "$2,500 value"],
        ["Instrumental cuts for your podcast and content", "Included"],
        ["First Listen call: a private 20-minute call with me", "Included"],
        ["Brand-use rights in writing, licensed to your brand alone", "Included"],
      ],
      oneByOne: "$2,797",
      yoursLabel: "Your Anthem",
      yours: "$2,500",
    },
    cta: "Get your Anthem",
    href: LINKS.anthem,
  },
  {
    tag: "Start here",
    label: "",
    name: "The Sonic Blueprint",
    line: "Hear your brand before you invest",
    desc: "Want to hear it yourself first? That’s totally fair, and honestly, I respect a woman with a vision. The Blueprint looks at your brand and the music you actually love, gives you your archetype and three directions for your sound, and you’ll hear the first sketches that same night.",
    includes: [
      "Your Sonic Archetype",
      "Three sound directions, built from the music you actually love",
      "Ready-to-paste prompts to hear a first sketch of each, the same night",
      "Its full price comes off the Atelier within 30 days",
    ],
    because: "You do it on your own time, and the full $297 counts toward the Atelier if you decide to go all in.",
    plan: "$297 · same day",
    cta: "Start the Blueprint",
    href: LINKS.blueprint,
  },
];

export function Offers() {
  return (
    <section className="sia sia-offers sia-rule" id="offers">
      <div className="sia-wrap">
        <div className="sia-offers__head sia-reveal">
          <p className="sia-mono sia-kicker">Work with me</p>
          <h2 className="sia-display">
            Choose your <span className="sia-nw">way <em>in</em>.</span>
          </h2>
          <p className="sia-offers__lead">
            There are three ways in, so pick the one that matches how much you want off your plate (spoiler: the answer is usually all of it).
          </p>
        </div>
        <div className="sia-offers__grid">
          {OFFERS.map((o, i) => (
            <article className={`sia-offer${o.featured ? " sia-offer--featured" : ""} sia-reveal`} key={o.name}>
              <div className="sia-offer__top sia-mono">
                <span className={`sia-offer__tag${o.featured ? "" : " sia-offer__tag--quiet"} sia-mono`}>{o.tag}</span>
              </div>
              <h3>{o.name}</h3>
              <p className="sia-mono sia-offer__line">{o.line}</p>
              <p className="sia-offer__desc">{o.desc}</p>
              <ul className="sia-offer__list">
                {o.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="sia-offer__because">
                <b>Why it’s worth it:</b> {o.because}
              </p>
              {o.value && (
                <div className="sia-offer__value">
                  <p className="sia-mono sia-offer__value-title">The value</p>
                  <ul>
                    {o.value.rows.map(([label, amount]) => (
                      <li key={label}>
                        <span>{label}</span>
                        <span className="sia-mono">{amount}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="sia-offer__value-total">
                    <span>Bought one by one</span>
                    <span className="sia-mono">{o.value.oneByOne}</span>
                  </p>
                  <p className="sia-offer__value-yours">
                    <span>{o.value.yoursLabel}</span>
                    <span>{o.value.yours}</span>
                  </p>
                  <p className="sia-offer__value-terms">
                    Full terms on the <a href="/terms">Terms of Purchase</a> page.
                  </p>
                </div>
              )}
              {o.plan && <p className="sia-mono sia-offer__plan">{o.plan}</p>}
              <a
                className={`sia-btn ${o.featured ? "sia-btn--red" : "sia-btn--ghost"}`}
                href={o.href}
                target="_blank"
                rel="noreferrer"
              >
                {o.cta} <span className="sia-arrow" aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <div className="sia-promise sia-reveal">
          <div className="sia-promise__seal" aria-hidden="true">
            <span>
              First
              <br />
              <b>Listen</b>
              Promise
            </span>
          </div>
          <div>
            <h3>Hear it before you’re <span className="sia-nw">all in.</span></h3>
            <p>
              In the Atelier, you hear your first track before I make the other three. If, after we
              refine it, it just doesn’t feel like your brand, email me within 7 days of hearing the
              new version and we stop there. No hard feelings.
              You pay $2,500 for that first stage, the price of one Anthem, and the rest is refunded or cancelled.
              With the Anthem, if your first listen doesn’t feel like your brand, tell me within 5 business
              days and I rebuild it from a fresh direction, once, on me. Full details are in the{" "}
              <a href="/terms">Terms of Purchase</a>.
            </p>
          </div>
          <p className="sia-hand">Hear it first.</p>
        </div>
        <p className="sia-offers__apply-note sia-reveal">
          The Atelier is by application, but you can start the Anthem or the Blueprint today, with no waiting.
        </p>
      </div>
    </section>
  );
}

/**
 * Heard in the wild: client songs out in the world. Add a link and its button appears;
 * leave it empty and the button stays hidden.
 */
const HEARD: {
  song: string;
  who: string;
  note: string;
  links: { label: string; href: string }[];
  /** Optional Spotify track id: shows Spotify's own player on the card. */
  spotify?: string;
  /** Optional client photo, shown at the top of the card. */
  photo?: string;
  /** Optional line shown under the buttons. */
  after?: string;
  /** Optional words from the client, one quote per entry. */
  quote?: string[];
}[] = [
  // Parked for later (put back when ready):
  // {
  //   song: "Soft Girl Millions",
  //   who: "Leanne Lopez-Mosley",
  //   note: "Made for Leanne’s world and her Soft Girl Millions women, as a gift. She uses it and credits me publicly.",
  //   links: [{ label: "Watch it in her world", href: "https://www.instagram.com/reel/Db6DWFxtdi9/" }],
  // },
  {
    song: "Her mastermind song",
    who: "Kiki Neag",
    photo: "/images/kiki-neag.jpg",
    quote: [
      "It gave me chills. I was very blown away by how much the song really captured the essence of my brand and of my mastermind, from the feeling to the tone to the music. It was just perfect.",
      "The song literally sticks in their head, and it’s another way to subconsciously, in a way, be with your clients and in their mind.",
    ],
    note: "Kiki is a subconscious coach. I made her song for her brand and her mastermind, and she plays it in her stories whenever she promotes it.",
    links: [{ label: "Hear it in her world", href: "https://www.instagram.com/p/DcO7446DMFu/" }],
  },
  {
    song: "Her launch songs",
    who: "Desiree Lakeisha",
    quote: [
      "I've been crying all morning about it. In a beautiful way… Thank you for feeling my movement and my art, and being moved so deeply.",
      "I am blown away, and also not surprised at all. I will be using these songs once I visually launch.",
    ],
    note: "Desiree is an artistic director and creative visionary. I made her two songs for two of her offers, each one built around her movement and her art.",
    links: [
      { label: "Hear song one", href: "https://www.instagram.com/p/DXuZBqZER4N/" },
      { label: "Hear song two", href: "https://www.instagram.com/p/DYKeGXlERls/" },
    ],
  },
  {
    song: "The Money Medium",
    who: "Lou Clarke",
    quote: [
      "When I first heard the sound you created for my brand, it literally gave me tingles. It was like one massive goosebump, like my entire vibration was catapulted into a new frequency, and it's almost like I could feel it reprogramming my DNA. It made me realize I wasn't giving myself enough credit. Having my own sound for myself and my brand brought me into a place of ownership of who I am, what I do and who I support.",
      "I'm the only one walking into my keynote with my music. Everybody else is walking into Carrie Underwood or Britney Spears. I'm walking into my song. People pull out their phones with Shazam, trying to figure out what song it is.",
      "I have women who've been afraid to look at their money now looking at their money with literally me in their ears. One of my private clients plays my four songs every single morning on her drive to her office.",
      "If you're spending that kind of money to create a visual brand, why are we not also doing an audio brand? You're not just someone on social media anymore. You're someone on Spotify. You're someone who's in their ears.",
    ],
    note: "Lou works in the finance industry. I made her brand's songs to sound the way her brand feels, and they live on Spotify, where her clients play them before their money dates.",
    links: [{ label: "Listen on Spotify", href: "https://open.spotify.com/track/1F6C3FXTLZZCQdLEDrK4Cn" }],
    spotify: "1F6C3FXTLZZCQdLEDrK4Cn",
  },
];

export function Proof() {
  return (
    <section className="sia sia-proof sia-rule" id="heard">
      <div className="sia-wrap">
        <p className="sia-mono sia-kicker sia-reveal">Heard in the wild</p>
        <h2 className="sia-display sia-reveal">
          Signature sounds that embody <span className="sia-nw"><em>their brand identity</em>.</span>
        </h2>
        <div className="sia-heard__grid">
          {HEARD.map((h) => (
            <figure className="sia-heard sia-reveal" key={h.song}>
              {h.photo && (
                <img className="sia-heard__photo" src={h.photo} alt={h.who} loading="lazy" />
              )}
              <span className="sia-heard__eq" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <p className="sia-heard__song">{h.song}</p>
              <cite className="sia-mono">For {h.who}</cite>
              {h.quote?.map((q) => (
                <blockquote className="sia-heard__quote" key={q}>“{q}”</blockquote>
              ))}
              <p className="sia-heard__note">{h.note}</p>
              {h.spotify && (
                <iframe
                  className="sia-heard__player"
                  title={`${h.song} on Spotify`}
                  src={`https://open.spotify.com/embed/track/${h.spotify}?utm_source=generator&theme=0`}
                  height="152"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              )}
              <div className="sia-heard__links">
                {h.links
                  .filter((l) => l.href)
                  .map((l) => (
                    <a key={l.label} className="sia-btn sia-btn--ghost" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <span className="sia-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
              </div>
              {h.after && <p className="sia-heard__after">{h.after}</p>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="sia sia-about sia-rule" id="about">
      <div className="sia-wrap sia-about__grid">
        <figure className="sia-about__photo sia-reveal" data-drift="0.08">
          <img src={ASSETS.portraitBlack} alt="Chayenne Mallari" loading="lazy" />
          <figcaption className="sia-mono">
            <span>Chayenne Mallari</span>
            <span>Sonic Identity Architect</span>
          </figcaption>
        </figure>
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">The ear behind it</p>
          <h2 className="sia-display">
            I read people for <span className="sia-nw">a <em>living</em>.</span>
          </h2>
          <div className="sia-body">
            <p className="sia-lead">Hi, I’m Chayenne Mallari, the Sonic Identity Architect.</p>
            <p>
              For more than twenty years I stood behind the chair for high-net-worth clients. I could
              tell who someone was before they said a word: how they wanted to walk out, and what they
              wanted a room to feel when they walked in.
            </p>
            <p>
              When I opened my own studio salon, I chose the music for every client who sat in my chair.
              As a hair extension specialist, I was changing how a woman looked on the outside, so I built
              playlists for how I wanted her to feel on the inside: confident, magnetic, an untouchable
              badass. When the music matched her energy, she sat up taller, she walked out feeling
              more like herself, and she often would add one more product to her purchase before she left. Same chair, same
              service, different sound. Now? I do that for your brand.
            </p>
            <p>
              I’m a certified hypnotherapist and NLP trainer, and I built an eight-archetype Sonic
              Identity system. I map
              your archetype first, then make the music, so your sound actually sounds like you and not
              like whatever happened to be trending on Tuesday.
            </p>
          </div>
          <dl className="sia-facts">
            <div>
              <dt><span data-count="20">20</span>+</dt>
              <dd className="sia-mono">Years reading identity</dd>
            </div>
            <div>
              <dt><span data-count="8">8</span></dt>
              <dd className="sia-mono">Sonic archetypes</dd>
            </div>
            <div>
              <dt>NLP</dt>
              <dd className="sia-mono">Trainer &amp; hypnotherapist</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Guide() {
  return (
    <section className="sia sia-guide sia-rule" id="free-audit">
      <div className="sia-wrap sia-reveal">
        <p className="sia-mono sia-kicker" style={{ justifyContent: "center" }}>
          Free · Nine quick questions
        </p>
        <h2 className="sia-display">
          The Sonic
          <br />
          Identity Audit
        </h2>
        <p className="sia-hand">(be honest. it’s just us.)</p>
        <p className="sia-body">
          It’s nine questions and a few minutes, and you’ll find out what your brand sounds like right now (brace
          yourself) and meet your Sonic Archetype: the energy people feel from your brand before you say a word.
        </p>
        <a className="sia-btn sia-btn--bone" href={LINKS.audit} target="_blank" rel="noreferrer">
          Take the free audit <span className="sia-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function Apply() {
  return (
    <section className="sia sia-guide sia-apply sia-rule" id="apply">
      <div className="sia-wrap sia-reveal">
        <p className="sia-mono sia-kicker" style={{ justifyContent: "center" }}>
          By application
        </p>
        <h2 className="sia-display">
          Tell me about
          <br />
          <span className="sia-nw">your <em>brand</em>.</span>
        </h2>
        <p className="sia-body">
          The Atelier is made for one brand at a time, so I keep it personal. Answer a few questions (it takes
          a few minutes), and I read every application myself. You’ll hear back within 2 business days
          with what I’d actually recommend for your brand.
        </p>
        <div className="sia-hero__ctas" style={{ justifyContent: "center" }}>
          <a className="sia-btn sia-btn--red" href={LINKS.apply} target="_blank" rel="noreferrer">
            Start my application <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export const FAQ = [
  {
    q: "What is a sonic identity?",
    a: "It’s the sound of your brand: the signature song and the family of sounds that play across your reels, podcast, launches and stage, so people know it’s you by ear. Like a signature scent, but for your brand.",
  },
  {
    q: "Can’t I just use a song I love on Spotify?",
    a: "You can. So can everyone else, and a personal streaming account doesn’t license that song for your business. A song you love makes people think of the artist. A song made for you makes them think of you.",
  },
  {
    q: "Can’t I just make one myself with AI?",
    a: "You could. You could also cut your own hair. (I did hair for twenty years. Please don’t.) The tool was never the hard part. Knowing exactly what your brand should sound like, and hearing when it’s off? That’s what you’re paying me for.",
  },
  {
    q: "My business is already doing well. Do I need this?",
    a: "Need? No. You also didn’t need the photographer or the brand designer… and you hired them anyway, because the details are what make people remember you. Sound is the detail most brands at your level haven’t touched yet. That’s kind of the point.",
  },
  {
    q: "What if I don’t love it?",
    a: "Then you tell me. Honestly, I want you to. You get refinement rounds (one for the Anthem, two for the Atelier) and a guide that helps you say what you feel without music words. And there’s my First Listen Promise. With the Anthem, if your first listen doesn’t feel like your brand, I rebuild it from a fresh direction, once, on me. With the Atelier, you hear your first track before I make the other three.",
  },
  {
    q: "Do you use AI? Will it sound like AI?",
    a: "Yes, it’s one of my instruments, the way a producer uses software. The direction, the taste and every final call are mine, and your lyrics come from your own words, shaped by me. So what you hear is your brand, not a prompt. AI is in the room. It just doesn’t get a vote.",
  },
  {
    q: "Can another brand ever use my song?",
    a: "Never. Your Anthem or Atelier comes with brand-use rights in writing, licensed to your brand alone: content, ads, launches, events, livestreams, your podcast and your programs. No expiry, no renewals, and I never license your sound to another brand. Want it on Spotify, or in Instagram and TikTok’s music libraries so people can find it and post with it? Just ask. Put your Anthem in the libraries and I make you a bonus ad song, kept just for your brand, so your ads stay clean. Need a use that isn’t listed? Tell me in your application and we’ll add it. Full details are in the Terms of Purchase.",
  },
  {
    q: "Are there any calls?",
    a: "Just the good ones. The Atelier comes with two private 30-minute calls: your Live Brand Read at the start, and your First Listen call when your first track is ready. The Anthem comes with a 20-minute First Listen call. Everything else happens over email and voice memos, on your time. The Blueprint is all yours to do whenever you like.",
  },
  {
    q: "How long does it take?",
    a: "For the Anthem, your first listen comes in about 7 to 10 days, and it’s finished in 2 to 4 weeks. For the Atelier, your first track comes in about 7 days, and your full sound world in about 4 to 6 weeks (often faster when your feedback comes back quickly). Got a launch or event date? Tell me and I’ll be honest about whether we can make it.",
  },
  {
    q: "How much is it?",
    a: "The Blueprint is $297. The Anthem is $2,500, or 2 payments of $1,300. The Atelier is $8,000, or 3 payments of $2,800. Every price is right here, out in the open.",
  },
  {
    q: "Where do I start?",
    a: "Take the free Sonic Identity Audit first. It takes a few minutes and tells you your Sonic Archetype. If you want to hear sketches tonight, go for the Blueprint. If you want one song made for you, that’s the Anthem. And if you want your whole brand’s sound done for you, apply for the Atelier.",
  },
];

export function Faq() {
  return (
    <section className="sia sia-faq sia-rule" id="faq">
      <div className="sia-wrap sia-faq__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">Questions</p>
          <h2 className="sia-display">
            Before <span className="sia-nw">you <em>press play</em>.</span>
          </h2>
          <figure className="sia-faq__photo">
            <img src="/images/chayenne-editorial-bw.webp" alt="Chayenne Mallari in sunglasses and a black leather jacket" loading="lazy" />
          </figure>
        </div>
        <div className="sia-reveal">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="sia sia-final sia-final--split sia-rule" id="inquiry">
      <div className="sia-wrap sia-final__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">Your move</p>
          <h2 className="sia-display">
            Stop borrowing
            <br />
            <span className="sia-nw">their <em>song</em>.</span>
          </h2>
          <p className="sia-body sia-final__line">
            Picture it: it’s three minutes before your masterclass, the waiting room’s filling up… and the
            music playing is so obviously you that people know whose room they’re in before you say a
            word. That’s the whole brief.
          </p>
          <p className="sia-body sia-final__line">
            Start with the free audit and meet your Sonic Archetype. It’s nine quick questions. Or, if
            you already know (and I think you do), get your Anthem today.
          </p>
          <div className="sia-hero__ctas">
            <a className="sia-btn sia-btn--red" href={LINKS.audit} target="_blank" rel="noreferrer">
              Take the free audit <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="sia-btn sia-btn--ghost" href={LINKS.anthem} target="_blank" rel="noreferrer">
              Get the Anthem <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="sia-final__alt">
            Want the whole brand world?{" "}
            <a href={LINKS.apply} target="_blank" rel="noreferrer">
              Apply for the Atelier
            </a>
            . I read every application myself and reply within 2 business days.
          </p>
        </div>
        <figure className="sia-final__photo sia-reveal" aria-hidden="true" data-drift="0.1">
          <img src="/images/chayenne-headphones.webp" alt="" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
