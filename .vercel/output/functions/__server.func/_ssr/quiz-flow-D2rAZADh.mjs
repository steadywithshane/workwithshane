import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-flow-D2rAZADh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizFlow({ questions, onDone }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const q = questions[step];
	const progress = (step + 1) / questions.length * 100;
	function pick(id) {
		const next = {
			...answers,
			[q.key]: id
		};
		setAnswers(next);
		if (step + 1 >= questions.length) onDone(next);
		else setStep(step + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 h-1 overflow-hidden rounded-full bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-clay transition-[width] duration-300",
				style: { width: `${progress}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs uppercase tracking-[0.16em] text-clay",
			children: [
				step + 1,
				" / ",
				questions.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 max-w-xl text-3xl sm:text-4xl",
			children: q.prompt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: q.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => pick(opt.id),
				className: "rounded-lg border border-line bg-cream px-4 py-4 text-left hover:border-ink",
				children: opt.label
			}, opt.id))
		})
	] });
}
//#endregion
export { QuizFlow as t };
