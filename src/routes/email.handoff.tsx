import { createFileRoute, Link } from "@tanstack/react-router";
import { CARDS, ghlEmailHtml, type CardKey } from "@/lib/handoff-email";
import { SiteShell } from "@/components/site-shell";
import { useMemo, useState } from "react";

const keys: { id: CardKey; label: string }[] = [
  { id: "blank", label: "Home list (blank card)" },
  { id: "handoff", label: "Quiz · ready" },
  { id: "system", label: "Quiz · write first" },
  { id: "funnel", label: "Quiz · follow-up" },
  { id: "venture", label: "Quiz · new venture" },
];

export const Route = createFileRoute("/email/handoff")({ component: EmailHandoff });

function EmailHandoff() {
  const [key, setKey] = useState<CardKey>("blank");
  const html = useMemo(() => ghlEmailHtml(key), [key]);
  const c = CARDS[key];

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">GHL email preview</p>
        <h1 className="mt-2 text-4xl">The Handoff Card</h1>
        <p className="mt-3 text-muted">
          This is what goes in the welcome email. Pick a version, read it, copy the HTML into a GHL custom
          HTML email. Use merge field <span className="text-ink">{"{{contact.first_name}}"}</span>.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {keys.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKey(k.id)}
              className={`rounded-full border px-4 py-2 text-sm ${
                key === k.id ? "border-ink bg-ink text-cream" : "border-line bg-cream"
              }`}
            >
              {k.label}
            </button>
          ))}
        </div>

        <article className="mt-8 rounded-lg border border-line bg-cream p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-clay">{c.eyebrow}</p>
          <h2 className="mt-2 text-3xl">{c.title}</h2>
          <p className="mt-3 text-muted">{c.intro}</p>
          <ol className="mt-6 space-y-4">
            {c.lines.map((l) => (
              <li key={l.n} className="border-b border-line pb-3">
                <span className="font-display text-clay">{l.n}</span>
                <p className="mt-1">{l.t}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6">{c.close}</p>
        </article>

        <label className="mt-8 block">
          <span className="text-sm text-muted">GHL HTML — select all, paste into a custom HTML email</span>
          <textarea
            readOnly
            value={html}
            className="mt-2 h-48 w-full rounded-md border border-line bg-cream p-3 font-mono text-xs"
          />
        </label>
        <p className="mt-6 text-sm">
          <Link to="/delegate" className="text-clay underline">
            Owner quiz
          </Link>
        </p>
      </section>
    </SiteShell>
  );
}
