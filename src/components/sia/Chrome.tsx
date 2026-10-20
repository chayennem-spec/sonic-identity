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
          <a href="/#method">Method</a>
          <a href="/#offers">Offers</a>
          <a href="/#audio-lab" className="sia-hide-sm">Listen</a>
        </nav>
        <a href="/" className="sia-brand sia-brand--center" aria-label="Sonic Identity Architect, home">
          <Wordmark />
          <span className="sia-tagline">Chayenne Mallari</span>
        </a>
        <div className="sia-header__side sia-header__side--right sia-mono">
          <a href="/#about" className="sia-hide-sm">About</a>
          <a href="/#faq" className="sia-hide-sm">FAQ</a>
          <a className="sia-btn sia-btn--bone sia-hide-phone" href={LINKS.blueprint} target="_blank" rel="noreferrer">
            Start here <span className="sia-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="sia-btn sia-btn--bone sia-show-phone" href="/#offers">
            Offers <span className="sia-arrow" aria-hidden="true">↓</span>
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
    // Phones go straight to the page: no opening screen between Instagram and the hero.
    if (seen || window.matchMedia("(max-width: 860px)").matches) setState("gone");
    const t = window.setTimeout(() => setState("gone"), 2700);
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
              Chayenne Mallari is the Sonic Identity Architect: sonic identity and sound branding for
              female founders, coaches and personal brands. Recognized, remembered and felt
              before you’re even seen.
            </p>
          </div>
          <div>
            <p className="sia-mono sia-footer__h">Explore</p>
            <ul className="sia-mono">
              <li><a href="/#method">The method</a></li>
              <li><a href="/#offers">Offers</a></li>
              <li><a href="/#audio-lab">Listen</a></li>
              <li><a href="/#about">About Chayenne</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="sia-mono sia-footer__h">Guides</p>
            <ul className="sia-mono">
              <li><a href="/what-is-a-sonic-identity">What is a sonic identity?</a></li>
              <li><a href="/sound-branding-for-female-founders">Sound branding for female founders</a></li>
              <li><a href="/sonic-identity-for-coaches">Sonic identity for coaches</a></li>
            </ul>
          </div>
          <div>
            <p className="sia-mono sia-footer__h">Follow the sound</p>
            <ul className="sia-mono">
              <li><a href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={LINKS.substack} target="_blank" rel="noreferrer">Substack</a></li>
              <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:hello@sonicidentityarchitect.com">Email me</a></li>
            </ul>
          </div>
        </div>
        <div className="sia-footer__base sia-mono">
          <span>© {new Date().getFullYear()} Sonic Identity Architect · Chayenne Mallari</span>
          <span>
            <a href="/terms">Terms of Purchase</a> · All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

/** Fades sections up as they scroll into view. */
export function useReveal() {
  useDrift();
  useScrollMotion();
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

/**
 * Slow film-camera drift: any element with data-drift="0.1" moves a little against the scroll.
 * Uses the CSS `translate` property via --drift, so hover transforms still work. Off for reduced motion.
 */
export function useDrift() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-drift]"));
    if (!els.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const k = parseFloat(el.dataset["drift"] || "0.1");
        const offset = (r.top + r.height / 2 - vh / 2) * -k;
        el.style.setProperty("--drift", `${offset.toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * Scroll-linked extras, all skipped for reduced motion:
 * - [data-scrollx]: slides a track sideways as its section passes through the screen.
 * - the ticker speeds up while you scroll, then settles back.
 * - [data-count]: numbers count up the first time they come into view.
 * - big buttons lean a few pixels toward the cursor (desktop only).
 */
export function useScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tracks = Array.from(document.querySelectorAll<HTMLElement>("[data-scrollx]"));
    const ticker = document.querySelector<HTMLElement>(".sia-ticker__track");
    const tickerAnim = ticker?.getAnimations?.()[0];
    let lastY = window.scrollY;
    let boost = 1;
    let raf = 0;

    const frame = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of tracks) {
        const box = el.parentElement?.getBoundingClientRect();
        if (!box || box.bottom < 0 || box.top > vh) continue;
        const k = parseFloat(el.dataset["scrollx"] || "0.3");
        const progress = (vh - box.top) / (vh + box.height); // 0 entering, 1 leaving
        const travel = Math.max(0, el.scrollWidth - (el.parentElement?.clientWidth || 0));
        el.style.transform = `translate3d(${(-progress * travel * (k / 0.35)).toFixed(1)}px,0,0)`;
      }
    };
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      boost = Math.min(4, 1 + dy / 30);
      if (tickerAnim) tickerAnim.playbackRate = boost;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const settle = window.setInterval(() => {
      if (boost > 1.01 && tickerAnim) {
        boost += (1 - boost) * 0.15;
        tickerAnim.playbackRate = boost;
      }
    }, 60);
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Count-up numbers
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        const end = parseInt(el.dataset["count"] || "0", 10);
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1400);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = "0";
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.6 });
    counters.forEach((el) => io.observe(el));

    // Magnetic buttons (fine pointer only)
    const cleanups: (() => void)[] = [];
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>(".sia-btn--red, .sia-header .sia-btn").forEach((btn) => {
        const move = (ev: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const x = (ev.clientX - (r.left + r.width / 2)) * 0.18;
          const y = (ev.clientY - (r.top + r.height / 2)) * 0.28;
          btn.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
        };
        const leave = () => (btn.style.translate = "0 0");
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearInterval(settle);
      cancelAnimationFrame(raf);
      io.disconnect();
      cleanups.forEach((f) => f());
    };
  }, []);
}
