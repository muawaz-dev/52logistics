'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import ValuesSection from '@/components/about/ValuesSection';
import ConsultationForm from '@/components/home/ConsultationForm';
import Link from 'next/link';
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <MissionSection />
      
      {/* Narrative Section - Our Story */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-primary text-4xl md:text-5xl font-black mb-12 tracking-tight">
              Our <span className="text-secondary">Story</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 font-semibold tracking-wide text-md md:text-lg leading-relaxed">
              <p>
                Founded in 2012, 52Logistics began with a single vision: to bridge the gap between complex global supply chains and the entrepreneurial spirit of modern ecommerce. What started as a small warehousing operation has evolved into a powerhouse of intelligent logistics.
              </p>
              <p>
                Over the past decade, we have navigated the shifts of the global economy, the rise of Amazon FBA, and the digital transformation of retail. Every challenge has been an opportunity to innovate, leading us to develop a proprietary technology stack that integrates seamlessly with major platforms like Shopify, Walmart, and eBay.
              </p>
              <p>
                Today, 52Logistics stands as a trusted partner to hundreds of brands, processing millions of orders with the same precision and dedication that defined our first day. We remain committed to our roots while aggressively pursuing the future of automated, eco-friendly, and ultra-reliable fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      
      {/* Final Call to Action */}
      <section className="pt-12 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Decorative background for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight">
                Ready to Scale Your <br />
                <span className="text-secondary text-stroke-white">Operations?</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-medium mb-12 max-w-2xl">
                Join the hundreds of brands that trust 52Logistics for their global distribution needs.
              </p>
              <Link href={"/contact"} className="relative z-10 w-full bg-secondary hover:bg-[#d4721c] text-white font-extrabold text-[17px] py-[18px] rounded-4xl transition-all transform hover:scale-[1.01] shadow-md border-b-4 border-[#b55b0a] active:border-b-0 active:translate-y-1">
            Let's Build Your Success
          </Link>
          
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
