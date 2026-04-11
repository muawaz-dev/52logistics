'use client';

import React from 'react';
import Navbar from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/services/retail-fulfilment/Hero';
import InfoSection from '@/components/services/retail-fulfilment/InfoSection';
import BrandSection from '@/components/services/retail-fulfilment/BrandSection';
import ProcessSection from '@/components/services/retail-fulfilment/ProcessSection';
import SolutionSection from '@/components/services/ecommerce-fulfilment/SolutionSection';

import OptimizeSection from '@/components/services/retail-fulfilment/OptimizeSection';

export default function EcommerceFulfillmentPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Content */}
            <div className="pt-0"> {/* Navbar is fixed, so we handle padding inside Hero if needed */}
                <Hero />
                <InfoSection />
                <OptimizeSection />
                <BrandSection />
                <ProcessSection />
                <SolutionSection />
            </div>
        </main>
    );
}
