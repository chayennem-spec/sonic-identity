import type { ReactNode } from "react";
import { LINKS } from "../../lib/constants";
import { Intro, SiteFooter, SiteHeader, StickyCta, useReveal } from "./Chrome";
import { FinalCta } from "./Sections";

export type QA = { q: string; a: string };

/** Long-form guide page in the site's editorial style. */
export function ArticlePage({
  kicker,
  title,
  em,
  lead,
  children,
  faq,
  related,
  punct = ".",
}: {
  kicker: string;
  /** Headline words before the lipstick word. */
  title: string;
  /** The lipstick word(s) at the end of the headline (no trailing period). */
  em: string;
  lead: string;
  children: ReactNode;
  faq: QA[];
  related: { href: string; label: string }[];
  punct?: string;
}) {
  useReveal();
  return (
    <div className="min-h-screen" style={{ background: "#000", overflowX: "clip" }}>
      <div className="sia-film-grain" aria-hidden="true" />
      <Intro />
      <SiteHeader />
      <main>
        <article className="sia sia-article">
          <header className="sia-wrap sia-article__head">
            <p className="sia-mono sia-kicker">{kicker}</p>
            <h1 className="sia-display">
              {title} <span className="sia-nw"><em>{em}</em>{punct}</span>
            </h1>
            <p className="sia-article__lead">{lead}</p>
            <div className="sia-hero__ctas">
              <a className="sia-btn sia-btn--red" href={LINKS.audit} target="_blank" rel="noreferrer">
                Take the free audit <span className="sia-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="sia-btn sia-btn--ghost" href="/#audio-lab">
                Hear my signature sound
              </a>
            </div>
          </header>

          <div className="sia-wrap sia-article__body">{children}</div>

          <section className="sia-wrap sia-article__faq sia-faq" aria-labelledby="article-faq">
            <h2 id="article-faq" className="sia-article__h2">Questions, answered</h2>
            <div>
              {faq.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <nav className="sia-wrap sia-article__related" aria-label="More guides">
            <p className="sia-mono sia-kicker">Keep reading</p>
            <ul>
              {related.map((r) => (
                <li key={r.href}>
                  <a href={r.href}>
                    {r.label} <span className="sia-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="/">
                  Back to Sonic Identity Architect <span className="sia-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </nav>
        </article>
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
      <div className="sia-film" aria-hidden="true" />
      <div className="sia-vignette" aria-hidden="true" />
    </div>
  );
}

/** A pull-quote style line inside an article. */
export function Pull({ children }: { children: ReactNode }) {
  return <p className="sia-article__pull">{children}</p>;
}

/** Mid-article call to action. */
export function InlineCta({ line }: { line: string }) {
  return (
    <aside className="sia-article__cta">
      <p>{line}</p>
      <div className="sia-hero__ctas">
        <a className="sia-btn sia-btn--red" href={LINKS.blueprint} target="_blank" rel="noreferrer">
          Start with the Blueprint <span className="sia-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="sia-btn sia-btn--ghost" href={LINKS.apply} target="_blank" rel="noreferrer">
          Apply for the Anthem or Atelier <span className="sia-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </aside>
  );
}
