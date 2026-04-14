'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const AboutHero = () => {
  const { shouldAnimate, registerVisit } = useAnimation('about-hero');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    registerVisit();
  }, [registerVisit]);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 text-white">
        <Image
          src="/about/hero.png"
          alt="52Logistics Office"
          fill
          className="object-cover opacity-40"
          priority
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: shouldAnimate ? -50 : 0 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : (shouldAnimate ? -50 : 0) }}
          transition={{ duration: shouldAnimate ? 0.8 : 0.4 }}
          className="max-w-6xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: shouldAnimate ? 0.8 : 0.4, delay: shouldAnimate ? 0.3 : 0 }}
            className="inline-block text-secondary font-black tracking-[0.3em] text-sm mb-6"
          >
            Since 2012
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold -skew-x-6 leading-[0.9] text-white mb-6 tracking-tighter">
            Empowering <span className="text-secondary text-stroke-white">Trade</span> <br />
            Through Intelligence, <span className="text-secondary">Innovation</span> And Growth.
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-medium">
            At 52Logistics, we don't just move cargo. We architect supply chain solutions that drive growth, efficiency, and scale for businesses worldwide.
          </p>
        </motion.div>
      </div>


    </section>
  );
};

export default AboutHero;
