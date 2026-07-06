import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { services } from "@/lib/servicesData";

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
    // Derived from src/lib/servicesData.ts — the single source of truth for
    // service names and prices. Edit prices there, never here.
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: `${s.tagline} ${s.priceLine}. ${s.deliveryTime}.`,
      },
      priceSpecification: {
        "@type": s.priceLine.includes("/mo") && !s.priceLine.includes("setup")
          ? "UnitPriceSpecification"
          : "PriceSpecification",
        minPrice: s.priceFromUSD,
        ...(s.priceToUSD ? { maxPrice: s.priceToUSD } : {}),
        priceCurrency: "USD",
        ...(s.priceLine.includes("/mo") && !s.priceLine.includes("setup")
          ? { unitText: "MONTH" }
          : {}),
      },
    })),
  },
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
            __html: JSON.stringify(websiteSchema),
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
