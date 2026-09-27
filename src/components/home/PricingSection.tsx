import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  KeyRound,
  CreditCard,
  Lock,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";

export const PricingSection: React.FC = () => {
  // Automatic Geo Location detection: Default to INR for India, USD for international
  const [region, setRegion] = useState<"india" | "international">(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const geoParam = (params.get("currency") || params.get("geo") || params.get("region") || "").toLowerCase();
        if (geoParam === "in" || geoParam === "inr" || geoParam === "india") return "india";
        if (geoParam === "us" || geoParam === "usd" || geoParam === "international" || geoParam === "global") return "international";
      }

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const isIndiaTz =
        tz === "Asia/Kolkata" ||
        tz === "Asia/Calcutta" ||
        tz.toLowerCase().includes("kolkata") ||
        tz.toLowerCase().includes("calcutta");
      const isIndiaLocale =
        typeof navigator !== "undefined" &&
        (navigator.language === "en-IN" || navigator.language.startsWith("hi"));
      const isIndiaOffset = new Date().getTimezoneOffset() === -330;
      return isIndiaTz || isIndiaLocale || isIndiaOffset ? "india" : "international";
    } catch {
      return "india";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("currency") || params.get("geo") || params.get("region")) {
        return;
      }
    }

    // Refine via IP geolocation with fallback
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.country_code) {
          setRegion(data.country_code === "IN" ? "india" : "international");
          return;
        }
      } catch {
        // Fallback to secondary geo service
      }

      try {
        const res2 = await fetch("https://api.country.is");
        const data2 = await res2.json();
        if (data2 && data2.country) {
          setRegion(data2.country === "IN" ? "india" : "international");
        }
      } catch {
        // Keep initial timezone/locale heuristic
      }
    };

    detectCountry();
  }, []);

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Choose the plan that fits your workflow. All plans include full 60 FPS Retina mirroring, ultra-low latency, and OBS Clean Capture.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {SITE_CONFIG.pricingPlans.map((plan) => {
            const pricing = region === "india" ? plan.india : plan.international;
            const isLifetime = plan.id === "lifetime";

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all flex flex-col justify-between ${
                  isLifetime
                    ? "bg-white border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 ring-4 ring-indigo-500/5 lg:-translate-y-2"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Prominently visible Best Value badge for Lifetime */}
                {isLifetime && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/30 flex items-center gap-1.5 whitespace-nowrap z-20 border border-indigo-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>Best Value • Most Popular</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 tracking-wide">
                        {plan.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {pricing.discount}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Pricing Block: Price with superscript power-style rate */}
                  <div className="pb-4 border-b border-slate-100">
                    <div className="flex items-baseline flex-wrap gap-2.5">
                      <div className="inline-flex items-start">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                          {pricing.symbol}{pricing.price}
                        </span>
                        {/* Power of square / superscript styling right after price */}
                        <sup
                          className={`ml-1 -top-2 relative text-xs sm:text-sm font-black tracking-tight px-1.5 py-0.5 rounded-md border shadow-2xs ${
                            isLifetime
                              ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                              : "bg-emerald-50 text-emerald-700 border-emerald-200"
                          }`}
                        >
                          {pricing.subtext}
                        </sup>
                      </div>
                      <span className="text-sm sm:text-base text-slate-400 line-through self-center sm:self-baseline">
                        {pricing.symbol}{pricing.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Geo-localized Dodo Payments Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal bg-slate-50/80 p-3.5 rounded-xl border border-slate-100 min-h-[76px] flex items-center">
                    {pricing.description}
                  </p>

                  {/* Geo-localized Feature Bullets */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold text-slate-900 tracking-wide block uppercase">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {pricing.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isLifetime ? "text-indigo-600" : "text-emerald-600"}`} />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="pt-8 mt-6 border-t border-slate-100 space-y-3">
                  <a
                    href={`${plan.checkoutUrl}?currency=${region === "india" ? "INR" : "USD"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant={isLifetime ? "primary" : "outline"}
                      size="lg"
                      className={`w-full font-semibold shadow-xs flex items-center justify-center gap-2 ${
                        isLifetime
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20"
                          : "border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>
                        {isLifetime
                          ? `Get Lifetime License — ${pricing.symbol}${pricing.price}`
                          : `Get ${plan.id === "quarterly" ? "90-Day" : "1-Year"} Access — ${pricing.symbol}${pricing.price}`}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Secure 256-bit checkout via Dodo Payments</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activation & Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Already purchased a license token?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Instantly activate your Mac app using our automated deep link portal.
              </p>
            </div>
          </div>
          <Link to="/activate" className="shrink-0 w-full md:w-auto">
            <Button variant="outline" size="sm" className="w-full md:w-auto font-semibold">
              <KeyRound className="w-4 h-4 mr-2 text-indigo-600" />
              <span>Activate Your Mac App</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
