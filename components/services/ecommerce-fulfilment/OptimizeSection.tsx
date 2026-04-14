'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const features = [
  {
    title: "Expansive Ecommerce Network",
    description: "Expand your reach and reduce delivery times with our strategically located 3PL fulfillment centers.",
    image: "/ecommerce-fulfilment/optimize/expansive-ecommerce-network.webp"
  },
  {
    title: "Omnichannel Fulfillment Services",
    description: "Manage inventory and sync omnichannel data with seamless API and EDI integrations for streamlined ecommerce fulfillment in Canada and beyond.",
    image: "/ecommerce-fulfilment/optimize/omnichannel-fulfillment-services.webp"
  },
  {
    title: "Optimized Inventory Management",
    description: "Manage your multi-location inventory effortlessly, reduce stock issues, and automate processes with our advanced warehouse management system.",
    image: "/ecommerce-fulfilment/optimize/optimized-inventory-management.webp"
  },
  {
    title: "Cost-Effective, Expedited Shipping",
    description: "Supercharge your domestic, cross-border, and international shipping with easy customs clearance, and competitive shipping and fulfillment rates.",
    image: "/ecommerce-fulfilment/optimize/cost-effectice-shipping.webp"
  },
  {
    title: "Real-Time Tracking",
    description: "Take control and gain full visibility of your shipments with real-time tracking and APIs.",
    image: "/ecommerce-fulfilment/optimize/real-time-tracking.webp"
  },
  {
    title: "Reverse Logistics",
    description: "Automate returns, streamline restocking, and update inventory to simplify your returns management process.",
    image: "/ecommerce-fulfilment/optimize/reverse-logistics.webp"
  }
];

const OptimizeSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('ecommerce-optimize');

  return (
    <section className="py-24 bg-sky-50 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => registerVisit()}
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
              initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldAnimate ? index * 0.1 : 0 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all group flex flex-col items-center text-center"
            >
              <div className="mb-8 w-20 h-20 relative transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
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
