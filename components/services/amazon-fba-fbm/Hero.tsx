'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen bg-primary flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-12 pt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold -skew-x-6 leading-[0.9] text-white mb-6 tracking-tighter">
              Your Premier Amazon
              <br />
              <span className="text-secondary">FBA</span> <br />
              Partner
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl leading-relaxed font-medium">
              Streamline your Amazon fulfillment and shipping with compliant FBA and FBM services.
            </p>
            <Link
              href="/contact"
              className="inline-block mb-4 bg-secondary hover:bg-secondary/90 text-primary font-black px-8 py-4 rounded-full text-md transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-full max-w-[600px]">
              <img
                src="/amazon-fba-fbm/hero.png"
                alt="Amazon FBA and FBM"
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
