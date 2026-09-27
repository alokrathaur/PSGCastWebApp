import React, { useEffect } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { ArchitectureSection } from "@/components/home/ArchitectureSection";
import { LatencyComparison } from "@/components/home/LatencyComparison";
import { DouWanComparisonSection } from "@/components/home/DouWanComparisonSection";
import { ShortcutsShowcase } from "@/components/home/ShortcutsShowcase";
import { PricingSection } from "@/components/home/PricingSection";
import { DownloadSection } from "@/components/home/DownloadSection";
import { AirPlayPermissionGuide } from "@/components/home/AirPlayPermissionGuide";
import { FAQSection } from "@/components/home/FAQSection";
import { DownloadCTA } from "@/components/home/DownloadCTA";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "PSG Cast — Ultra-Low Latency iPhone to Mac Screen Mirroring";
  }, []);

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Interactive Screen Mirroring Simulator */}
      <HeroSection />

      {/* 2. Features Grid: USB, Wi-Fi, Metal, OBS Clean Capture, Snapshot, Privacy */}
      <FeaturesGrid />

      {/* 3. Deep Architecture Pipeline & Metal GPU Engine */}
      <ArchitectureSection />

      {/* 4. Latency & FPS Performance Benchmark Comparison */}
      <LatencyComparison />

      {/* 5. DouWan vs. PSG Cast Head-to-Head Comparison */}
      <DouWanComparisonSection />

      {/* 6. macOS Keyboard Shortcuts Matrix */}
      <ShortcutsShowcase />

      {/* 7. Localized Pricing Plans (India & International) */}
      <PricingSection />

      {/* 8. Download Hub: DMG, PKG, Homebrew Cask, SHA-256 & System Compatibility */}
      <DownloadSection />

      {/* 9. macOS Privacy & Security Setting Guide for Wi-Fi AirPlay */}
      <AirPlayPermissionGuide />

      {/* 10. Categorized & Searchable FAQ Accordions */}
      <FAQSection />

      {/* 10. Bottom High-Impact Download CTA */}
      <DownloadCTA />
    </main>
  );
};

export default HomePage;
