import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const ShortcutsShowcase: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            Native macOS Ergonomics
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Designed for Keyboard Maestros
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Control recording, streaming transport, screenshot capture, and OBS views instantly without taking your hands off the keyboard.
          </p>
        </div>

        {/* Shortcuts Table / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {SITE_CONFIG.shortcuts.map((item, index) => {
            const isCopied = copiedKey === item.key;
            return (
              <div
                key={index}
                onClick={() => handleCopy(item.key)}
                className="group p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 hover:bg-white transition-all cursor-pointer flex items-center justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {item.action}
                  </div>
                  <div className="text-xs text-slate-600 leading-tight font-normal">
                    {item.description}
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-3 shrink-0">
                  <kbd className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800 shadow-xs group-hover:border-blue-400 group-hover:text-blue-700 transition-colors">
                    {item.key}
                  </kbd>
                  <button
                    type="button"
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Copy shortcut"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
