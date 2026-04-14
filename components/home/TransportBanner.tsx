'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';

const TransportBanner = () => {
  const { shouldAnimate, registerVisit } = useAnimation('home-transport-banner');

  return (
    <section className="relative w-full p-12 bg-grid-pattern overflow-hidden">
      {/* The transport image */}
      <div className='flex flex-wrap gap-8 lg:gap-4 justify-center'>

        {/* Content overlay */}
        <div className="flex items-center">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, x: -40 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              onViewportEnter={() => registerVisit()}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">
                End-to-End Logistics
              </p>
              <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight mb-5">
                Moving Goods,<br />
                <span className="text-secondary">Faster Than Ever.</span>
              </h2>
              <p className="text-gray-700 font-semibold tracking-wide text-md md:text-lg leading-relaxed">
                Your business moves fast, and our logistics network moves faster. From high-capacity warehouse management to the final mile of delivery, we’ve engineered a fleet that prioritizes your schedule.
              </p>
            </motion.div>
          </div>
        </div>
        <Image
          src="/home/transport.webp"
          alt="52Logistics transport fleet on the road"
          width={400}
          height={400}
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>

    </section>
  );
};

export default TransportBanner;
