import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "../lib/constants";
import { faqBlock, ldScripts, pageHead } from "../lib/seo";
import { MeetTheLab } from "../components/brand-kit/MeetTheLab";
import { HeroSound } from "../components/sia/HeroSound";
import { Intro, SiteFooter, SiteHeader, StickyCta, useReveal } from "../components/sia/Chrome";
import {
  About,
  Faq,
  FAQ,
  FinalCta,
  Guide,
  Method,
  Offers,
  // Proof,
  Rights,
  TheGap,
  ForHer,
  Ticker,
} from "../components/sia/Sections";

const TITLE = "Sonic Identity & Sound Branding for Female Founders | Chayenne Mallari";
const DESCRIPTION =
  "Sonic Identity Architect Chayenne Mallari makes signature songs and sound branding for female founders, coaches and personal brands, so people know it's you before you say a word. Done for you, exclusive to your brand.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({ path: "/", title: TITLE, description: DESCRIPTION }),
    scripts: ldScripts(
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Sonic Identity Architect", url: SITE_URL },
      faqBlock(FAQ),
    ),
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
        <Rights />
        <Offers />
        {/* Proof hidden until real testimonials arrive: <Proof /> */}
        <MeetTheLab />
        <About />
        <Guide />
        <Faq />
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
