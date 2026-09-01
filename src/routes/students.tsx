import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { QuizFlow } from "@/components/quiz-flow";
import { EmailGate } from "@/components/email-gate";
import { scoreStudent, studentQuestions, type StudentAnswer } from "@/lib/student-quiz";

export const Route = createFileRoute("/students")({ component: Students });

function Students() {
  const [answers, setAnswers] = useState<StudentAnswer | null>(null);
  const result = useMemo(() => (answers ? scoreStudent(answers) : null), [answers]);

  return (
    <SiteShell tone="student">
      <section className="mx-auto max-w-3xl px-5 py-14" id="map">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">Free operator room</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Don’t start with a résumé. Start with a lane.</h1>
        <p className="mt-4 text-lg text-muted">
          A free 7-day Operator Map, then a GoHighLevel room where I share builds as I go. Resources start
          free. Paid only if it earns a place.
        </p>

        {!answers ? (
          <div className="mt-10">
            <QuizFlow
              questions={studentQuestions}
              onDone={(a) =>
                setAnswers({
                  done: a.done as StudentAnswer["done"],
                  want: a.want as StudentAnswer["want"],
                  stuck: a.stuck as StudentAnswer["stuck"],
                })
              }
            />
          </div>
        ) : result ? (
          <div className="mt-10 space-y-8">
            <div className="rounded-lg border border-line bg-cream p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-clay">Your map</p>
              <h2 className="mt-2 text-3xl">{result.title}</h2>
              <p className="mt-3 text-muted">{result.subtitle}</p>
            </div>
            <EmailGate
              source="student-kit"
              result={result.id}
              headline="Get the 7-day Operator Map"
              sub="Your lane, the week of practice, and the one-line talk track. Free."
              cta="Send my map"
            />
          </div>
        ) : null}
      </section>
    </SiteShell>
  );
}
