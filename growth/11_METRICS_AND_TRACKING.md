# 11 — Metrics & Tracking: The Scoreboard

**Owner:** Metrics owner (default: Ops/Finance seat — `10_TEAM_EXECUTION_PLAN.md`). **Siblings:** targets trace to `00_GTM_MASTER_PLAN.md` §3–4 and `09_FIRST_14_DAYS_SPRINT.md` §7 · channel inputs come from `03`–`08` · the three CSV schemas live in `templates/`.

**Rule #1, above all others: every number gets logged the SAME DAY it happens.** Dials within 60 seconds of hangup (`04` §8). Emails sync from Instantly daily. Everything else by the 5pm check-in. A number recalled from memory at standup is a lie with good intentions — if it isn't logged, it didn't happen, and the Friday retro runs on fiction.

---

## 1. The funnel (canonical stage definitions — use these words, no others)

```
LEAD → CONTACTED → REPLIED → AUDIT BOOKED → AUDIT HELD → AUDIT DELIVERED
                                                → PROPOSAL → CLOSED → RETAINED
```

| Stage | Counts when… | Does NOT count… | Lives in |
|---|---|---|---|
| **Lead** | A row in the lead list with every (req) column filled and email verified (`08` §1) | Scraped rows missing owner/phone/verification — those are raw material, not leads | `lead-list-template.csv` |
| **Contacted** | ≥1 outbound touch logged (dial, delivered email, DM, walk-in) | Bounced emails, wrong numbers (`BAD-NUMBER`) | `outreach-tracker.csv` |
| **Replied** | Any human response — email reply, live phone conversation (`CONVO-*`), DM reply | Auto-replies, voicemail greetings | `outreach-tracker.csv` |
| **Audit booked** | A calendar slot for the 30-min audit call exists with date+time | "Sounds interesting, call me next month" (that's `CONVO-FOLLOWUP`) | both trackers + pipeline row created |
| **Audit held** | The 30-min call actually happened | No-shows (rebook once, then `not_now`) | `pipeline-tracker.csv` |
| **Audit delivered** | The written 5-point plan is in their inbox (≤48h SLA — log the timestamp) | A plan drafted but unsent | `pipeline-tracker.csv` |
| **Proposal** | Written proposal sent (from `templates/proposal-template.md`, ≤24h SLA) | Verbal price mentions on a call | `pipeline-tracker.csv` |
| **Closed** | Signed proposal AND first payment received (setup fee or first retainer charge) | Signatures without money — money defines closed | `pipeline-tracker.csv` |
| **Retained** | A retainer client who paid this month again | One-time project clients (track them for upsell instead) | `pipeline-tracker.csv` + billing |

One-way doors: a lead can exit at any stage to `not_interested`, `not_now` (with a revisit date), `disqualified` (log the reason — `01` rule 5), or **`do_not_contact` (permanent, all channels, checked before every send/dial)**.

---

## 2. The conversion math (why the targets are what they are)

Planning rates — benchmarks from `RESEARCH_OUTREACH`/`RESEARCH_SMB_MARKET`, with our two internal assumptions marked:

| Step | Rate we plan on | Source |
|---|---|---|
| Cold email → reply | 3.4% (platform avg; 5–10% = good) | Instantly multi-billion-send dataset; Belkins |
| Cold email → audit booked | 0.5–1% of sends | 2025 meeting-rate datasets (~0.8% avg) |
| Cold dial → conversation | ~20–26% on clean local owner-number lists (vs 5.4% generic — list quality is everything) | Cognism / Gong |
| Cold dial → audit booked | 2.3–2.5% of dials (~40 dials/meeting); we plan at 50–60% of benchmark for a junior team | Gong (300M calls) |
| Audit booked → held | **70% (our assumption)** — confirmations + reminder texts (with logged consent) protect this | internal |
| Audit held → closed | **25–30% (our assumption)** — we bring the prospect's own missed-call data | internal |
| Retainer retention | 95%/mo planning figure | internal |
| Referral intro → closed | 2–3x cold close rate | industry consensus, `07` |

**Worked example — steady state month (from `00` §4):** 2,000 email sends → ~68 replies → 10–20 audits booked. 2,000–2,600 dials → 20–30 audits. LinkedIn ~300 connects → 4–8. Referrals → 2–5 warm intros. SEO → 0–2 (growing to 3–6). **Total ≈ 40–60 booked → ~30–42 held (70%) → 8–12 new clients (25–30%).** That delivers the Month-3 revenue table in `00` §3. If a month misses, this chain shows exactly which link broke — fix the link, not the whole machine.

---

## 3. Daily targets by seat (log at 5pm; sprint quotas per `09` §2)

| Seat (`10_TEAM_EXECUTION_PLAN.md`) | Daily target | Red line |
|---|---|---|
| Caller (each) | 30 dials (40 from wk 3) · ≥1 audit booked per 1.5 days | <20 dials |
| List builder | 25 new verified leads · bounce-projected <2% | unverified rows entering sequences: zero tolerance |
| Email infra owner (wk 3+) | sends per ramp (5–10 → 25–30/day/mailbox) · replies answered <2h · opt-outs same-day | bounce >2% or complaints >0.1% on any mailbox = pause that mailbox TODAY (`03` kill-switch) |
| LinkedIn/social owner | 15 connects + 10 DMs · posts per calendar | — |
| Audit callers | 2 pre-call inspections each · plans out ≤48h | any plan >48h = founder notified same day |
| Founders | 5 warm/partner conversations · every proposal ≤24h · 48h follow-up calls made | — |
| Ops owner | daily rollup posted by 5:30pm · suppression list synced | any DNC violation = full-stop process review (`09` §7) |

---

## 4. The three CSV templates (schemas — column-by-column)

Setup (Day 1, 30 min): create ONE Google Sheet, "MyCo Growth Tracker." Import each CSV from `templates/` as its own tab: **Leads**, **Activities**, **Pipeline**. Add two more tabs: **Do-Not-Contact** (columns: name, business, phone, email, channel of request, date — the master suppression list synced with Instantly's blocklist) and **Scorecard** (§5). Each CSV ships with 2 example rows — **delete them before real use.** Protect header rows. One row-owner per row; Ops audits daily.

### 4a. `templates/lead-list-template.csv` — one row per business (the canonical schema is `08_LEAD_LIST_BUILDING.md` §1; summary here)

| Column | Meaning / allowed values |
|---|---|
| `lead_id` | `S1-0001` style: segment-serial. Assigned at creation, never reused |
| `date_added` | YYYY-MM-DD |
| `segment` | 1–6 per `01_TARGET_SEGMENTS.md` (one per row) |
| `business_name` | Exactly as the business writes it |
| `owner_first`, `owner_last` | The decision-maker per segment ICP |
| `role` | owner / office_manager / partner / GM |
| `phone` | +1XXXXXXXXXX |
| `phone_type` | landline / wireless / voip / unknown — **wireless/unknown = hand-dial-only personal-cell treatment** (TCPA, `04`) |
| `email` | — |
| `email_status` | valid / catch_all / invalid / unverified — **only `valid` enters campaigns** |
| `website` | URL or `none` (`none` is a selling signal) |
| `gbp_review_count`, `gbp_rating` | integer · 1.0–5.0 (ICP filter ~10–200 reviews) |
| `city`, `state` | **US only** — non-US rows deleted (CAN-SPAM vs CASL/GDPR) |
| `source`, `source_url` | gmaps / sos_registry / license_board / bar_directory / chamber / yelp / angi / thumbtack / fmcsa / apollo / linkedin / referral-internal + link |
| `linkedin_url` | mainly segments 2 & 4 |
| `dnc_flag` | Y / N / na — National DNC Registry check for sole proprietors, re-scrubbed every 31 days |
| `do_not_contact` | Y / N — OUR permanent suppression, all channels |
| `status` | new / in_sequence / calling / replied / meeting_set / client / not_now / not_interested / sequence_done / disqualified |
| `disqualify_reason` | franchise / staffed_247_desk / hipaa_pregate / too_big / too_small / non_us / other |
| `assigned_to` | one rep per row |
| `notes`, `last_touch_date` | test-call results, gatekeeper names · YYYY-MM-DD |

### 4b. `templates/outreach-tracker.csv` — one row per TOUCH (every dial, email, DM, walk-in, partner pitch)

| Column | Meaning / allowed values |
|---|---|
| `activity_id` | `ACT-####`, sequential |
| `date`, `time_local` | when the touch happened (prospect-local time — proves the 8am–9pm call window) |
| `rep` | who made the touch |
| `channel` | call / email / linkedin / walkin / warm_text / partner |
| `lead_id`, `business_name`, `segment`, `state` | joins to the Leads tab; `state` matters for call-window and FL/OK rules |
| `attempt_num_24h` | nth attempt in the last 24h — **must never exceed 3** (FL/OK cap adopted globally, `04`) |
| `attempt_num_total` | lifetime attempts (cap 6 per `04`) |
| `missed_call_test` | MC-FAIL / MC-SLOW / MC-PASS / blank (pre-call test result — MC-FAIL leads dial first) |
| `disposition` | **calls:** NO-ANSWER · VM-LEFT · GATEKEEPER · CONVO-NO · CONVO-FOLLOWUP · AUDIT-BOOKED · DNC · BAD-NUMBER · WALK-IN. **email:** SENT · REPLY-POSITIVE · REPLY-NEGATIVE · REPLY-REFERRAL · UNSUBSCRIBE · BOUNCE. **social:** CONNECT-SENT · CONNECT-ACCEPTED · DM-REPLY |
| `txt_ok` | yes / no — texting consent captured on a live call ONLY (`04` §7). No yes, no text |
| `audit_booked` | Y / N (Y also creates a Pipeline row same day) |
| `audit_datetime` | if booked |
| `next_action`, `next_action_date` | the ONE next step + date (a row with no next action is a dead row) |
| `notes` | one line of intel: what they said, decision-maker, best time |

**Compliance columns are not optional:** `time_local`, `attempt_num_24h`, `txt_ok`, and DNC dispositions are our audit trail if anyone ever challenges a call (TSR recordkeeping now covers B2B). `UNSUBSCRIBE`/`DNC` rows must be mirrored to the Do-Not-Contact tab and Instantly blocklist **the same day**.

### 4c. `templates/pipeline-tracker.csv` — one row per OPPORTUNITY (created at audit-booked, updated to retained/lost)

| Column | Meaning / allowed values |
|---|---|
| `opp_id` | `OPP-####` |
| `lead_id`, `business_name`, `segment` | joins to Leads |
| `source_channel` | cold_call / cold_email / linkedin / walkin / warm / referral / seo_inbound — **first touch wins; never blank** (channel CAC depends on it) |
| `referral_partner_id` | `REF-YYYY-###` if partner-sourced — drives commission (`07` §9); no ID, no commission |
| `stage` | audit_booked / audit_held / plan_delivered / proposal_sent / verbal_yes / closed_won / closed_lost / retained |
| `audit_booked_date`, `audit_held_date` | YYYY-MM-DD (booked→held gap feeds the 70% show-rate check) |
| `plan_delivered_date`, `plan_sla_met` | date + Y/N against the 48h SLA |
| `proposal_sent_date`, `proposal_expiry_date` | expiry = sent + 7 days (the discount deadline — `02` §9) |
| `one_number_monthly_loss` | the $ lost-revenue number computed on the audit call — the proposal headline |
| `services_quoted` | canonical names from `02` only |
| `option_a_price`, `option_b_price` | as quoted, e.g. "$750 setup + $150/mo" |
| `founding_pilot` | Y / N — counts against the first-10-logos cap (`02` §9; Ops enforces the cap here) |
| `close_date`, `setup_revenue`, `project_revenue`, `mrr` | money reality: setup fees, one-time project fees, monthly recurring |
| `closer`, `owner_rep` | founder who closed · rep who sourced |
| `lost_reason` | price / timing / diy / competitor / ghosted / disqualified — reviewed at retro |
| `next_step`, `next_step_date` | every open row has one, dated. **Overdue next-steps are the first thing read at Monday pipeline review** |
| `notes` | context the next person needs |

---

## 5. The weekly scorecard (copy this block into the Scorecard tab every Monday)

Green/yellow/red thresholds for weeks 1–2 come from `09` §7; steady-state targets (week 4+) below derive from `00` §4.

```
WEEK OF: ____________          FILLED BY: Ops, Monday 8:30am
                                        TARGET    ACTUAL    R/Y/G
ACTIVITY
  Dials logged                          750 (5 callers × 30 × 5d)
  Cold emails delivered (wk 3+)         400–500 ramping to 2,000/mo
  LinkedIn connects / DMs               75 / 50
  Walk-in doors                         20
  Partner conversations                 5
  New verified leads added              125
FUNNEL
  Replies (all channels)                
  Audits BOOKED                         10–14
  Audits HELD (show % vs 70%)           7–10
  Plans delivered (% within 48h SLA)    100% SLA
  Proposals sent (% within 24h SLA)     3+ / 100% SLA
  CLOSED (count / $ setup+project / $ new MRR)   2–3 / per 00 §3 ramp
  Referral: new partners signed / referred leads 1+ / tracking to 07 §10
HEALTH (auto-fail items — any red here overrides a green week)
  Email bounce rate (<2%)               
  Spam complaint rate (<0.1%)           
  DNC/do-not-contact violations (must be 0)
  Overdue next-steps in pipeline (target 0)
  Founding pilots used (cap: 10 lifetime)
MONEY
  Cash collected this week              
  Total MRR active / churn              
FIVE QUESTIONS FOR FRIDAY RETRO
  1. Which link of the §2 chain underperformed, and is it volume or conversion?
  2. Best-performing script/subject line this week (steal it everywhere)?
  3. What gets killed? (worst variant per channel)
  4. Are we inside every capacity guardrail (10 §4)? If not, pause-sell?
  5. One process fix for next week (only one).
```

**Reading the scorecard (same triage as `09` §7):** audits red → it's list quality or volume, fix per `08` before touching scripts. Audits green but proposals red → the audit call isn't ending with the walkthrough booking, retrain `02` §1b. Proposals green but closes red → founders take every close call next week and read the pilot terms aloud. Health section red → **stop, fix, then resume** — no growth number outranks a compliance breach.

---

## 6. Daily logging mechanics (how numbers actually get in)

1. **Calls:** logged in Activities within 60 seconds of hangup (`04` §8 — "no log, no dial counted").
2. **Email:** Instantly is the source of truth for sends/replies/bounces/unsubs; Email owner transcribes the day's totals + each reply row into Activities at the 1pm and 5pm triages. Unsubscribes hit the Do-Not-Contact tab immediately, not at 5pm.
3. **Everything else** (DMs, walk-ins, partner pitches, warm texts): logged by the rep before the 5pm check-in.
4. **5:00pm EOD check-in (everyone, async, in the team channel — 2 minutes):**
   ```
   [Name] EOD: dials 30 · convos 6 · audits booked 1 · emails/DMs 10 ·
   plans out 2 (SLA ✓) · proposals 1 · blockers: none · best moment: [1 line]
   ```
5. **Ops rollup by 5:30pm:** totals vs daily targets posted to the channel; anything red gets a name and a fix-by-tomorrow note. Ops also spot-checks 5 random Activity rows/day against the Leads tab (joins intact? states logged? consent columns filled?).
6. **Monday 8:30am:** Ops fills the scorecard before the 9:00 pipeline review. Numbers never get assembled *in* the meeting.

**Derived metrics — computed weekly by Ops, never eyeballed:** reply rate = replies ÷ delivered · book rate = audits booked ÷ contacted (by channel) · show rate = held ÷ booked · close rate = closed_won ÷ audits held · **cost per client by channel** = (channel tool cost + labor hours × $25 planning rate) ÷ closes (kill anything >$500/client at the day-90 gate, `00` §6) · MRR = Σ active `mrr` · churn = cancelled MRR ÷ starting MRR · pipeline value = Σ open option_a_price weighted 50% past proposal_sent.

---

## 7. What we do NOT track (so nobody wastes a Friday on it)

- **Open rates** — Apple Mail Privacy Protection auto-fires tracking pixels; reported opens are noise, and the pixel itself hurts deliverability. We optimize on replies (`03`).
- Social follower counts, impressions, likes — log audits-from-social instead (`06`).
- Website traffic as a headline number — GSC impressions/clicks on money keywords and audit-form submissions are the SEO numbers that matter (`05`).
- Anything measured but never reviewed: if a number wouldn't change a Friday decision, stop logging it.

---

*Sibling playbooks: `00_GTM_MASTER_PLAN.md` (the targets' source) · `04` §8 and `03` §runbook (channel logging rules) · `08` §1 (lead schema canon) · `09` §7 (sprint scorecards) · `10_TEAM_EXECUTION_PLAN.md` (who owns which number).*
