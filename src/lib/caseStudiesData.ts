import type { IconType } from "react-icons";
import {
  FiBookOpen,
  FiClipboard,
  FiFileText,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiTrendingUp,
  FiTruck,
} from "react-icons/fi";

/**
 * Canonical case studies — single source of truth for the /case-studies page.
 *
 * HONESTY RULES (do not break):
 * - Every client named here is a real past client already public on the site.
 * - Narratives only restate qualitative claims that already exist publicly
 *   (see PortfolioSection) or describe the engagement category generically.
 * - No invented metrics, quotes, or outcomes. Outcome chips appear only on
 *   engagements with an existing public qualitative claim.
 */

export interface IndustryGroup {
  /** URL-safe anchor id used by the on-page filter chips */
  slug: string;
  name: string;
  /** One-line framing for the group heading */
  blurb: string;
}

export interface CaseStudy {
  /** Stable identifier (also used as React key) */
  slug: string;
  client: string;
  /** Display label for the client's industry */
  industry: string;
  /** Must match an IndustryGroup slug */
  groupSlug: string;
  /** Category of work delivered */
  category: string;
  /** 2–3 sentence qualitative narrative — no invented metrics or quotes */
  narrative: string;
  /** Short tag chips describing the work */
  tags: string[];
  /** Anchor slug on /services (e.g. "ai-growth-website") */
  serviceSlug: string;
  /** Human-readable name of the related service, used as the link label */
  serviceName: string;
  /**
   * Optional qualitative outcome chip. Only set when the claim already
   * exists publicly — never invent one.
   */
  outcome?: string;
  icon: IconType;
}

