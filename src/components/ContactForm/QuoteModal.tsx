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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setIsOpen(false);
      reset();
    }, 3000);
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

          {/* Modal with glassmorphism effect */}
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
            className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 rounded-t-3xl" />
            
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all z-10 shadow-sm"
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
                    className="w-24 h-24 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Thank You!
                  </h3>
                  <p className="text-lg text-secondary-light">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      <span className="text-secondary">Let's </span>
                      <span 
                        className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent"
                      >
                        Talk
                      </span>
                    </h2>
                    <p className="text-secondary-light text-lg">
                      Tell us about your needs and we'll connect you with the right solution.
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

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-primary via-emerald-600 to-teal-600 hover:from-primary-dark hover:via-emerald-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : "Submit Request"}
                    </motion.button>
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

