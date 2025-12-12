"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiMail, FiArrowRight } from "react-icons/fi";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasSeenCTA, setHasSeenCTA] = useState(false);

  useEffect(() => {
    // Show CTA after user scrolls past hero section
    const handleScroll = () => {
      // Use documentElement or body for better compatibility
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      // Mobile-specific threshold: show sooner on mobile
      const heroHeight = window.innerWidth < 768 
        ? window.innerHeight * 0.5 
        : window.innerHeight * 0.7;
      
      if (scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    // Only auto-expand on desktop to be less intrusive on mobile
    const autoExpandTimeout = setTimeout(() => {
      if (!hasSeenCTA && isVisible && window.innerWidth >= 768) {
        setIsExpanded(true);
        setHasSeenCTA(true);
        
        // Auto-collapse after 5 seconds
        setTimeout(() => {
          setIsExpanded(false);
        }, 5000);
      }
    }, 10000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(autoExpandTimeout);
    };
  }, [hasSeenCTA, isVisible]);

  const openContactModal = () => {
    const event = new CustomEvent("openQuoteModal");
    window.dispatchEvent(event);
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-24 right-6 z-40 md:hidden"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-64 origin-bottom-right"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-secondary">Quick Contact</span>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <FiX className="w-4 h-4 text-secondary-light" />
                  </button>
                </div>
                
                <p className="text-xs text-secondary-light mb-3">
                  Ready to start your project? Let&apos;s connect!
                </p>
                
                <div className="space-y-2">
                  <button
                    onClick={openContactModal}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 touch-manipulation"
                  >
                    Get Free Quote
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                  
                  <a
                    href="mailto:info@myconsulting.network"
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-secondary px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 touch-manipulation"
                  >
                    <FiMail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsExpanded(true)}
                className="relative p-4 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group touch-manipulation"
                aria-label="Open quick contact"
              >
                <FiMessageCircle className="w-6 h-6" />
                
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                
                {/* Notification dot */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

