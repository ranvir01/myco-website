"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";

interface NetworkSectionProps {
  activeMode: "business" | "talent" | null;
}

export default function NetworkSection({ activeMode }: NetworkSectionProps) {
  // Talent network data - what businesses see
  const talents = [
    { name: "Christy Johnson", role: "Advisor | Strategy", image: null },
    { name: "Pim Jitnavasathien", role: "Product Designer", image: null },
    { name: "Sahil Tayade", role: "Cloud Architect", image: null },
    { name: "Ha Tien Nguyen", role: "UX Researcher", image: null },
    { name: "Reuben Narad", role: "PhD Student - Operations", image: null },
    { name: "Sam Foster", role: "Software Architect", image: null },
    { name: "Tawsif Ahmed", role: "Electrical Engineer", image: null },
    { name: "Terrell Kelly", role: "Operations Consultant", image: null },
    { name: "JD Kaim", role: "Software Engineer", image: null },
    { name: "Mia Chen", role: "Marketing Designer", image: null },
    { name: "Henos Adhana", role: "SEO Consultant", image: null },
    { name: "Bhagat Subedi", role: "Civil Engineer", image: null },
  ];

  // Client network data - Real MyCo Network clients
  const clients = [
    { name: "Tabletop Village", role: "Gaming & Entertainment", image: null },
    { name: "Blue Landscaping Services", role: "Landscaping Services", image: null },
    { name: "VopplAR", role: "Artificial Intelligence", image: null },
    { name: "Goldstein & Company LLC", role: "Financial Services", image: null },
    { name: "Gibraltar Business Group", role: "Healthcare", image: null },
    { name: "Presidential Transportation", role: "Transportation Services", image: null },
    { name: "Atlantis STEM", role: "Education & Technology", image: null },
    { name: "Thind Transport", role: "Logistics & Distribution", image: null },
  ];

  const displayData = activeMode === "business" ? talents : clients;
  const networkTitle = activeMode === "business" ? "Our Network of Talents" : "Our Trusted Clients";
  const networkDescription = activeMode === "business" 
    ? "Our diverse network of expert consultants spans industries and expertise. Each professional brings unique skills and proven results."
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
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-secondary-light">
                    {member.role}
                  </p>
                </div>
              </motion.div>
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

