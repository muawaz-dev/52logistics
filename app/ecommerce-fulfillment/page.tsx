'use client';

import React from 'react';
import Navbar from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ecommerce-fulfillment/Hero';
import InfoSection from '@/components/ecommerce-fulfillment/InfoSection';
import ProcessSection from '@/components/ecommerce-fulfillment/ProcessSection';
import SolutionSection from '@/components/ecommerce-fulfillment/SolutionSection';

import OptimizeSection from '@/components/ecommerce-fulfillment/OptimizeSection';

export default function EcommerceFulfillmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Content */}
      <div className="pt-0"> {/* Navbar is fixed, so we handle padding inside Hero if needed */}
        <Hero />
        <InfoSection />
        <OptimizeSection />
        <ProcessSection />
        <SolutionSection />
      </div>
    </main>
  );
}
