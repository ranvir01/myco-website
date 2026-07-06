# 02 — Offers & Pricing: The MyCo Service Menu

**Who this is for:** anyone at MyCo quoting a price, writing a proposal, or delivering a service. If a number isn't in this doc, don't say it to a client.
**Siblings:** segments in `01_TARGET_SEGMENTS.md` · scripts that sell these offers in `03_COLD_EMAIL_PLAYBOOK.md` / `04_COLD_CALLING_PLAYBOOK.md` · pilot discount rules in `09_FIRST_14_DAYS_SPRINT.md` · proposal template in `templates/` · referral math in `07_REFERRAL_ACTIVATION.md`.

---

## 0. The economics you must never forget

From the finalized referral/financial model (see `AUDIT` + `07_REFERRAL_ACTIVATION.md`):

- On a network-consultant-delivered project, the consultant keeps **75% of Total Project Cost (TPC)**. MyCo grosses 25%; after referral payouts MyCo nets **~13.9%** ($208 on a $1,500 project).
- When **our in-house 11-person team delivers** (which is the whole point of productized services), MyCo keeps the delivery margin. **Default rule: services 1–5 below are delivered in-house on templates and white-label platforms; Service 6 (Custom Projects) is where network consultants come in at the 75/25 split.**
- **Absolute price floor: $400 TPC on any project** (modeled break-even is $360). Target band: $1,000–$5,000 per project, retainers $150–$1,200/mo.
- Client-referrer earns **10% of project revenue years 1–3** — that comes out of MyCo's share. Price with that in mind; it's why the discount ceilings in §9 exist.

### The tool backbone (fixed cost, shared across ALL clients)

| Tool | What it delivers | Monthly cost | Notes |
|---|---|---|---|
| **GoHighLevel (GHL) Agency Unlimited** | CRM, missed-call text-back, SMS/email automations, chat widget, review requests, booking calendars, funnels, social planner — **unlimited white-labeled client sub-accounts** | **$297/mo** (one bill for the whole agency; $497/mo "SaaS mode" later if we want to rebill AI usage with markup) | This is the delivery engine for Services 2, 4, and 5. 10 clients on it = ~$30/client platform cost. Start on the 14-day free trial when the first client closes (see `09_FIRST_14_DAYS_SPRINT.md`). |
| GHL SMS/voice usage (LC Phone) | Texts the automations send | **~$0.008/SMS**, pennies/min voice | Rebill usage to the client sub-account. Missed-call text-back is near-pure margin (GHL agency guides). |
| White-label AI voice receptionist (GHL Voice AI, Rosie, or Ringlyn) | Answers the phone 24/7, books appointments | **Wholesale $25–$99/mo + minutes** | Retail at $297/mo — the de-facto standard reseller rate (AgentZap 2025 pricing guide). Margin: **$150–$250/mo per client** (Ringlyn white-label data). |
| Zapier / Make | Workflow Automation Sprints | Make from ~$9/mo, Zapier from ~$20/mo (verify current tier at signup) | **Put the subscription on the client's card** during the sprint — they own it, we configure it. Our marginal cost: $0. |
| AI review-reply tooling (or GHL native) | Review management inside SEO retainers | **$17–$99/mo wholesale** | Resells inside retainers at $150–$300/mo (RepliFast/Podium market data). |
| Google Business Profile, Search Console, Bing Places, PageSpeed Insights, Looker Studio | Local SEO + audits + dashboards | **$0** | Free. Use relentlessly. |
| ChatGPT / Claude / Canva | Content production leverage | Free tiers; at most one paid seat ~$25/mo | |

**Wholesale vs retail cheat sheet** (this is why the business works):

| Deliverable | Our cost | Client pays | Gross margin |
|---|---|---|---|
| Missed-call text-back | ~$5–15/mo in SMS | inside $150/mo plan | ~90%+ |
| AI voice receptionist | $25–99/mo | $297/mo | $150–250/mo |
| Review management | $17–99/mo | inside $500/mo SEO retainer | $150–300/mo equiv. |
| GHL sub-account (CRM/chat/booking) | $0 marginal | any retainer | — |

