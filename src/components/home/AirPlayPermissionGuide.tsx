import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  Hand,
  Lock,
  Bell,
  Volume2,
  Plus,
  Minus,
  Sparkles,
  ExternalLink,
  Wifi,
  Radio,
  Smartphone,
  Tv,
  Cast,
  ArrowRight,
  Sliders,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const AirPlayPermissionGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mac" | "iphone">("mac");

  return (
    <section id="airplay-permissions" className="py-20 bg-[#FBFBFC] relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-blue-600" />
            AirPlay Connection & Permission Setup
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Quick 2-Step Setup: Mac & iPhone Mirroring
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Grant one-time Screen & Audio Recording permission on macOS, then select <strong>PSG Cast</strong> directly from your iPhone's Control Center to begin streaming.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/80 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("mac")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "mac"
                  ? "bg-white text-slate-900 shadow-sm shadow-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Step 1: Mac System Settings</span>
              <Badge variant="default" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200 ml-1 py-0 px-1.5">
                Permissions
              </Badge>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("iphone")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "iphone"
                  ? "bg-white text-slate-900 shadow-sm shadow-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Step 2: iPhone Control Center</span>
              <Badge variant="default" className="text-[10px] bg-blue-50 text-blue-700 border-blue-200 ml-1 py-0 px-1.5">
                iOS Cast
              </Badge>
            </button>
          </div>
        </div>

        {/* STEP 1: MACOS PRIVACY & SECURITY PERMISSION SETUP */}
        {activeTab === "mac" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            {/* Left Column: Step-by-Step Instructions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  One-Time macOS System Setup
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Enable Screen & Audio Recording
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  macOS Sonoma (14+) and Sequoia (15+) require this standard permission to receive incoming AirPlay display streams without blank screens:
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">Open macOS System Settings</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Click the <strong> Apple Menu</strong> in the top-left corner of your Mac and select <strong>System Settings...</strong>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">Select Privacy & Security</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      In the left sidebar, click <strong>Privacy & Security</strong> (blue hand icon).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">Open Screen & System Audio Recording</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Scroll down in the right pane and click <strong>Screen & System Audio Recording</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-emerald-200/80 bg-emerald-50/20 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    4
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>Toggle ON for PSG Cast</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Turn the toggle switch <strong>ON</strong> next to <strong>PSG Cast.app</strong>. If prompted, click <em>Quit & Reopen</em> to apply.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto bg-white border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold shadow-2xs gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                    <span>Open macOS Settings</span>
                  </Button>
                </a>

                <Button
                  type="button"
                  variant="gradient"
                  size="md"
                  onClick={() => setActiveTab("iphone")}
                  className="w-full sm:w-auto font-semibold gap-2 shadow-md shadow-blue-500/20"
                >
                  <span>Next: Step 2: iPhone Control Center</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Column: macOS System Settings Mockup (Displaying ONLY 1 App: PSG Cast) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl border border-slate-300/80 bg-[#EBECEF] p-2.5 sm:p-3 shadow-2xl shadow-slate-900/15 backdrop-blur-xl">
                {/* macOS Window Chrome Header */}
                <div className="rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-slate-200/70 overflow-hidden shadow-xs">
                  {/* Traffic lights & Title */}
                  <div className="px-4 py-3 bg-[#EBEBEB] border-b border-slate-200 flex items-center justify-between select-none">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 shadow-2xs" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 shadow-2xs" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 shadow-2xs" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 font-sans tracking-tight">
                      System Settings — Privacy & Security
                    </span>
                    <div className="w-12" />
                  </div>

                  {/* macOS Split View Body */}
                  <div className="grid grid-cols-12 min-h-[380px]">
                    {/* Left Sidebar */}
                    <div className="col-span-4 bg-[#EBEBEB]/80 border-r border-slate-200/80 p-2.5 flex flex-col justify-between select-none hidden sm:flex">
                      <div className="space-y-1">
                        <div className="mb-3 px-2 py-1.5 bg-white/90 rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-2xs">
                          <Search className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-xs text-slate-400 font-normal">Search</span>
                        </div>

                        <div className="px-2 py-1 rounded-md text-[11px] text-slate-600 flex items-center gap-2">
                          <Bell className="w-3.5 h-3.5 text-red-500" />
                          <span>Notifications</span>
                        </div>
                        <div className="px-2 py-1 rounded-md text-[11px] text-slate-600 flex items-center gap-2">
                          <Volume2 className="w-3.5 h-3.5 text-pink-500" />
                          <span>Sound</span>
                        </div>
                        <div className="px-2 py-1 rounded-md text-[11px] text-slate-600 flex items-center gap-2">
                          <Lock className="w-3.5 h-3.5 text-slate-600" />
                          <span>Lock Screen</span>
                        </div>

                        <div className="px-2.5 py-1.5 rounded-lg bg-[#007AFF] text-white text-xs font-semibold flex items-center gap-2 shadow-xs">
                          <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                            <Hand className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="tracking-tight">Privacy & Security</span>
                        </div>

                        <div className="px-2 py-1 rounded-md text-[11px] text-slate-600 flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded-full bg-red-400 inline-block" />
                          <span>Touch ID & Password</span>
                        </div>
                        <div className="px-2 py-1 rounded-md text-[11px] text-slate-600 flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded-full bg-blue-400 inline-block" />
                          <span>Users & Groups</span>
                        </div>
                        <div className="px-2 py-1 rounded-md text-[11px] text-slate-600 flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded-full bg-sky-400 inline-block" />
                          <span>iCloud</span>
                        </div>
                      </div>

                      <div className="pt-4 px-2 text-[10px] text-slate-400 font-mono">
                        macOS Sonoma / Sequoia
                      </div>
                    </div>

                    {/* Right Main Pane */}
                    <div className="col-span-12 sm:col-span-8 bg-[#F6F6F6] p-4 sm:p-5 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 pb-1 border-b border-slate-200/60">
                          <div className="flex items-center gap-1 bg-white/80 border border-slate-200 rounded-md p-0.5 shadow-2xs">
                            <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 tracking-tight">
                            Screen & System Audio Recording
                          </span>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                            Screen & System Audio Recording
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-normal">
                            Allow the applications below to record the content of your screen and audio, even while using other applications.
                          </p>
                        </div>

                        {/* App List Container — ONLY 1 App: PSG Cast */}
                        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                          <div className="px-3.5 py-3 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <img
                                src="/assets/icon_app.png"
                                alt="PSG Cast Icon"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src = "/logo.png";
                                }}
                                className="w-7 h-7 rounded-lg object-contain shadow-xs border border-slate-200/80 bg-slate-900"
                              />
                              <div className="space-y-0.5">
                                <span className="text-xs font-semibold text-slate-900 block tracking-tight">
                                  PSG Cast.app
                                </span>
                                <span className="text-[10px] text-emerald-600 font-medium block">
                                  Screen & Audio Recording Enabled
                                </span>
                              </div>
                            </div>

                            {/* macOS Blue Toggle: ON */}
                            <div className="w-10 h-6 bg-[#007AFF] rounded-full p-0.5 flex items-center justify-end shadow-inner cursor-default transition-all">
                              <div className="w-5 h-5 bg-white rounded-full shadow-md shadow-black/20" />
                            </div>
                          </div>

                          <div className="px-3 py-1.5 bg-[#F9FAFB] border-t border-slate-100 flex items-center gap-2">
                            <button
                              type="button"
                              className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                              title="Add Application"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <div className="w-[1px] h-3 bg-slate-200" />
                            <button
                              type="button"
                              className="p-1 rounded text-slate-300 cursor-not-allowed"
                              title="Remove Application"
                              disabled
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Bottom reassurance caption */}
                      <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Zero telemetry: All audio & video processing is performed 100% on-device via Apple Metal.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: IPHONE CONTROL CENTER SETUP */}
        {activeTab === "iphone" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            {/* Left Column: Step-by-Step Instructions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
                  <Cast className="w-3.5 h-3.5 text-blue-600" />
                  No Companion App Needed on iPhone
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Select "PSG Cast" from Screen Mirroring
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You don't need to install any apps on your iPhone or iPad. Just use Apple's built-in Screen Mirroring control from Control Center:
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">Connect to Same Wi-Fi</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Ensure your iPhone and Mac are connected to the same Wi-Fi network (or simply connect via USB cable for near-zero ~12ms latency).
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">Open iPhone Control Center</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Swipe down from the top-right corner of your iPhone screen (or swipe up from the bottom on iPhone SE and home-button models).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">Tap the Screen Mirroring Icon</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Tap the <strong>Screen Mirroring</strong> tile (the two overlapping rectangles icon) to view nearby AirPlay receivers.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center text-xs shrink-0 font-mono shadow-xs">
                    4
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>Select "PSG Cast"</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Tap <strong>PSG Cast</strong>. A checkmark (✓) appears immediately, and your iPhone screen starts streaming to your Mac at smooth 60 FPS!
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => setActiveTab("mac")}
                  className="w-full sm:w-auto bg-white border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold shadow-2xs gap-2"
                >
                  <span>← Back to Step 1: Mac Permissions</span>
                </Button>
                <span className="text-xs text-slate-500">
                  Select "PSG Cast" from Screen Mirroring to start casting.
                </span>
              </div>
            </div>

            {/* Right Column: High-Fidelity iPhone Screen Mirroring Setup Screen Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-[36px] bg-slate-950 p-4 sm:p-5 shadow-2xl shadow-slate-950/40 border border-slate-800">
                {/* Status bar indication */}
                <div className="flex items-center justify-between px-3 pb-3 text-white/70 text-[11px] font-mono">
                  <span className="font-semibold text-white">9:41</span>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3.5 h-3.5 text-white" />
                    <span className="w-4 h-2.5 rounded-[3px] border border-white/80 inline-block relative after:content-[''] after:absolute after:top-0 after:left-0 after:bottom-0 after:w-3/4 after:bg-white" />
                  </div>
                </div>

                {/* iPhone Screen Mirroring Card Container */}
                <div className="relative rounded-[28px] overflow-hidden border border-white/20 bg-slate-900/90 shadow-2xl">
                  {/* Real screenshot from iPhone Control Center */}
                  <img
                    src="/assets/iphone-screen-mirroring.jpg"
                    alt="iPhone Screen Mirroring Setup Screen — PSG Cast"
                    className="w-full h-auto object-cover rounded-[28px] select-none"
                    loading="eager"
                  />

                  {/* Interactive Floating Badge Annotations */}
                  <div className="absolute top-28 left-4 right-4 pointer-events-none">
                    <div className="p-2.5 rounded-xl bg-blue-600/95 text-white text-xs font-semibold backdrop-blur-md shadow-lg border border-blue-400/40 flex items-center justify-between animate-pulse">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>PSG Cast Selected & Active</span>
                      </div>
                      <span className="text-[10px] font-mono bg-black/30 px-2 py-0.5 rounded-full uppercase">
                        60 FPS Live
                      </span>
                    </div>
                  </div>

                  {/* Bottom hint overlay */}
                  <div className="absolute bottom-2 left-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md text-[11px] text-white/80 text-center font-medium border border-white/10">
                    Tap <span className="text-white font-semibold">Stop Mirroring</span> anytime to disconnect
                  </div>
                </div>

                {/* Device Frame Footer */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                  <span>iOS Control Center • Screen Mirroring Interface</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AirPlayPermissionGuide;
