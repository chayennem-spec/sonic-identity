import { ASSETS, LINKS } from "../../lib/constants";

// Homepage sections, Oct 2026 redesign. Copy written for Chayenne; edit freely.

const TICKER = ["Stop renting your sound", "Your sound is your signature", "Be heard before you’re seen"];

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
            Your brand has a face. It doesn’t have a <em>voice</em>.
          </h2>
        </div>
        <div className="sia-gap__side sia-reveal">
          <div className="sia-body">
            <p className="sia-lead">You paid for the photoshoot, the palette, the logo.</p>
            <p>
              Then every reel, every launch and every walk-on borrows the same trending audio a
              thousand other accounts used this week. People see you. They just can’t hear you.
            </p>
            <p>
              <strong>And what they can’t hear, they forget.</strong> Sound is the part of your brand
              that reaches people when they aren’t even looking.
            </p>
          </div>
          <p className="sia-hand">Make it yours.</p>
        </div>
      </div>
    </section>
  );
}

const SOUND = [
  { l: "S", t: "Style", d: "The genre, era and production character that fit who you are, not what’s trending." },
  { l: "O", t: "Outcome", d: "What someone should feel the second it plays: calm, power, desire, trust." },
  { l: "U", t: "Undertone", d: "The texture underneath. Reverent, defiant, sultry. The color under the notes." },
  { l: "N", t: "Narrative", d: "The story your sound tells, even when there isn’t a single word in it." },
  { l: "D", t: "Delivery", d: "Tempo, voice, mix and length, built for where it lives: reels, podcasts, stages." },
];

