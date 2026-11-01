import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, type QA } from "../components/sia/Article";
import { LINKS } from "../lib/constants";
import { articleBlock, faqBlock, ldScripts, pageHead } from "../lib/seo";

const PATH = "/sonic-archetypes";
const TITLE = "Hear the 8 Sonic Archetypes | Instant Recognition";
const DESCRIPTION =
  "Press play on all eight Sonic Archetypes in the Instant Recognition system. Hear the energy, then find out which one is yours with the free Sonic Identity Audit.";

type Archetype = {
  slug: string;
  name: string;
  hook: string;
  sound: string;
  feel: string;
  always: string;
  flexes: string;
  /** Flip to true once the 30-second demo is in /public/audio/archetypes/<slug>.mp3 */
  ready: boolean;
};

const ARCHETYPES: Archetype[] = [
  {
    slug: "power-authority",
    name: "Power Authority",
    hook: "The Room Goes Quiet",
    sound: "Moody luxe hip-hop",
    feel: "You don’t raise your voice. You don’t have to. The room goes quiet when you walk in.",
    always: "Slow and controlled, heavy low end, lots of space, a voice that never rushes.",
    flexes: "Hip-hop or R&B, moody or polished, rapped or sung.",
    ready: false,
  },
  {
    slug: "boss-energy",
    name: "Boss Energy",
    hook: "Built It Myself",
    sound: "Bouncy hip-hop",
    feel: "You walk in like the deal’s already signed, and your people can’t help nodding along.",
    always: "A confident bounce, punchy drums, swagger in the voice, a hook people chant back.",
    flexes: "Hip-hop, R&B-rap or pop, gritty or glossy, rapped or sung.",
    ready: false,
  },
  {
    slug: "luxury-icon",
    name: "Luxury Icon",
    hook: "Never Over-Explain",
    sound: "Luxury deep house",
    feel: "Quiet because you can afford to be. They lean in instead of scrolling.",
    always: "Space, restraint, one soft hook, nothing over-explained.",
    flexes: "Deep house, slow R&B or lounge, whispered or sung, rooftop or candlelit.",
    ready: false,
  },
  {
    slug: "feminine-sovereignty",
    name: "Feminine Sovereignty",
    hook: "Falls Into My Rhythm",
    sound: "Tribal Afro house",
    feel: "You don’t chase and you don’t compete. The room falls into your rhythm.",
    always: "An unhurried groove, a rich warm voice, rhythm you feel in your hips, chants that pull people in.",
    flexes: "Afro house, organic house or slow R&B, tribal or polished, sunset or after dark.",
    ready: false,
  },
  {
    slug: "magnetic-healer",
    name: "Magnetic Healer",
    hook: "The Whole Room Exhales",
    sound: "Organic downtempo",
    feel: "They don’t know why, they just trust you. Around you, the whole room exhales.",
    always: "Slow and soft, a voice close enough to touch, a heartbeat pulse, warmth that lets people breathe out.",
    flexes: "Organic downtempo, ambient or soft R&B, tribal or airy, hummed or sung.",
    ready: false,
  },
  {
    slug: "playful-charisma",
    name: "Playful Charisma",
    hook: "The Room Gets Up",
    sound: "Nu-disco funk-pop",
    feel: "Everybody’s louder when you’re in it. Fun isn’t the extra, it’s the strategy.",
    always: "Bright energy, a sing-along hook, a rhythm that gets people moving.",
    flexes: "Nu-disco, funk-pop or dance-pop, retro or modern, solo or a whole crowd singing.",
    ready: false,
  },
  {
    slug: "rebel-energy",
    name: "Rebel Energy",
    hook: "Right People Grin",
    sound: "Alt-rock punk-pop",
    feel: "You said it out loud and you’d say it again. Somebody squirms, the right people grin.",
    always: "Contrast, grit, sudden stops, a voice that doesn’t soften the truth.",
    flexes: "Alt-rock, punk-pop or gritty electronic, raw or polished, shouted or spoken.",
    ready: false,
  },
  {
    slug: "visionary-future",
    name: "Visionary Future",
    hook: "Wait, What Is That?",
    sound: "Soaring synthwave",
    feel: "You saw it first, and you hand them the map. They hear you and think, wait, what is that?",
    always: "A build that keeps climbing, wide open space, a sound that feels like where things are going.",
    flexes: "Synthwave, cinematic electronic or airy pop, pulsing or floating, soaring or whispered.",
    ready: false,
  },
];

