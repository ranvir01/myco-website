import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Card from "@/components/UI/Card";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { caseStudies, caseStudiesByGroup } from "@/lib/caseStudiesData";
import { freeAuditOffer } from "@/lib/servicesData";
import { FiArrowRight, FiBriefcase, FiCheck } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Case Studies | Real Work for Real Small Businesses",
  description:
    "Real client work from MyConsulting Network: growth websites and local SEO for Blue Landscaping, marketing strategy for Tabletop Village, project management for VOPPL AR, feasibility analysis for Gibraltar Business Group, and more — across landscaping, trucking, retail, professional services, and education.",
  keywords: [
    "consulting case studies",
    "small business case studies",
    "AI consulting results",
    "small business website case study",
    "local SEO case study",
    "business plan development",
    "feasibility analysis",
    "project management consulting",
    "MyConsulting Network clients",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | MyConsulting Network",
    description:
      "Real work for real small businesses — websites, SEO, marketing strategy, business plans, and project management across landscaping, trucking, retail, professional services, and education.",
    url: "https://myconsulting.network/case-studies",
    siteName: "MyConsulting Network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | MyConsulting Network",
    description:
      "Real work for real small businesses — from growth websites and local SEO to business plans and hands-on project management.",
  },
};

// CollectionPage + ItemList structured data, generated from the canonical case study list
const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://myconsulting.network/case-studies",
  name: "Case Studies — Real Work for Real Small Businesses",
  description:
    "Real client engagements delivered by MyConsulting Network across landscaping, trucking and transportation, local retail and entertainment, professional services, tech startups, and education.",
  url: "https://myconsulting.network/case-studies",
  isPartOf: {
    "@id": "https://myconsulting.network/#website",
  },
  about: {
    "@id": "https://myconsulting.network/#organization",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${study.client} — ${study.category}`,
      description: study.narrative,
    })),
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-[70px] md:pt-[80px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(caseStudiesSchema),
          }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-50 via-white to-white py-16 md:py-24">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-dark text-sm font-semibold mb-6">
                <FiBriefcase className="w-4 h-4" />
                Trusted by 12+ growing businesses
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-6">
                Real work for{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  real small businesses
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-light mb-8 leading-relaxed">
                No stock-photo success stories. These are actual clients — a
                landscaper, a game store, trucking companies, a financial firm,
                a STEM program — and the work we did for them. Qualitative and
                honest: we&apos;d rather show you what an engagement looks like
                than invent a number.
              </p>
              <OpenQuoteButton>Get Your Free AI Opportunity Audit</OpenQuoteButton>
              <p className="text-sm text-secondary-light mt-4">
                {freeAuditOffer.description}
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Case studies, grouped by industry */}
        <section className="py-16 md:py-24" aria-labelledby="case-studies-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
              <h2
                id="case-studies-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Browse by{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  industry
                </span>
              </h2>
              <p className="text-lg text-secondary-light">
                Jump to the businesses that look like yours — or scroll the lot.
              </p>
            </ScrollAnimationWrapper>

            {/* Static filter chips — anchor links to each industry group */}
            <ScrollAnimationWrapper delay={0.1}>
              <nav
                aria-label="Filter case studies by industry"
                className="flex flex-wrap justify-center gap-2.5 mb-12 md:mb-16"
              >
                {caseStudiesByGroup.map(({ group }) => (
                  <a
                    key={group.slug}
                    href={`#${group.slug}`}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-white text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {group.name}
                  </a>
                ))}
              </nav>
            </ScrollAnimationWrapper>

            <div className="space-y-14 md:space-y-20">
              {caseStudiesByGroup.map(({ group, studies }) => (
                <div key={group.slug} id={group.slug} className="scroll-mt-28">
                  <ScrollAnimationWrapper className="mb-6 md:mb-8">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary font-heading">
                        {group.name}
                      </h3>
                      <span className="text-sm font-semibold text-primary">
                        {studies.length}{" "}
                        {studies.length === 1 ? "engagement" : "engagements"}
                      </span>
                    </div>
                    <p className="text-secondary-light mt-1">{group.blurb}</p>
                  </ScrollAnimationWrapper>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {studies.map((study, index) => {
                      const Icon = study.icon;
                      return (
                        <ScrollAnimationWrapper
                          key={study.slug}
                          delay={index * 0.1}
                          className="h-full"
                        >
                          <Card className="h-full flex flex-col !p-6 md:!p-8" hover>
                            <article className="flex flex-col h-full">
                              <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                                  <Icon
                                    className="w-6 h-6 text-primary"
                                    aria-hidden="true"
                                  />
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-secondary-light text-xs sm:text-sm font-medium">
                                  {study.industry}
                                </span>
                              </div>
                              <h4 className="text-xl md:text-2xl font-bold text-secondary font-heading mb-1">
                                {study.client}
                              </h4>
                              <p className="text-sm font-semibold text-primary mb-3">
                                {study.category}
                              </p>
                              {study.outcome && (
                                <p className="inline-flex items-center gap-1.5 self-start px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3">
                                  <FiCheck
                                    className="w-3.5 h-3.5"
                                    aria-hidden="true"
                                  />
                                  {study.outcome}
                                </p>
                              )}
                              <p className="text-secondary-light text-sm sm:text-base leading-relaxed mb-4">
                                {study.narrative}
                              </p>
                              <div
                                className="flex flex-wrap gap-1.5 md:gap-2 mb-5"
                                role="list"
                                aria-label="Engagement tags"
                              >
                                {study.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    role="listitem"
                                    className="px-2.5 py-1 bg-gray-100 text-secondary-light rounded-full text-xs sm:text-sm font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <p className="mt-auto pt-2 border-t border-gray-100">
                                <Link
                                  href={`/services#${study.serviceSlug}`}
                                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-200"
                                >
                                  Related service: {study.serviceName}
                                  <FiArrowRight
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </p>
                            </article>
                          </Card>
                        </ScrollAnimationWrapper>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest-approach strip */}
        <section className="bg-primary-50/60 py-16 md:py-24" aria-labelledby="approach-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <h2
                id="approach-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Why no big shiny numbers?
              </h2>
              <p className="text-lg text-secondary-light leading-relaxed">
                Because we won&apos;t make them up. Every engagement above ran
                the same way yours would: a free scoping call, a fixed-price
                proposal, vetted consultants from our network, and a dedicated
                project manager from kickoff to handover — with 24/7 support
                and responses within 24 hours. The results we claim are the
                ones our clients would say out loud.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="bg-gradient-to-b from-white to-primary-50 py-16 md:py-24"
          aria-labelledby="cta-heading"
        >
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <h2
                id="cta-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-6"
              >
                Your business could be{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  the next one here
                </span>
              </h2>
              <p className="text-lg text-secondary-light mb-8 leading-relaxed">
                Start with the {freeAuditOffer.name}: a 30-minute call plus a
                written 5-point action plan showing exactly where AI saves your
                business time and money — delivered within 48 hours, no
                obligation.
              </p>
              <OpenQuoteButton>Book My Free AI Opportunity Audit</OpenQuoteButton>
              <p className="text-sm text-secondary-light mt-4">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:info@myconsulting.network"
                  className="text-primary font-semibold hover:underline"
                >
                  info@myconsulting.network
                </a>{" "}
                — we respond within 24 hours.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
