'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: "01",
    title: "Connect Via EDI",
    image: "/retail-fulfilment/process/connect-via-edi.webp"
  },
  {
    id: "02",
    title: "Store Inventory",
    image: "/retail-fulfilment/process/store-inventory.webp"
  },
  {
    id: "03",
    title: "Streamline Orders",
    image: "/retail-fulfilment/process/streamline-orders.webp"
  },
  {
    id: "04",
    title: "Fulfill Orders",
    image: "/retail-fulfilment/process/fulfill-orders.webp"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-full h-[2px] bg-linear-to-r from-transparent via-secondary to-transparent rotate-[-5deg]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
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

                {/* Image Container */}
                <div className="w-24 h-24 rounded-3xl bg-white shadow-lg flex items-center justify-center mb-6 transition-all transform group-hover:scale-110 group-hover:-translate-y-2 relative border border-gray-100 overflow-hidden">
                   <div className="relative w-12 h-12">
                     <Image
                       src={step.image}
                       alt={step.title}
                       fill
                       className="object-contain"
                     />
                   </div>
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