---

## 1. The front door: Free AI Opportunity Audit (productized — do it the same way every time)

**The offer (say it exactly like this):** *"Free 30-minute AI Opportunity Audit — we test your phones, your website, and your Google presence before the call, then send you a written 5-point action plan showing exactly where you're losing time and money. Delivered within 48 hours. No obligation."*

This is the primary CTA in every playbook (`03`, `04`, `06`, `09`). It is free because audits are labor-cheap for us (~60–75 min total) and they pre-sell the scope — the dominant top-of-funnel pattern for AI agencies (Northloop/Insites).

### 1a. Pre-call inspection checklist (do ALL of this BEFORE the 30-min call — 30–45 min desk work)

Print this. One sheet per prospect. Log everything in the tracking sheet (`11_METRICS_AND_TRACKING.md`).

- [ ] **1. Missed-call test.** Manually dial their main line twice: once mid-afternoon (~2pm their time), once 15 min after posted closing. Log: rings before pickup/voicemail · did a human answer · did you get a text-back · any callback within 24h. *(Compliance: these are manual, one-off calls to a published business line — fine under TCPA. If asked, be honest: "running a quick front-desk check ahead of our call." Never use an autodialer or AI voice for this.)*
  - Ammo: **62% of calls to small businesses go unanswered** (411 Locals) and **85% of callers who hit voicemail never call back** (Numa).
- [ ] **2. Follow-up speed test.** Submit their website contact form at ~10am with real info ("interested in a quote"). Start a timer. Log time-to-first-response and channel (call/text/email/nothing).
  - Ammo: responding **within 5 minutes makes a lead ~21x more likely to qualify** (GreetNow lead-response stats); **78% of buyers go with the first responder** (NAR 2025, via AgentZap).
- [ ] **3. Google Business Profile state.** Claimed? Correct categories? Photos newer than 6 months? Posts? Hours accurate? Review count + star rating **vs. their top 3 local competitors** (screenshot the comparison).
- [ ] **4. Review response rate.** Read their last 10 Google reviews: how many got an owner response, average response lag, any unanswered negative.
  - Ammo: **97% of consumers read reviews; 89% expect owners to respond** (BrightLocal 2025).
- [ ] **5. Site speed & conversion scan.** PageSpeed Insights mobile score + LCP (good = ≤2.5s). Above the fold on a phone: clickable phone number? one clear CTA? lead-capture form? online booking? chat widget? SSL? Screenshot the fold.
- [ ] **6. Stack quick-look.** Any chat widget, booking tool, or email signup present? (View source / free BuiltWith lookup.)

### 1b. The 30-minute call agenda

