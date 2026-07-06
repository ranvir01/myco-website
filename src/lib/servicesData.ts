import type { IconType } from "react-icons";
import {
  FiGlobe,
  FiMessageCircle,
  FiZap,
  FiMapPin,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

/**
 * Canonical productized services — single source of truth for the
 * /services hub and anywhere else the six offerings are listed.
 * Names and prices must stay in sync with the positioning brief.
 */
export interface ProductizedService {
  /** URL-safe identifier, used for card anchors and schema URLs */
  slug: string;
  name: string;
  /** One-line pitch shown under the service name */
  tagline: string;
  /** Human-readable price, e.g. "From $1,500" */
  priceLine: string;
  /** Numeric floor price in USD, used for structured data */
  priceFromUSD: number;
  /** Optional numeric ceiling in USD (ranged pricing), used for structured data */
  priceToUSD?: number;
  deliveryTime: string;
  whoItsFor: string;
  /** 4–6 concrete things the client receives */
  deliverables: string[];
  /** 3 outcomes the client should expect */
  outcomes: string[];
  /** Icon component from react-icons/fi */
  icon: IconType;
}

export const services: ProductizedService[] = [
  {
    slug: "ai-growth-website",
    name: "AI Growth Website",
    tagline:
      "A conversion-focused website rebuilt to turn visitors into customers.",
    priceLine: "From $1,500",
    priceFromUSD: 1500,
    deliveryTime: "~2-week delivery",
    whoItsFor:
      "Small businesses whose current site looks dated, loads slowly, or simply never brings in leads.",
    deliverables: [
      "Conversion-focused design and copy built around one goal: getting you enquiries",
      "SEO foundations — clean structure, fast load times, and pages Google can rank",
      "Analytics and conversion tracking set up so you can see what's working",
      "Lead capture forms, click-to-call, and quote-request flows on every key page",
      "Mobile-first build that works on the phones your customers actually use",
    ],
    outcomes: [
      "More enquiries from the traffic you already get",
      "A site you're proud to send customers to",
      "Clear data on where every lead comes from",
    ],
    icon: FiGlobe,
  },
  {
    slug: "ai-receptionist-chatbot",
    name: "AI Receptionist & Chatbot",
    tagline:
      "24/7 website chat and missed-call text-back, so no lead slips away.",
    priceLine: "From $750 setup + $150/mo",
    priceFromUSD: 750,
    deliveryTime: "Live in about a week",
    whoItsFor:
      "Service businesses that miss calls while on the job and lose work to whoever answers first.",
    deliverables: [
      "24/7 AI chat on your website, trained on your services, pricing, and policies",
      "Missed-call text-back that replies to callers within seconds",
      "Instant answers to the questions customers ask you every day",
      "Appointment and estimate booking straight into your calendar",
      "Human handoff rules, so real conversations reach you when it matters",
    ],
    outcomes: [
      "Every call and chat gets a response — nights and weekends included",
      "Fewer jobs lost to slow replies",
      "Less phone tag for you and your team",
    ],
    icon: FiMessageCircle,
  },
  {
    slug: "workflow-automation-sprint",
    name: "Workflow Automation Sprint",
    tagline:
      "Automate the busywork: quotes, invoicing, scheduling, and follow-up.",
    priceLine: "From $1,000 per sprint",
    priceFromUSD: 1000,
    deliveryTime: "1–2 week sprints",
    whoItsFor:
      "Owners drowning in admin — re-typing the same data, chasing invoices, and following up from memory.",
    deliverables: [
      "An audit of your most time-consuming manual workflows, mapped end to end",
      "Automated quoting, invoicing, and scheduling using AI plus tools like Zapier and Make",
      "Lead follow-up sequences that run without you touching them",
      "Your existing tools connected, so data stops living in five different places",
      "Documentation and training so your team can run everything without us",
    ],
    outcomes: [
      "Hours of admin off your plate every week",
      "Quotes and invoices that go out on time, every time",
      "Leads followed up automatically instead of falling through the cracks",
    ],
    icon: FiZap,
  },
  {
    slug: "local-seo-ai-visibility",
    name: "Local SEO & AI Visibility",
    tagline: "Get found on Google Maps — and recommended by AI search.",
    priceLine: "From $500/mo",
    priceFromUSD: 500,
    deliveryTime: "Ongoing monthly program",
    whoItsFor:
      "Local businesses that are invisible when nearby customers search — on Google or in ChatGPT.",
    deliverables: [
      "Google Business Profile optimization and ongoing management",
      "A reviews engine that makes it easy for happy customers to leave reviews",
      "Local landing pages and citations that lift your map and search rankings",
      "Visibility work for AI search: ChatGPT, Perplexity, and Google AI Overviews",
      "Plain-English monthly reporting on rankings, calls, and direction requests",
    ],
    outcomes: [
      "Show up when nearby customers search for what you do",
      "A steady stream of reviews building trust before the first call",
      "Found not just on Google, but in AI answers too",
    ],
    icon: FiMapPin,
  },
  {
    slug: "ai-marketing-engine",
    name: "AI Marketing Engine",
    tagline:
      "Content, email, and CRM running as a system — not on your spare time.",
    priceLine: "From $750 setup + $400/mo",
    priceFromUSD: 750,
    deliveryTime: "Up and running in 2–3 weeks",
    whoItsFor:
      "Businesses that know they should be marketing consistently but never have the hours to do it.",
    deliverables: [
      "CRM setup so every contact, lead, and customer lives in one place",
      "Email campaigns and newsletters produced with AI leverage, reviewed by humans",
      "A social presence kept active with on-brand content",
      "A content calendar built around what your customers actually ask",
      "A monthly review of what's landing and what to double down on",
    ],
    outcomes: [
      "Marketing that happens every week, whether you're busy or not",
      "Past customers hearing from you before they need you again",
      "One organized pipeline instead of scattered spreadsheets",
    ],
    icon: FiTrendingUp,
  },
  {
    slug: "custom-projects",
    name: "Custom Projects & Fractional Consulting",
    tagline:
      "Dashboards, custom software, and business plans — scoped free, priced fixed.",
    priceLine: "Typical projects $1,500–$5,000",
    priceFromUSD: 1500,
    priceToUSD: 5000,
    deliveryTime: "Scoped free — most projects run a few weeks",
    whoItsFor:
      "Businesses with a specific problem that doesn't fit a template: a dashboard, a feasibility question, a system that needs building.",
    deliverables: [
      "Custom dashboards and reporting built on your real business data",
      "Custom software and integrations shaped to your workflow",
      "Feasibility studies and business plans for expansion, funding, or new locations",
      "Cloud architecture design and setup",
      "Fractional consulting — senior guidance without a full-time hire",
    ],
    outcomes: [
      "A fixed-price scope agreed before any money changes hands",
      "A dedicated project manager from kickoff to handover",
      "Decisions backed by analysis instead of gut feel",
    ],
    icon: FiLayers,
  },
];

/**
 * Canonical lead magnet — use as the primary CTA copy wherever the
 * Free AI Opportunity Audit is offered.
 */
export const freeAuditOffer = {
  name: "Free AI Opportunity Audit",
  description:
    "A 30-minute call plus a written 5-point action plan showing exactly where AI saves your business time and money — delivered within 48 hours. No obligation.",
} as const;
