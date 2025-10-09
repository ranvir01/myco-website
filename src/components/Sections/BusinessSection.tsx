"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaPhoneAlt, FaCogs } from "react-icons/fa";
import Card from "@/components/UI/Card";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";

export default function BusinessSection() {
  const services = [
    {
      icon: <FaUserTie className="text-6xl text-primary mb-4" />,
      title: "Project Manager",
      description:
        "Dedicated project managers to oversee your initiatives from start to finish. Expert coordination and execution.",
    },
    {
      icon: <FaPhoneAlt className="text-6xl text-primary mb-4" />,
      title: "24/7 Support",
      description:
        "Round-the-clock support for your business needs. We're always available when you need us most.",
    },
    {
      icon: <FaCogs className="text-6xl text-primary mb-4" />,
      title: "Solve Any Problem",
      description:
        "From strategy to execution, our expert consultants tackle any business challenge with proven solutions.",
    },
  ];

  return (
    <section
      id="business"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Seamless gradient blend from hero green to light gray */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-emerald-50/50 via-gray-50 to-gray-100" />
      
      {/* Top fade overlay to blend with hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-50 to-transparent" />
      
      {/* Bottom fade overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      <div className="container-custom relative z-10">
        <ScrollAnimationWrapper>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary mb-16"
          >
            Business
          </motion.h2>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 0.15}>
              <Card className="text-center h-full min-h-[320px] flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-light text-lg leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

