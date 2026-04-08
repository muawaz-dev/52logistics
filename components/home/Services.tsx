'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'WAREHOUSING',
    description: 'Secure, scalable storage with real-time inventory visibility.',
    icon: (
      <svg width="130" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House / Building (Navy) */}
        <path d="M50 15L15 40V85H85V40L50 15Z" fill="#0D2B4A" />
        {/* White cutout for interior */}
        <rect x="25" y="45" width="50" height="40" fill="white" />
        {/* Interior layout - Navy header line inside */}
        <rect x="28" y="48" width="44" height="4" fill="#0D2B4A" />

        {/* Orange and Navy Boxes inside */}
        <rect x="30" y="65" width="15" height="20" fill="#E67E22" />
        <rect x="32" y="67" width="4" height="5" fill="#FFE6D0" />
        <rect x="38" y="67" width="4" height="5" fill="#FFE6D0" />

        <rect x="47" y="55" width="25" height="30" fill="#E67E22" />
        <rect x="52" y="58" width="5" height="6" fill="#FFE6D0" />
        <rect x="62" y="58" width="5" height="6" fill="#FFE6D0" />
        <rect x="52" y="68" width="5" height="6" fill="#FFE6D0" />
        <rect x="62" y="68" width="5" height="6" fill="#FFE6D0" />
        <rect x="52" y="78" width="5" height="6" fill="#FFE6D0" />
        <rect x="62" y="78" width="5" height="6" fill="#FFE6D0" />
      </svg>
    ),
  },
  {
    title: 'PICK & PACK',
    description: 'Accurate picking and careful packing for every order.',
    icon: (
      <svg width="130" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back lines / paper (Navy) */}
        <rect x="35" y="20" width="30" height="6" fill="#0D2B4A" transform="rotate(-15 35 20)" />
        <rect x="38" y="28" width="30" height="6" fill="#0D2B4A" transform="rotate(-5 38 28)" />
        <rect x="40" y="36" width="30" height="6" fill="#0D2B4A" />

        {/* Isometric Box (Navy) */}
        <path d="M50 78L25 60V80L50 95L75 80V60L50 78Z" fill="#0D2B4A" />
        <path d="M25 60L50 45L75 60L50 78L25 60Z" fill="#0D2B4A" opacity="0.8" />
        <path d="M25 60L50 45L35 35L10 50L25 60Z" fill="#0D2B4A" opacity="0.9" />
        <path d="M75 60L50 45L65 35L90 50L75 60Z" fill="#0D2B4A" opacity="0.9" />

        {/* White highlights to divide box portions */}
        <path d="M50 78V95" stroke="white" strokeWidth="2" />
        <path d="M25 60L50 78L75 60" stroke="white" strokeWidth="2" />
        <path d="M50 45L25 60" stroke="white" strokeWidth="2" />
        <path d="M50 45L75 60" stroke="white" strokeWidth="2" />

        {/* Orange Check Circle */}
        <circle cx="75" cy="45" r="18" fill="white" />
        <circle cx="75" cy="45" r="15" fill="#E67E22" />
        {/* White Check */}
        <path d="M68 45L73 50L82 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'PREP SERVICES',
    description: 'Kitting, assembly, quality check, and order preparation.',
    icon: (
      <svg width="130" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Clipboard board (Navy) */}
        <rect x="25" y="20" width="45" height="65" rx="4" fill="#0D2B4A" />
        {/* Clip (Navy/lighter) */}
        <rect x="37" y="12" width="20" height="14" rx="2" fill="#0D2B4A" />
        <rect x="41" y="16" width="12" height="4" fill="white" />

        {/* Lines and checkboxes inside */}
        <rect x="32" y="32" width="8" height="8" rx="1" fill="white" />
        <rect x="45" y="34" width="15" height="4" rx="1" fill="white" />

        <rect x="32" y="47" width="8" height="8" rx="1" fill="white" />
        <rect x="45" y="49" width="15" height="4" rx="1" fill="white" />

        <rect x="32" y="62" width="8" height="8" rx="1" fill="white" />
        <rect x="45" y="64" width="15" height="4" rx="1" fill="white" />

        {/* Box (Orange) overlapping bottom right */}
        <path d="M75 60L55 70V85L75 95L95 85V70L75 60Z" fill="#E67E22" />
        <path d="M75 60L55 70L75 80L95 70L75 60Z" fill="#E67E22" opacity="0.8" />
        <path d="M95 70L75 80V95L95 85V70Z" fill="#E67E22" opacity="0.9" />
        {/* White box highlights */}
        <path d="M75 80V95" stroke="white" strokeWidth="1" />
        <path d="M55 70L75 80L95 70" stroke="white" strokeWidth="1" />
        {/* Box Tape */}
        <path d="M75 60L75 80" stroke="white" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'DISPATCH',
    description: 'Fast and reliable dispatch to keep your customers happy.',
    icon: (
      <svg width="130" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Speed lines */}
        <rect x="10" y="40" width="20" height="4" rx="2" fill="#0D2B4A" />
        <rect x="15" y="55" width="18" height="4" rx="2" fill="#0D2B4A" />
        <rect x="20" y="70" width="15" height="4" rx="2" fill="#0D2B4A" />

        {/* Truck Body (Navy) */}
        <path d="M35 30H70V75H35V30Z" fill="#0D2B4A" />
        {/* Truck Front (Navy) */}
        <path d="M70 45H85L90 55V75H70V45Z" fill="#0D2B4A" />
        {/* Front window (White) */}
        <path d="M72 48H82L85 55H72V48Z" fill="white" />

        {/* Body detail horizontal lines */}
        <rect x="40" y="40" width="25" height="3" fill="#E67E22" />
        <rect x="40" y="50" width="25" height="3" fill="#E67E22" />
        <rect x="40" y="60" width="25" height="3" fill="#E67E22" />

        {/* Wheels (White bg, Navy tire) */}
        <circle cx="45" cy="75" r="10" fill="white" />
        <circle cx="45" cy="75" r="7" fill="#0D2B4A" />

        <circle cx="78" cy="75" r="10" fill="white" />
        <circle cx="78" cy="75" r="7" fill="#0D2B4A" />
      </svg>
    ),
  },
  {
    title: 'PRIVATE LABELING',
    description: 'Custom labeling, packing, and branding to make it yours.',
    icon: (
      <svg width="130" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Isometric Box (Navy) - Fully Closed */}
        <path d="M45 45L20 58V80L45 95L70 80V58L45 45Z" fill="#0D2B4A" />
        <path d="M45 45L20 58L45 70L70 58L45 45Z" fill="#0D2B4A" opacity="0.8" />
        <path d="M70 58L45 70V95L70 80V58Z" fill="#0D2B4A" opacity="0.9" />
        {/* White highlights */}
        <path d="M45 70V95" stroke="white" strokeWidth="2" />
        <path d="M20 58L45 70L70 58" stroke="white" strokeWidth="2" />

        <path d="M30 52L55 64" stroke="white" strokeWidth="2" opacity="0.3" /> {/* tape line in middle of box top */}

        {/* Orange Tag - Hanging off side */}
        <path d="M75 55L60 75L65 80L85 65L90 45L80 45L75 55Z" fill="#E67E22" />
        {/* Tag string */}
        <path d="M60 58 C 45 45, 55 40, 58 55" stroke="#E67E22" strokeWidth="3" fill="none" strokeDasharray="4 2" />

        {/* Tag details */}
        <circle cx="82" cy="53" r="3" fill="white" />
        <rect x="68" y="63" width="12" height="3" fill="white" transform="rotate(-50 68 63)" />
        <rect x="70" y="67" width="12" height="3" fill="white" transform="rotate(-50 70 67)" />
        <rect x="72" y="71" width="12" height="3" fill="white" transform="rotate(-50 72 71)" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Services = () => {
  return (
    <section className="relative w-full py-20 bg-white bg-grid-pattern">
      {/* Background swoosh wave replaced with grid for a more premium dense feel but keeping orange subtle glow orb */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center opacity-40">
        <div className="glow-orb-navy w-[500px] h-[500px] -left-40 top-0"></div>
        <div className="glow-orb-orange w-[500px] h-[500px] -right-40 bottom-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 xl:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="bg-white rounded-3xl px-6 py-6 xl:px-8 xl:py-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(230,126,34,0.15)] hover:-translate-y-2 transition-all duration-300 relative group border border-gray-50"
            >
              {/* Inner subtle colored border accent (optional, but adds premium feel) */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-secondary/20 transition-colors duration-300 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="mb-6 h-28 w-28 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-primary text-xl font-black tracking-wide uppercase mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-medium min-h-[60px]">
                {service.description}
              </p>

              {/* Decorative Bottom Line (Orange & Grey) */}
              <div className="flex items-center mt-auto">
                <div className="h-1.5 w-10 bg-secondary rounded-l-full group-hover:w-16 transition-all duration-300"></div>
                <div className="h-[2px] w-8 bg-gray-200 rounded-r-full group-hover:w-2 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
