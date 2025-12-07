import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import BusinessSection from "@/components/Sections/BusinessSection";
import NetworkSection from "@/components/Sections/NetworkSection";
import FAQSection from "@/components/Sections/FAQSection";
import ClientWrapper from "@/components/UI/ClientWrapper";

export const metadata: Metadata = {
  title: "For Businesses - Hire Consultants On-Demand",
  description: "Find dedicated project managers and top consultants for your business at MyConsulting Network. Full project lifecycle support from strategy to execution. Get started with a free consultation today!",
  keywords: [
    "hire consultants",
    "business consulting",
    "project managers",
    "top consultants",
    "on-demand consulting",
    "business solutions",
    "strategy consulting",
    "technology consulting",
    "marketing consulting",
    "affordable consulting",
  ],
  alternates: {
    canonical: "/business",
  },
  openGraph: {
    title: "For Businesses - Hire Consultants | MyConsulting Network",
    description: "Find dedicated project managers and top consultants. Full project lifecycle support from strategy to execution. Trusted by growing businesses.",
    url: "https://myconsulting.network/business",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Businesses - Hire Consultants | MyConsulting Network",
    description: "Find dedicated project managers and top consultants. Full project lifecycle support from strategy to execution.",
  },
};

// Structured data for the business page
const businessPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Consulting Services",
  provider: {
    "@type": "Organization",
    name: "MyConsulting Network",
    url: "https://myconsulting.network",
  },
  description: "Consulting services for businesses. Get dedicated project managers, full lifecycle support, and access to vetted consultants in strategy, technology, marketing, and more.",
  serviceType: "Business Consulting",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Project Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategy Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology Consulting",
        },
      },
    ],
  },
};

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[40px] md:pt-[70px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessPageSchema),
          }}
        />
        <BusinessSection />
        <NetworkSection activeMode="business" />
        <FAQSection activeMode="business" />
      </main>
      <Footer />
      <QuoteModal />
      <ClientWrapper />
    </>
  );
}
