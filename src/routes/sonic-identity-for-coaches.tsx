import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, InlineCta, Pull, type QA } from "../components/sia/Article";
import { articleBlock, faqBlock, ldScripts, pageHead } from "../lib/seo";

const PATH = "/sonic-identity-for-coaches";
const TITLE = "Sonic Identity for Coaches | Sound Branding for Your Programs";
const DESCRIPTION =
  "A sonic identity for coaches: signature songs for your programs, masterclasses, podcast and stage, made from your message and licensed only to you. How it works, where it plays, and how to start.";

const FAQ_ITEMS: QA[] = [
  {
    q: "Why would a coach need a sonic identity?",
    a: "Because your clients experience you in sound more than you think: your podcast, your masterclass waiting room, your launch videos, your program welcome, your walk-on at your retreat. A sonic identity makes all of those feel like the same world, and like you.",
  },
  {
    q: "Can I have a song for my signature program?",
    a: "Yes. In the Atelier you spend your five tracks your way, and a song for each offer is a beautiful use of them, so the people buying your program can hear what it feels like to be inside it.",
  },
  {
    q: "I talk in most of my content. Will a song compete with my voice?",
    a: "It doesn’t have to. One of your tracks can be a beat with no vocals that sits under your voice on talking reels, lives and webinars, so your content sounds like you without fighting you.",
  },
  {
    q: "Can I play it in my Zoom calls and group programs?",
    a: "Yes. Your exclusive brand-use rights cover your programs and courses, webinars, livestreams and replays, as well as content, ads, events and your podcast. They’re written into your agreement.",
  },
  {
    q: "Is this AI music?",
    a: "AI is one of my instruments, the way a producer uses software. The strategy, the lyrics, the taste and every final call are mine, built around you.",
  },
];

export const Route = createFileRoute("/sonic-identity-for-coaches")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, type: "article" }),
    scripts: ldScripts(articleBlock({ path: PATH, title: TITLE, description: DESCRIPTION }), faqBlock(FAQ_ITEMS)),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      kicker="Guide · For coaches"
      title="A sonic identity for"
      em="coaches"
      lead="Your clients hear you before they ever work with you: on your podcast, in your masterclass waiting room, under your launch video. A sonic identity makes every one of those moments sound like the same world. Yours."
      faq={FAQ_ITEMS}
      related={[
        { href: "/what-is-a-sonic-identity", label: "What is a sonic identity?" },
        { href: "/sound-branding-for-female-founders", label: "Sound branding for female founders" },
      ]}
    >
      <h2>Your coaching brand already has a sound. Nobody chose it.</h2>
      <p>
        Monday your podcast opens with a stock loop. Wednesday your launch reel uses a trending sound. Friday
        your masterclass waiting room plays your Spotify playlist. Same audience, three different brands, as
        far as their ears know.
      </p>
      <p>
        You’d never use three different logos in one week. A sonic identity is how you stop doing it with
        sound.
      </p>

      <h2>What a sonic identity looks like for a coach</h2>
      <ul>
        <li>
          <strong>A song for your signature program.</strong> Built from the transformation you sell, so the
          people buying it can hear what it feels like to be inside it.
        </li>
        <li>
          <strong>A beat for your talking content.</strong> No vocals, made to sit under your voice on reels,
          lives and webinars.
        </li>
        <li>
          <strong>A walk-on.</strong> For your retreat, your summit, your stage. The moment your room realizes
          you’re here.
        </li>
        <li>
          <strong>Your Sonic Signature.</strong> The two to five seconds that open every episode and every reel,
          until your people know it’s you with their eyes closed.
        </li>
        <li>
          <strong>A sound guide.</strong> So your podcast editor, your launch manager and your event producer all
          use the right track, the right way.
        </li>
      </ul>

      <Pull>Your program has a feeling. Your clients should be able to hear it.</Pull>

      <h2>The moments that matter most for coaches</h2>
      <h3>The masterclass waiting room</h3>
      <p>
        Three minutes before you go live, the room is filling up and the music is setting the tone for the next
        hour. That music should already be unmistakably yours, not a playlist that isn’t licensed for your
        business anyway.
      </p>
      <h3>The launch</h3>
      <p>
        Every launch that starts with a new trending sound starts from zero. A launch track that belongs to your
        brand carries the feeling from one launch to the next, so your audience recognizes the season before you
        announce it.
      </p>
      <h3>The program welcome</h3>
      <p>
        The first video your new client watches is the moment she decides she made the right choice. Give it a
        sound that feels like the inside of your world.
      </p>

      <InlineCta line="Hear your coaching brand’s sound directions the same day." />

      <h2>How it works (no calls, promise)</h2>
      <p>
        You have enough meetings. Everything happens in writing and voice notes: a written intake, your
        favorite lines from your own copy, a voice memo or two, and your reactions to your first listen. I map
        your Sonic Archetype first, then make the music, using my S.O.U.N.D. Framework.
      </p>
      <p>
        When it’s delivered, you get exclusive brand-use rights in writing for your content, ads, launches, events,
        podcast and programs. No expiry, no renewals, and I never license your sound to another brand.
      </p>

      <h2>Where to start</h2>
      <p>
        If you’re curious, take the <a href="https://chayennemallari.eden.so/form/sonic-audit" target="_blank" rel="noreferrer">free Sonic
        Identity Audit</a> and meet your Sonic Archetype. If you want to hear it first, start with the Sonic
        Blueprint. Want one song now? Get the Anthem. And if you want the whole brand world built for you, apply
        for the Atelier. I read every application myself.
      </p>
    </ArticlePage>
  );
}
