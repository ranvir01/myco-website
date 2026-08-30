import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Card from "@/components/UI/Card";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { buildFaqSchema } from "@/lib/structuredData";
import {
  FiPhoneMissed,
  FiClock,
  FiFileText,
  FiGlobe,
  FiMessageCircle,
  FiZap,
  FiMapPin,
  FiTrendingUp,
  FiLayers,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiSearch,
  FiShield,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "AI for Small Business | Practical AI Services & Consulting",
  description:
    "Practical AI for small businesses: 24/7 AI receptionists, workflow automation, conversion-focused websites, and local SEO. Start with a Free AI Opportunity Audit — a written 5-point action plan in 48 hours, no obligation.",
  keywords: [
    "AI for small business",
    "AI small business consulting",
    "AI receptionist",
    "small business automation",
    "AI chatbot for business",
    "missed call text back",
    "workflow automation",
    "local SEO AI",
    "AI marketing for small business",
    "AI consulting services",
  ],
  alternates: {
    canonical: "/ai-for-small-business",
  },
  openGraph: {
    title: "AI for Small Business | Practical AI Services & Consulting",
    description:
      "Put AI to work in your small business — without hiring anyone. AI receptionists, automation, websites, and local SEO from MyConsulting Network. Free AI Opportunity Audit, delivered in 48 hours.",
    url: "https://myconsulting.network/ai-for-small-business",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Small Business | Practical AI Services & Consulting",
    description:
      "Put AI to work in your small business — without hiring anyone. Start with a Free AI Opportunity Audit: a written 5-point action plan in 48 hours.",
  },
};

// FAQ content — rendered on the page and mirrored in FAQPage JSON-LD.
const faqs = [
  {
    question: "How much does AI for a small business actually cost?",
    answer:
      "Less than most owners expect. Our services are productized with clear starting prices: an AI Receptionist & Chatbot is $750 setup plus $150/month, a Workflow Automation Sprint starts at $1,000, an AI Growth Website starts at $1,500, and Local SEO & AI Visibility starts at $500/month. Every project is scoped up front at a fixed price — and the Free AI Opportunity Audit shows you where the fastest payback is before you spend anything.",
  },
  {
    question: "Isn't AI too complicated for a business like mine?",
    answer:
      "No — because you don't have to build it. We handle the tools, the setup, and the training, and a dedicated project manager runs every project end to end. You keep running your business; we hand over systems that already work, typically in weeks, not months. If you can use email, you can use what we build.",
  },
  {
    question: "Will an AI receptionist sound robotic to my customers?",
    answer:
      "Modern AI assistants are set up with your services, prices, hours, and tone of voice, so they answer like a well-briefed team member — and they hand off to a human whenever a conversation needs one. You review and approve exactly how it responds before it ever talks to a customer. What most customers actually notice is that they got an instant, accurate answer instead of voicemail.",
  },
  {
    question: "Is my business and customer data safe?",
    answer:
      "Yes. We build on established, reputable AI and automation platforms, give each tool access to only the data it needs, and never sell or share your information. You keep ownership of all your accounts and data. For sensitive industries like healthcare, we design HIPAA-aware automations from the start.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most projects deliver in about two weeks. An AI receptionist starts capturing missed calls the day it goes live, and a workflow automation sprint removes hours of admin within the first weeks. Local SEO compounds over months, but quick wins — like fixing your Google Business Profile — show up much sooner.",
  },
  {
    question: "Do I need new software or a new website?",
    answer:
      "Usually not. We build around the tools you already use — your phone system, calendar, invoicing, and CRM — connecting them with platforms like Zapier and Make. If your current website really is holding you back, the audit will tell you honestly, and rebuilding it is an option, never a requirement.",
  },
];

const faqSchema = buildFaqSchema(faqs);

