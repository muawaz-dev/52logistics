'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Expansive Ecommerce Network",
    description: "Expand your reach and reduce delivery times with our strategically located 3PL fulfillment centers.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="50" cy="50" r="30" fill="#E1F5FE" />
         <path d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20ZM50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50C75 63.8071 63.8071 75 50 75Z" fill="#0D2B4A" opacity="0.2"/>
         <path d="M45 40L55 40L60 30L40 30L45 40Z" fill="#E67E22" />
         <rect x="42" y="40" width="16" height="15" rx="1" fill="#0D2B4A" />
         <path d="M65 55L75 55L80 45L60 45L65 55Z" fill="#E67E22" opacity="0.8" />
         <rect x="62" y="55" width="16" height="15" rx="1" fill="#0D2B4A" />
         <circle cx="50" cy="50" r="3" fill="#E67E22" />
      </svg>
    )
  },
  {
    title: "Omnichannel Fulfillment Services",
    description: "Manage inventory and sync omnichannel data with seamless API and EDI integrations for streamlined ecommerce fulfillment in Canada and beyond.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="10" fill="#0D2B4A" opacity="0.1" />
        <circle cx="50" cy="30" r="8" fill="#0D2B4A" />
        <circle cx="30" cy="65" r="8" fill="#E67E22" />
        <circle cx="70" cy="65" r="8" fill="#1B3B5A" />
        <path d="M50 38V45M35 60L45 52M65 60L55 52" stroke="#0D2B4A" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 25C50 25 55 20 60 25" stroke="#E67E22" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Optimized Inventory Management",
    description: "Manage your multi-location inventory effortlessly, reduce stock issues, and automate processes with our advanced warehouse management system.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="30" width="50" height="40" rx="4" fill="#0D2B4A" />
        <rect x="30" y="35" width="40" height="15" rx="2" fill="white" opacity="0.1" />
        <rect x="35" y="55" width="10" height="10" fill="#E67E22" transform="rotate(15 40 60)" />
        <rect x="55" y="50" width="10" height="10" fill="#E67E22" transform="rotate(-10 60 55)" />
        <path d="M50 20V28" stroke="#E67E22" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Cost-Effective, Expedited Shipping",
    description: "Supercharge your domestic, cross-border, and international shipping with easy customs clearance, and competitive shipping and fulfillment rates.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 60L50 70L70 60L50 50L30 60Z" fill="#E67E22" opacity="0.8" />
        <path d="M30 60L50 70V90L30 80V60Z" fill="#E67E22" />
        <path d="M50 70L70 60V80L50 90V70Z" fill="#E67E22" opacity="0.9" />
        <path d="M60 40L80 30L60 20L40 30L60 40Z" fill="#0D2B4A" opacity="0.1" />
        <path d="M50 50L60 40M70 60L80 50" stroke="#0D2B4A" strokeWidth="2" opacity="0.3" />
      </svg>
    )
  },
  {
    title: "Real-Time Tracking",
    description: "Take control and gain full visibility of your shipments with real-time tracking and APIs.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="50" height="50" rx="8" fill="#0D2B4A" />
        <path d="M35 50L45 60L65 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="70" cy="30" r="12" fill="#E67E22" />
        <path d="M70 24V32M66 28H74" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Reverse Logistics",
    description: "Automate returns, streamline restocking, and update inventory to simplify your returns management process.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="30" height="30" rx="2" fill="#E67E22" />
        <rect x="30" y="30" width="30" height="6" fill="#D35400" />
        <path d="M65 50C65 50 75 50 75 60C75 70 65 70 65 70" stroke="#0D2B4A" strokeWidth="4" strokeLinecap="round" />
        <path d="M68 67L65 70L68 73" stroke="#0D2B4A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const OptimizeSection = () => {
  return (
    <section className="py-24 bg-sky-50 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight"
          >
            Optimize your ecommerce <br />
            <span className="text-secondary">fulfillment</span> operations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all group flex flex-col items-center text-center"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-primary text-xl font-black tracking-wide uppercase mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium tracking-wide text-sm md:text-md leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizeSection;
