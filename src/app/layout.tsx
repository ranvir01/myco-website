import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

// Primary font - Outfit for headings (modern, geometric, distinctive)
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

// Secondary font - DM Sans for body (clean, professional, readable)
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1B7F4E' },
    { media: '(prefers-color-scheme: dark)', color: '#0F5A35' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://myconsulting.network"),
  title: {
    default: "MyConsulting Network | AI-Powered Consulting for Small Businesses",
    template: "%s | MyConsulting Network",
  },
  description: "MyConsulting Network (MyCo) helps small businesses grow with AI: conversion-focused websites, a 24/7 AI receptionist and chatbot, workflow automation, local SEO and AI search visibility, and marketing systems that pay for themselves. Vetted consultants, a dedicated project manager on every project, and delivery in weeks - at a fraction of agency prices. Trusted by 12+ growing businesses including Tabletop Village, Blue Landscaping, and Presidential Transpo.",
  keywords: [
    // Brand terms (critical for brand search)
    "myconsulting network",
    "myco network",
    "myco consulting",
    "my consulting network",
    // AI-for-SMB terms
    "ai consulting for small business",
    "ai automation agency",
    "ai receptionist",
    "ai chatbot for small business",
    "missed call text back",
    "workflow automation",
    "business process automation",
    "local seo ai",
    "ai search visibility",
    "ai marketing for small business",
    "ai website design",
    "small business ai consultant",
    "free ai audit",
    // Service terms
    "consulting network",
    "independent consultants",
    "business consulting",
    "professional services",
    "project management",
    "feasibility analysis",
    "business plan development",
    "SEO consulting",
    "cloud architecture",
    "software engineering",
    "strategy consulting",
    "low cost consulting",
    "dedicated project manager",
    "on-demand consulting",
    "consultant network",
    "business solutions",
    "consulting services",
  ],
  authors: [{ name: "MyConsulting Network", url: "https://myconsulting.network" }],
  creator: "MyConsulting Network",
  publisher: "MyConsulting Network",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  category: "Business Services",
  classification: "Business Consulting",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "MyConsulting Network | AI-Powered Consulting for Small Businesses",
    description: "Websites that convert, an AI receptionist that answers every call, and automation that follows up with every lead. Dedicated project managers, fraction of agency prices, done in weeks. Start with a Free AI Opportunity Audit.",
    url: "https://myconsulting.network",
    siteName: "MyConsulting Network",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/MyCo_Network_Logo_PNG.png",
        width: 800,
        height: 200,
        alt: "MyConsulting Network - AI-Powered Consulting for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyConsulting Network | AI-Powered Consulting for Small Businesses",
    description: "AI websites, receptionists, automation, local SEO, and marketing for small businesses. Dedicated project managers, 24/7 support, fraction of agency prices.",
    creator: "@myconetwork",
    site: "@myconetwork",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ofCxuhGLRegks0czab1iEJ2n47TmEL3qgDtsq_bIS0o",
    // Add Bing verification when you have it
    // other: {
    //   "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    // },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logos/MyCo_Network_Logo_PNG.png' },
    ],
  },
  other: {
    // Additional SEO meta tags
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "MyCo Network",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#1B7F4E",
  },
};

