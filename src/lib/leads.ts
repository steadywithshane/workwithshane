export type LeadSource = "client-home" | "client-quiz" | "student-kit";

export type LeadPayload = {
  firstName: string;
  email: string;
  source: LeadSource;
  result?: string;
};

const KEY = "sws-leads";

export function saveLeadLocal(payload: LeadPayload) {
  const existing: LeadPayload[] = JSON.parse(localStorage.getItem(KEY) || "[]");
  existing.push({ ...payload });
  localStorage.setItem(KEY, JSON.stringify(existing.slice(-40)));
  localStorage.setItem("sws-last-lead", JSON.stringify(payload));
}

export function lastLead(): LeadPayload | null {
  try {
    const raw = localStorage.getItem("sws-last-lead");
    return raw ? (JSON.parse(raw) as LeadPayload) : null;
  } catch {
    return null;
  }
}

export async function captureLead(payload: LeadPayload) {
  saveLeadLocal(payload);
  const webhook = import.meta.env.VITE_GHL_WEBHOOK as string | undefined;
  if (!webhook) return { ok: true, mode: "local" as const };
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: payload.firstName,
        email: payload.email,
        source: payload.source,
        quiz_result: payload.result ?? "",
        tags: [payload.source, payload.result].filter(Boolean),
      }),
    });
    return { ok: true, mode: "ghl" as const };
  } catch {
    return { ok: true, mode: "local" as const };
  }
}
