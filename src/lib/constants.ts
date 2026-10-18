// Production origin, used where a full URL is required (og:image / twitter:image).
export const SITE_URL = "https://thesonicidentity.com";

// All images are self-hosted from /public/images (moved off the GoHighLevel CDN).
export const ASSETS = {
  // Chayenne Mallari portrait on alligator skin texture (hero, The Architect, social preview)
  heroAlligatorBg: "/images/chayenne-portrait.png",
  alligatorSkin: "/images/chayenne-portrait.png",
  chayennePortrait: "/images/chayenne-portrait.png",
  alligatorSkinAlt: "/images/croc-leather-texture.jpg",
  // Brand-board slide "Personality & Voice" (was misnamed heroPortrait)
  brandBoardPersonality: "/images/brand-board-personality-voice.png",
  soundStudio: "/images/brand-board-visual-style.png",
  acousticAtmosphere: "/images/brand-board-logo-wordmark.png",
  brandCollateral: "/images/brand-board-typography.png",
  editorialPortrait: "/images/brand-board-color-palette.jpg",
  // Same portrait cut onto plain black (Oct 2026)
  portraitBlack: "/images/chayenne-portrait-black.png",
};

// Shown only in the inquiry form's error state, so the visitor still has a way to reach Chayenne.
// Offer links. The Sonic Blueprint sells through Eden's checkout; Anthem and Atelier
// are drafts in Eden, so their buttons go to the inquiry form until they're published.
export const LINKS = {
  blueprint: "https://chayennemallari.eden.so/",
  instagram: "https://instagram.com/chayennemallari",
  substack: "https://chayennemallari.substack.com",
  linkedin: "https://linkedin.com/in/chayennemallari",
};

// Hero media. Drop the audio logo file into /public/media and set its path here;
// until then the "Turn your sound on" button replays the video and its sound rings.
export const HERO_MEDIA = {
  video: "/media/hero-headphones.mp4",
  poster: "/media/hero-poster.jpg",
  audioLogo: "",
};

export const CONTACT = {
  email: "chayennemallari@gmail.com",
};

export const CRM_CONFIG = {
  endpoint: "https://backend.leadconnectorhq.com/external-tracking/events",
  locationId: "UrtSUZP8lUbC6kubja9Z",
  trackingId: "tk_86d76fed8e7045919a109051b39005ce",
  projectId: "1790806133931036680",
  customFields: {
    package: "wL782sGzVwRK0ks6RgQI",
    industry: "whDnocSMzqXEUTC8UPXC",
    brandStory: "klOllZgm9RYYpytEQ7O2",
  },
};
