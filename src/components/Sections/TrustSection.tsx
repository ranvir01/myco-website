"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";
import CounterAnimation from "@/components/UI/CounterAnimation";

const clients = [
  {
    name: "Tabletop Village",
    logo: "/logos/clients/Tabletop_Village_Logo.png",
    testimonial: "MyCo helped us expand into school sponsorships and grow our bottom line by over 300%.",
    industry: "Gaming & Entertainment",
  },
  {
    name: "Blue Landscaping",
    logo: "/logos/clients/Blue_Landscaping_Services_Logo.png",
    testimonial: "Their SEO and website optimization transformed our online presence into real customer growth.",
    industry: "Landscaping Services",
  },
  {
    name: "VOPPL AR",
    logo: "/logos/clients/VopplAR_Logo.png",
    testimonial: "Great project management that kept our AR development on track and within budget.",
    industry: "Technology & AR",
  },
  {
    name: "Gibraltar Business Group",
    logo: "/logos/clients/Gibraltar_Business_Group_Logo.png",
    testimonial: "Professional feasibility analysis that gave us confidence in our strategic decisions.",
    industry: "Business Consulting",
  },
  {
    name: "Presidential Transportation",
    logo: "/logos/clients/Presidential_Transportation_Logo.png",
    testimonial: "Reliable consulting that helped streamline our operations significantly.",
    industry: "Transportation",
  },
  {
    name: "Atlantis STEM",
    logo: "/logos/clients/Atlantis_Steam_Logo.png",
    testimonial: "MyCo connected us with the right consultants for our educational technology initiatives.",
    industry: "Education & Tech",
  },
];

const stats = [
  { value: "12+", label: "Happy Clients", icon: "🤝" },
  { value: "25+", label: "Projects Completed", icon: "✅" },
  { value: "300%", label: "Avg. Growth Delivered", icon: "📈" },
  { value: "24/7", label: "Support Available", icon: "🔄" },
];

export default function TrustSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // Triple the clients list to ensure smooth infinite scroll without gaps
  const marqueeClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % clients.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <section
      id="trust"
      className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white"
      aria-labelledby="trust-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-5 sm:px-6">
        {/* Section Header */}
        <ScrollAnimationWrapper>
          <div className="text-center mb-8 md:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
            >
              Trusted by Growing Businesses
            </motion.span>
            <h2
              id="trust-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3 md:mb-4 font-heading"
            >
              Join Our <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary-light max-w-2xl mx-auto">
              From startups to established businesses, our network delivers results that matter.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Stats Row */}
        <ScrollAnimationWrapper delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mb-10 md:mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-soft border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <motion.span 
                  className="text-2xl md:text-3xl mb-1 md:mb-2 block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.icon}
                </motion.span>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1 font-heading">
                  <CounterAnimation value={stat.value} duration={2000} />
                </div>
                <div className="text-xs md:text-sm text-secondary-light font-medium group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Client Logos - Infinite Marquee */}
        <ScrollAnimationWrapper delay={0.2}>
          <div className="mb-8 md:mb-12 overflow-hidden relative group">
            <p className="text-center text-secondary-light text-xs sm:text-sm font-medium mb-6 md:mb-8 uppercase tracking-wider">
              Companies We&apos;ve Helped Grow
            </p>
            
            {/* Gradient masks for seamless edges */}
            <div className="absolute top-0 left-0 h-full w-8 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-8 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
            
            {/* Marquee Track */}
            <div className="flex w-full overflow-hidden mask-image-gradient">
              <div className="flex animate-marquee whitespace-nowrap py-4">
                {marqueeClients.map((client, index) => (
                  <div 
                    key={`${client.name}-${index}`}
                    className="mx-4 md:mx-8 w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                     <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={140}
                      height={60}
                      className="max-h-12 md:max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Testimonial Carousel */}
        <ScrollAnimationWrapper delay={0.3}>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.article
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center">
                    <Image
                      src={clients[currentTestimonial].logo}
                      alt={clients[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <blockquote className="text-lg md:text-xl text-secondary-light italic leading-relaxed mb-6">
                    &ldquo;{clients[currentTestimonial].testimonial}&rdquo;
                  </blockquote>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">{clients[currentTestimonial].name}</h3>
                    <p className="text-sm text-primary font-medium">{clients[currentTestimonial].industry}</p>
                  </div>
                  <div className="mt-4 flex justify-center text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-secondary hover:text-primary transition-all hidden sm:block"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-secondary hover:text-primary transition-all hidden sm:block"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === index ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <p className="text-secondary-light mb-4 text-sm md:text-base">
              Ready to become our next success story?
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const event = new CustomEvent("openQuoteModal");
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}