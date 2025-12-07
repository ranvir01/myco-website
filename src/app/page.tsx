"use client";

import Header from "@/components/Navigation/Header";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/Sections/AboutSection";
import TrustSection from "@/components/Sections/TrustSection";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import BackToTop from "@/components/UI/BackToTop";
import FloatingCTA from "@/components/UI/FloatingCTA";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="min-h-screen pt-[70px] md:pt-[80px]">
        {/* Hero Section - Primary landing */}
        <Hero />
        
        {/* Trust & Social Proof - Build credibility early */}
        <TrustSection />
        
        {/* About Section - Explain what you do */}
        <AboutSection />
        
        {/* Portfolio Section - Show your work */}
        <PortfolioSection />
      </main>
      
      <Footer />
      <QuoteModal />
      
      {/* Floating UI Elements */}
      <BackToTop />
      <FloatingCTA />
    </>
  );
}
