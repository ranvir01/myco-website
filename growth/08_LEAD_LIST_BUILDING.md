# 08 — Lead List Building: Free/Cheap Sources, Enrichment, Verification, Quotas

**Owner:** List builder(s) — see pod assignments in `10_TEAM_EXECUTION_PLAN.md`. **Siblings:** ICP filters and disqualifiers in `01_TARGET_SEGMENTS.md` · lists feed `03_COLD_EMAIL_PLAYBOOK.md`, `04_COLD_CALLING_PLAYBOOK.md`, `06_LINKEDIN_SOCIAL_PLAYBOOK.md` · sprint quota (300 leads by Day 3) in `09_FIRST_14_DAYS_SPRINT.md` · the tracker itself is `templates/lead-list-template.csv`.

**The job in one sentence:** produce **verified, ICP-matched, deduped rows** — because a bad list burns email domains (`03` §2 kill-switch), wastes dial blocks, and makes every downstream number lie. A row isn't "done" until every required field is filled and the email is verified.

**Budget: ~$10–15/mo.** Everything below is free except MillionVerifier ($37/10k verifications) and optional pennies-per-number phone lookups. No paid databases, no $99 tools, no list brokers (bought lists = unverifiable junk + compliance risk — we never buy lists).

---

## 1. The tracker schema (`templates/lead-list-template.csv`)

One row per business. One shared sheet (Google Sheets), one tab per segment. Columns marked **(req)** must be filled before a row can enter any sequence or call block — these match the required columns in `09_FIRST_14_DAYS_SPRINT.md`.

| Column | Req | Allowed values / format | Notes |
|---|---|---|---|
| `lead_id` | (req) | `S1-0001` style (segment-serial) | Assign on creation; never reuse |
| `date_added` | (req) | YYYY-MM-DD | |
| `segment` | (req) | 1–6 per `01_TARGET_SEGMENTS.md` | One segment per row, no "both" |
| `business_name` | (req) | Exactly as they write it | From GBP/website, not your abbreviation |
| `owner_first` / `owner_last` | (req) | | The decision-maker per segment ICP (owner / managing partner / office manager / broker) |
| `role` | | owner / office_manager / partner / GM | |
| `phone` | (req) | +1XXXXXXXXXX | Main line is fine; direct/cell noted in `notes` |
| `phone_type` | (req) | landline / wireless / voip / unknown | See §7 — callers treat wireless/unknown as hand-dial-only personal cells |
| `email` | (req for email lists) | | |
| `email_status` | (req for email lists) | valid / catch_all / invalid / unverified | Only `valid` enters campaigns; `catch_all` → low-volume or calling pod (`03` §3) |
| `website` | (req) | URL or `none` | `none` is a selling signal, not a blank |
| `gbp_review_count` | (req) | integer | ICP filter: roughly 10–200 for most segments |
| `gbp_rating` | | 1.0–5.0 | |
| `city` / `state` | (req) | | **US only** — non-US rows are deleted (CAN-SPAM vs CASL/GDPR, see `03` §3) |
| `source` | (req) | gmaps / sos_registry / license_board / bar_directory / chamber / yelp / angi / thumbtack / fmcsa / apollo / linkedin / referral-internal | |
| `source_url` | | | Makes QC spot-checks 10x faster |
| `linkedin_url` | | | Mainly segments 2 & 4 |
| `dnc_flag` | (req if calling a sole proprietor) | Y / N / na | National DNC Registry check, re-scrubbed every 31 days (`04_COLD_CALLING_PLAYBOOK.md`) |
| `do_not_contact` | (req) | Y / N | OUR internal suppression: opt-outs, "not interested", existing clients/partners. Y = untouchable forever, all channels |
| `status` | (req) | new / in_sequence / calling / replied / meeting_set / client / not_now / not_interested / sequence_done / disqualified | Keep current — this is the pipeline |
| `disqualify_reason` | | franchise / staffed_247_desk / hipaa_pregate / too_big / too_small / non_us / other | Log it per `01` rule 5 — patterns tell us what to stop scraping |
| `assigned_to` | (req) | Rep name | One owner per row |
| `notes` | | | Test-call result, best callback time, gatekeeper name |
| `last_touch_date` | | YYYY-MM-DD | |

**Dedupe key: normalized phone + website domain.** Before adding a row, search the sheet for both. Duplicate = skip. Also check the master suppression list and the calling pod's do-not-contact log.

---

