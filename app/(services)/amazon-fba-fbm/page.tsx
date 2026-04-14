'use client';

import Hero from '@/components/services/amazon-fba-fbm/Hero';
import InfoSection from '@/components/services/amazon-fba-fbm/InfoSection';
import ValueAddedSection from '@/components/services/amazon-fba-fbm/ValueAddedSection';
import BrandSection from '@/components/services/ecommerce-fulfilment/BrandSection';
import ProcessSection from '@/components/services/ecommerce-fulfilment/ProcessSection';
import SolutionSection from '@/components/services/ecommerce-fulfilment/SolutionSection';
import OptimizeSection from '@/components/services/amazon-fba-fbm/OptimizeSection';

export default function AmazonFbaFbmPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Content */}
      <div className="pt-0"> {/* Navbar is fixed, so we handle padding inside Hero if needed */}
        <Hero />
        <InfoSection />
        <OptimizeSection />
        <ValueAddedSection />
        <SolutionSection />
      </div>
    </main>
  );
}