const painPoints = [
  {
    icon: FiPhoneMissed,
    title: "Missed calls are missed jobs",
    description:
      "You're on a roof, in a truck, or with a client — and the phone rings. Every call that lands in voicemail is a customer calling the next business on the list. They don't leave a message. They just leave.",
  },
  {
    icon: FiClock,
    title: "Follow-up happens too late",
    description:
      "Leads go cold in hours, not days. By the time you reply at 9pm — after the quotes, the invoices, the scheduling — the customer who filled out your form this morning has already booked with someone who answered first.",
  },
  {
    icon: FiFileText,
    title: "Admin is eating your week",
    description:
      "Quotes, invoices, scheduling, review requests, chasing paperwork. None of it grows the business, all of it lands on you — nights, weekends, and every gap between jobs.",
  },
];

const services = [
  {
    icon: FiMessageCircle,
    name: "AI Receptionist & Chatbot",
    outcome: "Never miss another lead",
    description:
      "24/7 website chat, missed-call text-back, FAQ answers, and appointment booking — so every caller gets an instant response, even when you can't pick up.",
    price: "From $750 setup + $150/mo",
  },
  {
    icon: FiZap,
    name: "Workflow Automation Sprint",
    outcome: "Get your evenings back",
    description:
      "We automate quotes, invoicing, scheduling, lead follow-up, and admin busywork using AI plus tools like Zapier and Make — one focused sprint at a time.",
    price: "From $1,000 per sprint",
  },
  {
    icon: FiGlobe,
    name: "AI Growth Website",
    outcome: "Turn visitors into customers",
    description:
      "A conversion-focused website rebuilt with SEO foundations, analytics, and lead capture — built to win jobs, not just look nice.",
    price: "From $1,500 · ~2-week delivery",
  },
  {
    icon: FiMapPin,
    name: "Local SEO & AI Visibility",
    outcome: "Get found first — even in AI search",
    description:
      "Google Business Profile optimization, a reviews engine, local rankings, and visibility where customers now search: ChatGPT, Perplexity, and AI Overviews.",
    price: "From $500/mo",
  },
  {
    icon: FiTrendingUp,
    name: "AI Marketing Engine",
    outcome: "Stay in front of customers on autopilot",
    description:
      "Content and email systems, CRM setup, and a consistent social presence — run with AI leverage instead of hours of your time.",
    price: "From $750 setup + $400/mo",
  },
  {
    icon: FiLayers,
    name: "Custom Projects & Fractional Consulting",
    outcome: "Solve the problem specific to you",
    description:
      "Dashboards, custom software, feasibility studies, business plans, and cloud architecture — scoped free before you commit a dollar.",
    price: "Typical projects $1,500–$5,000",
  },
];

const industries = [
  { industry: "Landscaping & Field Services", client: "Blue Landscaping" },
  {
    industry: "Trucking & Logistics",
    client: "Presidential Transpo · Thind Transport",
  },
  { industry: "Retail & Entertainment", client: "Tabletop Village" },
  {
    industry: "Financial & Professional Services",
    client: "Goldstein & Company · Gibraltar Business Group",
  },
  { industry: "Education & STEM", client: "Atlantis STEM" },
  { industry: "Tech & AR Startups", client: "VOPPL AR" },
];

const auditIncludes = [
  "A 30-minute call about your business — how leads come in, where time disappears, what growth is stuck on",
  "A written 5-point action plan showing exactly where AI saves you time and money",
  "Clear priorities: what to fix first for the fastest payback",
  "Delivered within 48 hours of the call",
  "No obligation, no tech knowledge needed, nothing to install",
];

