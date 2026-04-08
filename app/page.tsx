import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturesBanner from "@/components/home/FeaturesBanner";
import AdvancedTech from "@/components/home/AdvancedTech";
import TransportBanner from "@/components/home/TransportBanner";
import ComparisonSection from "@/components/home/ComparisonSection";
import ResultsSection from "@/components/home/ResultsSection";
import ConsultationForm from "@/components/home/ConsultationForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <FeaturesBanner />
      <AdvancedTech />
      <TransportBanner />
      <ComparisonSection />
      <ResultsSection />
      <ConsultationForm />
    </main>
  );
}
