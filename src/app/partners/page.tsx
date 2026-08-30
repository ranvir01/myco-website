import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Card from "@/components/UI/Card";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { buildFaqSchema } from "@/lib/structuredData";
import {
  FiSend,
  FiCheckCircle,
  FiDollarSign,
  FiFileText,
  FiMonitor,
  FiUsers,
  FiBriefcase,
  FiShare2,
  FiLock,
  FiClock,
  FiEye,
  FiCheck,
  FiArrowRight,
  FiGift,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Referral Partner Program | Get Paid for Introductions",
  description:
    "Refer a business to MyConsulting Network and earn 10% of their project revenue for three years, then 3% ongoing. One typical referred client is worth about $1,080 over five years. Free to join, no quotas, payouts within 30 days.",
  keywords: [
    "referral partner program",
    "business referral program",
    "consulting referral commission",
    "referral partner",
    "earn referral income",
    "small business referrals",
    "partner program",
    "referral commission",
    "myconsulting network partners",
  ],
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Referral Partner Program | MyConsulting Network",
    description:
      "Know a business that needs help? Introduce them to MyCo and earn 10% of their project revenue for three years, then 3% ongoing — paid within 30 days of every client payment. Free to join, no quotas.",
    url: "https://myconsulting.network/partners",
    siteName: "MyConsulting Network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Partner Program | MyConsulting Network",
    description:
      "Earn 10% of project revenue for three years (then 3% ongoing) on every business you refer. Free to join, transparent tracking, payouts within 30 days.",
  },
};

const faqs = [
  {
    question: "Does it cost anything to join, and is there a minimum commitment?",
    answer:
      "No and no. The partner program is completely free to join, and there are no quotas or minimums. Refer one business a year or ten — you earn on every referral that becomes a paying client.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "You're paid within 30 days of MyCo receiving payment from the client. The typical flow: project completed, client invoiced, client pays, and your commission follows within 30 days of that payment. Payment options include ACH direct deposit (fastest) and check.",
  },
  {
    question: "What if a project is cancelled?",
    answer:
      "You only earn on completed, paid projects. If a project is cancelled before the client pays, no commission is due — but there's no penalty to you either, and your future referrals are unaffected.",
  },
  {
    question: "How long does my referral relationship last?",
    answer:
      "Your commission on a client referral lasts as long as that client remains active with MyCo — there's no expiration. You earn 10% of project revenue in years 1-3 and 3% from year 4 onward. If a client goes inactive (no projects for 12+ months), earnings pause; if they return, your earnings resume.",
  },
  {
    question: "Can I refer both a client and a consultant?",
    answer:
      "Yes. Client referrals and consultant referrals are tracked separately, and you can earn both. Client referrals pay 10% of project revenue for years 1-3, then 3% ongoing. Consultant referrals pay 1.5% of the consultant's allocated project cost. If you refer a client and a consultant who works on that client's projects, you earn both commissions.",
  },
];

// FAQ structured data for the partner program
const partnersFaqSchema = buildFaqSchema(faqs);

const howItWorksSteps = [
  {
    icon: FiSend,
    title: "Introduce us",
    description:
      "Send a simple email introduction or share your contact's details with us. We reach out within 24 hours — no scripts, no pressure on your contact.",
  },
  {
    icon: FiCheckCircle,
    title: "We deliver",
    description:
      "Your referral gets a free consultation, a fixed-price proposal, a dedicated project manager, and vetted consultants. Your reputation stays safe — we treat your introductions like our own clients, because they are.",
  },
  {
    icon: FiDollarSign,
    title: "You get 10% of project revenue for 3 years",
    description:
      "You earn 10% of everything they spend with us in years 1-3, then 3% ongoing from year 4. Paid within 30 days of every client payment.",
  },
];

// Single-client earnings example: ~$1,500 typical project, 2 projects/year
const earningsRows = [
  { year: "Year 1", projects: "2", revenue: "$3,000", rate: "10%", earnings: "$300", cumulative: "$300" },
  { year: "Year 2", projects: "2", revenue: "$3,000", rate: "10%", earnings: "$300", cumulative: "$600" },
  { year: "Year 3", projects: "2", revenue: "$3,000", rate: "10%", earnings: "$300", cumulative: "$900" },
  { year: "Year 4", projects: "2", revenue: "$3,000", rate: "3%", earnings: "$90", cumulative: "$990" },
  { year: "Year 5", projects: "2", revenue: "$3,000", rate: "3%", earnings: "$90", cumulative: "$1,080" },
];

const multiReferralExamples = [
  { referrals: "1 client referred", earnings: "$1,080", label: "over 5 years" },
  { referrals: "3 clients referred", earnings: "$3,240", label: "over 5 years" },
  { referrals: "5 clients referred", earnings: "$5,400", label: "over 5 years" },
];

