import React, { useEffect } from "react";
import { DouWanComparisonSection } from "@/components/home/DouWanComparisonSection";
import { PricingSection } from "@/components/home/PricingSection";
import { LatencyComparison } from "@/components/home/LatencyComparison";

export const ComparePage: React.FC = () => {
  useEffect(() => {
    document.title = "PSG Cast vs DouWan — Features, Latency & Architecture Comparison";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <DouWanComparisonSection />
      <LatencyComparison />
      <PricingSection />
    </main>
  );
};

export default ComparePage;
