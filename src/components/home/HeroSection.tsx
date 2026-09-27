import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  KeyRound,
  Zap,
  Wifi,
  Usb,
  Camera,
  CircleDot,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection: React.FC = () => {
  const [connectionMode, setConnectionMode] = useState<"usb" | "wifi">("usb");
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showHUD, setShowHUD] = useState(true);
  const [cleanCapture, setCleanCapture] = useState(false);
  const [flashScreenshot, setFlashScreenshot] = useState(false);
  const [simulatedTime, setSimulatedTime] = useState("9:41");

  // Keep clock updated in phone status bar
  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      const hours = d.getHours().toString().padStart(2, "0");
      const minutes = d.getMinutes().toString().padStart(2, "0");
      setSimulatedTime(`${hours}:${minutes}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleScreenshot = () => {
    setFlashScreenshot(true);
    setTimeout(() => setFlashScreenshot(false), 250);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden mesh-grid bg-[#FAFAFC]">
      {/* Dynamic light ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-purple-200/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/50 blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-slate-800">
              Native macOS 14+ Screen Mirroring
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-blue-600 font-mono font-semibold">
              60 FPS Metal GPU
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Cast iPhone to Mac with{" "}
            <span className="text-gradient-blue-violet">Ultra-Low ~12ms</span>{" "}
            Latency
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct USB cable & Wi-Fi AirPlay streaming directly into a hardware-accelerated Metal window with <strong className="font-bold text-slate-900">OBS</strong> support. Built for creators, developers, streamers, and mobile pros.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link to="/download">
              <Button
                variant="gradient"
                size="lg"
                className="h-14 px-8 shadow-lg shadow-blue-500/25 group text-base font-semibold"
              >
                <Download className="w-5 h-5 mr-2.5 group-hover:-translate-y-0.5 transition-transform" />
                Download for macOS
                <span className="ml-2.5 text-xs opacity-90 font-normal bg-white/20 px-2.5 py-0.5 rounded-full">
                  v{SITE_CONFIG.appVersion}
                </span>
              </Button>
            </Link>

            <Link to="/activate">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 border-indigo-200 text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50/80 text-base font-semibold shadow-xs"
              >
                <KeyRound className="w-4 h-4 mr-2 text-indigo-600" />
                Activate License
              </Button>
            </Link>

            <Link to="/features">
              <Button variant="ghost" size="lg" className="h-14 px-6 text-slate-700 hover:text-slate-900 font-semibold">
                View Features →
              </Button>
            </Link>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% On-Device Privacy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>~12ms Direct USB Latency</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-600" />
              <span>Apple VideoToolbox H.264</span>
            </div>
          </div>
        </div>

        {/* Interactive Device Mockup Simulator */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
            {/* Transport selector */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={() => setConnectionMode("usb")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  connectionMode === "usb"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Usb className="w-3.5 h-3.5" />
                USB Direct Cable (~12ms)
              </button>
              <button
                type="button"
                onClick={() => setConnectionMode("wifi")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  connectionMode === "wifi"
                    ? "bg-violet-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Wifi className="w-3.5 h-3.5" />
                Wi-Fi AirPlay (~35ms)
              </button>
            </div>

            {/* Quick interactive shortcuts buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowHUD(!showHUD)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all flex items-center gap-1.5 shadow-xs ${
                  showHUD
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
                title="Toggle Diagnostics HUD (⌘D)"
              >
                <Activity className="w-3.5 h-3.5" />
                HUD (⌘D)
              </button>
              <button
                type="button"
                onClick={() => setCleanCapture(!cleanCapture)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all flex items-center gap-1.5 shadow-xs ${
                  cleanCapture
                    ? "bg-purple-50 text-purple-700 border-purple-200"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
                title="Toggle OBS Clean Capture (⌘C)"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Clean (⌘C)
              </button>
              <button
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all flex items-center gap-1.5 shadow-xs ${
                  isRecording
                    ? "bg-rose-50 text-rose-700 border-rose-200 animate-pulse"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
                title="Toggle MP4 Recording (⌘R)"
              >
                <CircleDot className="w-3.5 h-3.5 text-rose-500" />
                {isRecording ? "REC 00:14" : "Rec (⌘R)"}
              </button>
              <button
                type="button"
                onClick={handleScreenshot}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs transition-all flex items-center gap-1.5"
                title="Take Instant Screenshot (⌘S)"
              >
                <Camera className="w-3.5 h-3.5" />
                Shot (⌘S)
              </button>
            </div>
          </div>

          {/* Mac Window Frame in Apple Light Aesthetic */}
          <div className="relative rounded-2xl border border-slate-300/80 bg-white shadow-2xl shadow-slate-300/60 overflow-hidden">
            {/* Screenshot shutter flash effect */}
            {flashScreenshot && (
              <div className="absolute inset-0 bg-white/80 z-50 pointer-events-none transition-opacity duration-200" />
            )}

            {/* macOS Window Chrome (hidden if cleanCapture is on) */}
            {!cleanCapture && (
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:opacity-80 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] hover:opacity-80 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] hover:opacity-80 transition-opacity" />
                  <span className="ml-3 text-xs font-semibold text-slate-700 font-mono">
                    PSGCast — iPhone 16 Pro (60 FPS Metal)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE SESSION
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                    title="Audio Control"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-rose-500" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-slate-600" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Canvas / Mirroring Surface */}
            <div className="relative min-h-[460px] md:min-h-[560px] bg-gradient-to-b from-[#0F172A] to-[#020617] flex items-center justify-center p-6 md:p-10">
              {/* Diagnostics HUD Overlay (⌘D) */}
              {showHUD && (
                <div className="absolute top-4 left-4 z-30 bg-black/75 border border-slate-700/60 rounded-xl p-3 backdrop-blur-md font-mono text-[11px] space-y-1.5 shadow-xl text-slate-200">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 pb-1">
                    <span className="text-slate-400">FRAME RATE:</span>
                    <span className="text-emerald-400 font-bold">59.98 FPS</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 pb-1">
                    <span className="text-slate-400">LATENCY:</span>
                    <span className="text-blue-400 font-bold">
                      {connectionMode === "usb" ? "11.8 ms (USB)" : "34.2 ms (AirPlay)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 pb-1">
                    <span className="text-slate-400">RESOLUTION:</span>
                    <span className="text-slate-300">1170 × 2532 (Retina)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 pb-1">
                    <span className="text-slate-400">PIPELINE:</span>
                    <span className="text-violet-400">VTDecomp + Metal GPU</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">DROPPED FRAMES:</span>
                    <span className="text-emerald-400 font-bold">0 (0.00%)</span>
                  </div>
                </div>
              )}

              {/* iPhone Mockup Floating in Canvas */}
              <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[48px] border-[5px] border-slate-700/80 bg-black p-3 shadow-2xl shadow-blue-500/20 transform hover:scale-[1.01] transition-transform duration-300">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 border border-slate-800 flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-500/60" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
                </div>

                {/* iPhone Screen Content */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 flex flex-col justify-between p-4 text-white">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-semibold tracking-tight pt-1 z-30">
                    <span>{simulatedTime}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-blue-400 font-mono">5G</span>
                      <div className="w-5 h-2.5 border border-white/60 rounded-sm p-0.5 flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Screen Showcase inside Phone */}
                  <div className="space-y-4 my-auto py-2">
                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-500/30 flex items-center justify-center text-blue-300">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-tight">Screen Mirroring</div>
                            <div className="text-[10px] text-slate-300">Connected to PSGCast Mac</div>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>

                      <div className="bg-black/40 rounded-xl p-2.5 space-y-1 font-mono text-[10px]">
                        <div className="flex justify-between text-slate-400">
                          <span>Transport</span>
                          <span className="text-blue-400 uppercase font-bold">{connectionMode} Direct</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Throughput</span>
                          <span className="text-emerald-400 font-bold">24.5 Mbps</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Visual Waveform / Game HUD Demo */}
                    <div className="p-3 rounded-2xl bg-blue-900/20 border border-blue-500/20 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                          Live Render Stream
                        </span>
                        <span className="text-[9px] px-1.5 py-0 bg-blue-500/20 text-blue-300 rounded font-semibold">
                          60 FPS
                        </span>
                      </div>
                      <div className="h-14 rounded-lg bg-black/30 flex items-end justify-between p-1.5 gap-1">
                        {[45, 60, 80, 70, 95, 88, 65, 90, 75, 85, 100, 72, 80, 60].map((h, i) => (
                          <div
                            key={i}
                            className="w-full bg-gradient-to-t from-blue-600 via-indigo-500 to-purple-400 rounded-sm animate-pulse"
                            style={{
                              height: `${h}%`,
                              animationDelay: `${i * 120}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Home Bar */}
                  <div className="w-28 h-1 bg-white/50 rounded-full mx-auto mb-1 z-30" />
                </div>
              </div>
            </div>

            {/* Bottom Status Ribbon (hidden if cleanCapture is on) */}
            {!cleanCapture && (
              <div className="px-5 py-2.5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    STATUS: HARDWARE ACCELERATED
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="hidden sm:inline">
                    COLOR: kCVPixelFormatType_420YpCbCr8
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <span>Aspect: Fit Window</span>
                  <span>Audio: 48.0 kHz AAC</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
