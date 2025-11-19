"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import dynamic from "next/dynamic";
import Button from "@/components/UI/Button";

// Dynamically import NetworkGlobe to avoid SSR issues
const NetworkGlobe = dynamic(() => import("../Hero/NetworkGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[200px] flex items-center justify-center">
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
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Backdrop with blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300,
          mass: 0.8
        }}
        className="relative z-10 h-full w-full bg-white px-6 pb-8 pt-20 flex flex-col shadow-2xl"
        style={{ 
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px'
        }}
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute top-4 left-0 right-0 flex items-center justify-between px-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-lg font-bold text-secondary"
          >
            Menu
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close menu"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 text-xl text-secondary hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <HiX />
          </motion.button>
        </motion.div>

        {/* Menu Content */}
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto mt-4">
          <nav className="space-y-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.2 + (index * 0.05),
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate(link.id)}
                className="w-full text-left rounded-xl px-4 py-3.5 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary transition-all active:bg-gray-100"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="border-t border-gray-200 pt-4 space-y-2"
          >
            {modeLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.4 + (index * 0.05),
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ x: 4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onModeNavigate(link.href);
                  onClose();
                }}
                className={`w-full text-left rounded-xl px-4 py-3.5 text-base font-semibold transition-all active:scale-95 ${
                  link.id === "business"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "text-primary hover:bg-emerald-50"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Interactive Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 mb-4 flex items-center justify-center w-full px-2"
          >
            <div 
              className="mobile-menu-globe-container w-full relative"
              style={{ 
                maxWidth: '300px', 
                height: '250px'
              }}
            >
              <NetworkGlobe />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-auto pt-4 border-t border-gray-200"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
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
                className="w-full text-base font-semibold py-3.5 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

