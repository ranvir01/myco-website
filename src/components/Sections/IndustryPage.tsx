import Link from "next/link";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Card from "@/components/UI/Card";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { FiArrowRight, FiCheckCircle, FiUsers } from "react-icons/fi";
import type { Industry } from "@/lib/industriesData";
import { buildFaqSchema } from "@/lib/structuredData";

interface IndustryPageProps {
  industry: Industry;
}

/**
 * Shared server-renderable body for the /for/<slug> industry landing pages.
 * Pages provide the Header/Footer/QuoteModal shell; this renders everything
 * inside <main>. Interactive bits (animations, CTA button) are existing
 * client components.
 */
export default function IndustryPage({ industry }: IndustryPageProps) {
  const faqSchema = buildFaqSchema(industry.faqs);

  return (
    <main className="min-h-screen pt-[70px] md:pt-[80px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-16 md:py-24">
        <div className="container-custom px-5 sm:px-6">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              {industry.heroBadge}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading leading-tight">
              {industry.heroHeadline}{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {industry.heroHighlight}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-secondary-light leading-relaxed">
              {industry.heroSub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenQuoteButton>Get Your Free AI Opportunity Audit</OpenQuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold px-7 py-3.5 text-base sm:text-lg min-h-[48px] border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                See Our AI Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-secondary-light">
              Trusted by 12+ growing businesses · Response within 24 hours · No
              obligation
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Pains */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-5 sm:px-6">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
              {industry.painsHeading}{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {industry.painsHighlight}
              </span>
            </h2>
            <p className="mt-5 text-lg text-secondary-light leading-relaxed">
              {industry.painsIntro}
            </p>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {industry.pains.map((pain, index) => (
              <ScrollAnimationWrapper key={pain.title} delay={(index % 2) * 0.1}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <pain.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary font-heading mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-secondary-light leading-relaxed">
                    {pain.description}
                  </p>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Fixes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom px-5 sm:px-6">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
              {industry.fixesHeading}{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {industry.fixesHighlight}
              </span>
            </h2>
            <p className="mt-5 text-lg text-secondary-light leading-relaxed">
              {industry.fixesIntro}
            </p>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {industry.fixes.map((fix, index) => (
              <ScrollAnimationWrapper key={fix.title} delay={(index % 2) * 0.1}>
                <Card className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <fix.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    {fix.service}
                  </p>
                  <h3 className="text-xl font-bold text-secondary font-heading mb-3">
                    {fix.title}
                  </h3>
                  <p className="text-secondary-light leading-relaxed flex-grow">
                    {fix.description}
                  </p>
                  <p className="mt-4 font-semibold text-secondary">{fix.price}</p>
                  <Link
                    href="/services"
                    className="mt-3 inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    Explore this service
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
          <ScrollAnimationWrapper className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-secondary-light leading-relaxed">
              Not sure which fix comes first? Start with the big picture:{" "}
              <Link
                href="/ai-for-small-business"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                how AI works for small businesses
              </Link>{" "}
              — or browse{" "}
              <Link
                href="/services"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                all six services
              </Link>
              .
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Example scenario */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-5 sm:px-6">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              Example scenario
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
              {industry.scenarioTitle}
            </h2>
            <p className="mt-5 text-lg text-secondary-light leading-relaxed">
              {industry.scenarioIntro}
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="max-w-3xl mx-auto">
            <ol className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-8">
              {industry.scenarioSteps.map((step) => (
                <li key={`${step.time}-${step.event}`} className="relative pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"
                  />
                  <p className="text-sm font-bold text-primary tracking-wide">
                    {step.time}
                  </p>
                  <p className="mt-1 text-secondary-light leading-relaxed">
                    {step.event}
                  </p>
                </li>
              ))}
            </ol>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-sm text-secondary-light italic">
              This is an illustrative example, not a client case study. Every
              setup is scoped to how your business actually runs — that&apos;s
              what the free audit is for.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Proof — only rendered when the brief names a real client in this vertical */}
      {industry.proof && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-emerald-700">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center text-white">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-6">
                <FiUsers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                We&apos;ve worked in your industry
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
                {industry.proof.text}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {industry.proof.clients.map((client) => (
                  <span
                    key={client}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-semibold"
                  >
                    <FiCheckCircle className="w-4 h-4" />
                    {client}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/80">
                Trusted by 12+ growing businesses · Vetted consultants · A
                dedicated project manager on every project
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom px-5 sm:px-6">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
              Questions we hear from{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {industry.audienceLabel}
              </span>
            </h2>
          </ScrollAnimationWrapper>
          <div className="max-w-3xl mx-auto space-y-6">
            {industry.faqs.map((faq, index) => (
              <ScrollAnimationWrapper key={faq.question} delay={index * 0.05}>
                <div className="rounded-xl border border-gray-100 bg-white p-6 md:p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-secondary font-heading mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
          <ScrollAnimationWrapper className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-secondary-light">
              Have a question we didn&apos;t cover? Email{" "}
              <a
                href="mailto:info@myconsulting.network"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                info@myconsulting.network
              </a>{" "}
              — we respond within 24 hours.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-5 sm:px-6">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
              {industry.ctaHeadline}{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {industry.ctaHighlight}
              </span>
            </h2>
            <p className="mt-5 text-lg text-secondary-light leading-relaxed">
              {industry.ctaSub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenQuoteButton>Get Your Free AI Opportunity Audit</OpenQuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold px-7 py-3.5 text-base sm:text-lg min-h-[48px] border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                Browse All Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-secondary-light">
              Prefer to read first? See{" "}
              <Link
                href="/ai-for-small-business"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                what AI can do for small businesses
              </Link>
              .
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </main>
  );
}
