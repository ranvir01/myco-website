/**
 * Structured data used by the home page.
 *
 * The FAQPage schema lives here (rendered ONLY on the home page) because
 * Google allows a single FAQPage entity per URL — the interior landing pages
 * (/services, /ai-for-small-business, /free-ai-audit, /partners, /for/*)
 * each emit their own FAQPage matching their visible FAQ content.
 */
export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MyConsulting Network?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MyConsulting Network (MyCo) is an AI-powered consulting network for small businesses. We help small businesses grow with AI: websites that convert, automation that answers every call and follows up with every lead, and practical consulting that pays for itself. Every project gets vetted consultants, a dedicated project manager, and 24/7 support - at a fraction of agency prices.",
      },
    },
    {
      "@type": "Question",
      name: "What AI services does MyCo offer for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MyCo offers six productized services: AI Growth Website (conversion-focused website with SEO foundations, analytics, and lead capture, from $1,500 with about 2-week delivery), AI Receptionist & Chatbot (24/7 website chat, missed-call text-back, FAQ answers, and appointment booking, from $750 setup plus $150/month), Workflow Automation Sprint (automate quotes, invoicing, scheduling, and lead follow-up, from $1,000 per sprint), Local SEO & AI Visibility (Google Business Profile, reviews, and visibility in AI search, from $500/month), AI Marketing Engine (content, email, CRM, and social systems run with AI leverage, from $750 setup plus $400/month), and Custom Projects & Fractional Consulting (dashboards, custom software, feasibility studies, and business plans, typically $1,500-$5,000, scoped free).",
      },
    },
    {
      "@type": "Question",
      name: "What is the Free AI Opportunity Audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Free AI Opportunity Audit is a 30-minute call plus a written 5-point action plan showing exactly where AI can save your business time and money. You receive the plan within 48 hours, and there is no obligation to work with us afterward.",
      },
    },
    {
      "@type": "Question",
      name: "How does MyCo's consulting process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow a comprehensive project lifecycle: Requirements Gathering → Feasibility Analysis → Project Selection → Sourcing Talent → Project Planning → Execution → Monitoring & Control. Throughout the process, you'll have a dedicated project manager ensuring everything stays on track.",
      },
    },
    {
      "@type": "Question",
      name: "What makes MyCo different from traditional consulting firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MyCo operates on a network model with significantly lower costs than traditional firms. We provide full project lifecycle support, dedicated project managers, and low-cost consulting by leveraging our network of independent consultants. We also offer 24/7 support for all projects.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does MyCo Network serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus on home and field services, trucking and logistics, restaurants and local retail, professional services, healthcare and wellness, and real estate and property management. Our clients include Tabletop Village, Blue Landscaping, VOPPL AR, Goldstein & Company, Gibraltar Business Group, Presidential Transpo, Thind Transport, and Atlantis STEM.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can MyCo match me with talent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our sourcing process typically takes 3-7 business days depending on your requirements. We maintain a pre-vetted network of consultants across various industries and can expedite for urgent projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with MyConsulting Network?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is easy! Simply click the 'Let's Talk' button on our website to submit your project details. Our team will review your needs and connect you with the right consultants within 24 hours.",
      },
    },
  ],
};

/** Shape shared by every on-page FAQ list. */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Builds a schema.org FAQPage object from an on-page FAQ list.
 * Emit at most ONE FAQPage per URL, and only for questions that are
 * visibly rendered on that page.
 */
export function buildFaqSchema(faqs: FaqItem[]) {
  return {
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
}
