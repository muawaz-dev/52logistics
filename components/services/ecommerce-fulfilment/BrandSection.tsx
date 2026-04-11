'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brandFeatures = [
  {
    title: "Custom Packaging",
    description: "Customize your packaging and delight your customers with unique unboxing experiences.",
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Device/Phone Base */}
        <rect x="30" y="30" width="40" height="50" rx="4" fill="#0D2B4A" opacity="0.1" />
        {/* Hand/Arm Isometric */}
        <path d="M45 60C45 60 55 55 60 65M45 60L35 70" stroke="#0D2B4A" strokeWidth="4" strokeLinecap="round" />
        {/* Box emerging */}
        <path d="M50 40L65 48L50 56L35 48L50 40Z" fill="#E67E22" />
        <path d="M35 48L50 56V70L35 62V48Z" fill="#E67E22" opacity="0.8" />
        <path d="M50 56L65 48V62L50 70V56Z" fill="#E67E22" opacity="0.9" />
        {/* Sparkle */}
        <path d="M70 30L72 35M75 32L71 34" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Kitting and Bundling",
    description: "Streamline order fulfillment with kitting and bundling services to cut costs shipping times.",
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" fill="#E1F5FE" />
        {/* Globe continents approx */}
        <path d="M40 35C40 35 45 30 50 35C55 40 60 38 65 45" stroke="#3498DB" strokeWidth="10" strokeLinecap="round" opacity="0.4" />
        <path d="M35 55C35 55 45 60 55 55C65 50 70 60 65 65" stroke="#3498DB" strokeWidth="10" strokeLinecap="round" opacity="0.4" />
        {/* Leafy Recycling Arrow */}
        <path d="M35 50A15 15 0 0 1 65 50" stroke="#95BF47" strokeWidth="4" strokeLinecap="round" />
        <path d="M65 50L60 45M65 50L60 55" stroke="#95BF47" strokeWidth="4" strokeLinecap="round" />
        <path d="M35 50L45 50" stroke="#95BF47" strokeWidth="4" strokeLinecap="round" />
        <circle cx="35" cy="50" r="4" fill="#95BF47" />
      </svg>
    )
  },
  {
    title: "Sustainable Practices",
    description: "Streamline your operations with eco-friendly services to cut waste and reduce shipping costs.",
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stack of Boxes */}
        {/* Box 1 */}
        <path d="M40 50L60 60L40 70L20 60L40 50Z" fill="#E67E22" opacity="0.8" />
        <path d="M20 60L40 70V90L20 80V60Z" fill="#E67E22" />
        <path d="M40 70L60 60V80L40 90V70Z" fill="#E67E22" opacity="0.9" />
        {/* Box 2 */}
        <path d="M60 40L80 50L60 60L40 50L60 40Z" fill="#E67E22" opacity="0.8" />
        <path d="M40 50L60 60V80L40 70V50Z" fill="#E67E22" />
        <path d="M60 60L80 50V70L60 80V60Z" fill="#E67E22" opacity="0.9" />
        {/* Box 3 Top */}
        <path d="M50 20L70 30L50 40L30 30L50 20Z" fill="#E67E22" opacity="0.8" />
        <path d="M30 30L50 40V60L30 50V30Z" fill="#E67E22" />
        <path d="M50 40L70 30V50L50 60V40Z" fill="#E67E22" opacity="0.9" />
      </svg>
    )
  }
];

const BrandSection = () => {
  return (
    <section className="py-24 bg-grid-pattern relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight"
          >
            Level up <span className="text-secondary">your brand</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {brandFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-12 rounded-[3.5rem] shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-10 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-primary text-xl font-black tracking-wide uppercase mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium tracking-wide text-sm md:text-md leading-relaxed px-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
