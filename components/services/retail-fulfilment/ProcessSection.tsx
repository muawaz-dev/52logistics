'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Connect Via EDI",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Warehouse Building */}
        <path d="M20 45L50 30L80 45V75H20V45Z" fill="#0D2B4A" />
        <path d="M20 45L50 30L80 45L50 60L20 45Z" fill="#E67E22" />
        <rect x="40" y="60" width="20" height="15" fill="#1B3B5A" />
        {/* Small Truck */}
        <rect x="65" y="65" width="25" height="12" rx="2" fill="#E67E22" />
        <rect x="82" y="67" width="8" height="8" rx="1" fill="#0D2B4A" />
        <circle cx="70" cy="77" r="3" fill="#0D2B4A" />
        <circle cx="85" cy="77" r="3" fill="#0D2B4A" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Store Inventory",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shelving Frame */}
        <rect x="25" y="20" width="4" height="60" fill="#0D2B4A" />
        <rect x="71" y="20" width="4" height="60" fill="#0D2B4A" />
        <rect x="25" y="35" width="50" height="3" fill="#0D2B4A" />
        <rect x="25" y="55" width="50" height="3" fill="#0D2B4A" />
        <rect x="25" y="75" width="50" height="3" fill="#0D2B4A" />
        {/* Boxes on Shelves */}
        <rect x="35" y="25" width="12" height="10" rx="1" fill="#E67E22" />
        <rect x="55" y="25" width="12" height="10" rx="1" fill="#E67E22" />
        <rect x="30" y="45" width="12" height="10" rx="1" fill="#E67E22" />
        <rect x="45" y="65" width="12" height="10" rx="1" fill="#E67E22" />
        <rect x="60" y="65" width="12" height="10" rx="1" fill="#E67E22" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Streamline Orders",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Smartphone */}
        <rect x="35" y="25" width="30" height="55" rx="5" fill="#0D2B4A" />
        <rect x="38" y="30" width="24" height="40" rx="2" fill="white" opacity="0.1" />
        {/* Floating Order Icon */}
        <circle cx="50" cy="40" r="12" fill="#E67E22" />
        <path d="M42 40L48 46L58 34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom Button Area */}
        <rect x="42" y="72" width="16" height="4" rx="2" fill="white" opacity="0.3" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Fulfill Orders",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Three Isometric Boxes */}
        {/* Box 1 (Top) */}
        <path d="M50 20L70 30L50 40L30 30L50 20Z" fill="#E67E22" opacity="0.8" />
        <path d="M30 30L50 40V60L30 50V30Z" fill="#E67E22" />
        <path d="M50 40L70 30V50L50 60V40Z" fill="#E67E22" opacity="0.9" />
        {/* Box 2 (Left) */}
        <path d="M30 55L45 62L30 70L15 62L30 55Z" fill="#E67E22" opacity="0.8" />
        <path d="M15 62L30 70V85L15 77V62Z" fill="#E67E22" />
        <path d="M30 70L45 62V77L30 85V70Z" fill="#E67E22" opacity="0.9" />
        {/* Box 3 (Right) */}
        <path d="M70 55L85 62L70 70L55 62L70 55Z" fill="#E67E22" opacity="0.8" />
        <path d="M55 62L70 70V85L55 77V62Z" fill="#E67E22" />
        <path d="M70 70L85 62V77L70 85V70Z" fill="#E67E22" opacity="0.9" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Orders shipped and delivered",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tablet / Screen */}
        <rect x="25" y="45" width="55" height="40" rx="3" fill="#0D2B4A" transform="rotate(-15 50 65)" />
        {/* Map / Route Lines */}
        <path d="M35 65L45 55L65 65L75 55" stroke="#E67E22" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        {/* Delivery Pin */}
        <circle cx="65" cy="50" r="6" fill="#E67E22" />
        <path d="M65 50L65 60" stroke="#E67E22" strokeWidth="2" />
        {/* Moving Truck Icon */}
        <rect x="35" y="55" width="12" height="6" rx="1" fill="white" opacity="0.8" />
      </svg>
    )
  },
  {
    id: "06",
    title: "Returns managed",
    icon: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large Box */}
        <rect x="25" y="30" width="40" height="40" rx="2" fill="#E67E22" />
        <rect x="25" y="30" width="40" height="8" fill="#D35400" />
        <rect x="42" y="30" width="6" height="40" fill="#D35400" opacity="0.3" />
        {/* Circular Return Arrow */}
        <circle cx="70" cy="70" r="15" fill="white" />
        <circle cx="70" cy="70" r="12" fill="#0D2B4A" />
        <path d="M65 70A5 5 0 1 1 70 75" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M63 68L65 70L67 68" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-full h-[2px] bg-linear-to-r from-transparent via-secondary to-transparent rotate-[-5deg]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black tracking-tight"
          >
            How it <span className="text-secondary">works</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Path (Large Screens) */}
          <div className="hidden lg:block absolute top-[45%] left-0 w-full h-8 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-linear-to-r from-secondary via-primary to-primary origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                {/* ID Label */}
                <span className="text-xs font-black text-gray-400 mb-4 group-hover:text-secondary transition-colors uppercase tracking-widest">
                  Step {step.id}
                </span>

                {/* Icon Container */}
                <div className="w-24 h-24 rounded-3xl bg-white shadow-lg flex items-center justify-center text-primary mb-6 transition-all transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-white relative border border-gray-100">
                   {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-black text-primary text-center px-4 leading-tight uppercase group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
