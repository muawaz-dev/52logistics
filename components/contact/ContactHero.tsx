'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image';

const ContactHero = () => {
  const { shouldAnimate, registerVisit } = useAnimation('contact-hero');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    registerVisit();
  }, [registerVisit]);

  return (
    <section className="relative w-full min-h-screen  bg-primary flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/hero.png"
          alt="Contact 52Logistics"
          fill
          className="object-cover opacity-40"
          priority
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="max-w-6xl px-6 md:px-12 relative z-10">
        <div className="max-w-6xl">
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
              className="inline-block text-secondary font-black uppercase tracking-[0.3em] text-sm mb-6"
            >
              Get In Touch
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold -skew-x-6 leading-[0.9] text-white mb-6 tracking-tighter">
              Contact <span className="text-secondary text-stroke-white">Us</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-medium">
              Have questions about our fulfillment services? Our experts are here to help you scale your logistics.
              Reach out anytime — we’re ready to guide you, answer your concerns, and build solutions together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
