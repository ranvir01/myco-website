# MyCo Business Growth — Master Execution Prompt

> This is the canonical, detailed prompt for enhancing MyConsulting Network into a
> revenue-generating AI-services business. It is written to be executed — by an AI agent,
> by the team, or both. Everything in `growth/` and the website changes on the
> `claude/business-growth-strategy-99z0qh` branch are the output of executing this prompt.
> Re-run or extend any phase by pasting the relevant section into your AI tool of choice.

---

## THE PROMPT

You are the growth engineering team for **MyConsulting Network (MyCo)** — myconsulting.network,
contact info@myconsulting.network. Transform this business from a portfolio website into a
client-acquiring, revenue-generating machine. Execute every phase below. Do not stop at plans —
produce finished assets: pages, scripts, templates, checklists, and numbers.

### Context you must respect

- **Who we are:** a consulting network founded 2023 by Ethan Lostroh and Ranvir Thind, with a
  bench of ~11 young, hungry consultants (strategy, software, design, UX, engineering, SEO,
  business analysis). Every project gets a dedicated project manager and 24/7 network-level support.
- **Proof we own:** 8 real past clients — Tabletop Village, Blue Landscaping, VOPPL AR,
  Goldstein & Company, Gibraltar Business Group, Presidential Transportation, Atlantis STEM,
  Thind Transport. Existing public claims: 12+ clients, 25+ projects, response within 24h,
  talent matched in 3–7 days.
- **Economics:** typical project ~$1,500; consultants keep 75%; MyCo nets ~14%. A finalized
  referral program exists (10% of project revenue to referrers for years 1–3, then 3%; ~$1,080
  per referred client over 5 years) — treat it as a growth channel, not paperwork.
- **Resources:** ~11 people available NOW, near-zero marketing budget (≤$300/mo tools),
  no paid ads. Human effort is the leverage.
- **Honesty constraint:** never fabricate testimonials, metrics, or credentials. Reuse only
  claims already public. Qualitative case studies where numbers are unverified.
- **Compliance constraint:** CAN-SPAM (address, working opt-out, honored ≤10 days),
  Google/Yahoo/Microsoft sender rules (SPF/DKIM/DMARC, <0.1% complaint target, one-click unsub),
  TCPA-safe calling (manual dials, business lines, 8am–9pm local, honor DNC, watch FL/OK rules),
  and AI-liability guardrails (no unsupervised bots answering legal/medical/policy questions;
  no HIPAA data without BAAs).

### The goal

**Money now, engine forever.** First closed revenue within 14 days (warm network + past-client
reactivation), a repeatable outbound machine by day 30, and a compounding inbound engine
(SEO + referrals + content) by day 90. Target: $10k/mo run-rate mixing $1.5k–$5k projects with
$150–$500/mo retainers.

### Phase 1 — Research & audit (evidence before action)

1. Audit the entire website: routes, copy, CTAs, form handling, SEO state, structured data,
   broken/dead functionality, trust gaps. Produce a defect list ranked by client-embarrassment.
2. Audit business assets: team, clients, referral economics, pricing signals, existing claims.
3. Research with sources: (a) which AI services US small businesses actually buy in 2025–26 and
   at what prices; (b) cold email deliverability rules + realistic benchmarks + cheap tool stack;
   (c) cold-calling compliance + openers that work; (d) SEO tactics that work for low-authority
   agency sites, including AI-search visibility.

### Phase 2 — Positioning & productized offers

Reposition as **"AI-powered consulting for small businesses"** — practical AI plus a human PM at
a fraction of agency cost. Define 6 canonical productized services with public from-prices:
1. AI Growth Website — from $1,500, ~2 weeks
2. AI Receptionist & Chatbot — from $750 setup + $150/mo
3. Workflow Automation Sprint — from $1,000
4. Local SEO & AI Visibility — from $500/mo
5. AI Marketing Engine — from $750 setup + $400/mo
6. Custom Projects & Fractional Consulting — $1,500–$5,000 typical
Flagship lead magnet: **Free AI Opportunity Audit** (30-min call + written 5-point plan in 48h).
Target segments (priority order, grounded in real client proof): home & field services,
trucking & logistics, restaurants/local retail, professional services (law/accounting/finance),
healthcare & wellness, real estate.

### Phase 3 — Website: turn the brochure into a funnel

Build (matching the existing design system, server-rendered, full metadata + JSON-LD):
- `/services` — 6 productized services with prices, how-it-works, FAQ, OfferCatalog schema
- `/ai-for-small-business` — flagship SEO/positioning landing page with FAQPage schema
- `/free-ai-audit` — squeeze page with EMBEDDED audit-request form (the cold-outreach landing URL)
- `/case-studies` — honest, qualitative case studies of the 8 real clients
- `/partners` — public referral-program page using the real finalized numbers
- `/for/{home-services,trucking-logistics,restaurants,professional-services,healthcare,real-estate}`
  — industry pages with vertical-specific pains, fixes, scenarios, FAQs (no doorway-page mush)
- Homepage repositioning: hero → "AI-powered growth team," value chips, audit CTA
- Global SEO overhaul: metadata, keywords, schemas updated to AI-for-SMB positioning; sitemap
  priorities; robots welcoming AI crawlers (GPTBot/ClaudeBot/PerplexityBot); `llms.txt`; og-image
- Conversion plumbing: quote modal captures service interest; newsletter actually subscribes;
  every CTA works on every page; forms post to the live Formspree endpoint
- Fix every defect from the Phase 1 audit (dead CTAs, wrong links, inconsistent client labels,
  missing H1s, canonical errors, wrong-domain emails)

### Phase 4 — Go-to-market playbooks (written to execute, not to read)

Produce under `growth/`: master GTM plan with revenue math; segment dossiers with quantified
pains and hooks; offers/pricing delivery guide with tool stack and margins; cold email playbook
(infrastructure setup, warmup schedule, per-segment 3-email sequences, subject lines, reply
matrix, compliance baked in); cold calling playbook (scripts per segment, gatekeeper/voicemail
branches, objection handling, walk-in variant); SEO playbook (50-keyword starter map, first 12
blog posts outlined, GBP, citations, backlinks, 90-day calendar); LinkedIn/social playbook
(profiles, 4-week content calendar, example posts, DM sequences with limits); referral
activation (partner recruiting scripts, past-client reactivation messages); lead-list building
(free/cheap methods with quotas); **14-day first-revenue sprint** (day-by-day, per-person
quotas); team execution plan (11 people → pods, standups, decision rules); metrics system
(funnel definitions, targets, tracking templates: lead list, outreach tracker, pipeline CSV,
proposal + audit-report templates).

### Phase 5 — Verify, ship, operate

1. Type-check and build the site; fix all errors. Adversarially code-review the diff; fix
   confirmed issues. Screenshot key pages desktop + mobile.
2. Commit everything to `claude/business-growth-strategy-99z0qh` and push.
3. Operating rhythm after merge: daily 15-min standup + evening numbers, Monday pipeline
   review, Friday retro. Every number logged same-day. Audits delivered <48h, proposals <24h.

### Acceptance criteria

- `npm run build` passes; every nav link resolves; every CTA opens a working form.
- A stranger reading the site understands within 10 seconds what MyCo sells, for whom,
  at what price, and what to click.
- A team member can open `growth/09_FIRST_14_DAYS_SPRINT.md` Monday morning and know
  exactly what to do by 9:30am — lists to build, scripts to read, numbers to hit.
- Zero fabricated claims; zero compliance landmines in outreach materials.
