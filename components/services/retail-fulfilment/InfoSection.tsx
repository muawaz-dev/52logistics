'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const InfoSection = () => {
  return (
    <section className="py-24 bg-grid-pattern overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 w-96 h-110 flex items-center justify-center border-8 border-white">
              {/* Simulated Person/Activity Image */}
              <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/retail-fulfilment/info-image.jpeg"
                  alt="Retail Fulfillment"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={false}
                />
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-secondary/10 rounded-[3rem] z-0" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight">
              Scale and grow with <br />
              <span className="text-secondary">end-to-end</span> retail <br />
              fulfillment solutions
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="text-gray-700 font-semibold tracking-wide text-md md:text-lg leading-relaxed  ">
                Speedy, accurate, flexible retail fulfillment starts here
                Unlock growth and take the complexity out of B2B retail fulfillment with effortless wholesale consolidation processes that maintain accuracy, quality control, and attention to detail.
              </p>
              <p className="text-gray-700 font-medium tracking-wide text-md md:text-lg leading-relaxed opacity-80">
                Electronic data interchange ensures that orders are consolidated into portable shipments that meet retailer requirements, so you can manage shipping costs without ever compromising on quality and efficiency.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group flex items-center gap-4 text-xl font-black text-primary tracking-widest"
              >
                <span className="bg-secondary px-8 py-4 rounded-full group-hover:bg-secondary/90 transition-all">
                  Let's Talk
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