export default function AIForSmallBusinessPage() {
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
                AI-powered consulting for small businesses
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading leading-tight">
                Put AI to Work in Your Small Business —{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Without Hiring Anyone
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-secondary-light leading-relaxed">
                Answer every call, follow up with every lead, and hand the
                admin busywork to software — at a fraction of agency prices,
                with a dedicated project manager, done in weeks not months.
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
                Trusted by 12+ growing businesses · Response within 24 hours ·
                No obligation
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Pain / agitate */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                Running the business shouldn&apos;t mean{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  drowning in it
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                Most small businesses don&apos;t have a demand problem. They
                have a bandwidth problem — and it shows up in three places.
              </p>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {painPoints.map((pain, index) => (
                <ScrollAnimationWrapper key={pain.title} delay={index * 0.1}>
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
            <ScrollAnimationWrapper className="max-w-2xl mx-auto text-center mt-12">
              <p className="text-lg text-secondary-light leading-relaxed">
                Hiring more staff is expensive and slow. The good news: most of
                this work no longer needs a person at all.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* What AI can do this quarter */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                What AI can do for you{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  this quarter
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                Not a five-year transformation plan. Six practical services
                with fixed starting prices — each one live in weeks.
              </p>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ScrollAnimationWrapper
                  key={service.name}
                  delay={(index % 3) * 0.1}
                >
                  <Card className="h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                      {service.outcome}
                    </p>
                    <h3 className="text-xl font-bold text-secondary font-heading mb-3">
                      {service.name}
                    </h3>
                    <p className="text-secondary-light leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <p className="mt-4 font-semibold text-secondary">
                      {service.price}
                    </p>
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
          </div>
        </section>

        {/* Credibility */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                Real businesses.{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Real projects.
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                MyConsulting Network is trusted by 12+ growing businesses —
                from landscapers and trucking companies to financial firms and
                tech startups. Every project gets vetted consultants, a
                dedicated project manager, and 24/7 support.
              </p>
            </ScrollAnimationWrapper>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
              {industries.map((item, index) => (
                <ScrollAnimationWrapper
                  key={item.industry}
                  delay={(index % 3) * 0.1}
                >
                  <div className="h-full rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FiUsers className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-bold text-secondary font-heading">
                        {item.industry}
                      </h3>
                    </div>
                    <p className="text-sm text-secondary-light">
                      {item.client}
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom px-5 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <ScrollAnimationWrapper className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                  Why{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    now
                  </span>
                  , not next year
                </h2>
              </ScrollAnimationWrapper>
              <div className="space-y-6">
                <ScrollAnimationWrapper>
                  <div className="flex gap-4 bg-white rounded-xl shadow-sm p-6 md:p-7">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FiClock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-1.5">
                        Your customers already expect instant answers
                      </h3>
                      <p className="text-secondary-light leading-relaxed">
                        People text, chat, and book online at 9pm — and they
                        expect a response in minutes, not a callback tomorrow.
                        &quot;We&apos;ll get back to you&quot; is quietly
                        losing you work to whoever answers first.
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper delay={0.1}>
                  <div className="flex gap-4 bg-white rounded-xl shadow-sm p-6 md:p-7">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FiSearch className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-1.5">
                        Search is changing under your feet
                      </h3>
                      <p className="text-secondary-light leading-relaxed">
                        Customers increasingly ask ChatGPT, Perplexity, and
                        Google&apos;s AI Overviews for recommendations. If your
                        business isn&apos;t set up to show up there, you&apos;re
                        invisible to a growing share of buyers.
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper delay={0.2}>
                  <div className="flex gap-4 bg-white rounded-xl shadow-sm p-6 md:p-7">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FiTrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-1.5">
                        Your competitors aren&apos;t waiting
                      </h3>
                      <p className="text-secondary-light leading-relaxed">
                        The tools to answer every call and follow up with every
                        lead are affordable and available today. Early adopters
                        in your market are building a speed advantage that gets
                        harder to close every month.
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Free AI Opportunity Audit */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-emerald-700">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center text-white mb-10">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                Start with a Free AI Opportunity Audit
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
                Not sure where AI fits your business? That&apos;s exactly what
                the audit answers — in plain English, specific to how you
                operate.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.1} className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-7 md:p-10">
                <h3 className="text-xl font-bold text-secondary font-heading mb-5">
                  Here&apos;s what you get:
                </h3>
                <ul className="space-y-4">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-secondary-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <OpenQuoteButton className="w-full sm:w-auto">
                    Book My Free Audit
                  </OpenQuoteButton>
                  <p className="mt-4 text-sm text-secondary-light">
                    Keep the plan either way. If we&apos;re not the right fit
                    to build it, we&apos;ll tell you.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                Questions small business owners{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  actually ask
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
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FiShield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                The next call your business misses{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  doesn&apos;t have to be
                </span>
              </h2>
              <p className="mt-5 text-lg text-secondary-light leading-relaxed">
                One 30-minute call. A written 5-point plan within 48 hours. No
                obligation, no jargon — just a clear picture of where AI pays
                for itself in your business.
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
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
