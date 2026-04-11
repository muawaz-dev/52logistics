'use client';

import Hero from '@/components/services/amazon-fba-fbm/Hero';
import InfoSection from '@/components/services/amazon-fba-fbm/InfoSection';
import BrandSection from '@/components/services/ecommerce-fulfilment/BrandSection';
import ProcessSection from '@/components/services/ecommerce-fulfilment/ProcessSection';
import SolutionSection from '@/components/services/ecommerce-fulfilment/SolutionSection';

import OptimizeSection from '@/components/services/ecommerce-fulfilment/OptimizeSection';

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