## 2. Source #1 — Google Maps (primary for Segments 1, 3, 4, 5)

The best free source for local SMBs: name, phone, website, review count, category, all in one place.

**Step-by-step:**
1. Pick ONE segment and ONE metro (the sprint order in `09_FIRST_14_DAYS_SPRINT.md`: our local metro first).
2. Run the search patterns below in Google Maps. Work the list top-down — Maps roughly orders by prominence, and 10–200 reviews is our ICP sweet spot (established enough to have demand, small enough to have no full front-desk).
3. For each business record: `business_name`, `phone`, `website` (or `none`), `gbp_review_count`, `gbp_rating`, `city/state`, `source=gmaps`, `source_url` (the Maps share link).
4. Apply the ICP filters from `01_TARGET_SEGMENTS.md` AT COLLECTION TIME: skip franchises/chains, skip <10 or >200 reviews (unless segment says otherwise), skip anything with an obvious staffed 24/7 desk. A disqualified row never enters the sheet — don't collect junk to delete later.
5. Owner name and email are almost never on Maps — enrichment comes from §3–§6.

**Search patterns per segment** (rotate through variants; each pattern × each suburb is a fresh pull):

| Segment | Patterns |
|---|---|
| 1 Home & Field Services | `landscaping company {city}` · `hvac repair {city}` · `plumber {city}` · `roofing contractor {city}` · `electrician {city}` · `house cleaning service {city}` |
| 2 Professional Services | `personal injury lawyer {city}` · `family law attorney {city}` · `immigration lawyer {city}` · `estate planning attorney {city}` · `cpa firm {city}` (cross-check against directories in §4 — those are richer for law) |
| 3 Healthcare & Wellness | `dentist {city}` · `med spa {city}` · `chiropractor {city}` (**gated segment** — see `01`; build the list now, sequence later) |
| 4 Real Estate & PM | `real estate brokerage {city}` · `property management company {city}` |
| 5 Restaurants/Retail | `restaurant {city}` by cuisine · `board game cafe {city}` · `specialty retail {city}` — independents only |
| 6 Trucking | Skip Maps; use FMCSA (§3) — warm-only segment anyway |

**Scrapers (to skip manual copying):**

| Tool | Free tier | Use |
|---|---|---|
| **Outscraper** | Free tier (limited monthly rows) | **Default.** Batch: enter query + region, export CSV with name/phone/site/reviews. One batch job replaces hours of copying |
| Map Lead Scraper (extension) | 15 results/search free | Quick small pulls while browsing |
| Livescraper | 500 free rows | Backup free capacity |
| Scrap.io | Paid | Only if we outgrow free tiers (not yet) |

