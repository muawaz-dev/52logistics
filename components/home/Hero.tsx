'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';

const Hero = () => {
  const { shouldAnimate, registerVisit } = useAnimation('home-hero');
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    registerVisit();
  }, [registerVisit]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between bg-white bg-grid-pattern">
        {/* Floating Background Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: shouldAnimate ? 0.8 : 1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : (shouldAnimate ? 0.8 : 1) }}
          transition={{ duration: shouldAnimate ? 1.5 : 0.4 }}
          className="glow-orb-orange w-96 h-96 top-40 right-20"
        />

        {/* Background Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: shouldAnimate ? 1.1 : 1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : (shouldAnimate ? 1.1 : 1) }}
          transition={{ duration: shouldAnimate ? 1.2 : 0.4, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/home/hero-3.png"
            alt="Logistics Background"
            fill
            priority
            className="object-cover hidden lg:block object-right lg:object-top"
            onLoad={() => setIsLoaded(true)}
          />
          <Image
            src="/home/hero-mobile.png"
            alt="Logistics Background"
            fill
            priority
            className="object-cover lg:hidden object-right lg:object-top"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 pt-10 flex-grow flex flex-col items-start bg-transparent pointer-events-none">

          {/* Hero Title and Description */}
          <motion.div 
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1, 
                transition: shouldAnimate ? { staggerChildren: 0.2, delayChildren: 0.4 } : { duration: 1 }
              }
            }}
            className="mt-20 max-w-3xl pointer-events-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold -skew-x-6 leading-[0.8] text-primary mb-6 tracking-tighter flex flex-col">
              <motion.span 
                variants={{ 
                  hidden: { opacity: 0, y: shouldAnimate ? 40 : 0 }, 
                  show: { opacity: 1, y: 0, transition: { duration: shouldAnimate ? 1 : 0.4, ease: "easeOut" } } 
                }}
                className="block"
              >
                YOUR TRUSTED
              </motion.span>
              <motion.span 
                variants={{ 
                  hidden: { opacity: 0, y: shouldAnimate ? 40 : 0 }, 
                  show: { opacity: 1, y: 0, transition: { duration: shouldAnimate ? 0.7 : 0.4, ease: "easeOut" } } 
                }}
                className="block mt-4"
              >
                <span className="text-7xl md:text-9xl text-secondary">3PL</span> PARTNER
              </motion.span>
            </h1>
            <motion.p 
              variants={{ 
                hidden: { opacity: 0, y: shouldAnimate ? 20 : 0 }, 
                show: { opacity: 1, y: 0, transition: { duration: shouldAnimate ? 0.6 : 0.4, delay: shouldAnimate ? 0.8 : 0, ease: "easeOut" } } 
              }}
              className="text-xl md:text-3xl font-bold text-primary tracking-tight"
            >
              Smart Logistics. Seamless Delivery.
            </motion.p>
          </motion.div>
        </div>

        {/* Stylized Bottom Bar Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: shouldAnimate ? 0.8 : 0.4, delay: shouldAnimate ? 0.9 : 0, ease: "easeOut" }}
          className="relative z-20 w-full"
        >
          {/* Slanted Accent Segment */}
          <div className="absolute left-0 bottom-0 w-[600px] md:w-[950px] h-28 md:h-40">
            {/* Custom Slanted Background */}
            <div
              className="absolute w-[500px] md:w-[850px] inset-0 bg-primary shadow-[0_-10px_30px_rgba(0,0,0,0.15)]"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            ></div>

            {/* Orange Highlight Border on Top */}
            <motion.div
              initial={{ scaleX: shouldAnimate ? 0 : 1, opacity: 0 }}
              animate={{ scaleX: isLoaded ? 1 : (shouldAnimate ? 0 : 1), opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: shouldAnimate ? 1.4 : 0.4, delay: shouldAnimate ? 1.2 : 0, ease: "easeOut" }}
              className="absolute top-0 left-0 h-1 bg-secondary origin-left"
              style={{ width: '80%' }}
            ></motion.div>

            <div className="relative h-full flex flex-col justify-center px-6 md:px-20 pointer-events-none">
              <motion.h3 
                initial={{ opacity: 0, x: shouldAnimate ? -20 : 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : (shouldAnimate ? -20 : 0) }}
                transition={{ duration: shouldAnimate ? 0.6 : 0.4, delay: shouldAnimate ? 1.4 : 0 }}
                className="text-white text-lg md:text-3xl font-black tracking-wide leading-tight uppercase"
              >
                COMPLETE FULFILLMENT SOLUTIONS<br />
                <span className="text-secondary">BUILT AROUND YOUR BUSINESS</span>
              </motion.h3>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
