import React, { useEffect } from "react";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";

export const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Pricing Plans & Licenses — PSG Cast for macOS";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <PricingSection />
      <FAQSection />
    </main>
  );
};

export default PricingPage;
