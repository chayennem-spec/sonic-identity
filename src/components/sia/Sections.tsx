import { ASSETS, LINKS } from "../../lib/constants";

// Homepage sections, Oct 2026 redesign. Copy written for Chayenne; edit freely.

const TICKER = [
  "Stop renting your sound",
  "Custom everything. Including the soundtrack",
  "Be heard before you’re seen",
  "Recognized by ear",
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
            <p className="sia-lead">The photographer. The stylist. The designer with the waitlist.</p>
            <p>
              You don’t do off the rack. Then the launch you spent months building goes live, and it
              plays the same Spotify track a nineteen-year-old used for her coffee haul this morning.
            </p>
            <p>
              <strong>A borrowed song makes people remember someone else.</strong> Sound is the part of
              your brand that follows people out of the room, into the car, and into their head at
              2am.
            </p>
            <p>
              Your brand guide covers everything people see.{" "}
              <strong>So who’s directing what they hear?</strong>
            </p>
          </div>
          <p className="sia-hand">Make it yours.</p>
        </div>
      </div>
    </section>
  );
}

const FOR_HER = [
  "Built the business. Has the team. Books the stage.",
  "Wears the tailored piece, not the trending one, and wants her brand to do the same.",
  "Has zero time for a course, a call schedule or one more login.",
  "Walks into rooms where people already know her name. Now she wants them to know her sound.",
  "Is a little tired of hearing her launch set to someone else’s song.",
];

