import React from "react";
import { Link } from "react-router-dom";
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  KeyRound,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DownloadSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Download & Install",
      description: "Download the native DMG image and drag PSG Cast into your macOS Applications folder.",
    },
    {
      num: "02",
      title: "Connect iPhone / iPad",
      description: "Plug in with Lightning/USB-C for ~12ms latency, or join the same Wi-Fi network for AirPlay.",
    },
    {
      num: "03",
      title: "One-Click Mirror",
      description: "Open PSG Cast and press ⌘U for USB or tap Screen Mirroring in iOS Control Center for Wi-Fi.",
    },
    {
      num: "04",
      title: "Stream & Record",
      description: "Enjoy silky 60 FPS video, capture instant snapshots with ⌘S, or toggle OBS Clean Mode with ⌘C.",
    },
  ];

  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Universal macOS App
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Get PSG Cast for Your Mac
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Universal binary compiled natively for Apple Silicon (M1/M2/M3/M4) and 64-bit Intel Macs running macOS 14 Sonoma or newer.
          </p>
        </div>

        {/* Primary Download Hub Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-slate-200/90 shadow-lg shadow-slate-200/40 space-y-8 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/assets/icon_app.png"
                  alt="PSG Cast Icon"
                  className="w-16 h-16 object-contain drop-shadow-sm"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">PSG Cast for macOS</h3>
                  <Badge variant="default" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    v{SITE_CONFIG.appVersion}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Universal Binary • Released: {SITE_CONFIG.releaseDate} • Size: {SITE_CONFIG.dmgSize}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Apple Notarized & Signed</span>
            </div>
          </div>

          {/* Clean Direct Download Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-slate-900">
                PSG Cast Disk Image (.dmg)
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Single drag-and-drop installation into Applications. Native on Apple Silicon & Intel.
              </p>
            </div>

            <a
              href={SITE_CONFIG.downloadDmgUrl}
              download
              className="w-full sm:w-auto shrink-0"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-md shadow-blue-500/20 flex items-center justify-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download DMG for Mac</span>
              </Button>
            </a>
          </div>
        </div>

        {/* 4-Step Visual Installation Guide */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get Started in Under 60 Seconds
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              No complex kernel extensions, no jailbreaks, and no companion apps required on your iOS device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-extrabold text-blue-600 text-sm">
                    {s.num}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-tight">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements Matrix */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                System Compatibility Matrix
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Verified on macOS Sonoma (14.x) and macOS Sequoia (15.x)
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Component</th>
                  <th className="py-3 px-4">Minimum</th>
                  <th className="py-3 px-4">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                {SITE_CONFIG.requirements.map((req, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {req.category}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{req.minimum}</td>
                    <td className="py-3.5 px-4 font-medium text-blue-600">
                      {req.recommended}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>Already have a license key?</span>
            <Link
              to="/activate"
              className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <KeyRound className="w-4 h-4" />
              <span>Activate Your Copy Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
