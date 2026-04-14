'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';

const values = [
  {
    title: "Uncompromising Integrity",
    description: "We lead with honesty and transparency in every transaction, building trust that lasts generations.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L80 25V50C80 65 65 75 50 85C35 75 20 65 20 50V25L50 15Z" fill="#0D2B4A" opacity="0.1" />
        <path d="M50 20L75 28V48C75 62 62 72 50 80C38 72 25 62 25 48V28L50 20Z" stroke="#0D2B4A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 45L47 52L60 38" stroke="#E67E22" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  
      </svg>
    )
  },
  {
    title: "Rapid Innovation",
    description: "Our technology stack evolves daily to meet the ever-changing demands of global ecommerce.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" fill="#E67E22" opacity="0.1" />
        <path d="M60 20L35 55H55L40 85L65 50H45L60 20Z" fill="#E67E22" />
        <path d="M75 50C75 63.8071 63.8071 75 50 75" stroke="#0D2B4A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M25 50C25 36.1929 36.1929 25 50 25" stroke="#0D2B4A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="50" cy="25" r="3" fill="#0D2B4A" />
        <circle cx="50" cy="75" r="3" fill="#0D2B4A" />
      </svg>
    )
  },
  {
    title: "Precision Execution",
    description: "From FNSKU labeling to last-mile delivery, we focus on the minute details that ensure success.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="50" height="50" rx="8" stroke="#0D2B4A" strokeWidth="2" opacity="0.2" />
        <circle cx="50" cy="50" r="20" stroke="#0D2B4A" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M50 30V40M50 60V70M30 50H40M60 50H70" stroke="#0D2B4A" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="6" fill="#E67E22" />
        <path d="M50 40L50 60M40 50L60 50" stroke="#E67E22" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: "Partner Centric",
    description: "Your growth is our benchmark. We treat every client's business as if it were our own.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        
      
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70" stroke="#0D2B4A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="35" r="8" stroke="#0D2B4A" strokeWidth="3" />
      </svg>
    )
  }
];

const ValuesSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('about-values');

  return (
    <section className="py-24 bg-grid-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => registerVisit()}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            Our Core <span className="text-secondary">Values</span>
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            The principles that guide our decisions and define our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: shouldAnimate ? index * 0.1 : 0 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(13,43,74,0.1)] hover:-translate-y-2 transition-all duration-500 group text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-xl font-black text-primary mb-4 tracking-tight uppercase group-hover:text-secondary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-semibold tracking-wide text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />
    </section>
  );
};

export default ValuesSection;
