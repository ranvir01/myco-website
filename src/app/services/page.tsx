import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Card from "@/components/UI/Card";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { services, freeAuditOffer } from "@/lib/servicesData";
import {
  FiCheck,
  FiClock,
  FiSearch,
  FiFileText,
  FiUsers,
  FiHeadphones,
  FiDollarSign,
  FiUserCheck,
  FiArrowRight,
  FiTag,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "AI-Powered Services for Small Business | Fixed Prices, Weeks Not Months",
  description:
    "Six productized AI services for small businesses: growth websites from $1,500, 24/7 AI receptionist, workflow automation sprints, local SEO & AI visibility, marketing engines, and custom projects. Fixed prices, dedicated project managers, delivered in weeks. Start with a Free AI Opportunity Audit.",
  keywords: [
    "AI services for small business",
    "AI consulting small business",
    "small business website design",
    "AI receptionist",
    "AI chatbot for business",
    "missed call text back",
    "workflow automation",
    "small business automation",
    "local SEO services",
    "AI visibility",
    "AI marketing",
    "CRM setup",
    "custom dashboards",
    "fractional consulting",
    "fixed price consulting",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AI-Powered Services for Small Business | MyConsulting Network",
    description:
      "Websites that convert, AI receptionists that answer every call, automation that kills busywork. Fixed prices, dedicated project managers, delivered in weeks — not months. Start with a Free AI Opportunity Audit.",
    url: "https://myconsulting.network/services",
    siteName: "MyConsulting Network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Services for Small Business | MyConsulting Network",
    description:
      "Six fixed-price AI services delivered in weeks by a dedicated project manager. Start with a Free AI Opportunity Audit.",
  },
};

// Service + OfferCatalog structured data, generated from the canonical services list
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://myconsulting.network/services#services",
  name: "AI-Powered Services for Small Business",
  serviceType: "AI Consulting & Implementation",
  description:
    "Productized AI services for small businesses: conversion-focused websites, 24/7 AI receptionists and chatbots, workflow automation sprints, local SEO and AI search visibility, AI-leveraged marketing systems, and custom projects — all with fixed prices and a dedicated project manager.",
  provider: {
    "@type": "Organization",
    "@id": "https://myconsulting.network/#organization",
    name: "MyConsulting Network",
    url: "https://myconsulting.network",
    email: "info@myconsulting.network",
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productized AI Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.tagline,
        url: `https://myconsulting.network/services#${service.slug}`,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: service.priceFromUSD,
        ...(service.priceToUSD ? { maxPrice: service.priceToUSD } : {}),
      },
    })),
  },
};

const howItWorksSteps = [
  {
    icon: FiSearch,
    title: "Free AI Opportunity Audit",
    description:
      "A 30-minute call plus a written 5-point action plan showing where AI saves you time and money — delivered within 48 hours.",
  },
  {
    icon: FiFileText,
    title: "Fixed-price proposal",
    description:
      "You approve exactly what gets delivered and what it costs before anything starts. No hourly billing surprises.",
  },
  {
    icon: FiUsers,
    title: "Dedicated PM builds in weeks",
    description:
      "One project manager coordinates vetted consultants from our network and delivers in weeks — not months.",
  },
  {
    icon: FiHeadphones,
    title: "Ongoing support",
    description:
      "24/7 support with responses within 24 hours, plus improvements and new sprints as your business grows.",
  },
];

const whyMyCo = [
  {
    icon: FiDollarSign,
    title: "Network model = lower cost",
    description:
      "We match vetted independent consultants to your project instead of billing you for offices and overhead. That is how the same work costs a fraction of agency prices.",
  },
  {
    icon: FiUserCheck,
    title: "A dedicated project manager",
    description:
      "One point of contact from kickoff to handover. You explain your business once — your PM handles the consultants, the timeline, and the details.",
  },
  {
    icon: FiClock,
    title: "24/7 support, 24-hour response",
    description:
      "Every project comes with around-the-clock support and responses within 24 hours. When something needs attention, you are never left waiting.",
  },
];

