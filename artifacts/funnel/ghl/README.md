# Put this funnel in GoHighLevel

Use a **blank funnel page** (no stock header/footer sections).

## Paste order
1. Funnel → your page → **Settings → Tracking Codes → Header**  
   Paste `01-header.html`
2. Add one **Custom JS / HTML** element that spans the full width  
   Paste `02-body.html`
3. **Settings → Tracking Codes → Footer**  
   Paste `03-footer.html`
4. Publish. Use the GHL funnel domain or attach a domain later.

## Calendar
Links currently go to Calendly. That is fine for week one.

When you want GHL to own the booking:
- Create a Calendar in this subaccount
- Create a booking widget
- Replace every `https://calendly.com/shanelao/30min` with that GHL calendar URL

Then every booked call becomes a GHL contact automatically.

## CRM pipeline to create tonight
Pipeline name: **Outbound**

Stages:
1. To call
2. Called — no answer
3. Talking
4. Booked chat
5. Trial offered
6. Trial paid
7. Active
8. Lost

Custom fields (optional): source (Apollo), offer (admin / GHL / Amazon), next follow-up date.

## Apollo → GHL (later, not required to start)
Week 1: export Apollo CSV → Contacts → Import in GHL.  
Week 2+: Zapier or Make: Apollo “contact added to list” → GHL “create/update contact.”

You can keep the Vercel page live as backup. Same copy, two homes.
