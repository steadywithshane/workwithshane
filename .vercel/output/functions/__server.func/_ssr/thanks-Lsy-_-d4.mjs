import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, r as CALENDLY } from "./router-pKV_QHwz.mjs";
import { r as lastLead, t as SiteShell } from "./leads-DOP7VJYj.mjs";
import { n as scoreClient } from "./client-quiz-B2M9fWPA.mjs";
import { t as scoreStudent } from "./student-quiz-DOvlFY1l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thanks-Lsy-_-d4.js
var import_jsx_runtime = require_jsx_runtime();
function Thanks() {
	const { src, result } = Route.useSearch();
	const name = lastLead()?.firstName ?? "there";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		tone: src === "student-kit" ? "student" : "client",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-5 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-clay",
					children: "You’re in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-2 text-4xl",
					children: [
						"Here you go, ",
						name,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "This is the magnet — on the page now, and this is the list I’ll email from when GHL is hooked up."
				}),
				src === "student-kit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentKit, { id: result }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientKit, { id: result }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: src === "student-kit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/learn",
						className: "rounded-full border border-line px-5 py-3",
						children: "Back to the room"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CALENDLY,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full bg-clay px-5 py-3 text-cream",
						children: "Book the 15-minute chat"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "rounded-full border border-line px-5 py-3",
						children: "Client home"
					})] })
				})
			]
		})
	});
}
function ClientKit({ id }) {
	const fallback = scoreClient({
		drain: "inbox",
		feeling: "relieved",
		sop: "written"
	});
	const map = {
		handoff: fallback,
		system: scoreClient({
			drain: "inbox",
			feeling: "wary",
			sop: "head"
		}),
		funnel: scoreClient({
			drain: "followup",
			feeling: "blank",
			sop: "none"
		}),
		venture: scoreClient({
			drain: "venture",
			feeling: "blank",
			sop: "none"
		})
	};
	const r = id && map[id] || fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mt-8 rounded-lg border border-line bg-cream p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl",
				children: ["The Handoff Card — ", r.title]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: r.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-medium",
				children: "First move"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: r.firstMove
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 list-decimal space-y-2 pl-5",
				children: r.brief.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: b }, b))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: r.trial
			})
		]
	});
}
function StudentKit({ id }) {
	const fallback = scoreStudent({
		done: "learning",
		want: "clients",
		stuck: "clients"
	});
	const map = {
		amazon: scoreStudent({
			done: "amazon",
			want: "amazon",
			stuck: "tools"
		}),
		ghl: scoreStudent({
			done: "ghl",
			want: "ghl",
			stuck: "tools"
		}),
		admin: scoreStudent({
			done: "admin",
			want: "admin",
			stuck: "rate"
		}),
		operator: fallback
	};
	const r = id && map[id] || fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mt-8 rounded-lg border border-line bg-cream p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: r.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: r.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-medium",
				children: "Say this"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl italic",
				children: r.talk
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: r.days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[2.5rem_1fr] gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-clay",
						children: ["D", d.day]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.do })]
				}, d.day))
			})
		]
	});
}
//#endregion
export { Thanks as component };