// Structured data for the organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["#hero-heading", "#about-heading"]
  },
  "@id": "https://myconsulting.network/#organization",
  name: "MyConsulting Network",
  alternateName: ["MyCo Network", "MyConsulting", "MyCo"],
  description: "AI-powered consulting for small businesses. MyCo helps small businesses grow with AI: conversion-focused websites, 24/7 AI receptionists and chatbots, workflow automation, local SEO and AI search visibility, and marketing systems. Vetted consultants, a dedicated project manager on every project, and 24/7 support - at a fraction of agency prices.",
  url: "https://myconsulting.network",
  logo: {
    "@type": "ImageObject",
    url: "https://myconsulting.network/logos/MyCo_Network_Logo_PNG.png",
    width: 400,
    height: 100,
  },
  image: "https://myconsulting.network/og-image.png",
  priceRange: "$$",
  email: "info@myconsulting.network",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  serviceType: [
    "AI Consulting for Small Business",
    "AI Growth Website Design",
    "AI Receptionist & Chatbot",
    "Workflow Automation",
    "Local SEO & AI Visibility",
    "AI Marketing Systems",
    "Custom Software & Fractional Consulting",
    "Business Consulting",
    "Project Management",
  ],
  knowsAbout: [
    "Artificial Intelligence for Small Business",
    "AI Automation",
    "AI Receptionists and Chatbots",
    "Missed-Call Text-Back",
    "Workflow Automation",
    "Conversion-Focused Web Design",
    "Search Engine Optimization",
    "Local SEO",
    "AI Search Visibility (ChatGPT, Perplexity, Google AI Overviews)",
    "CRM Setup and Email Marketing",
    "Business Strategy",
    "Project Management",
    "Feasibility Analysis",
    "Business Plan Development",
    "Cloud Computing",
    "Software Engineering",
  ],
  slogan: "Leverage Our Network",
  foundingDate: "2023",
  sameAs: [
    "https://www.linkedin.com/company/myconsultingnetwork",
    "https://twitter.com/myconetwork",
    "https://facebook.com/myconsultingnetwork"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI-Powered Consulting Services for Small Businesses",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Growth Website",
          description: "Conversion-focused website rebuilt with SEO foundations, analytics, and lead capture. Delivered in about 2 weeks.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 1500,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Receptionist & Chatbot",
          description: "24/7 website chat, missed-call text-back, FAQ answers, and appointment booking. From $750 setup plus $150/month.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 750,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Automation Sprint",
          description: "Automate quotes, invoicing, scheduling, lead follow-up, and admin busywork with AI plus tools like Zapier and Make. From $1,000 per sprint.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 1000,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO & AI Visibility",
          description: "Google Business Profile optimization, reviews engine, local rankings, and visibility in AI search (ChatGPT, Perplexity, AI Overviews). From $500/month.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: 500,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Marketing Engine",
          description: "Content and email systems, CRM setup, and social presence run with AI leverage. From $750 setup plus $400/month.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 750,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Projects & Fractional Consulting",
          description: "Dashboards, custom software, feasibility studies, business plans, and cloud architecture. Typical projects $1,500-$5,000, scoped free.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 1500,
          maxPrice: 5000,
          priceCurrency: "USD",
        },
      },
    ],
  },
};

// FAQ Schema
const faqSchema = {
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

// Website Schema for search engines
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://myconsulting.network/#website",
  url: "https://myconsulting.network",
  name: "MyConsulting Network",
  alternateName: ["MyCo Network", "MyCo"],
  description: "AI-powered consulting for small businesses. Websites, AI receptionists, automation, local SEO, and marketing - with a dedicated project manager on every project.",
  publisher: {
    "@id": "https://myconsulting.network/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://myconsulting.network/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

import ScrollProgress from "@/components/UI/ScrollProgress";
import ExitIntentModal from "@/components/UI/ExitIntentModal";
import CookieConsent from "@/components/UI/CookieConsent";
import DynamicTitle from "@/components/UI/DynamicTitle";
import AIGreeting from "@/components/UI/AIGreeting";

// Blog Schema (Generic fallback)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI-Powered Consulting for Small Businesses",
  "author": {
    "@type": "Organization",
    "name": "MyConsulting Network"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MyConsulting Network",
    "logo": {
      "@type": "ImageObject",
      "url": "https://myconsulting.network/logos/MyCo_Network_Logo_PNG.png"
    }
  },
  "image": "https://myconsulting.network/og-image.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B7F4E" />

        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      </head>
      <body className="font-body" suppressHydrationWarning>
        <DynamicTitle />
        <AIGreeting />
        <ScrollProgress />
        <ExitIntentModal />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
