import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { QuizFlow } from "@/components/quiz-flow";
import { EmailGate } from "@/components/email-gate";
import { clientQuestions, scoreClient, type ClientAnswer } from "@/lib/client-quiz";
import { CALENDLY } from "@/lib/brand";

export const Route = createFileRoute("/delegate")({ component: Delegate });

function Delegate() {
  const [answers, setAnswers] = useState<ClientAnswer | null>(null);
  const result = useMemo(() => (answers ? scoreClient(answers) : null), [answers]);

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">For owners</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">What should leave your plate first?</h1>
        <p className="mt-4 text-lg text-muted">
          Three questions. Then a Handoff Card — the brief a VA (or I) can actually work from. This is a
          different path from the booking page: here you get the system before the hours.
        </p>

        {!answers ? (
          <div className="mt-10">
            <QuizFlow
              questions={clientQuestions}
              onDone={(a) =>
                setAnswers({
                  drain: a.drain as ClientAnswer["drain"],
                  feeling: a.feeling as ClientAnswer["feeling"],
                  sop: a.sop as ClientAnswer["sop"],
                })
              }
            />
          </div>
        ) : result ? (
          <div className="mt-10 space-y-8">
            <div className="rounded-lg border border-line bg-cream p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-clay">Your lane</p>
              <h2 className="mt-2 text-3xl">{result.title}</h2>
              <p className="mt-3 text-muted">{result.subtitle}</p>
              <p className="mt-4">{result.firstMove}</p>
            </div>
            <EmailGate
              source="client-quiz"
              result={result.id}
              headline="Unlock the full Handoff Card"
              sub="I’ll email the four-line brief plus how the trial works. Use it with me or with anyone you hire."
              cta="Send the Handoff Card"
            />
            <p className="text-sm text-muted">
              Already know you want hours?{" "}
              <a href={CALENDLY} className="text-clay underline" target="_blank" rel="noreferrer">
                Book the 15-minute chat.
              </a>
            </p>
          </div>
        ) : null}
      </section>
    </SiteShell>
  );
}
