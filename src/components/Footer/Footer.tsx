"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Business", id: "business" },
    { name: "Talent", id: "talent" },
    { name: "Portfolio", id: "portfolio" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-2xl" />,
      url: "https://www.facebook.com/myconsultingnetwork",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/company/myconsultingnetwork",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/myconsultingnetwork",
    },
  ];

  return (
    <footer className="relative text-white py-16 overflow-hidden">
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

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/logos/MyConsulting_Network_Logo_PNG.png"
              alt="MyConsulting Network"
              width={250}
              height={60}
              className="h-14 w-auto brightness-0"
            />
            <p className="text-gray-800 leading-relaxed">
              Connecting businesses with expert talent. Your trusted project
              broker for success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-900 hover:underline hover:decoration-2 transition-all"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-800">
                Email:{" "}
                <a
                  href="mailto:info@myconsultingnetwork.com"
                  className="text-gray-900 hover:underline hover:decoration-2 transition-all"
                >
                  info@myconsultingnetwork.com
                </a>
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-900 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} MyConsulting Network. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-800 hover:underline hover:decoration-2 transition-all">
              Privacy Policy
            </button>
            <button className="text-gray-800 hover:underline hover:decoration-2 transition-all">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

