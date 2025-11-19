import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import TalentSection from "@/components/Sections/TalentSection";
import NetworkSection from "@/components/Sections/NetworkSection";
import FAQSection from "@/components/Sections/FAQSection";

export const metadata: Metadata = {
  title: "MyCo Network | For Talent - Join Our Consultant Network",
  description: "Join MyCo Network as an independent consultant. Access exclusive projects, fair pay, and dedicated support. Build your career with flexibility.",
  alternates: {
    canonical: "/talent",
  },
};

export default function TalentPage() {
  return (
    <main className="min-h-screen pt-[40px] md:pt-[70px]">
      <Header />
      <TalentSection />
      <NetworkSection activeMode="talent" />
      <FAQSection activeMode="talent" />
      <Footer />
      <QuoteModal />
    </main>
  );
}

