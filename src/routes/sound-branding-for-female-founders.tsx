import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, InlineCta, Pull, type QA } from "../components/sia/Article";
import { articleBlock, faqBlock, ldScripts, pageHead } from "../lib/seo";

const PATH = "/sound-branding-for-female-founders";
const TITLE = "Sound Branding for Female Founders | Sonic Identity Architect";
const DESCRIPTION =
  "Sound branding for female founders: a signature song, a sonic signature and a sound guide, made for your brand and licensed only to you. Here's what it is, where it plays, and how Chayenne Mallari builds it.";

const FAQ_ITEMS: QA[] = [
  {
    q: "What is sound branding for a female founder?",
    a: "It's the part of your brand people hear: a signature song built from your message, a few seconds people learn to recognize as you, cuts for reels, ads and your podcast, and a guide so your team uses it the same way every time. Big brands call it sonic branding. For a founder, it's simply what your brand sounds like.",
  },
  {
    q: "Do I need a big audience for sound branding to matter?",
    a: "No. You need places where sound already plays: reels, a podcast, launches, webinars, a stage. If sound is already in your content, it's already shaping how people feel about you. Sound branding just makes it yours.",
  },
  {
    q: "Can I use my sound in paid ads?",
    a: "Yes. Your signature sound comes with exclusive usage rights in writing, and paid ads are on the list, along with content, launches, events, your podcast and your programs. No expiry, no renewals, and I never license your sound to another brand.",
  },
  {
    q: "Do I have to get on calls?",
    a: "No. Everything happens in writing and voice notes. You fill in a written intake, react to your first listen in a voice note, and I build.",
  },
  {
    q: "Where do I start?",
    a: "Take the free Sonic Identity Audit to meet your Sonic Archetype, or start with the Sonic Blueprint to hear your brand's sound directions the same day. If you already know you want it done for you, apply for the Anthem or the Atelier.",
  },
];

export const Route = createFileRoute("/sound-branding-for-female-founders")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, type: "article" }),
    scripts: ldScripts(articleBlock({ path: PATH, title: TITLE, description: DESCRIPTION }), faqBlock(FAQ_ITEMS)),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      kicker="Guide · Sound branding"
      title="Sound branding for female"
      em="founders"
      lead="You've branded everything people can see. The photos, the fonts, the website you fought for. Sound branding is the part they hear, and right now it's probably whatever was trending this morning."
      faq={FAQ_ITEMS}
      related={[
        { href: "/what-is-a-sonic-identity", label: "What is a sonic identity?" },
        { href: "/sonic-identity-for-coaches", label: "Sonic identity for coaches" },
      ]}
    >
      <h2>The part of your brand nobody designed</h2>
      <p>
        You hired the photographer you rebook every season. You approved the serif after rejecting four
        others. Your brand guide covers your colors, your photo direction and probably a mood board you're
        proud of. Then your editor drops a trending song under your launch video, and your brand sounds like
        the woman before you in the feed.
      </p>
      <p>
        That's the gap sound branding closes. Not more content. A sound made from your brand, so the second
        it plays, people know it's you.
      </p>

      <h2>What sound branding actually is (for a founder)</h2>
      <p>
        Big companies call it sonic branding: the Netflix "ta-dum," the few notes you hear and instantly know
        who's talking. For a female founder, it's the same idea, sized for a personal brand:
      </p>
      <ul>
        <li>
          <strong>A signature song.</strong> Built from your message, your words and the feeling your people
          carry home. It plays when the moment matters: your launch, your walk-on, your podcast open.
        </li>
        <li>
          <strong>A sonic signature.</strong> Two to five seconds people learn to recognize as you, the opening
          of every reel and every episode.
        </li>
        <li>
          <strong>Cuts for real life.</strong> Full, 30-second and 15-second versions for reels, stories, ads
          and your podcast.
        </li>
        <li>
          <strong>A sound guide.</strong> One page that tells your editor which track goes where, so nobody on
          your team ever has to guess.
        </li>
      </ul>

      <h2>Why trending audio isn't a strategy</h2>
      <p>
        Trending audio is great for reach. Use it. Just know what you're getting: a week of relevance, attached
        to somebody else's name. When someone loves your reel and taps the sound, they land on a page full of
        strangers using the same song. Your best moment becomes their traffic.
      </p>
      <p>
        There's also the part nobody likes to say out loud: most popular songs aren't cleared for ads, and a
        personal streaming account doesn't license a song for your business. That reel you finally want to put
        money behind is the one that gets muted.
      </p>
      <Pull>Discovery sound gets you seen. Signature sound gets you remembered. You need both.</Pull>

      <h2>Where your sound goes to work</h2>
      <ul>
        <li>The first three seconds of every reel, so people know it's you before they see your face.</li>
        <li>Your launch videos, so every launch builds on the last instead of starting from zero.</li>
        <li>Your walk-on at events, the one moment in your room you didn't choose until now.</li>
        <li>Your podcast intro and outro, instead of the stock loop you've been quietly over for two years.</li>
        <li>Webinars, masterclass waiting rooms, sales pages and paid ads.</li>
      </ul>

      <InlineCta line="Want to hear what your brand could sound like, tonight?" />

      <h2>How I build it</h2>
      <p>
        I spent twenty years behind the chair reading high-net-worth clients before they said a word. Now I do
        that with sound. Every brand I build goes through my S.O.U.N.D. Framework: the style that fits who you
        actually are, the outcome your people should feel, the undertone underneath, the narrative your sound
        tells, and how it's delivered across your platforms.
      </p>
      <p>There are three ways in:</p>
      <ul>
        <li>
          <strong>The Sonic Blueprint.</strong> Self-serve, about 20 minutes. Your archetype, three sound
          directions and prompts so you hear a first sketch the same day.
        </li>
        <li>
          <strong>The Instant Recognition Anthem.</strong> One signature song with its cuts, by invitation.
        </li>
        <li>
          <strong>The Instant Recognition Atelier.</strong> Your brand's full soundtrack: five original tracks
          spent your way (a song for each offer, your anthem, a walk-on, a beat for your reels), plus your
          sonic signature and sound guide.
        </li>
      </ul>
      <p>
        No calls for any of them. A written intake, voice notes on your time, and exclusive usage rights in
        writing. I never license your sound to another brand.
      </p>

      <h2>The founder this is for</h2>
      <p>
        She's built the business, has the team and books the stage. She wears the tailored piece, not the
        trending one, and wants her brand to do the same. She has zero time for a course. She just wants it
        handled, and she wants the room to know it's her before she says a word.
      </p>
      <p>
        Nodding? Start with the <a href="https://chayennemallari.eden.so/form/sonic-audit">free Sonic Identity
        Audit</a>. Nine questions, three minutes, and you'll know exactly where your sound stands.
      </p>
    </ArticlePage>
  );
}
