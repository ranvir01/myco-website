"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] flex items-center justify-center bg-gray-50 overflow-hidden relative">
        {/* Animated Background Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary/20 to-emerald-500/20 mb-4 font-heading select-none">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">
              Page Not Found
            </h2>
            <p className="text-lg text-secondary-light max-w-lg mx-auto mb-10">
              The page you're looking for seems to have wandered off. Let's get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <FiHome className="w-5 h-5" />
                  Back Home
                </motion.button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-secondary border-2 border-gray-200 px-8 py-3.5 rounded-xl font-semibold transition-all hover:border-gray-300"
              >
                <FiArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}