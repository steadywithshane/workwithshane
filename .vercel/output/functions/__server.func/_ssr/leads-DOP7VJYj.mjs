import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CALENDLY } from "./router-pKV_QHwz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leads-DOP7VJYj.js
var import_jsx_runtime = require_jsx_runtime();
function SiteShell({ children, tone = "client" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-display text-base tracking-tight",
						children: ["Steady with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-clay",
							children: "Shane"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-2 text-sm sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hidden rounded-full px-3 py-2 text-muted hover:text-ink sm:inline",
								children: "For owners"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/delegate",
								className: "hidden rounded-full px-3 py-2 text-muted hover:text-ink md:inline",
								children: "What to hand off"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								className: "rounded-full px-3 py-2 text-muted hover:text-ink",
								children: "For operators"
							}),
							tone === "student" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								className: "rounded-full bg-ink px-4 py-2 text-cream",
								children: "Get the map"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CALENDLY,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-full bg-ink px-4 py-2 text-cream",
								children: "Book 15 min"
							})
						]
					})]
				})
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-5 py-10 text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Steady with Shane · Shane Ross Lao" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Founder-led · Philippines" })]
				})
			})
		]
	});
}
var KEY = "sws-leads";
function saveLeadLocal(payload) {
	const existing = JSON.parse(localStorage.getItem(KEY) || "[]");
	existing.push({ ...payload });
	localStorage.setItem(KEY, JSON.stringify(existing.slice(-40)));
	localStorage.setItem("sws-last-lead", JSON.stringify(payload));
}
function lastLead() {
	try {
		const raw = localStorage.getItem("sws-last-lead");
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
async function captureLead(payload) {
	saveLeadLocal(payload);
	return {
		ok: true,
		mode: "local"
	};
}
//#endregion
export { captureLead as n, lastLead as r, SiteShell as t };
