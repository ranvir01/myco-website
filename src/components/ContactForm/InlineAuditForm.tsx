"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name is required"),
  industry: z.string().min(1, "Please select your industry"),
  timeSink: z.string().min(1, "Please pick the closest match"),
});

const industryOptions = [
  "Home & Field Services",
  "Trucking & Logistics",
  "Restaurants, Local Retail & Entertainment",
  "Professional Services",
  "Healthcare & Wellness",
  "Real Estate & Property Management",
  "Other",
];

const timeSinkOptions = [
  "Answering calls & messages",
  "Chasing leads & follow-ups",
  "Admin, invoicing & paperwork",
  "Marketing & content",
  "Not sure — that's why I want the audit",
];

type FormData = z.infer<typeof formSchema>;

/**
 * Embedded (non-modal) lead form for the Free AI Opportunity Audit.
 * Matches QuoteModal's visual style and submits to the same Formspree endpoint.
 */
export default function InlineAuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      timeSink: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgvndqbr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          industry: data.industry,
          biggestTimeSink: data.timeSink,
          formType: "free-ai-audit",
          _subject: `Free AI Audit Request from ${data.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert(
        "There was an error submitting your request. Please try again or email us at info@myconsulting.network."
      );
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300";

  return (
    <div
      className="relative bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl shadow-2xl border-2 border-gray-200/60 overflow-hidden"
      style={{
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 40px rgba(27, 127, 78, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-emerald-500 to-teal-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 opacity-50 blur-sm animate-pulse" />
      </div>

      {/* Decorative corner gradients */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="relative p-7 md:p-10 pt-10">
        {isSuccess ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Your Audit Is Booked
              </span>
            </h3>
            <p className="text-lg text-secondary-light max-w-md mx-auto">
              Check your email — we&apos;ll confirm your 30-minute call, and
              your written 5-point plan will be delivered within 48 hours.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-primary/70 mt-4"
            >
              No obligation. Keep the plan either way.
            </motion.p>
          </motion.div>
        ) : (
          <>
            <div className="mb-8 relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-primary to-emerald-500 rounded-full mb-4"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading">
                <span className="text-secondary">Book Your </span>
                <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Free Audit
                </span>
              </h3>
              <p className="text-secondary-light leading-relaxed">
                Takes about a minute. We&apos;ll reply within 24 hours to
                schedule your call.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="audit-name"
                  className="block text-sm font-semibold text-secondary mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="audit-name"
                  {...register("name")}
                  className={inputClasses}
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
                  <label
                    htmlFor="audit-email"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="audit-email"
                    {...register("email")}
                    type="email"
                    className={inputClasses}
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
                  <label
                    htmlFor="audit-phone"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    id="audit-phone"
                    {...register("phone")}
                    type="tel"
                    className={inputClasses}
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

              {/* Company and Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="audit-company"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    id="audit-company"
                    {...register("company")}
                    className={inputClasses}
                    placeholder="Acme Landscaping"
                  />
                  {errors.company && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.company.message}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="audit-industry"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Industry *
                  </label>
                  <select
                    id="audit-industry"
                    {...register("industry")}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.industry.message}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Biggest time-sink */}
              <div>
                <label
                  htmlFor="audit-timesink"
                  className="block text-sm font-semibold text-secondary mb-2"
                >
                  What eats the most of your time? *
                </label>
                <select
                  id="audit-timesink"
                  {...register("timeSink")}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Pick the closest match
                  </option>
                  {timeSinkOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.timeSink && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.timeSink.message}
                  </motion.p>
                )}
              </div>

              {/* Submit */}
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
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Booking Your Audit...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Get My Free AI Audit
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  )}
                </span>
              </motion.button>

              {/* Trust badge */}
              <p className="text-center text-xs text-secondary-light/60 mt-4">
                🔒 Free, no obligation. Your information is secure and will
                never be shared.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
