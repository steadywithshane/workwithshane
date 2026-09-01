import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { BLANK_LINES, CLIENT_CARDS } from "@/lib/handoff-copy";

export const Route = createFileRoute("/handoff-card")({ component: Cards });

function Cards() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">Client magnet</p>
        <h1 className="mt-2 text-4xl">The Handoff Card</h1>
        <p className="mt-4 text-muted">
          This is what they get after the quiz. The fill-in card is the same for everyone. The top block
          changes with their result. Use this to proof the GHL email.
        </p>

        <article className="mt-10 rounded-xl border border-line bg-cream p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-clay">Always include</p>
          <h2 className="mt-2 text-2xl">Write the brief before you hire the hours</h2>
          <div className="mt-6 grid gap-3">
            {BLANK_LINES.map((row) => (
              <div key={row.n} className="rounded-md border border-dashed border-line px-4 py-3">
                <p className="text-xs text-clay">
                  {row.n} · {row.label}
                </p>
                <p className="text-muted">{row.hint}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-10 space-y-6">
          {Object.values(CLIENT_CARDS).map((r) => (
            <article key={r.id} className="rounded-xl border border-line bg-cream p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-clay">If result = {r.id}</p>
              <h2 className="mt-2 text-2xl">{r.title}</h2>
              <p className="mt-2 text-muted">{r.subtitle}</p>
              <p className="mt-4 font-medium">First move</p>
              <p>{r.firstMove}</p>
              <ol className="mt-4 list-decimal space-y-1 pl-5 text-muted">
                {r.brief.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-clay">{r.trial}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
