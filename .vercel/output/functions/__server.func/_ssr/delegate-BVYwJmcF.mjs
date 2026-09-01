import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CALENDLY } from "./router-pKV_QHwz.mjs";
import { t as SiteShell } from "./leads-DOP7VJYj.mjs";
import { t as QuizFlow } from "./quiz-flow-D2rAZADh.mjs";
import { t as EmailGate } from "./email-gate-DsqHQN3o.mjs";
import { n as scoreClient, t as clientQuestions } from "./client-quiz-B2M9fWPA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/delegate-BVYwJmcF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Delegate() {
	const [answers, setAnswers] = (0, import_react.useState)(null);
	const result = (0, import_react.useMemo)(() => answers ? scoreClient(answers) : null, [answers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-clay",
				children: "For owners"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl sm:text-5xl",
				children: "What should leave your plate first?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: "Three questions. Then a Handoff Card — the brief a VA (or I) can actually work from. This is a different path from the booking page: here you get the system before the hours."
			}),
			!answers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizFlow, {
					questions: clientQuestions,
					onDone: (a) => setAnswers({
						drain: a.drain,
						feeling: a.feeling,
						sop: a.sop
					})
				})
			}) : result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line bg-cream p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-clay",
								children: "Your lane"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl",
								children: result.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: result.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4",
								children: result.firstMove
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailGate, {
						source: "client-quiz",
						result: result.id,
						headline: "Unlock the full Handoff Card",
						sub: "I’ll email the four-line brief plus how the trial works. Use it with me or with anyone you hire.",
						cta: "Send the Handoff Card"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Already know you want hours?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CALENDLY,
								className: "text-clay underline",
								target: "_blank",
								rel: "noreferrer",
								children: "Book the 15-minute chat."
							})
						]
					})
				]
			}) : null
		]
	}) });
}
//#endregion
export { Delegate as component };
