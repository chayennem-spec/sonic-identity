import { ASSETS, LINKS } from "../../lib/constants";

// Homepage sections, Oct 2026 redesign. Copy written for Chayenne; edit freely.

const TICKER = [
  "Be heard before you’re even seen",
  "Sound as expensive as you look",
  "Your name on every reel",
  "Recognized. Remembered. Felt.",
  "Don’t borrow the vibe. Create it.",
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
          <p className="sia-mono sia-kicker">01 · The gap</p>
          <h2 className="sia-display">
            Everything about you is custom. Except <span className="sia-nw">your <em>sound</em>.</span>
          </h2>
        </div>
        <div className="sia-gap__side sia-reveal">
          <div className="sia-body">
            <p className="sia-lead">You hired the photographer. You booked the stylist. You check your feed twice before anything goes up.</p>
            <p>
              You don’t do off the rack, and it shows. So it stings a little when the launch you spent
              months building goes live and opens with the same trending sound every other masterclass
              in your niche is using. A song nobody licensed for your business, which means it can get
              your video muted right when it finally starts working.
            </p>
            <p>
              Here’s the thing: <strong>a borrowed song makes people remember someone else.</strong> And
              sound is the part of your brand that follows them out of the room, into the car and into
              their head at 2am.
            </p>
            <p>
              Your brand guide covers everything people see.{" "}
              <strong>So who’s taking care of what they hear?</strong>
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
    d: "You know Netflix from two notes, before the logo even shows up. That’s what a sound can do when someone uses it on purpose.",
  },
  {
    l: "R",
    t: "Remembered",
    d: "When the same sound opens your reels, your podcast and your walk-on, people start connecting it to you. A different trending track every week never gives them the chance.",
  },
  {
    l: "F",
    t: "Felt",
    d: "Sound reaches people before your words do. Whether you want them to feel calm, powerful or a little obsessed, they feel it before you say a thing.",
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
            Your launch video opens. Before your face even loads, they already know it’s you. That’s
            not luck. It’s the same sound, used on purpose, every single time.
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
  "Has built the business, hired the team and gets booked for the stage.",
  "Wears the tailored piece, not the trending one, and wants her brand to do the same.",
  "Doesn’t have time for another course, another call or another login (and honestly shouldn’t have to).",
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
          <p className="sia-hand">Nodding? Hi. We should talk.</p>
        </div>
      </div>
    </section>
  );
}


const ON_SET = [
  { src: "/images/chayenne-set-01.webp", alt: "Chayenne Mallari leaning forward on a sculptural white chair, black leather and red lips", w: 1100, h: 1650 },
  { src: "/images/chayenne-set-03.webp", alt: "Chayenne Mallari standing in a raw plaster archway in black leather", w: 1600, h: 1067 },
  { src: "/images/chayenne-set-02.webp", alt: "Chayenne Mallari seated facing the camera on a white stool", w: 1100, h: 1650 },
  { src: "/images/chayenne-set-04.webp", alt: "Chayenne Mallari kneeling on a faux fur block inside a plaster archway", w: 1100, h: 1650 },
  { src: "/images/chayenne-set-06.webp", alt: "Chayenne Mallari seated on a white chair, looking away from the camera", w: 1100, h: 1650 },
  { src: "/images/chayenne-set-05.webp", alt: "Chayenne Mallari seated with her hand resting on a white stool", w: 1100, h: 1650 },
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
      <div className="sia-onset__viewport">
        <div className="sia-onset__track" data-scrollx="0.35">
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
    </section>
  );
}

const SOUND = [
  { l: "S", t: "Style", d: "The genre, era and vibe that fit who you actually are. Not whatever’s on someone’s For You page." },
  { l: "O", t: "Outcome", d: "What they feel the second it plays. Calm. Power. Desire. A little “wait, who is that?”" },
  { l: "U", t: "Undertone", d: "The texture underneath. Reverent, defiant, a little dangerous. The color under the notes." },
  { l: "N", t: "Narrative", d: "The story your sound tells, even when there isn’t a single word in it." },
  { l: "D", t: "Delivery", d: "Tempo, voice, mix and length, made for wherever you show up: reels, podcasts, stages." },
];

