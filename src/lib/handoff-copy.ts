import { scoreClient, type ClientResult } from "@/lib/client-quiz";

export const CLIENT_CARDS: Record<string, ClientResult> = {
  handoff: scoreClient({ drain: "inbox", feeling: "relieved", sop: "written" }),
  system: scoreClient({ drain: "inbox", feeling: "wary", sop: "head" }),
  funnel: scoreClient({ drain: "followup", feeling: "blank", sop: "none" }),
  venture: scoreClient({ drain: "venture", feeling: "blank", sop: "none" }),
};

export const BLANK_LINES = [
  { n: "01", label: "The task", hint: "One sentence. Not a job description." },
  { n: "02", label: "Where it lives", hint: "Inbox, calendar, CRM, folder." },
  { n: "03", label: "What done looks like", hint: "So nobody has to guess." },
  { n: "04", label: "When to ping you", hint: "Vs just send it." },
];
