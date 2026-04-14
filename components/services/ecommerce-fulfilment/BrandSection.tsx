'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const brandFeatures = [
  {
    title: "Custom Packaging",
    description: "Customize your packaging and delight your customers with unique unboxing experiences.",
    image: "/ecommerce-fulfilment/brand/custom-packaging.png"
  },
  {
    title: "Kitting and Bundling",
    description: "Streamline order fulfillment with kitting and bundling services to cut costs shipping times.",
    image: "/ecommerce-fulfilment/brand/kitting-and-bundling.png"
  },
  {
    title: "Sustainable Practices",
    description: "Streamline your operations with eco-friendly services to cut waste and reduce shipping costs.",
    image: "/ecommerce-fulfilment/brand/custom-packaging.png" // Placeholder: Third image was not found in the directory
  }
];

const BrandSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('ecommerce-brand');

  return (
    <section className="py-24 bg-grid-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => registerVisit()}
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
              initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldAnimate ? index * 0.1 : 0 }}
              className="bg-gray-50 p-12 rounded-[3.5rem] shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-10 w-24 h-24 relative transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
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
