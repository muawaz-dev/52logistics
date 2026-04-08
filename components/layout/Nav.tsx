// Navbar Component - Main Navigation with Services Dropdown
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/m';
export default function Navbar() {
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setHasUserScrolled(window.scrollY > 15);
    };
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Video Editing', href: '/services/video-editing' },
    { name: 'Graphic Designing', href: '/services/graphic-designing' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { name: 'Ad Campaigns', href: '/services/ad-campaigns' },
    { name: 'Productivity Tools', href: '/services/productivity-tools' },
  ];


  const roleBasedNav =
    [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Services',
        link: null
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Contact',
        link: '/contact'
      }
    ].filter(Boolean)



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasUserScrolled ? 'bg-white' : 'bg-transparent'}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="w-[250px] h-[80px] relative">
              <Image
                src="/home/logo1.png"
                alt="Kodac Solutions Logo"
                fill
                className={`object-contain`}
                priority
              />
            </motion.div>
          </Link>
          <div>
          </div>

          {/* Desktop Navigation */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="hidden lg:flex items-center space-x-8"
          >
            {roleBasedNav.map((item) => {
              if (item?.name === "Services") {
                return (
                  <div
                    key={item?.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Services Dropdown */}
                    <button
                      className={`text-base font-medium transition-colors flex items-center ${pathname.startsWith("/services")
                        ? "text-secondary"
                        : "text-gray-700 hover:text-secondary"
                        }`}
                    >
                      {item?.name}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.link || "/"}
                  className={`text-base font-medium transition-colors ${pathname === item.link
                    ? "text-[#E67E22]"
                    : "text-gray-700 hover:text-[#E67E22]"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            aria-label='menu'
            className="lg:hidden p-2"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              setHasUserScrolled(true)
            }
            }
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {roleBasedNav.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsServicesOpen(true)}
                        className="text-base font-medium text-gray-700 hover:text-red-500 flex items-center w-full"
                      >
                        Services
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block text-sm text-gray-600 hover:text-red-500"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.link || "/"}
                    className="text-base font-medium text-gray-700 hover:text-red-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div >
    </nav >
  );
}
// End of Navbar Component