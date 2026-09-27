import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Usb,
  Wifi,
  Video,
  Camera,
  Maximize2,
  Activity,
  Volume2,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const FeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pipeline" | "transports" | "creator" | "hud">("pipeline");

  useEffect(() => {
    document.title = "Features & Architecture — PSG Cast";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#FAFAFC] relative overflow-hidden">
      {/* Light ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            Deep Architecture & Engine
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Built Directly on Apple Metal & VideoToolbox
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Engineered exclusively in Swift and Metal for macOS 14+. No Electron wrappers, no browser bridges, and zero cloud hops.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "pipeline", label: "Video & Metal GPU", icon: Cpu },
            { id: "transports", label: "Dual Transports (USB/Wi-Fi)", icon: Usb },
            { id: "creator", label: "OBS & Creator Tools", icon: Maximize2 },
            { id: "hud", label: "Diagnostics & Audio", icon: Activity },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-xs"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Video Pipeline */}
        {activeTab === "pipeline" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Architecture diagram card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Zero-Copy Hardware Decoding Pipeline
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      From incoming transport stream to GPU texture without CPU buffer copying
                    </p>
                  </div>
                </div>
                <Badge variant="glow" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                  60 FPS Solid
                </Badge>
              </div>

              {/* Pipeline Flowchart */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 font-mono text-xs">
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                    Stage 01
                  </span>
                  <h4 className="text-slate-900 font-bold text-sm">Transport Ingest</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-sans">
                    AVFoundation Muxed capture (USB) or AirPlay Bonjour 7001 receiver (Wi-Fi).
                  </p>
                  <div className="text-[10px] text-emerald-600 font-semibold">✓ FairPlay SAP Decrypt</div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <span className="text-[10px] text-violet-600 font-bold uppercase tracking-wider">
                    Stage 02
                  </span>
                  <h4 className="text-slate-900 font-bold text-sm">VideoToolbox</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-sans">
                    Apple VTDecompressionSession executes real-time hardware H.264 decoding.
                  </p>
                  <div className="text-[10px] text-violet-600 font-semibold">✓ CVPixelBuffer Pool</div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">
                    Stage 03
                  </span>
                  <h4 className="text-slate-900 font-bold text-sm">CVMetalTextureCache</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-sans">
                    Maps CVPixelBuffer to Metal textures with zero RAM copying.
                  </p>
                  <div className="text-[10px] text-purple-600 font-semibold">✓ BGRA / YpCbCr 4:2:0</div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <span className="text-[10px] text-sky-600 font-bold uppercase tracking-wider">
                    Stage 04
                  </span>
                  <h4 className="text-slate-900 font-bold text-sm">Metal GPU Render</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-sans">
                    MTKView draws frames at the display's native refresh rate with custom shaders.
                  </p>
                  <div className="text-[10px] text-sky-600 font-semibold">✓ Dynamic Aspect Scaling</div>
                </div>
              </div>
            </div>

            {/* Feature cards for Video */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-slate-200 bg-white shadow-xs">
                <CardHeader>
                  <CardTitle className="text-base text-slate-900">
                    Dynamic Aspect Ratio Modes
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-xs leading-relaxed">
                    Switch between <strong>Fit to Window</strong> (maintains perfect iPhone proportions), <strong>Fill Window</strong> (edge-to-edge), and <strong>Actual Size 1:1</strong> for pixel-accurate testing.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 bg-white shadow-xs">
                <CardHeader>
                  <CardTitle className="text-base text-slate-900">
                    Dual Color-Space Precision
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-xs leading-relaxed">
                    Supports both <code>kCVPixelFormatType_32BGRA</code> and <code>kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange</code> for accurate color reproduction without tint distortion.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 bg-white shadow-xs">
                <CardHeader>
                  <CardTitle className="text-base text-slate-900">
                    Apple Silicon Metal Shaders
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-xs leading-relaxed">
                    Custom compiled Metal Shading Language (MSL) vertex and fragment shaders optimized for Apple M1, M2, M3, and M4 unified memory architecture.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Tab 2: Dual Transports */}
        {activeTab === "transports" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {/* USB Transport */}
            <div className="p-8 rounded-3xl bg-white border border-blue-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Usb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">USB Direct Cable</h3>
                    <p className="text-xs text-blue-600 font-mono font-semibold">⌘U • ~12ms Ultra-Low Latency</p>
                  </div>
                </div>
                <Badge variant="default" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Recommended for Pro</Badge>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Connect your iPhone or iPad directly using a Lightning or USB-C cable. PSG Cast taps directly into the hardware multiplexing bus via Apple's AVFoundation and CoreMediaIO APIs.
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>~12ms Latency:</strong> Immediate tactile response for gaming and live demonstrations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Retina Resolution:</strong> Unthrottled 1170 × 2532 stream at 60 frames per second</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Zero Wi-Fi Congestion:</strong> Perfect for crowded conference rooms, studios, and convention stages</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Continuous Device Charging:</strong> Keeps your iPhone battery topped up during long streams</span>
                </li>
              </ul>
            </div>

            {/* Wi-Fi AirPlay Transport */}
            <div className="p-8 rounded-3xl bg-white border border-violet-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Wi-Fi AirPlay Mirroring</h3>
                    <p className="text-xs text-violet-600 font-mono font-semibold">⌘W • ~35ms Wireless Latency</p>
                  </div>
                </div>
                <Badge variant="glow" className="text-xs bg-violet-50 text-violet-700 border-violet-200">Cable-Free</Badge>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                PSG Cast hosts a local AirPlay receiver service advertising over Bonjour on port 7001. No software or third-party app needs to be installed on your iOS device.
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Native iOS Control Center:</strong> Swipe down and tap Screen Mirroring → "PSGCast"</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>FairPlay SAP Decryption:</strong> Hardware-accelerated secure cryptographic pairing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Zero Setup:</strong> Discovers seamlessly on any 2.4GHz / 5GHz / Wi-Fi 6 local network</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Automatic Discovery:</strong> Bonjour zeroconf auto-advertises when receiver starts</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Creator & OBS Tools */}
        {activeTab === "creator" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-900">Clean Capture (⌘C)</h4>
                  <Badge variant="glow" className="text-[10px] bg-purple-50 text-purple-700 border-purple-200">OBS Mode</Badge>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Strips window title bars, toolbar chrome, traffic light buttons, and drop shadows. Leaves pure video that fits seamlessly into OBS Window Capture sources.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                  <Video className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-900">Live MP4 Recording (⌘R)</h4>
                  <Badge variant="destructive" className="text-[10px]">Synced AAC</Badge>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Direct pipeline feed into Apple AVAssetWriter for hardware-encoded MP4 files with crystal-clear synced stereo audio saved to <code>~/Movies/PSGCast</code>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-900">Retina Screenshots (⌘S)</h4>
                  <Badge variant="default" className="text-[10px] bg-blue-50 text-blue-700 border-blue-200">Pixel Perfect</Badge>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  One-tap full-resolution PNG snapshots with authentic camera shutter flash and sound effect. Saved immediately to <code>~/Pictures/PSGCast</code>.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-slate-900">
                  OBS Studio & Streamlabs Setup in 30 Seconds
                </h4>
                <p className="text-sm text-slate-600 font-normal">
                  Add a <strong>Window Capture</strong> source in OBS, pick <strong>PSGCast</strong>, and press <strong>⌘C</strong> to remove all window borders. No virtual camera plugins or display capture cropping required.
                </p>
              </div>
              <Link to="/download">
                <Button variant="primary" size="md">
                  Download PSG Cast Now
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Tab 4: Diagnostics & Audio */}
        {activeTab === "hud" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {/* Real-time Diagnostics HUD */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Real-Time Diagnostics HUD</h3>
                    <p className="text-xs text-amber-600 font-mono font-semibold">⌘D Overlay</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5 font-mono text-xs border border-slate-800 space-y-3 text-slate-100">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">FPS Render Rate:</span>
                  <span className="text-emerald-400 font-bold">59.98 FPS (Moving Avg)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Stream Resolution:</span>
                  <span className="text-slate-200">1170 × 2532 (Retina)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Video Decoder:</span>
                  <span className="text-violet-400">VideoToolbox H.264 VTDecomp</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Throughput Bitrate:</span>
                  <span className="text-blue-400">24.5 Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dropped Frames:</span>
                  <span className="text-emerald-400 font-bold">0 (0.00%)</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Press ⌘D at any time to inspect frame delivery intervals, hardware decoding metrics, network jitter, and GPU render execution time.
              </p>
            </div>

            {/* Audio System */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Synchronized Audio Pipeline</h3>
                    <p className="text-xs text-sky-600 font-mono font-semibold">CoreAudio & AAC Stereo</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Stream low-latency audio from iOS games, media players, and system sounds directly through your Mac speakers or headphones.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>Audio Format</span>
                  <span className="font-mono text-sky-600 font-semibold">48.0 kHz 16-bit AAC Stereo</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>Output Routing</span>
                  <span className="font-mono text-slate-800 font-semibold">Default macOS CoreAudio Device</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>One-Click Controls</span>
                  <span className="font-mono text-emerald-600 font-semibold">Independent Volume Slider & Mute</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Audio is seamlessly multiplexed alongside video frames during MP4 recording sessions, guaranteeing zero audio drift or desynchronization.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