const greatPartners = [
  {
    icon: FiFileText,
    title: "Accountants & bookkeepers",
    description:
      "You already see where your clients lose money to missed calls, slow invoicing, and admin busywork. Point them our way and get paid when we fix it.",
  },
  {
    icon: FiMonitor,
    title: "Agencies & freelancers",
    description:
      "When a client needs automation, a website rebuild, or consulting outside your lane, refer it instead of turning it away — and keep earning on the relationship.",
  },
  {
    icon: FiUsers,
    title: "Chambers & networking groups",
    description:
      "Your members ask for trusted vendors all the time. Give them a vetted option with fixed prices and a dedicated project manager on every project.",
  },
  {
    icon: FiBriefcase,
    title: "Consultants & advisors",
    description:
      "Refer clients for work you don't deliver yourself — or refer talented consultants into our network and earn 1.5% of their allocated project cost.",
  },
  {
    icon: FiShare2,
    title: "Well-connected operators",
    description:
      "If business owners already come to you for recommendations, you're sitting on referral income. One introduction email is all it takes.",
  },
];

const referredClientBenefits = [
  "AI-powered websites, receptionists, automation, local SEO, and marketing — fixed prices, most starting between $500 and $1,500",
  "A dedicated project manager on every project, start to finish",
  "Vetted consultants from our network, delivered in weeks not months",
  "24/7 support with responses within 24 hours",
  "A free consultation and a fixed-price proposal before anything starts",
];

