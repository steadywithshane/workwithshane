import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./leads-DOP7VJYj.mjs";
import { t as QuizFlow } from "./quiz-flow-D2rAZADh.mjs";
import { t as EmailGate } from "./email-gate-DsqHQN3o.mjs";
import { n as studentQuestions, t as scoreStudent } from "./student-quiz-DOvlFY1l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-V6yDqEv_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Learn() {
	const [answers, setAnswers] = (0, import_react.useState)(null);
	const result = (0, import_react.useMemo)(() => answers ? scoreStudent(answers) : null, [answers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		tone: "student",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-5 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-clay",
					children: "Free operator room"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl sm:text-5xl",
					children: "Don’t start with a résumé. Start with a lane."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: "This is the student and community funnel — not the client page. A free 7-day Operator Map, then a GoHighLevel room where I share builds as I go. Resume templates are everywhere. A sentence you can say on a call is not."
				}),
				!answers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizFlow, {
						questions: studentQuestions,
						onDone: (a) => setAnswers({
							done: a.done,
							want: a.want,
							stuck: a.stuck
						})
					})
				}) : result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line bg-cream p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-clay",
								children: "Your map"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl",
								children: result.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: result.subtitle
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailGate, {
						source: "student-kit",
						result: result.id,
						headline: "Get the 7-day Operator Map",
						sub: "Your lane, the week of practice, and the one-line talk track. Free. Paid resources only if they earn a place later.",
						cta: "Send my map"
					})]
				}) : null
			]
		})
	});
}
//#endregion
export { Learn as component };
