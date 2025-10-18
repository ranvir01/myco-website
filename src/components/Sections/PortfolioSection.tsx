"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaChartLine, FaPalette } from "react-icons/fa";
import Card from "@/components/UI/Card";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";

export default function PortfolioSection() {
  // Real MyCo Network project case studies
  const projects = [
    {
      icon: <FaBriefcase className="text-5xl text-primary mb-4" />,
      title: "Business Plan Development",
      description: "Helping Tabletop Village create a comprehensive business plan for their location move. Delivered professional documentation that satisfied landlord requirements within one week.",
      tags: ["Strategy", "Planning", "Documentation"],
      client: "Tabletop Village",
    },
    {
      icon: <FaChartLine className="text-5xl text-primary mb-4" />,
      title: "Website Optimization & Marketing",
      description: "Transformed Blue Landscaping's online presence with strategic SEO and conversion optimization, turning their extra budget into measurable customer growth.",
      tags: ["SEO", "Marketing", "Growth"],
      client: "Blue Landscaping",
    },
    {
      icon: <FaCode className="text-5xl text-primary mb-4" />,
      title: "Feasibility Analysis & Planning",
      description: "Comprehensive competitor analysis, project lifecycle planning, and resource budgeting for technology initiatives. Data-driven insights for strategic decision-making.",
      tags: ["Analysis", "Planning", "Research"],
      client: "Multiple Clients",
    },
    {
      icon: <FaPalette className="text-5xl text-primary mb-4" />,
      title: "Full Project Lifecycle Support",
      description: "From requirements gathering to project execution and monitoring - we provide dedicated project managers, low-cost consulting, and 24/7 support throughout your entire project journey.",
      tags: ["PM", "Support", "Execution"],
      client: "All Clients",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Seamless gradient blend from white to light green for footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/40 via-emerald-50/30 to-green-50" />
      
      {/* Top fade overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
      
      {/* Bottom fade overlay to blend with footer */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-green-50 to-transparent" />
      
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary mb-6"
          >
            Our <span className="text-primary">Success Stories</span>
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
            Real results from real clients. See how MyCo Network has helped businesses 
            solve complex challenges with our dedicated project managers and expert consultant network.
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 0.1}>
              <Card className="h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-sm font-semibold text-primary mb-3">
                    Client: {project.client}
                  </p>
                )}
                <p className="text-secondary-light text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-16"
          >
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
    </section>
  );
}

