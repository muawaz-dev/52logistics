'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/context/AnimationContext';
import { Store, Smartphone, FileSignature, Network, Package, MapPin } from 'lucide-react';
import Image from 'next/image';
const AdvancedTech = () => {
  const { shouldAnimate, registerVisit } = useAnimation('home-advanced-tech');

  return (
    <section className="relative w-full py-20 bg-grid-pattern overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center relative z-10">

        <motion.h2
          initial={shouldAnimate ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => registerVisit()}
          viewport={{ once: true }}
          className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight mb-16 text-center"
        >
          Powered By Advanced
          <span className="ml-2 text-secondary">Tech.</span>

        </motion.h2>

        <div className="flex items-center flex-col lg:flex-row w-full gap-16 lg:gap-12">

          {/* Left Side: Integrations Grid & Text */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] items-center flex flex-col font-sans"
          >

            {/* Logos Grid (4x3) */}
            <div className="grid grid-cols-4 gap-4 mb-10 w-full max-w-[500px]">
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-2 hover:shadow-md transition-shadow">

                 <Image src="/home/advanced-tech/amazon.webp" alt="Amazon" width={80} height={80} />
              </div>
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 hover:shadow-md transition-shadow">
                <Image src="/home/advanced-tech/ebay.webp" alt="Ebay" width={80} height={80} />
              </div>
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-2 hover:shadow-md transition-shadow">
                <div className="relative mb-0.5">
                  <Image src="/home/advanced-tech/shopify.webp" alt="Shopify" width={80} height={80} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center p-2 hover:shadow-md transition-shadow">
                <Image src="/home/advanced-tech/walmart.webp"
                 alt="Walmart" width={100} height={100} />
              </div>
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 hover:shadow-md transition-shadow relative">
                {/* Magento Logo approximation */}
                <div className="w-10 h-10 flex items-center justify-center text-[#F26322]">
                 <Image src="/home/advanced-tech/magento.jpg"
                 alt="Magento" width={200} height={200} />
                </div>
              </div>
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 hover:shadow-md transition-shadow">
                {/* Bigcommerce Logo approximation */}
                <Image src="/home/advanced-tech/bigcommerce.webp"
                 alt="Bigcommerce" width={150} height={150} />
              </div>

              {/* Row 3 */}
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center p-2 hover:shadow-md transition-shadow">
                <span className="text-[17px] font-black tracking-tight flex items-baseline leading-none" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span className="text-[#4D148C]">Fed</span>
                  <span className="text-[#FF6600]">Ex</span>
                </span>
              </div>
              <div className="aspect-square bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 hover:shadow-md transition-shadow">
                <div className="relative flex items-center justify-center w-[85%] h-[85%]">
                  <svg viewBox="0 0 100 120" className="w-full h-full">
                    <path d="M10 20 L50 5 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 Z" fill="#FFB500" />
                    <path d="M15 25 L50 13 L85 25 V60 C85 85 50 107 50 107 C50 107 15 85 15 60 V25 Z" fill="#351C15" />
                    <path d="M18 28 L50 17 L82 28 V58 C82 81 50 101 50 101 C50 101 18 81 18 58 V28 Z" fill="none" stroke="#FFB500" strokeWidth="1.5" />
                  </svg>
                  <span className="absolute text-[#FFB500] font-serif italic font-bold text-[14px] top-1/2 -translate-y-1/2">ups</span>
                </div>
              </div>

            </div>

            <p className="text-[#102A4A] font-semibold tracking-wide text-md md:text-lg leading-relaxed max-w-[480px]">
              Seamlessly Integrate Your E-commerce Store with Our Advanced Order Management System.
            </p>
          </motion.div>

          {/* Right Side: iMac Mockup & Features Box */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] hidden sm:flex flex-col"
          >
            {/* iMac Mockup */}
            <div className="relative w-full shadow-2xl rounded-t-2xl mb-8">
              {/* iMac Display */}
              <div className="bg-[#1C1C1C] p-3 md:p-4 rounded-t-2xl rounded-b-sm border-b-[20px] border-b-[#EAEAEA] relative z-20 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                {/* Webcam */}
                <div className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#404040]"></div>

                {/* Screen UI */}
                <div className="bg-[#F8FAFC] rounded-sm overflow-hidden flex flex-col aspect-[16/10] relative">

                  {/* Top Nav */}
                  <div className="bg-white h-10 w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-sm z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-[#1F2937] rounded flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
                      </div>
                      <span className="text-[11px] font-bold text-gray-800">52 <span className="font-medium text-gray-500">Transaction</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Mock Profile */}
                      <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mb-1"></div>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-[9px] font-bold text-gray-800 leading-none">John Doe</span>
                        <span className="text-[7px] text-gray-500">Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-[80px] md:w-[130px] bg-[#1E293B] flex flex-col py-4 h-full shrink-0 items-start px-2 gap-2">
                      <div className="h-6 w-full rounded flex items-center px-2 gap-2 cursor-pointer bg-white/10 shrink-0">
                        <div className="w-3 h-3 bg-white/50 rounded-sm"></div>
                        <div className="hidden md:block h-1.5 bg-white/80 rounded w-10"></div>
                      </div>
                      <div className="h-6 w-full rounded flex items-center px-2 gap-2 cursor-pointer shrink-0">
                        <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                        <div className="hidden md:block h-1.5 bg-white/40 rounded w-12"></div>
                      </div>
                      <div className="h-6 w-full rounded flex items-center px-2 gap-2 cursor-pointer shrink-0">
                        <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                        <div className="hidden md:block h-1.5 bg-white/40 rounded w-14"></div>
                      </div>
                      <div className="h-6 w-full rounded flex items-center px-2 gap-2 cursor-pointer shrink-0">
                        <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                        <div className="hidden md:block h-1.5 bg-white/40 rounded w-8"></div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 bg-[#F1F5F9] p-4 flex flex-col gap-4 overflow-y-auto">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-gray-800 font-bold text-sm md:text-base">Inventory Dashboard</h3>
                        <button className="bg-[#2563EB] text-white text-[10px] px-3 py-1.5 rounded-md shadow-sm font-medium">Export Data</button>
                      </div>

                      {/* Top Widgets */}
                      <div className="grid grid-cols-3 gap-3 h-[100px] shrink-0">
                        {/* Circle Progress */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 relative flex flex-col">
                          <div className="text-[10px] text-gray-500 font-medium">Orders over total</div>
                          <div className="text-lg font-bold text-gray-800 leading-tight">25.6k</div>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-[#EFF6FF] border-t-[#2563EB] border-r-[#2563EB] flex items-center justify-center">
                            <span className="text-[9px] font-bold text-[#1E293B]">75%</span>
                          </div>
                        </div>
                        {/* Bar Chart Mock */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col">
                          <div className="text-[10px] text-gray-500 font-medium">Current Orders</div>
                          <div className="text-sm font-bold text-gray-800 mb-2 leading-tight">Elitefix</div>
                          <div className="flex items-end justify-between flex-1 gap-1">
                            {[40, 70, 50, 90, 60, 85, 55, 75].map((h, i) => (
                              <div key={i} className={`w-full rounded-t-sm ${i === 3 ? 'bg-[#3B82F6]' : 'bg-[#E2E8F0]'}`} style={{ height: `${h}%` }}></div>
                            ))}
                          </div>
                        </div>
                        {/* Circle Progress 2 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 relative flex flex-col">
                          <div className="text-[10px] text-gray-500 font-medium">Delivered Order</div>
                          <div className="text-lg font-bold text-gray-800 leading-tight">11.734</div>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-[#F0FDF4] border-t-[#16A34A] border-r-[#16A34A] flex items-center justify-center">
                            <span className="text-[9px] font-bold text-[#1E293B]">75%</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Widgets */}
                      <div className="grid grid-cols-2 gap-3 min-h-[120px] shrink-0">
                        {/* Line Chart 1 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col relative overflow-hidden">
                          <div className="text-[10px] font-bold text-gray-800">Extensive Dashboard</div>
                          <div className="absolute inset-x-0 bottom-0 top-8">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                              <path d="M0,35 Q10,25 20,30 T40,20 T60,25 T80,10 T100,20 V40 H0 Z" fill="#EFF6FF" />
                              <path d="M0,35 Q10,25 20,30 T40,20 T60,25 T80,10 T100,20" fill="none" stroke="#2563EB" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        {/* Line Chart 2 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col relative overflow-hidden">
                          <div className="text-[10px] font-bold text-gray-800">Web Data Preview</div>
                          <div className="absolute inset-x-0 bottom-0 top-8">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                              <path d="M0,25 Q15,10 30,20 T50,15 T70,30 T85,15 T100,25" fill="none" stroke="#94A3B8" strokeWidth="1" />
                              <path d="M0,35 Q20,30 40,35 T70,25 T100,35" fill="none" stroke="#64748B" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* iMac Stand */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[18%] h-8 bg-gradient-to-b from-[#D4D4D4] to-[#B0B0B0] z-10 flex flex-col items-center shadow-md">
                {/* Dark shade inside stand hole */}
                <div className="w-[30%] h-2 bg-[#909090] rounded-full mt-1 opacity-50"></div>
              </div>
              <div className="absolute -bottom-[38px] left-1/2 -translate-x-1/2 w-[24%] h-[6px] bg-[#E2E2E2] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] z-0"></div>
            </div>

            {/* Bottom Floating Feature Box */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#EEF4FF] rounded-2xl p-4 md:p-6 flex justify-between items-start gap-4 shadow-sm w-full mt-8 border border-blue-100/50"
            >
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="h-10 w-10 md:h-12 md:w-12 mb-3 relative flex items-center justify-center">
                  {/* Isometric boxes mockup */}
                  <div className="w-full h-full relative">
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#FE8C00] rounded-sm transform rotate-12 flex items-center justify-center">
                      <Package className="w-3 h-3 text-white" />
                    </div>
                    <div className="absolute top-1 left-1 w-6 h-6 bg-[#1F2937] rounded-sm transform -rotate-6"></div>
                    <MapPin className="w-5 h-5 text-[#3B82F6] absolute top-0 right-0 fill-[#BFDBFE]" strokeWidth={2} />
                  </div>
                </div>
                <p className="text-[#111827] font-semibold text-[10px] md:text-xs leading-tight">Isometric Delivery<br />Tracking</p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center text-center flex-1 border-l border-blue-200/60 pl-2 md:pl-4">
                <div className="h-10 w-10 md:h-12 md:w-12 mb-3 relative flex items-center justify-center">
                  <div className="relative w-8 h-10 border-2 border-[#1F2937] rounded-[4px] bg-white flex flex-col justify-end p-1">
                    <div className="w-full h-1 bg-gray-200 rounded-sm mb-1"></div>
                    <div className="w-4 h-1 bg-[#FE8C00] rounded-sm hidden md:block mb-1"></div>
                    <FileSignature className="w-4 h-4 text-[#3B82F6] absolute -right-2 -bottom-1 bg-white rounded-full" />
                  </div>
                </div>
                <p className="text-[#111827] font-semibold text-[10px] md:text-xs leading-tight">Proof of<br />Delivery (POD)</p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center text-center flex-1 border-l border-blue-200/60 pl-2 md:pl-4">
                <div className="h-10 w-10 md:h-12 md:w-12 mb-3 relative flex items-center justify-center">
                  <div className="relative w-9 h-7 bg-white border-2 border-[#1F2937] rounded-sm shadow-sm flex items-center justify-center -rotate-6">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M1 4C1 4 3 1 7 4C11 7 13 2 13 2" stroke="#FE8C00" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#3B82F6] rounded-full flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-[#111827] font-semibold text-[10px] md:text-xs leading-tight">Signature<br />Services</p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center text-center flex-1 border-l border-blue-200/60 pl-2 md:pl-4">
                <div className="h-10 w-10 md:h-12 md:w-12 mb-3 relative flex items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-6 border-2 border-[#1F2937] rounded-sm bg-white mb-1 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#FE8C00] rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-10 h-1 bg-[#1F2937] rounded-full mx-auto -ml-1"></div>
                    <Network className="w-4 h-4 text-[#3B82F6] absolute -right-2 top-0" />
                  </div>
                </div>
                <p className="text-[#111827] font-semibold text-[10px] md:text-xs leading-tight">Seamless API and EDI<br />integrations with all<br />major TMS</p>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AdvancedTech;
