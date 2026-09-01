//#region node_modules/.nitro/vite/services/ssr/assets/student-quiz-DOvlFY1l.js
var studentQuestions = [
	{
		key: "done",
		prompt: "What have you actually done for someone else’s business?",
		options: [
			{
				id: "amazon",
				label: "Amazon / ecommerce listings or ads"
			},
			{
				id: "ghl",
				label: "Funnels, websites, or email automations"
			},
			{
				id: "admin",
				label: "Inbox, calendar, EA, or project coordination"
			},
			{
				id: "social",
				label: "Social posting and content"
			},
			{
				id: "learning",
				label: "I’m still assembling the hours"
			}
		]
	},
	{
		key: "want",
		prompt: "What do you want to get paid for in the next 90 days?",
		options: [
			{
				id: "amazon",
				label: "Amazon / ecommerce operator work"
			},
			{
				id: "ghl",
				label: "GoHighLevel, funnels, and email"
			},
			{
				id: "admin",
				label: "Being the founder’s operator"
			},
			{
				id: "clients",
				label: "Just getting the first paying client"
			}
		]
	},
	{
		key: "stuck",
		prompt: "What’s actually stuck?",
		options: [
			{
				id: "clients",
				label: "Finding people to talk to"
			},
			{
				id: "rate",
				label: "Knowing what to charge"
			},
			{
				id: "tools",
				label: "The tools (GHL, Seller Central, the rest)"
			},
			{
				id: "consistency",
				label: "Showing up every week"
			}
		]
	}
];
function scoreStudent(a) {
	const lane = a.want === "clients" ? a.done : a.want;
	if (lane === "amazon") return {
		id: "amazon",
		title: "Ecommerce operator lane",
		subtitle: "Listings, catalog, and the numbers — not ‘I can do anything.’",
		days: [
			{
				day: "1",
				do: "Write your one-sentence lane: listings, catalog, conversion."
			},
			{
				day: "2",
				do: "Audit one live ASIN vs the top 3 competitors (title, bullets, images)."
			},
			{
				day: "3",
				do: "Draft the before/after you would actually change."
			},
			{
				day: "4",
				do: "Learn one metric story: sessions, CVR, ACOS — in plain English."
			},
			{
				day: "5",
				do: "Write a 4-line client brief you’d send after a call."
			},
			{
				day: "6",
				do: "Practice the 15-minute chat. Book the next step, don’t dump the résumé."
			},
			{
				day: "7",
				do: "Join the free room. Share one audit, not ten skills."
			}
		],
		talk: "I look at listings against competitors and the numbers behind conversion — then we pick one change to test."
	};
	if (lane === "ghl") return {
		id: "ghl",
		title: "Funnels and follow-up lane",
		subtitle: "Page → form → pipeline → emails. That’s the product.",
		days: [
			{
				day: "1",
				do: "Sketch one path: who arrives, what they want, what happens next."
			},
			{
				day: "2",
				do: "Build a one-page funnel with a form into a pipeline."
			},
			{
				day: "3",
				do: "Write a 3-email follow-up. Short. Human. No seven-day novel."
			},
			{
				day: "4",
				do: "Connect the form to a tag and a stage called Booked / Talking."
			},
			{
				day: "5",
				do: "Record a 4-minute walkthrough of what you built."
			},
			{
				day: "6",
				do: "Write your talk track: I make the backend catch the lead."
			},
			{
				day: "7",
				do: "Join the free room. Post the walkthrough, ask one question."
			}
		],
		talk: "I help coaches and service businesses get GoHighLevel working — funnel, pipeline, and the emails after someone opts in."
	};
	if (lane === "admin" || a.done === "admin") return {
		id: "admin",
		title: "Founder operator lane",
		subtitle: "Calendars, follow-ups, the week that keeps slipping.",
		days: [
			{
				day: "1",
				do: "List the three tasks you’d take in a 10-hour trial."
			},
			{
				day: "2",
				do: "Write a Handoff Card for one of them (task, tool, done, when to ping)."
			},
			{
				day: "3",
				do: "Practice inbox triage: reply / wait / owner must see."
			},
			{
				day: "4",
				do: "Build a simple weekly recap template."
			},
			{
				day: "5",
				do: "Decide your trial price and say it out loud."
			},
			{
				day: "6",
				do: "Script the 15-minute chat: one drain, one trial, one date."
			},
			{
				day: "7",
				do: "Join the free room. Share the card, not the whole life story."
			}
		],
		talk: "I’m the operator beside a founder. We pick one bottleneck — inbox, calendar, or follow-up — and I run it."
	};
	return {
		id: "operator",
		title: "Start as an operator, not a résumé",
		subtitle: "You don’t need ten skills. You need one lane and a way to talk about it.",
		days: [
			{
				day: "1",
				do: "Pick one lane for 90 days. Write it in one sentence."
			},
			{
				day: "2",
				do: "Make a one-page lookup that matches that sentence."
			},
			{
				day: "3",
				do: "Draft 15 names you could actually message or call."
			},
			{
				day: "4",
				do: "Write the 15-minute chat. Practice it twice."
			},
			{
				day: "5",
				do: "Choose a small paid trial so you’re not working for exposure."
			},
			{
				day: "6",
				do: "Do one real practice build (funnel, listing audit, or handoff card)."
			},
			{
				day: "7",
				do: "Join the free room. Ask for a critique on the one-pager."
			}
		],
		talk: "I stay with the business as it changes. We pick one stuck area. I take it."
	};
}
//#endregion
export { studentQuestions as n, scoreStudent as t };
