import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MyConsulting Network | Talent On-Demand for Business Success",
  description: "Connect with top independent consultants or find your next project. MyConsulting Network bridges businesses with expert talent across software engineering, marketing, finance, and more.",
  keywords: "consulting network, independent consultants, project managers, talent on demand, business consulting, freelance consultants, professional services",
  authors: [{ name: "MyConsulting Network" }],
  creator: "MyConsulting Network",
  publisher: "MyConsulting Network",
  metadataBase: new URL("https://myconsultingnetwork.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MyConsulting Network | Talent On-Demand",
    description: "We source projects with business owners and source the talent to complete it. Your trusted project broker.",
    url: "https://myconsultingnetwork.com",
    siteName: "MyConsulting Network",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyConsulting Network - Leverage Your Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyConsulting Network | Talent On-Demand",
    description: "Connect businesses with expert independent consultants. Project management, 24/7 support, solving any problem.",
    images: ["/og-image.jpg"],
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
              "@type": "Organization",
              name: "MyConsulting Network",
              description: "Talent On-Demand - Connecting businesses with expert independent consultants",
              url: "https://myconsultingnetwork.com",
              logo: "https://myconsultingnetwork.com/logos/myconsulting-network-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/myconsultingnetwork",
                "https://www.linkedin.com/company/myconsultingnetwork",
                "https://www.instagram.com/myconsultingnetwork",
              ],
              service: {
                "@type": "Service",
                serviceType: "Business Consulting",
                provider: {
                  "@type": "Organization",
                  name: "MyConsulting Network",
                },
                areaServed: "Worldwide",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Consulting Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Project Management",
                        description: "Dedicated project managers for your business needs",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "24/7 Support",
                        description: "Round-the-clock support for your projects",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Problem Solving",
                        description: "Expert consultants to solve any business challenge",
                      },
                    },
                  ],
                },
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