export function ForHer() {
  return (
    <section className="sia sia-forher sia-rule" id="for-her">
      <div className="sia-wrap sia-forher__grid">
        <div className="sia-reveal">
          <p className="sia-mono sia-kicker">This is for the female founder who…</p>
          <h2 className="sia-display">
            Isn’t starting. <span className="sia-nw">She’s <em>arriving</em>.</span>
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
  { who: "Your ads manager", need: "needs a cleared 15-second cut. By noon." },
  { who: "Your event producer", need: "needs a walk-on. Not the one the last speaker used." },
  { who: "Your podcast editor", need: "needs an intro that sounds like you, not the stock library." },
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
            them out loud.
          </p>
        </div>
        <ol className="sia-rights__grid sia-reveal">
          {MONDAY.map((m, i) => (
            <li key={m.who}>
              <span className="sia-mono">Monday · 0{i + 1}</span>
              <p>
                <strong>{m.who}</strong> {m.need}
              </p>
            </li>
          ))}
        </ol>
        <div className="sia-rights__close sia-reveal">
          <p>
            A trending track can’t answer both. A personal streaming account doesn’t license a song
            for your business, and a song everyone uses can’t sound like you. Your signature sound
            answers both: made for your brand, licensed only to you, with{" "}
            <strong>exclusive usage rights in writing. No expiry. No renewals.</strong>
          </p>
          <p className="sia-hand">Your sound. Only yours.</p>
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

export function Offers() {
  return (
    <section className="sia sia-offers sia-rule" id="offers">
      <div className="sia-wrap">
        <div className="sia-offers__head sia-reveal">
          <p className="sia-mono sia-kicker">03 · Work with me</p>
          <h2 className="sia-display">
            Claim <span className="sia-nw">your <em>sound</em>.</span>
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
            <p className="sia-mono sia-offer__line">Hear your brand before you invest</p>
            <p className="sia-offer__desc">
              Curious, not ready to commit? Fair. In one sitting, your brand’s energy is read straight
              from your feed, your sonic archetype is named, and you get three sound directions, plus
              prompts so you can hear a first sketch of each the same day.
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
              Your walk-on. Your launch. Your podcast open. One signature song made around your
              story, your archetype and the room you plan to own. Licensed to your brand alone, with
              exclusive usage rights for your content, ads, launches, events and podcast.
            </p>
            <a className="sia-btn sia-btn--ghost" href={LINKS.apply} target="_blank" rel="noreferrer">
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
            <p className="sia-mono sia-offer__line">For the woman who doesn’t do homework</p>
            <p className="sia-offer__desc">
              Your entire sound family, made and finished for you, start to finish. No program to
              learn. No calls to sit through. You say yes. I build. Exclusive to your brand, and
              you walk in sounding like the brand you already are.
            </p>
            <a className="sia-btn sia-btn--ghost" href={LINKS.apply} target="_blank" rel="noreferrer">
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
          Their <span className="sia-nw">sound, <em>out loud</em>.</span>
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
          <p className="sia-mono sia-kicker">04 · The ear behind it</p>
          <h2 className="sia-display">
            I read people for <span className="sia-nw">a <em>living</em>.</span>
          </h2>
          <div className="sia-body">
            <p className="sia-lead">Hi, I’m Chayenne.</p>
            <p>
              For more than twenty years I stood behind the chair for high-net-worth clients. I
              learned who someone was before they said a word: how they wanted to walk out, and what
              they wanted a room to feel when they walked in. Now I do that with sound.
            </p>
            <p>
              I’m a certified hypnotherapist and NLP trainer. I wrote{" "}
              <strong>The Sonic Imprint</strong>. I built a ten-archetype Sonic Identity system. I map
              your archetype first, then make the music. So your sound sounds like you. Not like
              whatever was trending on Tuesday.
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
    <section className="sia sia-guide sia-apply sia-rule" id="inquiry">
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
          The Anthem and the Atelier are made for one brand at a time. Five minutes, in writing, no
          calls. I read every application myself and reply within 2 business days.
        </p>
        <div className="sia-hero__ctas" style={{ justifyContent: "center" }}>
          <a className="sia-btn sia-btn--red" href={LINKS.apply} target="_blank" rel="noreferrer">
            Start my application <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="sia-btn sia-btn--ghost" href={LINKS.audit} target="_blank" rel="noreferrer">
            Not sure yet? Take the free audit
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "What is a sonic identity?",
    a: "It’s the sound of your brand: the signature song, audio logo and family of sounds that play across your reels, podcast, launches and stage, so people know it’s you by ear. Like a signature scent, but for your brand.",
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
    a: "That’s exactly why the Blueprint exists: you hear three directions before you commit to anything bigger. In the Atelier, your Signature Anthem and Sonic Signature land first, before the other tracks are built. In the Anthem, you hear your first listen before any changes. Either way you get refinement rounds to shape it (one for the Anthem, two for the Atelier), with a guide that helps you say what you feel even without music words.",
  },
  {
    q: "Do you use AI? Will it sound like AI?",
    a: "Yes, it’s one of my instruments, the way a producer uses software. The direction, the lyrics, the taste and every final call are mine, so what you hear is your brand, not a prompt. AI is in the room. It just doesn’t get a vote.",
  },
  {
    q: "Where would I actually use it?",
    a: "Reels, stories, your podcast intro and outro, launch and sales videos, webinars, ads, your walk-on at events, your retreat playlist. Anywhere people meet your brand, it can sound like you.",
  },
  {
    q: "Is my sound really mine?",
    a: "It’s yours to use, and only yours. Your Anthem or Atelier comes with exclusive usage rights in a written agreement: content, ads, launches, events, podcast and programs. No expiry, no renewals, and I never license your sound to anyone else. Need a use that isn’t listed? Tell me before we sign and we’ll add it.",
  },
  {
    q: "Will my name show up on Instagram?",
    a: "Yes. Post a reel with your own sound and Instagram labels it “Original audio” with your handle, so anyone who taps it lands on your audio page, not a stranger’s. Want your anthem streaming too? Ask me. A public release is planned separately in your agreement, so the rights are clear before anything goes live. I can’t promise it trends. I can promise your name is on it, every time someone taps it.",
  },
  {
    q: "Do I have to get on calls?",
    a: "Not for the Anthem or the Atelier. You have enough meetings. Everything happens in writing and voice notes: you approve each stage, I do the building.",
  },
  {
    q: "How much is it?",
    a: "The Blueprint is ready when you are, right from this page. The Anthem and the Atelier are made for one brand at a time, so you’ll get the investment once I know what you need. Apply and I’ll come back with it.",
  },
  {
    q: "Where do I start?",
    a: "Want to hear it first? Start with the Sonic Blueprint: it reads your brand, names your archetype and gives you three sound directions plus prompts to hear a first sketch of each. Already know you want it done for you? Skip ahead and apply for the Anthem or the Atelier.",
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
    <section className="sia sia-final sia-final--split sia-rule">
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
          <div className="sia-hero__ctas">
            <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
              Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="sia-btn sia-btn--ghost" href={LINKS.apply} target="_blank" rel="noreferrer">
              Apply for the Atelier
            </a>
          </div>
        </div>
        <figure className="sia-final__photo sia-reveal" aria-hidden="true">
          <img src="/images/red-headphones-marble.webp" alt="" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
