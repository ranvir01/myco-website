"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiLinkedin, FiArrowRight } from "react-icons/fi";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu if it's open
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }

    // Give a small delay to allow DOM to settle
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Element exists on current page, scroll to it
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Element doesn't exist on current page (e.g., on privacy/terms page)
        // Navigate to home page and scroll to section
        if (window.location.pathname !== "/") {
          window.location.href = `/#${sectionId}`;
        }
      }
    }, 50);
  };

  const openContactModal = () => {
    const event = new CustomEvent("openQuoteModal");
    window.dispatchEvent(event);
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
  ];

  const services = [
    "Business Plans",
    "Feasibility Analysis",
    "SEO & Marketing",
    "Software Development",
    "Cloud Architecture",
    "Project Management",
  ];

  return (
    <footer 
      id="contact" 
      className="relative text-white py-16 overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Seamless Space Horizon - Blends from green-50 to website primary green */}
      <div className="absolute inset-0">
        {/* Base layer - Smooth green transition using theme colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-emerald-50/80 via-emerald-50 to-emerald-100" />
        
        {/* Top blend layer - ensures seamless connection with portfolio above */}
        <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-green-50 via-green-50/60 via-green-50/30 to-transparent" />
        
        {/* Primary semicircular horizon - Using website primary colors (#1B7F4E, #56B365) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220%] h-[140%]">
          <div 
            className="absolute inset-0 rounded-full opacity-85"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(86, 179, 101, 0.25) 0%, rgba(27, 127, 78, 0.45) 20%, rgba(15, 90, 53, 0.65) 42%, rgba(10, 70, 40, 0.85) 58%, rgba(6, 50, 30, 0.95) 70%, transparent 80%)',
            }}
          />
        </div>
        
        {/* Secondary atmospheric curve - softer blend with primary colors */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[120%]">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(86, 179, 101, 0.2) 30%, rgba(27, 127, 78, 0.4) 52%, rgba(15, 90, 53, 0.65) 68%, transparent 78%)',
              filter: 'blur(50px)',
            }}
          />
        </div>
        
        {/* Atmospheric glow at horizon edge - using primary-light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] h-[100%]">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 52%, transparent 0%, transparent 53%, rgba(86, 179, 101, 0.35) 61%, rgba(134, 239, 172, 0.25) 66%, rgba(27, 127, 78, 0.15) 70%, transparent 74%)',
              filter: 'blur(20px)',
              mixBlendMode: 'screen'
            }}
          />
        </div>
        
        {/* Light reflection on curved surface - bright primary-light accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[85%]">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(ellipse 90% 70% at 50% 58%, rgba(134, 239, 172, 0.22) 0%, rgba(86, 179, 101, 0.18) 32%, rgba(27, 127, 78, 0.12) 52%, transparent 68%)',
              filter: 'blur(40px)',
              opacity: 0.75
            }}
          />
        </div>
        
        {/* Subtle gradient overlay for cohesive transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-transparent to-transparent" />
      </div>
      
      {/* Ultra-subtle texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-5 sm:px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl mb-10 md:mb-12 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 md:mb-4 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary-light mb-5 md:mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch today and let&apos;s discuss how we can help your business grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={openContactModal}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
          >
            Let&apos;s Talk
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Logo and Description - Full width on mobile */}
          <div className="col-span-2 space-y-4">
            <Image
              src="/logos/MyCo_Network_Logo.png"
              alt="MyCo Network - Expert Consulting On-Demand"
              width={300}
              height={75}
              className="h-14 sm:h-16 w-auto object-contain mx-auto md:mx-0"
              style={{ maxWidth: '100%' }}
            />
            <p className="text-gray-800 leading-relaxed max-w-md text-sm sm:text-base text-center md:text-left">
              <strong>MyConsulting Network</strong> connects businesses with expert talent. Your trusted project partner for strategy, technology, marketing, and more.
            </p>
            
            {/* Contact Info */}
            <address className="not-italic space-y-2 flex flex-col items-center md:items-start">
              <a
                href="mailto:info@myconsulting.network"
                className="flex items-center gap-2 text-gray-800 hover:text-primary transition-colors min-h-[44px] text-sm sm:text-base"
              >
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <span>info@myconsulting.network</span>
              </a>
              <a
                href="https://www.linkedin.com/company/myconsultingnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-primary transition-colors min-h-[44px] text-sm sm:text-base"
              >
                <FiLinkedin className="w-5 h-5 flex-shrink-0" />
                <span>Connect on LinkedIn</span>
              </a>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-gray-900 font-heading">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-900 hover:text-primary hover:underline hover:decoration-2 transition-all cursor-pointer font-medium text-sm sm:text-base min-h-[36px] flex items-center"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
              <li>
                <Link
                  href="/business"
                  className="text-gray-900 hover:text-primary hover:underline hover:decoration-2 transition-all font-medium text-sm sm:text-base min-h-[36px] flex items-center"
                >
                  For Businesses
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="text-gray-900 hover:text-primary hover:underline hover:decoration-2 transition-all font-medium text-sm sm:text-base min-h-[36px] flex items-center"
                >
                  For Consultants
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          {/* Newsletter - New */}
          <div className="col-span-2 md:col-span-1">
             <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-gray-900 font-heading">Stay Updated</h3>
             <p className="text-gray-600 text-sm mb-4">Get the latest insights on consulting and project management.</p>
             <form className="space-y-2">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-secondary"
               />
               <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition-colors"
               >
                 Subscribe
               </motion.button>
             </form>
             
             {/* Social Share (Simulated) */}
             <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
               <span className="text-xs text-gray-500 font-medium">Share:</span>
               <button className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Share on Facebook">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.962.925-1.962 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </button>
               <button className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Share on Twitter">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.165-2.724c-.951.567-2.003.979-3.127 1.195a4.92 4.92 0 00-8.385 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.892 3.213 2.251 4.121a4.944 4.944 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.944 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.219c9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </button>
               <button className="text-gray-400 hover:text-blue-700 transition-colors" aria-label="Share on LinkedIn">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.832-3.037-1.832 0-2.111 1.448-2.111 2.942v5.664H9.395V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.442C0 23.174.792 23.948 1.771 23.948h20.451C23.2 23.948 24 23.174 24 22.171V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 md:pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 safe-area-bottom">
          <p className="text-gray-700 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} MyConsulting Network. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm" aria-label="Legal">
            <Link
              href="/privacy"
              className="text-gray-800 hover:underline hover:decoration-2 transition-all min-h-[36px] flex items-center"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-800 hover:underline hover:decoration-2 transition-all min-h-[36px] flex items-center"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
