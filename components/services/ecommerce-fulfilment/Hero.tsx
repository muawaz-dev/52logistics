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
              Tech-Driven <br />
              <span className="text-secondary">Ecommerce</span> <br />
              Fulfillment Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed font-medium">
              Simplify your fulfillment operations, cut shipping costs, and manage your inventory effortlessly.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-black px-8 py-4 rounded-full text-md transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center relative h-[600px]"
          >
            {/* Phone 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-10 w-[280px] h-[550px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden z-20"
            >
              <div className="bg-gray-100 h-full w-full p-4">
                <div className="w-full h-40 bg-gray-200 rounded-2xl mb-4" />
                <div className="w-3/4 h-6 bg-primary/20 rounded-full mb-2" />
                <div className="w-1/2 h-4 bg-primary/10 rounded-full mb-8" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 bg-secondary/20 rounded-xl" />
                  <div className="h-20 bg-secondary/20 rounded-xl" />
                </div>
                <div className="mt-auto absolute bottom-8 left-4 right-4 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xs">
                  ADD TO CART
                </div>
              </div>
            </motion.div>

            {/* Phone 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 bottom-10 w-[280px] h-[550px] bg-[#f8f8f8] rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden z-10"
            >
              <div className="p-6">
                <div className="w-full text-primary font-black text-xl mb-6">Shopping Cart</div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 mb-4 items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
                    <div className="flex-grow">
                      <div className="w-full h-3 bg-primary/20 rounded-full mb-1" />
                      <div className="w-1/2 h-2 bg-primary/10 rounded-full" />
                    </div>
                  </div>
                ))}
                <div className="mt-12 py-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 font-bold text-sm">Total</span>
                    <span className="text-primary font-black">$560.00</span>
                  </div>
                </div>
                <div className="mt-4 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm uppercase">
                  Checkout
                </div>
              </div>
            </motion.div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-secondary/30 rounded-full animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
