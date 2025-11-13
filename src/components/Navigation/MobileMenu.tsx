"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome, HiInformationCircle, HiBriefcase, HiUserGroup, HiLightningBolt, HiX } from "react-icons/hi";

interface MobileMenuProps {
  navLinks: { name: string; id: string }[];
  onNavigate: (id: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  navLinks,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: "home", name: "Home", icon: HiHome },
    { id: "about", name: "About", icon: HiInformationCircle },
    { id: "portfolio", name: "Our Work", icon: HiBriefcase },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  const handleBusinessTalent = (mode: "business" | "talent") => {
    // Dispatch event to show sections
    window.dispatchEvent(new CustomEvent("showSections", { detail: { mode } }));
    
    // Navigate to the appropriate section
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
    
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />

      {/* Expandable Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`absolute left-0 top-0 bottom-0 bg-white shadow-2xl transition-all duration-300 ${
          isExpanded ? "w-56" : "w-16"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -right-10 top-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900"
        >
          <HiX className="text-xl" />
        </button>

        <div className="flex flex-col h-full py-6">
          {/* Navigation Items */}
          <nav className="flex-1 space-y-2 px-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavigate(item.id)}
                  className="w-full flex items-center gap-4 px-3 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all group"
                >
                  <Icon className="text-2xl min-w-[24px]" />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm font-medium whitespace-nowrap overflow-hidden"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-4 mx-4 border-t border-gray-200" />

          {/* Business & Talent Buttons */}
          <div className="space-y-2 px-2">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              onClick={() => handleBusinessTalent("business")}
              className="w-full flex items-center gap-4 px-3 py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all group"
            >
              <HiUserGroup className="text-2xl min-w-[24px]" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    Business
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => handleBusinessTalent("talent")}
              className="w-full flex items-center gap-4 px-3 py-3 text-primary hover:text-primary-dark hover:bg-primary/5 rounded-lg transition-all group"
            >
              <HiLightningBolt className="text-2xl min-w-[24px]" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    Talent
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Expand Hint */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center"
            >
              <div className="text-xs text-gray-400 rotate-90 whitespace-nowrap">
                Tap to expand
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

