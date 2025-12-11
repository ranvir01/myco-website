"use client";

import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

export default function AIMatchButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-lg"
    >
      <div className="relative bg-white rounded-[11px] px-4 py-2 flex items-center gap-2 group-hover:bg-transparent transition-colors duration-300">
        <FiCpu className="text-purple-500 group-hover:text-white transition-colors" />
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 group-hover:text-white transition-all text-sm">
          AI Match
        </span>
      </div>
    </motion.button>
  );
}