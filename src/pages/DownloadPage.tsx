import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AirPlayPermissionGuide } from "@/components/home/AirPlayPermissionGuide";

export const DownloadPage: React.FC = () => {
  useEffect(() => {
    document.title = "Download PSG Cast for macOS — Universal Apple Silicon & Intel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Universal macOS App
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Download PSG Cast for Mac
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Universal binary compiled natively for Apple Silicon (M1/M2/M3/M4) and 64-bit Intel Macs running macOS 14 Sonoma or newer.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/assets/icon_app.png"
                  alt="PSG Cast Icon"
                  className="w-16 h-16 object-contain drop-shadow-md"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-2xl font-bold text-slate-900">PSG Cast for macOS</h2>
                  <Badge variant="default" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    v{SITE_CONFIG.appVersion}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 font-mono font-medium">
                  Released: {SITE_CONFIG.releaseDate} • Size: {SITE_CONFIG.dmgSize}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Apple Notarized & Signed
              </span>
              <span>Universal Binary (arm64 + x86_64)</span>
            </div>
          </div>

          {/* Action Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900">
                PSG Cast Disk Image (.dmg)
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Single drag-and-drop installation into Applications. Compatible with Apple Silicon & Intel.
              </p>
            </div>

            <a
              href={SITE_CONFIG.downloadDmgUrl}
              className="w-full sm:w-auto shrink-0"
              download
            >
              <Button
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 justify-center shadow-lg shadow-blue-500/25 group text-base font-semibold"
              >
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                Download DMG for macOS
              </Button>
            </a>
          </div>
        </div>

        {/* 4-Step Installation Guide */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Simple 4-Step Setup Guide
            </h3>
            <p className="text-sm text-slate-600">
              Get up and running with your iPhone mirroring in less than 60 seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 font-bold flex items-center justify-center font-mono">
                01
              </div>
              <h4 className="text-base font-bold text-slate-900">Download DMG</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Click the download button above to get the latest <code>PSG Cast.dmg</code> file for your Mac.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 font-bold flex items-center justify-center font-mono">
                02
              </div>
              <h4 className="text-base font-bold text-slate-900">Install to Apps</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Double-click the downloaded disk image and drag the <strong>PSG Cast</strong> icon into your <code>/Applications</code> folder.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 font-bold flex items-center justify-center font-mono">
                03
              </div>
              <h4 className="text-base font-bold text-slate-900">Enable AirPlay Recording</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                In <strong>System Settings → Privacy & Security</strong>, enable <strong>Screen & System Audio Recording</strong> for PSG Cast.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold flex items-center justify-center font-mono">
                04
              </div>
              <h4 className="text-base font-bold text-slate-900">Connect iPhone</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Plug in USB cable for ~12ms low latency (⌘U), or open iPhone Control Center and tap <strong>Screen Mirroring → PSGCast</strong> (⌘W).
              </p>
            </div>
          </div>
        </div>

        {/* macOS Privacy & Security Setting Visual Guide for Wi-Fi AirPlay */}
        <div className="mt-16 -mx-4 sm:mx-0">
          <AirPlayPermissionGuide />
        </div>

        {/* System Requirements Matrix */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              System Requirements Matrix
            </h3>
            <p className="text-sm text-slate-600">
              Verify compatibility across your Mac hardware and iOS devices
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] text-slate-700 text-xs uppercase tracking-wider font-mono border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Specification</th>
                  <th className="py-4 px-6">Minimum Requirement</th>
                  <th className="py-4 px-6 text-blue-600">Recommended Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                {SITE_CONFIG.requirements.map((req, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {req.category}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-mono text-xs">
                      {req.minimum}
                    </td>
                    <td className="py-4 px-6 text-blue-700 font-mono text-xs font-semibold">
                      {req.recommended}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activation Link Card */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <KeyRound className="w-5 h-5 text-indigo-600" />
              <h4 className="text-lg font-bold text-slate-900">
                Already have a PSG Cast Pro License or Token?
              </h4>
            </div>
            <p className="text-sm text-slate-600">
              Activate your Pro features or request an activation magic token sent to your email.
            </p>
          </div>
          <Link to="/activate" className="shrink-0">
            <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-white font-semibold">
              Go to Activation Portal →
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
