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
      {/* Enhanced Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-slate-800/50 to-gray-900/70 backdrop-blur-md"
      />

      {/* Menu Panel with glassmorphism */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute top-[80px] right-0 bottom-0 w-4/5 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50"
        style={{
          boxShadow: '-10px 0 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Decorative gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-500 to-teal-500" />
        <div className="flex flex-col h-full px-5 py-4">
          <nav className="flex-1 overflow-y-auto space-y-1.5 pr-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onNavigate(link.id)}
                whileTap={{ scale: 0.97 }}
                className="relative block w-full text-left text-base font-semibold text-secondary hover:text-primary transition-all py-2 px-3 rounded-lg hover:bg-primary/5"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pt-3 pb-2"
          >
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="md"
              className="w-full shadow-lg"
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

