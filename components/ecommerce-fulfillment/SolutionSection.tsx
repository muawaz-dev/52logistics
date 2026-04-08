'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const tabs = [
  { 
    id: 'fulfillment', 
    label: 'Fulfillment Services',
    title: 'Warehousing and Fulfillment',
    description: "Store your inventory across 250,000 sq. ft. of warehousing space and fulfill your orders faster with a cloud-based Warehouse Management System (WMS) that optimizes your pick, pack, and ship processes. With comprehensive 3PL services, from ecommerce fulfillment to B2B retail fulfillment, Amazon FBA and FBM, subscription boxes, and crowdfunding fulfillment, you'll stay in control of your inventory and streamline your operations from end-to-end, so you can maximize efficiency and scale your growth.",
    subtext: 'Maximize efficiency and manage your inventory with tech-driven warehousing and fulfillment solutions.'
  },
  { 
    id: 'delivery', 
    label: 'Delivery Services',
    title: 'Precision Last-Mile Delivery',
    description: "Same-Day and Next-Day Delivery Enhance your customer’s experience with sustainable same-day and next-day delivery across major cities in USA. With a fleet of over 500 vehicles at your service, including a growing fleet of electric vehicles, delight your customers with a prime last-mile delivery experience that wins their loyalty and takes your brand to the next level.Offer an unparalleled customer experience with daily expedited delivery across major American cities.",
    subtext: 'Global reach combined with local expertise for the fastest delivery times.'
  },
  { 
    id: 'freight', 
    label: 'Management Services',
    title: 'Reliable Freight Solutions',
    description: "Navigate complex global supply chains with ease. Our freight solutions cover air, sea, and land, providing you with the most cost-effective and reliable routes for bulk inventory movement. We handle customs and documentation so you don't have to.",
    subtext: 'Scale your international operations with our robust freight network.'
  },
  { 
    id: 'shipping', 
    label: 'Shipping Services',
    title: 'Optimized Shipping & Logistics',
    description: "Shipping Services Streamline your operations and take your brand further with competitive shipping rates, advanced tracking technology, and intelligent shipping solutions. From domestic and international courier solutions to freight shipping by air, ocean, rail, and ground, maximize savings and efficiency, no matter what or where you ship.* Valid for fulfillment customers Simplify your shipping and maximize your savings to maintain profitability.",
    subtext: 'Smart shipping strategies that drive down costs and drive up satisfaction.'
  }
];

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight"
          >
            Your one-stop shipping and <br />
            <span className="text-secondary">fulfillment</span> solution
          </motion.h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-100 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm md:text-base font-black uppercase tracking-widest transition-all relative ${
                activeTab.id === tab.id ? 'text-secondary' : 'text-gray-400 hover:text-primary'
              }`}
            >
              {tab.label}
              {activeTab.id === tab.id && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-[-2px] left-0 w-full h-1 bg-secondary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight border-l-8 border-secondary pl-6">
                  {activeTab.title}
                </h3>
                <p className="text-gray-700 font-semibold tracking-wide text-md md:text-lg leading-relaxed mb-4">
                  {activeTab.description}
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-secondary shadow-sm mb-10">
                  <p className="text-primary font-bold italic">
                    "{activeTab.subtext}"
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white font-black px-10 py-4 rounded-full text-lg hover:bg-primary/90 transition-all shadow-lg uppercase tracking-widest"
                >
                  Learn more
                </Link>
              </div>

              {/* Right - Image Placeholder (Warehouse feel) */}
              <div className="order-1 lg:order-2 h-[400px] lg:h-full relative rounded-3xl overflow-hidden shadow-2xl">
                 {/* This would be the warehouse.jpeg placeholder */}
                 <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 z-10" />
                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-40 h-40 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                 </div>
                 {/* Floating label */}
                 <div className="absolute top-8 right-8 bg-secondary text-primary font-black px-4 py-2 rounded-lg text-xs tracking-widest uppercase z-20 shadow-xl">
                    Managed by 52Logistics
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
