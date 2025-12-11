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
    default: "MyConsulting Network | Consulting On-Demand - Project Management & Business Solutions",
    template: "%s | MyConsulting Network",
  },
  description: "MyConsulting Network connects businesses with top consultants for any project. Get dedicated project managers, 24/7 support, and affordable consulting. From business plans to feasibility analysis, SEO to cloud architecture - we deliver results. Trusted by Tabletop Village, Blue Landscaping, VOPPL AR, Gibraltar Business Group, and more.",
  keywords: [
    // Brand terms (critical for brand search)
    "myconsulting network",
    "myco network", 
    "myco consulting",
    "my consulting network",
    // Service terms
    "consulting network",
    "independent consultants",
    "project managers",
    "talent on demand",
    "business consulting",
    "freelance consultants",
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
    title: "MyConsulting Network | Consulting On-Demand",
    description: "Full project lifecycle support with dedicated project managers. Connect with top consultants in strategy, technology, marketing, and more. Lower costs, higher quality. Get started today!",
    url: "https://myconsulting.network",
    siteName: "MyConsulting Network",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/MyCo_Network_Logo_PNG.png",
        width: 800,
        height: 200,
        alt: "MyConsulting Network - Consulting On-Demand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyConsulting Network | Consulting On-Demand",
    description: "Dedicated project managers, low-cost consulting, 24/7 support. We help businesses solve complex challenges with our consultant network.",
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
  "@id": "https://myconsulting.network/#organization",
  name: "MyConsulting Network",
  alternateName: ["MyCo Network", "MyConsulting", "MyCo"],
  description: "Consulting network providing full project lifecycle support. We connect businesses with top consultants in strategy, technology, marketing, and more. Dedicated project managers, low-cost consulting, and 24/7 support.",
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
    "Business Consulting",
    "Project Management",
    "Strategy Consulting",
    "Technology Consulting",
    "Marketing Consulting",
    "SEO Services",
    "Software Development",
    "Cloud Architecture",
  ],
  knowsAbout: [
    "Business Strategy",
    "Project Management",
    "Digital Marketing",
    "Search Engine Optimization",
    "Cloud Computing",
    "Software Engineering",
    "Feasibility Analysis",
    "Business Plan Development",
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
    name: "Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Plan Development",
          description: "Professional business plan creation for location moves, funding, and strategic planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Website Optimization",
          description: "Strategic SEO and conversion optimization to drive customer growth",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Feasibility Analysis",
          description: "Comprehensive competitor analysis, project planning, and resource budgeting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dedicated Project Management",
          description: "Full project lifecycle support with dedicated PMs and 24/7 assistance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Architecture Consulting",
          description: "Cloud infrastructure design and implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Engineering",
          description: "Custom software development and architecture services",
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
        text: "MyConsulting Network (MyCo) is a consulting network that connects businesses with top consultants for any project. We provide dedicated project managers, 24/7 support, and low-cost consulting services across strategy, technology, marketing, and more.",
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
        text: "We serve diverse industries including Gaming & Entertainment, Landscaping, Technology & AR, Financial Services, Business Consulting, Transportation, and Education & Technology. Our clients include Tabletop Village, Blue Landscaping, VOPPL AR, Goldstein & Company, Gibraltar Business Group, Presidential Transpo, and Atlantis STEM.",
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
  description: "Consulting on-demand. Connect with top consultants for any project.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
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
      </head>
      <body className="font-body" suppressHydrationWarning>{children}</body>
    </html>
  );
}
