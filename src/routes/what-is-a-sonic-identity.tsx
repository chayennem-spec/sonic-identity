import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, InlineCta, Pull, type QA } from "../components/sia/Article";
import { articleBlock, faqBlock, ldScripts, pageHead } from "../lib/seo";

const PATH = "/what-is-a-sonic-identity";
const TITLE = "What Is a Sonic Identity? Sound for Personal Brands, Explained";
const DESCRIPTION =
  "What a sonic identity is, what’s inside one, how it differs from a jingle or a playlist, and why personal brands, founders and coaches need one now. A plain-English guide from Sonic Identity Architect Chayenne Mallari.";

const FAQ_ITEMS: QA[] = [
  {
    q: "What is a sonic identity in simple terms?",
    a: "It’s what your brand sounds like, on purpose. A signature song, a short sound people learn to recognize as you, and a set of rules for where each one plays. Like a logo, but for the ear.",
  },
  {
    q: "Is a sonic identity the same as sonic branding or sound branding?",
    a: "Close cousins. Sonic branding or sound branding is the practice; your sonic identity is the result: the specific sounds that belong to your brand.",
  },
  {
    q: "Isn’t that just a jingle?",
    a: "No. A jingle is one catchy line about your product. A sonic identity is a whole sound world built from who you are: songs, a signature, cuts for every platform and a guide for your team.",
  },
  {
    q: "Do personal brands really need one?",
    a: "If sound already plays in your content, and on reels, podcasts and launches it always does, then your brand already has a sound. The only question is whether you chose it.",
  },
  {
    q: "How do I find out what my brand should sound like?",
    a: "Take the free Sonic Identity Audit. Nine questions, about three minutes, and it names your Sonic Archetype: the energy your sound was built to carry.",
  },
];

export const Route = createFileRoute("/what-is-a-sonic-identity")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, type: "article" }),
    scripts: ldScripts(articleBlock({ path: PATH, title: TITLE, description: DESCRIPTION }), faqBlock(FAQ_ITEMS)),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      kicker="Guide · The basics"
      title="What is a sonic"
      em="identity"
      punct="?"
      lead="A sonic identity is what your brand sounds like, on purpose. It’s the reason you know it’s Netflix before the logo shows up. And it’s the one layer most personal brands have never designed."
      faq={FAQ_ITEMS}
      related={[
        { href: "/sound-branding-for-female-founders", label: "Sound branding for female founders" },
        { href: "/sonic-identity-for-coaches", label: "Sonic identity for coaches" },
      ]}
    >
      <h2>The short answer</h2>
      <p>
        Your brand speaks in three languages: what people see, what they read, and what they hear. Most personal
        brands have the first two handled. A sonic identity is the third: a set of sounds made from your brand,
        so people recognize you by ear.
      </p>
      <Pull>Be heard before you’re seen.</Pull>

      <h2>What’s inside a sonic identity</h2>
      <ul>
        <li>
          <strong>A signature song or anthem.</strong> Your message, your energy and your movement in one piece
          of music, with lyrics pulled from the words you already say.
        </li>
        <li>
          <strong>A Sonic Signature.</strong> Sometimes called an audio logo: two to five seconds people learn to
          recognize as you. Your version of the Netflix “ta-dum.”
        </li>
        <li>
          <strong>A sound family.</strong> Tracks for different moments that still sound like the same brand: a
          launch, a walk-on, a beat under your everyday reels, a song for your offer.
        </li>
        <li>
          <strong>A sound guide.</strong> The rules: which track goes where, which cut for which platform, so
          your team never guesses.
        </li>
      </ul>

      <h2>Sonic identity vs. a jingle vs. a playlist</h2>
      <p>
        <strong>A jingle</strong> is one catchy line about a product. <strong>A playlist</strong> is other
        people’s music, chosen by taste, and usually not licensed for your business. <strong>A sonic
        identity</strong> is built from who you are, it’s licensed to your brand alone, and it works across
        every place you show up.
      </p>
      <p>
        And trending audio? It’s borrowed. Great for a week of reach, but it puts someone else’s name on your
        content, and it changes every week, so nothing builds.
      </p>

      <h2>Why personal brands need one now</h2>
      <p>
        Personal branding used to be about how you looked: the headshot, the colors, the website. Now most of
        your audience meets you through video, and video has sound. Every reel, podcast episode, launch and live
        is already telling people how to feel about you. A sonic identity makes sure it’s telling them the right
        thing, the same way, every time.
      </p>
      <p>
        That’s especially true for female founders and coaches, whose brand is the person. When the sound is
        borrowed, the feeling people attach to you is borrowed too.
      </p>

      <InlineCta line="Curious what your brand sounds like? Hear it before you invest in anything bigger." />

      <h2>How a sonic identity gets made</h2>
      <p>
        I’m Chayenne Mallari, a Sonic Identity Architect. I map your Sonic Archetype first, from your photos,
        your copy and the way you talk, then run every sound through my S.O.U.N.D. Framework: style, outcome,
        undertone, narrative and delivery. Then I make the music. It’s done for you, with no calls, and it
        comes with exclusive brand-use rights in writing.
      </p>
      <p>
        I made <em>Soft Girl Millions</em> for Leanne Lopez-Mosley as a gift, and she uses it and credits me
        publicly. For Lou Clark I made <em>The Money Medium</em>, which lives on Spotify. And you can hear my own
        signature sound <a href="/#audio-lab">right here on my site</a>.
      </p>

      <h2>Find out what yours should sound like</h2>
      <p>
        Start with the <a href="https://chayennemallari.eden.so/form/sonic-audit" target="_blank" rel="noreferrer">free Sonic Identity Audit</a>:
        nine questions, about three minutes, and you’ll meet your Sonic Archetype.
      </p>
    </ArticlePage>
  );
}
