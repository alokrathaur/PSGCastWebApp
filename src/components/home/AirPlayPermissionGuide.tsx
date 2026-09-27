import React from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const AirPlayPermissionGuide: React.FC = () => {
  return (
    <section id="airplay-permissions" className="py-20 bg-[#FBFBFC] relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-blue-600" />
            macOS Privacy & Security Setup
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Enable Wi-Fi AirPlay & Audio in System Settings
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            To stream your iPhone over Wi-Fi AirPlay and capture synchronized stereo audio, macOS Sonoma (14+) and Sequoia (15+) require <strong>Screen & System Audio Recording</strong> permission for PSG Cast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Easy Step-by-Step Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Radio className="w-5 h-5 text-blue-600" />
                Quick 4-Step Permission Setup
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow these quick steps to ensure PSG Cast can receive incoming AirPlay streams without interruption:
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

            {/* Direct macOS shortcut button */}
            <div className="pt-2">
              <a
                href="x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"
                className="inline-block w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto bg-white border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold shadow-2xs gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                  <span>Open Screen Recording Settings on Mac</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Pixel-Perfect macOS System Settings Mockup (Displaying ONLY 1 App: PSG Cast) */}
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
                <div className="grid grid-cols-12 min-h-[460px]">
                  {/* Left Sidebar (macOS System Settings navigation) */}
                  <div className="col-span-4 bg-[#EBEBEB]/80 border-r border-slate-200/80 p-2.5 flex flex-col justify-between select-none hidden sm:flex">
                    <div className="space-y-1">
                      {/* Search Bar */}
                      <div className="mb-3 px-2 py-1.5 bg-white/90 rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-2xs">
                        <Search className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs text-slate-400 font-normal">Search</span>
                      </div>

                      {/* Dummy upper settings */}
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

                      {/* Active Privacy & Security Tab */}
                      <div className="px-2.5 py-1.5 rounded-lg bg-[#007AFF] text-white text-xs font-semibold flex items-center gap-2 shadow-xs">
                        <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                          <Hand className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="tracking-tight">Privacy & Security</span>
                      </div>

                      {/* Lower settings */}
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

                  {/* Right Main Pane (Screen & System Audio Recording settings) */}
                  <div className="col-span-12 sm:col-span-8 bg-[#F6F6F6] p-4 sm:p-5 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Sub-header navigation */}
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-200/60">
                        <div className="flex items-center gap-1 bg-white/80 border border-slate-200 rounded-md p-0.5 shadow-2xs">
                          <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 tracking-tight">
                          Screen & System Audio Recording
                        </span>
                      </div>

                      {/* Section Title & Description */}
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                          Screen & System Audio Recording
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          Allow the applications below to record the content of your screen and audio, even while using other applications.
                        </p>
                      </div>

                      {/* App List Container — DISPLAYING ONLY 1 APP: PSG Cast */}
                      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                        <div className="px-3.5 py-3 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <img
                              src="/assets/icon_128x128.png"
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

                          {/* macOS Native Styled Blue Toggle Switch: ON */}
                          <div className="w-10 h-6 bg-[#007AFF] rounded-full p-0.5 flex items-center justify-end shadow-inner cursor-default transition-all">
                            <div className="w-5 h-5 bg-white rounded-full shadow-md shadow-black/20" />
                          </div>
                        </div>

                        {/* List Footer controls (+ / -) */}
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

                      {/* System Audio Recording Only Subsection */}
                      <div className="pt-2 space-y-1">
                        <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                          System Audio Recording Only
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          Allow the applications below to access and record your system audio.
                        </p>

                        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs mt-1.5">
                          <div className="px-3.5 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src="/assets/icon_128x128.png"
                                alt="PSG Cast Icon"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src = "/logo.png";
                                }}
                                className="w-7 h-7 rounded-lg object-contain shadow-xs border border-slate-200/80 bg-slate-900"
                              />
                              <span className="text-xs font-semibold text-slate-900 tracking-tight">
                                PSG Cast.app
                              </span>
                            </div>

                            {/* macOS Blue Toggle: ON */}
                            <div className="w-10 h-6 bg-[#007AFF] rounded-full p-0.5 flex items-center justify-end shadow-inner cursor-default">
                              <div className="w-5 h-5 bg-white rounded-full shadow-md shadow-black/20" />
                            </div>
                          </div>

                          <div className="px-3 py-1.5 bg-[#F9FAFB] border-t border-slate-100 flex items-center gap-2">
                            <button
                              type="button"
                              className="p-1 rounded text-slate-400 hover:text-slate-600 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <div className="w-[1px] h-3 bg-slate-200" />
                            <button
                              type="button"
                              className="p-1 rounded text-slate-300"
                              disabled
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                          </div>
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
      </div>
    </section>
  );
};

export default AirPlayPermissionGuide;
