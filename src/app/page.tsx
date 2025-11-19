"use client";

import Header from "@/components/Navigation/Header";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/Sections/AboutSection";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";

export default function Home() {
  return (
    <main className="min-h-screen pt-[40px] md:pt-[70px]">
      <Header />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <Footer />
      <QuoteModal />
    </main>
  );
}