const FAQ_ITEMS: QA[] = [
  {
    q: "What is a Sonic Archetype?",
    a: "It’s the energy people feel from your brand before you say a word. Instant Recognition maps every personal brand to one of eight archetypes, and that archetype shapes how your sound should move, breathe and land.",
  },
  {
    q: "Is one of these demos my song?",
    a: "No. Each demo is one way that archetype can sound. Your Anthem keeps your archetype’s energy and builds everything else around you: your words, your world and your people. It comes with exclusive brand-use rights in writing, never licensed to another brand.",
  },
  {
    q: "I like the energy but not the genre. Is that a problem?",
    a: "Not at all. The archetype is the energy, not the genre. Power Authority can be hip-hop or slow R&B. Feminine Sovereignty can be Afro house or something sultry and slow. The “Flexes” line on each one shows how far it can stretch.",
  },
  {
    q: "How do I find out which one I am?",
    a: "Take the free Sonic Identity Audit. Nine quick questions, and it names your Sonic Archetype.",
  },
];

export const Route = createFileRoute("/sonic-archetypes")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, type: "article" }),
    scripts: ldScripts(articleBlock({ path: PATH, title: TITLE, description: DESCRIPTION }), faqBlock(FAQ_ITEMS)),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      kicker="Instant Recognition · The 8 Sonic Archetypes"
      title="Hear the 8 Sonic"
      em="Archetypes"
      lead="Same energy, endless ways to sound it. Each of these is one take on an archetype. Press play on yours, then picture it built around your voice, your world and your people."
      faq={FAQ_ITEMS}
      related={[
        { href: "/what-is-a-sonic-identity", label: "What is a sonic identity?" },
        { href: "/sound-branding-for-female-founders", label: "Sound branding for female founders" },
      ]}
    >
      <p>
        Don’t know yours yet?{" "}
        <a href={LINKS.audit} target="_blank" rel="noreferrer">Take the free Sonic Identity Audit</a>. It takes
        nine quick questions, and then come back and press play.
      </p>

      <div className="sia-arch">
        {ARCHETYPES.map((a, i) => (
          <section key={a.slug} id={a.slug} className="sia-arch__card" aria-labelledby={`${a.slug}-h`}>
            <p className="sia-mono sia-arch__num">
              {String(i + 1).padStart(2, "0")} · {a.sound}
            </p>
            <h2 id={`${a.slug}-h`}>{a.name}</h2>
            <p className="sia-arch__hook">“{a.hook}”</p>
            <p className="sia-arch__feel">{a.feel}</p>

            {a.ready ? (
              <audio
                className="sia-arch__player"
                controls
                preload="none"
                src={`/audio/archetypes/${a.slug}.mp3`}
                aria-label={`${a.name} demo`}
              />
            ) : (
              <p className="sia-mono sia-arch__soon">First listen dropping soon</p>
            )}

            <dl className="sia-arch__rules">
              <div>
                <dt>Always</dt>
                <dd>{a.always}</dd>
              </div>
              <div>
                <dt>Flexes</dt>
                <dd>{a.flexes}</dd>
              </div>
            </dl>

            <a className="sia-btn sia-btn--red sia-arch__cta" href={LINKS.anthem} target="_blank" rel="noreferrer">
              Get your {a.name} Anthem <span className="sia-arrow" aria-hidden="true">↗</span>
            </a>
          </section>
        ))}
      </div>
    </ArticlePage>
  );
}