1. (5 min) Their story: how leads come in, average job/client value, who answers the phone.
2. (15 min) Walk the findings — lead with the missed-call and form-test results (it's *their own business* failing in real time; this outsells any pitch).
3. (5 min) Compute **the one number** together: `missed calls/mo × their close rate × their average job value = $ lost/mo`. Use THEIR numbers, round down. Anchoring to a single lost-revenue number outperforms feature lists (GHL agency ecosystem consensus, `RESEARCH_SMB_MARKET`).
4. (5 min) "I'll send your written 5-point plan within 48 hours. If you want us to fix any of it, prices start at $X and I'll include exact quotes." Book the 15-min plan-walkthrough call before hanging up.

### 1c. The 5-Point Plan template (1 page, exact structure — copy into `templates/`)

```
FREE AI OPPORTUNITY AUDIT — 5-POINT ACTION PLAN
[Business name] · Prepared by [name], MyConsulting Network · [date]

THE ONE NUMBER: We estimate you're losing ~$[X]/month.
(Math: [N] missed calls/mo × [Y]% close rate × $[Z] avg job = $[X]. Your numbers, conservatively.)

POINT 1–5 (repeat this block five times):
  WHAT WE FOUND: [evidence — "We called Tue 2:04pm: voicemail, no text-back, no callback in 24h."]
  WHY IT COSTS YOU: [one stat — e.g. "85% of callers who hit voicemail never call back (Numa)."]
  THE FIX: [plain-English fix]
  DO IT YOURSELF: [honest 2–3 step DIY path]
  OR WE DO IT: [service name] — from $[canonical price], live in [timeframe]

NEXT STEP: 15-minute walkthrough call — [booking link]. No obligation; the DIY steps
above work whether or not you hire us.
MyConsulting Network · info@myconsulting.network · [physical mailing address]
```

**Rules:** at least **2 of the 5 points must be genuinely DIY-able** (trust is the product). Delivered **within 48h of the call — hard SLA** (sprint enforcement in `09_FIRST_14_DAYS_SPRINT.md`). Every plan point maps to a service:

| Audit finding | Service to quote |
|---|---|
| Missed calls / no text-back / slow form response | #2 AI Receptionist & Chatbot |
| Manual quotes, invoicing lag, no lead follow-up | #3 Workflow Automation Sprint |
| Weak/unclaimed GBP, unanswered reviews | #4 Local SEO & AI Visibility |
| Slow site, no CTA, no lead capture | #1 AI Growth Website |
| No email list, dead socials, no CRM | #5 AI Marketing Engine |
| Anything bespoke (dashboards, feasibility, software) | #6 Custom Projects |

---

## 2. Service 1 — AI Growth Website (from $1,500, ~2-week delivery)

**What it is:** a conversion-focused website rebuilt with SEO foundations, analytics, and lead capture. Market check: SMB brochure sites run $1,000–$4,000 (GruffyGoat/Forbes Advisor) — we sit inside the band and deliver in 2 weeks.

| Tier | Price | What's included |
|---|---|---|
| **Launch** (canonical entry) | **$1,500** | 5–7 page site, mobile-first, clickable phone + one clear CTA on every page, lead-capture form wired to their inbox/CRM, Google Analytics + Search Console, on-page SEO foundations (titles, metadata, schema, sitemap), 2-week delivery |
| **Grow** | $2,500 | Launch + conversion copywriting from a founder interview, 3 service/vertical landing pages, reviews widget, online booking integration, blog scaffold |
| **Dominate** | $4,000 | Grow + ROI/quote calculator or lead magnet build, 2 case-study pages, speed budget (LCP <2.5s mobile, verified in PageSpeed), 30 days post-launch tweaks |
| Care Plan (attach to every deal) | **$99/mo** | Hosting/monitoring, monthly edits (up to 2 hrs), uptime + backup, quarterly refresh. Market band $50–$300/mo — we price to attach, not to profit. |

**Delivery checklist:** [ ] kickoff call + asset collection (logo, photos, service list, proof) day 1 · [ ] sitemap + copy draft by day 3 · [ ] build days 4–9 · [ ] client review day 10 · [ ] analytics/GSC/schema verified · [ ] mobile PageSpeed ≥ 80, LCP ≤ 2.5s · [ ] form test-submitted and received · [ ] launch + 301s from old URLs · [ ] handoff doc + Care Plan pitch · [ ] ask for Google review + referral (`07_REFERRAL_ACTIVATION.md`).

**Tools:** whatever the builder is fastest in (Next.js/Vercel like our own site, or GHL funnels included in the $297/mo for simple sites) · PageSpeed Insights (free) · GSC (free).
**Upsell path:** Care Plan ($99/mo) → Local SEO retainer (#4) → AI Receptionist (#2) chat widget already on the site.
**Do NOT promise:** rankings of any kind ("the site has SEO foundations" ≠ "you'll rank") · specific traffic or revenue lifts · e-commerce builds at this price (that's Service 6, scoped).

---

## 3. Service 2 — AI Receptionist & Chatbot (from $750 setup + $150/mo)

**What it is:** 24/7 website chat + missed-call text-back + FAQ answers + appointment booking. This is the **wedge offer** — highest demand (46% of SMBs use AI customer-engagement tools; AI customer-service use doubled 14%→29% 2023–2025 — theStacc/Talkdesk), fastest ROI story, near-pure margin.

| Tier | Price | What's included |
|---|---|---|
| **Text-Back Starter** (canonical entry) | **$750 setup + $150/mo** | Missed-call text-back on their business line, website chat widget, FAQ bot (client-approved answers only), booking link, all conversations in one inbox, monthly report |
| **Front Desk** | $1,000 setup + **$297/mo** | Starter + white-label **AI voice receptionist** answering calls 24/7 and booking appointments (wholesale $25–99/mo → $297/mo is the standard reseller price — AgentZap/Dialzara) |
| **Never Miss Revenue** | $1,500 setup + $497/mo | Front Desk + automated review requests after every job, database-reactivation drips, no-show reminder sequences, monthly ROI report. (Restaurants demonstrably pay $399–$600/mo for phone AI — Slang.ai — so $497 is defensible in `01_TARGET_SEGMENTS.md` verticals 3/5.) |

**Delivery checklist:** [ ] GHL sub-account created (white-labeled) · [ ] **A2P 10DLC registration filed for the client's texting number BEFORE any SMS goes out** (carrier fines/blocking otherwise) · [ ] call-forwarding/missed-call trigger tested with a real phone · [ ] text-back copy approved by client in writing · [ ] FAQ knowledge base written from client docs and **signed off by the client** · [ ] escalation-to-human path tested · [ ] booking calendar synced · [ ] voice agent (Front Desk+) test-called 10 times incl. edge cases · [ ] client trained on the inbox (30-min video call) · [ ] day-30 report with calls-recovered count.

**Sales ammo:** 62% of SMB calls go unanswered (411 Locals) · missed calls cost an average SMB ~$126K/yr (Aira) · only 40% of law firms answer prospect calls, 64% of prospects get zero follow-up (Clio Legal Trends).

**Chatbot liability guardrails (non-negotiable — bake into every build):**
- The bot **never** states refund policies, pricing commitments, legal or medical advice, or anything contractual. Air Canada was held liable for its chatbot's wrong answer (*Moffatt v. Air Canada*, 2024 — ABA analysis). Bot scope = FAQ + capture + booking + handoff.
- Every bot: visible "AI assistant" disclosure + "talk to a human" path.
- Client signs off on the knowledge base; changes go through us, in writing.
- Healthcare clients (`01_TARGET_SEGMENTS.md` segment 5): **no patient names, conditions, or appointment details in SMS without a BAA and a HIPAA-compliant vendor path.** If we can't get a BAA, we scope reminders as generic ("you have an appointment tomorrow") or decline.

**Upsell path:** Starter → Front Desk (the voice agent upsell is +$147/mo for ~$50 more cost) → reviews/reactivation (Never Miss Revenue) → Local SEO (#4).
**Do NOT promise:** "answers every question perfectly" · staffing replacement claims · 24/7 *human* support (24/7 is network-level per our public claims) · guaranteed booked-appointment counts.

---

## 4. Service 3 — Workflow Automation Sprint (from $1,000 per sprint)

**What it is:** automate quotes, invoicing, scheduling, lead follow-up, and admin busywork with AI + Zapier/Make. Market check: basic automation builds run $1,500–$12,000 with $500–$5,000/mo retainers (Arsum/Taskip/Digital Agency Network) — we deliberately price at the accessible bottom and win on volume.

| Tier | Price | What's included |
|---|---|---|
| **One-Workflow Sprint** (canonical entry) | **$1,000** | One workflow end-to-end (e.g., "web lead → instant text + email → CRM → owner notified"), built in 1 week, tested with 10 live runs, loom walkthrough + SOP doc |
| **Three-Workflow Sprint** | $2,500 | Three workflows (typical: quote follow-up, invoice chasing, appointment scheduling), 2 weeks, SOPs for each |
| **Ops Pilot** | $5,000 | One core process automated end-to-end + a Looker Studio dashboard + 30 days of monitoring/fixes; then optional **Care Retainer $250–$500/mo** (monitoring, fixes, one new automation/quarter) |

**Delivery checklist:** [ ] 45-min process-mapping call (record it) · [ ] map current process in writing, client confirms · [ ] tool subscriptions opened **on the client's card** (Make from ~$9/mo or Zapier from ~$20/mo — they own their stack; verify current pricing at signup) · [ ] build · [ ] 10 live test runs logged · [ ] failure-path defined (what happens when a step errors — owner gets notified, nothing silently drops) · [ ] SOP + loom recorded · [ ] handoff call · [ ] 2-week check-in.

**Sales ammo by segment** (details in `01_TARGET_SEGMENTS.md`): trucking = invoicing lag + dispatch chaos; professional services = intake + document drudgery (firms using intake tech see 51% more leads / 52% more revenue — Clio); home services = slow quotes.

**Upsell path:** One workflow → Three → Ops Pilot → Care Retainer → dashboards (#6).
**Do NOT promise:** headcount reduction numbers · "fully autonomous" anything · deep ERP/TMS/EMR integrations at this price (that's real engineering — scope as #6 or decline per `RESEARCH_SMB_MARKET` §5) · automations touching patient data without the HIPAA path above.

---

## 5. Service 4 — Local SEO & AI Visibility (from $500/mo)

**What it is:** Google Business Profile optimization, a reviews engine, local rankings, and visibility in AI search (ChatGPT/Perplexity/AI Overviews). Market check: $500–$1,000/mo is the most common SMB SEO band — 64% of agencies charge under $1K (SE Ranking survey); AEO/GEO specialists charge $1,000–$2,500/mo entry (Digital Elevator) — we bundle the AEO basics in and undercut.

| Tier | Price | What's included |
|---|---|---|
| **Local Base** (canonical entry) | **$500/mo** | GBP fully optimized (categories, photos, posts 2x/mo, Q&A), review engine (automated post-job review requests via GHL + we draft responses to every review), NAP citations on the quality shortlist (Google/Bing Places/Apple Business Connect/LinkedIn/GoodFirms-tier directories), monthly report |
| **Local Growth** | $750/mo | Base + 2 local/vertical content pages per month (unique per-page data — no keyword-swap doorway pages, per Google's scaled-content policy), competitor rank tracking, FAQ schema on money pages |
| **Local Dominance** | $1,000/mo | Growth + 4 pages/mo, review responses posted same-day, AI-visibility work (entity building: directory profiles, answer-first content, quantified-claim case studies — 44% of LLM citations come from the first 30% of a page; FAQ schema correlates with ~3.2x higher AI Overview inclusion, Strive Labs), quarterly strategy call |

3-month minimum term; month-to-month after. Onboarding is covered by the Free Audit (no setup fee — that's a differentiator; competitors charge $500–$2,000 for the audit alone).

**Delivery checklist (month 1):** [ ] GBP claimed/verified, categories + services + attributes set · [ ] 10+ photos uploaded, posting calendar started · [ ] review-request automation live (A2P-registered number) · [ ] response templates approved by client · [ ] citation shortlist submitted, NAP identical everywhere · [ ] rank + review baseline screenshotted for the monthly report · [ ] GSC + Bing Webmaster verified on their site. **Monthly:** [ ] posts · [ ] pages (tier-dependent) · [ ] all new reviews responded · [ ] report sent with the same 5 numbers every month (reviews gained, avg rating, GBP actions, ranking movement, leads attributed).

**Sales ammo:** 97% of consumers read reviews, 89% expect owner responses (BrightLocal) · map-pack drives the "near me" clicks · long-tail "[service] + [city]" terms are winnable without domain authority (`05_SEO_PLAYBOOK.md`).

**Upsell path:** Base → Growth → Dominance → AI Growth Website (#1) when their site is the bottleneck → Marketing Engine (#5).
**Do NOT promise:** **"page 1 in 30 days" — never, in any words** · specific rank positions or dates · head-term rankings ("AI consulting", "best dentist") — AI Overviews suppress even position-1 CTR by up to 58% (Ahrefs) and ~58.5% of searches end zero-click · lead volume guarantees. Promise instead: the work list, the monthly report, and the trend.

---

## 6. Service 5 — AI Marketing Engine (from $750 setup + $400/mo)

**What it is:** content + email systems, CRM setup, and social presence run with AI leverage. Highest-demand category — 53–54% of SMBs already use AI for marketing, the #1 entry point (Capsule/Verizon 2025).

| Tier | Price | What's included |
|---|---|---|
| **Engine Start** (canonical entry) | **$750 setup + $400/mo** | CRM set up in GHL sub-account (pipeline, tags, lead sources), 2 email sends/mo to their list, 8 social posts/mo (drafted with AI, human-edited, client-approved), lead-capture form + welcome sequence, monthly report |
| **Engine Grow** | $1,000 setup + $750/mo | Start + 12 posts/mo, 1 blog post/mo, lead-nurture sequence (5-touch), database reactivation campaign each quarter, monthly 30-min call |
| **Engine Scale** | $1,500 setup + $1,200/mo | Grow + 2 blog posts/mo, one campaign/quarter (offer + landing page + email push), simple attribution dashboard. (Full-service agencies charge $4K–$12K/mo — Digital Agency Network — we are explicitly NOT that; cap the promise accordingly.) |

**Delivery checklist:** [ ] brand-voice intake (30 min, record) · [ ] CRM pipeline + sources configured · [ ] email domain authenticated for the CLIENT (SPF/DKIM/DMARC on *their* domain — same bulk-sender rules from `03_COLD_EMAIL_PLAYBOOK.md` apply to client marketing mail) · [ ] **client's list is opt-in only; every marketing email has one-click unsubscribe + client's physical address; opt-outs honored within 10 business days (we do it same-day); target spam complaints <0.1%** (CAN-SPAM + Google/Yahoo bulk-sender rules) · [ ] content calendar approved monthly in advance · [ ] report with list growth, open/reply proxies, leads.

**Upsell path:** Start → Grow → Scale → Local SEO bundle (#4 + #5 at $100/mo off combined) → website rebuild (#1).
**Do NOT promise:** follower counts, virality, specific open rates (open tracking is unreliable post-Apple MPP — optimize on replies/leads) · revenue attribution we can't measure · posting on their behalf without written content approval.

---

## 7. Service 6 — Custom Projects & Fractional Consulting ($1,500–$5,000 typical, scoped free)

**What it is:** dashboards, custom software, feasibility studies, business plans, cloud architecture. This is where the **network consultants** (75/25 split) and senior oversight come in — and the natural home for referral-program deals.

**Menu of typical scopes (anchor, don't fix-price until scoped):**
- Looker Studio / Sheets KPI dashboard wired to their tools — from $1,500
- Feasibility study or business plan (our heritage: Gibraltar Business Group testimonial, Tabletop Village location-move plan) — $1,500–$3,500
- Custom internal tool / integration build — $2,500–$5,000
- Fractional consulting — sold as project blocks in the $1,500–$5,000 band, scoped free

**Process (matches public promises):** inquiry → response within 24h → free scoping call → written proposal within 24h (`09_FIRST_14_DAYS_SPRINT.md` rule) → dedicated PM assigned → milestone billing for multi-month work, Net 30 otherwise.

**Delivery checklist:** [ ] written scope with explicit exclusions · [ ] fixed price + milestone schedule (never open-ended hourly to SMBs) · [ ] consultant matched in 3–7 business days (public claim) · [ ] PM weekly client update · [ ] acceptance criteria signed before build starts · [ ] closeout: review ask + referral ask + upsell to a retainer service.

**Take / decline line (from `RESEARCH_SMB_MARKET` §5):** we DECLINE custom LLM development, $15K+ bespoke chatbots, deep ERP/logistics integrations, and anything needing true 24/7 on-call engineering. Below $400 TPC we also decline (break-even is $360). Refer out gracefully; a good "no" earns referrals.

---

## 8. The ladder (how the 6 services chain together)

```
FREE AI OPPORTUNITY AUDIT  (the only free thing we do)
   └─> #2 Receptionist Starter $750 + $150/mo   (wedge: fastest ROI proof)
        └─> #2 Front Desk $297/mo  ──> #4 Local SEO $500/mo ──> #5 Marketing Engine $400/mo
        └─> #1 Website $1,500 (+$99/mo care)     └─> #3 Automation Sprint $1,000+
                                                       └─> #6 Custom / dashboards $1,500–5,000
Every closed client ──> Google review ask + referral-program pitch (07_REFERRAL_ACTIVATION.md)
```

Land-and-expand is the documented winning pattern: start with one $100–$300/mo workflow, prove ROI in their own dashboard, then expand (Arsum). A client on Receptionist + SEO + Care Plan = **$750+/mo recurring** on ~$60/mo of wholesale cost.

---

## 9. Discount rules (the ONLY allowed deviations — everything else needs a founder)

1. **Floor: never below $400 TPC** on any project; never below $99/mo on any retainer.
2. **Founding-client pilot (first 10 logos only, tracked in `11_METRICS_AND_TRACKING.md`):** 20% off any setup fee **OR** first retainer month at 50% — never both. In exchange the client agrees in writing to: a Google review at day 30 (if happy), case-study rights (anonymized OK), and 2 warm introductions.
3. **Every discount expires 7 days** after the proposal date. Say so in the proposal.
4. **Nothing is free except the Audit.** No free pilots, no "pay only if it works" (we can't attribute outcomes yet — see §10).
5. Bundling beats discounting: #4 + #5 together = $100/mo off; #1 + #2 together = $250 off setup.
6. Full pilot mechanics for the launch sprint: `09_FIRST_14_DAYS_SPRINT.md` §6.

---

## 10. The global DO-NOT-PROMISE list (print it, tape it to the wall)

1. **No "page 1 in 30 days."** No ranking positions, no ranking dates. Ever.
2. **No outcome/revenue guarantees** we can't attribute — our own public terms already disclaim guaranteed results; a promise we can't measure is a refund we will owe. (Outcome pricing is a later-stage option once attribution tooling exists — not now.)
3. **No chatbot answering policy/refund/legal/medical/pricing questions unsupervised** (*Moffatt v. Air Canada*). Scope = FAQ, capture, booking, handoff.
4. **No PHI in automations without a BAA** and compliant vendors. No bulk SMS without A2P 10DLC registration.
5. **No 24/7 human support promises** — "24/7" is a network-level claim; delivery SLAs follow vendor SLAs.
6. **No fabricated testimonials, stats, or logos.** Usable public claims only: 12+ clients, 25+ projects, Tabletop Village 300% growth, the 8 named clients, 5.0 stars/12 reviews. (Note: cite Tabletop as **300%** — the live-site number — never 250%.)
7. **No quoting below the $400 floor,** no open-ended hourly to SMBs, no scope creep without a written change order.
8. **No enterprise cosplay:** we don't sell $4K–$12K/mo full-service retainers or $75K builds. We win at $150–$1,200/mo productized, in volume.
