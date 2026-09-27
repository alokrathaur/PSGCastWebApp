import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, KeyRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] group-hover:scale-105 transition-transform duration-200 flex items-center justify-center shrink-0">
              <img
                src="/assets/icon_app.png"
                alt="PSG Cast"
                className="w-14 h-14 sm:w-[60px] sm:h-[60px] object-contain drop-shadow-md"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/logo.png";
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                PSG Cast
              </span>
              <Badge variant="default" className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-blue-50 text-blue-700 border-blue-200 font-semibold rounded-md shadow-2xs">
                macOS
              </Badge>
            </div>
            <span className="text-xs sm:text-[13px] text-slate-500 font-medium tracking-wide">
              60 FPS • 12ms Latency
            </span>
          </div>
        </Link>

        {/* Right Action Buttons (Icons Only, No Text) */}
        <div className="flex items-center gap-3">
          <Link
            to="/activate"
            title="Activate License"
            aria-label="Activate License"
          >
            <button
              type="button"
              className="w-11 h-11 rounded-xl border border-indigo-200 bg-indigo-50/70 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 hover:border-indigo-300 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Activate License"
            >
              <KeyRound className="w-5 h-5 text-indigo-600" />
            </button>
          </Link>

          <Link
            to="/download"
            title="Download for macOS"
            aria-label="Download for macOS"
          >
            <button
              type="button"
              className="w-11 h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/25 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Download for macOS"
            >
              <Download className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
