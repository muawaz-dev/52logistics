'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const features = [
  {
    title: "Amazon Facility Shipping",
    description: "Ship to national and global Amazon centers, hassle-free, with safe and secure transport according to Amazon packing guidelines, as well as streamlined customs clearance for international shipments.",
    image: "/amazon-fba-fbm/amazon-facility-shipping.webp"
  },
  {
    title: "Amazon Consulting",
    description: "Unlock the full potential of your store with the expertise of our compliance specialists, who bring in-depth knowledge and hands-on experience to navigate the complexities of Amazon FBA and Amazon FBM in Canada.",
    image: "/amazon-fba-fbm/amazon-consulting.webp"
  },
  {
    title: "Amazon Seller Packaging",
    description: "Ensure quality control and Amazon-compliant packaging for every shipment. Our Amazon compliance experts monitor your day-to-day operations, ensuring that you never have to worry about your shipments getting rejected.",
    image: "/amazon-fba-fbm/amazon-seller-packaging.webp"
  },
  {
    title: "Amazon-Approved Carriers",
    description: "Guarantee compliance with access to Amazon-approved carriers and reliable delivery services that meet Amazon's strict guidelines and shipping standards.",
    image: "/amazon-fba-fbm/amazon-approved-carriers.webp"
  },
  {
    title: "Streamlined Fulfillment",
    description: "From individual unit FNSKU labeling to carton forwarding, product bundling, kitting and assembly, our Amazon fulfillment services have you covered.",
    image: "/amazon-fba-fbm/streamlined-fulfilment.webp"
  },
  {
    title: "Scalable Warehousing",
    description: "Scale your business with access to 250,000+ sq ft of warehousing space, so you never have to worry about inventory restrictions or put a ceiling on your growth.",
    image: "/amazon-fba-fbm/scalable-warehousing.webp"
  }
];

const OptimizeSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('amazon-optimize');

  return (
    <section className="py-24 bg-sky-50 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-6xl mx-auto">
          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => registerVisit()}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight"
          >
            Robust Amazon <span className="text-secondary">FBA and FBM</span> solutions
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
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all group flex flex-col items-center text-center border border-white/50"
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
