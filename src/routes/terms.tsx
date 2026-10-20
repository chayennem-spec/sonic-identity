import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Intro, SiteFooter, SiteHeader, useReveal } from "../components/sia/Chrome";
import { TERMS_SECTIONS } from "../lib/terms";
import { pageHead } from "../lib/seo";

const PATH = "/terms";
const TITLE = "Terms of Purchase | Sonic Identity Architect";
const DESCRIPTION =
  "Terms of Purchase for the Instant Recognition Anthem and Atelier: your brand-use license, what’s included, payments and how releases work.";

// Legal business name and state, to be filled in before going live.
const STUDIO_NAME = "Chayenne Mallari";
const LAST_UPDATED = "October 2026";

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION }),
  }),
  component: TermsPage,
});

/** Renders **bold** spans, plain Eden form links and email addresses inside a line of agreement text. */
function rich(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|chayennemallari\.eden\.so\/form\/[a-z-]+|hello@sonicidentityarchitect\.com)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("chayennemallari.eden.so/"))
      return (
        <a key={i} href={`https://${part}`} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    if (part === "hello@sonicidentityarchitect.com")
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    return part;
  });
}

function TermsPage() {
  useReveal();
  return (
    <div className="min-h-screen" style={{ background: "#000", overflowX: "clip" }}>
      <div className="sia-film-grain" aria-hidden="true" />
      <Intro />
      <SiteHeader />
      <main>
        <article className="sia sia-article sia-terms">
          <header className="sia-wrap sia-article__head">
            <p className="sia-mono sia-kicker">Legal · Last updated {LAST_UPDATED}</p>
            <h1 className="sia-display">
              Terms of <span className="sia-nw"><em>Purchase</em>.</span>
            </h1>
            <p className="sia-article__lead">
              The agreement behind the Instant Recognition Anthem and the Instant Recognition Atelier. Please
              read it before you apply or buy. You don’t sign anything: checking “I agree to the Terms of
              Purchase” in your Atelier application, or completing your Anthem purchase, is your acceptance.
            </p>
          </header>

          <div className="sia-wrap sia-article__body">
            <h2>Creative Commission &amp; Commercial Music License Agreement</h2>
            <p>
              <strong>Studio:</strong> {STUDIO_NAME}, doing business as Sonic Identity Architect™ ("Studio").
            </p>
            <p>
              <strong>Client:</strong> the person or business named at checkout
              ("Client").
            </p>
            <p>
              <strong>Effective date:</strong> the date Client completes payment.
            </p>
            <p>
              <strong>Project Schedule:</strong> the offer Client purchased (the Instant Recognition Anthem or the
              Instant Recognition Atelier) as described on its product page at the time of purchase, together with,
              for the Atelier, Client’s application and approval email. It sets out the deliverables, revision rounds, fee, payment
              plan, timeline and refund terms.
            </p>
            <p>
              This Agreement governs the commissioned creation, delivery, commercial use, and permitted
              distribution of custom music created by Studio for Client.
            </p>

            {TERMS_SECTIONS.map((s) => (
              <section key={s.title} className="sia-terms__section">
                <h3>{s.title}</h3>
                {s.blocks.map((b, i) =>
                  b.t === "p" ? (
                    <p key={i}>{rich(b.text)}</p>
                  ) : (
                    <ul key={i}>
                      {b.items.map((it) => (
                        <li key={it}>{rich(it)}</li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}

            <h3>Questions</h3>
            <p>
              Email <a href="mailto:hello@sonicidentityarchitect.com">hello@sonicidentityarchitect.com</a> before
              you apply. I’m happy to walk you through anything here, in writing.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
      <div className="sia-film" aria-hidden="true" />
      <div className="sia-vignette" aria-hidden="true" />
    </div>
  );
}
