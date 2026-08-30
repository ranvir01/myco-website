"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface OpenQuoteButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  /** Pre-selects the "What do you need help with?" option in the quote modal */
  service?: string;
}

/**
 * Client-side CTA button usable from server-rendered pages.
 * Opens the global QuoteModal via the `openQuoteModal` CustomEvent.
 */
export default function OpenQuoteButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  showArrow = true,
  service,
}: OpenQuoteButtonProps) {
  const openModal = () => {
    window.dispatchEvent(
      new CustomEvent("openQuoteModal", service ? { detail: { service } } : undefined)
    );
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 touch-manipulation";
  const sizes = {
    md: "px-5 py-2.5 text-[15px] min-h-[44px]",
    lg: "px-7 py-3.5 text-base sm:text-lg min-h-[48px]",
  };
  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl active:shadow-md",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={openModal}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <FiArrowRight className="w-5 h-5" />}
    </motion.button>
  );
}
