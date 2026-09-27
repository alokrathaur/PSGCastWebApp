import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Mail,
  Youtube,
  Download,
  KeyRound,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200 text-slate-600 pt-16 pb-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/assets/icon_app.png"
                  alt="PSG Cast"
                  className="w-12 h-12 object-contain drop-shadow-sm"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/logo.png";
                  }}
                />
              </div>
              <span className="font-extrabold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                PSG Cast
              </span>
              <Badge variant="secondary" className="text-[11px] bg-slate-100 text-slate-600 border-slate-200">
                v{SITE_CONFIG.appVersion}
              </Badge>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              High-performance native screen mirroring from iPhone & iPad to macOS. Hardware-accelerated Metal rendering, ~12ms low latency via direct USB or Wi-Fi AirPlay, and 100% on-device privacy.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Zero Cloud Telemetry
              </span>
              <span className="text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 font-medium">
                macOS 14.0+ Sonoma
              </span>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={SITE_CONFIG.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-xs transition-colors"
                aria-label="Twitter X"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-600 hover:border-red-200 shadow-xs transition-colors"
                aria-label="YouTube Channel"
                title="YouTube — @PrimeStateGaming"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-xs transition-colors"
                aria-label="Customer Support"
                title="Customer Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Core Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span className="text-xs">🏷️</span>
                  <span>Pricing Plans</span>
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span className="text-xs">⚖️</span>
                  <span>PSG Cast vs DouWan</span>
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  Download for Mac
                </Link>
              </li>
              <li>
                <Link to="/activate" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-indigo-600" />
                  Activate License
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Help & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Tech & Platform */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-1.5 text-slate-700">
                <Cpu className="w-3.5 h-3.5 text-violet-600" />
                Apple Metal GPU Pipeline
              </li>
              <li className="flex items-center gap-1.5 text-slate-700">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                VideoToolbox H.264
              </li>
              <li className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                AVFoundation CoreMediaIO
              </li>
              <li className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                AirPlay Bonjour Port 7001
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="hover:text-blue-600 transition-colors text-slate-600 flex items-center gap-1.5 font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Customer Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison & Pricing Quick Bar at Footer Bottom */}
        <div className="py-6 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Direct Comparison:
            </span>
            <Link
              to="/compare"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all"
            >
              <span>⚖️ Compare DouWan with PSG Cast</span>
              <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                Features & Architecture
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Pricing:
            </span>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all"
            >
              <span>🏷️ View Pricing Plans</span>
            </Link>
          </div>
        </div>

        {/* Bottom Legal & Trademarks */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} PSG Cast. All rights reserved. Built for creators, developers, and presenters.
          </div>
          <p className="max-w-xl text-center md:text-right text-[11px] leading-relaxed text-slate-400">
            Apple, Mac, macOS, iPhone, iPad, AirPlay, Metal, and Xcode are trademarks of Apple Inc., registered in the U.S. and other countries. DouWan is a trademark of its respective owner. PSG Cast is an independent product and is not affiliated with or endorsed by Apple Inc. or DouWan.
          </p>
        </div>
      </div>
    </footer>
  );
};
