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
    <div className="flex flex-col items-center md:items-start space-y-6">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-secondary-light font-medium"
      >
        Who are you?
      </motion.p>

      <div className="flex gap-4">
        <motion.button
          onClick={() => onToggle("business")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
            activeMode === "business"
              ? "bg-secondary text-white shadow-xl ring-4 ring-secondary/30 ring-offset-2"
              : "bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white shadow-lg"
          }`}
        >
          Business
        </motion.button>

        <motion.button
          onClick={() => onToggle("talent")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
            activeMode === "talent"
              ? "bg-primary text-white shadow-xl ring-4 ring-primary/30 ring-offset-2"
              : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-lg"
          }`}
        >
          Talent
        </motion.button>
      </div>
    </div>
  );
}

