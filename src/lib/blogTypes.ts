/**
 * Blog content model.
 *
 * Articles are structured data (no markdown parser dependency): each body is
 * an ordered list of typed blocks. Paragraph-like text supports two inline
 * forms rendered by ArticleBody: [link text](/href) and **bold**.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "stat"; value: string; label: string; sourceName?: string; sourceUrl?: string };

export interface BlogArticle {
  /** URL segment under /blog/ */
  slug: string;
  /** H1 and <title> */
  title: string;
  /** Meta description (~150 chars) */
  description: string;
  /** ISO date, e.g. "2026-08-30" */
  publishDate: string;
  /** Primary keyword this article targets */
  targetKeyword: string;
  /** Short label shown as the card tag, e.g. "Home Services" or "Pricing" */
  tag: string;
  /** Slugs from src/lib/servicesData.ts used for the "related service" CTA links */
  relatedServiceSlugs: string[];
  /** Optional /for/* industry page to cross-link */
  relatedIndustryHref?: string;
  readingMinutes: number;
  body: BlogBlock[];
}