export function Method() {
  return (
    <section className="sia sia-sound sia-rule" id="method">
      <div className="sia-wrap">
        <div className="sia-sound__head sia-reveal">
          <div>
            <p className="sia-mono sia-kicker">02 · The S.O.U.N.D. Framework</p>
            <h2 className="sia-display">
              How a signature sound is <em>built</em>.
            </h2>
          </div>
          <p>
            Every sound I compose starts from your archetype and runs through five decisions.
            Nothing is pulled from a stock library. Nothing is picked because it’s trending.
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

export function Offers() {
  return (
    <section className="sia sia-offers sia-rule" id="offers">
      <div className="sia-wrap">
        <div className="sia-offers__head sia-reveal">
          <p className="sia-mono sia-kicker">03 · Work with me</p>
          <h2 className="sia-display">
            Own your <em>sound</em>.
          </h2>
        </div>
        <div className="sia-offers__grid">
          <article className="sia-offer sia-offer--lead sia-reveal">
            <div className="sia-offer__top sia-mono">
              <span className="sia-offer__tag sia-mono">Start here</span>
              <span>Same day</span>
            </div>
            <div className="sia-offer__num" aria-hidden="true">01</div>
            <h3>The Sonic Blueprint</h3>
            <p className="sia-mono sia-offer__line">Hear your brand before you hire anyone</p>
            <p className="sia-offer__desc">
              Your brand’s energy read straight from your feed, your sonic archetype, your sound
              foundation, and three sound directions, each with a first sketch you can actually
              hear. All in one sitting.
            </p>
            <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
              Start the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="sia-offer sia-reveal">
            <div className="sia-offer__top sia-mono">
              <span className="sia-offer__tag sia-offer__tag--quiet sia-mono">By invitation</span>
              <span>Signature song</span>
            </div>
            <div className="sia-offer__num" aria-hidden="true">02</div>
            <h3>The Instant Recognition Anthem</h3>
            <p className="sia-mono sia-offer__line">One song that walks in before you do</p>
            <p className="sia-offer__desc">
              A signature song composed around your story, your archetype and the room you want to
              own. Delivered with full usage rights for your content, launches, events and stage.
            </p>
            <a className="sia-btn sia-btn--ghost" href="#inquiry">
              Request an invitation <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="sia-offer sia-reveal">
            <div className="sia-offer__top sia-mono">
              <span className="sia-offer__tag sia-offer__tag--quiet sia-mono">Done for you</span>
              <span>Full sound family</span>
            </div>
            <div className="sia-offer__num" aria-hidden="true">03</div>
            <h3>The Instant Recognition Atelier</h3>
            <p className="sia-mono sia-offer__line">Your whole sound, composed and finished</p>
            <p className="sia-offer__desc">
              Your complete sound family, built for you from the first note to the final file. No
              calls to sit through, no homework, no learning curve. You approve. I build.
            </p>
            <a className="sia-btn sia-btn--ghost" href="#inquiry">
              Apply for the Atelier <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

// PLACEHOLDERS: swap in real words from Chayenne's screenshots before this goes live.
const PROOF = [
  {
    who: "Leanne Lopez-Mosley",
    what: "“Soft Girl Millions” · signature song",
    quote: "Leanne’s words go here, taken from her screenshot.",
  },
  {
    who: "Lou Clark",
    what: "Money song for her program · on Spotify",
    quote: "Lou’s words go here, taken from her screenshot.",
  },
  {
    who: "Client name",
    what: "Project · format",
    quote: "Third client’s words go here.",
  },
];

export function Proof() {
  return (
    <section className="sia sia-proof sia-rule" id="proof">
      <div className="sia-wrap">
        <p className="sia-mono sia-kicker sia-reveal">04 · Heard in the wild</p>
        <h2 className="sia-display sia-reveal">
          Their sound, <em>out loud</em>.
        </h2>
        <div className="sia-proof__grid">
          {PROOF.map((p) => (
            <figure className="sia-quote sia-reveal" key={p.who}>
              <span className="sia-quote__flag sia-mono">Placeholder</span>
              <blockquote>{p.quote}</blockquote>
              <cite className="sia-mono">
                {p.who}
                <span>{p.what}</span>
              </cite>
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
        <figure className="sia-about__photo sia-reveal">
          <img src={ASSETS.portraitBlack} alt="Chayenne Mallari" loading="lazy" />
          <figcaption className="sia-mono">
            <span>Chayenne Mallari</span>
            <span>Sonic Identity Architect</span>
          </figcaption>
        </figure>
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">05 · The ear behind it</p>
          <h2 className="sia-display">
            I read people for a <em>living</em>.
          </h2>
          <div className="sia-body">
            <p className="sia-lead">Hi, I’m Chayenne.</p>
            <p>
              For more than twenty years I stood behind the chair for high-net-worth clients,
              learning who someone is before they say a word. Now I translate that into sound.
            </p>
            <p>
              I’m a certified hypnotherapist and NLP trainer, the author of{" "}
              <strong>The Sonic Imprint</strong>, and the architect of a ten-archetype Sonic Identity
              system. I map your archetype first, then compose the sound. So it sounds like you, not
              like this week’s trending audio.
            </p>
          </div>
          <dl className="sia-facts">
            <div>
              <dt>20+</dt>
              <dd className="sia-mono">Years reading identity</dd>
            </div>
            <div>
              <dt>10</dt>
              <dd className="sia-mono">Sonic archetypes</dd>
            </div>
            <div>
              <dt>NLP</dt>
              <dd className="sia-mono">Trainer &amp; hypnotherapist</dd>
            </div>
          </dl>
          <a className="sia-btn sia-btn--bone" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Guide() {
  return (
    <section className="sia sia-guide sia-rule" id="free-guide">
      <div className="sia-wrap sia-reveal">
        <p className="sia-mono sia-kicker" style={{ justifyContent: "center" }}>
          The book
        </p>
        <h2 className="sia-display">
          The Sonic
          <br />
          Imprint
        </h2>
        <p className="sia-hand">(it’s already yours.)</p>
        <p className="sia-body">
          The thinking behind every sound I make: why the ear remembers what the eye forgets, and
          how to stop borrowing a sound that was never yours.
        </p>
        <a className="sia-btn sia-btn--bone" href="#inquiry">
          Send me the guide <span className="sia-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "What is a sonic identity?",
    a: "It’s the sound of your brand: the signature song, audio logo and family of sounds that play across your reels, podcast, launches and stage, so people recognize you by ear.",
  },
  {
    q: "Where do I start?",
    a: "With the Sonic Blueprint. It reads your brand, finds your archetype and gives you three sound directions with a first sketch of each, so you hear the possibilities before you invest in a full composition.",
  },
  {
    q: "Do you use AI?",
    a: "Yes, as one instrument in the studio. The direction, the taste and every final decision are mine. AI is a tool here, not the artist.",
  },
  {
    q: "Can I use my sound everywhere?",
    a: "Your Anthem comes with full usage rights for your brand: content, launches, events and ads. The exact terms are written into your agreement before we start.",
  },
  {
    q: "Do I have to get on calls?",
    a: "Not for the Atelier. It’s built to run without calls: you approve each stage and I do the building.",
  },
];

export function Faq() {
  return (
    <section className="sia sia-faq sia-rule" id="faq">
      <div className="sia-wrap sia-faq__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">06 · Questions</p>
          <h2 className="sia-display">
            Before you <em>press play</em>.
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
    <section className="sia sia-final sia-rule">
      <div className="sia-wrap sia-reveal">
        <p className="sia-mono sia-kicker" style={{ justifyContent: "center" }}>
          Your move
        </p>
        <h2 className="sia-display">
          Stop renting
          <br />
          your <em>sound</em>.
        </h2>
        <div className="sia-hero__ctas">
          <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="sia-btn sia-btn--ghost" href="#inquiry">
            Ask about the Atelier
          </a>
        </div>
      </div>
    </section>
  );
}
