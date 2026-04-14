'use client';

import React from 'react';

const FeaturesBanner = () => {
  return (
    <section className="relative bg-grid-pattern w-full max-w-6xl mx-auto px-8 pb-20">
      <div className="bg-primary rounded-3xl md:rounded-[2.5rem] py-10 px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative">
      

        {/* Feature 1: RELIABLE */}
        <div className="flex justify-center items-center gap-6 flex-1 w-full md:w-auto relative group">
          {/* Icon */}
          <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringFade1" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Outer changing ring */}
              <circle cx="50" cy="50" r="46" stroke="url(#ringFade1)" strokeWidth="2" fill="none" />
              
              {/* Shield Icon */}
              {/* Outer Shield Outline */}
              <path d="M50 22 C50 22, 32 26, 28 28 V50 C28 68, 50 82, 50 82 C50 82, 72 68, 72 50 V28 C68 26, 50 22, 50 22 Z" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round" />
              {/* Inner Shield Outline */}
              <path d="M50 30 C50 30, 38 33, 35 34 V50 C35 63, 50 73, 50 73 C50 73, 65 63, 65 50 V34 C62 33, 50 30, 50 30 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
              {/* Diagonal Slash in Shield */}
              <path d="M38 60 L62 40 L65 43 L41 63 Z" fill="white" />
            </svg>
          </div>
          {/* Text */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg md:text-xl font-bold tracking-wide uppercase mb-1">
              RELIABLE
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-snug font-medium max-w-[200px]">
              Dependable service you can count on.
            </p>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block w-px h-24 bg-white/20 mx-4"></div>
        {/* Mobile divider */}
        <div className="block md:hidden w-full h-px bg-white/10 my-6"></div>

        {/* Feature 2: SCALABLE */}
        <div className="flex justify-center items-center gap-6 flex-1 w-full md:w-auto relative group">
          {/* Icon */}
          <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringFade2" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Outer changing ring */}
              <circle cx="50" cy="50" r="46" stroke="url(#ringFade2)" strokeWidth="2" fill="none" />
              
              {/* Scalable Icon - Bars */}
              <rect x="32" y="55" width="8" height="15" fill="white" />
              <rect x="46" y="45" width="8" height="25" fill="white" />
              <rect x="60" y="35" width="8" height="35" fill="white" />
              
              {/* Scalable Icon - Arrow Line */}
              <path d="M25 50 L42 35 L52 45 L68 25" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Arrowhead */}
              <path d="M60 25 L68 25 V33" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Text */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg md:text-xl font-bold tracking-wide uppercase mb-1">
              SCALABLE
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-snug font-medium max-w-[200px]">
              Flexible solutions that grow with your business.
            </p>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block w-px h-24 bg-white/20 mx-4"></div>
        {/* Mobile divider */}
        <div className="block md:hidden w-full h-px bg-white/10 my-6"></div>

        {/* Feature 3: EFFICIENT */}
        <div className="flex justify-center items-center gap-6 flex-1 w-full md:w-auto relative group">
          {/* Icon */}
          <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringFade3" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Outer changing ring */}
              <circle cx="50" cy="50" r="46" stroke="url(#ringFade3)" strokeWidth="2" fill="none" />
              
              {/* Efficient Icon */}
              {/* Circular left arc */}
              <path d="M35 30 A 25 25 0 0 0 45 75 L45 75" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Down Arrow attached to arc */}
              <path d="M38 75 L45 75 L45 68" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Straight down arrow top left */}
              <path d="M45 25 V45 M40 40 L45 45 L50 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* 24 Text */}
              <text x="55" y="60" fill="white" fontSize="26" fontFamily="sans-serif" fontWeight="bold">24</text>
            </svg>
          </div>
          {/* Text */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg md:text-xl font-bold tracking-wide uppercase mb-1">
              EFFICIENT
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-snug font-medium max-w-[200px]">
              Streamlined operations that save time and money.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesBanner;
