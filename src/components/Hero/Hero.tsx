"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { FiChevronUp } from "react-icons/fi";
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
  const [activeMode, setActiveMode] = useState<"business" | "talent" | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Track mouse movement for interactive gradient
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleToggle = (mode: "business" | "talent") => {
    setIsZooming(true);
    setActiveMode(mode);
    
    // Dispatch event to show sections with the selected mode
    window.dispatchEvent(new CustomEvent("showSections", { detail: { mode } }));
    
    // Give React time to render sections in DOM, then scroll
    setTimeout(() => {
      const sectionId = mode === "business" ? "business" : "talent";
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }, 150);
    
    // End transition animation
    setTimeout(() => {
      setIsZooming(false);
    }, 400);
  };

  return (
      <section
          id="home"
          className="relative z-10 min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50 py-12 md:py-16"
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

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-fr items-center">
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
            className="space-y-6 md:space-y-8 lg:pr-8"
          >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight"
                >
                  Leverage Our{" "}
                  <span 
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl block mt-1 md:mt-2"
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
              className="text-lg sm:text-xl md:text-2xl text-secondary-light max-w-xl leading-relaxed"
            >
              MyCo makes project work effortless. We are available 24/7 connecting businesses to experts.
            </motion.p>

            <AnimatedToggle activeMode={activeMode} onToggle={handleToggle} />
          </motion.div>

          {/* Right Column - 3D Globe (SMOOTH ANIMATION) */}
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
            className="relative flex items-center justify-center mt-4 lg:mt-0 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
            style={{
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <div className="w-full max-w-[400px] md:max-w-none" style={{ 
              transform: "translateZ(0)",
              backfaceVisibility: "hidden" as any,
            }}>
              <NetworkGlobe />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Business/Talent Button Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-3 z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-3xl text-primary"
        >
          <FiChevronUp />
        </motion.div>
        <p className="text-secondary-light text-base font-medium text-center">
          Choose your network<br />
          <span className="text-secondary font-semibold">Business</span> or <span className="text-primary font-semibold">Talent</span>
        </p>
      </motion.div>
    </section>
  );
}

