"use client";

import { motion } from "framer-motion";
import Button from "@/components/UI/Button";
import { HiHome, HiInformationCircle, HiBriefcase } from "react-icons/hi";

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
        className="absolute top-[65px] right-0 bottom-0 w-4/5 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 overflow-y-auto"
        style={{
          boxShadow: '-10px 0 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Decorative gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 shadow-md" />
        
        <div className="flex flex-col justify-between h-full px-8 py-10">
          {/* Navigation Area - Centered */}
          <nav className="flex flex-col justify-center flex-1 space-y-5">
            {/* Home - First at the top */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05, type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => {
                onNavigate("home");
                onClose();
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center gap-4 w-full text-left text-2xl font-bold text-secondary hover:text-primary transition-all duration-300 py-5 px-6 rounded-2xl bg-white/50 hover:bg-gradient-to-r hover:from-primary/5 hover:via-emerald-50/80 hover:to-teal-50/50 group border-2 border-transparent hover:border-primary/20 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-emerald-500/10 group-hover:from-primary/20 group-hover:to-emerald-500/20 transition-all duration-300">
                <HiHome className="text-2xl text-primary" />
              </div>
              <span className="relative z-10 flex-1">Home</span>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-primary text-xl"
              >
                →
              </motion.div>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary to-emerald-500 rounded-full transition-all duration-300 group-hover:h-4/5" />
            </motion.button>
            
            {/* About */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => {
                onNavigate("about");
                onClose();
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center gap-4 w-full text-left text-2xl font-bold text-secondary hover:text-primary transition-all duration-300 py-5 px-6 rounded-2xl bg-white/50 hover:bg-gradient-to-r hover:from-primary/5 hover:via-emerald-50/80 hover:to-teal-50/50 group border-2 border-transparent hover:border-primary/20 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-emerald-500/10 group-hover:from-primary/20 group-hover:to-emerald-500/20 transition-all duration-300">
                <HiInformationCircle className="text-2xl text-primary" />
              </div>
              <span className="relative z-10 flex-1">About</span>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-primary text-xl"
              >
                →
              </motion.div>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary to-emerald-500 rounded-full transition-all duration-300 group-hover:h-4/5" />
            </motion.button>
            
            {/* Our Work */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => {
                onNavigate("portfolio");
                onClose();
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center gap-4 w-full text-left text-2xl font-bold text-secondary hover:text-primary transition-all duration-300 py-5 px-6 rounded-2xl bg-white/50 hover:bg-gradient-to-r hover:from-primary/5 hover:via-emerald-50/80 hover:to-teal-50/50 group border-2 border-transparent hover:border-primary/20 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-emerald-500/10 group-hover:from-primary/20 group-hover:to-emerald-500/20 transition-all duration-300">
                <HiBriefcase className="text-2xl text-primary" />
              </div>
              <span className="relative z-10 flex-1">Our Work</span>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-primary text-xl"
              >
                →
              </motion.div>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary to-emerald-500 rounded-full transition-all duration-300 group-hover:h-4/5" />
            </motion.button>
          </nav>

          {/* Let's Talk Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 300, damping: 25 }}
            className="pt-6 pb-2"
          >
            <Button
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
                onClose();
              }}
              variant="primary"
              size="md"
              className="w-full shadow-xl hover:shadow-2xl text-lg py-5 font-bold transition-all duration-300 transform hover:scale-[1.02]"
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

