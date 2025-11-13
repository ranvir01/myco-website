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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Clean Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Minimal Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute top-[65px] right-0 bottom-0 w-[240px] bg-white shadow-2xl overflow-y-auto"
      >
        <div className="flex flex-col py-4">
          {/* Minimal Navigation */}
          <nav className="px-3">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.04, duration: 0.15 }}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* Thin Divider */}
          <div className="my-4 mx-3 border-t border-gray-200" />

          {/* Compact CTA */}
          <div className="px-3">
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="sm"
              className="w-full text-sm font-medium py-2"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

