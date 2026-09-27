import React from "react";
import { Link } from "react-router-dom";
import {
  Usb,
  Wifi,
  Cpu,
  Video,
  Camera,
  Activity,
  ShieldCheck,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FeaturesGrid: React.FC = () => {
  const coreFeatures = [
    {
      icon: Usb,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-100",
      badge: "~12ms Latency",
      badgeVariant: "default" as const,
      title: "Direct USB Mirroring",
      description:
        "Plug in any Lightning or USB-C cable for immediate 60 FPS streaming via AVFoundation and CoreMediaIO muxing with near-zero latency.",
    },
    {
      icon: Wifi,
      iconColor: "text-violet-600",
      bgColor: "bg-violet-50 border-violet-100",
      badge: "AirPlay Bonjour",
      badgeVariant: "glow" as const,
      title: "Wi-Fi Screen Mirroring",
      description:
        "Built-in AirPlay screen receiver service running on port 7001 with FairPlay SAP decryption. Just tap Screen Mirroring in Control Center.",
    },
    {
      icon: Cpu,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50 border-purple-100",
      badge: "Apple Metal GPU",
      badgeVariant: "glow" as const,
      title: "Hardware VideoToolbox",
      description:
        "Zero CPU lag. Hardware H.264 decompression sessions feeding directly into custom Metal shaders and CVMetalTextureCache rendering.",
    },
    {
      icon: Maximize2,
      iconColor: "text-sky-600",
      bgColor: "bg-sky-50 border-sky-100",
      badge: "OBS Ready (⌘C)",
      badgeVariant: "default" as const,
      title: "Clean Capture Mode",
      description:
        "Strip away all toolbar chrome, window headers, and borders with ⌘C. Delivers a pristine, full-frame feed ideal for OBS Studio & Keynote.",
    },
    {
      icon: Video,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-100",
      badge: "Synced AAC (⌘R)",
      badgeVariant: "success" as const,
      title: "Real-Time MP4 Recording",
      description:
        "One-key live recording to high-bitrate MP4 with synchronized AAC stereo audio, saved automatically to ~/Movies/PSGCast.",
    },
    {
      icon: Activity,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50 border-amber-100",
      badge: "Real-Time (⌘D)",
      badgeVariant: "warning" as const,
      title: "Live Diagnostics HUD",
      description:
        "Inspect moving-average frame rate (30–60 FPS), stream resolution (1170×2532), hardware latency, bitrate, and frame drop counter.",
    },
    {
      icon: Camera,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50 border-indigo-100",
      badge: "PNG (⌘S)",
      badgeVariant: "glow" as const,
      title: "Instant High-Res Screenshots",
      description:
        "Click or press ⌘S to capture pixel-perfect retina PNG snapshots with camera shutter flash and sound, saved to ~/Pictures/PSGCast.",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-100",
      badge: "100% On-Device",
      badgeVariant: "success" as const,
      title: "Zero Cloud Telemetry",
      description:
        "Your screen content never touches external servers or the cloud. All audio, video, and control paths remain strictly on your local device.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            Engineered For Performance
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Designed for Speed. Built for macOS.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Every layer of PSG Cast is crafted with native Apple frameworks for maximal throughput, minimal power consumption, and broadcast-grade visual clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <Card
                key={index}
                className="group border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <CardHeader className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl ${feat.bgColor} border flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                    </div>
                    <Badge variant={feat.badgeVariant} className="text-[10px]">
                      {feat.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Feature Deep Dive Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/60 to-purple-50 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Want to see detailed architecture benchmarks & pipeline specs?
            </h3>
            <p className="text-sm text-slate-600">
              Explore how VideoToolbox hardware decoding, Metal vertex/fragment shaders, and CoreMediaIO multiplexing achieve ~12ms latency.
            </p>
          </div>
          <Link to="/features" className="shrink-0">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20">
              Deep Dive Architecture
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
