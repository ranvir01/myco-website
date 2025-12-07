import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import TalentSection from "@/components/Sections/TalentSection";
import NetworkSection from "@/components/Sections/NetworkSection";
import FAQSection from "@/components/Sections/FAQSection";
import ClientWrapper from "@/components/UI/ClientWrapper";

export const metadata: Metadata = {
  title: "For Consultants - Join Our Consultant Network",
  description: "Join MyConsulting Network as an independent consultant. Access exclusive projects, fair pay, and dedicated support. Build your consulting career with flexibility and work with top businesses.",
  keywords: [
    "freelance consulting",
    "join consultant network",
    "independent consultant",
    "consultant jobs",
    "consulting opportunities",
    "freelance consultant work",
    "consulting career",
    "remote consulting",
    "project-based work",
    "consulting network",
  ],
  alternates: {
    canonical: "/experts",
  },
  openGraph: {
    title: "For Consultants - Join Our Consultant Network | MyConsulting Network",
    description: "Join as an independent consultant. Access exclusive projects, fair pay, and dedicated support. Build your career with flexibility.",
    url: "https://myconsulting.network/experts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Consultants - Join Our Consultant Network | MyConsulting Network",
    description: "Join as an independent consultant. Access exclusive projects, fair pay, and dedicated support.",
  },
};

// Structured data for the consultants page
const expertsPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultant Network",
  provider: {
    "@type": "Organization",
    name: "MyConsulting Network",
    url: "https://myconsulting.network",
  },
  description: "Join our network of independent consultants. Access exclusive project opportunities, receive fair compensation, and enjoy dedicated support for your consulting career.",
  serviceType: "Consulting Network",
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    description: "Join as a consultant to access projects in strategy, technology, marketing, and more.",
  },
};

export default function ExpertsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[40px] md:pt-[70px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(expertsPageSchema),
          }}
        />
        <TalentSection />
        <NetworkSection activeMode="talent" />
        <FAQSection activeMode="talent" />
      </main>
      <Footer />
      <QuoteModal />
      <ClientWrapper />
    </>
  );
}
