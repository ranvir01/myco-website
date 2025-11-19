"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Navigation/Header";
import Hero from "@/components/Hero/Hero";
import BusinessSection from "@/components/Sections/BusinessSection";
import TalentSection from "@/components/Sections/TalentSection";
import AboutSection from "@/components/Sections/AboutSection";
import NetworkSection from "@/components/Sections/NetworkSection";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import FAQSection from "@/components/Sections/FAQSection";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<"business" | "talent" | null>("business");

  useEffect(() => {
    // Listen for when user clicks Business or Talent button
    const handleShowSections = (event: any) => {
      const mode = event.detail?.mode;
      // Render sections immediately so scroll can work on first click
      setSelectedMode(mode);
    };

    window.addEventListener("showSections", handleShowSections);
    return () => window.removeEventListener("showSections", handleShowSections);
  }, []);

  return (
    <main className="min-h-screen pt-[40px] md:pt-[70px]">
      <Header />
      <Hero />
      
      {/* Always visible universal sections */}
      <AboutSection />
      <PortfolioSection />
      
      {/* Mode-specific sections (Business or Talent) */}
      <AnimatePresence>
        {selectedMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {selectedMode === "business" ? (
              <>
                <BusinessSection />
                <NetworkSection activeMode="business" />
                <FAQSection activeMode="business" />
              </>
            ) : (
              <>
                <TalentSection />
                <NetworkSection activeMode="talent" />
                <FAQSection activeMode="talent" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
      <QuoteModal />
    </main>
  );
}

