import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import InlineAuditForm from "@/components/ContactForm/InlineAuditForm";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Card from "@/components/UI/Card";
import {
  FiPhoneCall,
  FiFileText,
  FiTrendingUp,
  FiTool,
  FiTruck,
  FiShoppingBag,
  FiBriefcase,
  FiHeart,
  FiHome,
  FiCheckCircle,
  FiArrowDown,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Free AI Opportunity Audit | 5-Point AI Action Plan in 48 Hours",
  description:
    "Book a free 30-minute AI Opportunity Audit. Get a written 5-point action plan showing exactly where AI saves your small business time and money — delivered within 48 hours. No obligation.",
  keywords: [
    "free AI audit",
    "AI opportunity audit",
    "AI audit for small business",
    "AI consultation small business",
    "AI action plan",
    "small business automation audit",
    "AI readiness assessment",
  ],
  alternates: {
    canonical: "/free-ai-audit",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Free AI Opportunity Audit | 5-Point AI Action Plan in 48 Hours",
    description:
      "One 30-minute call. A written 5-point plan showing exactly where AI saves your business time and money — delivered within 48 hours. Free, no obligation.",
    url: "https://myconsulting.network/free-ai-audit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Opportunity Audit | 5-Point AI Action Plan in 48 Hours",
    description:
      "One 30-minute call. A written 5-point plan showing where AI saves your business time and money — in 48 hours. Free, no obligation.",
  },
};

const whatYouGet = [
  {
    icon: FiPhoneCall,
    title: "A 30-minute call about your business",
    description:
      "Not a sales pitch. We ask how leads come in, where your time disappears, and what growth is stuck on — in plain English, no jargon.",
  },
  {
    icon: FiFileText,
    title: "A written 5-point action plan",
    description:
      "Exactly where AI saves your business time and money — specific to how you operate, not a generic checklist. Delivered within 48 hours of the call.",
  },
  {
    icon: FiTrendingUp,
    title: "Clear priorities, fastest payback first",
    description:
      "What to fix first and why, so every step pays for itself. The plan is yours to keep — implement it yourself or with anyone you choose.",
  },
];

const steps = [
  {
    step: "1",
    title: "Book your audit",
    description:
      "Fill out the short form below — it takes about a minute. We respond within 24 hours to schedule your call at a time that works for you.",
  },
  {
    step: "2",
    title: "Talk for 30 minutes",
    description:
      "We walk through how your business actually runs: calls, leads, quotes, invoicing, marketing. You don't need to prepare anything.",
  },
  {
    step: "3",
    title: "Get your 5-point plan",
    description:
      "Within 48 hours you receive a written action plan showing where AI saves you time and money — with clear priorities and no obligation.",
  },
];

const audienceIndustries = [
  {
    icon: FiTool,
    name: "Home & Field Services",
    pain: "Missed calls, slow quotes, and no-shows costing you jobs.",
  },
  {
    icon: FiTruck,
    name: "Trucking & Logistics",
    pain: "Dispatch chaos, paperwork, compliance, and invoicing lag.",
  },
  {
    icon: FiShoppingBag,
    name: "Restaurants, Retail & Entertainment",
    pain: "Reviews, reservations and orders, and hours lost to social content.",
  },
  {
    icon: FiBriefcase,
    name: "Professional Services",
    pain: "Client intake, document drudgery, and billable time lost to admin.",
  },
  {
    icon: FiHeart,
    name: "Healthcare & Wellness",
    pain: "No-shows, phone tag, reviews, and HIPAA-aware automation.",
  },
  {
    icon: FiHome,
    name: "Real Estate & Property Management",
    pain: "Lead response speed, listing content, and tenant communications.",
  },
];

const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes — completely. The 30-minute call and the written 5-point plan cost nothing, and there's no obligation to hire us afterward. It's how we start relationships: you see exactly how we think before spending a dollar. The plan is yours to keep either way — and if we're not the right fit to build it, we'll tell you.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. The call is about your business, not technology — how leads come in, where time disappears, what growth is stuck on. We translate everything into plain English, and there's nothing to install or prepare. If you can describe your typical week, you're qualified.",
  },
  {
    question: "What happens after I get my plan?",
    answer:
      "That's up to you. You can implement the plan yourself, hand it to someone else, or ask us to build it — our productized services start at $500/mo and most projects deliver in about two weeks with a dedicated project manager. There's no pressure and no spam: we respond within 24 hours whenever you're ready.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const clientNames = [
  "Blue Landscaping",
  "Presidential Transpo",
  "Thind Transport",
  "Tabletop Village",
  "Goldstein & Company",
  "Gibraltar Business Group",
  "Atlantis STEM",
  "VOPPL AR",
];

const anchorButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold px-7 py-3.5 text-base sm:text-lg min-h-[48px] bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-200";

export default function FreeAIAuditPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[70px] md:pt-[80px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-16 md:py-24">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Free · No obligation · Nothing to install
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading leading-tight">
                Get Your Free{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  AI Opportunity Audit
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-secondary-light leading-relaxed">
                One 30-minute call, then a written 5-point action plan showing
                exactly where AI saves your business time and money — delivered
                within 48 hours. No obligation, no jargon.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <a href="#audit-form" className={anchorButtonClasses}>
                  Book My Free Audit
                  <FiArrowDown className="w-5 h-5" />
                </a>
                <p className="text-sm text-secondary-light">
                  Trusted by 12+ growing businesses · Response within 24 hours
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                What you{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  actually get
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                Not a sales call with extra steps. Three concrete things, all
                free.
              </p>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {whatYouGet.map((item, index) => (
                <ScrollAnimationWrapper key={item.title} delay={index * 0.1}>
                  <Card className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary font-heading mb-3">
                      {item.title}
                    </h3>
                    <p className="text-secondary-light leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                How it{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  works
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                From form to finished plan in three steps — most audits wrap up
                within a few days of booking.
              </p>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {steps.map((item, index) => (
                <ScrollAnimationWrapper key={item.step} delay={index * 0.1}>
                  <div className="h-full bg-white rounded-xl shadow-sm p-7">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-emerald-600 text-white font-bold font-heading text-lg flex items-center justify-center mb-5 shadow-md">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-secondary font-heading mb-3">
                      {item.title}
                    </h3>
                    <p className="text-secondary-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                Built for businesses{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  like yours
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                The audit is most useful if any of this sounds familiar:
              </p>
            </ScrollAnimationWrapper>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
              {audienceIndustries.map((item, index) => (
                <ScrollAnimationWrapper
                  key={item.name}
                  delay={(index % 3) * 0.1}
                >
                  <div className="h-full rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-bold text-secondary font-heading">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-secondary-light leading-relaxed">
                      {item.pain}
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
            <ScrollAnimationWrapper className="max-w-2xl mx-auto text-center mt-10">
              <p className="text-secondary-light">
                Different industry? The audit still works — pick
                &quot;Other&quot; on the form and we&apos;ll take it from
                there.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Credibility strip */}
        <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-4xl mx-auto text-center">
              <p className="text-secondary-light leading-relaxed">
                MyConsulting Network has been helping small businesses since
                2023 — trusted by 12+ growing businesses, with vetted
                consultants and a dedicated project manager on every project,
                24/7 support, and a response within 24 hours.
              </p>
              <p className="mt-5 text-sm text-secondary-light/80">
                {clientNames.join(" · ")}
              </p>
              <p className="mt-5 text-sm text-secondary-light flex items-center justify-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                No fake reviews, no inflated numbers — just real projects for
                real businesses.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Audit form */}
        <section
          id="audit-form"
          className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-emerald-700 scroll-mt-[70px] md:scroll-mt-[80px]"
        >
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center text-white mb-10">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                Book Your Free AI Opportunity Audit
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
                Six quick fields. A 30-minute call. A written 5-point plan
                within 48 hours — yours to keep, no strings attached.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.1} className="max-w-2xl mx-auto">
              <InlineAuditForm />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                Quick{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  answers
                </span>
              </h2>
            </ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <ScrollAnimationWrapper key={faq.question} delay={index * 0.05}>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 md:p-7">
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
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                Thirty minutes now.{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Hours back every week.
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                The audit is free, the plan is yours, and the worst case is a
                clearer picture of your own business. Book it while it&apos;s
                on your mind.
              </p>
              <div className="mt-8">
                <a href="#audit-form" className={anchorButtonClasses}>
                  Get My Free AI Audit
                </a>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
      <QuoteModal />
    </>
  );
}
