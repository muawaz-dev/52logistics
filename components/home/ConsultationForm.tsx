'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ConsultationForm = () => {
  return (
    <section className="w-full bg-white bg-grid-pattern relative py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        
        {/* Main Form Container */}
        <div className="bg-primary rounded-4xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background element (optional) */}
          <div className="absolute top-0 right-0 w-64 h-full bg-secondary opacity-[0.02] rounded-full blur-3xl transform translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10 mb-8">
            
            {/* Left Side: Inputs */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-white text-[28px] md:text-3xl font-bold mb-6 tracking-tight">
                Request a Consultation
              </h3>
              
              <div className="flex flex-col gap-3.5">
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
                  type="url" 
                  placeholder="Website URL" 
                  className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-800 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all placeholder:text-gray-500 font-medium"
                />
                <div className="relative">
                  <select 
                    className="w-full rounded-xl px-5 py-3.5 text-[15px] text-gray-500 bg-white border border-transparent focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] outline-none transition-all appearance-none font-medium cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Projected Order Volume</option>
                    <option value="0-500">0 - 500 orders / mo</option>
                    <option value="500-2500">500 - 2,500 orders / mo</option>
                    <option value="2500+">2,500+ orders / mo</option>
                  </select>
                  {/* Custom Chevron icon */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Map & Info */}
            <div className="w-full md:w-[42%] flex flex-col justify-end pt-2 md:pt-0">
              
              {/* Map UI Element */}
              <div className="w-full h-[180px] md:h-44 bg-[#F2F4F1] rounded-2xl overflow-hidden relative mb-6 border-4 border-white shadow-sm">
                {/* CSS Map Roads */}
                <div className="absolute w-[200%] h-8 bg-white top-10 -left-10 rotate-6 shadow-[0_0_1px_rgba(0,0,0,0.1)]"></div>
                <div className="absolute w-[200%] h-12 bg-white top-24 -left-10 -rotate-3 shadow-[0_0_1px_rgba(0,0,0,0.1)]"></div>
                <div className="absolute w-12 h-[200%] bg-white left-[40%] -top-10 shadow-[0_0_1px_rgba(0,0,0,0.1)]"></div>
                
                {/* CSS Map Route Header/Line */}
                <div className="absolute w-2 h-[200%] bg-[#F9D77E] left-[42%] -top-10 shadow-[0_0_1px_rgba(0,0,0,0.1)] z-10"></div>
                <div className="absolute w-[200%] h-2 bg-[#F9D77E] top-[108px] -left-10 -rotate-3 shadow-[0_0_1px_rgba(0,0,0,0.1)] z-10"></div>
                
                {/* Map Park/Water Blobs */}
                <div className="absolute w-24 h-24 bg-[#DCECD8] rounded-full top-4 -right-6 blur-[2px]"></div>
                <div className="absolute w-16 h-12 bg-[#D1E0E8] rounded-full top-20 left-4 blur-[1px]"></div>
                
                {/* Small text simulations */}
                <div className="absolute left-[8%] top-[60%] text-[8px] text-[#5586A4] font-bold -rotate-3 tracking-wide bg-white/50 px-1 rounded">Riverpark Resouece</div>
                
                {/* Map Pin */}
                <div className="absolute top-1/2 left-[43%] -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center drop-shadow-md">
                   <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-9 text-[#D83A3A]">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" fill="currentColor"/>
                   </svg>
                   <div className="w-3 h-1 bg-black/20 rounded-[100%] blur-[1px] mt-0.5"></div>
                   
                   {/* Popover Box connected to cursor */}
                   <div className="absolute top-1 left-7 bg-white/90 px-2 py-1 rounded text-[8px] font-bold text-gray-800 shadow-sm border border-gray-100 min-w-[70px]">
                      52Logistics<br/><span className="text-[6px] text-gray-500 font-normal">Headquarters</span>
                   </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4 pl-2 lg:pl-4">
                
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 text-[#E67E22]">
                    <svg width="18" height="20" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1C4.58172 1 1 4.58172 1 9C1 15.6667 9 21 9 21C9 21 17 15.6667 17 9C17 4.58172 13.4183 1 9 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col leading-snug">
                    <span className="text-gray-100 text-[15px] font-medium tracking-wide">123 Feiscantos Road</span>
                    <span className="text-gray-100 text-[15px] font-medium tracking-wide">Bemen, TX 20600</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 text-[#E67E22] transform -scale-x-100">
                     {/* Phone Receiver SVG */}
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15.92V18.92C21 19.47 20.53 19.95 19.97 19.92C16.89 19.74 13.97 18.8 11.4 17.26C9.01 15.91 6.96 13.86 5.61 11.47C4.06 8.89 3.12 5.96 2.94 2.87C2.91 2.31 3.39 1.84 3.94 1.84H6.94C7.43 1.84 7.84 2.2 7.93 2.69C8.05 3.36 8.24 4.01 8.49 4.63C8.6 4.88 8.54 5.17 8.35 5.36L6.44 7.27C7.86 10.08 10.15 12.37 12.96 13.79L14.87 11.88C15.06 11.69 15.35 11.63 15.6 11.74C16.22 11.99 16.87 12.18 17.54 12.3C18.04 12.39 18.41 12.81 18.41 13.31L18.41 15.92Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-[15px] font-bold tracking-wide">(+800) 537-3350</span>
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
