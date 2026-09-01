import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { lastLead } from "@/lib/leads";
import { scoreClient, type ClientResult } from "@/lib/client-quiz";
import { scoreStudent, type StudentResult } from "@/lib/student-quiz";
import { CALENDLY } from "@/lib/brand";

type Search = { src?: string; result?: string };

export const Route = createFileRoute("/thanks")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    src: typeof s.src === "string" ? s.src : undefined,
    result: typeof s.result === "string" ? s.result : undefined,
  }),
  component: Thanks,
});

function Thanks() {
  const { src, result } = Route.useSearch();
  const lead = lastLead();
  const name = lead?.firstName ?? "there";

  return (
    <SiteShell tone={src === "student-kit" ? "student" : "client"}>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">You’re in</p>
        <h1 className="mt-2 text-4xl">Here you go, {name}.</h1>
        <p className="mt-4 text-muted">
          This is the magnet — on the page now, and this is the list I’ll email from when GHL is hooked up.
        </p>

        {src === "student-kit" ? <StudentKit id={result} /> : <ClientKit id={result} />}

        <div className="mt-10 flex flex-wrap gap-3">
          {src === "student-kit" ? (
            <Link to="/students" className="rounded-full border border-line px-5 py-3">
              Back to the room
            </Link>
          ) : (
            <>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-clay px-5 py-3 text-cream"
              >
                Book the 15-minute chat
              </a>
              <Link to="/" className="rounded-full border border-line px-5 py-3">
                Client home
              </Link>
            </>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function ClientKit({ id }: { id?: string }) {
  const fallback = scoreClient({ drain: "inbox", feeling: "relieved", sop: "written" });
  const map: Record<string, ClientResult> = {
    handoff: fallback,
    system: scoreClient({ drain: "inbox", feeling: "wary", sop: "head" }),
    funnel: scoreClient({ drain: "followup", feeling: "blank", sop: "none" }),
    venture: scoreClient({ drain: "venture", feeling: "blank", sop: "none" }),
  };
  const r = (id && map[id]) || fallback;
  return (
    <article className="mt-8 rounded-lg border border-line bg-cream p-6">
      <h2 className="text-2xl">The Handoff Card — {r.title}</h2>
      <p className="mt-2 text-muted">{r.subtitle}</p>
      <p className="mt-4 font-medium">First move</p>
      <p className="text-muted">{r.firstMove}</p>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        {r.brief.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted">{r.trial}</p>
    </article>
  );
}

function StudentKit({ id }: { id?: string }) {
  const fallback = scoreStudent({ done: "learning", want: "clients", stuck: "clients" });
  const map: Record<string, StudentResult> = {
    amazon: scoreStudent({ done: "amazon", want: "amazon", stuck: "tools" }),
    ghl: scoreStudent({ done: "ghl", want: "ghl", stuck: "tools" }),
    admin: scoreStudent({ done: "admin", want: "admin", stuck: "rate" }),
    operator: fallback,
  };
  const r = (id && map[id]) || fallback;
  return (
    <article className="mt-8 rounded-lg border border-line bg-cream p-6">
      <h2 className="text-2xl">{r.title}</h2>
      <p className="mt-2 text-muted">{r.subtitle}</p>
      <p className="mt-6 font-medium">Say this</p>
      <p className="font-display text-xl italic">{r.talk}</p>
      <ul className="mt-6 space-y-3">
        {r.days.map((d) => (
          <li key={d.day} className="grid grid-cols-[2.5rem_1fr] gap-3">
            <span className="font-display text-clay">D{d.day}</span>
            <span>{d.do}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
