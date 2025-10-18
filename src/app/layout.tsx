import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1B7F4E',
};

export const metadata: Metadata = {
  title: "MyCo Network | Expert Consulting On-Demand - Project Management & Talent Solutions",
  description: "MyCo Network connects businesses with expert consultants for any project. Dedicated project managers, 24/7 support, and low-cost consulting. From business plans to feasibility analysis, we deliver results. Trusted by Tabletop Village, Blue Landscaping, VOPPL AR, and more.",
  keywords: "consulting network, independent consultants, project managers, talent on demand, business consulting, freelance consultants, professional services, project management, feasibility analysis, business plan development, SEO consulting, cloud architecture, software engineering, strategy consulting, low cost consulting, dedicated project manager",
  authors: [{ name: "MyCo Network" }],
  creator: "MyCo Network",
  publisher: "MyCo Network",
  metadataBase: new URL("https://myconsultingnetwork.com"),
  alternates: {
    canonical: "/",
  },
  category: "Business Services",
  openGraph: {
    title: "MyCo Network | Expert Consulting On-Demand - Trusted by Leading Businesses",
    description: "Full project lifecycle support with dedicated project managers. We connect businesses with expert consultants in strategy, technology, marketing, and more. Lower costs, higher quality.",
    url: "https://myconsultingnetwork.com",
    siteName: "MyCo Network",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyCo Network - Talent On-Demand for Business Success",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCo Network | Expert Consulting On-Demand",
    description: "Dedicated project managers, low-cost consulting, 24/7 support. We help businesses solve complex challenges with our expert consultant network.",
    images: ["/og-image.jpg"],
    creator: "@myconetwork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here later
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MyCo Network",
              alternateName: "MyConsulting Network",
              description: "Expert consulting network providing full project lifecycle support. We connect businesses with top consultants in strategy, technology, marketing, and more. Dedicated project managers, low-cost consulting, and 24/7 support.",
              url: "https://myconsultingnetwork.com",
              logo: "https://myconsultingnetwork.com/logos/MyCo_Network_Logo_PNG.png",
              image: "https://myconsultingnetwork.com/MyConsulting_Network_Logo_PNG.png",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["English"],
                areaServed: "Worldwide",
              },
              sameAs: [
                "https://www.facebook.com/myconsultingnetwork",
                "https://www.linkedin.com/company/myconsultingnetwork",
                "https://www.instagram.com/myconsultingnetwork",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "12",
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
                      provider: {
                        "@type": "Organization",
                        name: "MyCo Network",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO & Website Optimization",
                      description: "Strategic SEO and conversion optimization to drive customer growth",
                      provider: {
                        "@type": "Organization",
                        name: "MyCo Network",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Feasibility Analysis",
                      description: "Comprehensive competitor analysis, project planning, and resource budgeting",
                      provider: {
                        "@type": "Organization",
                        name: "MyCo Network",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dedicated Project Management",
                      description: "Full project lifecycle support with dedicated PMs and 24/7 assistance",
                      provider: {
                        "@type": "Organization",
                        name: "MyCo Network",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud Architecture Consulting",
                      description: "Expert cloud infrastructure design and implementation",
                      provider: {
                        "@type": "Organization",
                        name: "MyCo Network",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software Engineering",
                      description: "Custom software development and architecture services",
                      provider: {
                        "@type": "Organization",
                        name: "MyCo Network",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
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
                    text: "MyCo operates on a network model with significantly lower costs than traditional firms. We provide full project lifecycle support, dedicated project managers, and low-cost consulting by leveraging our network of independent experts.",
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
                    text: "Our sourcing process typically takes 3-7 business days depending on your requirements. We maintain a pre-vetted network of consultants across various industries.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