export const industryGroups: IndustryGroup[] = [
  {
    slug: "home-field-services",
    name: "Home & Field Services",
    blurb: "Landscapers, contractors, and crews that win work by being found first.",
  },
  {
    slug: "trucking-logistics",
    name: "Trucking, Transportation & Logistics",
    blurb: "Carriers and transport operators growing beyond word of mouth.",
  },
  {
    slug: "retail-entertainment",
    name: "Local Retail & Entertainment",
    blurb: "Stores and venues turning foot traffic into repeat customers.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    blurb: "Financial and consulting firms making decisions backed by analysis.",
  },
  {
    slug: "tech-startups",
    name: "Tech Startups",
    blurb: "Early-stage teams that need delivery kept on the rails.",
  },
  {
    slug: "education",
    name: "Education & STEM",
    blurb: "Programs reaching the students and families they serve.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "blue-landscaping",
    client: "Blue Landscaping",
    industry: "Landscaping",
    groupSlug: "home-field-services",
    category: "Growth Website & Local SEO",
    narrative:
      "Blue Landscaping's website wasn't pulling its weight, so we rebuilt their online presence with strategic SEO and conversion-focused optimization. The engagement centered on local visibility and lead capture — turning the site from a digital brochure into a steady source of real customer growth.",
    tags: ["AI Growth Website", "Local SEO", "Lead Capture"],
    serviceSlug: "ai-growth-website",
    serviceName: "AI Growth Website",
    outcome: "Real customer growth",
    icon: FiGlobe,
  },
  {
    slug: "tabletop-village",
    client: "Tabletop Village",
    industry: "Gaming & Entertainment Retail",
    groupSlug: "retail-entertainment",
    category: "Marketing Strategy & Implementation",
    narrative:
      "Tabletop Village wanted customers beyond walk-in traffic, so we creatively devised a school-sponsorship marketing strategy for the store. Rather than hand over a slide deck, we implemented the proof of concept ourselves — opening a whole new channel of customers.",
    tags: ["Strategy", "Marketing", "Implementation"],
    serviceSlug: "ai-marketing-engine",
    serviceName: "AI Marketing Engine",
    outcome: "New revenue channel",
    icon: FiTrendingUp,
  },
  {
    slug: "voppl-ar",
    client: "VOPPL AR",
    industry: "AR Tech Startup",
    groupSlug: "tech-startups",
    category: "Hands-On Project Management",
    narrative:
      "VOPPL AR needed their product development kept moving without hiring a full-time manager. Our hands-on project management kept the startup's development on track and on budget — handling coordination, timelines, and vendor follow-through so the founders could focus on the product.",
    tags: ["Project Management", "Software Delivery", "Startup"],
    serviceSlug: "custom-projects",
    serviceName: "Custom Projects & Fractional Consulting",
    outcome: "On track, on budget",
    icon: FiClipboard,
  },
  {
    slug: "gibraltar-business-group",
    client: "Gibraltar Business Group",
    industry: "Business Consulting",
    groupSlug: "professional-services",
    category: "Feasibility Analysis & Competitor Research",
    narrative:
      "Before committing to a direction, Gibraltar Business Group wanted evidence. We delivered feasibility analysis and competitor research that gave the firm confidence in its strategy — structured findings in place of gut feel, so decisions could move forward on solid ground.",
    tags: ["Feasibility Analysis", "Competitor Research", "Strategy"],
    serviceSlug: "custom-projects",
    serviceName: "Custom Projects & Fractional Consulting",
    outcome: "Confident decisions",
    icon: FiSearch,
  },
  {
    slug: "goldstein-company",
    // TODO(team): confirm engagement details with delivery leads.
    client: "Goldstein & Company",
    industry: "Financial Services",
    groupSlug: "professional-services",
    category: "Business Planning & Advisory",
    narrative:
      "An engagement from our business plan development and advisory practice, supporting a financial services firm with structured planning work. This is the category where we turn a firm's direction into a documented, workable plan — scoped up front and delivered with a dedicated project manager.",
    tags: ["Business Plan Development", "Advisory", "Dedicated PM"],
    serviceSlug: "custom-projects",
    serviceName: "Custom Projects & Fractional Consulting",
    icon: FiFileText,
  },
  {
    slug: "presidential-transpo",
    // TODO(team): confirm engagement details with delivery leads.
    client: "Presidential Transpo",
    industry: "Transportation",
    groupSlug: "trucking-logistics",
    category: "Website & SEO Optimization",
    narrative:
      "A website and SEO engagement for a transportation company — the category of work where we overhaul a site around local visibility, search rankings, and clear calls to action. The goal in every engagement like this one: make sure customers searching for the service actually find the business.",
    tags: ["Website Optimization", "SEO", "Local Visibility"],
    serviceSlug: "local-seo-ai-visibility",
    serviceName: "Local SEO & AI Visibility",
    icon: FiMapPin,
  },
  {
    slug: "thind-transport",
    // TODO(team): confirm engagement details with delivery leads.
    client: "Thind Transport",
    industry: "Trucking",
    groupSlug: "trucking-logistics",
    category: "Business Plan Development",
    narrative:
      "A business plan development engagement for a trucking operation — the category of work where we turn an owner's growth plans into a structured, bankable document. Engagements like this cover the numbers, the market, and the operating plan, delivered by our consulting network with a dedicated project manager.",
    tags: ["Business Plan Development", "Trucking & Logistics", "Consulting"],
    serviceSlug: "custom-projects",
    serviceName: "Custom Projects & Fractional Consulting",
    icon: FiTruck,
  },
  {
    slug: "atlantis-stem",
    // TODO(team): confirm engagement details with delivery leads.
    client: "Atlantis STEM",
    industry: "Education",
    groupSlug: "education",
    category: "Website & SEO Optimization",
    narrative:
      "A website and SEO engagement from our digital-presence practice, supporting a STEM education organization. In this category of work, we focus on making a program easy to find and easy to understand online — clean structure, search visibility, and pages that answer the questions families actually ask.",
    tags: ["Website Optimization", "SEO", "Education"],
    serviceSlug: "ai-growth-website",
    serviceName: "AI Growth Website",
    icon: FiBookOpen,
  },
];

/** Convenience lookup: case studies grouped in canonical group order. */
export const caseStudiesByGroup = industryGroups
  .map((group) => ({
    group,
    studies: caseStudies.filter((study) => study.groupSlug === group.slug),
  }))
  .filter(({ studies }) => studies.length > 0);