export function Method() {
  return (
    <section className="sia sia-sound sia-rule" id="method">
      <div className="sia-wrap">
        <div className="sia-sound__head sia-reveal">
          <div>
            <p className="sia-mono sia-kicker">02 · The S.O.U.N.D. Framework</p>
            <h2 className="sia-display">
              How a signature sound <span className="sia-nw">is <em>built</em>.</span>
            </h2>
          </div>
          <p>
            You don’t need to know what a minor key is. That’s my job. Every sound starts from your
            archetype and goes through five decisions. No stock library. No “well, it’s trending.”
            <br />
            <br />
            That’s my Sonic Subconscious Selling™ method: find the belief your buyer needs, build it
            into your sound, and repeat it until they feel it before you say a word.
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

const MONDAY = [
  { tag: "Ads", who: "Your ads manager", need: "needs a cleared 15-second cut. By noon. Most trending songs aren’t cleared for paid ads." },
  { tag: "Stage", who: "Your event producer", need: "needs a walk-on. Not the one the last speaker used." },
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
            Two different questions. Your team is asking both every week. They’re just not asking
            them out loud. Here’s what it sounds like:
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
            A trending track can’t answer either one. A signature sound answers both:
            it’s made for your brand, it’s never licensed to another brand, and it comes with{" "}
            <strong>exclusive brand-use rights in writing, with no expiry and no renewals.</strong>
          </p>
          <p className="sia-hand">Your sound. Made for your brand alone.</p>
        </div>

        <div className="sia-ig sia-reveal">
          <div className="sia-ig__copy">
            <p className="sia-mono sia-kicker">Look at the corner of your last reel</p>
            <h3>Whose name is on your audio?</h3>
            <p>
              That little line under your handle. If you used a trending song, it’s someone else’s
              name. On your content. On the reel you paid an editor to cut. Someone loves it, taps
              the sound, and lands on a page full of strangers using the same song.
            </p>
            <p>
              With your own sound, it says <strong>your</strong> name. “Original audio” with your
              handle, in the corner of every reel. Tap it and you land on your own audio page, with
              your name at the top. Even when someone else uses it.
            </p>
            <p className="sia-ig__punch">
              Every time someone taps it or uses it, your name goes with it.
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
 * what's-included list per offer, a real founding deadline and the First Listen Promise.
 * Take the founding note down on Dec 1 (the Atelier price goes up then).
 */
const OFFERS = [
  {
    featured: true,
    tag: "If it were mine...",
    label: "The whole brand world...",
    name: "The Instant Recognition Atelier",
    line: "For the woman who doesn’t do homework",
    desc: "You’ve already invested in how your brand looks. This is the part people actually remember. No homework, no calls. You say yes, I build it, and it’s made for your brand alone.",
    includes: [
      "5 original tracks, spent your way: offers, anthem, walk-on, reels",
      "Your Sonic Signature, built around your Sonic Fingerprint: one real sound from your world",
      "Two refinement rounds, no calls",
      "A sound guide, so your team never guesses",
      "Exclusive brand-use rights in writing",
    ],
    because: "it’s a whole brand soundtrack, built for one brand at a time and never licensed to another brand.",
    plan: "3-payment plan available",
    cta: "Apply for the Atelier",
    href: LINKS.apply,
  },
  {
    tag: "Start with the song",
    label: "Done for you",
    name: "The Instant Recognition Anthem",
    line: "One song that walks in before you do",
    desc: "Want to start with one song? Your walk-on, your launch video, your podcast open: one song made around your story and your archetype.",
    includes: [
      "One signature song",
      "30- and 15-second cuts for reels, ads and your podcast",
      "One refinement round",
      "Exclusive brand-use rights in writing",
      "Its full price credits toward the Atelier",
    ],
    because: "it’s made around your story and your archetype, and it’s never licensed to another brand.",
    cta: "Get your Anthem",
    href: LINKS.anthem,
  },
  {
    tag: "Start here",
    label: "Same day",
    name: "The Sonic Blueprint",
    line: "Hear your brand before you invest",
    desc: "Curious but not ready to commit? Fair. In one sitting, the Blueprint reads your brand’s energy straight from your feed.",
    includes: [
      "Your Sonic Archetype",
      "Three sound directions",
      "Prompts to hear a first sketch of each",
      "Its full price credits toward the Atelier",
    ],
    because: "you do it yourself, tonight, and it counts toward the Atelier if you go all in.",
    cta: "Start the Blueprint",
    href: LINKS.blueprint,
  },
];

export function Offers() {
  return (
    <section className="sia sia-offers sia-rule" id="offers">
      <div className="sia-wrap">
        <div className="sia-offers__head sia-reveal">
          <p className="sia-mono sia-kicker">03 · Work with me</p>
          <h2 className="sia-display">
            Claim <span className="sia-nw">your <em>sound</em>.</span>
          </h2>
          <p className="sia-offers__lead">
            Every launch you wait is one more that opens with somebody else’s song. Three ways in,
            depending on how much you want done for you.
          </p>
        </div>
        <p className="sia-offers__note sia-mono sia-reveal">
          <span>
            Founding spots for the Atelier close <b>Nov 30</b>
          </span>
        </p>
        <div className="sia-offers__grid">
          {OFFERS.map((o, i) => (
            <article className={`sia-offer${o.featured ? " sia-offer--featured" : ""} sia-reveal`} key={o.name}>
              <div className="sia-offer__top sia-mono">
                <span className={`sia-offer__tag${o.featured ? "" : " sia-offer__tag--quiet"} sia-mono`}>{o.tag}</span>
                <span>{o.label}</span>
              </div>
              <div className="sia-offer__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
              <h3>{o.name}</h3>
              <p className="sia-mono sia-offer__line">{o.line}</p>
              <p className="sia-offer__desc">{o.desc}</p>
              <ul className="sia-offer__list">
                {o.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="sia-offer__because">
                <b>Why it’s worth it:</b> because {o.because}
              </p>
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
              In the Atelier, your first track and your Sonic Signature land first. If, after refining
              them, they don’t feel like your brand, tell me in writing within 7 days of hearing the refined version and we end there.
              You pay only for that first stage, and the rest is refunded or cancelled. Full details are
              in the{" "}
              <a href="/terms">Terms of Purchase</a>.
            </p>
          </div>
          <p className="sia-hand">Hear it first.</p>
        </div>
        <p className="sia-offers__apply-note sia-reveal">
          The Atelier is by application. The Anthem and the Blueprint, you can start today.
        </p>
        <p className="sia-mono sia-apply__from sia-reveal">Done-for-you work begins at $3,000</p>
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
}[] = [
  {
    song: "Soft Girl Millions",
    who: "Leanne Lopez-Mosley",
    note: "Made for Leanne’s world and her Soft Girl Millions women, as a gift. She uses it and credits me publicly.",
    links: [{ label: "See it in her world", href: "" }],
  },
  {
    song: "The Money Medium",
    who: "Lou Clark",
    note: "Made to sound the way her brand feels. It lives on Spotify.",
    links: [{ label: "Listen on Spotify", href: "" }],
  },
];

export function Proof() {
  return (
    <section className="sia sia-proof sia-rule" id="heard">
      <div className="sia-wrap">
        <p className="sia-mono sia-kicker sia-reveal">Heard in the wild</p>
        <h2 className="sia-display sia-reveal">
          Their <span className="sia-nw">sound, <em>out loud</em>.</span>
        </h2>
        <div className="sia-heard__grid">
          {HEARD.map((h) => (
            <figure className="sia-heard sia-reveal" key={h.song}>
              <span className="sia-heard__eq" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <p className="sia-heard__song">{h.song}</p>
              <cite className="sia-mono">For {h.who}</cite>
              <p className="sia-heard__note">{h.note}</p>
              <div className="sia-heard__links">
                {h.links
                  .filter((l) => l.href)
                  .map((l) => (
                    <a key={l.label} className="sia-btn sia-btn--ghost" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <span className="sia-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
              </div>
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
          <p className="sia-mono sia-kicker">04 · The ear behind it</p>
          <h2 className="sia-display">
            I read people for <span className="sia-nw">a <em>living</em>.</span>
          </h2>
          <div className="sia-body">
            <p className="sia-lead">Hi, I’m Chayenne Mallari, the Sonic Identity Architect.</p>
            <p>
              For more than twenty years I stood behind the chair for high-net-worth clients. I
              learned who someone was before they said a word: how they wanted to walk out, and what
              they wanted a room to feel when they walked in. Now I do that with sound.
            </p>
            <p>
              I’m a certified hypnotherapist and NLP trainer. I wrote{" "}
              <strong>The Sonic Imprint</strong>. I built an eight-archetype Sonic Identity system. I map
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
          Free · 3 minutes
        </p>
        <h2 className="sia-display">
          The Sonic
          <br />
          Identity Audit
        </h2>
        <p className="sia-hand">(be honest. it’s just us.)</p>
        <p className="sia-body">
          Nine questions. Find out what your brand sounds like right now, and meet your Sonic
          Archetype: the energy your sound was built to carry.
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
          The Atelier is made for one brand at a time. Five minutes, in writing, no
          calls. I read every application myself and reply within 2 business days, with what I’d
          recommend for your brand.
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
    a: "It’s the sound of your brand: the signature song, your Sonic Signature (think audio logo) and the family of sounds that play across your reels, podcast, launches and stage, so people know it’s you by ear. Like a signature scent, but for your brand.",
  },
  {
    q: "Can’t I just use a song I love on Spotify?",
    a: "You can. So can everyone else, and a personal streaming account doesn’t license that song for your business. A song you love makes people think of the artist. A song made for you makes them think of you.",
  },
  {
    q: "Can’t I just make one myself with AI?",
    a: "You could. You could also cut your own hair. The tool was never the hard part. Knowing exactly what your brand should sound like, and hearing when it’s off, is the part you’re paying for.",
  },
  {
    q: "Isn’t this just a jingle?",
    a: "A jingle sells a product. This is you. It’s the walk-on, the podcast open, the launch video, the moment a room goes quiet. Nobody hums a car insurance jingle and feels powerful.",
  },
  {
    q: "My business is already doing well. Do I need this?",
    a: "Need? No. You also didn’t need the photographer or the brand designer, and you hired them anyway, because the details are what make people remember you. Sound is the detail most brands at your level haven’t touched yet. That’s the point.",
  },
  {
    q: "What if I don’t love it?",
    a: "You tell me, honestly. You get refinement rounds (one for the Anthem, two for the Atelier) and a guide that helps you say what you feel without music words. In the Atelier, your first track and Sonic Signature land first, before the other four are built.",
  },
  {
    q: "Do you use AI? Will it sound like AI?",
    a: "Yes, it’s one of my instruments, the way a producer uses software. The direction, the lyrics, the taste and every final call are mine, so what you hear is your brand, not a prompt. AI is in the room. It just doesn’t get a vote.",
  },
  {
    q: "Where would I actually use it?",
    a: "Reels, stories, your podcast intro, launch videos, webinars, ads, your walk-on, your retreat. Anywhere people meet your brand.",
  },
  {
    q: "Is my sound only mine to use?",
    a: "Yes. Your Anthem or Atelier comes with exclusive brand-use rights, in writing: content, ads, launches, events, livestreams, your podcast and your programs. No expiry, no renewals, and I never license your sound to another brand. Streaming release is always your choice, never a default. Need a use that isn’t listed? Tell me in your application and we’ll add it. Full details are in the Terms of Purchase.",
  },
  {
    q: "Will my name show up on Instagram?",
    a: "Yes. Post a reel with your own sound and Instagram labels it “Original audio” with your handle. Want it on Spotify too? That’s your call, planned separately so the rights are clear first. I can’t promise it trends. I can promise your name is on it.",
  },
  {
    q: "Do I have to get on calls?",
    a: "Not for the Anthem or the Atelier. You have enough meetings. Everything happens in writing and voice notes: you approve each stage, I do the building.",
  },
  {
    q: "How much is it?",
    a: "The Blueprint and the Anthem are ready when you are, right from this page. The Atelier starts with a short application that walks you through the investment. Done-for-you work begins at $3,000.",
  },
  {
    q: "Where do I start?",
    a: "Want to hear it first? Start with the Sonic Blueprint: it reads your brand, names your archetype and gives you three sound directions plus prompts to hear a first sketch of each. Want one song now? Get the Anthem. Want the whole brand world done for you? Apply for the Atelier.",
  },
];

export function Faq() {
  return (
    <section className="sia sia-faq sia-rule" id="faq">
      <div className="sia-wrap sia-faq__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">05 · Questions</p>
          <h2 className="sia-display">
            Before <span className="sia-nw">you <em>press play</em>.</span>
          </h2>
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
            Stop renting
            <br />
            <span className="sia-nw">your <em>sound</em>.</span>
          </h2>
          <p className="sia-body sia-final__line">
            Picture it: three minutes before your masterclass, the waiting room filling up, and
            the music playing is already unmistakably yours. That’s the brief.
          </p>
          <p className="sia-body sia-final__line">
            Want to hear it first? Start with the Blueprint tonight. Want one song now? Get the Anthem.
            Want the whole brand world done for you? Apply for the Atelier. It takes about five minutes, there are no calls, and I read
            every application myself and reply within 2 business days.
          </p>
          <div className="sia-hero__ctas">
            <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
              Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="sia-btn sia-btn--ghost" href={LINKS.anthem} target="_blank" rel="noreferrer">
              Get the Anthem <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="sia-btn sia-btn--ghost" href={LINKS.apply} target="_blank" rel="noreferrer">
              Apply for the Atelier <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <figure className="sia-final__photo sia-reveal" aria-hidden="true" data-drift="0.1">
          <img src="/images/red-headphones-marble.webp" alt="" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
