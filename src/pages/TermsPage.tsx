import React, { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service — PSG Cast";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            Legal Terms & Licensing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated: September 2026 • Effective Date: September 2026
          </p>
        </div>

        <div className="space-y-10 text-slate-700 text-sm leading-relaxed bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-sm">
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">1. Agreement to Terms</h3>
            <p>
              By downloading, installing, accessing, or using PSG Cast (the "Application") or our website (<code>psgcast.app</code>), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the Application.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">2. License Grant & Entitlement</h3>
            <p>
              Subject to your compliance with these Terms, PSG Cast grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and execute the Application on macOS computers owned or controlled by you.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Machine Seat Limit:</strong> A standard PSG Cast license allows activation on <strong>one (1) Mac machine</strong> at any given time.
              </li>
              <li>
                <strong>Transferability:</strong> You may freely deactivate PSG Cast on an old Mac to activate it on a new Mac without purchasing an additional license.
              </li>
              <li>
                <strong>Commercial & Creator Use:</strong> You are fully authorized to use PSG Cast for commercial purposes, including video game streaming on YouTube/Twitch, software demonstrations, client presentations, and iOS app development.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">3. Restrictions & Prohibited Use</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Modify, adapt, translate, reverse engineer, decompile, or disassemble the binary executable or licensing mechanisms of the Application.</li>
              <li>Sub-license, rent, lease, resell, distribute, or publicly host license tokens or generated activation keys.</li>
              <li>Use the Application in violation of applicable laws or intellectual property rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">4. Apple Trademark Disclaimers</h3>
            <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed font-normal">
              Apple, Mac, macOS, iPhone, iPad, AirPlay, Metal, and Xcode are trademarks of Apple Inc., registered in the U.S. and other countries and regions. PSG Cast is an independent third-party native application developed by the PSG Cast team. PSG Cast is not endorsed by, sponsored by, or directly affiliated with Apple Inc.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">5. Disclaimer of Warranties</h3>
            <p>
              THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. WE DO NOT WARRANT THAT STREAMING SESSIONS WILL BE UNINTERRUPTED OR ENTIRELY ERROR-FREE UNDER ALL NETWORK CONDITIONS.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">6. Limitation of Liability</h3>
            <p>
              IN NO EVENT SHALL PSG CAST OR ITS CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM THE USE OR INABILITY TO USE THE APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">7. Inquiries</h3>
            <p>
              For legal inquiries, licensing questions, or enterprise team deployments, please reach out to:
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
