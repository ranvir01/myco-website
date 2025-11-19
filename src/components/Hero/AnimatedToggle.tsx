"use client";

import { motion } from "framer-motion";

interface AnimatedToggleProps {
  activeMode: "business" | "experts" | null;
  onToggle: (mode: "business" | "experts") => void;
}

export default function AnimatedToggle({
  activeMode,
  onToggle,
}: AnimatedToggleProps) {
  return (
    <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-5 w-full">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-light font-medium text-center md:text-left"
      >
        Who are you?
      </motion.p>

      <div className="flex gap-2.5 sm:gap-3 md:gap-4 w-full max-w-md md:max-w-none justify-center md:justify-start">
        <motion.button
          onClick={() => onToggle("business")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-1 sm:flex-none sm:w-36 md:w-40 px-3 sm:px-5 md:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ${
            activeMode === "business"
              ? "bg-secondary text-white shadow-xl ring-2 sm:ring-4 ring-secondary/30 ring-offset-1 sm:ring-offset-2"
              : "bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white shadow-lg"
          }`}
        >
          Businesses
        </motion.button>

        <motion.button
          onClick={() => onToggle("experts")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-1 sm:flex-none sm:w-36 md:w-40 px-3 sm:px-5 md:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ${
            activeMode === "experts"
              ? "bg-primary text-white shadow-xl ring-2 sm:ring-4 ring-primary/30 ring-offset-1 sm:ring-offset-2"
              : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-lg"
          }`}
        >
          Experts
        </motion.button>
      </div>
    </div>
  );
}

