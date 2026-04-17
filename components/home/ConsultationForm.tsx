'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
const services = [
  "Fulfillment",
  "Same Day And Next Day Delivery",
  "Freight Services",
  "EasyPay Support"
  
]
const ConsultationForm = () => {
  const { shouldAnimate, registerVisit } = useAnimation('home-consultation-form');

  return (
    <section className="w-full bg-white bg-grid-pattern relative py-20 px-6">
      <motion.div 
        initial={shouldAnimate ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => registerVisit()}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        
        {/* Main Form Container */}
        <div className="bg-primary rounded-4xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background element (optional) */}
          <div className="absolute top-0 right-0 w-64 h-full bg-secondary opacity-[0.02] rounded-full blur-3xl transform translate-x-1/2"></div>
          
          <div className="flex flex-col items-center justify-center md:flex-row gap-8 md:gap-12 relative z-10 mb-8">
            
            {/* Left Side: Inputs */}
            <div className="flex-1 items-center flex flex-col">
              <h3 className="text-white text-[28px] md:text-3xl font-bold mb-6 tracking-tight">
                Request a Consultation
              </h3>
              
              <div className="flex flex-col w-full max-w-xl gap-3.5">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all placeholder:text-gray-500 font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all placeholder:text-gray-500 font-medium"
                />
                <input 
                  type="phone" 
                  placeholder="Phone Number" 
                  className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all placeholder:text-gray-500 font-medium"
                />
                <input 
                  type="url" 
                  placeholder="Website URL" 
                  className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all placeholder:text-gray-500 font-medium"
                />
                <div className="relative">
                  <select 
                    className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all appearance-none font-medium cursor-pointer"
                    defaultValue=""
                  >
                    <option className='text-gray-800' value="" disabled>Services</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {/* Custom Chevron icon */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                    <svg width="12" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select 
                    className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all appearance-none font-medium cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Projected Order Volume</option>
                    <option value="0-500">0 - 500 orders / mo</option>
                    <option value="500-2500">500 - 2,500 orders / mo</option>
                    <option value="2500+">2,500+ orders / mo</option>
                  </select>
                  {/* Custom Chevron icon */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                    <svg width="12" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Button */}
          <button className="relative z-10 w-full bg-[#E67E22] hover:bg-[#d4721c] text-white font-extrabold text-[17px] py-[18px] rounded-4xl transition-all transform hover:scale-[1.01] shadow-md border-b-4 border-[#b55b0a] active:border-b-0 active:translate-y-1">
            Let's Build Your Success
          </button>
          
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultationForm;
