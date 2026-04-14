'use client';

import Hero from '@/components/services/retail-fulfilment/Hero';
import InfoSection from '@/components/services/retail-fulfilment/InfoSection';
import ValueAddedSection from '@/components/services/retail-fulfilment/ValueAddedSection';
import ProcessSection from '@/components/services/retail-fulfilment/ProcessSection';
import SolutionSection from '@/components/services/ecommerce-fulfilment/SolutionSection';

import OptimizeSection from '@/components/services/retail-fulfilment/EcomAdvantage';

export default function EcommerceFulfillmentPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Content */}
            <div className="pt-0"> {/* Navbar is fixed, so we handle padding inside Hero if needed */}
                <Hero />
                <InfoSection />
                <OptimizeSection />
                <ValueAddedSection />
                <ProcessSection />
                <SolutionSection />
            </div>
        </main>
    );
}
