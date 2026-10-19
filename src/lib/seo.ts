import { LINKS, SITE_URL } from "./constants";

export const BRAND = "Sonic Identity Architect";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const SAME_AS = [LINKS.instagram, LINKS.linkedin, LINKS.substack];

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#chayenne`,
  name: "Chayenne Mallari",
  jobTitle: "Sonic Identity Architect",
  description:
    "Sonic Identity Architect who creates signature songs and sound branding for female founders, coaches and personal brands. Certified hypnotherapist and NLP trainer, author of The Sonic Imprint.",
  url: SITE_URL,
  image: `${SITE_URL}/images/chayenne-editorial.webp`,
  sameAs: SAME_AS,
  knowsAbout: [
    "Sonic identity",
    "Sound branding",
    "Sonic branding",
    "Audio branding",
    "Personal branding",
    "Signature songs",
    "Brand music",
  ],
};

const service = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: BRAND,
  url: SITE_URL,
  image: OG_IMAGE,
  description:
    "Sonic identity and sound branding for female founders, coaches and personal brands: signature songs, a sonic signature and a sound guide, with exclusive usage rights. Done for you, no calls.",
  founder: { "@id": `${SITE_URL}/#chayenne` },
  areaServed: "Worldwide",
  sameAs: SAME_AS,
  serviceType: ["Sonic identity", "Sound branding", "Signature song creation", "Audio logo"],
};

/** JSON-LD script entries for TanStack head(). */
export function ldScripts(...blocks: object[]) {
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@graph": [person, service, ...blocks] }),
    },
  ];
}

export function faqBlock(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleBlock(o: { path: string; title: string; description: string }) {
  return {
    "@type": "Article",
    headline: o.title,
    description: o.description,
    url: `${SITE_URL}${o.path}`,
    image: OG_IMAGE,
    author: { "@id": `${SITE_URL}/#chayenne` },
    publisher: { "@id": `${SITE_URL}/#business` },
    datePublished: "2026-10-19",
  };
}

/** Standard meta + canonical for a page. */
export function pageHead(o: { path: string; title: string; description: string; type?: string }) {
  const url = `${SITE_URL}${o.path}`;
  return {
    meta: [
      { title: o.title },
      { name: "description", content: o.description },
      { property: "og:title", content: o.title },
      { property: "og:description", content: o.description },
      { property: "og:type", content: o.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: BRAND },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: o.title },
      { name: "twitter:description", content: o.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
