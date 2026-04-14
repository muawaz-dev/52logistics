'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useAnimation } from '@/context/AnimationContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { shouldAnimate, registerVisit } = useAnimation('global-footer');

  useEffect(() => {
    registerVisit();
  }, [registerVisit]);

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/ecommerce-fulfilment' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Ecommerce Fulfilment', href: '/ecommerce-fulfilment' },
      { name: 'Retail Fulfilment', href: '/retail-fulfilment' },
      { name: 'Amazon FBA And FBM', href: '/amazon-fba-fbm' },
    ],
    contact: [
      {
        icon: <MapPin className="w-5 h-5 flex-shrink-0" />,
        text: '123 Feiscantos Road, Bemen, TX 20600',
        href: 'https://maps.google.com'
      },
      {
        icon: <Phone className="w-5 h-5 flex-shrink-0" />,
        text: '(+800) 537-3350',
        href: 'tel:+8005373350'
      },
      {
        icon: <Mail className="w-5 h-5 flex-shrink-0" />,
        text: 'hello@52logistics.com',
        href: 'mailto:hello@52logistics.com'
      },
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Linkedin',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: '#'
    },
  ];

  return (
    <footer className="relative bg-primary text-white pt-20 pb-10 overflow-hidden bg-grid-pattern-light">
      {/* Decorative Orbs */}
      <div className="glow-orb-orange top-0 right-0 w-96 h-96 opacity-10 translate-x-1/2 -translate-y-1/2" />
      <div className="glow-orb-navy bottom-0 left-0 w-[500px] h-[500px] opacity-10 -translate-x-1/2 translate-y-1/2" />

      <motion.div 
        initial={shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative bg-gray-200 rounded-4xl w-[220px] h-[60px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/home/logo1.png"
                  alt="52Logistics Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
              Expertly handling your logistics, so you can focus on growing your business. Premium 3PL solutions for modern brands.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              Quick <span className="text-secondary underline decoration-2 underline-offset-8">Links</span>
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center group transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              Our <span className="text-secondary underline decoration-2 underline-offset-8">Services</span>
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center group transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              Contact <span className="text-secondary underline decoration-2 underline-offset-8">Us</span>
            </h4>
            <ul className="space-y-6">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm leading-relaxed pt-1">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} 52Logistics. All rights reserved. Precision in every move.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
