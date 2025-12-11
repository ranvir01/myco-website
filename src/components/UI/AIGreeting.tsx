"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AIGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let timeGreeting = "Welcome";
    if (hour < 12) timeGreeting = "Good Morning";
    else if (hour < 18) timeGreeting = "Good Afternoon";
    else timeGreeting = "Good Evening";

    setGreeting(`${timeGreeting}`);
  }, []);

  if (!greeting) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-24 right-6 z-30 hidden xl:flex bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-emerald-100/50"
    >
      <span className="text-sm font-medium text-emerald-800 flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        {greeting}, ready to build?
      </span>
    </motion.div>
  );
}