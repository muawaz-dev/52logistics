'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const valueAddedServices = [
  { title: "FNSKU Labeling", image: "/amazon-fba-fbm/fnsku-labeling.webp" },
  { title: "Easy Dashboard", image: "/amazon-fba-fbm/easy-dashboard.webp" },
  { title: "FBA Removals", image: "/amazon-fba-fbm/fba-removals.webp" },
  { title: "Fast Turnaround", image: "/amazon-fba-fbm/fast-turnaround.webp" },
  { title: "Carton Forwarding", image: "/amazon-fba-fbm/carton-forwarding.webp" },
  { title: "Poly Bagging", image: "/amazon-fba-fbm/poly-bagging.webp" },
  { title: "Kitting and Bundling", image: "/amazon-fba-fbm/kitting-and-bundling.webp" },
  { title: "Fragile Product Packaging", image: "/amazon-fba-fbm/fragile-product-packaging.webp" },
  { title: "Dedicated Account Management", image: "/amazon-fba-fbm/dedicated-account-management.webp" },
];

const ValueAddedSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('amazon-value-added');

  return (
    <section className="py-24 bg-grid-pattern relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => registerVisit()}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight"
          >
            Value Added Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {valueAddedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: shouldAnimate ? index * 0.1 : 0 }}
              className="flex flex-col items-center group"
            >
              {/* Service Title - Above Image */}
              <h3 className="text-primary text-xl font-bold mb-8 text-center transition-colors group-hover:text-secondary h-12 flex items-center">
                {service.title}
              </h3>
              
              {/* Image Container */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Decorative background circle on hover */}
                <div className="absolute inset-0 bg-secondary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                
                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain transition-all"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="glow-orb-orange top-1/2 -right-20 w-80 h-80 opacity-50" />
      <div className="glow-orb-navy bottom-0 -left-20 w-96 h-96 opacity-50" />
    </section>
  );
};

export default ValueAddedSection;
