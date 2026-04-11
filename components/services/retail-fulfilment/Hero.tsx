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
              B2B <br />
              <span className="text-secondary">Ecommerce</span> <br />
              Fulfillment Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed font-medium">
              Scale and streamline your B2B operations with adaptive retail fulfillment solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-black px-8 py-4 rounded-full text-md transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Right Content - Retailer Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative h-[600px]"
          >
            {/* Retailer Cards */}
            {[
              { src: "/retail-fulfilment/amazon.png", alt: "Amazon", className: "top-0 left-0 w-64 h-32", delay: 0, y: [0, -15, 0] },
              { src: "/retail-fulfilment/walmart.png", alt: "Walmart", className: "top-10 -right-10 w-72 h-36", delay: 0.5, y: [0, 15, 0] },
              { src: "/retail-fulfilment/best-buy.png", alt: "Best Buy", className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 z-20", delay: 0.8, y: [0, -20, 0] },
              { src: "/retail-fulfilment/ebay.png", alt: "eBay", className: "bottom-10 -left-10 w-56 h-32", delay: 1, y: [0, -10, 0] },
              { src: "/retail-fulfilment/the-home-depot.png", alt: "The Home Depot", className: "bottom-0 right-10 w-64 h-32", delay: 1.5, y: [0, 12, 0] },
            ].map((retailer, idx) => (

              <motion.div
                key={idx}
                animate={{ y: retailer.y }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: retailer.delay }}
                className={`absolute ${retailer.className} bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl flex items-center justify-center`}
              >
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">
                  <img
                    src={retailer.src}
                    alt={retailer.alt}
                    className="max-w-full max-h-full object-contain filter drop-shadow-xl"
                  />
                </div>
              </motion.div>
            ))}


            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-secondary/30 rounded-full animate-ping [animation-duration:3s]" />
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
