'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Flexible Retail Logistics",
    description: "Leverage the power of comprehensive retail fulfillment solutions built for your business, backed by retailer integration technology, advanced order management systems, and onsite packing and shipping specialists to support your growth.",
    image: "/retail-fulfilment/ecom-advantage/flexible-retail-logistics.webp"
  },
  {
    title: "Optimized B2B Bulk Shipping",
    description: "Simplify your B2B order fulfillment operations and expand your reach with an extensive network of strategically located fulfillment centers to cut costs, reduce transit times, and enhance scalability.",
    image: "/retail-fulfilment/ecom-advantage/optimized-bulk-shipping.webp"
  },
  {
    title: "Retailer Compliance",
    description: "Meet retailer guidelines and maintain business relationships with 100% compliant packing and shipping, no matter where you distribute your products.",
    image: "/retail-fulfilment/ecom-advantage/retailer-compliance.webp"
  },
  {
    title: "Tech-Powered Efficiency",
    description: "Streamline retailer onboarding, B2B retail logistics and fulfillment with efficient pallet shipping, enhanced tracking, and full stock visibility tailored to each retailer’s needs.",
    image: "/retail-fulfilment/ecom-advantage/tech-powered-efficiency.webp"
  },
  {
    title: "Enhanced Omnichannel Fulfillment",
    description: "Manage inventory and sync omnichannel data with seamless API and EDI integrations for streamlined 3PL fulfillment across all your sales channels.",
    image: "/retail-fulfilment/ecom-advantage/enhanced-omnichannel-fulfillment.webp"
  },
  {
    title: "Tech-Driven Inventory Management",
    description: "Efficiently manage inventory and reduce costs with our leading-edge, multi-location warehouse management system.",
    image: "/retail-fulfilment/ecom-advantage/tech-driven-inventory-management.webp"
  },
  {
    title: "Transparent, Simplified Pricing",
    description: "Take the guesswork and complexity out of B2B order pricing—no minimum contract requirements or surprises.",
    image: "/retail-fulfilment/ecom-advantage/transparent-simplified-pricing.webp"
  },
  {
    title: "Dedicated Support",
    description: "Get personalized support and proactive communication from our logistics experts for an unparalleled customer experience.",
    image: "/retail-fulfilment/ecom-advantage/dedicated-support.webp"
  }
];

const OptimizeSection = () => {
  return (
    <section className="py-24 bg-sky-50 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight"
          >
            The Ecom 
            <span className="ml-2 text-secondary">Advantage</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white w-80 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all group flex flex-col items-center text-center"
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
