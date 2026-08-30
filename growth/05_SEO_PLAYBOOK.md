# 05 — SEO + AI-Visibility Playbook (myconsulting.network)

**Owner:** SEO Lead — default Henos Adhana (SEO Consultant on the roster; confirm in `10_TEAM_EXECUTION_PLAN.md`), plus Writer 1, Writer 2 (content pod), one Dev owner (2–4 hrs/wk), and a Founder for GBP + review asks.
**Time budget:** ~16 hrs/week total across the pod. SEO is a compounding side-channel here — cold email (`03_COLD_EMAIL_PLAYBOOK.md`) and calls (`04_COLD_CALLING_PLAYBOOK.md`) pay the bills while this ramps.
**Expectation setting (from `00_GTM_MASTER_PLAN.md`):** 0–2 inbound leads/mo in month 1 → 3–6/mo by month 3. AI-search referrals are small but convert ~5x better than Google organic (14.2% vs 2.8% — Sapt). Do the work anyway; this is the only channel that gets cheaper every month.

**The one rule that governs everything below:** we are a low-authority domain (founded 2023, few backlinks). We win ONLY on long-tail, niche-intersection, and local terms with keyword difficulty <30. Head terms ("AI consulting", "automation services") are owned by DR80+ sites AND get eaten by AI Overviews anyway (position-1 CTR down up to 58% under AIOs — Ahrefs; only ~8% of users click any result when an AI summary appears — Pew Research). Anyone caught spending an hour on a head term buys coffee for the pod.

---

## 1. Current state — what's already done vs. not (verified against the repo)

### DONE — do not redo
| Item | Status |
|---|---|
| Money pages live | `/services`, `/ai-for-small-business`, `/free-ai-audit`, `/case-studies`, `/partners`, and 6 vertical pages: `/for/home-services`, `/for/trucking-logistics`, `/for/restaurants`, `/for/professional-services`, `/for/healthcare`, `/for/real-estate` |
| `metadataBase` + per-page metadata | Set in `src/app/layout.tsx`; every new page exports title/description/`alternates.canonical`/`openGraph` |
| OG image | Static `public/og-image.png` wired up |
| `robots.txt` | Live, explicitly **allows** GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Google-Extended, CCBot, Applebot-Extended — exactly what the research says to do. Do not "clean it up." |
| `sitemap.xml` | Generated via next-sitemap, all 16 URLs included, referenced from robots.txt |
| JSON-LD | `layout.tsx` ships Organization, FAQPage, WebSite, and Article schema; vertical/service pages carry their own FAQPage schema |
| `llms.txt` | Live at `public/llms.txt` with services, prices, industries, key pages |

