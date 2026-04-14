'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const MissionSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('about-mission');

  return (
    <section className="py-24 max-w-6xl mx-auto bg-white bg-grid-pattern relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left - Content */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => registerVisit()}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight">
              Our <span className="text-secondary text-stroke-primary">Mission</span> is to 
              <br /> Redefine Reliability.
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-gray-700 font-semibold tracking-wide text-md md:text-lg leading-relaxed">
                In a world of complex logistics, simplicity is our ultimate pursuit. We bridge the gap between businesses and their global customers through seamless fulfillment and distribution.
              </p>
              <p className="text-gray-700 font-semibold tracking-wide text-md md:text-lg leading-relaxed">
                Leveraging state-of-the-art technology and a global network of transportation partners, we ensure that every parcel tells a story of precision and care. Our commitment is to deliver more than just goods—we deliver peace of mind.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-secondary">99.9%</span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary/60">Accuracy Rate</span>
              </div>
              <div className="flex flex-col border-l border-gray-200 sm:pl-8">
                <span className="text-4xl font-black text-secondary">24/7</span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary/60">Live Monitoring</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image Shadow Box */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: shouldAnimate ? 0.2 : 0 }}
            className="w-full flex justify-center lg:w-1/2 relative p-4"
          >
           <Image
                    src="/home/transport.webp"
                    alt="52Logistics transport fleet on the road"
                    width={400}
                    height={400}
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={false}
                  />
            {/* Decorative background shape */}
           
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
