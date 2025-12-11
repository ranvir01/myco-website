"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGift } from "react-icons/fi";
import Button from "./Button";

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only run on desktop/large screens
    if (window.innerWidth < 1024) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        // Use session storage to show only once per session
        const shownInSession = sessionStorage.getItem("exitIntentShown");
        if (!shownInSession) {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="flex">
              <div className="hidden sm:block w-1/3 bg-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiGift className="w-24 h-24 text-primary/20" />
                </div>
              </div>
              
              <div className="p-8 sm:w-2/3">
                <h3 className="text-2xl font-bold text-secondary mb-2 font-heading">
                  Wait, before you go!
                </h3>
                <p className="text-secondary-light mb-6">
                  Get a free project consultation. Our experts can help you scope your project in 15 minutes.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-center"
                    onClick={() => {
                      const event = new CustomEvent("openQuoteModal");
                      window.dispatchEvent(event);
                      handleClose();
                    }}
                  >
                    Get Free Consultation
                  </Button>
                  <button
                    onClick={handleClose}
                    className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    No thanks, maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}