'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-12 pb-16 flex flex-col items-center justify-center text-center mt-auto">
      
      {/* Footer Headline */}
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wide">
        52Logistics - Your Trusted Partner
      </h2>
      
      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[14px] text-gray-300 font-medium mb-10 px-4">
        <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Contact Us</a>
        <span className="text-gray-500 font-normal">|</span>
        <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Services</a>
        <span className="text-gray-500 font-normal">|</span>
        <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Case Studies</a>
        <span className="text-gray-500 font-normal">|</span>
        <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">About Us</a>
        <span className="text-gray-500 font-normal">|</span>
        <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Contact Form</a>
      </div>

      {/* Logo Wrapper */}
      <div className="mb-6 flex justify-center items-center h-14 relative group cursor-pointer">
        {/* We use logo.png, assuming it's correctly formatted for dark bgs. */}
        {/* If it fails to load, the alt text shows neatly. */}
        <img 
          src="/home/logo.png" 
          alt="52Logistics Logo" 
          className="h-full object-contain filter drop-shadow-md brightness-0 invert" 
          onError={(e) => {
            // Remove the invert property if the logo is already white or looks bad inverted
            e.currentTarget.style.filter = 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))';
          }}
        />
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3 mt-4">
        
        {/* Facebook */}
        <a href="#" className="w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
          </svg>
        </a>

        {/* Twitter */}
        <a href="#" className="w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* YouTube */}
        <a href="#" className="w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M21.582 6.186a2.6 2.6 0 00-1.838-1.85C18.117 3.9 12 3.9 12 3.9s-6.117 0-7.744.436a2.6 2.6 0 00-1.838 1.85C2 7.828 2 12 2 12s0 4.172.418 5.814a2.6 2.6 0 001.838 1.85C5.883 20.1 12 20.1 12 20.1s6.117 0 7.744-.436a2.6 2.6 0 001.838-1.85C22 16.172 22 12 22 12s0-4.172-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
