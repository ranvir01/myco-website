"use client";

import { motion } from "framer-motion";
import { HiX, HiArrowRight } from "react-icons/hi";
import { FiMail, FiLinkedin } from "react-icons/fi";
import dynamic from "next/dynamic";
import Button from "@/components/UI/Button";

// Dynamically import NetworkGlobe to avoid SSR issues
const NetworkGlobe = dynamic(() => import("../Hero/NetworkGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[180px] flex items-center justify-center">
      <div className="animate-pulse text-primary-light text-sm">Loading network...</div>
    </div>
  ),
});

interface MobileMenuProps {
  navLinks: { name: string; id: string }[];
  modeLinks: { name: string; href: string; id: string }[];
  onNavigate: (id: string) => void;
  onModeNavigate: (href: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  navLinks,
  modeLinks,
  onNavigate,
  onModeNavigate,
  onClose,
}: MobileMenuProps) {
  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Backdrop with blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Menu Panel - Full screen slide-up */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ 
          type: "spring", 
          damping: 28, 
          stiffness: 350,
          mass: 0.8
        }}
        className="absolute bottom-0 left-0 right-0 bg-white flex flex-col shadow-2xl safe-area-bottom overflow-hidden"
        style={{ 
          borderTopLeftRadius: '28px',
          borderTopRightRadius: '28px',
          maxHeight: '92vh',
        }}
      >
        {/* Pull indicator */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex items-center justify-between px-6 py-3 border-b border-gray-100"
        >
          <h2 className="text-xl font-bold text-secondary font-heading">Menu</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Close menu"
            onClick={onClose}
            className="w-11 h-11 rounded-xl bg-gray-100 text-xl text-secondary hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 touch-manipulation"
          >
            <HiX />
          </motion.button>
        </motion.div>

        {/* Menu Content - Scrollable */}
        <div className="flex flex-col flex-1 overflow-y-auto overscroll-contain px-5 py-4">
          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.15 + (index * 0.04),
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate(link.id)}
                className="w-full text-left rounded-xl px-4 py-4 text-[17px] font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-between group touch-manipulation min-h-[52px]"
              >
                <span>{link.name}</span>
                <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-active:translate-x-1 transition-all" />
              </motion.button>
            ))}
          </nav>

          {/* Mode Links - Styled Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-100"
          >
            <p className="text-sm font-medium text-gray-500 px-4 mb-2">I am a...</p>
            <div className="grid grid-cols-2 gap-3">
              {modeLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.35 + (index * 0.05),
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    onModeNavigate(link.href);
                    onClose();
                  }}
                  className={`rounded-xl px-4 py-4 text-base font-semibold transition-all touch-manipulation min-h-[56px] ${
                    link.id === "business"
                      ? "bg-blue-50 text-blue-600 border-2 border-blue-200 active:bg-blue-100"
                      : "bg-emerald-50 text-primary border-2 border-emerald-200 active:bg-emerald-100"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Mini Globe - Compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-5 flex items-center justify-center w-full"
          >
            <div 
              className="mobile-menu-globe-container w-full relative"
              style={{ 
                maxWidth: '240px', 
                height: '180px'
              }}
            >
              <NetworkGlobe />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.3 }}
            className="mt-4 flex items-center justify-center gap-6"
          >
            <a
              href="mailto:info@myconsulting.network"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
            >
              <FiMail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/company/myconsultingnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
            >
              <FiLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Fixed CTA at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="px-5 py-4 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm"
        >
          <motion.div
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="md"
              className="w-full text-base font-semibold py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[52px] touch-manipulation"
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

