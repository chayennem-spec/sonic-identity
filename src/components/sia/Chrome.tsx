import { useEffect, useState } from "react";
import { LINKS } from "../../lib/constants";

// Header, footer and the mobile sticky call to action.

export function Wordmark({ as: Tag = "span" }: { as?: "span" | "div" }) {
  return <Tag className="sia-wordmark">Sonic Identity Architect</Tag>;
}

export function SiteHeader() {
  return (
    <header className="sia sia-header">
      <div className="sia-wrap sia-header__bar">
        <nav className="sia-header__side sia-header__side--left sia-mono" aria-label="Main">
          <a href="#method">Method</a>
          <a href="#offers">Offers</a>
          <a href="#audio-lab" className="sia-hide-sm">Listen</a>
        </nav>
        <a href="#top" className="sia-brand sia-brand--center" aria-label="Sonic Identity Architect, home">
          <Wordmark />
          <span className="sia-tagline">Chayenne Mallari</span>
        </a>
        <div className="sia-header__side sia-header__side--right sia-mono">
          <a href="#about" className="sia-hide-sm">About</a>
          <a href="#faq" className="sia-hide-sm">FAQ</a>
          <a className="sia-btn sia-btn--bone" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Start here <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/** Saint Laurent-style opening: streaked black screen, wordmark fades up, then lifts.
 *  Runs on CSS alone so it can never trap a visitor; a tap skips it. Shown once per visit. */
export function Intro() {
  const [state, setState] = useState<"show" | "skip" | "gone">("show");
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("sia-intro") === "1";
      // Deferred so the hero video reads "first visit" before this marks it seen.
      window.setTimeout(() => {
        try {
          sessionStorage.setItem("sia-intro", "1");
        } catch {
          /* ignore */
        }
      }, 0);
    } catch {
      /* storage blocked: just play it */
    }
    if (seen) setState("gone");
    const t = window.setTimeout(() => setState("gone"), 4200);
    return () => window.clearTimeout(t);
  }, []);
  if (state === "gone") return null;
  return (
    <div
      className={`sia sia-intro${state === "skip" ? " is-skipped" : ""}`}
      onClick={() => {
        setState("skip");
        window.setTimeout(() => setState("gone"), 520);
      }}
      aria-hidden="true"
    >
      <div className="sia-intro__rain" />
      <div className="sia-intro__mark">
        <strong>Sonic Identity</strong>
        <span>Architect</span>
      </div>
    </div>
  );
}

export function StickyCta() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 1900;
      setShown(window.scrollY > window.innerHeight * 0.9 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sia sia-sticky${shown ? " is-shown" : ""}`} aria-hidden={!shown}>
      <a
        className="sia-btn sia-btn--red"
        href={LINKS.blueprint}
        target="_blank"
        rel="noreferrer"
        tabIndex={shown ? 0 : -1}
      >
        Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="sia sia-footer">
      <div className="sia-wrap">
        <div className="sia-footer__grid">
          <div>
            <Wordmark as="div" />
            <span className="sia-tagline">Chayenne Mallari</span>
            <p className="sia-footer__line">
              Signature sound for female founders, coaches and personal brands. Recognized, remembered and
              felt, without being seen.
            </p>
          </div>
          <div>
            <h4 className="sia-mono">Explore</h4>
            <ul className="sia-mono">
              <li><a href="#method">The method</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#audio-lab">Audio lab</a></li>
              <li><a href="#about">About Chayenne</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="sia-mono">Follow the sound</h4>
            <ul className="sia-mono">
              <li><a href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={LINKS.substack} target="_blank" rel="noreferrer">Substack</a></li>
              <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="#inquiry">Get in touch</a></li>
            </ul>
          </div>
        </div>
        <div className="sia-footer__base sia-mono">
          <span>© {new Date().getFullYear()} Sonic Identity Architect · Chayenne Mallari</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

/** Fades sections up as they scroll into view. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".sia-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
