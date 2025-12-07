"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

        {/* Client Logos */}
        <ScrollAnimationWrapper delay={0.2}>
          <div className="mb-8 md:mb-12">
            <p className="text-center text-secondary-light text-xs sm:text-sm font-medium mb-6 md:mb-8 uppercase tracking-wider">
              Companies We&apos;ve Helped Grow
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 flex items-center justify-center h-16 md:h-20 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo - ${client.industry}`}
                    width={120}
                    height={40}
                    className="max-h-10 md:max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Testimonial Carousel */}
        <ScrollAnimationWrapper delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {clients.slice(0, 3).map((client, index) => (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-50 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={40}
                      height={40}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary text-sm md:text-base">{client.name}</h3>
                    <p className="text-xs text-secondary-light">{client.industry}</p>
                  </div>
                </div>
                <blockquote className="text-secondary-light italic leading-relaxed text-sm md:text-base">
                  &ldquo;{client.testimonial}&rdquo;
                </blockquote>
                <div className="mt-3 md:mt-4 flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.article>
            ))}
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

