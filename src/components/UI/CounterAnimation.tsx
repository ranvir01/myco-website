"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterAnimationProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CounterAnimation({ 
  value, 
  duration = 2000,
  className = "" 
}: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^([\d.]+)/);
    const suffix = value.replace(/^[\d.]+/, "");
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[1]);
    const isDecimal = numericMatch[1].includes(".");
    const decimalPlaces = isDecimal ? (numericMatch[1].split(".")[1]?.length || 0) : 0;
    
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (targetNumber - startValue) * easeOut;
      
      if (isDecimal) {
        setDisplayValue(currentValue.toFixed(decimalPlaces) + suffix);
      } else {
        setDisplayValue(Math.floor(currentValue) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {displayValue}
    </motion.span>
  );
}

