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

      {/* Clean Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute top-[65px] right-0 bottom-0 w-[280px] bg-white shadow-xl overflow-y-auto"
      >
        {/* Simple top accent */}
        <div className="h-1 bg-primary" />
        
        <div className="flex flex-col h-full px-6 py-8">
          {/* Clean Navigation */}
          <nav className="space-y-1 mb-auto">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className="w-full text-left px-4 py-3.5 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* Clean Divider */}
          <div className="my-6 border-t border-gray-200" />

          {/* Clean CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="md"
              className="w-full text-base font-medium py-3"
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