**ToS caution (know the actual risk):** scraping publicly available, logged-out data has been held not to violate the CFAA (the *hiQ v. LinkedIn* / *Meta v. Bright Data* line of cases), but it DOES breach Google's ToS — the realistic risk is **rate-limiting or account blocking, not court**. So: use the scraper vendors' cloud infrastructure (that's their problem), never run scraping tools logged into a MyCo Google account, and never scrape from the account that owns our Google Workspace or GBP. Scraped output still gets every hygiene step below — a scraper's CSV is raw material, not a list.

---

## 3. Source #2 — Government registries & license boards (free, legal, and the best OWNER-NAME source)

Registries give you what Maps can't: the legal owner's name and registered address. Workflow: pull the business from Maps → look it up here for the owner → find email in §6.

| Registry | What you get | Best for |
|---|---|---|
| **Secretary of State business search** (every state, free) | Registered agent / officer names, entity address, status | Owner names for ANY segment |
| **State contractor license boards** | License holder name, business, sometimes phone — searchable by trade + city | Segment 1 (HVAC/plumbing/electrical/roofing are licensed trades) |
| **State bar association directories** | Attorney name, firm, practice area, address, admission year — searchable | Segment 2 (this IS the law list) |
| **CPAverify + state accountancy boards** | CPA name + firm | Segment 2 |
| **SEC IAPD (adviserinfo.sec.gov)** | RIA firm, principals, AUM | Segment 2 |
| **State real-estate license lookup** | Broker/agent names by brokerage | Segment 4 |
| **FMCSA SAFER / Licensing & Insurance (li-public.fmcsa.dot.gov)** | Carrier name, DOT/MC number, **fleet size** (power units — filter 5–50 trucks per ICP), phone, address | Segment 6 — the entire trucking list, free |
| **County business license records** | Small operators who never registered an LLC | Segment 1 & 5 fill-in |

These are public government records — no ToS issue at all. Record `source=sos_registry` / `license_board` / `bar_directory` / `fmcsa` and paste the lookup URL into `source_url`.

---

## 4. Sources #3–5 — Directories: chambers, Yelp/Angi/Thumbtack, legal directories

**Chamber of Commerce directories (all segments):** most local chambers publish a public member directory with business name, category, contact, and often the owner/rep's name. Chamber members skew growth-minded — they already pay to market themselves. Work the target metro's chamber + 2–3 suburb chambers. `source=chamber`.

**Yelp / Angi / Thumbtack mining (Segment 1 — home services):**
- Browse category + city listings, record the same fields as Maps; cross-check review counts against GBP.
- **The ICP signal:** pros on Angi/Thumbtack are *paying per lead* — Thumbtack runs roughly $10–100+ per shared lead per the research. A contractor already burning $500/mo on shared leads understands "$150/mo and the missed callers text YOU back" instantly. Note "on Thumbtack/Angi" in `notes` — it's an opener the callers can use.
- Manual browsing only (their ToS prohibit scraping; volume here is low enough that manual is fine). `source=yelp` / `angi` / `thumbtack`.

**Legal directories (Segment 2):** Avvo, Justia, and FindLaw profiles list practice areas, firm size, and often direct contact pages — use to cross-check the bar-directory pull and to find the firm's actual website/email. Clio's own directory and "best law firms in {city}" listicles help identify small consumer firms. Manual only. `source=bar_directory` with the profile link.

---

## 5. Sources #6–7 — Apollo free tier & LinkedIn manual

**Apollo.io (free tier)** — still the best free B2B database (275M+ contacts, full search access), with post-2025 limits to plan around:
- ~**100 email credits/mo** when signed up with a non-corporate domain — **sign up with a `myconsulting.network` address** (corporate domains get ~10k credits/mo).
- **10 export credits** and **2 active sequences** on free — so: **never sequence from Apollo** (sending lives in Instantly, period — `03` §1.5) and don't waste exports; copy fields into the tracker manually.
- Use it to: find owner names + emails for businesses already sourced from Maps/registries; filter by employee count to enforce ICP.
- Apollo emails are database guesses at some staleness — **every Apollo email still goes through MillionVerifier** (§6). `source=apollo`.

**LinkedIn (manual — free and ToS-safe):**
- Manual search: `"managing partner" {city}`, `"broker owner" {city}`, `"office manager" dental {city}`. Record name, role, `linkedin_url`.
- Primarily Segments 2 and 4 (owners in Segments 1/5 barely use LinkedIn — per `01_TARGET_SEGMENTS.md`, don't sink hours there).
- **No logged-in scraping tools, ever** — automated scraping breaches LinkedIn ToS and gets the account banned (the loss is the account, and we need our accounts for `06_LINKEDIN_SOCIAL_PLAYBOOK.md`). Sales Navigator ($99/mo) only if founders approve after free-tier methods cap out.

---

## 6. Email finding & verification (the step that protects the domains)

**Finding (in cost order):**
1. **The website itself** — contact page, about page, privacy policy (often has a real mailbox). 30 seconds, free, most accurate.
2. **Hunter.io free tier — 25 searches/mo per account**: domain search returns known addresses + the firm's email pattern. (Pod members can each run a free account = ~75–100 searches/mo across the team.)
3. **Apollo free credits** (§5).
4. **Pattern guessing** as last resort: most small firms are `first@domain.com`, `firstlast@domain.com`, or `info@domain.com`. Guess 2–3 patterns, let the verifier tell you which is real. (`info@` is legal to email but replies worse — prefer a person.)

**Verification (mandatory — the gate into `03`):**
- **MillionVerifier — $37 per 10,000 (~$0.0037/email), pay-as-you-go.** Batch-upload the week's rows, write results into `email_status`. Alternatives for small one-off batches: NeverBounce / ZeroBounce at ~$8 per 1,000.
- Only `valid` enters an Instantly campaign. `catch_all` → low-volume campaign or calling pod. `invalid`/`unknown` → email stays blank; the row can still be a call lead.
- **Verify within a few days of sending, not weeks** — addresses rot. Target: **<2% hard bounces** on every campaign; a bounce spike triggers the kill-switch in `03` §2 and the list batch gets audited back to its source.

---

## 7. Phone verification & compliance flags (protects the callers)

- **`phone_type` is a required field** because TCPA treatment differs: many SMB "business" numbers are the owner's **personal cell**, and mixed-use cells keep consumer protections (*Chennette v. Porch*). Our blanket rule (from `04_COLD_CALLING_PLAYBOOK.md`): hand-dial only, 8am–9pm prospect-local, so wireless numbers are callable — but they must be flagged so nobody ever loads them into any auto-dialing or SMS tool.
- **How to flag:** run numbers through a line-type lookup — e.g., Twilio Lookup's line-type API (pennies per number — pricing approximate, check current) or a free web carrier-lookup for spot checks. Batch weekly. Unknown = treat as wireless.
- **DNC:** true B2B solicitation calls are generally exempt from the National DNC Registry (FTC TSR), **but sole proprietors at personal numbers are not a safe assumption** — for any list where the "business" is one person (common in Segment 1), set `dnc_flag` by checking the National DNC Registry and **re-scrub every 31 days** (registry access is free for up to 5 area codes). Log the scrub date on the list tab.
- **Our internal suppression beats everything:** `do_not_contact=Y` (from any channel — an email opt-out kills calls too) is checked before every send and every dial block. CCPA note: any "delete my data" request gets the row's personal fields wiped same-day and the contact suppressed.

---

## 8. Quota math — what one person actually produces per hour

Honest rates (plan with these, not fantasy numbers):

| Activity | Realistic throughput |
|---|---|
| Raw Google Maps rows via Outscraper batch | 200–500/hr of *tool* time (minutes of human time) — but raw ≠ usable |
| Manual Maps collection (with ICP filtering) | 40–60 raw rows/hr |
| Enrichment: owner name via SoS/license board/website/LinkedIn | 20–30 rows/hr |
| Email finding (Hunter/Apollo/pattern) | 30–50 rows/hr in batches |
| Verification (MillionVerifier batch) | Near-instant; ~15–20% of rows die here (invalid/unknown/dupe) |
| **End-to-end finished rows** (all req fields + verified email) | **15–25/person/hr — plan on 20** |

**Standing quota: 50 finished rows per list-builder per day** (~2.5 focused hours). Two builders = **100 finished rows/day, ~500/week.**

**Why 100/day is the right number (consumption math):**
- Cold email at steady state (`03` §2): ~100 sends/day ÷ ~3 emails per lead ≈ **~35 fresh leads/day** consumed.
- Calling pod (`04`): 2 callers × 40 dials/day ÷ ~3 attempts per lead ≈ **~27 fresh leads/day**.
- LinkedIn (`06`): ~10/day.
- Total ≈ 70–75/day consumed + ~20% loss at verification/dedupe → **100/day keeps every channel fed with a one-week buffer.** If the buffer grows past 2 weeks, shift builder hours to enrichment quality (owner names, test-call notes) instead of more raw rows — fresher is better than bigger.

**Sprint week exception:** Days 1–3 target is the 300-lead list (150 each Segments 1 & 2) per `09_FIRST_14_DAYS_SPRINT.md` — that's both builders at full quota for 3 days. It's doable: Segment 1 via Outscraper + license boards, Segment 2 via bar directory + Maps cross-check.

---

## 9. Daily workflow & QC checklist (print this)

**Daily block (per builder):**
- [ ] Pull today's assignment (segment + metro + source) from the Friday plan (`00_GTM_MASTER_PLAN.md` weekly rhythm)
- [ ] Collect raw rows (Outscraper batch queued first thing; manual sources while it runs)
- [ ] Filter at collection: ICP checks from `01_TARGET_SEGMENTS.md` — franchises, size, review-count band; log `disqualify_reason` only for rows worth remembering
- [ ] Enrich: owner name (registry/website/LinkedIn) → email (site/Hunter/Apollo) → phone_type flag
- [ ] Dedupe: phone + domain against the whole sheet + suppression list + calling DNC log
- [ ] Batch-verify emails (MillionVerifier); write `email_status`
- [ ] Assign `lead_id`, `assigned_to`, mark `status=new`; log the day's count in `11_METRICS_AND_TRACKING.md`

**QC (pod lead, weekly):** spot-check 10 random rows per 100 added — source_url loads, phone rings the named business (don't pitch, just verify), email status is `valid`, segment/ICP correct. **More than 1 bad row in 10 = that batch's source gets re-audited before anything from it enters a sequence.** The scoreboard metric that matters is not rows added — it's **verified rows consumed by channels without bounces or wrong-number complaints**.
