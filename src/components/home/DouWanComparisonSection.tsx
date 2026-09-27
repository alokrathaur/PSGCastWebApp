import React from "react";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  Zap,
  ShieldCheck,
  Cpu,
  Video,
  Sparkles,
  ArrowRight,
  Download,
  IndianRupee,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DouWanComparisonSection: React.FC = () => {
  const comparisonItems = SITE_CONFIG.douwanComparison.items;

  return (
    <section id="compare" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Head-to-Head Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            PSG Cast vs. DouWan
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Why streamers, developers, and mobile gamers choose PSG Cast over DouWan for native iPhone-to-Mac screen mirroring.
          </p>
        </div>

        {/* 3 Key Takeaways Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">4× Lower Latency</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              PSG Cast achieves true ~12ms input latency via direct AVFoundation hardware muxing, compared to DouWan's 50-85ms virtual driver latency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">OBS Clean Capture (⌘C)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Instantly strip away window borders, titlebars, and traffic lights for pixel-perfect streaming in OBS Studio without manual crop filters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Native Metal & 100% On-Device</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Engineered in Swift using Apple Metal GPU shaders (&lt;3% CPU). Zero cloud hops and no background telemetry, unlike closed proprietary daemons.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/75 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6 w-1/3">Feature / Capability</th>
                  <th className="py-4 px-6 w-1/3 bg-blue-50/60 text-blue-900 border-x border-blue-100/80">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <img src="/assets/icon_app.png" alt="PSG Cast" className="w-6 h-6 object-contain" />
                      </div>
                      <span className="font-extrabold text-sm text-blue-900">PSG Cast (macOS)</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 w-1/3 text-slate-500 font-semibold">
                    DouWan Screen Mirror
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 bg-blue-50/30 border-x border-blue-100/60 font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.psgCast}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-normal">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.douWan}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200/80 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span>* Latency measured using high-speed optical timer on M-series Mac with iPhone 15 Pro over USB-C.</span>
            <span className="font-semibold text-blue-600">Hardware VideoToolbox decoding with zero cloud telemetry</span>
          </div>
        </div>

        {/* Bottom Switch Banner */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-blue-600/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to Upgrade Your Screen Mirroring?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-normal">
              Download PSG Cast for macOS today and experience ~12ms ultra-low latency screen mirroring.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a href="#pricing">
              <Button
                variant="secondary"
                size="md"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-xs"
              >
                <span>View Pricing Plans</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </a>
            <Link to="/download">
              <Button
                variant="ghost"
                size="md"
                className="bg-white/15 hover:bg-white/25 text-white hover:text-white border border-white/50 hover:border-white font-semibold backdrop-blur-xs transition-all shadow-xs flex items-center"
              >
                <Download className="w-4 h-4 mr-1.5 text-white" />
                <span className="text-white">Download DMG</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
