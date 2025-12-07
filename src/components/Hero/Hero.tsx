"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { FiChevronUp, FiPhone, FiMail } from "react-icons/fi";
import { useRouter } from "next/navigation";
import AnimatedToggle from "./AnimatedToggle";

// Dynamically import NetworkGlobe to avoid SSR issues
const NetworkGlobe = dynamic(() => import("./NetworkGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center">
      <div className="animate-pulse text-primary-light">Loading...</div>
    </div>
  ),
});

export default function Hero() {
  const router = useRouter();
  const [isZooming, setIsZooming] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Track mouse movement for interactive gradient
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleToggle = (mode: "business" | "experts") => {
    setIsZooming(true);
    
    // Navigate after a short delay to show the zoom effect
    setTimeout(() => {
      router.push(mode === "business" ? "/business" : "/experts");
    }, 400);
  };

  const openContactModal = () => {
    const event = new CustomEvent("openQuoteModal");
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative z-10 min-h-[auto] md:min-h-[calc(100vh-70px)] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50 pt-6 pb-12 md:py-8 lg:py-12"
      onMouseMove={handleMouseMove}
    >
      {/* Simplified Natural Globe Shadow & Glow */}
      
      {/* Soft circular shadow beneath globe - like it's floating */}
      <motion.div 
        className="absolute top-1/2 right-[15%] -translate-y-1/2 pointer-events-none hidden lg:block"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '380px',
          height: '380px',
          background: 'radial-gradient(ellipse 100% 80% at 50% 60%, rgba(27,127,78,0.12) 0%, rgba(0,0,0,0.06) 35%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Primary green glow emanating from globe */}
      <motion.div 
        className="absolute top-1/2 right-[15%] -translate-y-1/2 pointer-events-none hidden lg:block"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle at 50% 50%, rgba(27,127,78,0.15) 0%, rgba(16,185,129,0.12) 30%, rgba(86,179,101,0.08) 50%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />
      
      {/* Subtle outer glow - atmospheric effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        animate={{
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle 500px at 70% 50%, rgba(16,185,129,0.08) 0%, rgba(27,127,78,0.04) 30%, transparent 55%)',
        }}
      />
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1B7F4E 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Clean Professional Transition */}
      <AnimatePresence>
        {isZooming && (
          <>
            {/* Smooth fade overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="fixed inset-0 z-40 pointer-events-none bg-white"
            />
            
            {/* Subtle green accent fade */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.15, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="fixed inset-0 z-41 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(27,127,78,0.2) 0%, rgba(86,179,101,0.1) 40%, transparent 70%)",
              }}
            />

            {/* Directional blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
              className="fixed inset-0 z-42 pointer-events-none"
            >
              <motion.div
                animate={{
                  backdropFilter: ["blur(0px)", "blur(8px)", "blur(0px)"]
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="w-full h-full"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Left Column - Text and Toggle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: isZooming ? 0 : 1, 
              x: isZooming ? -30 : 0,
              filter: isZooming ? "blur(8px)" : "blur(0px)"
            }}
            transition={{ 
              duration: isZooming ? 0.4 : 0.8,
              ease: isZooming ? [0.25, 0.1, 0.25, 1] : "easeOut"
            }}
            className="space-y-5 md:space-y-4 lg:space-y-6 md:pr-4 lg:pr-8 text-center md:text-left"
          >
            {/* Trust Badge - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary">Trusted by 12+ Growing Businesses</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-tight font-heading"
            >
              Leverage Our{" "}
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mt-0.5 sm:mt-1"
                style={{
                  background: 'linear-gradient(135deg, #1B7F4E 0%, #56B365 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(27,127,78,0.3))'
                }}
              >
                Network!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-light max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              <strong>MyConsulting Network</strong> makes project work effortless. We connect businesses with top consultants — with <em>dedicated project managers</em>, <em>low-cost solutions</em>, and <em>24/7 support</em>.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start"
            >
              {[
                { icon: "✓", text: "Dedicated PMs" },
                { icon: "✓", text: "Low-Cost" },
                { icon: "✓", text: "24/7 Support" },
              ].map((prop) => (
                <span
                  key={prop.text}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white rounded-lg text-xs sm:text-sm font-medium text-secondary-light shadow-sm border border-gray-100"
                >
                  <span className="text-primary">{prop.icon}</span>
                  {prop.text}
                </span>
              ))}
            </motion.div>

            <AnimatedToggle activeMode={null} onToggle={handleToggle} />

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              
              <a
                href="mailto:info@myconsulting.network"
                className="inline-flex items-center gap-2 text-secondary-light hover:text-primary transition-colors duration-300"
              >
                <FiMail className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">info@myconsulting.network</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Globe (Hidden on mobile, visible md+) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isZooming ? 0 : 1,
              scale: isZooming ? 1.3 : 1,
              filter: isZooming ? "blur(12px)" : "blur(0px)",
            }}
            transition={{ 
              duration: isZooming ? 0.4 : 0.8,
              ease: isZooming ? [0.25, 0.1, 0.25, 1] : "easeOut"
            }}
            className="hidden md:flex relative items-center justify-center lg:mt-0 min-h-[250px] lg:min-h-[350px] xl:min-h-[400px]"
            style={{
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
            aria-hidden="true"
          >
            <div className="w-full max-w-[350px] lg:max-w-none" style={{ 
              transform: "translateZ(0)",
              backfaceVisibility: "hidden" as const,
            }}>
              <NetworkGlobe />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Business/Talent Button Indicator - Only visible on xl+ screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 xl:bottom-8 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center space-y-2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-2xl text-primary"
        >
          <FiChevronUp />
        </motion.div>
        <p className="text-secondary-light text-sm font-medium text-center">
          Choose your network<br />
          <span className="text-secondary font-semibold">Business</span> or <span className="text-primary font-semibold">Consultant</span>
        </p>
      </motion.div>
    </section>
  );
}
