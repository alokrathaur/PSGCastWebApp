import React, { useState } from "react";
import {
  Search,
  HelpCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import { FaqItem } from "@/types/activation";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-2": false,
    "faq-4": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData: FaqItem[] = [
    {
      id: "faq-1",
      category: "connectivity",
      question: "How do I achieve ultra-low ~12ms latency with USB cable?",
      answer:
        "Connect your iPhone or iPad directly to your Mac using an authentic Lightning or USB-C cable. In PSG Cast, press ⌘U (or choose Connect via USB). The app taps into AVFoundation and CoreMediaIO hardware multiplexing to stream at 60 FPS Retina (1170×2532) with under 12ms latency. Make sure you tap 'Trust This Computer' on your iPhone if prompted for the first time.",
    },
    {
      id: "faq-2",
      category: "connectivity",
      question: "Does Wi-Fi Screen Mirroring require an iOS app to be installed?",
      answer:
        "No. You do not need to install anything on your iPhone or iPad. PSG Cast runs a native AirPlay Bonjour receiver service on your Mac (port 7001) with hardware FairPlay decryption. Simply swipe down to open Control Center on your iOS device, tap 'Screen Mirroring', and select 'PSGCast'.",
    },
    {
      id: "faq-airplay-permission",
      category: "connectivity",
      question: "Which macOS Privacy & Security setting is required for Wi-Fi AirPlay?",
      answer:
        "On macOS Sonoma (14+) and macOS Sequoia (15+), open System Settings → Privacy & Security → Screen & System Audio Recording, and toggle ON the switch next to PSG Cast.app. This permission allows PSG Cast to receive and decode incoming AirPlay video frames and capture synchronized iPhone stereo audio without installing any third-party audio drivers.",
    },
    {
      id: "faq-3",
      category: "installation",
      question: "What macOS versions and Mac models are supported?",
      answer:
        "PSG Cast requires macOS 14.0 (Sonoma) or newer, including macOS Sequoia (15.x). The application is compiled as a Universal 2 binary with native 64-bit architectures for Apple Silicon (M1, M2, M3, M4 series) and 64-bit Intel processors. Metal GPU capability is required.",
    },
    {
      id: "faq-4",
      category: "obs",
      question: "How does Clean Capture Mode (⌘C) work with OBS Studio?",
      answer:
        "Clean Capture Mode (press ⌘C) strips away all macOS window chrome, title bars, traffic light buttons, and borders, leaving only the unadulterated video stream surface. In OBS Studio, add a 'macOS Screen Capture' or 'Window Capture' source and select PSGCast. It will fit into your scene canvas without requiring manual cropping or chroma keying.",
    },
    {
      id: "faq-5",
      category: "activation",
      question: "How does the license token activation work?",
      answer:
        "When you purchase PSG Cast Pro, you receive a license token (e.g., PSG-PRO-LIFETIME-XXXX). On our Activate page, enter your token or email to verify it and click 'Open PSG Cast'. The web portal triggers a deep link (psgcast://activate?token=...) that automatically activates the app on your Mac. You can also paste the token directly into the app's Preferences > License tab.",
    },
    {
      id: "faq-6",
      category: "activation",
      question: "How many Macs can I activate with one license?",
      answer:
        "Each PSG Cast Pro license allows activation on 1 active Mac at a time. If you upgrade to a new Mac, you can instantly transfer your license by verifying your token on the web activation portal and selecting 'Transfer License to this Mac'.",
    },
    {
      id: "faq-7",
      category: "audio",
      question: "Is iOS audio mirrored along with the video stream?",
      answer:
        "Yes! High-fidelity 48kHz stereo audio is captured alongside the video feed with zero desynchronization. You can monitor the audio directly through your Mac speakers or headphones, or route it into OBS Studio / virtual audio cables as an independent CoreAudio device.",
    },
    {
      id: "faq-8",
      category: "privacy",
      question: "Does PSG Cast upload my screen recording or video to any cloud server?",
      answer:
        "Absolutely not. PSG Cast is 100% on-device software. All video encoding, decoding, texture mapping, and frame captures take place locally on your Mac's unified memory and GPU. No telemetry or video streams are ever transmitted across external servers.",
    },
    {
      id: "faq-mac-format-license",
      category: "activation",
      question: "What should I do before formatting or reinstalling macOS?",
      answer:
        "If you want to format and reinstall your Mac, please make sure to deactivate your license key first from your Mac (PSG Cast → Preferences → License → Deactivate). Don't worry if you forgot to delete/deactivate it before formatting — simply contact our support team at legendprixai@gmail.com or primestategaming@gmail.com followed by your registered email and invoice receipt or purchased plan name, and we will promptly reset your license key so you can reactivate without issue.",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "connectivity", label: "Connectivity & USB" },
    { id: "installation", label: "macOS Compatibility" },
    { id: "obs", label: "OBS & Clean Mode" },
    { id: "activation", label: "Licensing & Tokens" },
    { id: "audio", label: "Audio & Latency" },
    { id: "privacy", label: "Privacy & Security" },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchTerm.trim() === "" ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Quick answers regarding USB direct connection, AirPlay Wi-Fi, low latency, OBS integration, and licensing.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search questions (e.g. latency, OBS, USB, license)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-4 py-3 h-12 text-sm bg-white border-slate-200 shadow-xs focus:ring-blue-500 rounded-xl"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                title={faq.question}
                isOpen={!!openItems[faq.id]}
                onToggle={() => toggleItem(faq.id)}
              >
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))
          ) : (
            <div className="text-center py-12 p-8 rounded-2xl bg-white border border-slate-200 text-slate-500">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="text-sm">No matching questions found for &quot;{searchTerm}&quot;.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
              >
                Clear search filters
              </button>
            </div>
          )}
        </div>

        {/* Help CTA Box */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Have a specific question not covered here?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our engineering team typically answers questions within 24 hours.
              </p>
            </div>
          </div>
          <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="shrink-0 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="w-full sm:w-auto font-semibold">
              <Mail className="w-3.5 h-3.5 mr-2 text-blue-600" />
              <span>Customer Support</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