### NOT DONE — this playbook's job
- [ ] Google Search Console + Bing Webmaster Tools verification (nothing is verified — we are flying blind)
- [ ] Any analytics at all (no GA4/gtag anywhere in `src/` — inbound leads currently can't be attributed)
- [ ] Google Business Profile (does not exist)
- [ ] Directory profiles / citations (none exist)
- [ ] A blog (`/blog` route does not exist — Dev builds it Week 1)
- [ ] Backlinks (effectively zero)
- [ ] Calculators / gated checklists (none)
- [ ] Reviews anywhere public (schema claims 5.0/12; zero reviews exist on Google/Clutch where buyers and LLMs actually look)
- [ ] City page + local keywords (no metro chosen — see §2)

---

## 2. Keyword strategy: the 50-keyword starter list

**How to read this:** Intent labels — **BOFU** = buyer searching for the service (write to sell), **MOFU** = comparing/evaluating options (write to be the honest advisor), **TOFU** = learning (write answer-first; this is AI-citation bait), **LOCAL** = geo-modified.
**[METRO]** = the founders' home metro. Fill it in Week 1 and never build a city page for a metro where we can't show real local proof — "AI consultant in [50 cities]" with swapped names is the textbook doorway pattern Google's scaled-content policy kills (Seomatic/AirOps). One metro, one page, real proof (Blue Landscaping, Tabletop Village, etc. — whichever clients are actually local).

**Page key:** existing pages by path; **(NEW)** = to be created, with target path.

### Cluster A — Home & Field Services (priority 1, matches outreach focus)
| # | Keyword | Intent | Page |
|---|---|---|---|
| 1 | ai receptionist for hvac companies | BOFU | /for/home-services |
| 2 | missed call text back for contractors | BOFU | (NEW) /blog/missed-call-text-back |
| 3 | ai answering service for plumbers | BOFU | /for/home-services (FAQ section) |
| 4 | ai for landscaping business | BOFU | /for/home-services (Blue Landscaping proof) |
| 5 | automate quotes and estimates for contractors | BOFU | (NEW) blog spoke → links to /services |
| 6 | how much do missed calls cost my business | TOFU | (NEW) /tools/missed-call-calculator + blog post 1 |
| 7 | after hours answering for home services | BOFU | /for/home-services |

### Cluster B — Professional Services (priority 2, law-led)
| # | Keyword | Intent | Page |
|---|---|---|---|
| 8 | ai receptionist for law firms | BOFU | /for/professional-services |
| 9 | legal intake automation for small law firms | BOFU | (NEW) blog spoke |
| 10 | automate client intake law firm | MOFU | same blog spoke as #9 |
| 11 | ai for accounting firms | BOFU | /for/professional-services |
| 12 | law firm missed call statistics | TOFU | (NEW) blog post 2 (Clio data) |
| 13 | virtual receptionist vs ai receptionist for law firms | MOFU | (NEW) comparison page |

### Cluster C — Healthcare & Wellness
| # | Keyword | Intent | Page |
|---|---|---|---|
| 14 | ai receptionist for dental office | BOFU | /for/healthcare |
| 15 | reduce no-shows dental practice | MOFU | (NEW) blog post 5 |
| 16 | automated appointment reminders for chiropractors | BOFU | /for/healthcare (FAQ) |
| 17 | hipaa compliant appointment reminders | MOFU | (NEW) blog spoke (with BAA caveats per `01_TARGET_SEGMENTS.md`) |
| 18 | ai for med spa booking | BOFU | /for/healthcare |

### Cluster D — Restaurants, Retail & Entertainment
| # | Keyword | Intent | Page |
|---|---|---|---|
| 19 | ai phone answering for restaurants | BOFU | /for/restaurants |
| 20 | restaurant missed calls solution | BOFU | /for/restaurants |
| 21 | ai for restaurant reservations | MOFU | (NEW) blog post 8 |
| 22 | slang.ai alternative for small restaurants | MOFU | (NEW) comparison page (they charge $399–$600/mo; we start at $150/mo) |

### Cluster E — Trucking & Logistics
| # | Keyword | Intent | Page |
|---|---|---|---|
| 23 | ai for trucking companies | BOFU | /for/trucking-logistics |
| 24 | automate dispatch small trucking company | BOFU | (NEW) blog post 10 |
| 25 | trucking invoice automation | BOFU | same blog post 10 |
| 26 | ai paperwork automation for owner operators | BOFU | /for/trucking-logistics (FAQ) |

### Cluster F — Real Estate & Property Management
| # | Keyword | Intent | Page |
|---|---|---|---|
| 27 | ai lead follow up for real estate agents | BOFU | /for/real-estate |
| 28 | speed to lead real estate automation | MOFU | (NEW) blog post 6 |
| 29 | ai assistant for property managers | BOFU | /for/real-estate |
| 30 | automate tenant communication | MOFU | /for/real-estate (FAQ) |

### Cluster G — Service terms ("X for small business")
| # | Keyword | Intent | Page |
|---|---|---|---|
| 31 | ai receptionist for small business | BOFU | /services (AI Receptionist section) |
| 32 | ai automation services for small business | BOFU (stretch) | /services |
| 33 | workflow automation consultant for small business | BOFU | /services |
| 34 | affordable ai consultant for small business | BOFU | /ai-for-small-business |
| 35 | ai audit for small business | BOFU | /free-ai-audit |
| 36 | free ai opportunity audit | BOFU (brand) | /free-ai-audit |
| 37 | local seo and ai visibility service | BOFU | /services (Local SEO section) |
| 38 | ai marketing for small business | BOFU (stretch) | /ai-for-small-business |
| 39 | small business website with ai chatbot | BOFU | /services (AI Growth Website) |
| 40 | fractional ai consultant | BOFU | /services (Custom Projects) |

### Cluster H — Money questions & comparisons (highest conversion per visit: comparison pages convert ~8.4% vs ~3.4% category — Grow & Convert via CXL)
| # | Keyword | Intent | Page |
|---|---|---|---|
| 41 | how much does ai automation cost for a small business | TOFU/MOFU | (NEW) blog post 3 — pricing post |
| 42 | ai receptionist cost | MOFU | same post 3 + /services |
| 43 | hiring an ai consultant vs doing it yourself | MOFU | (NEW) comparison page |
| 44 | zapier vs custom automation for small business | MOFU | (NEW) blog post 7 |
| 45 | podium alternative for small business | MOFU | (NEW) comparison page (Podium $399/mo/location; our reviews engine is inside $500/mo Local SEO) |
| 46 | best ai automation agencies for small business | MOFU | (NEW) honest listicle, blog post 12 |
| 47 | how to get my business recommended by chatgpt | TOFU/MOFU | (NEW) blog post 11 — sells Local SEO & AI Visibility |
| 48 | ai automation roi calculator | MOFU | (NEW) /tools/missed-call-calculator |

### Cluster I — Local (only after GBP is live and metro is chosen)
| # | Keyword | Intent | Page |
|---|---|---|---|
| 49 | ai consultant [METRO] | LOCAL | (NEW) /[metro-slug]-ai-consulting — ONE city page, real local proof |
| 50 | ai automation agency [METRO] | LOCAL | same city page |

**Structure rule (this is how low-DA sites rank):** each vertical page is a pillar; blog posts are spokes that link UP to their pillar and ACROSS to `/free-ai-audit`. Every new post links to ≥1 vertical page, ≥1 sibling post, and the audit. No orphan pages ever. Topical authority in a narrow niche is the documented substitute for domain authority (Sedestral).

**Doorway-page guardrails for any new page (memorize, Google's March-2024 scaled-content policy):**
- ≥40–50% content unique to that page: vertical-specific stats, a mini ROI example in that vertical's numbers, its own FAQ
- The test: "what does this page offer that the sibling page doesn't?" If the answer is "the industry name," don't publish
- Never batch-launch templated pages; ship one at a time and watch GSC indexing first

---

## 3. Content plan: 2 posts/week, first 12 titles

**Cadence:** 2 pieces/week — **Post A (Wednesday ship day** per `00_GTM_MASTER_PLAN.md`**)**: substantive money piece, 1,200–2,000 words, answer-first. **Post B (Friday)**: short answer post or checklist, 600–900 words, still complete — never thin. If a week collapses, Post A ships and Post B dies; research says one deep post beats a dozen thin ones (Gen3/Marketing Insider Group), so quality is the floor, cadence is the goal.

**Every post, no exceptions:**
- Answer the query in the first 2 paragraphs — ~44% of LLM citations come from the first 30% of the page (Strive Labs)
- Quantified claims over adjectives ("cuts no-shows 39–50%", never "dramatically reduces") — quantified claims are more citable
- FAQPage schema with 3–5 real questions (correlates with ~3.2x higher AI Overview inclusion — Strive Labs)
- One internal link to a vertical page, one to a sibling post, one CTA to `/free-ai-audit`
- Author byline (a real team member) + Article schema + dated; refresh top posts quarterly (freshness is a strong Perplexity signal)
- Claims discipline: only public proof points (Tabletop Village 300% growth, Blue Landscaping "increased leads", the client testimonials). No invented case numbers. Anonymized framing OK ("a landscaping client").

### The first 12 posts (6 weeks)

**1. "You're Missing 62% of Your Calls. Here's What That Costs a Home-Services Business"** — kw #6 *how much do missed calls cost my business* (Wed, Wk 3)
- 62% of SMB calls go unanswered (411 Locals); 85% of voicemail-hitters never call back (Numa); missed calls cost an average SMB ~$126K/yr (Aira)
- Worked math: HVAC shop, 30 calls/wk × 62% missed × close rate × avg ticket = $/month walking away
- What missed-call text-back is, in plain English, with the exact text message we send
- What a fix costs: AI Receptionist & Chatbot, $750 setup + $150/mo
- CTA: Free AI Opportunity Audit + link to the calculator (once live, Wk 8)

**2. "Only 40% of Law Firms Answer Their Phone. Be One of Them."** — kw #8/#12 *ai receptionist for law firms* (Fri, Wk 3)
- Clio Legal Trends: 40% of firms answer prospect calls, only 20% of missed calls returned, 64% of prospects get zero follow-up
- Firms using intake tech: 51% more leads, 52% more revenue (Clio)
- What the AI can answer vs. must never answer (no legal advice — Moffatt v. Air Canada made the company liable for its bot's answer)
- Intake flow diagram: call → AI answers → qualifies → books consult → human confirms
- CTA: audit, link /for/professional-services

**3. "How Much Does AI Automation Cost a Small Business? Real 2026 Prices"** — kw #41/#42 (Wed, Wk 4)
- Honest market table: AI receptionists $109–$299/mo typical (AgentZap/Dialzara), automation builds $1,500–$12,000 (Arsum/Taskip), review management $299–$589/mo (Birdeye/Podium), local SEO $500–$1,000/mo (SE Ranking)
- Our prices against each line — we publish numbers; most agencies hide them
- What drives cost up (custom integrations, HIPAA, volume) and when DIY is genuinely fine
- FAQ: "is there a contract", "what's the cheapest way to start"
- This is the single most-citable page we'll own — pricing questions are prime AI-citation bait

**4. "Missed-Call Text-Back: The 20-Minute Setup That Pays for Itself in a Week"** — kw #2 (Fri, Wk 4)
- How it works (missed call → instant SMS with your name + "how can we help?")
- The exact message templates we deploy, by vertical
- Compliance box: client SMS requires A2P 10DLC registration — carriers block unregistered senders (see `01_TARGET_SEGMENTS.md` delivery rules)
- Before/after: what happens to the 85% who would never have called back

**5. "Cut Dental No-Shows 39–50%: The Reminder Stack That Saves ~$150K/Year"** — kw #15 (Wed, Wk 5)
- Average practice no-show rate ~15% (up to 30%); average practice loses ~$150K/yr to no-shows (Curogram/Denzif); 36% of no-shows are pure forgetfulness
- Multi-channel reminder cadence template (7-day email, 48-hr SMS, 2-hr SMS)
- HIPAA box: patient data needs BAAs and compliant vendors — what we will and won't build
- CTA: /for/healthcare + audit

**6. "The 5-Minute Rule: Real Estate Leads Go to Whoever Answers First"** — kw #28 (Fri, Wk 5)
- 78% of buyers work with the first agent who responds (NAR via AgentZap); average agent response ~15 hours; 5-minute response = 21x more likely to qualify (GreetNow)
- The instant-response flow: lead form → AI text within 60 seconds → booking link
- Scripts for the first three automated touches

**7. "Zapier vs Make vs Hiring Someone: What to Automate First (and What to Skip)"** — kw #44 (Wed, Wk 6)
- Honest DIY guidance: what an owner can build in an afternoon vs. where DIY breaks (multi-step logic, CRM hygiene, error handling)
- Decision table: task type → DIY / template / hire
- Where the Workflow Automation Sprint ($1,000) fits; comparison content converts 5–10% vs 1–2% for general organic (Passionfruit)

**8. "Restaurants Miss Up to 80% of Calls at Peak. The Fix Costs Less Than One Lost Party of Six."** — kw #19/#21 (Fri, Wk 6)
- Up to 80% missed-call rates at peak; 69% of Americans give up on a restaurant that doesn't answer (Slang.ai/Hostie)
- Why big chains pay $399–$600/mo (Slang.ai pricing) and how we do it from $150/mo
- Reservation/order flow with human handoff for complaints

**9. "The AI-Readiness Checklist: 21 Questions Before You Spend a Dollar on AI"** — kw: *ai readiness checklist small business* (Wed, Wk 7)
- The checklist itself, in-page (answer-first), PDF version gated behind email
- Sections: phones & follow-up, admin busywork, reviews, website, data
- This is a link-earning + lead-capture asset (content-upgrade benchmark: 0.8–2.5% visitor→lead, 3–5% top performers — Kalungi)
- Gated-email compliance: anyone who downloads gets marketing email ONLY with the same CAN-SPAM footer + one-click unsub as everything else — see `03_COLD_EMAIL_PLAYBOOK.md`

**10. "How Small Trucking Companies Kill Dispatch Paperwork and Invoice Lag"** — kw #24/#25 (Fri, Wk 7)
- Pain map: dispatch chaos, compliance paperwork, invoicing lag (we serve Presidential Transpo and Thind Transport — name clients, no invented numbers)
- Three automations: document intake → folder + data entry; auto-invoice on POD; driver status texts
- CTA: /for/trucking-logistics

**11. "How to Get Your Business Recommended by ChatGPT (a Local Business Guide)"** — kw #47 (Wed, Wk 8)
- AI referrals convert ~14.2% vs 2.8% organic (Sapt); what LLMs actually cite: consistent entities across reviews, directories, press (Surfer/Leapd)
- The 5 moves: GBP + reviews, consistent NAP everywhere, FAQ schema, answer-first pages, getting onto "best X" lists
- Practice-what-we-preach post — it sells the Local SEO & AI Visibility service ($500/mo) and marks us as the local expert

**12. "Best AI Automation Agencies for Small Businesses in 2026 (Honest Roundup)"** — kw #46 (Fri, Wk 8)
- Include real competitors with fair one-line verdicts; include MyCo with equal honesty ("best for: sub-$5k budgets that still want a dedicated PM")
- LLMs love "best X for Y" roundups and will cite an honest list where they'd never cite a sales page (Surfer)
- Criteria table: price floor, verticals, PM included?, contract terms

### Link-earning formats (build once, promote forever)
1. **Missed-Call Cost Calculator** (`/tools/missed-call-calculator`, Dev builds Wk 8): inputs = calls/week, % answered, avg job value, close rate → "$X,XXX/year lost." Email-gated *detailed* report, ungated headline number. Calculators engage, capture email, and earn links (Kalungi); this is exactly a one-day Next.js build. Also the #1 asset callers and emailers can link in follow-ups.
2. **AI-Readiness Checklist PDF** (post 9) — gated.
3. **Reminder-cadence + missed-call-text templates** — copy-paste blocks inside posts 4 and 5; template pages accumulate bookmarks and links.

---

## 4. Google Business Profile: setup + weekly rhythm

**Setup (Founder + SEO Lead, Week 1, ~2 hours) — order matters:**
1. Create at business.google.com as **MyConsulting Network** — exact name, no keyword stuffing ("MyConsulting Network - AI Consulting" will get flagged).
2. Type: **service-area business**. We work from a home office → **hide the address** (showing a residential address is a common suspension trigger; virtual offices/PO boxes are violations — Google SAB guidelines). Set service area = [METRO] + surrounding counties, not the whole country.
3. Categories: primary **Business management consultant**; secondary **Marketing consultant**, **Website designer**, **Marketing agency** (pick from Google's live list, closest match wins).
4. Phone: the real business line (the same number published everywhere — see NAP rule in §5). Hours: set real hours; do NOT claim 24/7 on GBP (support is 24/7; the office isn't — mismatch invites suspension reports).
5. Services: add all six canonical services with the "From $X" prices from `/services`. Description: paste the canonical boilerplate from §7 verbatim.
6. Photos: logo, team headshots (from `public/team/`), 2–3 "at work" shots. Profiles with photos get more actions; ugly-but-real beats stocky-and-fake.
7. Seed the Q&A section ourselves (this is allowed): post and answer "How much does the AI receptionist cost?", "Do you work with businesses outside [METRO]?", "What is the Free AI Opportunity Audit?"
8. Verification will likely be video (SABs usually are): have business documents + founder ready.

**Review engine (Founder owns — this is the single highest-leverage local action):**
- Grab the short review link (GBP dashboard → "Ask for reviews") and put it in every project-close checklist and email signature.
- Ask **every** past client (all 8 named + the other happy clients behind "12+") and every new client at project close. Founders make these asks personally — script and sequencing live in `07_REFERRAL_ACTIVATION.md` (pair the review ask with the referral pitch, review ask first).
- **Never pay, discount, or gift for a review, and never "review gate"** (only asking happy customers via a filter). Both violate Google policy, and the FTC's 2024 fake-reviews rule carries civil penalties. Real asks, all clients, every time.
- Respond to 100% of reviews within 48 hours — 89% of consumers expect owners to respond (BrightLocal).
- Target: **10 Google reviews by Day 60** (12+ happy clients exist; this is an asking problem, not a supply problem).

**Weekly GBP post (SEO Lead, Mondays, 15 min — rotate these 4):**
1. **Stat post:** "62% of small-business calls go unanswered. Here's what that costs a [METRO] contractor →" + link to blog post 1. CTA "Learn more".
2. **Offer post:** "Free AI Opportunity Audit — 30-minute call + a written 5-point action plan in 48 hours. No obligation." CTA "Book".
3. **Proof post:** a testimonial we already have ("SEO and website optimization transformed our online presence into real customer growth" — Blue Landscaping) + one line of context.
4. **New-content post:** this week's blog post with a one-sentence hook.

Also Week 1: create **Bing Places** (import from GBP) and **Apple Business Connect** — both free, both entity signals, and Bing feeds ChatGPT search.

---

## 5. Citations & directories: exactly where to spend

NAP rule first: **Name, Address (hidden but consistent city), Phone, and the canonical description must be IDENTICAL everywhere.** Fix before creating profiles: the referral docs still show `myco.com` emails and a (555) phone — everything public uses `myconsulting.network`, `info@myconsulting.network`, and the real line.

| Platform | Verdict | Cost | Action |
|---|---|---|---|
| **Google Business Profile** | Mandatory | Free | Week 1 (§4) |
| **Bing Places** | Mandatory (feeds ChatGPT) | Free | Week 1, import from GBP |
| **Apple Business Connect** | Yes | Free | Week 1 |
| **LinkedIn company page** | Mandatory | Free | Exists — align description to §7 boilerplate (see `06_LINKEDIN_SOCIAL_PLAYBOOK.md`) |
| **Clutch** | Best B2B fit — DR90+ citation + the review home LLMs read | Free profile. Paid sponsorship $500–$1k+/mo — **NOT yet** | Week 2 profile; push 5+ client reviews by Day 60; revisit paid at Day 90 gate ONLY if reviews ≥5 (Hireinsouth/Martal: organic Clutch leads have dried up; pay-to-play only works with review proof) |
| **GoodFirms** | Free citation — take it | Free | Week 2 |
| **UpCity** | Free listing fine as citation; smaller buyer pool | Free | Week 2 |
| **DesignRush** | Free listing; some agencies report real inbound; low effort | Free | Week 2 |
| **G2** | Weak fit — software buyers, not services | Free | Skip unless we productize software later |
| **Bark** | **$0. Do not touch.** Pay-per-lead $5–36, credits now expire in 3 months, professional reviews ~1.3/5 (fake/shared leads — BeltStack) | — | Never |
| **Thumbtack** | **$0. Do not touch.** Consumer skew, $10–100+/shared lead, mid-2★ Trustpilot | — | Never |
| **[METRO] Chamber of Commerce** | Yes — local backlink + directory listing + event access (feeds `04`/`07` too) | Typically ~$200–500/yr (varies by chamber — confirm locally) | Week 3, Founder decision |

Total citation spend through Day 90: **~$0–500** (chamber only). Every free profile doubles as AI-training-data entity signal — LLMs recommend brands that appear consistently across directories and review sites (Surfer/Leapd).

---

## 6. Backlinks juniors can actually win

Zero-authority reality: we need ~10–20 real referring domains in 90 days, not 200. Weekly quota: **3 pitch/outreach actions per week** (SEO Lead + Writer 2), logged in the tracker.

1. **Partner & client cross-links (Week 2–3, easiest wins first).** Every past client with a website: ask for a "Website by MyConsulting Network" footer credit or a link from their about/vendors page, offered in the same conversation as the review/referral ask (`07_REFERRAL_ACTIVATION.md`). 8 named clients ≈ 5–6 realistic links. Also: consultant network members' personal sites/portfolios linking to `/experts`.
2. **Journalist-request platforms (HARO's successors — Featured.com, Qwoted, SourceBottle, Help a B2B Writer; all have free tiers).** SEO Lead scans daily digests (10 min), answers ONLY queries where we have real standing (small-business AI adoption, missed calls, local SEO, consulting pricing). Formula: credential line + 3 tight sentences + one stat we can source + headshot link. 3 pitches/week → expect ~1 placement/month; each is a real citation + press mention (LLM entity signal).
3. **Local chamber + local business orgs.** Membership = directory link (§5); then offer a free "AI for [METRO] Small Business" workshop/talk — chambers, SCORE chapters, and small-business development centers link to speakers' sites from event pages.
4. **Guest posts on local/vertical blogs.** Targets: [METRO] business journals' contributed columns, trade blogs in our verticals (landscaping/contractor associations, dental practice-management blogs, legal-practice blogs). Pitch = a de-branded version of our best post ("what missed calls cost contractors — with the math"). 1 pitch/week; 500–800-word original piece with one contextual link to the matching `/for/` page.
5. **Education angle.** Atlantis STEM is a real client — local university entrepreneurship centers and STEM programs maintain resource pages; a short "AI tools for student-run businesses" resource is a natural .edu-adjacent link.
6. **The calculator + listicle earn passively.** Once `/tools/missed-call-calculator` and post 12 exist, include them in every Featured/guest-post pitch — tools and honest roundups get linked; sales pages don't.

**Never do:** buy links, link farms, fiverr "DR60 guest posts", mass directory submissions, comment spam. One toxic-link cleanup costs more than every tactic above combined.

---

## 7. AI-search visibility (ChatGPT, Perplexity, AI Overviews)

Why bother now: AI platforms sent ~1.13B referral visits in June 2025, +357% YoY, ~78% from ChatGPT, converting ~5x better than organic (Sapt). Perplexity can cite fresh well-structured pages **within days**; ChatGPT visibility takes ~3–6 months of accumulated mentions — so entity work starts Week 1, not month 3.

**Already done (verify, don't rebuild):**
- robots.txt allows OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, Google-Extended, ClaudeBot, CCBot ✓
- `llms.txt` is live with services/prices/pages ✓ — **keep expectations at zero.** Google doesn't use it (Mueller compared it to the keywords meta tag) and an Ahrefs analysis found 97% of llms.txt files got zero bot traffic. Maintenance rule: update it whenever `/services` prices or pages change (5 minutes), and spend not one minute more on it.
- Organization/FAQPage/WebSite/Article schema in layout ✓

**Do (in priority order):**
1. **Entity consistency — the canonical boilerplate.** This exact paragraph, verbatim, on GBP, LinkedIn, Clutch, GoodFirms, UpCity, DesignRush, Bing, Apple, email signatures, and guest-post bios: *"MyConsulting Network (MyCo) is an AI-powered consulting network for small businesses, founded in 2023. MyCo pairs vetted consultants with a dedicated project manager to deliver websites that convert, AI receptionists and automation that answer every call and follow up with every lead, and local SEO & AI-search visibility — at a fraction of agency prices. myconsulting.network".* LLMs recommend brands that appear **consistently** across independent sources; consistency IS the tactic (Surfer/Leapd). Kill the known inconsistencies in public copy: Tabletop Village growth is **300%** (the live-site claim — never 250%), Gibraltar is **Business Consulting**, VOPPL is **Technology & AR**, the name is **Presidential Transpo** as listed on-site.
2. **Organization schema `sameAs`:** Dev adds every new profile URL (LinkedIn, Clutch, GoodFirms, UpCity, DesignRush, GBP maps link) to the `sameAs` array in `layout.tsx` as profiles go live (Week 2–3).
3. **Get onto third-party listicles.** Monthly, pitch 2–3 existing "best AI automation agencies / best small-business consultants [METRO]" roundups: short email — who we are, prices public, 12+ clients, link to case studies. Publish our OWN honest roundup (post 12) — LLMs cite roundups that include competitors where they'd never cite a pure sales page.
4. **Answer-first + quantified everything** (baked into §3 rules) — 97% of AI Overview citations come from top-20 organic results, so AIO visibility ≈ classic ranking; no shortcut exists.
5. **Two short YouTube videos by Day 90** (owner: Writer 1 + any founder on camera): "What missed calls cost a contractor (with the math)" and "The Free AI Audit, explained in 3 minutes." YouTube is heavily cited inside AI Overviews; screen-share + voiceover is fine.
6. **Reddit/community answers, honestly.** When r/smallbusiness / r/sweatystartup / vertical subs ask about missed calls or AI receptionists: give a genuinely complete answer, disclose "I run an AI consulting shop," link only if asked or truly on-point. Consistent Reddit presence is a documented LLM sourcing channel; spam gets nuked and poisons the brand.
7. **Monthly LLM spot-check (SEO Lead, 1st Monday, 20 min):** run the same prompts in ChatGPT + Perplexity — "best AI automation consultant for [METRO] small businesses", "ai receptionist for law firms recommendations", "how much does AI automation cost for a small business" — screenshot, log cited/not-cited + who IS cited into `11_METRICS_AND_TRACKING.md`. Who's cited = our listicle-pitch target list.

---

## 8. Technical checklist (Next.js) — done vs. remaining

### Done (verified in repo — touch nothing)
- [x] `metadataBase`, per-page `metadata` with title/description/`alternates.canonical`/`openGraph` on all pages
- [x] Static OG image (`public/og-image.png`)
- [x] `robots.txt` with AI-bot allows + sitemap reference; `sitemap.xml` via next-sitemap with all routes
- [x] JSON-LD: Organization, FAQPage, WebSite, Article (layout) + per-page FAQPage on service/vertical pages
- [x] `llms.txt`
- [x] Server components for marketing pages, `next/font` for Outfit/DM Sans

### Remaining (Dev owner, ordered)
- [ ] **Wk 1: GSC + Bing verification** (§9) — blocks everything else's measurement
- [x] **Wk 1: Analytics.** DONE in code: consent-gated GA4 loader ships at `src/components/UI/Analytics.tsx` (loads only after cookie-consent Accept). To activate: create a GA4 property, then set `NEXT_PUBLIC_GA_ID=G-XXXXXXX` in the deploy environment (or `.env.local`) and redeploy — no code change needed. Still TODO: custom events for quote-modal open/submit and `/free-ai-audit` form submit. Without activation, "leads by source" in `11_METRICS_AND_TRACKING.md` is fiction.
- [ ] **Wk 1: `/blog` route** — listing page + MDX/TSX post template that enforces: Article schema w/ author + dates, FAQPage block, breadcrumbs (BreadcrumbList schema), canonical, CTA section + `<QuoteModal />`, auto-inclusion in sitemap. Follow the site conventions (server components, `container-custom`, existing UI components).
- [ ] **Wk 2: Core Web Vitals pass on mobile.** Official "good" thresholds at the 75th percentile: **LCP ≤2.5s, INP ≤200ms, CLS ≤0.1** (web.dev). Engineering budget: target LCP <2.0s (claims that Google "tightened to 2.0s" are unverified — but it's a safe budget). Checklist: `priority` on the LCP hero image via `next/image`; dynamic-import heavy client components (globe/animations — INP is the most-failed vital, ~43% of sites); confirm marketing pages are statically rendered; run PageSpeed Insights on `/`, `/services`, one `/for/` page, log scores in tracker.
- [ ] **Wk 2: Review the self-serving `aggregateRating`** in the layout Organization schema (5.0/12). Google explicitly ignores self-serving review markup on your own organization for rich results, and it undercuts credibility while we have zero visible Google/Clutch reviews. Recommendation: remove it from Organization schema; put review energy into GBP/Clutch where it counts. Founder sign-off required (it's an existing public claim).
- [ ] **Wk 3 (nice-to-have): per-page dynamic OG images** via `opengraph-image.tsx` + `ImageResponse` — branded per-page cards lift social/chat CTR; skip if Dev time is tight.
- [ ] **Ongoing:** every new page ships with metadata + canonical + schema + internal links on day one (the template enforces it); never mix legacy `<Head>` with the Metadata API; nothing indexable rendered client-side only.

---

## 9. Measurement: GSC setup + rank tracking on a $0–30/mo budget

**Google Search Console (Week 1, Dev + SEO Lead, 30 min):**
1. search.google.com/search-console → Add property → **Domain** property `myconsulting.network` (covers all subdomains/protocols)
2. Verify via DNS TXT record at the registrar (copy the token, add TXT, wait, verify)
3. Submit `https://myconsulting.network/sitemap.xml` under Sitemaps
4. URL-inspect + "Request indexing" for the 6 `/for/` pages and `/services` (new pages on low-DA domains index slowly; do this for every new post too)
5. Settings → Users: add SEO Lead + a founder
6. **Bing Webmaster Tools** (bing.com/webmasters): sign in → **Import from GSC** (one click) → done. Bing feeds ChatGPT search — this is an AI-visibility action, not a nice-to-have.

**Rank tracking on a budget:**
- **$0 (default, months 1–2):** GSC Performance report IS the rank tracker. SEO Lead keeps a sheet with the 50 keywords from §2; every Friday, filter GSC by each money query → log impressions, clicks, avg position. GSC lags ~2 days and shows real data, not simulated.
- **~$29/mo (optional, month 3+, only if organic leads > 0):** a budget tracker like Mangools SERPWatcher (~$29/mo, prices approximate) for daily local-rank tracking once the city page + GBP compete for map-pack terms. Do not buy Ahrefs/Semrush ($100+/mo) at this stage — GSC + free versions answer everything a 90-day-old campaign needs.
- **Manual spot-checks:** incognito + "&near=[METRO]" checks are noisy; trust GSC averages over eyeballs.

**Weekly SEO scoreboard (Friday, SEO Lead → `11_METRICS_AND_TRACKING.md`):**
| Metric | Source | Target trajectory |
|---|---|---|
| Indexed pages | GSC coverage | +2/wk from Wk 3 |
| Impressions on money keywords (§2 list) | GSC | up and to the right from Wk 4–6 |
| Clicks on money keywords | GSC | first clicks by Wk 6–8 |
| GBP actions (calls, site clicks, directions) | GBP dashboard | >0 from Wk 3 |
| Google reviews (count) | GBP | 10 by Day 60 |
| Clutch reviews | Clutch | 5 by Day 90 (gates paid decision) |
| Referring domains | GSC links report | +1–2/mo |
| Organic + GBP leads | GA4 events + "how did you hear" | 0–2 (mo 1) → 3–6 (mo 3) |
| LLM citation spot-check | §7 monthly log | cited ≥1 prompt by Day 90 |

Ignore entirely: raw post count, open-ended "traffic," domain-authority scores. Metrics that matter: impressions on money terms, leads per post, calculator completions (research §5).

---

## 10. 90-day week-by-week calendar

Owners: **SEO** = SEO Lead · **W1/W2** = Writers · **DEV** = dev owner · **FND** = founder. ~16 hrs/wk total.

| Wk | Ship list | Owners |
|---|---|---|
| **1** | GSC + Bing verified, sitemap submitted, indexing requested for money pages · GA4 + form/modal events live · `/blog` route built · GBP created (service-area, address hidden) + Bing Places + Apple Business Connect · [METRO] chosen · first GBP post | DEV, SEO, FND |
| **2** | Free profiles: Clutch, GoodFirms, UpCity, DesignRush + LinkedIn description aligned — canonical boilerplate verbatim everywhere · `sameAs` array updated · CWV pass (hero `priority`, dynamic imports, PSI scores logged) · aggregateRating decision · keyword sheet built from §2 | SEO, DEV, FND |
| **3** | **Posts 1 & 2** · GBP review link into founder scripts; first 4 review asks (with `07_REFERRAL_ACTIVATION.md` outreach) · chamber decision · client cross-link asks begin (3 this wk) | W1, W2, FND, SEO |
| **4** | **Posts 3 & 4** · Featured/Qwoted accounts live, first 3 pitches · 3 more review asks · request indexing on all posts | W1, W2, SEO |
| **5** | **Posts 5 & 6** · first guest-post pitch ([METRO] business blog) · GBP posts continuing weekly (rotation §4) · check GSC: are posts indexed? fix any coverage errors | W1, W2, SEO, DEV |
| **6** | **Posts 7 & 8** · comparison page #1 (*virtual receptionist vs AI receptionist*, kw #13) · 3 Featured pitches · first GSC keyword review vs. §2 sheet | W1, W2, SEO |
| **7** | **Posts 9 (checklist + gated PDF) & 10** · comparison page #2 (*Podium alternative*, kw #45) · chamber joined → directory link live · workshop/talk offer to chamber/SCORE | W1, W2, SEO, FND |
| **8** | **Posts 11 & 12 (honest listicle)** · **DEV builds `/tools/missed-call-calculator`** (email-gated report; GA4 completion event) · first monthly LLM spot-check logged | W1, W2, DEV, SEO |
| **9** | **City page** `/[metro]-ai-consulting` (real local proof only, aligned with GBP) + 2 posts · calculator promoted in every outreach channel (`03`, `04`, `06` pods pick it up) · YouTube video #1 recorded | W1, W2, SEO, FND |
| **10** | 2 posts (next spokes from §2 clusters C/E) · pitch calculator to 3 listicle/roundup owners found in Wk-8 LLM spot-check · guest post #2 pitched · Google reviews checkpoint: ≥8? if not, FND clears the backlog personally | W1, W2, SEO, FND |
| **11** | 2 posts · **refresh pass #1:** every page with GSC impressions but CTR <1% gets a new title/meta + FAQ additions · YouTube video #2 | W1, W2, SEO |
| **12** | 2 posts · comparison page #3 (*hiring an AI consultant vs DIY*, kw #43) · second LLM spot-check · Clutch review push (target 5) | W1, W2, SEO, FND |
| **13** | **Day-90 review:** full scoreboard vs. §9 targets · **decision gate:** Clutch reviews ≥5 → evaluate city-level Clutch sponsorship (~$500–1k/mo); still $0 to Bark/Thumbtack, always · pick next 2 verticals' spoke topics for days 91–180 · quarterly refresh of top 10 pages scheduled | SEO, FND |

**Standing weekly rhythm (survives all 13 weeks):** Mon GBP post → Wed Post A ships → Fri Post B ships + GSC scoreboard + 3 link/pitch actions + review asks logged. If it isn't logged in `11_METRICS_AND_TRACKING.md`, it didn't happen.

---

## Print-and-pin: the SEO pod's daily/weekly checklist

**Daily (10 min, SEO Lead):** scan Featured/Qwoted digests → pitch if genuinely qualified · check GBP for new reviews/questions → respond same day.
**Weekly:** 1 GBP post (Mon) · Post A (Wed) · Post B (Fri) · 3 link/pitch actions · request indexing on new URLs · Friday scoreboard.
**Monthly:** LLM spot-check prompts · listicle pitches to whoever the LLMs cited instead of us · llms.txt/price sync if offers changed.
**Quarterly:** refresh top 10 pages (titles, FAQs, updated stats — freshness is a Perplexity signal).
**Never:** head terms · templated city pages without local proof · bought links · incentivized or gated reviews · Bark/Thumbtack · claims we can't source (only public proof points from `01_TARGET_SEGMENTS.md`).
