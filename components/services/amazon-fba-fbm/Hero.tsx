'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
  const { shouldAnimate, registerVisit } = useAnimation('amazon-hero');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    registerVisit();
  }, [registerVisit]);

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen bg-primary flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="px-6 md:px-12 w-full pt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: shouldAnimate ? -50 : 0 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : (shouldAnimate ? -50 : 0) }}
            transition={{ duration: shouldAnimate ? 0.8 : 0.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold -skew-x-6 leading-[0.9] text-white mb-6 tracking-tighter">
              Your Premier Amazon
              <br />
              <span className="text-secondary">FBA</span> <br />
              Partner
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl leading-relaxed font-medium">
              Streamline your Amazon fulfillment and shipping with compliant FBA and FBM services.
            </p>
            <Link
              href="/contact"
              className="inline-block mb-4 bg-secondary hover:bg-secondary/90 text-primary font-black px-8 py-4 rounded-full text-md transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: shouldAnimate ? 20 : 0 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : (shouldAnimate ? 20 : 0) }}
            transition={{ duration: shouldAnimate ? 1 : 0.4, delay: shouldAnimate ? 0.2 : 0 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/amazon-fba-fbm/hero.png"
                alt="Amazon FBA and FBM"
                width={600}
                height={600}
                className="w-full mb-4 h-auto drop-shadow-2xl rounded-3xl"
                onLoad={() => setIsLoaded(true)}
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
