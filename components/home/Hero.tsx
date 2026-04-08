'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between bg-white bg-grid-pattern">
        {/* Floating Background Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="glow-orb-orange w-96 h-96 top-40 right-20"
        />

        {/* Background Image Container */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/home/hero.png"
            alt="Logistics Background"
            fill
            priority
            className="object-cover object-right lg:object-top"
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-10 flex-grow flex flex-col items-start bg-transparent pointer-events-none">

          {/* Hero Title and Description */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
            }}
            className="mt-20 max-w-3xl pointer-events-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold -skew-x-6 leading-[0.8] text-primary mb-6 tracking-tighter flex flex-col">
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
                className="block"
              >
                YOUR TRUSTED
              </motion.span>
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
                className="block mt-4"
              >
                <span className="text-7xl md:text-9xl text-secondary">3PL</span> PARTNER
              </motion.span>
            </h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8, ease: "easeOut" } } }}
              className="text-xl md:text-3xl font-bold text-primary tracking-tight"
            >
              Smart Logistics. Seamless Delivery. Scalable Growth.
            </motion.p>
          </motion.div>
        </div>

        {/* Stylized Bottom Bar Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="relative z-20 w-full"
        >
          {/* Slanted Accent Segment */}
          <div className="absolute left-0 bottom-0 w-[600px] md:w-[950px] h-28 md:h-40">
            {/* Custom Slanted Background */}
            <div
              className="absolute w-[500px] md:w-[850px] inset-0 bg-primary shadow-[0_-10px_30px_rgba(0,0,0,0.15)]"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            ></div>

            {/* Orange Highlight Border on Top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="absolute top-0 left-0 h-1 bg-secondary origin-left"
              style={{ width: '80%' }}
            ></motion.div>

            <div className="relative h-full flex flex-col justify-center px-6 md:px-20 pointer-events-none">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-white text-lg md:text-3xl font-black tracking-wide leading-tight uppercase"
              >
                COMPLETE FULFILLMENT SOLUTIONS<br />
                <span className="text-secondary">BUILT AROUND YOUR BUSINESS</span>
              </motion.h3>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
