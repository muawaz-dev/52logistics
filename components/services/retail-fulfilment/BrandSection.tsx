'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const valueAddedServices = [
  {
    title: "Pallet Shipment Bundling",
    description: "Our system identifies retailer requests, ensuring compliance to reduce penalties.",
    image: "/ecommerce-fulfilment/services.jpeg" // Reusing existing image as requested
  },
  {
    title: "Compliant Order Processing",
    description: "We meet retailer-specific kitting, packaging, and labeling requirements to ensure protocol compliance.",
    image: "/retail-fulfilment/info-image.jpeg" // Reusing existing image as requested
  }
];

const BrandSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-6 tracking-wide uppercase"
          >
            Value Added Services
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-center">
          {valueAddedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex flex-col items-center lg:items-center lg:flex-row w-full max-w-2xl group"
            >
              {/* Image Container */}
              <div className="relative z-10 w-full lg:w-[150%] max-w-[340px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Box */}
              <div className="relative bg-sky-100/60 mt-[-60px] lg:mt-0 lg:ml-[-100px] pt-[80px] lg:pt-10 pb-10 lg:pl-[120px] px-8 rounded-[2rem] shadow-sm flex-grow min-h-[220px] flex flex-col justify-center border border-sky-100">
                <h3 className="text-primary text-xl md:text-2xl font-black mb-3 leading-tight tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium tracking-wide text-sm md:text-md leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
