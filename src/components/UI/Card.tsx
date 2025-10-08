"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover={hover ? "hover" : "rest"}
      variants={{
        rest: { scale: 1, y: 0 },
        hover: {
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      }}
      className={`bg-white rounded-xl shadow-lg p-8 transition-shadow duration-300 ${
        hover ? "hover:shadow-2xl" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

