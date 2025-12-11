"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0-1 (0 = static, 1 = fast)
  offset?: number;
}

export default function ParallaxElement({ 
  children, 
  className = "", 
  speed = 0.5,
  offset = 50 
}: ParallaxElementProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset * speed, offset * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}