"use client";

import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  const founders = [
    {
      name: "Ethan Lostroh",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/ethan-lostroh/",
    },
    {
      name: "Ranvir Thind",
      role: "CFO",
      linkedin: "https://www.linkedin.com/in/ranvir-thind/",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Seamless gradient blend from gray to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50/80 via-gray-50/40 to-white" />
      
      {/* Top fade overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent" />
      
      {/* Bottom fade overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Elegant separation line at top - subtle but noticeable */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30" />
      <div className="container-custom relative z-10">
        <ScrollAnimationWrapper>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary mb-8"
          >
            What Do We Do?
          </motion.h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-center text-secondary-light max-w-4xl mx-auto mb-16"
          >
            As a hub for all professional services, we spend our time organizing projects, vetting experts, and solving business challenges.
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.4}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center space-y-6 max-w-2xl mx-auto mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHandshake className="text-8xl md:text-9xl text-primary" />
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="mb-12 text-center">
           <div className="w-40 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-12" />
        </div>

        {/* Founders Section */}
        <ScrollAnimationWrapper>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-secondary mb-12"
          >
            Meet the Founders
          </motion.h2>
        </ScrollAnimationWrapper>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {founders.map((founder, index) => (
            <ScrollAnimationWrapper key={index} delay={0.2 + index * 0.1}>
              <FounderCard founder={founder} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
}

function FounderCard({ founder }: { founder: { name: string; role: string; linkedin: string } }) {
  const [imageError, setImageError] = useState(false);
  
  // Generate expected image path: /team/firstname-lastname.jpg (lowercase)
  const expectedImagePath = `/team/${founder.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  const shouldUseImage = !imageError;

  const CardContent = (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center text-center space-y-4 cursor-pointer group"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full relative overflow-hidden shadow-xl flex items-center justify-center ring-4 ring-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(27, 127, 78) 1px, transparent 0px)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* Initials/Image */}
        <div className="relative z-10 text-white text-3xl md:text-4xl font-bold w-full h-full flex items-center justify-center">
          {shouldUseImage ? (
            <Image 
              src={expectedImagePath} 
              alt={founder.name} 
              fill 
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            founder.name
              .split(" ")
              .map((n) => n[0])
              .join("")
          )}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl md:text-2xl text-secondary group-hover:text-primary transition-colors">
          {founder.name}
        </h3>
        <p className="text-base md:text-lg text-secondary-light font-medium">
          {founder.role}
        </p>
      </div>
    </motion.div>
  );

  return (
    <a 
      href={founder.linkedin} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      {CardContent}
    </a>
  );
}
