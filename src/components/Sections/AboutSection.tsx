"use client";

import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";

export default function AboutSection() {
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
            Who are we?
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
            We source projects with business owners and source the talent to
            complete it.
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.4}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center space-y-6 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHandshake className="text-8xl md:text-9xl text-primary" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary text-center">
              Project Broker
            </h3>
            <p className="text-lg md:text-xl text-secondary-light text-center leading-relaxed">
              Connecting businesses with the right talent at the right time.
              We&apos;re your trusted partner in making projects successful through
              our network of expert independent consultants.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
}

