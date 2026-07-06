# 03 — Cold Email Playbook: Infrastructure, Compliance, Sequences, Templates

**Owner:** Email pod (1 owner + 1 backup). **Siblings:** segments & hooks in `01_TARGET_SEGMENTS.md` · offers in `02_OFFERS_AND_PRICING.md` · lists in `08_LEAD_LIST_BUILDING.md` · sprint timing in `09_FIRST_14_DAYS_SPRINT.md` · daily logging in `11_METRICS_AND_TRACKING.md` · copy also lives in `templates/`.

**The one thing to internalize:** cold email is a *deliverability game first and a copy game second*. A burned domain costs 3+ weeks. Every rule below exists because someone else already burned a domain finding it out. Warmup takes 2–4 weeks — that's why infra gets built **Day 1** (see `09_FIRST_14_DAYS_SPRINT.md`) even though real sends don't start until week 3.

---

## 1. Infrastructure setup (Day 1 — takes one person ~3 hours)

### 1.1 The iron rule

**Never send cold email from `myconsulting.network`.** That domain carries the website, client email, and Google Workspace reputation. Cold goes out on disposable lookalike domains only.

### 1.2 Buy 2 lookalike domains (~$10–13/yr each)

1. Go to a cheap registrar (Cloudflare Registrar, Porkbun, or Namecheap — all ~$10–13/yr for .com/.net; avoid "free first year" deals with $30 renewals).
2. Buy **two** of these (check availability, in this order of preference):
   - `myconsultingnetwork.com`
   - `getmyco.net`
   - `trymyconetwork.com`
   - `myconetwork.co`
3. Rules: no hyphens if avoidable, no weird TLDs (.xyz/.top/.click are spam-flagged), name must obviously read as us.
4. **301-redirect both domains to `https://myconsulting.network`** (registrar-level redirect or Cloudflare rule). A prospect who types the domain must land on the real site — this is both a trust and a CAN-SPAM "accurate identity" point.
5. Buy a **third domain only when** the first two are warmed and we want >100 sends/day (not before week 6).

### 1.3 Create mailboxes — Google Workspace, $7/user/mo (annual; $8.40 month-to-month)

