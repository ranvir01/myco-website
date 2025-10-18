"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaUsers, FaBriefcase } from "react-icons/fa";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimationWrapper";

interface FAQSectionProps {
  activeMode: "business" | "talent" | null;
}

export default function FAQSection({ activeMode }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQs for Business/Clients
  const businessFAQs = [
    {
      question: "How does MyCo's consulting process work?",
      answer: "We follow a comprehensive project lifecycle: Requirements Gathering → Feasibility Analysis → Project Selection → Sourcing Talent → Project Planning → Execution → Monitoring & Control. Throughout the process, you'll have a dedicated project manager ensuring everything stays on track."
    },
    {
      question: "What makes MyCo different from traditional consulting firms?",
      answer: "MyCo operates on a network model with significantly lower costs than traditional firms. We provide full project lifecycle support, dedicated project managers, and low-cost consulting by leveraging our network of independent experts. You get enterprise-level expertise without the enterprise-level fees."
    },
    {
      question: "How quickly can you match me with talent?",
      answer: "Our sourcing process typically takes 3-7 business days depending on your requirements. We maintain a pre-vetted network of consultants across various industries, allowing us to quickly identify the right match for your specific needs."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including Gaming & Entertainment (Tabletop Village), Landscaping (Blue Landscaping), Technology (VOPPL AR), Financial Services (Goldstein & Company), Business Consulting (Gibraltar Business Group), Transportation (Presidential Transpo), and Education & Technology (Atlantis STEM)."
    },
    {
      question: "What kind of projects can MyCo handle?",
      answer: "We handle projects of all sizes - from creating business plans and marketing strategies to full-scale software development, operations consulting, and strategic planning. Recent examples include developing business plans for location moves, improving website conversions, and comprehensive feasibility analyses."
    },
    {
      question: "How do you ensure quality and project success?",
      answer: "Every project includes a dedicated project manager who oversees the entire lifecycle, 24/7 support availability, and rigorous monitoring and control processes. We maintain transparent communication and regular progress updates throughout your project."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing based on project scope and requirements. Our network model allows us to provide competitive rates significantly below traditional consulting firms while maintaining high quality. Contact us for a custom quote tailored to your specific needs."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer project monitoring and control even after initial completion, and can provide ongoing consulting relationships. Many of our clients work with us on multiple projects as their trusted consulting partner."
    }
  ];

  // FAQs for Talent/Consultants
  const talentFAQs = [
    {
      question: "How do I join the MyCo Network?",
      answer: "We're always looking for talented consultants across various specializations. Submit your profile through our contact form including your expertise, experience, and areas of interest. Our team reviews applications and reaches out to qualified candidates for an interview and vetting process."
    },
    {
      question: "What types of consultants are you looking for?",
      answer: "We seek consultants across diverse fields including Strategy & Operations, Product Design, Cloud Architecture, Software Engineering, Marketing, SEO, Civil Engineering, Electrical Engineering, UX Research, and more. We value expertise, professionalism, and the ability to deliver results."
    },
    {
      question: "How does project assignment work?",
      answer: "When a client project matches your expertise, our team reaches out with project details, scope, timeline, and compensation. You have full autonomy to accept or decline based on your availability and interest. We respect your independence and schedule."
    },
    {
      question: "What support does MyCo provide during projects?",
      answer: "Every project has a dedicated MyCo project manager who handles client communication, scope management, and administrative tasks. This allows you to focus on delivering great work while we handle project coordination and client relationship management."
    },
    {
      question: "How and when do I get paid?",
      answer: "Payment terms are established at the start of each project. We handle all invoicing and payment processing with clients, ensuring you receive timely compensation for your work. Specific terms vary by project but are always clearly communicated upfront."
    },
    {
      question: "Can I work on multiple MyCo projects simultaneously?",
      answer: "Absolutely! Many of our consultants work on multiple projects. We coordinate with you on availability and capacity to ensure you're not overcommitted. Your success and work-life balance are important to us."
    },
    {
      question: "What if I have a conflict with a client or project?",
      answer: "Our project managers serve as your advocate and intermediary. Any issues or concerns are addressed promptly through your PM. We maintain professional relationships and work to resolve conflicts fairly for all parties."
    },
    {
      question: "Do I need to be available 24/7?",
      answer: "No. While MyCo offers clients 24/7 support, this is managed at the network level. Individual consultants work normal business hours unless specific project requirements (and compensation) are agreed upon in advance."
    },
    {
      question: "Can I build long-term client relationships through MyCo?",
      answer: "Yes! Many consultants develop ongoing relationships with clients through multiple projects. We encourage these partnerships as they benefit everyone. MyCo continues to provide project management and support for all engagements."
    }
  ];

  const displayFAQs = activeMode === "business" ? businessFAQs : talentFAQs;
  const faqTitle = activeMode === "business" ? "For Businesses" : "For Consultants";
  const faqIcon = activeMode === "business" ? <FaBriefcase className="text-3xl" /> : <FaUsers className="text-3xl" />;

  if (!activeMode) return null;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30" />
      
      <div className="container-custom relative z-10">
        <ScrollAnimationWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-primary">{faqIcon}</div>
              <span className="text-lg font-semibold text-primary">{faqTitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              {activeMode === "business" 
                ? "Everything you need to know about working with MyCo Network"
                : "Everything you need to know about joining our consultant network"
              }
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="max-w-4xl mx-auto space-y-4">
          {displayFAQs.map((faq, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-secondary text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FaChevronDown className={`text-xl ${openIndex === index ? 'text-primary' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-secondary-light leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
            <p className="text-lg text-secondary-light mb-6">
              Still have questions? We're here to help!
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
              Get In Touch
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

