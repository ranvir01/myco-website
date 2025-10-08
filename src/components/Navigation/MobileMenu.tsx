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
        className="absolute top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50"
        style={{
          boxShadow: '-10px 0 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Decorative gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-500 to-teal-500" />
        <div className="flex flex-col h-full p-8">
          <nav className="flex-1 space-y-4 mt-20">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate(link.id)}
                whileTap={{ scale: 0.95 }}
                className="relative block w-full text-left text-2xl font-bold text-secondary hover:text-primary transition-all py-4 px-4 rounded-xl hover:bg-primary/5 group"
              >
                {link.name}
                <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-300 group-hover:w-12" />
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="lg"
              className="w-full shadow-lg"
            >
              Let's Talk
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