- Sign each lookalike domain up for its own Google Workspace Business Starter.
- **2 mailboxes per domain, maximum 3** (Google's own guidance; more mailboxes share one domain reputation and die together).
- Use real team members' names: `ranvir@myconsultingnetwork.com`, `ethan@myconsultingnetwork.com`, etc. Real first-name mailboxes, real profile photo, real signature. No `sales@`, no `info@`.
- Fill out each account like a human's: profile photo, signature, send 5–10 manual emails to teammates on day 1 and reply to them.
- Total: 4 mailboxes × $7 = **$28/mo**.

### 1.4 DNS records — SPF, DKIM, DMARC on EVERY sending domain

This is mandatory, not optional: Google/Yahoo (since Feb 2024) and Microsoft (since May 2025) require SPF + DKIM + DMARC-with-alignment from bulk senders, and in practice filters junk unauthenticated mail at *any* volume. Set all three before the first warmup email.

At each domain's DNS panel, add (example values for `myconsultingnetwork.com`):

| Type | Host/Name | Value | Notes |
|---|---|---|---|
| MX | `@` | `smtp.google.com` (priority 1) | Google Workspace's current single MX record |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | SPF. Exactly one SPF record per domain — never two |
| TXT | `google._domainkey` | `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOC...` (long key) | DKIM. Generate in Google Admin → Apps → Google Workspace → Gmail → Authenticate email → **2048-bit** → copy the record → then click "Start authentication" |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc-reports@myconsulting.network; adkim=r; aspf=r` | DMARC. Start at `p=none` (monitor). Move to `p=quarantine` after 30 clean days |

Verification (do not skip):
- [ ] Send a test email from each mailbox to a personal Gmail → open it → three-dot menu → "Show original" → confirm **SPF: PASS, DKIM: PASS, DMARC: PASS**.
- [ ] Run each domain through MXToolbox (free) — no blacklist hits, records resolve.
- [ ] Register both domains in **Google Postmaster Tools** (free) — this is where the spam-complaint rate lives. Check it every Monday.

### 1.5 Sending tool — comparison and our pick

| Option | Price | Verdict |
|---|---|---|
| **Instantly (Growth)** | **$37/mo annual / $47 monthly** — unlimited mailboxes, built-in warmup pool, sequences, unified inbox, unsubscribe headers | **← OUR PICK.** Cheapest way to run 4 mailboxes with warmup included; simplest UI for a junior pod |
| Smartlead (Basic) | $39/mo ($32.50 annual) | Equivalent; fine fallback if Instantly onboarding stalls. Don't run both |
| Manual Gmail | $0 | No warmup, no sequencing, no unsub headers, no suppression list, no throttling. Only acceptable for the first handful of warm-intro emails — never for cold volume |

Instantly setup checklist:
- [ ] Connect all 4 mailboxes (app password or OAuth).
- [ ] **Warmup ON for every mailbox** (see §2) — leave it on forever at reduced volume.
- [ ] **List-Unsubscribe headers ON** (one-click unsub, RFC 8058) — Google/Yahoo require it for bulk marketing mail and honor must happen within 2 days on their headers; costs us nothing, protects the domain.
- [ ] **Open tracking OFF.** Apple Mail auto-fires tracking pixels so open rates are fiction anyway, and the pixel itself hurts deliverability. We manage by *reply rate* only (Instantly's own dataset: platform average 3.4% replies).
- [ ] If we ever track link clicks: custom tracking domain (CNAME) — never the shared default. Better: zero links in emails 1–2 (see templates).
- [ ] Sending schedule: Mon–Thu, 8:00am–4:00pm **prospect-local time**, randomized 6–15 minute gaps between sends.

### 1.6 Total infra budget

| Item | Cost |
|---|---|
| 2 domains | ~$26/yr (~$2/mo) |
| 4 Google Workspace mailboxes | $28/mo |
| Instantly Growth | $37–47/mo |
| MillionVerifier (verification, pay-as-you-go) | ~$10/mo effective ($37/10k) |
| Physical mailing address (if no office — see §4) | ~$10–30/mo |
| **Total** | **~$85–115/mo** for ~2,000 verified sends/mo |

---

## 2. Warmup and volume ramp (calendar this — no exceptions, no shortcuts)

Deliverability consensus: **2–4 weeks warmup minimum, 3 typical.** Filters watch for sudden volume; never raise any mailbox's daily volume more than ~20% day-over-day.

| Week | Per mailbox, per day | What's happening |
|---|---|---|
| **Week 1** | Warmup only: 5–10 automated warmup emails/day (Instantly pool), doubling roughly weekly | Zero cold sends. Humans also send/reply a few real emails from each box |
| **Week 2** | Warmup + **5–10 cold/day** | First real sends — Segment 1 & 2 lists only, best-verified rows |
| **Week 3** | Warmup + **15–20 cold/day** | Watch bounce + complaint dashboards daily |
| **Week 4+** | Warmup + **25–30 cold/day** (our standing cap) | Steady state: 4 mailboxes × 25 = **~100 cold/day ≈ 2,000/mo** |

Standing rules:
- **Cap: 30 cold/day/mailbox. Hard ceiling: 50, and we don't go there without founder sign-off.**
- **Warmup never turns off** — it runs at 20–40% of volume forever.
- A brand-new mailbox added later starts its own Week 1. No exceptions because "the domain is already warm."

### Kill-switch (print this)

Pause a mailbox for the day and tell the pod lead if ANY of:
- [ ] Bounce rate on any campaign > **2%** → stop, re-verify the list (`08_LEAD_LIST_BUILDING.md` §6), resume only with a clean list.
- [ ] Google Postmaster spam rate ≥ **0.1%** → at our volume (~2,000/mo) that's just **2 complaints a month**. One complaint = review what list it came from. Two in a month = pause the campaign, founders review the copy and targeting. (Google enforces at 0.3% — temp-fails, then rejects. We never get near it.)
- [ ] Warmup emails landing in spam (Instantly shows this) → pause cold from that box 3–5 days, let warmup repair it.
- [ ] Blacklist hit on MXToolbox weekly check → pause domain, investigate.

---

## 3. List hygiene (gate before every send)

Full list-building mechanics live in `08_LEAD_LIST_BUILDING.md`. The email pod's non-negotiable gate:

1. **Every list is verified before upload — no exceptions.** Tool: **MillionVerifier — $37 per 10,000 verifications (~$0.0037/email), pay-as-you-go, cheapest reputable option.** Alternatives at ~$8/1k for small batches: NeverBounce, ZeroBounce. Verify the day before sending, not weeks before.
2. Upload **"valid" results only**. "Catch-all/risky" go to a separate low-volume campaign (max 10/day total across all mailboxes) or to the calling pod instead. "Invalid" and "unknown" are deleted, never sent.
3. Target **hard bounce < 2%** — bounce spikes are the fastest way to nuke a domain's reputation.
4. Dedupe against: (a) all active Instantly campaigns, (b) the master **suppression list** (every opt-out, every "not interested," every existing client/partner), (c) the calling pod's do-not-contact log. One prospect, one sequence, ever.
5. **US prospects only.** CAN-SPAM permits cold B2B email (opt-out regime); Canada (CASL) and the EU (GDPR/ePrivacy) do not work that way. Non-US rows get deleted at the list stage.
6. One segment per campaign. Never mix verticals in a sequence — personalization is the whole edge (heavily personalized campaigns run ~18% replies vs ~9% generic — Instantly/Belkins data).

---

## 4. CAN-SPAM compliance — baked into every send (fines up to $53,088 PER EMAIL — FTC)

This is not a disclaimer section; these are build steps. Cold B2B email is **legal in the US** if and only if all of the below are true on every single message:

- [ ] **Accurate From/Reply-To:** real person's name, our real lookalike domain, reply-to monitored daily. Never spoof, never "re:" a thread that doesn't exist.
- [ ] **No deceptive subject lines:** subject must reflect content. `your phone line` on an email about their phone line = fine. `invoice attached` = fraud. Our subject bank in §6 is pre-cleared; don't improvise weird ones.
- [ ] **The message reads as what it is** — a commercial offer. The FTC is flexible on labeling; a transparent pitch satisfies it. Don't disguise the ask.
- [ ] **Valid physical postal address in every email.** Street address, PO Box, or registered private mailbox all satisfy the law. **Day-1 task for founders if we have no office address:** get a registered private mailbox (iPostal1 from ~$10/mo, or a UPS Store box ~$15–30/mo — prices approximate) so we're not printing a home address 2,000 times a month. Until it exists, cold email does not launch. The address goes in the signature block (§5).
- [ ] **Clear, conspicuous opt-out in every email**, working for **at least 30 days** after send, requiring nothing beyond an email address — no fee, no login, no "why are you leaving" form.
- [ ] **Opt-outs honored within 10 business days — our standard is SAME DAY.** Process in §7. Opted-out addresses are never sold, transferred, or re-added.
- [ ] **We're liable even when a tool sends for us** — which is why one named owner checks the Instantly unified inbox and suppression list every morning.

### The opt-out line (use exactly this — it complies without screaming "mass email")

A giant UNSUBSCRIBE banner is a spam-filter feature and a reply-rate killer. A plain human sentence is equally compliant (CAN-SPAM allows reply-based opt-out) and reads like a person wrote it. **Both of these run on every cold email:**

1. **In the visible signature:** the plain-text line below.
2. **In the headers:** Instantly's one-click List-Unsubscribe (§1.5) — invisible to most readers, satisfies Google/Yahoo bulk rules, and Gmail renders its own "Unsubscribe" link from it.

**Standard signature block (bottom of every email in every sequence):**

```
{FirstName} {LastName} — MyConsulting Network
myconsulting.network · {MYCO_MAILING_ADDRESS}
If this isn't relevant, just reply "no thanks" and I won't email again.
```

Three lines, no images, no logo, no social icons, no link farm. Replace `{MYCO_MAILING_ADDRESS}` once the mailbox exists; it is a launch blocker.

---

## 5. Copy rules (from the 2025 data, not folklore)

- **Subject lines: 1–4 words, lowercase, internal-looking.** Lavender: 2-word subjects get ~60% more opens than 5-word. Question-framed subjects ran ~46% opens in Belkins' study. **Never put the prospect's first name in the subject** — Salesloft data shows 12% *fewer* replies. Personalize with company/context instead (`intake at {firm}` yes, `Ranvir, quick question` no).
- **Body: 50–100 words. One idea. One soft CTA.** Gong/30MPC's 85M-email dataset: reply rates fall off a cliff past ~100 words. Interest-based CTAs ("worth a look?") outperform calendar asks ("book 15 minutes").
- **Plain text.** No images, no attachments, no HTML buttons, max one link total (prefer zero in emails 1–2 — a reply is the click).
- **Lead with THEIR number.** The audit motion from `01_TARGET_SEGMENTS.md` — missed-call test, speed-to-lead stopwatch, no-show count — is the highest-leverage tactic in the research. "We called you Tuesday at 2:15pm" beats any stat about other people.
- **Follow-ups go in the same thread** (reply to your own email). Sequences of 3+ steps roughly double total reply yield vs one-and-done; 2–4 follow-ups is the sweet spot. We use 3 emails + 1 cross-channel touch.
- **Test one variable at a time** and don't judge anything before ~200 sends of that variant.

### The standard cadence (3 emails + 1 cross-channel touch over 14 days)

| Touch | Day | What |
|---|---|---|
| Email 1 — Opener | Day 1 | 60–90 words: their number/segment stat → offer → "worth a look?" |
| Email 2 — Bump | Day 4 | 25–45 words, same thread: one new proof point, restate micro-CTA |
| Touch 3 — Cross-channel | Day 7–8 | Call (`04_COLD_CALLING_PLAYBOOK.md`) or LinkedIn touch (`06_LINKEDIN_SOCIAL_PLAYBOOK.md`): "sent you a note last week about X" |
| Email 3 — Breakup | Day 10–14 | 40–70 words, same thread: close the loop, leave the free-audit door open, stop |

After the breakup: stop. The lead goes to `status = sequence_done` in the tracker and can be recycled into a different-angle campaign after 90+ days, once, unless they opted out.

---

## 6. THE TEMPLATES — 3-email sequence + 5 subject lines per segment

Rules for use: pick ONE subject per campaign (test a second after 200 sends). `{curly}` fields are mandatory merge fields — a template with an unfilled field never sends. Every email ends with the standard signature block from §4. Stats cited are pre-cleared from `01_TARGET_SEGMENTS.md`; don't swap in numbers from memory. Full copies also live in `templates/`.

---

### Segment 1 — Home & Field Services (PRIORITY 1)

**Subjects:** `your phone line` · `missed call test` · `we called {Company}` · `jobs slipping?` · `tuesday's call`

**Email 1 — Opener (Day 1).** *Requires the live missed-call test from `01_TARGET_SEGMENTS.md` — call their line twice during a workday first. If both calls were answered, use the fallback first line.*

> {FirstName} —
>
> Called {Company} {day} at {time} — straight to voicemail. Not a knock: 62% of calls to small businesses go unanswered (411 Locals' study), usually because the owner's on a job. The problem is 85% of people who hit voicemail never call back — they just call the next {trade} on Google.
>
> We fix that for $150/mo: a system that texts every missed caller back in seconds and books the job. We set it up for you in days.
>
> Worth a look?

*Fallback first line (if they answered both test calls):* "You answered when I called {day} — you're already ahead of the 62% of small-business calls that go unanswered (411 Locals). The question is what happens when you're in a crawlspace."

**Email 2 — Bump (Day 4, same thread):**

> Quick bump — the average small business loses about $126K/yr to missed calls (Aira's data). One saved {trade} job pays for this for a year.
>
> Want the 2-line version of how the text-back works?

**Email 3 — Breakup (Day 12, same thread):**

> {FirstName} — closing the file on this one.
>
> For what it's worth: we did the website and SEO for Blue Landscaping and it "transformed our online presence into real customer growth" (their words). If calls ever start slipping, the free AI audit stands — 30 minutes, and you keep the written 5-point plan either way.
>
> Good luck out there.

---

### Segment 2 — Professional Services (law-led; PRIORITY 2)

**Subjects:** `intake at {Firm}` · `the other 60%` · `after-hours calls` · `prospect follow-up` · `we called {Firm}`

**Email 1 — Opener (Day 1):**

> {FirstName} —
>
> Clio's Legal Trends Report found only 40% of law firms answer calls from prospective clients — and 64% of prospects get zero follow-up of any kind. We called {Firm} {day} evening and got voicemail, so you're in good company.
>
> We build 24/7 intake for small firms: capture, qualify, book the consult — hard-scoped so it never gives legal advice or quotes fees. Flat $150/mo. Clio's data: firms using intake tech see 51% more leads.
>
> Worth a look?

**Email 2 — Bump (Day 4, same thread):**

> One more Clio number: firms using intake technology report 52% more revenue, not just more leads.
>
> Happy to show you exactly what a prospective client experiences when they call {Firm} after hours — takes 15 minutes. Interested?

**Email 3 — Breakup (Day 12, same thread):**

> {FirstName} — last note from me.
>
> If intake ever becomes the bottleneck, the offer stands: a free client-intake audit — we test your phone and web form like a prospect would and send a written 5-point plan within 48 hours. No obligation, and the plan's yours either way.
>
> All the best to the firm.

---

### Segment 3 — Healthcare & Wellness (dental-led; PRIORITY 3 — **GATED**)

> **GATE (from `01_TARGET_SEGMENTS.md`): until founders confirm the BAA-capable vendor stack, do NOT send emails promising reminder/intake automation.** Pre-gate, send only the reviews/visibility variant (marked below). Post-gate, the no-show sequence unlocks.

**Subjects:** `empty chairs` · `no-show math` · `last week's no-shows` · `chair time` · `your google reviews` *(pre-gate variant)*

**Email 1 — Opener (Day 1, POST-GATE version):**

> {FirstName} —
>
> The average practice loses about $150K/yr to no-shows (Denzif's analysis), and roughly a third of no-shows are pure forgetfulness. Published studies show multi-channel reminders cut no-shows 35–50%.
>
> We set this up for practices using HIPAA-compliant vendors under a signed BAA — flat monthly fee, not Podium's $400+/mo. Patient data never touches our systems.
>
> Want the 5-point plan for {Practice}? Free, written, 48 hours.

**Email 1 — PRE-GATE variant (reviews/GBP only — swap paragraph 1–2 for):**

> 97% of consumers read reviews and 89% expect the owner to respond (BrightLocal 2025) — which is why practices pay Podium or Birdeye $289–$589 per location per month just to keep up. We run the same reviews engine plus your Google profile and local rankings inside one $500/mo package.

**Email 2 — Bump (Day 4, same thread):**

> Quick math bump: at $500–$800 lost per empty chair-hour, how many no-shows did {Practice} eat last week?
>
> If you know the number, this conversation pays for itself. Worth 30 minutes?

**Email 3 — Breakup (Day 12, same thread):**

> {FirstName} — I'll stop here.
>
> If no-shows or the front-desk phone ever make the top-3 problems list, the free audit stands: 30 minutes, written 5-point plan in 48 hours, HIPAA constraints respected in writing. Until then — full chairs and quiet phones.

---

### Segment 4 — Real Estate & Property Management (PRIORITY 4)

**Subjects:** `15 hours` · `speed test` · `your test lead` · `first agent wins` · `zillow leads`

**Email 1 — Opener (Day 1).** *Requires the speed-to-lead test from `01_TARGET_SEGMENTS.md` — submit a test lead to their site/profile first and time the response.*

> {FirstName} —
>
> NAR's 2025 data: 78% of buyers work with the first agent who responds — and the average agent response time is about 15 hours. We submitted a test lead to {Brokerage} on {day}; the response came in {X hours/none yet}.
>
> We install instant response — every lead answered in under a minute, 24/7, then handed to your team — for $150/mo.
>
> Want the full speed report on your team? It's free.

**Email 2 — Bump (Day 4, same thread):**

> One stat and I'll leave you alone: responding within 5 minutes makes a lead ~21x more likely to qualify (GreetNow's lead-response data).
>
> Your drip campaign nurtures; it doesn't answer. Want the report?

**Email 3 — Breakup (Day 12, same thread):**

> {FirstName} — closing this out.
>
> The speed report on {Brokerage} is written either way; happy to send it, no strings. If losing deals to faster agents ever stings enough, the free audit is 30 minutes and you keep the 5-point plan.
>
> Good selling.

---

### Segment 5 — Restaurants, Local Retail & Entertainment (PRIORITY 5 — low email volume; primary motion is in-person, see `01_TARGET_SEGMENTS.md`)

**Subjects:** `friday 7pm` · `your phone at peak` · `missed reservations` · `we called friday` · `four-tops`

**Email 1 — Opener (Day 1).** *Requires the peak-hour call test — call Friday ~7pm and document.*

> {FirstName} —
>
> We called {Restaurant} Friday at {time} — {rang out / voicemail / busy}. Normal: restaurants miss up to 80% of calls at peak, and 69% of Americans give up on a restaurant that doesn't answer (Slang.ai's research).
>
> Slang charges restaurants $399–$600/mo to fix this. We do it for $150/mo — answers 24/7, handles hours/menu questions, takes the reservation.
>
> Two saved four-tops a month covers it. Worth a look?

**Email 2 — Bump (Day 4, same thread):**

> Bump — genuinely curious: who answers your phone at 7pm on a Friday?
>
> If the answer is "nobody, we're slammed," that's the whole pitch. 15 minutes whenever you're not in service.

**Email 3 — Breakup (Day 12, same thread):**

> {FirstName} — last one from me.
>
> We do this for local independents — our client Tabletop Village "grew bottom line by over 300%" working with us (their words, on our site). If the phone situation ever bugs you, the free audit stands. I'll swing by during the afternoon lull sometime — feel free to say no thanks.

---

### Segment 6 — Trucking & Logistics (PRIORITY 6 — WARM-ONLY; cold email at low volume, ≤10/day total, warm-intro first per `07_REFERRAL_ACTIVATION.md`)

**Subjects:** `invoicing lag` · `days to invoice` · `pod chase` · `detention paperwork` · `dispatch admin`

**Email 1 — Opener (Day 1):**

> {FirstName} —
>
> Quick question for whoever runs the back office at {Carrier}: how many days between delivery and invoice going out?
>
> For most small carriers it's the paperwork — chasing PODs, rekeying into the TMS, the invoice pile. We automate exactly that gap: one $1,000 sprint, done in weeks. Presidential Transpo's words after working with us: "reliable consulting that helped streamline our operations significantly."
>
> Worth a look?

**Email 2 — Bump (Day 4, same thread):**

> Concrete example: emailed POD comes in → system files it, matches the load, drafts the invoice same day. That's usually the whole cash-flow gap.
>
> 30-minute audit is free — if we find nothing, you've lost half an hour.

**Email 3 — Breakup (Day 12, same thread):**

> {FirstName} — closing the loop.
>
> We know trucking from the inside and the audit offer doesn't expire: 30 minutes, written 5-point plan on your paperwork/invoicing gap in 48 hours. When the invoice pile wins some week, reply here.
>
> Safe miles.

---

## 7. Reply-handling matrix (check the Instantly unified inbox 2× daily — 9am and 3pm)

Speed matters most on positives: reply within minutes when possible, same business day always. Log every reply type in the tracker (`11_METRICS_AND_TRACKING.md`).

| Reply type | Examples | Action (same day) |
|---|---|---|
| **Positive** | "Sure, tell me more" / "How does it work?" / "Call me" | Reply immediately with **two specific time options** for the Free AI Opportunity Audit + one-line recap of what they get (30 min + written 5-point plan in 48h). Never send a bare calendar link as the whole reply. Mark `status=meeting_set` once booked; hand to closer per `10_TEAM_EXECUTION_PLAN.md` |
| **Neutral / info request** | "Send me some info" | Don't send a deck. Reply with 3 sentences: the one segment stat, the price, the audit offer — then the two-times ask. A PDF is where deals go to die |
| **Question / objection** | "How much?" / "Does it work with my system?" / "We have someone for that" | Answer honestly in ≤3 sentences using the objection map in `01_TARGET_SEGMENTS.md` for their segment, re-offer the audit. One objection exchange max — if the second reply is still an objection, thank them and mark `status=not_now`, recycle in 90 days |
| **Not interested** | "Not interested" / "No thanks" | Reply once: "Understood — I'll close the file. If it's ever useful, the free audit stands." **Add to suppression list** (they said no; treat it as an opt-out even though legally it's softer). Mark `status=not_interested` |
| **Unsubscribe / remove me** | "Unsubscribe" / "Take me off your list" / one-click unsub event | **SAME DAY, no reply needed** (a reply can feel like more contact; if you do reply, one line: "Done — you won't hear from us again."). Add to Instantly blocklist AND master suppression sheet AND flag `do_not_contact=Y` in the tracker. Law allows 10 business days; our standard is same-day. Never re-add, never share the address |
| **Angry / spam accusation** | "Stop spamming me" / "Reported you" | Same as unsubscribe, plus notify pod lead — 2 of these in a week = pause the campaign and review list quality. Do not argue, do not justify |
| **Out of office** | Auto-reply | No action; sequence continues. If OOO says "returning {date}" after the breakup date, push the breakup to {date}+2 manually |
| **Wrong person** | "I don't handle this, try Jane" | Thank them, ask for Jane's email if not given, remove original from sequence, add Jane as a NEW verified lead (new row, `source=referral-internal`) |
| **Hard bounce** | Delivery failure | Instantly auto-suppresses. If a campaign's bounces pass 2%, kill-switch (§2) |

---

## 8. Benchmarks — what "working" looks like (so nobody panics in week 3)

From the research (Instantly's multi-billion-send dataset; Backlinko/Belkins studies):

| Metric | Platform average | Good | Excellent |
|---|---|---|---|
| Reply rate (all replies) | ~3.4% | 5–10% | 10–15% (heavy personalization has hit ~18%) |
| Positive share of replies | — | ⅓ to ½ of replies | — |
| Meetings booked | ~0.5–1% of sends | ~1% | ~2%+ |

**What that means at our steady state (~2,000 sends/mo):**
- ~70–150 replies/mo if we're doing well (≥ our missed-call-test personalization should beat the 3.4% floor)
- ~25–60 positive replies/mo
- **~10–20 booked audits/mo from email alone** — matching the plan in `00_GTM_MASTER_PLAN.md`

Sanity rules:
- **Ignore open rates entirely** (tracking is off; Apple MPP made the metric fiction anyway). Replies and meetings only.
- **No verdicts before 200 sends** of a given template/subject. At 25/day/mailbox that's about a week per variant — patience is part of the job.
- Below 2% replies after 300+ sends = copy or list problem: check personalization fields actually merged, check the list matched the ICP filters in `01_TARGET_SEGMENTS.md`, then change ONE thing.
- Week 2 (5–10 sends/day) produces almost nothing. That is the plan working, not failing. Revenue weeks are 4–8.

---

## 9. Daily/weekly ops checklist (email pod — print this)

**Daily (2 × 30-min blocks):**
- [ ] 9am: unified inbox triage — positives answered first, unsubscribes suppressed, replies logged in tracker
- [ ] 9am: check yesterday's bounce rate per campaign (<2%) and any spam-folder warmup flags
- [ ] 3pm: second inbox pass; tomorrow's sends queued and merge fields spot-checked (open 3 random queued emails — all fields filled?)
- [ ] Log daily numbers in `11_METRICS_AND_TRACKING.md`: sends, replies, positives, meetings, opt-outs, bounces

**Weekly (Mondays):**
- [ ] Google Postmaster Tools: spam rate for both domains (<0.1%)
- [ ] MXToolbox blacklist check on both domains
- [ ] Verify next week's list batch through MillionVerifier (`08_LEAD_LIST_BUILDING.md`)
- [ ] Suppression list synced: Instantly blocklist ↔ tracker `do_not_contact` ↔ calling pod's DNC log
- [ ] Friday retro (per `00_GTM_MASTER_PLAN.md`): reply rates by template; one variable changed per campaign max
