import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "../lib/constants";
import { MeetTheLab } from "../components/brand-kit/MeetTheLab";
import { HeroSound } from "../components/sia/HeroSound";
import { Intro, SiteFooter, SiteHeader, StickyCta, useReveal } from "../components/sia/Chrome";
import {
  About,
  Apply,
  Faq,
  FinalCta,
  Guide,
  Method,
  Offers,
  // Proof,
  TheGap,
  ForHer,
  Ticker,
} from "../components/sia/Sections";

const TITLE = "Sonic Identity Architect | Chayenne Mallari";
const DESCRIPTION =
  "Signature sound for female founders, coaches and personal brands. Chayenne Mallari creates the song, audio logo and sound family that make your brand recognized, remembered and felt, without being seen.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/media/hero-poster.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/media/hero-poster.jpg` },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen" style={{ background: "#000" }}>
      <div className="sia-film-grain" aria-hidden="true" />
      <Intro />
      <SiteHeader />
      <main>
        <HeroSound />
        <Ticker />
        <TheGap />
        <ForHer />
        <Method />
        <Offers />
        {/* Proof hidden until real testimonials arrive: <Proof /> */}
        <MeetTheLab />
        <About />
        <Guide />
        <Faq />
        <Apply />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
      {/* Vintage film finish: grain + vignette over everything */}
      <div className="sia-film" aria-hidden="true" />
      <div className="sia-vignette" aria-hidden="true" />
    </div>
  );
}
