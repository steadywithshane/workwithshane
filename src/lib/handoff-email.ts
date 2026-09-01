import { CALENDLY } from "@/lib/brand";

export type CardKey = "blank" | "handoff" | "system" | "funnel" | "venture";

export const CARDS: Record<
  CardKey,
  { eyebrow: string; title: string; intro: string; lines: { n: string; t: string }[]; close: string }
> = {
  blank: {
    eyebrow: "The Handoff Card",
    title: "One task. Four lines. Then someone else can run it.",
    intro:
      "Fill this in before you hire hours — mine or anyone’s. If you can’t finish a line, that’s the work we do on the 15-minute chat.",
    lines: [
      { n: "01", t: "The task, in one sentence." },
      { n: "02", t: "Where it lives (inbox, calendar, CRM, drive)." },
      { n: "03", t: "What “done” looks like." },
      { n: "04", t: "When to ping you vs just send it." },
    ],
    close: "If you want me to take the first 10 hours against this card, book the chat. Trial is $249.",
  },
  handoff: {
    eyebrow: "Your result · Ready to hand off",
    title: "You’re ready to hand off a lane",
    intro: "You can name the work. A short trial will tell you if the person is steady.",
    lines: [
      { n: "01", t: "Pick the lane: inbox, calendar, or follow-up." },
      { n: "02", t: "Tools and access on day one." },
      { n: "03", t: "Daily or 3× week check-in." },
      { n: "04", t: "What you still want to approve." },
    ],
    close: "Starter trial: 10 hours for $249. Book 15 minutes and we pick the lane.",
  },
  system: {
    eyebrow: "Your result · Write it first",
    title: "Write the handoff, then run the hours",
    intro: "You can feel the drain, but a VA would still need you in the chair. We write the card first.",
    lines: [
      { n: "01", t: "The task, in one sentence." },
      { n: "02", t: "Where it lives (inbox, calendar, CRM)." },
      { n: "03", t: "What “done” looks like." },
      { n: "04", t: "When to ping you vs just send it." },
    ],
    close: "$249 for 10 hours — after the card exists so you’re not training in real time.",
  },
  funnel: {
    eyebrow: "Your result · Follow-up first",
    title: "Fix the follow-up before you hire hours",
    intro: "Leads are raising a hand and then sitting there. Hours in an inbox won’t fix a missing sequence.",
    lines: [
      { n: "01", t: "Where does a new lead land today?" },
      { n: "02", t: "Who follows up, and in how many hours?" },
      { n: "03", t: "What three emails should already exist?" },
      { n: "04", t: "What tag or pipeline stage means “talking”?" },
    ],
    close: "We map page → form → pipeline → 3–5 emails. Then a person can work it.",
  },
  venture: {
    eyebrow: "Your result · New venture",
    title: "Stand up the first version",
    intro: "The leak is a new thing that doesn’t exist yet — not an inbox problem.",
    lines: [
      { n: "01", t: "Name the offer in one sentence." },
      { n: "02", t: "List the three tools it needs to live in." },
      { n: "03", t: "Define the first public page or listing." },
      { n: "04", t: "What happens after someone says yes?" },
    ],
    close: "I take the messy research and setup so a first version can actually run.",
  },
};

export function ghlEmailHtml(key: CardKey) {
  const c = CARDS[key];
  const rows = c.lines
    .map(
      (l) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e8e0d2;vertical-align:top;">
            <p style="margin:0;font-family:Georgia,serif;font-size:14px;color:#b85a3d;">${l.n}</p>
            <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#1b1712;">${l.t}</p>
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>The Handoff Card</title>
</head>
<body style="margin:0;padding:0;background:#f3eee4;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3eee4;">
    <tr>
      <td align="center" style="padding:28px 16px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:560px;">
          <tr>
            <td style="padding:0 8px 20px;font-family:Georgia,serif;font-size:18px;color:#1b1712;">
              Steady with <span style="color:#b85a3d;">Shane</span>
            </td>
          </tr>
          <tr>
            <td style="background:#fffaf3;border:1px solid #e8e0d2;padding:32px 28px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#b85a3d;">${c.eyebrow}</p>
              <h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:26px;line-height:1.2;font-weight:normal;color:#1b1712;">Hi {{contact.first_name}},</h1>
              <p style="margin:14px 0 0;font-family:Georgia,serif;font-size:22px;line-height:1.25;color:#1b1712;">${c.title}</p>
              <p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#5b5348;">${c.intro}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                ${rows}
              </table>
              <p style="margin:22px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1b1712;">${c.close}</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="background:#b85a3d;border-radius:999px;">
                    <a href="${CALENDLY}" style="display:inline-block;padding:12px 22px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#fffaf3;text-decoration:none;">Book 15 minutes</a>
                  </td>
                </tr>
              </table>
              <p style="margin:22px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#5b5348;">
                Shane Ross Lao · founder-led · Philippines<br>
                Reply to this email if you’d rather just tell me what’s stuck.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
