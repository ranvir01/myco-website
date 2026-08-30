import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { articles } from "@/lib/blogData";
import { FiArrowRight, FiClock } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Blog | Practical AI & Growth Guides for Small Business",
  description:
    "Plain-English guides on AI receptionists, missed-call recovery, local SEO pricing, and automation that pays for itself — written for small business owners, with real numbers and sources.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The MyCo Blog | Practical AI for Small Business",
    description:
      "Honest pricing breakdowns and how-to guides on putting AI to work in a small business.",
    url: "https://myconsulting.network/blog",
    siteName: "MyConsulting Network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The MyCo Blog | Practical AI for Small Business",
    description:
      "Honest pricing breakdowns and how-to guides on putting AI to work in a small business.",
  },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[70px] md:pt-[80px]">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50">
          <div className="container-custom relative z-10 px-5 sm:px-6 text-center">
            <ScrollAnimationWrapper>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                The MyCo Blog
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-6">
                Practical AI,{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Plain English
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-light max-w-2xl mx-auto">
                Honest pricing breakdowns, real numbers with sources, and
                step-by-step guides for putting AI to work in a small business —
                no hype, no jargon.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Article grid */}
        <section className="py-14 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
          <div className="container-custom relative z-10 px-5 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article, index) => (
                <ScrollAnimationWrapper key={article.slug} delay={index * 0.08}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl p-6 md:p-7 shadow-soft border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {article.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-secondary-light/70">
                        <FiClock className="w-3.5 h-3.5" />
                        {article.readingMinutes} min read
                      </span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-secondary font-heading mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm md:text-base text-secondary-light leading-relaxed mb-5 flex-1">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-secondary-light/60">
                        {formatDate(article.publishDate)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read article
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* CTA */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="mt-14 md:mt-20 bg-white rounded-2xl p-8 md:p-10 shadow-soft border border-gray-100 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary font-heading mb-3">
                  Rather have answers about{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    your business
                  </span>
                  ?
                </h2>
                <p className="text-secondary-light mb-6 max-w-xl mx-auto">
                  The Free AI Opportunity Audit is a 30-minute call plus a written
                  5-point action plan within 48 hours — no obligation.
                </p>
                <OpenQuoteButton>Get My Free AI Audit</OpenQuoteButton>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
