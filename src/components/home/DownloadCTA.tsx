import React from "react";
import { Link } from "react-router-dom";
import { Download, KeyRound, Shield, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DownloadCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FAFAFC] via-white to-[#F8FAFC] border-t border-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-14 rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 space-y-6">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Universal macOS Binary
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready for Buttery-Smooth iPhone Mirroring?
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Download PSG Cast for your Mac today. Connect your iPhone via USB or Wi-Fi AirPlay and enjoy full retina 60 FPS in seconds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/download">
              <Button variant="gradient" size="lg" className="shadow-lg shadow-blue-500/25 group font-semibold">
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                Download PSG Cast DMG
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded font-normal">
                  {SITE_CONFIG.dmgSize}
                </span>
              </Button>
            </Link>

            <Link to="/activate">
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-200 text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50/80 font-semibold"
              >
                <KeyRound className="w-4 h-4 mr-2 text-indigo-600" />
                Activate License / Token
              </Button>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              macOS 14.0+ Sonoma & Sequoia
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Apple Silicon M1/M2/M3/M4 & Intel
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-purple-600" />
              100% On-Device Local Privacy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