const faqs = [
  {
    question: "How much do your services cost?",
    answer:
      "Every service has its from-price listed above — monthly programs start at $500/mo, and one-time builds start between $750 and $1,500. After your free audit, you get a fixed-price proposal, so the number you approve is the number you pay. No hourly billing, no surprise line items.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Weeks, not months. An AI Growth Website takes about two weeks, an AI Receptionist goes live in about a week, and automation sprints run one to two weeks. Your proposal includes a concrete timeline, and your dedicated project manager keeps you updated against it.",
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer:
      "Every project starts from a written, fixed-price scope, and your project manager checks in throughout — so problems get caught early, not at delivery. If something misses the mark, we keep working with you until the agreed scope is delivered. And because the audit and proposal are free, it costs you nothing to find out if we're a fit.",
  },
  {
    question: "I'm not technical. Will this be over my head?",
    answer:
      "No. We work in plain English, handle all the setup ourselves, and train you and your team on anything you'll touch day to day. Monthly services like SEO and marketing are run for you — your job is to approve direction, not operate software.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We don't disappear. Every project includes 24/7 support with responses within 24 hours. Monthly services include ongoing management and reporting, and for one-time builds you can come back for a new sprint or upgrade whenever your business needs it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-[70px] md:pt-[80px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-50 via-white to-white py-16 md:py-24">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-dark text-sm font-semibold mb-6">
                <FiTag className="w-4 h-4" />
                Fixed prices. Delivered in weeks, not months.
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-6">
                AI-Powered Services{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Built for Small Business
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-light mb-8 leading-relaxed">
                Websites that convert, automation that answers every call and
                follows up with every lead, and practical consulting that pays
                for itself — at a fraction of agency prices, with a dedicated
                project manager on every project.
              </p>
              <OpenQuoteButton>Get Your Free AI Opportunity Audit</OpenQuoteButton>
              <p className="text-sm text-secondary-light mt-4">
                {freeAuditOffer.description}
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 md:py-24" aria-labelledby="services-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="services-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Six services.{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Clear prices.
                </span>
              </h2>
              <p className="text-lg text-secondary-light">
                Every service starts with a free audit and a fixed-price
                proposal, and every project gets a dedicated project manager.
              </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollAnimationWrapper
                    key={service.slug}
                    delay={index * 0.05}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col !p-6 md:!p-8" hover>
                      <div id={service.slug} className="scroll-mt-24">
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary font-heading mb-2">
                          {service.name}
                        </h3>
                        <p className="text-secondary-light mb-4">
                          {service.tagline}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm font-semibold">
                            {service.priceLine}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-secondary-light text-sm">
                            <FiClock className="w-3.5 h-3.5" aria-hidden="true" />
                            {service.deliveryTime}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-light mb-5">
                          <span className="font-semibold text-secondary">
                            Best for:
                          </span>{" "}
                          {service.whoItsFor}
                        </p>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                          What you get
                        </p>
                        <ul className="space-y-2 mb-5">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-secondary-light"
                            >
                              <FiCheck
                                className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                          What changes
                        </p>
                        <ul className="space-y-2">
                          {service.outcomes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-secondary-light"
                            >
                              <FiArrowRight
                                className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          className="bg-primary-50/60 py-16 md:py-24"
          aria-labelledby="how-it-works-heading"
        >
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="how-it-works-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                How it works
              </h2>
              <p className="text-lg text-secondary-light">
                From first call to launch, one simple path — and you know the
                price before anything begins.
              </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollAnimationWrapper key={step.title} delay={index * 0.1}>
                    <div className="bg-white rounded-xl shadow-soft p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <Icon
                          className="w-6 h-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-secondary-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why MyCo */}
        <section className="py-16 md:py-24" aria-labelledby="why-myco-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="why-myco-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Why MyCo — the honest version
              </h2>
              <p className="text-lg text-secondary-light">
                We&apos;re a consulting network, not a big agency. No fancy
                offices, no bloated retainers — just vetted consultants, a
                project manager who owns your outcome, and support that
                doesn&apos;t clock out.
              </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {whyMyCo.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <ScrollAnimationWrapper key={reason.title} delay={index * 0.1}>
                    <div className="border border-gray-100 rounded-xl shadow-soft p-6 md:p-8 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                        <Icon
                          className="w-6 h-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-secondary-light text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>

            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <p className="text-secondary-light leading-relaxed">
                Trusted by 12+ growing businesses — including Blue Landscaping,
                Presidential Transpo, Tabletop Village, and Goldstein &amp;
                Company. We won&apos;t promise magic; we&apos;ll show you where
                AI genuinely helps your business and put it to work.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="bg-gray-50 py-16 md:py-24"
          aria-labelledby="faq-heading"
        >
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12">
              <h2
                id="faq-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Questions, answered straight
              </h2>
            </ScrollAnimationWrapper>

            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <ScrollAnimationWrapper key={faq.question} delay={index * 0.05}>
                  <div className="py-6">
                    <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-secondary-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
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
                Not sure where to start?{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Start free.
                </span>
              </h2>
              <p className="text-lg text-secondary-light mb-8 leading-relaxed">
                Book your {freeAuditOffer.name}: a 30-minute call and a written
                5-point action plan showing exactly where AI saves your
                business time and money — in your inbox within 48 hours. No
                obligation, no pressure.
              </p>
              <OpenQuoteButton>Book My Free Audit</OpenQuoteButton>
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
      <QuoteModal />
    </>
  );
}
