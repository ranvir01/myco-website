import type { IconType } from "react-icons";
import {
  FiAlertTriangle,
  FiBell,
  FiCalendar,
  FiCamera,
  FiClock,
  FiEdit3,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiInbox,
  FiLayers,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiPhoneMissed,
  FiRepeat,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

/**
 * Canonical industry landing-page data — single source of truth for the
 * /for/<slug> pages. Service names and prices must stay in sync with the
 * positioning brief and src/lib/servicesData.ts.
 */

export interface IndustryPain {
  icon: IconType;
  title: string;
  description: string;
}

export interface IndustryFix {
  icon: IconType;
  /** Canonical service name — must match the productized services list */
  service: string;
  /** Canonical price line for that service */
  price: string;
  /** Industry-specific promise, e.g. "Invoice the day the POD lands" */
  title: string;
  description: string;
}

export interface ScenarioStep {
  time: string;
  event: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryProof {
  /** Real client names only — never invent */
  clients: string[];
  text: string;
}

export interface Industry {
  slug: string;
  /** Display name, e.g. "Home & Field Services" */
  name: string;
  /** Natural-language audience label for headings, e.g. "field service owners" */
  audienceLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroBadge: string;
  /** Plain part of the H1 */
  heroHeadline: string;
  /** Gradient-highlighted part of the H1 */
  heroHighlight: string;
  heroSub: string;
  painsHeading: string;
  painsHighlight: string;
  painsIntro: string;
  pains: IndustryPain[];
  fixesHeading: string;
  fixesHighlight: string;
  fixesIntro: string;
  fixes: IndustryFix[];
  /** e.g. "A Tuesday with your AI receptionist" */
  scenarioTitle: string;
  scenarioIntro: string;
  scenarioSteps: ScenarioStep[];
  /** Omit for industries with no named client in the brief */
  proof?: IndustryProof;
  faqs: IndustryFaq[];
  ctaHeadline: string;
  ctaHighlight: string;
  ctaSub: string;
}

export type IndustrySlug =
  | "home-services"
  | "trucking-logistics"
  | "restaurants"
  | "professional-services"
  | "healthcare"
  | "real-estate";

export const industries: Record<IndustrySlug, Industry> = {
  "home-services": {
    slug: "home-services",
    name: "Home & Field Services",
    audienceLabel: "field service owners",
    metaTitle: "AI & Growth Consulting for Home & Field Services",
    metaDescription:
      "AI for landscapers, contractors, cleaners, and HVAC pros: missed-call text-back, automated quotes and invoices, and local SEO that owns 'near me' searches. From MyConsulting Network — start with a Free AI Opportunity Audit.",
    keywords: [
      "AI for landscaping business",
      "AI for contractors",
      "missed call text back for home services",
      "HVAC business automation",
      "landscaping lead follow up",
      "local SEO for home services",
      "AI receptionist for contractors",
    ],
    heroBadge: "For landscapers, contractors, cleaners & HVAC pros",
    heroHeadline: "You Can't Answer the Phone From a Ladder.",
    heroHighlight: "Your AI Can.",
    heroSub:
      "MyCo sets up AI systems for home and field service businesses: every missed call gets a text back in seconds, quotes go out before the competition calls back, and reviews stack up while you're still on the job. Fraction of agency prices, done in weeks.",
    painsHeading: "Where field service businesses",
    painsHighlight: "bleed jobs",
    painsIntro:
      "The work is good. The schedule is full-ish. But between the truck, the job site, and the paperwork, the office side leaks money in four predictable places.",
    pains: [
      {
        icon: FiPhoneMissed,
        title: "Missed calls while you're on the job",
        description:
          "A homeowner with a broken AC or an overgrown yard calls three companies and hires whoever answers. If you're mid-install when the phone rings, that job just went to the next name on Google.",
      },
      {
        icon: FiClock,
        title: "Quotes go out at 9 PM — or three days later",
        description:
          "Estimates get written after dinner, from memory, on the couch. Meanwhile the homeowner already booked the crew that quoted them the same afternoon.",
      },
      {
        icon: FiCalendar,
        title: "No-shows and reschedules wreck the route",
        description:
          "One forgotten appointment leaves a truck idle across town. Nobody has time to send reminder texts by hand, so the schedule keeps taking hits.",
      },
      {
        icon: FiMapPin,
        title: "Invisible in the map pack",
        description:
          "Your work is better than the company ranking first for 'landscaper near me' — but they have 80 reviews and a polished profile, and your happy customers never got asked to post one.",
      },
    ],
    fixesHeading: "What we build for",
    fixesHighlight: "crews like yours",
    fixesIntro:
      "Four fixes, each tied to one of our fixed-price services. No five-year transformation plan — each one is live in weeks.",
    fixes: [
      {
        icon: FiMessageCircle,
        service: "AI Receptionist & Chatbot",
        price: "From $750 setup + $150/mo",
        title: "Missed-call text-back that quotes from the truck",
        description:
          "When a homeowner calls and you're running a mower, they get a text within seconds: sorry we missed you — here's what we do, want an estimate? The chat answers pricing and service-area questions from your real price list and books the estimate straight into your calendar.",
      },
      {
        icon: FiZap,
        service: "Workflow Automation Sprint",
        price: "From $1,000 per sprint",
        title: "Quotes, invoices, and review requests that send themselves",
        description:
          "Estimate follow-ups fire automatically when a homeowner goes quiet. Invoices go out the moment a job is marked done. Review requests land while the lawn still looks perfect — no more admin nights.",
      },
      {
        icon: FiMapPin,
        service: "Local SEO & AI Visibility",
        price: "From $500/mo",
        title: "Own 'near me' in your service area",
        description:
          "Google Business Profile tuned for your trade and towns, a reviews engine that asks every happy customer at the right moment, and visibility when homeowners ask ChatGPT or Google's AI who to call.",
      },
      {
        icon: FiGlobe,
        service: "AI Growth Website",
        price: "From $1,500",
        title: "A site that wins the job before you show up",
        description:
          "Before-and-after galleries, service-area pages, click-to-call, and a quote form a homeowner can finish from their phone in a minute. Built to book work, not just look nice — delivered in about two weeks.",
      },
    ],
    scenarioTitle: "A Tuesday with your AI receptionist",
    scenarioIntro:
      "Here's what a normal working day looks like once the systems are in place. Illustrative, not a transcript — your setup is built around your services, prices, and calendar.",
    scenarioSteps: [
      {
        time: "7:40 AM",
        event:
          "Crew loads the trucks. Overnight, a website visitor asked about weekly mowing — the chatbot already answered from your price list and booked an estimate for Thursday at 4 PM.",
      },
      {
        time: "9:15 AM",
        event:
          "You're mid-job and miss a call. Within seconds the caller gets a text back; she replies that she needs a backyard cleanup and sends photos — all waiting for you at lunch.",
      },
      {
        time: "12:30 PM",
        event:
          "Someone asks the website chat whether you install French drains. It answers yes, captures the address and rough budget, and offers your next open estimate slot.",
      },
      {
        time: "3:00 PM",
        event:
          "You mark the Hendersons' job complete in your phone. The invoice goes out automatically, followed by a review request an hour later.",
      },
      {
        time: "5:30 PM",
        event:
          "Tomorrow's two estimate appointments get reminder texts. One homeowner reschedules — the calendar updates itself and you get a heads-up.",
      },
      {
        time: "8:00 PM",
        event:
          "Instead of eight voicemails, you skim one summary of the day's leads and bookings. Then you're done.",
      },
    ],
    proof: {
      clients: ["Blue Landscaping"],
      text: "We didn't learn field services from a whitepaper. Blue Landscaping is one of the 12+ growing businesses that work with MyCo — so we know the rhythm of estimate season, crews in the field, and phones that ring when nobody can pick up.",
    },
    faqs: [
      {
        question: "I'm on job sites all day. Who actually sets this up and runs it?",
        answer:
          "We do. Every project gets a dedicated project manager, and you're involved only where it matters: approving what the AI says, what your prices are, and where the calendar lives. An AI receptionist is typically live in about a week, and you don't need to learn any new software.",
      },
      {
        question: "Will homeowners be put off texting with an AI?",
        answer:
          "In practice, what a homeowner notices is that they got an instant, useful answer instead of voicemail. The assistant is briefed on your services, prices, and service area so it answers like well-trained office staff — and hand-off rules make sure real conversations reach you when it matters.",
      },
      {
        question: "What does this cost for a one- or two-truck operation?",
        answer:
          "The AI Receptionist & Chatbot starts at $750 setup plus $150/month, and a Workflow Automation Sprint starts at $1,000. Everything is fixed-price and scoped up front. If you're not sure where to start, the Free AI Opportunity Audit will tell you which fix pays back fastest for your operation.",
      },
      {
        question: "Can it book estimates into the calendar and tools I already use?",
        answer:
          "Yes. We build around what you already run — your calendar, invoicing, and phone number stay the same. We connect them using AI plus tools like Zapier and Make, so there's no rip-and-replace and no new system for your crew to learn.",
      },
    ],
    ctaHeadline: "The next call you miss",
    ctaHighlight: "doesn't have to cost you the job",
    ctaSub:
      "Book a Free AI Opportunity Audit: a 30-minute call about how your work comes in, then a written 5-point plan within 48 hours showing exactly where AI saves you time and wins you jobs. No obligation.",
  },

  "trucking-logistics": {
    slug: "trucking-logistics",
    name: "Trucking & Logistics",
    audienceLabel: "carriers and fleet owners",
    metaTitle: "AI & Growth Consulting for Trucking & Logistics",
    metaDescription:
      "AI for trucking companies and small fleets: invoices out the day the POD lands, broker calls answered while you drive, and compliance dates that never sneak up. From MyConsulting Network — start with a Free AI Opportunity Audit.",
    keywords: [
      "AI for trucking companies",
      "trucking back office automation",
      "automated trucking invoicing",
      "dispatch automation small fleet",
      "trucking compliance reminders",
      "AI receptionist for trucking",
      "logistics workflow automation",
    ],
    heroBadge: "For owner-operators, small fleets & dispatchers",
    heroHeadline: "Keep the Trucks Moving.",
    heroHighlight: "Let AI Push the Paperwork.",
    heroSub:
      "MyCo builds AI systems for trucking and logistics companies: invoices drafted the day the POD lands, broker calls answered while you're at 70 mph, and IFTA and inspection dates that never sneak up on you. Fraction of agency prices, done in weeks.",
    painsHeading: "Where small fleets",
    painsHighlight: "lose money off the road",
    painsIntro:
      "The trucks earn the money. The office side leaks it — in late invoices, missed calls, and compliance surprises that all trace back to the same problem: nobody has time to sit at a desk.",
    pains: [
      {
        icon: FiPhoneMissed,
        title: "Broker calls go unanswered at 70 mph",
        description:
          "You can't take a check-in call mid-route, and the office is a phone that rings in an empty room. To a broker, an unanswered call reads as unreliable — and the next load quietly goes to another carrier.",
      },
      {
        icon: FiFileText,
        title: "Invoicing waits for Friday",
        description:
          "Rate cons, BOLs, and PODs pile up until someone is at a desk. Every day an invoice sits unsent is a day your cash sits in someone else's account — and it makes expensive factoring feel like the only option.",
      },
      {
        icon: FiAlertTriangle,
        title: "Compliance lives in someone's head",
        description:
          "IFTA quarters, medical card renewals, annual inspections, maintenance intervals — tracked in a spreadsheet nobody opens until something is already overdue and a truck is parked.",
      },
      {
        icon: FiInbox,
        title: "Dispatch by group text",
        description:
          "Load status is buried across text threads, calls, and email. The driver knows one version, the office knows another, and the shipper calling for an update gets 'let me check and call you back.'",
      },
    ],
    fixesHeading: "What we build for",
    fixesHighlight: "carriers like yours",
    fixesIntro:
      "Four fixes, each tied to one of our fixed-price services — built around the calls, texts, and paperwork your operation already runs on.",
    fixes: [
      {
        icon: FiZap,
        service: "Workflow Automation Sprint",
        price: "From $1,000 per sprint",
        title: "Invoice the day the POD lands",
        description:
          "Your driver texts a photo of the signed POD. It gets filed against the load, the invoice is drafted the same day, and missing paperwork gets chased automatically — so billing stops waiting for Friday and cash stops waiting for weeks.",
      },
      {
        icon: FiMessageCircle,
        service: "AI Receptionist & Chatbot",
        price: "From $750 setup + $150/mo",
        title: "A dispatcher's assistant that never sleeps",
        description:
          "Missed calls from brokers and shippers get an instant text back. The assistant answers routine questions — lanes you run, equipment, how to send a rate con — around the clock, and routes anything that needs a decision straight to you.",
      },
      {
        icon: FiLayers,
        service: "Custom Projects & Fractional Consulting",
        price: "Typical projects $1,500–$5,000",
        title: "One dashboard for loads, trucks, and margins",
        description:
          "Revenue per lane, cost per mile, which truck is where, and every upcoming compliance date — on one screen instead of five spreadsheets. Scoped free before you commit a dollar.",
      },
      {
        icon: FiGlobe,
        service: "AI Growth Website",
        price: "From $1,500",
        title: "A site that wins shippers and recruits drivers",
        description:
          "A credible web presence for brokers and direct shippers checking you out, plus a driver application flow that works from a phone at a truck stop. Delivered in about two weeks.",
      },
    ],
    scenarioTitle: "A day with an automated back office",
    scenarioIntro:
      "Here's what a normal day looks like once the paperwork runs itself. Illustrative, not a transcript — your setup is built around your loads, lanes, and tools.",
    scenarioSteps: [
      {
        time: "6:05 AM",
        event:
          "A driver texts a photo of last night's signed POD. It's filed against the load automatically, and an invoice draft is waiting for one-click approval.",
      },
      {
        time: "9:40 AM",
        event:
          "A broker calls for a check-in while you're driving. He gets a text back in seconds with the status update you pre-approved — no voicemail, no 'they never answer.'",
      },
      {
        time: "11:20 AM",
        event:
          "A new rate con comes in by email. The key details — rate, pickup, delivery, broker contact — land in your load sheet without anyone retyping them.",
      },
      {
        time: "2:15 PM",
        event:
          "A reminder fires: truck 07's annual inspection is due in ten days, and the IFTA quarter closes in three weeks. Both are on the calendar, not in someone's memory.",
      },
      {
        time: "4:30 PM",
        event:
          "The day's approved invoices go out — the same day the loads delivered, not at the end of the week.",
      },
      {
        time: "7:00 PM",
        event:
          "You get a plain-English summary: loads delivered, invoices sent, calls answered, anything that needs your eyes tomorrow.",
      },
    ],
    proof: {
      clients: ["Presidential Transpo", "Thind Transport"],
      text: "Trucking isn't new territory for us. Presidential Transpo and Thind Transport are both MyCo clients — we know what a rate con is, why the POD matters, and what happens to cash flow when invoicing waits until Friday.",
    },
    faqs: [
      {
        question: "My drivers aren't tech people. Will they actually use this?",
        answer:
          "Yes, because there's nothing new to learn. The systems run on what drivers already do — texting a photo of a POD, replying to a message. No app to install, no portal to log into. If a driver can send a text, the automation works.",
      },
      {
        question: "Can it connect to my TMS or load boards?",
        answer:
          "We build around whatever you're running. If a tool has an export, an inbox, or an integration, we can usually connect it using platforms like Zapier and Make. And if you're running the whole operation on spreadsheets and texts, that's fine too — we'll build a lightweight dashboard instead of forcing you onto a TMS.",
      },
      {
        question: "Is AI reliable enough for compliance and billing paperwork?",
        answer:
          "We set it up so AI does the drafting and reminding, and a human does the approving. Invoices wait for your one-click sign-off before they go out, and compliance alerts tell you what's due — they never file anything on your behalf. You get the speed without giving up control.",
      },
      {
        question: "What does this cost for a small fleet?",
        answer:
          "A Workflow Automation Sprint starts at $1,000, and the AI Receptionist & Chatbot is $750 setup plus $150/month. Everything is scoped and priced before work starts. The Free AI Opportunity Audit will tell you which fix pays back fastest — for most carriers it's getting invoices out the door faster.",
      },
    ],
    ctaHeadline: "Your trucks shouldn't outwork",
    ctaHighlight: "your back office",
    ctaSub:
      "Book a Free AI Opportunity Audit: a 30-minute call about how your loads, paperwork, and calls actually flow, then a written 5-point plan within 48 hours showing where AI speeds up your cash and calms your dispatch. No obligation.",
  },

  restaurants: {
    slug: "restaurants",
    name: "Restaurants, Retail & Entertainment",
    audienceLabel: "restaurant, retail and venue owners",
    metaTitle: "AI & Growth Consulting for Restaurants, Retail & Entertainment",
    metaDescription:
      "AI for restaurants, local retail, and entertainment venues: never miss a call during the rush, keep five-star reviews coming, and turn one photo into a week of marketing. From MyConsulting Network — start with a Free AI Opportunity Audit.",
    keywords: [
      "AI for restaurants",
      "restaurant missed call text back",
      "review management for restaurants",
      "AI chatbot for local retail",
      "restaurant social media automation",
      "private event booking automation",
      "local SEO for restaurants",
    ],
    heroBadge: "For restaurants, cafes, local retail & entertainment venues",
    heroHeadline: "You Run the Floor.",
    heroHighlight: "AI Handles the Phones, Reviews & Posts.",
    heroSub:
      "MyCo sets up AI systems for restaurants, shops, and venues: every call during the rush gets answered, happy guests actually leave reviews, and your socials stay alive without stealing your one day off. Fraction of agency prices, done in weeks.",
    painsHeading: "Where busy venues",
    painsHighlight: "leak covers and sales",
    painsIntro:
      "The product is good — the food, the shop, the experience. What leaks revenue is everything around it: the phone, the reviews, the posts you never have time to make.",
    pains: [
      {
        icon: FiPhoneMissed,
        title: "The phone rings hardest when you can't answer",
        description:
          "Friday, 6 PM: walk-ins at the door, tickets up, and the phone ringing with reservations, birthday parties, and 'are you open?' Every call that hits voicemail is covers or sales walking to the place that picked up.",
      },
      {
        icon: FiStar,
        title: "Reviews decide who walks in — and yours are stale",
        description:
          "Happy guests rarely post on their own. One unanswered bad review sits at the top of your profile while the spot down the street quietly collects five new five-stars a week.",
      },
      {
        icon: FiCamera,
        title: "Social media is a second job you don't have time for",
        description:
          "You know the special, the event, the new arrival should be posted. But it's 11 PM after close, and it doesn't happen — again. An empty feed tells people you might not even be open.",
      },
      {
        icon: FiHelpCircle,
        title: "The same twelve questions, all day",
        description:
          "Hours, parking, allergens, gift cards, private parties, do you take walk-ins. Every answer pulls someone off the floor mid-service — and unanswered ones cost you the booking.",
      },
    ],
    fixesHeading: "What we build for",
    fixesHighlight: "places like yours",
    fixesIntro:
      "Four fixes, each tied to one of our fixed-price services — set up around your menu, your hours, and how your service actually runs.",
    fixes: [
      {
        icon: FiMessageCircle,
        service: "AI Receptionist & Chatbot",
        price: "From $750 setup + $150/mo",
        title: "A host for your phone line",
        description:
          "During the rush, missed calls get an instant text back. The assistant answers hours, menu, and parking questions from your real info, captures reservation and private-party requests — and routes allergy questions and complaints straight to a human, per rules you set.",
      },
      {
        icon: FiMapPin,
        service: "Local SEO & AI Visibility",
        price: "From $500/mo",
        title: "A reviews engine that runs itself",
        description:
          "Guests get a well-timed review request after their visit, your Google Business Profile stays fresh with hours, photos, and menus, and you show up when people ask Google — or ChatGPT — where to eat, shop, or play nearby.",
      },
      {
        icon: FiTrendingUp,
        service: "AI Marketing Engine",
        price: "From $750 setup + $400/mo",
        title: "One photo becomes a week of marketing",
        description:
          "Snap the special or the new arrival; AI drafts the posts and the email, you approve from your phone. Regulars hear about events and specials before the seats sit empty — every week, whether you're slammed or not.",
      },
      {
        icon: FiZap,
        service: "Workflow Automation Sprint",
        price: "From $1,000 per sprint",
        title: "Private parties without the email ping-pong",
        description:
          "Event and catering inquiries hit a form that collects date, headcount, and budget, get an automatic quote from your packages, and follow up on their own — deposits and reminders included.",
      },
    ],
    scenarioTitle: "A Friday night with your AI host",
    scenarioIntro:
      "Here's what a peak-night shift looks like once the systems are in place. Illustrative, not a transcript — your setup is built around your menu, policies, and booking flow.",
    scenarioSteps: [
      {
        time: "5:50 PM",
        event:
          "Walk-ins stack up at the door and the phone rings out. The caller gets an instant text: want tonight's wait time, or to book a table for tomorrow? She books tomorrow at 7.",
      },
      {
        time: "6:35 PM",
        event:
          "Website chat: 'Do you have gluten-free options?' Answered straight from your menu. A follow-up mentions a severe allergy — the conversation is flagged and handed to your staff, per your rules.",
      },
      {
        time: "7:15 PM",
        event:
          "A party-of-14 birthday inquiry comes through the events form. Package options go out automatically with a deposit link; the date lands on your events calendar as tentative.",
      },
      {
        time: "10:40 PM",
        event:
          "You close out. Tonight's reservation list is queued for a thank-you text tomorrow morning — with a review link for the guests who said yes to messages.",
      },
      {
        time: "SAT 9:00 AM",
        event:
          "Two new five-star reviews came in overnight. Draft owner replies are waiting for your one-tap approval with coffee.",
      },
      {
        time: "SAT 11:00 AM",
        event:
          "You snap one photo of the weekend special. Captions for your socials and an email to your list are drafted before the lunch rush starts.",
      },
    ],
    proof: {
      clients: ["Tabletop Village"],
      text: "We've worked this side of the counter. Tabletop Village — a board-game retail and events business — is a MyCo client, so we know what it means to run a floor, an events calendar, and a ringing phone at the same time.",
    },
    faqs: [
      {
        question: "Can the AI actually take reservations and orders?",
        answer:
          "It depends on your setup, and we'll be straight about it. If you use a booking system, the assistant can send guests directly into it or book against your calendar. If you don't, it captures the request — name, party size, time — and your staff confirms with one tap. Either way, the call stops going to voicemail.",
      },
      {
        question: "What about allergies and complaints? I don't want a bot winging that.",
        answer:
          "Neither do we. You decide what the assistant is allowed to answer, and everything else escalates to a human. Allergy questions, complaints, and anything sensitive get flagged and routed to your staff immediately — the AI's job there is to respond fast and hand off, not to improvise.",
      },
      {
        question: "I barely have time to run service. Who manages all this?",
        answer:
          "We do — every project comes with a dedicated project manager, and the receptionist is typically live in about a week. Day to day, your involvement is approving drafts from your phone and reading a short summary. It's built to give you hours back, not to become another system you babysit.",
      },
      {
        question: "We're a small independent spot, not a chain. Is this priced for us?",
        answer:
          "That's exactly who it's built for. The AI Receptionist & Chatbot starts at $750 setup plus $150/month, and Local SEO & AI Visibility starts at $500/month — fixed prices, scoped up front. The Free AI Opportunity Audit costs nothing and tells you which piece pays back fastest.",
      },
    ],
    ctaHeadline: "Full tables and busy tills",
    ctaHighlight: "don't happen by accident",
    ctaSub:
      "Book a Free AI Opportunity Audit: a 30-minute call about how guests find you, book you, and hear from you — then a written 5-point plan within 48 hours showing exactly where AI fills the gaps. No obligation.",
  },

  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    audienceLabel: "partners and practice leads",
    metaTitle: "AI & Growth Consulting for Professional Services",
    metaDescription:
      "AI for law firms, accountants, and financial advisors: intake that responds in minutes, engagement letters drafted automatically, and consults that book themselves. From MyConsulting Network — start with a Free AI Opportunity Audit.",
    keywords: [
      "AI for law firms",
      "AI for accounting firms",
      "legal intake automation",
      "client intake chatbot",
      "engagement letter automation",
      "AI for financial advisors",
      "professional services automation",
    ],
    heroBadge: "For law firms, accountants & financial advisors",
    heroHeadline: "Stop Spending Billable Hours",
    heroHighlight: "on Work You Can't Bill For.",
    heroSub:
      "MyCo builds AI systems for professional-services firms: intake that responds in minutes instead of days, engagement letters drafted before your second coffee, and consultations that book themselves. Fraction of agency prices, done in weeks.",
    painsHeading: "Where firms",
    painsHighlight: "lose clients and hours",
    painsIntro:
      "Your expertise wins the work. But between first inquiry and signed engagement sits a pile of admin that costs you clients at the front and billable hours everywhere else.",
    pains: [
      {
        icon: FiClock,
        title: "Prospects retain whoever responds first",
        description:
          "A potential client fills out your contact form Tuesday night. If the callback comes Thursday, they've often already sat down with another firm. Responsiveness is the first competence signal — before anyone reads a bio.",
      },
      {
        icon: FiFileText,
        title: "Document drudgery eats the week",
        description:
          "Engagement letters, intake forms, standard clauses, the same client details retyped into three systems. It's necessary work that bills at exactly zero dollars an hour — and it lands on your most expensive people.",
      },
      {
        icon: FiCalendar,
        title: "Calendar tag with every consultation",
        description:
          "Six emails to find one 30-minute slot, then a no-show because nobody sent a reminder. Multiply by every prospect and every client review meeting on the books.",
      },
      {
        icon: FiInbox,
        title: "Referrals go cold in the inbox",
        description:
          "The pipeline lives in email threads and memory. When 'let me think about it' never gets a follow-up, the referral you earned quietly retains someone else — and you never find out why.",
      },
    ],
    fixesHeading: "What we build for",
    fixesHighlight: "firms like yours",
    fixesIntro:
      "Four fixes, each tied to one of our fixed-price services — designed around confidentiality, your existing practice tools, and the way your clients expect to be treated.",
    fixes: [
      {
        icon: FiMessageCircle,
        service: "AI Receptionist & Chatbot",
        price: "From $750 setup + $150/mo",
        title: "Intake that answers at 9 PM",
        description:
          "Every inquiry gets an immediate, professional response — the assistant asks the qualifying questions you'd ask (matter type, timeline, urgency), answers process and fee-structure FAQs you approve, and books the consultation directly into your calendar. Sensitive conversations route to a person.",
      },
      {
        icon: FiZap,
        service: "Workflow Automation Sprint",
        price: "From $1,000 per sprint",
        title: "Engagement letters in minutes, not Mondays",
        description:
          "New-client details flow once into your systems instead of being retyped three times. Engagement letters and standard documents get drafted from your templates for review, and follow-up sequences run without anyone remembering to send them.",
      },
      {
        icon: FiGlobe,
        service: "AI Growth Website",
        price: "From $1,500",
        title: "A site that reads like the firm you actually are",
        description:
          "Clear practice-area pages, credentials presented properly, and a consultation-booking flow that works — with SEO foundations for the searches your next clients actually type. Delivered in about two weeks.",
      },
      {
        icon: FiTrendingUp,
        service: "AI Marketing Engine",
        price: "From $750 setup + $400/mo",
        title: "Stay top of mind between engagements",
        description:
          "A client newsletter and insights cadence produced with AI leverage and your review, plus a CRM so every referral and past client is followed up systematically — not when someone remembers.",
      },
    ],
    scenarioTitle: "A week of intake, handled",
    scenarioIntro:
      "Here's what the front door of the firm looks like once intake runs itself. Illustrative, not a transcript — your setup is built around your practice areas, templates, and conflict-check process.",
    scenarioSteps: [
      {
        time: "MON 8:12 PM",
        event:
          "A prospect submits your contact form after hours. Within a minute they get a professional reply, answer three qualifying questions, and book a Thursday consultation — while your competitors' forms sit unread.",
      },
      {
        time: "TUE 9:00 AM",
        event:
          "The new matter's engagement letter is drafted from your template with the intake details already filled in — waiting for partner review, not a paralegal's afternoon.",
      },
      {
        time: "WED 11:30 AM",
        event:
          "A caller reaches out mid-client-meeting. They get an immediate text back, their question about your process is answered, and a callback lands on your calendar.",
      },
      {
        time: "THU 2:00 PM",
        event:
          "The Thursday consultation actually happens — the prospect got a confirmation and a reminder automatically, so the slot didn't die as a no-show.",
      },
      {
        time: "FRI 4:00 PM",
        event:
          "You skim a pipeline summary: new inquiries this week, consultations booked, follow-ups sent, and which prospects went quiet — with the next touch already scheduled.",
      },
    ],
    proof: {
      clients: ["Goldstein & Company", "Gibraltar Business Group"],
      text: "Professional-services firms already trust us with their operations. Goldstein & Company (financial services) and Gibraltar Business Group (business consulting) are both MyCo clients — we understand that in your world, the firm's name is the product and discretion isn't optional.",
    },
    faqs: [
      {
        question: "How do you handle confidentiality and client data?",
        answer:
          "Deliberately and conservatively. Each tool gets access to only the data it needs, client files stay in your existing systems, and you own every account we set up. The intake assistant handles scheduling and the general questions you approve — anything touching matter specifics routes to your team. Before launch, we walk you through exactly what data flows where, so you can clear it against your professional obligations.",
      },
      {
        question: "Will clients find AI off-putting at a professional firm?",
        answer:
          "What prospects experience is a firm that responded immediately, asked sensible questions, and had a consultation booked within minutes — that reads as competence. The assistant is briefed to match your tone, never gives professional advice, and hands off to a human the moment a conversation warrants it.",
      },
      {
        question: "We bill by the hour. What's the actual return?",
        answer:
          "Two things: hours and clients. Every admin hour we automate is an hour that becomes billable work or a recovered evening. And because prospects overwhelmingly retain firms that respond first, faster intake means more of the inquiries you already get become engagements. The Free AI Opportunity Audit maps both for your specific firm.",
      },
      {
        question: "Can this work with our practice management and accounting software?",
        answer:
          "In most cases, yes. We build around the tools you already run — most practice management, accounting, and calendar systems connect through platforms like Zapier and Make. Where a tool won't integrate, we automate around its edges rather than asking you to replace it.",
      },
    ],
    ctaHeadline: "Your next client is deciding",
    ctaHighlight: "based on who answers first",
    ctaSub:
      "Book a Free AI Opportunity Audit: a 30-minute confidential call about how work enters and moves through your firm, then a written 5-point plan within 48 hours showing where AI recovers billable time. No obligation.",
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare & Wellness",
    audienceLabel: "practice owners and office managers",
    metaTitle: "AI & Growth Consulting for Healthcare & Wellness",
    metaDescription:
      "AI for dental practices, med spas, chiropractors, and clinics: fewer no-shows, less phone tag, and recall lists that run themselves — designed HIPAA-aware from day one. From MyConsulting Network — start with a Free AI Opportunity Audit.",
    keywords: [
      "AI for dental practices",
      "medical office automation",
      "reduce patient no-shows",
      "HIPAA aware automation",
      "AI receptionist for clinics",
      "patient recall automation",
      "med spa marketing automation",
    ],
    heroBadge: "For dental, med spa, chiropractic & clinic teams",
    heroHeadline: "Fewer No-Shows. Less Phone Tag.",
    heroHighlight: "A Calmer Front Desk.",
    heroSub:
      "MyCo builds AI systems for healthcare and wellness practices: appointment requests answered around the clock, reminders that actually get confirmed, and recall lists that run themselves — designed HIPAA-aware from day one. Fraction of agency prices, done in weeks.",
    painsHeading: "Where practices",
    painsHighlight: "lose chair time and patients",
    painsIntro:
      "Clinical care is the easy part — it's what you trained for. The leaks are at the front desk: the schedule, the phones, and the patients who quietly never come back.",
    pains: [
      {
        icon: FiCalendar,
        title: "No-shows punch holes in the schedule",
        description:
          "An empty chair at 10 AM is revenue you can never get back, and your team spends the morning scrambling to fill it same-day. Manual reminder calls only happen when someone has a spare minute — which is never.",
      },
      {
        icon: FiPhoneCall,
        title: "Patients on hold, staff underwater",
        description:
          "Your front desk is checking patients in, taking payments, and answering the phone at the same time. Booking calls hit voicemail at lunch and after 5 PM — and some of those patients simply don't call back.",
      },
      {
        icon: FiStar,
        title: "New patients choose from reviews you don't have",
        description:
          "People pick a practice the way they pick a restaurant now: maps and reviews. If your profile is thin or outdated, the practice down the street gets the new-patient call — regardless of who's better.",
      },
      {
        icon: FiRepeat,
        title: "Recall lists slip through the cracks",
        description:
          "Six-month cleanings, follow-ups, annual visits — the patients who should return are tracked on a list someone works through 'when things slow down.' Those patients drift away one missed nudge at a time.",
      },
    ],
    fixesHeading: "What we build for",
    fixesHighlight: "practices like yours",
    fixesIntro:
      "Four fixes, each tied to one of our fixed-price services — designed HIPAA-aware, with clinical questions always routed to your team.",
    fixes: [
      {
        icon: FiMessageCircle,
        service: "AI Receptionist & Chatbot",
        price: "From $750 setup + $150/mo",
        title: "The line that never puts patients on hold",
        description:
          "After-hours and overflow calls get an instant text back with a booking link. The assistant answers the questions you approve — hours, location, insurance basics, what to bring — and captures appointment requests. Anything clinical routes straight to your staff.",
      },
      {
        icon: FiBell,
        service: "Workflow Automation Sprint",
        price: "From $1,000 per sprint",
        title: "Reminders and recall on rails",
        description:
          "Confirm-or-reschedule sequences go out before every visit so the schedule holds. Recall outreach fires when patients come due, and intake forms arrive before the appointment — not on a clipboard in the waiting room.",
      },
      {
        icon: FiMapPin,
        service: "Local SEO & AI Visibility",
        price: "From $500/mo",
        title: "Be the practice patients find first",
        description:
          "A tuned Google Business Profile, review requests sent at the right moment under rules you approve, and visibility for the searches patients actually type — including when they ask AI assistants who to see nearby.",
      },
      {
        icon: FiGlobe,
        service: "AI Growth Website",
        price: "From $1,500",
        title: "A site that books, not just brochures",
        description:
          "Mobile-first, with clear service and insurance information and an appointment-request flow that doesn't require a phone call during business hours. Delivered in about two weeks.",
      },
    ],
    scenarioTitle: "A Monday at a calmer front desk",
    scenarioIntro:
      "Here's what the front of the practice looks like once the phones and reminders run themselves. Illustrative, not a transcript — your setup is designed around your practice systems and compliance requirements.",
    scenarioSteps: [
      {
        time: "7:30 AM",
        event:
          "The weekend's appointment requests are already answered and slotted as tentative bookings — waiting for your front desk to confirm, before the coffee is even poured.",
      },
      {
        time: "9:45 AM",
        event:
          "A 2 PM cancellation comes in. The automation offers the slot to patients who asked for an earlier appointment; the gap is filled within the hour.",
      },
      {
        time: "12:10 PM",
        event:
          "A caller hits the lunch-hour rush and misses your team. She gets an immediate text with a booking link — and books instead of leaving a voicemail she'd never follow up on.",
      },
      {
        time: "3:00 PM",
        event:
          "Tomorrow's patients get confirm-or-reschedule texts. Most confirm in minutes; one rebooks for Thursday — no phone tag, no surprise empty chair.",
      },
      {
        time: "5:15 PM",
        event:
          "Today's checked-out patients get a thank-you message, and — under the rules you set — a review request goes to those who opted in.",
      },
      {
        time: "6:45 PM",
        event:
          "An after-hours caller gets an instant text with your booking link and the urgent-care instructions you defined — instead of a voicemail box.",
      },
    ],
    faqs: [
      {
        question: "Is this HIPAA compliant?",
        answer:
          "We design everything HIPAA-aware from the start, and we're straight about what that means: scheduling, reminders, and general questions are handled without pulling clinical details into tools that shouldn't hold them, and patient records stay in your existing practice systems. Before anything launches, we map exactly what data flows where so you and your compliance requirements can sign off. If something can't be automated responsibly, we'll tell you.",
      },
      {
        question: "Our patients skew older. Will this alienate them?",
        answer:
          "Nothing is taken away — your phone still rings and your staff still answer it. The AI catches what currently falls through: after-hours calls, lunch-rush overflow, and weekend requests. And appointment-reminder texts are one of the most widely accepted messages any practice sends, at any age.",
      },
      {
        question: "Can it connect to our practice management system?",
        answer:
          "Where your system allows integrations, we connect directly. Where it doesn't, we automate around the edges — booking requests, reminders, recall outreach, and intake forms can run alongside almost any setup without touching clinical records. The Free AI Opportunity Audit is where we look at your specific stack and tell you honestly what's possible.",
      },
      {
        question: "What does this cost for a single-location practice?",
        answer:
          "The AI Receptionist & Chatbot starts at $750 setup plus $150/month, a Workflow Automation Sprint starts at $1,000, and Local SEO & AI Visibility starts at $500/month. Everything is fixed-price and scoped up front — and one recovered no-show slot per week typically makes the math easy to check for your own numbers.",
      },
    ],
    ctaHeadline: "Every empty chair",
    ctaHighlight: "started as a call or reminder that didn't happen",
    ctaSub:
      "Book a Free AI Opportunity Audit: a 30-minute call about how your schedule, phones, and recall actually work, then a written 5-point plan within 48 hours — HIPAA-aware from the first conversation. No obligation.",
  },

  "real-estate": {
    slug: "real-estate",
    name: "Real Estate & Property Management",
    audienceLabel: "agents and property managers",
    metaTitle: "AI & Growth Consulting for Real Estate & Property Management",
    metaDescription:
      "AI for agents, teams, and property managers: respond to every lead in seconds, draft listing content in your voice, and triage tenant requests without 11 PM texts. From MyConsulting Network — start with a Free AI Opportunity Audit.",
    keywords: [
      "AI for real estate agents",
      "real estate lead response automation",
      "AI listing descriptions",
      "property management automation",
      "tenant communication automation",
      "real estate follow up system",
      "AI assistant for realtors",
    ],
    heroBadge: "For agents, teams & property managers",
    heroHeadline: "The Fastest Response Wins the Client.",
    heroHighlight: "AI Makes You Fastest.",
    heroSub:
      "MyCo builds AI systems for real estate professionals: every lead answered in seconds — during showings, at dinner, at midnight — listing content drafted in your voice, and tenant requests triaged without the 11 PM texts. Fraction of agency prices, done in weeks.",
    painsHeading: "Where agents and property managers",
    painsHighlight: "lose deals and evenings",
    painsIntro:
      "In this business, speed and follow-up are the whole game — and both collapse the moment you're in a showing, at a closing, or finally off the clock.",
    pains: [
      {
        icon: FiClock,
        title: "Leads go cold in minutes — and you're in a showing",
        description:
          "A buyer who inquires about a listing and hears nothing for three hours has usually contacted other agents already. Your fastest competitor isn't better than you; they just answered first.",
      },
      {
        icon: FiEdit3,
        title: "Every listing is a content treadmill",
        description:
          "Description, social posts, flyer, email blast — hours of writing per listing, done late at night, for content that has to be right every single time.",
      },
      {
        icon: FiBell,
        title: "Tenants message at all hours",
        description:
          "The 11 PM 'my faucet is dripping' text, the same questions about rent, parking, and renewals — when you manage properties, you're the hotline, and the hotline never closes.",
      },
      {
        icon: FiRepeat,
        title: "Long cycles, no follow-up system",
        description:
          "Buyers and sellers decide over six to eighteen months. Without a nurture system, the lead you answered brilliantly last spring lists with whichever agent happened to stay in touch.",
      },
    ],
    fixesHeading: "What we build for",
    fixesHighlight: "agents and property managers",
    fixesIntro:
      "Four fixes, each tied to one of our fixed-price services — built around your listings, your voice, and the hours you'd like to get back.",
    fixes: [
      {
        icon: FiMessageCircle,
        service: "AI Receptionist & Chatbot",
        price: "From $750 setup + $150/mo",
        title: "Answer every inquiry in seconds",
        description:
          "A lead texts, calls, or hits your site — and gets an instant response that asks the right pre-qualifying questions (timeline, financing, areas) and offers showing slots from your calendar. You step out of a showing to a briefed lead, not a cold name.",
      },
      {
        icon: FiTrendingUp,
        service: "AI Marketing Engine",
        price: "From $750 setup + $400/mo",
        title: "Listing content and nurture on autopilot",
        description:
          "Descriptions and social drafts for each listing, written in your voice for your approval — plus a monthly touchpoint system that keeps six-month-old buyer and seller leads warm until they're ready.",
      },
      {
        icon: FiZap,
        service: "Workflow Automation Sprint",
        price: "From $1,000 per sprint",
        title: "Tenant ops without the 11 PM texts",
        description:
          "Maintenance requests come through one channel, get triaged by your rules — urgent issues straight to a human, routine ones logged and assigned — while rent reminders, renewal sequences, and showing follow-ups run themselves.",
      },
      {
        icon: FiLayers,
        service: "Custom Projects & Fractional Consulting",
        price: "Typical projects $1,500–$5,000",
        title: "A portfolio dashboard your owners will love",
        description:
          "For property managers: occupancy, rent roll, maintenance status, and owner-ready reporting in one screen — instead of a monthly scramble across spreadsheets. Scoped free before you commit.",
      },
    ],
    scenarioTitle: "A Saturday with your AI assistant",
    scenarioIntro:
      "Here's what a peak day looks like once the response and follow-up run themselves. Illustrative, not a transcript — your setup is built around your listings, systems, and the rules you set.",
    scenarioSteps: [
      {
        time: "9:05 AM",
        event:
          "You're setting up an open house when a portal lead inquires about another listing. Within seconds the assistant responds, asks about timeline and pre-approval, and offers Sunday showing slots.",
      },
      {
        time: "11:30 AM",
        event:
          "A tenant reports a dripping faucet through the chat. It's logged, marked non-urgent by your rules, the vendor workflow kicks off, and the tenant gets a confirmation — without your phone buzzing.",
      },
      {
        time: "1:45 PM",
        event:
          "You miss a call mid-showing. The text-back conversation reveals a homeowner curious what their place is worth — a valuation appointment lands on Monday's calendar.",
      },
      {
        time: "4:20 PM",
        event:
          "New listing photos come back. A description and social post drafts — in your voice, following the wording rules you approved — are ready for your sign-off.",
      },
      {
        time: "8:30 PM",
        event:
          "A buyer lead from last spring gets this month's market-update email. He replies: they're finally ready to look seriously.",
      },
    ],
    faqs: [
      {
        question: "How fast is 'instant', really?",
        answer:
          "Seconds. Missed-call text-back and website chat respond immediately, around the clock. The assistant handles the first exchange — qualifying questions, showing slots, basic listing details — and hands the conversation to you the moment it's worth your time. The point isn't replacing you; it's making sure no lead waits.",
      },
      {
        question: "Will AI-written listing copy sound like AI?",
        answer:
          "It's drafted in your voice, from your notes and photos, and nothing publishes without your approval. We also configure the wording rules you and your broker require — including the phrasing you want it to avoid — so drafts start from your standards, not a generic template.",
      },
      {
        question: "I'm a solo agent. Is this overkill?",
        answer:
          "It's actually most valuable solo — because the whole problem is that you can't answer leads while you're with clients. The AI Receptionist & Chatbot starts at $750 setup plus $150/month, and it makes one agent respond like a team with an inside sales assistant. You can add the rest if and when it earns its keep.",
      },
      {
        question: "Can it handle tenant emergencies responsibly?",
        answer:
          "Yes, because it never plays hero. You define the escalation rules: flooding, no heat, or anything urgent goes straight to a human on call, immediately. The AI triages, logs, and confirms — it doesn't diagnose problems or promise repairs. Routine requests stop interrupting your day; real emergencies reach you faster.",
      },
    ],
    ctaHeadline: "Your next listing is talking to",
    ctaHighlight: "whoever answers first",
    ctaSub:
      "Book a Free AI Opportunity Audit: a 30-minute call about how your leads, listings, and tenant requests actually flow, then a written 5-point plan within 48 hours showing where AI makes you fastest. No obligation.",
  },
};

/** Ordered list for nav, hubs, and sitemaps. */
export const industryList: Industry[] = [
  industries["home-services"],
  industries["trucking-logistics"],
  industries["restaurants"],
  industries["professional-services"],
  industries["healthcare"],
  industries["real-estate"],
];
