import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { captureLead, type LeadSource } from "@/lib/leads";

export function EmailGate({
  source,
  result,
  headline,
  sub,
  cta,
}: {
  source: LeadSource;
  result?: string;
  headline: string;
  sub: string;
  cta: string;
}) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!firstName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("I need a first name and a real email so I can send the kit.");
      return;
    }
    setBusy(true);
    await captureLead({
      firstName: firstName.trim(),
      email: email.trim().toLowerCase(),
      source,
      result,
    });
    await navigate({
      to: "/thanks",
      search: { src: source, result: result ?? "" },
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-line bg-cream p-6 shadow-[0_24px_50px_rgba(27,23,18,0.08)]"
    >
      <h3 className="font-display text-2xl">{headline}</h3>
      <p className="mt-2 text-muted">{sub}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">First name</span>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="h-11 w-full rounded-md border border-line bg-paper px-3 outline-none ring-clay focus:ring-2"
            autoComplete="given-name"
          />
        </label>
        <label className="block text-sm sm:col-span-1">
          <span className="mb-1.5 block text-muted">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-md border border-line bg-paper px-3 outline-none ring-clay focus:ring-2"
            autoComplete="email"
          />
        </label>
      </div>
      {error ? <p className="mt-3 text-sm text-clay">{error}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="mt-5 h-12 w-full rounded-full bg-clay px-5 font-medium text-cream hover:bg-clay-deep disabled:opacity-60"
      >
        {busy ? "Sending…" : cta}
      </button>
      <p className="mt-3 text-xs text-muted">
        No daily dump. I’ll use this for the kit and occasional notes. Unsubscribe anytime.
      </p>
    </form>
  );
}
