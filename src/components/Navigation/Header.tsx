"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "@/components/UI/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Close mobile menu styling
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }

    // Give a small delay to allow DOM to settle
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Element exists on current page, scroll to it
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Element doesn't exist on current page (e.g., on privacy/terms page)
        // Navigate to home page and scroll to section
        if (window.location.pathname !== "/") {
          window.location.href = `/#${sectionId}`;
        }
      }
    }, 50);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Our Work", id: "portfolio" },
  ];

  const modeLinks: { name: string; id: "business" | "talent" }[] = [
    { name: "For Businesses", id: "business" },
    { name: "For Talent", id: "talent" },
  ];

  const handleModeNavigate = (mode: "business" | "talent") => {
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }

    // Ensure business/talent sections render like hero toggle
    window.dispatchEvent(new CustomEvent("showSections", { detail: { mode } }));

    const sectionId = mode === "business" ? "business" : "talent";

    // Give sections time to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      } else if (window.location.pathname !== "/") {
        window.location.href = `/#${sectionId}`;
      }
    }, 200);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? "shadow-lg border-b border-gray-200/50"
            : ""
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
            : 'none'
        }}
      >
        {/* Subtle gradient line at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
          <div className="flex items-center justify-between" style={{ minHeight: '24px' }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer relative"
              onClick={() => scrollToSection("home")}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/logos/MyCo_Network_Logo.png"
                alt="MyCo Network"
                width={400}
                height={100}
                priority
                className={`transition-all duration-500 object-contain w-auto ${
                  isScrolled 
                    ? 'h-[61px] md:h-18' 
                    : 'h-[75px] md:h-[84px]'
                }`}
                style={{ maxWidth: '100%' }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-0 py-1 text-sm font-medium transition-all duration-300 text-secondary hover:text-primary group"
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}

              {modeLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleModeNavigate(link.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative px-0 py-1 text-sm font-semibold transition-all duration-300 ${
                    link.id === "business"
                      ? "text-blue-600 hover:text-blue-700"
                      : "text-primary hover:text-primary-dark"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      link.id === "business"
                        ? "bg-blue-500"
                        : "bg-gradient-to-r from-primary to-emerald-500"
                    } transition-all duration-300 group-hover:w-full`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Get Quote Button */}
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    const event = new CustomEvent("openQuoteModal");
                    window.dispatchEvent(event);
                  }}
                  variant="primary"
                  size="sm"
                  className="shadow-md hover:shadow-lg transition-shadow duration-300 !py-1.5 !px-4 !text-sm !font-medium"
                >
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
              style={{ width: '32px', height: '32px', fontSize: '20px' }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            modeLinks={modeLinks}
            onNavigate={scrollToSection}
            onModeNavigate={handleModeNavigate}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

