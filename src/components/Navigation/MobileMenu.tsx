"use client";

import { motion } from "framer-motion";
import Button from "@/components/UI/Button";

interface MobileMenuProps {
  navLinks: { name: string; id: string }[];
  modeLinks: { name: string; id: "business" | "talent" }[];
  onNavigate: (id: string) => void;
  onModeNavigate: (mode: "business" | "talent") => void;
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
        className="absolute top-[40px] right-0 bottom-0 w-[250px] bg-white shadow-xl"
      >
        <div className="flex flex-col h-full py-3 px-3">
          {/* Navigation Links */}
          <nav className="space-y-0.5">
            {/* Home */}
            <button
              onClick={() => handleNavigate("home")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md transition-all block"
            >
              Home
            </button>
            
            {/* About */}
            <button
              onClick={() => handleNavigate("about")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md transition-all block"
            >
              About
            </button>
            
            {/* Our Work */}
            <button
              onClick={() => handleNavigate("portfolio")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md transition-all block"
            >
              Our Work
            </button>

            {/* Divider */}
            <div className="my-2 border-t border-gray-200" />
            
            {modeLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onModeNavigate(link.id)}
                className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-md transition-all block ${
                  link.id === "business"
                    ? "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    : "text-primary hover:text-primary-dark hover:bg-emerald-50"
                }`}
              >
                {link.name}
              </button>
            ))}
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

