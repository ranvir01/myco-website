"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  userType: z.enum(["business", "talent"]),
  companyOrSkills: z.string().min(2, "This field is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "business",
    },
  });

  const userType = watch("userType");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openQuoteModal", handleOpen);
    return () => window.removeEventListener("openQuoteModal", handleOpen);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/mgvndqbr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          userType: data.userType === "business" ? "Business/Client" : "Consultant/Talent",
          companyOrSkills: data.userType === "business" 
            ? `Company: ${data.companyOrSkills}` 
            : `Skills: ${data.companyOrSkills}`,
          message: data.message,
          _subject: `New ${data.userType === "business" ? "Business" : "Talent"} Inquiry from ${data.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 4 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsOpen(false);
        reset();
      }, 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("There was an error submitting your request. Please try again or email us directly.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Enhanced Backdrop with gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-slate-800/60 to-gray-900/80 backdrop-blur-md"
          />

          {/* Modal with enhanced glassmorphism effect */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              opacity: { duration: 0.25 }
            }}
            className="relative bg-gradient-to-br from-white via-white to-gray-50/30 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-200/60"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 40px rgba(27, 127, 78, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 rounded-t-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 opacity-50 blur-sm animate-pulse" />
            </div>
            
            {/* Decorative corner gradients */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-bl-3xl pointer-events-none" />
            
            {/* Enhanced Close Button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-600 hover:text-gray-800 transition-all z-10 shadow-md hover:shadow-lg border border-gray-300/50"
            >
              <HiX className="text-2xl" />
            </motion.button>

            <div className="p-8 md:p-10 pt-10">
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="text-center py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", damping: 10 }}
                    className="relative w-28 h-28 mx-auto mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-600 rounded-full animate-pulse opacity-30 blur-xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <svg
                        className="w-14 h-14 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Thank You!
                    </span>
                  </h3>
                  <p className="text-lg text-secondary-light max-w-md mx-auto">
                    Your request has been received. We&apos;ll get back to you within 24 hours.
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-sm text-primary/70 mt-4"
                  >
                    Check your email for confirmation
                  </motion.p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60px" }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="h-1 bg-gradient-to-r from-primary to-emerald-500 rounded-full mb-4"
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      <span className="text-secondary">Let&apos;s </span>
                      <span 
                        className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent"
                      >
                        Talk
                      </span>
                    </h2>
                    <p className="text-secondary-light text-lg leading-relaxed">
                      Tell us about your needs and we&apos;ll connect you with the right solution. 
                      <span className="block mt-2 text-sm text-primary/60">✓ Response within 24 hours</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* User Type Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-3">
                        I am a:
                      </label>
                      <div className="flex gap-4">
                        <label className="flex-1">
                          <input
                            type="radio"
                            value="business"
                            {...register("userType")}
                            className="sr-only"
                          />
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              userType === "business"
                                ? "border-primary bg-gradient-to-br from-primary/10 to-emerald-500/5 shadow-sm"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            <span className={`font-semibold ${userType === "business" ? "text-primary" : "text-secondary"}`}>
                              Business
                            </span>
                          </motion.div>
                        </label>
                        <label className="flex-1">
                          <input
                            type="radio"
                            value="talent"
                            {...register("userType")}
                            className="sr-only"
                          />
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              userType === "talent"
                                ? "border-primary bg-gradient-to-br from-primary/10 to-emerald-500/5 shadow-sm"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            <span className={`font-semibold ${userType === "talent" ? "text-primary" : "text-secondary"}`}>
                              Talent
                            </span>
                          </motion.div>
                        </label>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.name.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Email *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            <span>⚠</span> {errors.email.message}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Phone *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300"
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            <span>⚠</span> {errors.phone.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Dynamic Field */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        {userType === "business"
                          ? "Company Name *"
                          : "Your Skills *"}
                      </label>
                      <input
                        {...register("companyOrSkills")}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300"
                        placeholder={
                          userType === "business"
                            ? "Acme Corporation"
                            : "Software Development, Project Management"
                        }
                      />
                      {errors.companyOrSkills && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.companyOrSkills.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300 resize-none"
                        placeholder="Tell us about your project or what you're looking for..."
                      />
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.message.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Enhanced Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="relative w-full bg-gradient-to-r from-primary via-emerald-600 to-teal-600 hover:from-primary-dark hover:via-emerald-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl overflow-hidden group"
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-3">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending Your Request...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Submit Request
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        )}
                      </span>
                    </motion.button>
                    
                    {/* Trust badge */}
                    <p className="text-center text-xs text-secondary-light/60 mt-4">
                      🔒 Your information is secure and will never be shared
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

