'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
  const { shouldAnimate, registerVisit } = useAnimation('retail-hero');
  const [loadedImagesCount, setLoadedImagesCount] = React.useState(0);
  const totalImages = 5;
  const isLoaded = loadedImagesCount === totalImages;

  React.useEffect(() => {
    registerVisit();
    const timer = setTimeout(() => {
      setLoadedImagesCount(totalImages);
    }, 1000);
    return () => clearTimeout(timer);
  }, [registerVisit, totalImages]);

  return (
    <section className="relative justify-center w-full min-h-[80vh] md:min-h-screen bg-primary flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="pt-6 w-full px-6 md:px-12 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
            animate={{ opacity: !shouldAnimate || isLoaded ? 1 : 0, x: !shouldAnimate || isLoaded ? 0 : -50 }}
            transition={{ duration: shouldAnimate ? 0.8 : 0.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold -skew-x-6 leading-[0.9] text-white mb-6 tracking-tighter">
              B2B <br />
              <span className="text-secondary">Ecommerce</span> <br />
              Fulfillment Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl leading-relaxed font-medium">
              Scale and streamline your B2B operations with adaptive retail fulfillment solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary mb-4 hover:bg-secondary/90 text-primary font-black px-8 py-4 rounded-full text-md transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Right Content - Retailer Logos */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: !shouldAnimate || isLoaded ? 1 : 0, y: !shouldAnimate || isLoaded ? 0 : 20 }}
            transition={{ duration: shouldAnimate ? 1 : 0.4, delay: shouldAnimate ? 0.2 : 0 }}
            className="hidden lg:flex justify-center items-center relative h-[500px]"
          >
            {/* Retailer Cards */}
            {[
              { src: "/retail-fulfilment/hero/amazon.png", alt: "Amazon", className: "top-0 left-0 w-64 h-32", delay: 0, y: [0, -15, 0] },
              { src: "/retail-fulfilment/hero/walmart.png", alt: "Walmart", className: "top-4 -right-10 w-72 h-32", delay: 0.5, y: [0, 15, 0] },
              { src: "/retail-fulfilment/hero/best-buy.png", alt: "Best Buy", className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 z-20", delay: 0.8, y: [0, -20, 0] },
              { src: "/retail-fulfilment/hero/ebay.png", alt: "eBay", className: "bottom-10 -left-10 w-56 h-32", delay: 1, y: [0, -10, 0] },
              { src: "/retail-fulfilment/hero/the-home-depot.png", alt: "The Home Depot", className: "bottom-10 right-10 w-64 h-32", delay: 1.5, y: [0, 12, 0] },
            ].map((retailer, idx) => (

              <motion.div
                key={idx}
                animate={{ y: retailer.y }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: retailer.delay }}
                className={`absolute ${retailer.className} bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl flex items-center justify-center`}
              >
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">
                  <Image
                    src={retailer.src}
                    alt={retailer.alt}
                    width={200}
                    height={200}
                    className="max-w-full max-h-full object-contain filter drop-shadow-xl"
                    onLoad={() => setLoadedImagesCount(prev => prev + 1)}
                    priority
                  />
                </div>
              </motion.div>
            ))}


            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-secondary/30 rounded-full animate-ping [animation-duration:3s]" />
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
