'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import ConsultationForm from '../home/ConsultationForm';
const ContactSection = () => {
  const { shouldAnimate, registerVisit } = useAnimation('contact-section');

  return (
    <section className="py-24 bg-white relative overflow-hidden bg-grid-pattern">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => registerVisit()}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
                Our <span className="text-secondary text-shadow-sm">Headquarters</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium max-w-md leading-relaxed">
                Visit us or reach out directly. We're always ready to discuss your logistics needs.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-secondary transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V16M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-1">Location</h4>
                  <p className="text-gray-600 font-medium">965 Highams Ct Woodbridge,<br />VA 22191</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-secondary transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M22 16.92V19.92C22 20.47 21.53 20.95 20.97 20.92C17.89 20.74 14.97 19.8 12.4 18.26C10.01 16.91 7.96 14.86 6.61 12.47C5.06 9.89 4.12 6.96 3.94 3.87C3.91 3.31 4.39 2.84 4.94 2.84H7.94C8.43 2.84 8.84 3.2 8.93 3.69C9.05 4.36 9.24 5.01 9.49 5.63C9.6 5.88 9.54 6.17 9.35 6.36L7.44 8.27C8.86 11.08 11.15 13.37 13.96 14.79L15.87 12.88C16.06 12.69 16.35 12.63 16.6 11.74C17.22 11.99 17.87 12.18 18.54 12.3C19.04 12.39 19.41 12.81 19.41 13.31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-1">Phone</h4>
                  <p className="text-gray-600 font-bold text-lg hover:text-secondary transition-colors">+1 (571) 343-9672</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-secondary transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-1">Email</h4>
                  <p className="text-gray-600 font-bold text-lg hover:text-secondary transition-colors">support@52logistics.com</p>
                </div>
              </div>
            </div>

            {/* Stylized Map View (Similar to ConsultationForm) */}
            <div className="w-full h-[250px] bg-[#F2F4F1] rounded-3xl overflow-hidden relative border-8 border-white shadow-xl">
                <div className="absolute w-[200%] h-8 bg-white top-10 -left-10 rotate-6" />
                <div className="absolute w-[200%] h-12 bg-white top-32 -left-10 -rotate-3" />
                <div className="absolute w-12 h-[200%] bg-white left-[40%] -top-10 shadow-sm" />
                <div className="absolute w-2 h-[200%] bg-[#F9D77E] left-[42%] -top-10 z-10" />
                
                {/* Pin */}
                <div className="absolute top-1/2 left-[43%] -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center">
                   <svg width="32" height="40" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary drop-shadow-md">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" fill="currentColor"/>
                   </svg>
                   <div className="bg-white/95 px-3 py-1.5 rounded-xl text-sm font-black text-primary shadow-lg border border-gray-100 mt-2">
                      52Logistics
                   </div>
                </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <ConsultationForm/>    

        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="glow-orb-orange top-1/4 -left-20 w-80 h-80 opacity-30" />
      <div className="glow-orb-navy bottom-1/4 -right-20 w-96 h-96 opacity-20" />
    </section>
  );
};

export default ContactSection;
