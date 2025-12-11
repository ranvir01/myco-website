"use client";

import { motion } from "framer-motion";

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextHighlight({ children, className = "" }: TextHighlightProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.svg
        className="absolute -bottom-1 left-0 w-full h-[0.3em] -z-10 text-emerald-200/60"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 5 Q 50 10 100 5"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.svg>
    </span>
  );
}