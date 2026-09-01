import { useState } from "react";

type Option = { id: string; label: string };
type Question<K extends string> = {
  key: K;
  prompt: string;
  options: Option[];
};

export function QuizFlow<K extends string>({
  questions,
  onDone,
}: {
  questions: Question<K>[];
  onDone: (answers: Record<K, string>) => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<K, string>>>({});
  const q = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  function pick(id: string) {
    const next = { ...answers, [q.key]: id };
    setAnswers(next);
    if (step + 1 >= questions.length) {
      onDone(next as Record<K, string>);
    } else {
      setStep(step + 1);
    }
  }

  return (
    <div>
      <div className="mb-6 h-1 overflow-hidden rounded-full bg-paper-2">
        <div
          className="h-full bg-clay transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs uppercase tracking-[0.16em] text-clay">
        {step + 1} / {questions.length}
      </p>
      <h2 className="mt-2 max-w-xl text-3xl sm:text-4xl">{q.prompt}</h2>
      <div className="mt-6 grid gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => pick(opt.id)}
            className="rounded-lg border border-line bg-cream px-4 py-4 text-left hover:border-ink"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
