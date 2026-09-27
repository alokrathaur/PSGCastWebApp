import React, { useEffect } from "react";
import { Lock, EyeOff, HardDrive } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy — PSG Cast";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-emerald-50 text-emerald-700 border-emerald-200">
            Privacy First Architecture
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated: September 2026 • Effective Date: September 2026
          </p>
        </div>

        {/* 3 Core Guarantees Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <EyeOff className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Zero Screen Recording</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We never view, store, upload, or transmit your screen pixels or audio to any external cloud server.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-blue-200 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <HardDrive className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">100% Local On-Device</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Video decoding and GPU rendering run completely locally on your Mac's Apple Silicon or Intel chip.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-purple-200 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">No Mandatory Accounts</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Core screen mirroring operates without creating accounts, logins, or tracking identifiers.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-slate-700 text-sm leading-relaxed bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-sm">
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">1. Introduction & Overview</h3>
            <p>
              PSG Cast ("we", "our", or "us") builds native macOS software designed to cast iPhone and iPad screens directly to Mac hardware with minimal latency. We believe private screen data is sacred. This Privacy Policy describes how PSG Cast handles device data, network permissions, and licensing communications.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">2. Screen & Audio Stream Data</h3>
            <p>
              When using PSG Cast via direct USB cable or Wi-Fi AirPlay:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>No Cloud Ingestion:</strong> All video frames, audio samples, and control signals are transmitted directly between your mobile device and your Mac via your physical cable or your local router's LAN.
              </li>
              <li>
                <strong>Local Storage Only:</strong> Screenshots (⌘S) and MP4 recordings (⌘R) are stored exclusively in your Mac's local <code>~/Pictures/PSGCast</code> and <code>~/Movies/PSGCast</code> directories. We have zero access to these files.
              </li>
              <li>
                <strong>No Content Analysis:</strong> We do not parse, analyze, log, or transcribe the text, images, or audio appearing on your screen.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">3. System Permissions on macOS</h3>
            <p>
              PSG Cast requests only permissions strictly necessary for mirroring functionality:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Local Network:</strong> Required by macOS to discover iOS devices advertising via Bonjour Zeroconf on port 7001 for Wi-Fi AirPlay mirroring.
              </li>
              <li>
                <strong>USB / Camera / Capture Access:</strong> If required by macOS to read the muxed video stream over the physical USB lightning/Type-C cable.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">4. Licensing & Activation Data</h3>
            <p>
              If you purchase a PSG Cast Pro license:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                We store your purchase email address, license token, and an anonymized random installation UUID (generated locally and stored in your macOS Keychain).
              </li>
              <li>
                We do NOT collect hardware MAC addresses, serial numbers, motherboard IDs, or disk serial numbers.
              </li>
              <li>
                Payment information is handled exclusively by authorized PCI-compliant processors (such as Dodo Payments or Stripe). We never receive or store credit card numbers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">5. Web Portal Analytics</h3>
            <p>
              On our website (<code>psgcast.app</code>), we collect aggregated, privacy-preserving visits and download counts to measure system stability and server capacity. We do not sell user data to advertising brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">6. Your Rights & Contact</h3>
            <p>
              Under GDPR, CCPA, and global privacy frameworks, you have the right to request deletion of your purchase email from our license database. For privacy questions or data deletion requests, contact:
            </p>
            <p className="font-mono text-xs text-blue-600 font-semibold">
              {SITE_CONFIG.supportEmail}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
