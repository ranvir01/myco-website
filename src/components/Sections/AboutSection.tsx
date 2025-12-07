"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaProjectDiagram, FaUserTie, FaClock } from "react-icons/fa";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";

const services = [
  {
    icon: FaProjectDiagram,
    title: "Full Project Lifecycle",
    description: "From requirements to execution, we manage every phase of your project.",
  },
  {
    icon: FaUserTie,
    title: "Dedicated Project Managers",
    description: "Your own PM ensures everything stays on track and within budget.",
  },
  {
    icon: FaClock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
          <header className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
            >
              About MyConsulting Network
            </motion.span>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary mb-8 font-heading"
            >
              What Do We Do?
            </motion.h2>
          </header>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-center text-secondary-light max-w-4xl mx-auto mb-12"
          >
            As a hub for all professional services, we spend our time <strong>organizing projects</strong>, <strong>vetting consultants</strong>, and <strong>solving business challenges</strong>. Whether you need strategy consulting, software development, SEO optimization, or project management — we connect you with the right talent.
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.3}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center space-y-6 max-w-2xl mx-auto mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <FaHandshake className="text-8xl md:text-9xl text-primary relative z-10" aria-hidden="true" />
            </motion.div>
            <p className="text-lg text-secondary-light text-center max-w-lg">
              We believe in partnerships, not transactions. Your success is our success.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Service Cards */}
        <ScrollAnimationWrapper delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <service.icon className="text-4xl text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-secondary mb-2 font-heading">{service.title}</h3>
                <p className="text-secondary-light">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <div className="mb-12 text-center">
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-12" />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
    </section>
  );
}
