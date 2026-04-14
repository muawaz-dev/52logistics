'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';

const ComparisonSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('home-comparison');

  return (
    <section className="w-full bg-white bg-grid-pattern py-24 px-6 font-sans">
      <motion.div 
        initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => registerVisit()}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        
        {/* Top Titles */}
        <h2 className="text-primary text-4xl md:text-5xl font-black mb-4 tracking-tight">
          Why Choose <span className="text-secondary">52Logistics</span>?
        </h2>
        <p className="text-gray-700 text-center text-md md:text-lg max-w-2xl mx-auto mb-16 font-semibold tracking-wide">
          Ready to scale your business? Let's discuss your custom<br className="hidden md:block" />
          fulfillment plan today. Choose only 52Logistics.
        </p>

        {/* Comparison Container */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto items-stretch justify-center relative">
          
          {/* Left Panel (Raised) */}
          <div className="w-full md:w-[55%] bg-white rounded-2xl shadow-[0_15px_60px_rgba(0,0,0,0.15)] z-10 flex flex-col overflow-hidden relative">
            <div className="bg-primary text-white text-center py-5 px-6 text-xl tracking-wide shadow-2xl font-black">
              The <span className="text-secondary">52Logistics</span> Advantage
            </div>
            
            <div className="flex flex-col px-8 py-2 bg-white grow">
              
              {/* Item 1 */}
              <div className="flex items-center gap-5 py-5 border-b border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <rect x="2" y="3" width="20" height="18" rx="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="6" y1="17" x2="6" y2="12" />
                    <line x1="10" y1="17" x2="10" y2="14" />
                    <line x1="14" y1="17" x2="14" y2="11" />
                    <line x1="18" y1="17" x2="18" y2="15" />
                  </svg>
                </div>
                <span className="font-extrabold text-[#1a1a1a] text-lg">Custom Dashboards</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-5 py-5 border-b border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="font-extrabold text-[#1a1a1a] text-lg">Global Reach</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-5 py-5 border-b border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M21 16V8a9 9 0 0 0-18 0v8A4 4 0 0 0 7 20h2" />
                    <path d="M15 20h2a4 4 0 0 0 4-4" />
                    <path d="M7 12h10" />
                    <text x="12" y="10" textAnchor="middle" stroke="none" fill="currentColor" fontSize="6" fontWeight="bold">24/7</text>
                  </svg>
                </div>
                <span className="font-extrabold text-[#1a1a1a] text-lg">24/7 Support</span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-5 py-5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 1 8.3C18 16 14.88 20 11 20Z" />
                    <path d="M11 20A7 7 0 0 1 4 13c0-2 .6-4 2-5s1.2-1.3 3-1.6" />
                    <line x1="11" y1="20" x2="15" y2="12" />
                  </svg>
                </div>
                <span className="font-extrabold text-[#1a1a1a] text-lg">Eco-friendly Options</span>
              </div>

            </div>
          </div>

          {/* Right Panel (Behind, Flushed Left) */}
          <div className="w-full md:w-[45%] bg-[#F5F5F5] rounded-b-2xl md:rounded-b-none md:rounded-r-2xl border border-gray-200 md:border-l-0 z-0 flex flex-col md:-ml-6 overflow-hidden mt-2 md:mt-6 mb-2 md:mb-6 shadow-sm">
            <div className="bg-[#EAEAEA] text-[#1a1a1a] text-center py-5 px-6 md:pl-12 text-xl font-black md:rounded-tr-2xl">
              Typical 3PL Challenges
            </div>
            
            <div className="flex flex-col px-8 md:pl-14 py-2 grow">
              
              {/* Item 1 */}
              <div className="flex items-center gap-4 py-5 border-b border-gray-200">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="#C92A2A" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <circle cx="12" cy="12" r="11" />
                    <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-extrabold text-gray-800 text-lg">Hidden Fees</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 py-5 border-b border-gray-200">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="#C92A2A" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <circle cx="12" cy="12" r="11" />
                    <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-extrabold text-gray-800 text-lg">Stockouts</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 py-5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="#C92A2A" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <circle cx="12" cy="12" r="11" />
                    <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-extrabold text-gray-800 text-lg">Slow Response</span>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
