'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ResultsSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('home-results');

  return (
    <section className="w-full bg-white bg-grid-pattern py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-30">
        <div className="glow-orb-navy w-[400px] h-[400px] absolute -top-20 -left-20"></div>
      </div>
      
      <motion.div 
        initial={shouldAnimate ? "hidden" : "visible"}
        whileInView="visible"
        onViewportEnter={() => registerVisit()}
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto flex flex-col items-center relative z-10"
      >
        
        {/* Section Title */}
        <h2 className="text-[#1a1a1a] text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          Results that Matter
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col hover:shadow-[0_20px_50px_rgba(230,126,34,0.1)] hover:-translate-y-1 transition-all duration-300">
            
            {/* Top Flex (Image + Text) */}
            <div className="flex gap-5 mb-5">
              {/* Image Placeholder (Mimicking hand with device) */}
              <div className="w-32 h-24 rounded-xl shrink-0 bg-gray-200 overflow-hidden relative border border-gray-100">
                {/* Fallback pattern resembling the image */}
                <div className="absolute inset-0 bg-[#A6ACA2] flex items-center justify-center">
                    <div className="w-10 h-12 bg-gray-800 rounded-md rotate-15 shadow-lg"></div>
                    {/* Simulated hand skin tone */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#D4A373] opacity-50 blur-md"></div>
                </div>
                {/* Real Image tag if user provides src later */}
                <img src="/home/result-1.png" alt="Eco-Wearables" className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300" onLoad={(e) => (e.currentTarget.style.opacity = '1')} />
              </div>
              
              {/* Text Right of Image */}
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1a1a1a] font-bold text-[17px] leading-snug mb-2">
                  Eco-Wearables saw a 40% increase in dispatch speed
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Eco-Wearables saw a 40% increase in dispatch speed in our business.
                </p>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="flex flex-col mt-auto pt-2">
              <p className="text-gray-800 font-medium text-[14px] leading-relaxed mb-2 tracking-wide">
                <span>"Eco-Wearables saw a 40% increase in our business and enjoy our partnership."</span>
              </p>
              <p className="text-[#1a1a1a] font-bold text-[14px]">
                - Gadget Central
              </p>
            </div>
            
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col hover:shadow-[0_20px_50px_rgba(230,126,34,0.1)] hover:-translate-y-1 transition-all duration-300">
            
            {/* Top Flex (Image + Text) */}
            <div className="flex gap-5 mb-5">
              {/* Image Placeholder (Mimicking gadget in box) */}
              <div className="w-32 h-24 rounded-xl shrink-0 bg-gray-200 overflow-hidden relative border border-gray-100">
                {/* Fallback pattern resembling the image */}
                <div className="absolute inset-0 bg-[#E8E8E8] flex items-center justify-center">
                    <div className="w-16 h-12 bg-[#B8865B] rounded-sm shadow-inner relative transform -rotate-6">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-8 bg-gray-900 rounded-sm shadow-md"></div>
                    </div>
                </div>
                {/* Real Image tag if user provides src later */}
                <img src="/home/result-2.png" alt="Gadget Central" className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300" onLoad={(e) => (e.currentTarget.style.opacity = '1')} />
              </div>
              
              {/* Text Right of Image */}
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1a1a1a] font-bold text-[17px] leading-snug mb-2">
                  Gadget Central reduced costs by 25%
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Gadget Central reduced costs by 25% on manufacturing and products.
                </p>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="flex flex-col mt-auto pt-2">
              <p className="text-gray-800 font-medium text-[14px] leading-relaxed mb-2 tracking-wide">
                <span>"Gadget Central highly recommends their services and we can highly recommend."</span>
              </p>
              <p className="text-[#1a1a1a] font-bold text-[14px]">
                - Gadget Central
              </p>
            </div>
            
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ResultsSection;
