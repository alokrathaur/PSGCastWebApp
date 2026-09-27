import React from "react";
import { Code2, Gamepad2, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const LatencyComparison: React.FC = () => {
  const comparisons = [
    {
      name: "PSG Cast (USB Direct)",
      latency: "11.8 ms",
      percentage: 12,
      fps: "60 FPS Native",
      frameDrop: "< 0.01%",
      cloudEgress: "Zero (Direct Cable)",
      isChampion: true,
      color: "from-blue-600 to-indigo-600",
      description: "Direct AVFoundation & CoreMediaIO muxing over Lightning / USB-C bus.",
    },
    {
      name: "PSG Cast (Wi-Fi AirPlay)",
      latency: "34.2 ms",
      percentage: 26,
      fps: "60 FPS Fluid",
      frameDrop: "< 0.2%",
      cloudEgress: "Zero (Local LAN Only)",
      isChampion: false,
      color: "from-violet-600 to-purple-600",
      description: "Local Bonjour AirPlay 7001 with hardware FairPlay SAP decryption.",
    },
    {
      name: "Generic Browser / WebRTC Tools",
      latency: "285 ms",
      percentage: 65,
      fps: "24–30 FPS Jittery",
      frameDrop: "5% – 12%",
      cloudEgress: "External Relays",
      isChampion: false,
      color: "from-amber-500 to-orange-500",
      description: "Browser sandbox overhead, canvas re-encoding, and WebRTC jitter buffers.",
    },
    {
      name: "Cloud Screen Mirroring Platforms",
      latency: "460+ ms",
      percentage: 95,
      fps: "15–30 FPS Variable",
      frameDrop: "15% – 25%",
      cloudEgress: "Full Cloud Upload",
      isChampion: false,
      color: "from-rose-500 to-red-500",
      description: "Video leaves your local network to an external server and streams back down.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Real Hardware Benchmarks
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Ultra-Low Latency: Feel Every Tap in Real Time
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            By avoiding web browsers, electron wrappers, and cloud servers, PSG Cast feeds decoded H.264 frames straight to your Mac GPU in under 12 milliseconds.
          </p>
        </div>

        {/* Comparison Bars */}
        <div className="max-w-4xl mx-auto space-y-5">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all ${
                item.isChampion
                  ? "bg-white border-2 border-blue-600 shadow-md shadow-blue-500/10"
                  : "bg-white border border-slate-200/90 shadow-xs"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-base md:text-lg text-slate-900">
                    {item.name}
                  </span>
                  {item.isChampion && (
                    <Badge variant="default" className="text-[10px] bg-blue-100 text-blue-800 border-blue-200 font-bold">
                      Lowest Latency ⚡
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-mono font-medium">End-to-End Latency:</span>
                  <span
                    className={`font-mono font-bold text-lg ${
                      item.isChampion ? "text-blue-600" : "text-slate-800"
                    }`}
                  >
                    {item.latency}
                  </span>
                </div>
              </div>

              {/* Progress visualizer bar */}
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-y-1 font-mono">
                <p className="text-slate-600 text-xs font-sans font-medium">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-slate-700">
                  <span>FPS: <strong className="text-slate-900">{item.fps}</strong></span>
                  <span>Frame Drop: <strong className="text-slate-900">{item.frameDrop}</strong></span>
                  <span>Telemetry: <strong className="text-slate-900">{item.cloudEgress}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Use-Case Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">iOS Developers & QA</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Debug on physical hardware while viewing the output in a crisp, resizable window directly on macOS next to Xcode and Console.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
              <Video className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Streamers & OBS Creators</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Activate Clean Capture Mode (⌘C) to embed an ultra-sharp, borderless iPhone game feed directly into OBS Studio scene compositions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Mobile Gamers</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Play high-tempo rhythm and action games on a 5K Studio Display or MacBook Pro display with instantaneous touch response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
