import React, { useState, useEffect, useRef } from "react";
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
  Play,
  Pause,
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

  // Hero Promo Video state & autoplay/mute handling (unmuted always by default)
  const promoVideoRef = useRef<HTMLVideoElement>(null);
  const [promoMuted, setPromoMuted] = useState(false);
  const [promoPlaying, setPromoPlaying] = useState(true);
  const userExplicitlyMuted = useRef(false);

  useEffect(() => {
    // Clear any previous visit/played counters from localStorage so audio is never auto-muted
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("psg_cast_visit_count");
        localStorage.removeItem("psg_cast_promo_played_once");
      } catch {}
    }

    const video = promoVideoRef.current;
    if (!video) return;

    // Unmute always by default with full volume
    video.muted = false;
    video.volume = 1.0;

    const unmuteAndPlay = () => {
      if (userExplicitlyMuted.current) return;
      if (!video) return;
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
        setPromoMuted(false);
        setPromoPlaying(true);
        cleanupGestureListeners();
      }).catch(() => {});
    };

    const cleanupGestureListeners = () => {
      window.removeEventListener("click", unmuteAndPlay, true);
      window.removeEventListener("touchend", unmuteAndPlay, true);
      window.removeEventListener("mouseup", unmuteAndPlay, true);
      window.removeEventListener("keydown", unmuteAndPlay, true);
    };

    // Attempt unmuted autoplay immediately on load
    video.play()
      .then(() => {
        // Browser allowed unmuted autoplay immediately!
        setPromoMuted(false);
        setPromoPlaying(true);
      })
      .catch(() => {
        // Browser autoplay policy held audio until first user interaction.
        // Start playback muted so the video frames animate immediately:
        video.muted = true;
        setPromoMuted(true);
        video.play().then(() => setPromoPlaying(true)).catch(() => setPromoPlaying(false));

        // Listen for trusted user activation events to unmute audio immediately
        window.addEventListener("click", unmuteAndPlay, true);
        window.addEventListener("touchend", unmuteAndPlay, true);
        window.addEventListener("mouseup", unmuteAndPlay, true);
        window.addEventListener("keydown", unmuteAndPlay, true);
      });

    return () => {
      cleanupGestureListeners();
    };
  }, []);

  const togglePromoAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const video = promoVideoRef.current;
    if (!video) return;

    if (promoMuted || video.muted) {
      // User explicitly clicked to unmute!
      video.muted = false;
      video.volume = 1.0;
      setPromoMuted(false);
      userExplicitlyMuted.current = false;
      video.play().then(() => setPromoPlaying(true)).catch(() => {});
    } else {
      // User explicitly clicked to mute!
      video.muted = true;
      setPromoMuted(true);
      userExplicitlyMuted.current = true;
    }
  };

  const handleShowcaseClick = () => {
    const video = promoVideoRef.current;
    if (!video) return;

    // If currently muted, clicking the video un-mutes it immediately!
    if (video.muted || promoMuted) {
      video.muted = false;
      video.volume = 1.0;
      setPromoMuted(false);
      userExplicitlyMuted.current = false;
      video.play().then(() => setPromoPlaying(true)).catch(() => {});
      return;
    }

    // Toggle play / pause if already unmuted
    if (video.paused) {
      video.play().then(() => setPromoPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPromoPlaying(false);
    }
  };

  const handleShowcaseHover = () => {
    if (userExplicitlyMuted.current) return;
    const video = promoVideoRef.current;
    if (!video || !video.muted) return;
    video.muted = false;
    video.volume = 1.0;
    video.play().then(() => {
      setPromoMuted(false);
    }).catch(() => {
      video.muted = true;
    });
  };

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
        {/* 2-Column Hero: Left-aligned Text & Right-aligned Mirror Device Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content & Actions (Left-aligned) */}
          <div className="lg:col-span-6 space-y-6 text-left">
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Cast iPhone to Mac with{" "}
              <span className="text-gradient-blue-violet">Ultra-Low ~12ms</span>{" "}
              Latency
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Direct USB cable & Wi-Fi AirPlay streaming directly into a hardware-accelerated Metal window with <strong className="font-bold text-slate-900">OBS</strong> support. Built for creators, developers, streamers, and mobile pros.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-start gap-3.5 pt-1">
              <Link to="/download">
                <Button
                  variant="gradient"
                  size="lg"
                  className="h-13 px-7 shadow-lg shadow-blue-500/25 group text-base font-semibold"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                  Download for macOS
                  <span className="ml-2 text-xs opacity-90 font-normal bg-white/20 px-2 py-0.5 rounded-full">
                    v{SITE_CONFIG.appVersion}
                  </span>
                </Button>
              </Link>

              <Link to="/activate">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 px-6 border-indigo-200 text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50/80 text-base font-semibold shadow-xs"
                >
                  <KeyRound className="w-4 h-4 mr-2 text-indigo-600" />
                  Activate License
                </Button>
              </Link>

              <Link to="/features">
                <Button variant="ghost" size="lg" className="h-13 px-5 text-slate-700 hover:text-slate-900 font-semibold">
                  Features →
                </Button>
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-start gap-5 pt-3 text-xs text-slate-500 font-semibold border-t border-slate-200/80">
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

          {/* Right Column: High-Performance Promo Video Showcase */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px] group">
              {/* Soft Ambient Radial Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-purple-400/20 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Floating Status Badges */}
              <div className="absolute -top-3 right-6 z-30 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold text-slate-800 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Apple Metal 3 • 60 FPS Sync</span>
              </div>

              <div className="absolute -bottom-3 left-6 z-30 hidden sm:flex items-center gap-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-3.5 py-1.5 rounded-full shadow-xl text-xs font-medium text-slate-200 pointer-events-none">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct USB & AirPlay (~12ms)</span>
              </div>

              {/* High-Resolution Video Player Showcase */}
              <div
                onClick={handleShowcaseClick}
                onMouseEnter={handleShowcaseHover}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/15 border border-slate-200/80 bg-slate-950 cursor-pointer select-none group"
              >
                <video
                  ref={promoVideoRef}
                  src="/psg-cast-promo-16x9.mp4"
                  playsInline
                  autoPlay
                  loop
                  muted={promoMuted}
                  preload="auto"
                  poster="/assets/promo-poster.jpg"
                  onPlay={() => setPromoPlaying(true)}
                  onPause={() => setPromoPlaying(false)}
                  className="w-full h-auto aspect-video object-cover transform transition-transform duration-500 group-hover:scale-[1.005]"
                />

                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none rounded-2xl" />

                {/* Floating Interactive Audio Toggle Button */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    data-audio-button="true"
                    onClick={togglePromoAudio}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-200 shadow-xl ${
                      promoMuted
                        ? "bg-slate-950/85 hover:bg-slate-900 text-white border border-white/20 hover:border-white/40 ring-1 ring-black/30"
                        : "bg-blue-600/95 hover:bg-blue-600 text-white border border-blue-400/40 shadow-blue-500/30"
                    }`}
                    title={promoMuted ? "Click to enable sound" : "Click to mute sound"}
                    aria-label={promoMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {promoMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-rose-300 animate-pulse" />
                        <span className="text-xs font-medium tracking-tight">Unmute Sound</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-emerald-300" />
                        <span className="text-xs font-medium tracking-tight">Sound On</span>
                        {/* Audio equalizer wave micro-animation */}
                        <span className="flex items-center gap-0.5 ml-1 h-3">
                          <span className="w-0.5 h-2 bg-emerald-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-0.5 h-3 bg-emerald-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-0.5 h-1.5 bg-emerald-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Center Play/Pause indicator on hover or when paused */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[1px] transition-opacity duration-200 pointer-events-none ${
                    promoPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-white/20 text-white flex items-center justify-center shadow-2xl backdrop-blur-md">
                    {promoPlaying ? (
                      <Pause className="w-6 h-6 fill-white text-white" />
                    ) : (
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Device Mockup Simulator Section */}
        <div className="mt-20 pt-16 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-semibold text-blue-700 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE INTERACTIVE SIMULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Test Real-Time Controls & Diagnostics HUD
            </h2>
            <p className="text-sm text-slate-600">
              Simulate switching between USB direct cable and AirPlay transport, inspect live frame pipeline telemetry, and preview OBS Clean Capture mode.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
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
    </div>
  </section>
);
};
