"use client";

import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
        className="relative z-10 h-full w-full bg-white px-6 pb-8 pt-5 flex flex-col"
      >
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-secondary">Menu</p>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 text-2xl text-secondary hover:bg-gray-200 flex items-center justify-center"
          >
            <HiX />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-4 flex-1">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className="w-full text-left rounded-xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary transition-all"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            {modeLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onModeNavigate(link.id);
                  onClose();
                }}
                className={`w-full text-left rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  link.id === "business"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "text-primary hover:bg-emerald-50"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="md"
              className="w-full text-base font-semibold py-3"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

