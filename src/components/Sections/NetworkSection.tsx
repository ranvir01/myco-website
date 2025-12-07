"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import { useState } from "react";
import { ThindTransportLogo } from "@/components/Logos/ThindTransportLogo";

interface NetworkSectionProps {
  activeMode: "business" | "talent" | null;
}

interface NetworkMember {
  name: string;
  role: string;
  image: string | null;
  linkedin: string | null;
  LogoComponent?: React.ComponentType<{ className?: string }>;
}

export default function NetworkSection({ activeMode }: NetworkSectionProps) {
  // Talent network data - what businesses see
  const talents = [
    {
      name: "Ben Niewiadomski",
      role: "Strategy Consultant",
      image: null,
      linkedin: "https://www.linkedin.com/in/bniewiadomski1",
    },
    {
      name: "Pim Jitnavasathien",
      role: "Product Designer",
      image: null,
      linkedin: "https://www.linkedin.com/in/pim-jitnavasathien",
    },
    {
      name: "Shane Blair",
      role: "Software Engineer",
      image: null,
      linkedin: "https://www.linkedin.com/in/mcho6967",
    },
    {
      name: "Ha Tien Nguyen",
      role: "UX Researcher",
      image: null,
      linkedin: "https://www.linkedin.com/in/ha-tien-nguyen",
    },
    {
      name: "Jonathan Murguia",
      role: "Mechanical Engineer",
      image: null,
      linkedin: "https://www.linkedin.com/in/jonathan-murguia",
    },
    {
      name: "Tawsif Ahmed",
      role: "Electrical & Computer Engineer",
      image: null,
      linkedin: "https://www.linkedin.com/in/tawsifahmed29",
    },
    {
      name: "Henos Adhana",
      role: "SEO Consultant",
      image: null,
      linkedin: "https://www.linkedin.com/in/henos",
    },
    {
      name: "Ulysses Vazquez-Perez",
      role: "Business Analyst",
      image: null,
      linkedin: "https://www.linkedin.com/in/ulysses-vazquez",
    },
  ];

  // Client network data - Real MyCo Network clients
  const clients = [
    { name: "Tabletop Village", role: "Gaming & Entertainment", image: "/logos/clients/Tabletop_Village_Logo.png", linkedin: null },
    { name: "Blue Landscaping Services", role: "Landscaping Services", image: "/logos/clients/Blue_Landscaping_Services_Logo.png", linkedin: null },
    { name: "VopplAR", role: "Artificial Intelligence", image: "/logos/clients/VopplAR_Logo.png", linkedin: null },
    { name: "Goldstein & Company LLC", role: "Financial Services", image: "/logos/clients/Goldstein__Company_Logo.png", linkedin: null },
    { name: "Gibraltar Business Group", role: "Healthcare", image: "/logos/clients/Gibraltar_Business_Group_Logo.png", linkedin: null },
    { name: "Presidential Transportation", role: "Transportation Services", image: "/logos/clients/Presidential_Transportation_Logo.png", linkedin: null },
    { name: "Atlantis STEM", role: "Education & Technology", image: "/logos/clients/Atlantis_Steam_Logo.png", linkedin: null },
    { name: "Thind Transport", role: "Logistics & Distribution", image: null, linkedin: null, LogoComponent: ThindTransportLogo },
  ];

  const displayData = activeMode === "business" ? talents : clients;
  const networkTitle = activeMode === "business" ? "Our Network of Consultants" : "Our Trusted Clients";
  const networkDescription = activeMode === "business" 
    ? "Our diverse network of consultants spans industries and specializations. Each professional brings unique skills and proven results."
    : "We partner with innovative companies across various sectors. These organizations trust us to connect them with top-tier talent.";

  return (
    <section id="network" className="py-20 md:py-32 relative overflow-hidden">
      {/* Seamless white gradient with subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/20 via-gray-50/30 via-gray-50/20 to-white" />
      
      {/* Top fade overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
      
      {/* Bottom fade overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Elegant separation line at top - subtle but noticeable */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30" />
      <div className="container-custom relative z-10">
        <ScrollAnimationWrapper>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
          >
            {activeMode === "business" ? "Meet our " : "Meet our "}
            <span className="text-primary">{networkTitle.split(' ').slice(-1)}</span>
          </motion.h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-center text-secondary-light mb-16 max-w-3xl mx-auto"
          >
            {networkDescription}
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {displayData.map((member, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 0.05}>
              <NetworkCard member={member} index={index} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper delay={0.6}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Plus many more!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
              }}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1B7F4E 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
}

function NetworkCard({ member, index }: { member: NetworkMember; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  // Generate expected image path: /team/firstname-lastname.jpg (lowercase)
  const expectedImagePath = `/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  const isClientLogo = member.image && member.image.includes('/logos/clients/');
  const shouldUseImage = !imageError;

  const CardContent = (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex flex-col items-center text-center space-y-3 ${member.linkedin ? "cursor-pointer group" : ""}`}
    >
      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full relative overflow-hidden shadow-lg flex items-center justify-center ${isClientLogo || member.LogoComponent ? "bg-white" : "bg-gradient-to-br from-primary to-primary-light"}`}>
        {/* Background Pattern (Only for non-logo items) */}
        {!isClientLogo && !member.LogoComponent && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light z-0" />
            <div 
              className="absolute inset-0 z-0 opacity-30" 
              style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(27, 127, 78) 1px, transparent 0px)', 
                backgroundSize: '40px 40px' 
              }} 
            />
          </>
        )}

        {/* Initials/Image/Logo */}
        <div className="relative z-10 text-white text-2xl md:text-3xl font-bold w-full h-full flex items-center justify-center">
          {member.LogoComponent ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <member.LogoComponent className="w-full h-full object-contain" />
            </div>
          ) : isClientLogo ? (
            <div className="w-full h-full flex items-center justify-center p-3">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <Image 
                src={member.image!} 
                alt={member.name} 
                width={128}
                height={128}
                className={`object-contain w-full h-full transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                priority={index < 4}
                quality={90}
                onLoadingComplete={() => setImageLoading(false)}
                onError={() => setImageError(true)}
              />
            </div>
          ) : shouldUseImage ? (
            <>
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <Image 
                src={member.image || expectedImagePath} 
                alt={member.name} 
                fill 
                sizes="(max-width: 768px) 96px, 128px"
                className={`object-cover transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                priority={index < 4}
                quality={90}
                onLoadingComplete={() => setImageLoading(false)}
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
          )}
        </div>
      </div>
      <div>
        <h3 className={`font-semibold text-secondary text-sm md:text-base ${member.linkedin ? "group-hover:text-primary transition-colors" : ""}`}>
          {member.name}
        </h3>
        <p className="text-xs md:text-sm text-secondary-light">
          {member.role}
        </p>
      </div>
    </motion.div>
  );

  return member.linkedin ? (
    <a 
      href={member.linkedin} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}
