import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { FeaturesPage } from "@/pages/FeaturesPage";
import { DownloadPage } from "@/pages/DownloadPage";
import { ActivatePage } from "@/pages/ActivatePage";
import { FAQPage } from "@/pages/FAQPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { PricingPage } from "@/pages/PricingPage";
import { ComparePage } from "@/pages/ComparePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

// Scroll to top automatically when navigating to any route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#FAFAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/activate" element={<ActivatePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
