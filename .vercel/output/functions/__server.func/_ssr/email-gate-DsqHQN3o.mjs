import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as useNavigate, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as captureLead } from "./leads-DOP7VJYj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/email-gate-DsqHQN3o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EmailGate({ source, result, headline, sub, cta }) {
	const navigate = useNavigate();
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	async function onSubmit(e) {
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
			result
		});
		await navigate({
			to: "/thanks",
			search: {
				src: source,
				result: result ?? ""
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-xl border border-line bg-cream p-6 shadow-[0_24px_50px_rgba(27,23,18,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl",
				children: headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: sub
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-muted",
						children: "First name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: firstName,
						onChange: (e) => setFirstName(e.target.value),
						className: "h-11 w-full rounded-md border border-line bg-paper px-3 outline-none ring-clay focus:ring-2",
						autoComplete: "given-name"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm sm:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-muted",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "h-11 w-full rounded-md border border-line bg-paper px-3 outline-none ring-clay focus:ring-2",
						autoComplete: "email"
					})]
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-clay",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: busy,
				className: "mt-5 h-12 w-full rounded-full bg-clay px-5 font-medium text-cream hover:bg-clay-deep disabled:opacity-60",
				children: busy ? "Sending…" : cta
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: "No daily dump. I’ll use this for the kit and occasional notes. Unsubscribe anytime."
			})
		]
	});
}
//#endregion
export { EmailGate as t };
