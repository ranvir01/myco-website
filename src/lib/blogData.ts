import type { BlogArticle } from "@/lib/blogTypes";
import { aiReceptionistCost } from "@/lib/blog/ai-receptionist-cost-small-business";
import { missedCallTextBack } from "@/lib/blog/missed-call-text-back-guide";
import { localSeoCost } from "@/lib/blog/local-seo-cost-small-business";
import { aiIntakeLawFirms } from "@/lib/blog/ai-intake-law-firms";
import { restaurantMissedCalls } from "@/lib/blog/reduce-restaurant-missed-calls";
import { automationExamples } from "@/lib/blog/small-business-automation-examples";

export type { BlogArticle, BlogBlock } from "@/lib/blogTypes";

/** All published articles, newest first. */
export const articles: BlogArticle[] = [
  aiReceptionistCost,
  missedCallTextBack,
  localSeoCost,
  aiIntakeLawFirms,
  restaurantMissedCalls,
  automationExamples,
].sort((a, b) => b.publishDate.localeCompare(a.publishDate));

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