const honestTerms = [
  {
    icon: FiLock,
    title: "Rates locked",
    description:
      "The rates in your partner agreement — 10% for years 1-3, 3% from year 4, 1.5% of allocated cost for consultant referrals — are locked for the duration of each referral relationship. Program changes only apply to new referrals.",
  },
  {
    icon: FiClock,
    title: "30-day payouts",
    description:
      "You're paid within 30 days of MyCo receiving the client's payment. You earn on completed, paid projects only — no phantom commissions, no clawback surprises.",
  },
  {
    icon: FiEye,
    title: "Transparent tracking",
    description:
      "Every referral is registered and tracked from first contact to payout, with updates as its status changes. You always know what's pending, what's active, and what's been paid.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-[70px] md:pt-[80px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(partnersFaqSchema),
          }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-50 via-white to-white py-16 md:py-24">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-dark text-sm font-semibold mb-6">
                <FiGift className="w-4 h-4" />
                Referral Partner Program — free to join, no quotas
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-6">
                Know a business that needs help?{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Get paid for the introduction.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-light mb-8 leading-relaxed">
                Refer a business to MyCo and earn 10% of their project revenue
                for three full years — then 3% ongoing for as long as they stay.
                One typical referred client is worth about $1,080 over five
                years. All you do is make the introduction.
              </p>
              <OpenQuoteButton service="Referral Partnership">Become a Partner</OpenQuoteButton>
              <p className="text-sm text-secondary-light mt-4">
                Prefer email? Write to{" "}
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

        {/* How it works */}
        <section className="py-16 md:py-24" aria-labelledby="how-it-works-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="how-it-works-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                How it works
              </h2>
              <p className="text-lg text-secondary-light">
                Three steps. Your part takes about five minutes — we handle
                everything after the introduction.
              </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollAnimationWrapper key={step.title} delay={index * 0.1}>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-soft p-6 md:p-8 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
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

        {/* Earnings example */}
        <section
          className="bg-primary-50/60 py-16 md:py-24"
          aria-labelledby="earnings-heading"
        >
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="earnings-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                What one introduction{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  is actually worth
                </span>
              </h2>
              <p className="text-lg text-secondary-light">
                Here&apos;s the real math for a single referred client doing two
                typical projects (~$1,500 each) per year.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="max-w-3xl mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th scope="col" className="px-4 md:px-6 py-3 font-semibold">
                          Year
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 font-semibold">
                          Projects
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 font-semibold">
                          Client revenue
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 font-semibold">
                          Your rate
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 font-semibold">
                          You earn
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 font-semibold">
                          Cumulative
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {earningsRows.map((row) => (
                        <tr key={row.year} className="text-secondary-light">
                          <td className="px-4 md:px-6 py-3 font-semibold text-secondary">
                            {row.year}
                          </td>
                          <td className="px-4 md:px-6 py-3">{row.projects}</td>
                          <td className="px-4 md:px-6 py-3">{row.revenue}</td>
                          <td className="px-4 md:px-6 py-3">{row.rate}</td>
                          <td className="px-4 md:px-6 py-3 font-semibold text-primary">
                            {row.earnings}
                          </td>
                          <td className="px-4 md:px-6 py-3">{row.cumulative}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary-50 font-bold text-secondary">
                        <td className="px-4 md:px-6 py-3">5-year total</td>
                        <td className="px-4 md:px-6 py-3">10</td>
                        <td className="px-4 md:px-6 py-3">$15,000</td>
                        <td className="px-4 md:px-6 py-3">—</td>
                        <td className="px-4 md:px-6 py-3 text-primary">$1,080</td>
                        <td className="px-4 md:px-6 py-3">$1,080</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              {multiReferralExamples.map((example, index) => (
                <ScrollAnimationWrapper key={example.referrals} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-soft p-6 text-center h-full">
                    <p className="text-3xl font-bold text-primary font-heading mb-1">
                      {example.earnings}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      {example.referrals}
                    </p>
                    <p className="text-xs text-secondary-light">{example.label}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>

            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-secondary-light leading-relaxed">
                Examples assume a typical ~$1,500 project, two projects per
                year, and a client who stays five years. Rates: 10% of project
                revenue in years 1-3, 3% from year 4 onward. Actual earnings
                depend on project sizes and how long each client stays active —
                you earn on completed, paid projects only.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Who makes a great partner */}
        <section className="py-16 md:py-24" aria-labelledby="great-partner-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="great-partner-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Who makes a great partner
              </h2>
              <p className="text-lg text-secondary-light">
                If small business owners already trust your recommendations,
                you&apos;re a fit. Our best partners look like this:
              </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {greatPartners.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <ScrollAnimationWrapper
                    key={partner.title}
                    delay={index * 0.05}
                    className="h-full"
                  >
                    <Card className="h-full !p-6 md:!p-8" hover>
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                        {partner.title}
                      </h3>
                      <p className="text-sm text-secondary-light leading-relaxed">
                        {partner.description}
                      </p>
                    </Card>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* What we deliver for referred clients */}
        <section
          className="bg-gray-50 py-16 md:py-24"
          aria-labelledby="what-we-deliver-heading"
        >
          <div className="container-custom px-5 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <ScrollAnimationWrapper className="text-center mb-12">
                <h2
                  id="what-we-deliver-heading"
                  className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
                >
                  Your name is on the introduction.{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Here&apos;s what we do with it.
                  </span>
                </h2>
                <p className="text-lg text-secondary-light">
                  We&apos;re an AI-powered consulting network for small
                  businesses, trusted by 12+ growing businesses. Every client
                  you refer gets:
                </p>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper>
                <div className="bg-white rounded-xl shadow-soft p-6 md:p-8 mb-8">
                  <ul className="space-y-4">
                    {referredClientBenefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-secondary-light"
                      >
                        <FiCheck
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper className="text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  See everything we deliver for clients
                  <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* Honest terms */}
        <section className="py-16 md:py-24" aria-labelledby="terms-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="terms-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                The terms — the honest version
              </h2>
              <p className="text-lg text-secondary-light">
                No fine-print games. Here&apos;s how the program actually
                treats you.
              </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
              {honestTerms.map((term, index) => {
                const Icon = term.icon;
                return (
                  <ScrollAnimationWrapper key={term.title} delay={index * 0.1}>
                    <div className="border border-gray-100 rounded-xl shadow-soft p-6 md:p-8 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                        {term.title}
                      </h3>
                      <p className="text-secondary-light text-sm leading-relaxed">
                        {term.description}
                      </p>
                    </div>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>

            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-secondary-light leading-relaxed">
                Referring consultants instead of clients? That pays 1.5% of the
                consultant&apos;s allocated project cost for every project they
                work on. The full program terms and partner agreement are
                provided during onboarding — before you make your first
                referral.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="faq-heading">
          <div className="container-custom px-5 sm:px-6">
            <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-12">
              <h2
                id="faq-heading"
                className="text-3xl md:text-5xl font-bold text-secondary font-heading mb-4"
              >
                Partner questions, answered straight
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
                Your network is worth something.{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Start earning on it.
                </span>
              </h2>
              <p className="text-lg text-secondary-light mb-8 leading-relaxed">
                Tell us a little about yourself and who you&apos;d refer.
                We&apos;ll walk you through the program, share the full terms,
                and get you set up — usually within a day.
              </p>
              <OpenQuoteButton service="Referral Partnership">Become a Partner</OpenQuoteButton>
              <p className="text-sm text-secondary-light mt-4">
                Or email{" "}
                <a
                  href="mailto:info@myconsulting.network"
                  className="text-primary font-semibold hover:underline"
                >
                  info@myconsulting.network
                </a>{" "}
                with &quot;Referral partner&quot; in the subject line — we
                respond within 24 hours.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
