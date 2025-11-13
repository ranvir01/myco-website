"use client";

import { motion } from "framer-motion";
import Button from "@/components/UI/Button";

interface MobileMenuProps {
  navLinks: { name: string; id: string }[];
  onNavigate: (id: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  navLinks,
  onNavigate,
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
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Menu Panel - Compact & Clean */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute top-[65px] right-0 bottom-0 w-[250px] bg-white shadow-xl"
      >
        <div className="flex flex-col h-full py-4 px-3">
          {/* Navigation Links */}
          <nav className="space-y-1">
            {/* Home */}
            <button
              onClick={() => handleNavigate("home")}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
            >
              Home
            </button>
            
            {/* About */}
            <button
              onClick={() => handleNavigate("about")}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
            >
              About
            </button>
            
            {/* Our Work */}
            <button
              onClick={() => handleNavigate("portfolio")}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
            >
              Our Work
            </button>

            {/* Divider */}
            <div className="my-2 border-t border-gray-200" />
            
            {/* For Businesses */}
            <button
              onClick={() => handleNavigate("business")}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
            >
              For Businesses
            </button>
            
            {/* For Talent */}
            <button
              onClick={() => handleNavigate("talent")}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-primary hover:text-primary-dark hover:bg-emerald-50 rounded-lg transition-all"
            >
              For Talent
            </button>
          </nav>

          {/* Spacer */}
          <div className="flex-1 min-h-[20px]" />

          {/* Bottom Divider */}
          <div className="my-3 border-t border-gray-200" />

          {/* CTA Button */}
          <Button
            onClick={() => {
              const event = new CustomEvent("openQuoteModal");
              window.dispatchEvent(event);
              onClose();
            }}
            variant="primary"
            size="sm"
            className="w-full text-sm py-2.5"
          >
            Let&apos;s Talk
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

