import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EmailGate } from "@/components/email-gate";
import { CALENDLY } from "@/lib/brand";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

const chips = [
  {
    label: "The inbox never ends",
    line: "Inbox first. I’d triage, draft follow-ups, and keep threads from dying in silence.",
  },
  {
    label: "Scheduling ping-pong",
    line: "Scheduling. I’d own the calendar, confirmations, and the back-and-forth so you only show up.",
  },
  {
    label: "Leads go quiet",
    line: "Follow-ups. I’d run a simple cadence so warm leads don’t go cold while you’re with clients.",
  },
  {
    label: "Social + random admin",
    line: "Light social and admin. I’d keep the page alive and the busywork off your desk.",
  },
  {
    label: "I want to start something new",
    line: "New venture setup. I’d take the research and messy setup so you can move instead of staring at a blank start.",
  },
  {
    label: "I’m doing all of it",
    line: "All of it, a little. That’s common. We’d pick one lane for the trial so you can feel the difference fast.",
  },
];

function Home() {
  const [line, setLine] = useState<string | null>(null);

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted">
            <span className="size-2 rounded-full bg-good" />
            Founder-led · Philippines
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            Your week gets <em className="text-clay">quieter</em> when someone steady takes the admin.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            I help coaches, agents, and service professionals with follow-ups, scheduling, and the work that
            keeps stealing client time. Short chat first. Small trial if it fits.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-clay px-5 py-3 font-medium text-cream hover:bg-clay-deep"
            >
              Book a 15-minute chat
            </a>
            <Link to="/delegate" className="rounded-full border border-line px-5 py-3">
              Not sure what to hand off?
            </Link>
          </div>
        </div>
        <div className="relative justify-self-center">
          <img
            src="/shane.jpg"
            alt="Shane Ross Lao"
            className="aspect-square w-full max-w-md rounded-[42%_58%_48%_52%/42%_38%_62%_58%] object-cover shadow-[0_30px_60px_rgba(27,23,18,0.12)]"
          />
          <div className="absolute right-0 bottom-8 max-w-52 rounded-lg border border-line bg-cream p-4 shadow-[0_20px_40px_rgba(27,23,18,0.1)]">
            <p className="font-medium">Start with a trial</p>
            <p className="text-sm text-muted">About 10 hours. Test the fit before anything bigger.</p>
          </div>
        </div>
      </section>

      <section className="mx-3 rounded-xl bg-ink px-5 py-14 text-cream sm:mx-6 sm:px-10">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">Interactive</p>
        <h2 className="mt-2 text-3xl text-cream sm:text-4xl">What’s eating most of your week?</h2>
        <p className="mt-3 max-w-xl text-cream/70">
          Tap the one that feels true. Then book a time — or take the two-minute quiz if you want the written
          handoff first.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => setLine(c.line)}
              className={`rounded-full border px-4 py-2.5 text-sm ${
                line === c.line ? "border-clay bg-clay" : "border-cream/20 hover:border-cream/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {line ? <p className="mt-6 font-display text-xl italic text-cream">{line}</p> : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="rounded-full bg-clay px-5 py-3 text-cream">
            Lock a time
          </a>
          <Link to="/delegate" className="rounded-full border border-cream/20 px-5 py-3">
            Get the Handoff Card
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">How it works</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Simple on purpose.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["01", "15-minute chat", "We name the task that’s actually draining you. If I’m not the right fit, I’ll say so."],
            ["02", "A 10-hour trial", "You test quality, communication, and whether work actually leaves your plate."],
            ["03", "Continue if it helps", "Part-time after that. I handle the work myself first."],
          ].map(([n, t, d]) => (
            <article key={n} className="rounded-lg border border-line bg-cream p-6">
              <p className="font-display text-xl text-clay">{n}</p>
              <h3 className="mt-2 text-lg">{t}</h3>
              <p className="mt-2 text-muted">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">What I take</p>
        <h2 className="mt-2 text-3xl">The unglamorous work that runs the business.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Email & follow-ups", "Inbox triage, replies, and the messages that should have gone out yesterday."],
            ["Scheduling", "Calendar, confirmations, reschedules, and keeping the week from collapsing."],
            ["General admin", "Docs, trackers, coordination, and the small tasks that stack up."],
            ["New venture setup", "You want to start something and feel stuck. I take the research and messy setup."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-lg border border-line bg-cream p-6">
              <h3 className="text-lg">{t}</h3>
              <p className="mt-2 text-muted">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-clay">About</p>
          <h2 className="mt-2 text-3xl">I stay with the business as it changes.</h2>
          <p className="mt-4 text-muted">
            I started as a VA in 2022 with one founder — still with her. We went from Shopify to Amazon to
            GoHighLevel (site, funnels, emails, courses) and social. Before that I was an executive assistant
            and assistant project manager. When a CEO wanted a new venture standing up, I did the research and
            setup.
          </p>
          <p className="mt-4 text-muted">
            Founder-led, not an agency pitch. You tell me what’s stuck. We pick one lane.
          </p>
        </div>
        <EmailGate
          source="client-home"
          headline="Want the 1-page Handoff Card first?"
          sub="A four-line brief you can actually give someone — including me. Email it to yourself, then book if you want the hours."
          cta="Send me the card"
        />
      </section>
    </SiteShell>
  );
}
