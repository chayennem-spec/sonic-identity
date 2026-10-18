import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "../lib/constants";
import { SonicInquiryForm } from "../components/SonicInquiryForm";
import { MeetTheLab } from "../components/brand-kit/MeetTheLab";
import { HeroSound } from "../components/sia/HeroSound";
import { Intro, SiteFooter, SiteHeader, StickyCta, useReveal } from "../components/sia/Chrome";
import {
  About,
  Faq,
  FinalCta,
  Guide,
  Method,
  Offers,
  Proof,
  TheGap,
  Ticker,
} from "../components/sia/Sections";

const TITLE = "Sonic Identity Architect | Chayenne Mallari";
const DESCRIPTION =
  "Signature sound for founders, coaches and personal brands. Chayenne Mallari composes the song, audio logo and sound family that make your brand recognized, remembered and felt, without being seen.";

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
      <Intro />
      <SiteHeader />
      <main>
        <HeroSound />
        <Ticker />
        <TheGap />
        <Method />
        <Offers />
        <Proof />
        <MeetTheLab />
        <About />
        <Guide />
        <Faq />
        <section className="sia sia-rule" style={{ padding: "110px 0" }}>
          <div className="sia-wrap" style={{ maxWidth: 1100 }}>
            <SonicInquiryForm />
          </div>
        </section>
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
