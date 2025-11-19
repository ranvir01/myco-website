import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import BusinessSection from "@/components/Sections/BusinessSection";
import NetworkSection from "@/components/Sections/NetworkSection";
import FAQSection from "@/components/Sections/FAQSection";

export const metadata: Metadata = {
  title: "MyCo Network | For Businesses - Hire Expert Consultants",
  description: "Find dedicated project managers and expert consultants for your business. Full project lifecycle support from strategy to execution. Trusted by top companies.",
  alternates: {
    canonical: "/business",
  },
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen pt-[40px] md:pt-[70px]">
      <Header />
      <BusinessSection />
      <NetworkSection activeMode="business" />
      <FAQSection activeMode="business" />
      <Footer />
      <QuoteModal />
    </main>
  );
}

