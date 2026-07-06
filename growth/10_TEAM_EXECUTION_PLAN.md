# 10 — Team Execution Plan: 11 People, 4 Pods, One Scoreboard

**Owner:** Founders. **Siblings:** what each pod executes lives in the channel playbooks (`03`–`08`) · the first two weeks run on `09_FIRST_14_DAYS_SPRINT.md` · every number lands in `11_METRICS_AND_TRACKING.md` · prices and discount ceilings in `02_OFFERS_AND_PRICING.md`.

**The principle:** 11 mostly-junior people beat a bigger team only if everyone owns ONE number, checks it daily, and escalates fast. Nobody "helps out with marketing." You own a seat, the seat owns a number.

---

## 1. The pod structure (fill in the names Monday 9am, Day 1)

Four pods, eleven seats: **Outbound 4 + Delivery 4 + Growth/Content 2 + Ops/Finance 1 = 11.** The two founders (Ethan, Ranvir) occupy two of the eleven seats — recommended: one takes **Caller 1** (in practice the "closer-caller": close calls, partner pitches, past-client calls first, cold dials with what's left) and one takes **Delivery PM**. Both carry the **Closer** hat as an overlay: closing is not a seat, it's what founders do whenever a proposal is live.

| # | Pod | Seat / role | Owns this number | Name (FILL IN) | Backup (FILL IN) |
|---|---|---|---|---|---|
| 1 | **Outbound (4)** | **Email infra owner** — domains, SPF/DKIM/DMARC, warmup, Instantly, inbox triage, suppression list (`03_COLD_EMAIL_PLAYBOOK.md`) | Sends/day · reply % · bounce <2% · complaints <0.1% | ____________ | ____________ |
| 2 | Outbound | **List builder** — scraping, enrichment, verification, dedupe, DNC scrub (`08_LEAD_LIST_BUILDING.md`) | Verified leads/day (25) · list bounce rate | ____________ | ____________ |
| 3 | Outbound | **Caller 1** — recommended founder seat; pod lead + closer (`04_COLD_CALLING_PLAYBOOK.md`) | Proposals out ≤24h · close rate · 5 warm/partner convos/day | ____________ | ____________ |
| 4 | Outbound | **Caller 2** | 30 dials/day (40 wk3+) · audits booked | ____________ | ____________ |
| 5 | **Delivery (4)** | **PM / onboarding lead** — recommended founder seat; pod lead + closer; every client gets this person's name at close; runs audit QC and the 48h plan SLA | Plans out ≤48h · onboarding started ≤48h of close | ____________ | ____________ |
| 6 | Delivery | **Web/dev builder** — AI Growth Websites, care plans, our own site | Builds in flight (≤2) · 2-week delivery hit rate | ____________ | ____________ |
| 7 | Delivery | **Automation builder** — GHL sub-accounts, receptionist installs, A2P registration, Zapier/Make sprints | Installs in flight (≤6) · sprint delivery dates | ____________ | ____________ |
| 8 | Delivery | **SEO/retainer operator** — Local SEO retainer delivery: GBP, reviews engine, citations, monthly reports | Retainer tasks shipped · reports out by the 5th | ____________ | ____________ |
| 9 | **Growth/Content (2)** | **Content/SEO publisher** — vertical pages, posts, case studies (`05_SEO_PLAYBOOK.md`) | 1 substantive page/post live per week (Wed) | ____________ | ____________ |
| 10 | Growth/Content | **LinkedIn/social owner** — profiles, 15 connects/day, DMs, posting (`06_LINKEDIN_SOCIAL_PLAYBOOK.md`) | Connects/DMs/day · audits from social | ____________ | ____________ |
| 11 | **Ops/Finance (1)** | **Ops owner** — tracker integrity, daily rollup, invoicing/collections, referral payouts (`07_REFERRAL_ACTIVATION.md` §9), master suppression/DNC list, tool billing | Same-day logging % · zero late payouts · zero DNC violations | ____________ | ____________ |

If headcount differs on Monday, collapse in this order: Caller 2 merges into List builder's afternoon → LinkedIn owner merges into Content publisher.

**Also assign these overlay hats (one name each, can double with a seat):** Partnerships owner (`07` — a founder for the first 30 days) · Metrics owner (usually Ops) · Audit callers (the two founders run the actual 30-min audit calls in week 1; train Caller 2 and the SEO/retainer operator to run them by week 3).

### Sprint mode vs steady state

`09_FIRST_14_DAYS_SPRINT.md` calls for 5 callers in Days 3–12. That's this same structure, flexed: **until there's something to deliver, Delivery pod dials.** The 5 sprint callers = Caller 2 + Email infra owner (after Day-1 setup, warmup runs itself — light seat until week 3) + the Web/dev, Automation, and SEO/retainer seats, each running call blocks daily. They peel back to their home seats one at a time as closed deals arrive. Growth/Content runs list-building + LinkedIn support during the sprint; founders run closes, past clients, and partners. Nobody is "waiting for their job to start."

---

## 2. The daily and weekly rhythm (calendar these as recurring events on Day 1)

| When | What | Format | Who |
|---|---|---|---|
| **Daily 9:00–9:15am** | **Standup.** Each pod lead: yesterday's 3 numbers vs target, today's commitment, one blocker. No discussion >60 seconds — take it offline. | Standing, cameras on, timeboxed 15 min | Everyone |
| Daily 9:30–11:30am | Call block 1 (prospect-local time; Tue/Thu are the heavy days — Gong data via `04`) | Callers dial, log within 60s | Calling seats |
| Daily 8:30am + 1:00pm | Email inbox triage — every reply <2 business hours, opt-outs suppressed same day | Per `03` §runbook | Email infra owner |
| Daily 2:00–4:30pm | Call block 2 / walk-in routes (restaurants 2–4:30pm per `04` §9) | | Calling seats |
| **Daily 5:00pm** | **Evening numbers check-in.** Async post in the team channel using the EOD template in `11_METRICS_AND_TRACKING.md` §6. Ops compiles the rollup by 5:30. **If it isn't logged, it didn't happen.** | Async, 5 min/person | Everyone |
| **Mon 9:00–9:30am** | **Weekly pipeline review** (replaces standup): walk `templates/pipeline-tracker.csv` stage by stage, last week's scorecard vs targets, this week's list assignments | Founders drive | Everyone |
| Wed | **Ship day:** 1 SEO page/post live, week's LinkedIn posts queued | | Growth/Content |
| **Fri 4:00–4:45pm** | **Retro:** scorecard readout · best/worst call+email of the week (read them aloud — we steal each other's lines) · vote ONE script change per channel max · next week's lists pulled (`08`) | | Everyone |
| Last Fri monthly | Founder review: channel cost-per-client, close rates, MRR/churn, capacity, kill/scale decisions | | Founders + Ops |

**Response SLAs (public promises — never miss):** inbound inquiry answered <4 business hours (public claim is 24h; target 5 minutes — 5-minute responders are ~21x more likely to qualify the lead, GreetNow) · audit plan delivered ≤48h of the call · proposal ≤24h of "send me pricing" · every proposal gets a follow-up call at 48h.

---

## 3. Decision rules (what you may decide without a founder)

**Pricing & discounts (full rules: `02_OFFERS_AND_PRICING.md` §9 — this is the summary you act on):**
- You MAY offer, on your own authority: canonical list prices, the two bundles (#4+#5 = $100/mo off; #1+#2 = $250 off setup), and the **founding-client pilot** (first 10 logos: 20% off setup OR 50% off first retainer month — never both — in exchange for the written review/case-study/2-intros commitment).
- You may NOT: quote below **$400 on any project or $99/mo on any retainer**, discount >10% beyond the pilot, offer anything free except the Audit, invent a price not in `02`, or promise "pay only if it works." Script when stuck: *"Good question — I'll have our PM send exact numbers with the proposal tomorrow."* (The 24h proposal rule makes this true.)
- Every discount expires 7 days after the proposal date. Say it in the proposal (`templates/proposal-template.md` has the line).

**When a founder joins the call (book them BEFORE the call, not during):**
1. Any deal with total first-year value > **$2,500**, or any bundle of 2+ services.
2. Any past client (`07` §6) or referral-partner negotiation.
3. Any healthcare/wellness prospect (Segment 3 — HIPAA-gated) or any AI-liability-sensitive request (§6 below).
4. Any unhappy client, refund request, or scope dispute.
5. Press, agencies wanting to white-label us, or anyone proposing "partnership" that isn't the standard referral program.
6. Default until close #10: a founder reviews every proposal before it sends. After close #10, only rules 1–5.

**Spending:** the approved stack in §5 and $0 beyond it. Any new tool, membership, or paid listing = founder sign-off first (budget lock per `00_GTM_MASTER_PLAN.md` §4; Bark/Thumbtack are pre-vetoed money pits per `05_SEO_PLAYBOOK.md`).

**Compliance authority is absolute and belongs to everyone:** anyone may stop any send, dial block, or bot deployment on a suspected violation — no permission needed, no penalty ever for a false alarm. Violations found = full-stop process review (per `09` §7 scorecard).

---

## 4. Capacity guardrails (sell only what 11 juniors can deliver)

We stay inside the junior-credible scope: **configuration on real vendor infrastructure, not invention** (RESEARCH_SMB_MARKET §5 — templates and white-label platforms exist for everything we sell). These WIP caps are hard limits; they implement `00_GTM_MASTER_PLAN.md` risk #3.

| Work type | Max in flight | Why |
|---|---|---|
| AI Growth Website builds | **2** | One builder, 2-week cycles; 3rd build in flight = everything ships late |
| Receptionist/chatbot installs | **6** | Config is hours, but A2P 10DLC registration wait + client sign-offs gate throughput |
| Workflow Automation Sprints | **2** | One automation builder; each sprint = 1 focused week |
| Local SEO retainers (active) | **10 per SEO operator** | Monthly task load ~3–4 hrs/client done right |
| Marketing Engine retainers | **4** | 8 posts + 2 emails/mo each is real content time |
| Audits (held calls) | **4/day team-wide** | Each = 30–45 min inspection + 30-min call + 45-min plan (per `02` §1); more = blown 48h SLA |
| Custom Projects (#6) | **1 in-house** | Everything else brokers to the consultant network at the 75/25 split — that's what the network is FOR |

**Overflow rules:**
- Delivery backlog > 2 weeks → **pause-sell trigger:** calling pod shifts from booking audits to onboarding/check-in calls until backlog clears.
- A deal that would break a cap → don't decline it; set the kickoff date honestly ("we start [date]") or broker it to the network. Never quietly overbook.
- We DECLINE (gracefully, with a referral-out): custom LLM development, $15K+ bespoke chatbots, deep ERP/TMS/EMR integrations, true 24/7 on-call engineering, anything under the $400 floor. Decline script: *"That's a real engineering build — beyond what we'd be great at, and you deserve great. Here's who I'd call instead. And if you ever want the phones/reviews/automation layer, that we're excellent at."*

---

## 5. The tooling stack (total monthly cost — nothing else without founder sign-off)

**Phase 1 — sprint (Days 1–14): ~$77–90/mo total.**

| Tool | Purpose | Cost | Seat that owns it |
|---|---|---|---|
| 2 lookalike domains (301 → myconsulting.network) | Cold sending domains — NEVER send cold from the main domain | ~$25/yr ≈ $2/mo | Email infra owner |
| Google Workspace × 4 mailboxes (2/domain max) | Sending inboxes, SPF/DKIM/DMARC set | $28/mo | Email infra owner |
| Instantly (Growth) | Sending + warmup + one-click unsub headers | $37–47/mo | Email infra owner |
| MillionVerifier | List verification ($37/10k, pay-as-you-go); bounce <2% | ~$10/mo effective | List builder |
| Apollo (free) + Hunter (free) + Outscraper (free) | Find contacts + emails + Maps scrapes | $0 | List builder |
| Calendly free + Google Sheets + Looker Studio | Booking page, the tracker, dashboards | $0 | Ops owner |
| ChatGPT/Claude/Canva free tiers | Content leverage (max 1 paid seat later, ~$25/mo, founder sign-off) | $0 | Growth/Content |

**Phase 2 — first client closed onward: adds ~$300–330/mo → total ~$400–440/mo.**

| Tool | Purpose | Cost | Trigger |
|---|---|---|---|
| GoHighLevel Agency Unlimited | Delivery engine: CRM, missed-call text-back, chat, reviews, booking — unlimited white-label client sub-accounts | $297/mo | Start the **14-day free trial the day the first Receptionist/SEO client signs** — their retainer covers it before the trial ends (`09` §0) |
| GHL LC Phone usage | SMS the automations send (~$0.008/SMS) | ~$10–30/mo, **rebilled to client sub-accounts** | With GHL |
| White-label voice AI (GHL Voice AI / Rosie / Ringlyn) | Front Desk tier ($297/mo retail) | wholesale $25–99/mo **per client**, covered ~3x by that client's retainer | First Front Desk sale |
| Zapier / Make | Automation sprints | $0 to us — **subscription goes on the client's card** (`02` §4) | Per sprint |

Ops owner keeps one row per tool in the tracker: cost, card, renewal date, owner. Monthly founder review kills anything unused.

---

## 6. Escalation rules for AI-liability-sensitive requests (the MHL rule)

**If a mistake could touch Money, Health, or Law → founder review before you scope, quote, or configure. No exceptions.** Background: a company was held liable for its own chatbot's wrong answer (*Moffatt v. Air Canada*, 2024) — "the AI said it" is not a defense, and we configure the AI.

**Automatic escalation triggers — stop and flag the founder channel same day, tag `escalation=Y` in the tracker, quote nothing until cleared:**

1. Client wants a bot to answer **pricing, refunds, policies, legal, or medical questions** → the answer is always the guardrail from `02` §3: bot scope = FAQ + lead capture + booking + human handoff; those intents route to a human, full stop.
2. Anything touching **patient data** (names, conditions, appointment details in SMS/intake) → HIPAA path: BAA + compliant vendor or we scope generic ("you have an appointment tomorrow") or decline. Segment 3 stays gated until the BAA stack is confirmed (`01_TARGET_SEGMENTS.md`).
3. Any **bulk/cold SMS** request → only on A2P 10DLC-registered numbers with documented consent; there is no fast workaround, and carriers fine/block.
4. Client asks for an **outcome guarantee** ("guarantee me 20 leads/mo") or pay-on-results → founder only; default no (we can't attribute yet — `02` §10). Safe alternative language lives in `templates/proposal-template.md` §Guarantees.
5. **Legal-adjacent automation** for law firms (intake touching case facts, conflict checks) → founder + written scope stating the client reviews all AI output; we automate logistics, never legal judgment.
6. Client wants the bot trained on documents they don't own, scraped reviews, or a competitor's content → no.
7. Any request to record calls, buy a lead list, or text/call scraped consumer cells → no (TCPA/TSR exposure per `04` — penalties run $500–$1,500/call and $53,088/TSR violation).

**Escalation format (60 seconds, in the founder channel):** client name · what they asked for · which trigger # · what you told them ("I said our PM handles that scoping and we'd come back within 24h") · deal size. The 24h proposal SLA gives the founder a same-day window to decide.

**Why we lead with this instead of hiding it:** dentists and lawyers buy *because* we bring guardrails first (`00` risk #4). "Here's what our bots will never do" is a closing line — use it.

---

## 7. Working agreements (the culture, in writing)

1. **Own your number.** If your number is red two days running, say so at standup and ask for help — that's competence, not failure.
2. **Log same-day, always** (`11_METRICS_AND_TRACKING.md` rule #1). Dials within 60 seconds. No numbers from memory at standup.
3. **Scripts are law until Friday.** Run the playbook version all week; propose changes at retro; one change per channel per week wins the vote. No freelancing compliance lines ever (footers, opt-outs, openers).
4. **Post your best call/email of the day** in the team channel. We compound by stealing each other's lines.
5. **Speed beats polish on responses; polish beats speed on deliverables.** Reply to a lead in 5 minutes with a plain sentence; never ship a 5-point plan with a typo in the client's name.
6. **Nobody negotiates alone past the guardrails.** Price floors, MHL triggers, and DNC entries are not judgment calls.
7. **Fridays we cut.** Anything not working after a fair test (200 sends / 200 dials / 2 weeks of posts) gets killed at retro without sentimentality.

---

*Sibling playbooks: `00_GTM_MASTER_PLAN.md` (strategy this org executes) · `03`–`08` (each seat's manual) · `09_FIRST_14_DAYS_SPRINT.md` (the first two weeks, day by day) · `11_METRICS_AND_TRACKING.md` (the scoreboard every rhythm above feeds).*
