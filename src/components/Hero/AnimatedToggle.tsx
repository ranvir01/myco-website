"use client";

import { motion } from "framer-motion";

interface AnimatedToggleProps {
  activeMode: "business" | "talent" | null;
  onToggle: (mode: "business" | "talent") => void;
}

export default function AnimatedToggle({
  activeMode,
  onToggle,
}: AnimatedToggleProps) {
  return (
    <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 w-full">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg md:text-xl text-secondary-light font-medium text-center md:text-left"
      >
        Who are you?
      </motion.p>

      <div className="flex gap-3 sm:gap-4 w-full max-w-md md:max-w-none justify-center md:justify-start">
        <motion.button
          onClick={() => onToggle("business")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-1 sm:flex-none sm:w-36 md:w-40 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
            activeMode === "business"
              ? "bg-secondary text-white shadow-xl ring-2 sm:ring-4 ring-secondary/30 ring-offset-1 sm:ring-offset-2"
              : "bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white shadow-lg"
          }`}
        >
          Business
        </motion.button>

        <motion.button
          onClick={() => onToggle("talent")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-1 sm:flex-none sm:w-36 md:w-40 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
            activeMode === "talent"
              ? "bg-primary text-white shadow-xl ring-2 sm:ring-4 ring-primary/30 ring-offset-1 sm:ring-offset-2"
              : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-lg"
          }`}
        >
          Talent
        </motion.button>
      </div>
    </div>
  );
}

