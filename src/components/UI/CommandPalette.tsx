"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiSearch, FiArrowRight, FiCommand, FiHome, FiUsers, FiBriefcase, FiPhone } from "react-icons/fi";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    { id: "home", name: "Go Home", icon: FiHome, href: "/" },
    { id: "business", name: "For Businesses", icon: FiBriefcase, href: "/business" },
    { id: "experts", name: "For Consultants", icon: FiUsers, href: "/experts" },
    { id: "contact", name: "Contact Us", icon: FiPhone, action: () => {
      const event = new CustomEvent("openQuoteModal");
      window.dispatchEvent(event);
      setIsOpen(false);
    }},
  ];

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action: any) => {
    if (action.href) {
      router.push(action.href);
    } else if (action.action) {
      action.action();
    }
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Trigger Button - Desktop */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm text-secondary-light bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors mr-4"
      >
        <FiSearch className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="hidden xl:inline-flex h-5 items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-500">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
            >
              <div className="flex items-center px-4 py-3 border-b border-gray-100">
                <FiSearch className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent outline-none text-secondary placeholder:text-gray-400 h-6"
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1 rounded bg-gray-50 border border-gray-200"
                >
                  ESC
                </button>
              </div>
              
              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredActions.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500 text-sm">
                    No results found.
                  </div>
                ) : (
                  <div className="px-2 space-y-1">
                    {filteredActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => handleSelect(action)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-secondary hover:bg-primary/5 hover:text-primary rounded-lg transition-colors group"
                      >
                        <action.icon className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                        <span className="flex-1 text-left">{action.name}</span>
                        {action.href && <FiArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 flex justify-between">
                <span>AI-Powered Navigation</span>
                <span>MyConsulting Network</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}