import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CALENDLY } from "./router-pKV_QHwz.mjs";
import { t as SiteShell } from "./leads-DOP7VJYj.mjs";
import { t as EmailGate } from "./email-gate-DsqHQN3o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DW3JUYnY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chips = [
	{
		label: "The inbox never ends",
		line: "Inbox first. I’d triage, draft follow-ups, and keep threads from dying in silence."
	},
	{
		label: "Scheduling ping-pong",
		line: "Scheduling. I’d own the calendar, confirmations, and the back-and-forth so you only show up."
	},
	{
		label: "Leads go quiet",
		line: "Follow-ups. I’d run a simple cadence so warm leads don’t go cold while you’re with clients."
	},
	{
		label: "Social + random admin",
		line: "Light social and admin. I’d keep the page alive and the busywork off your desk."
	},
	{
		label: "I want to start something new",
		line: "New venture setup. I’d take the research and messy setup so you can move instead of staring at a blank start."
	},
	{
		label: "I’m doing all of it",
		line: "All of it, a little. That’s common. We’d pick one lane for the trial so you can feel the difference fast."
	}
];
function Home() {
	const [line, setLine] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-good" }), "Founder-led · Philippines"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-4xl sm:text-5xl lg:text-6xl",
					children: [
						"Your week gets ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-clay",
							children: "quieter"
						}),
						" when someone steady takes the admin."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg text-muted",
					children: "I help coaches, agents, and service professionals with follow-ups, scheduling, and the work that keeps stealing client time. Short chat first. Small trial if it fits."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CALENDLY,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full bg-clay px-5 py-3 font-medium text-cream hover:bg-clay-deep",
						children: "Book a 15-minute chat"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/delegate",
						className: "rounded-full border border-line px-5 py-3",
						children: "Not sure what to hand off?"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative justify-self-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/shane.jpg",
					alt: "Shane Ross Lao",
					className: "aspect-square w-full max-w-md rounded-[42%_58%_48%_52%/42%_38%_62%_58%] object-cover shadow-[0_30px_60px_rgba(27,23,18,0.12)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-0 bottom-8 max-w-52 rounded-lg border border-line bg-cream p-4 shadow-[0_20px_40px_rgba(27,23,18,0.1)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Start with a trial"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "About 10 hours. Test the fit before anything bigger."
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-3 rounded-xl bg-ink px-5 py-14 text-cream sm:mx-6 sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-clay",
					children: "Interactive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl text-cream sm:text-4xl",
					children: "What’s eating most of your week?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-cream/70",
					children: "Tap the one that feels true. Then book a time — or take the two-minute quiz if you want the written handoff first."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLine(c.line),
						className: `rounded-full border px-4 py-2.5 text-sm ${line === c.line ? "border-clay bg-clay" : "border-cream/20 hover:border-cream/50"}`,
						children: c.label
					}, c.label))
				}),
				line ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-display text-xl italic text-cream",
					children: line
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CALENDLY,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full bg-clay px-5 py-3 text-cream",
						children: "Lock a time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/delegate",
						className: "rounded-full border border-cream/20 px-5 py-3",
						children: "Get the Handoff Card"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-clay",
					children: "How it works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl sm:text-4xl",
					children: "Simple on purpose."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: [
						[
							"01",
							"15-minute chat",
							"We name the task that’s actually draining you. If I’m not the right fit, I’ll say so."
						],
						[
							"02",
							"A 10-hour trial",
							"You test quality, communication, and whether work actually leaves your plate."
						],
						[
							"03",
							"Continue if it helps",
							"Part-time after that. I handle the work myself first."
						]
					].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-cream p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl text-clay",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: d
							})
						]
					}, n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-clay",
					children: "What I take"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl",
					children: "The unglamorous work that runs the business."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: [
						["Email & follow-ups", "Inbox triage, replies, and the messages that should have gone out yesterday."],
						["Scheduling", "Calendar, confirmations, reschedules, and keeping the week from collapsing."],
						["General admin", "Docs, trackers, coordination, and the small tasks that stack up."],
						["New venture setup", "You want to start something and feel stuck. I take the research and messy setup."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-cream p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: d
						})]
					}, t))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-clay",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl",
					children: "I stay with the business as it changes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "I started as a VA in 2022 with one founder — still with her. We went from Shopify to Amazon to GoHighLevel (site, funnels, emails, courses) and social. Before that I was an executive assistant and assistant project manager. When a CEO wanted a new venture standing up, I did the research and setup."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Founder-led, not an agency pitch. You tell me what’s stuck. We pick one lane."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailGate, {
				source: "client-home",
				headline: "Want the 1-page Handoff Card first?",
				sub: "A four-line brief you can actually give someone — including me. Email it to yourself, then book if you want the hours.",
				cta: "Send me the card"
			})]
		})
	] });
}
//#endregion
export { Home as component };
