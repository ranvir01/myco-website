"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBriefcase, FaCode, FaChartLine, FaRobot } from "react-icons/fa";
import Card from "@/components/UI/Card";
import TiltCard from "@/components/UI/TiltCard";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import TextReveal from "@/components/UI/TextReveal";

export default function PortfolioSection() {
  // Real MyCo Network project case studies
  const projects = [
    {
      icon: <FaChartLine className="text-5xl text-primary mb-4" aria-hidden="true" />,
      title: "Growth Website & Local SEO",
      description: "Rebuilt Blue Landscaping's online presence with strategic SEO and conversion-focused optimization — turning their website into a steady source of real customer growth.",
      tags: ["AI Growth Website", "Local SEO", "Lead Capture"],
      client: "Blue Landscaping",
      result: "Real customer growth",
    },
    {
      icon: <FaBriefcase className="text-5xl text-primary mb-4" aria-hidden="true" />,
      title: "Marketing Strategy & New Revenue",
      description: "Creatively devised a school-sponsorship marketing strategy for Tabletop Village, then implemented the proof of concept ourselves — opening a whole new channel of customers.",
      tags: ["Strategy", "Marketing", "Implementation"],
      client: "Tabletop Village",
      result: "New revenue channel",
    },
    {
      icon: <FaCode className="text-5xl text-primary mb-4" aria-hidden="true" />,
      title: "Custom Projects & Feasibility Studies",
      description: "Feasibility analysis and competitor research that gave Gibraltar Business Group confidence in their strategy, and hands-on project management that kept VOPPL AR's development on track and on budget.",
      tags: ["Feasibility", "Custom Projects", "Project Management"],
      client: "Gibraltar Business Group & VOPPL AR",
      result: "Confident decisions",
    },
    {
      icon: <FaRobot className="text-5xl text-primary mb-4" aria-hidden="true" />,
      title: "AI & Automation, End to End",
      description: "Every engagement starts with a free scoping call. We match vetted talent, assign a dedicated project manager, and put AI to work on websites, follow-up, and admin busywork — with 24/7 support.",
      tags: ["AI & Automation", "Dedicated PM", "24/7 Support"],
      client: "Every MyCo Project",
      result: "Weeks, not months",
    },
  ];

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-12 md:py-32 relative overflow-hidden"
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
      
      <div className="container-custom relative z-10 px-5 sm:px-6">
        <ScrollAnimationWrapper>
          <header className="text-center mb-8 md:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
            >
              Our Work
            </motion.span>
            <div className="flex justify-center mb-4 md:mb-6">
              <TextReveal 
                text="What We've Done" 
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center text-secondary font-heading justify-center"
              />
            </div>
          </header>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-center text-secondary-light mb-10 md:mb-16 max-w-3xl mx-auto"
          >
            Real projects for real small businesses. Here&apos;s how we&apos;ve put the right people — and AI — to work for clients like you.
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="flex md:grid md:grid-cols-2 gap-5 md:gap-12 overflow-x-auto md:overflow-visible snap-x-mandatory scrollbar-hide pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center">
            <ScrollAnimationWrapper delay={index * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full hover-lift">
                  <article>
                    <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="[&>svg]:text-4xl [&>svg]:md:text-5xl [&>svg]:text-primary [&>svg]:mb-3 [&>svg]:md:mb-4"
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2 md:mb-3 font-heading">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-sm font-semibold text-primary mb-2">
                      {project.client}
                    </p>
                  )}
                  {project.result && (
                    <p className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-2 md:mb-3">
                      <span>✓</span> {project.result}
                    </p>
                  )}
                  <p className="text-secondary-light text-sm sm:text-base md:text-lg mb-3 md:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2" role="list" aria-label="Project tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        role="listitem"
                        className="px-2.5 py-1 bg-gray-100 text-secondary-light rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  </article>
                </Card>
              </TiltCard>
            </ScrollAnimationWrapper>
            </div>
          ))}
        </div>

        <ScrollAnimationWrapper delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-10 md:mt-16"
          >
            <p className="text-secondary-light mb-4 text-sm md:text-base">
              Ready to add your success story to our portfolio?
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
              }}
              className="bg-primary hover:bg-primary-dark text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 min-h-[48px] touch-manipulation"
            >
              Let&apos;s Talk
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <p className="mt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-semibold text-sm md:text-base transition-colors duration-200"
              >
                Explore our AI services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
