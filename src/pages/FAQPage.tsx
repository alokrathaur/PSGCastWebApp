import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  HelpCircle,
  Mail,
} from "lucide-react";
import { FaqItem } from "@/types/activation";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "faq-1": true, "faq-4": true });

  useEffect(() => {
    document.title = "Frequently Asked Questions — PSG Cast";
    window.scrollTo(0, 0);
  }, []);

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
        "Each PSG Cast license entitles you to 1 active Mac machine at a time. If you get a new Mac or want to switch computers, simply open PSG Cast on your original Mac, go to Preferences > License, and click 'Deactivate Machine'. This immediately frees your seat so you can activate your new Mac.",
    },
    {
      id: "faq-7",
      category: "troubleshooting",
      question: "Where are MP4 recordings and PNG screenshots saved?",
      answer:
        "Instant screenshots (⌘S) are saved as full-resolution, uncompressed PNG files directly to ~/Pictures/PSGCast. Real-time live recordings (⌘R) with synchronized AAC stereo audio are saved as high-bitrate MP4 files directly to ~/Movies/PSGCast.",
    },
    {
      id: "faq-8",
      category: "troubleshooting",
      question: "My iPhone isn't showing PSGCast in Screen Mirroring over Wi-Fi?",
      answer:
        "Make sure both your Mac and iPhone are connected to the same Wi-Fi network (or same subnet). When launching PSG Cast for the first time, ensure you granted macOS 'Local Network' permission. If your Mac firewall is enabled, ensure port 7001 (Bonjour AirPlay) is not blocked.",
    },
    {
      id: "faq-9",
      category: "installation",
      question: "Is my screen content uploaded to any cloud servers?",
      answer:
        "Absolutely not. PSG Cast is 100% on-device software. Video and audio data are transmitted exclusively over your direct USB cable or local Wi-Fi router. We operate zero cloud relays, collect zero video frame data, and require no account creation to cast.",
    },
    {
      id: "faq-10",
      category: "troubleshooting",
      question: "How do I toggle the Real-Time Diagnostics HUD?",
      answer:
        "Press ⌘D (Command + D) to show or hide the floating diagnostics overlay. The HUD displays real-time metrics including moving-average FPS (30–60), stream resolution (e.g. 1170×2532), estimated end-to-end latency, bitrate throughput, and frame drop counter.",
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
    { id: "connectivity", label: "USB & Wi-Fi" },
    { id: "installation", label: "Installation & System" },
    { id: "activation", label: "Activation & Licensing" },
    { id: "obs", label: "OBS & Creator Tools" },
    { id: "troubleshooting", label: "Troubleshooting" },
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
    <main className="min-h-screen pt-28 pb-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <Badge variant="glow" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Support & Knowledgebase
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Find answers to common questions about USB latency, AirPlay setup, OBS Clean Capture, and machine license activation.
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search questions, shortcuts, latency, ports, or activation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="w-4 h-4 text-slate-400" />}
            className="h-12 bg-white text-base shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                title={faq.question}
                isOpen={!!openItems[faq.id]}
                onToggle={() => toggleItem(faq.id)}
              >
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))
          ) : (
            <div className="p-10 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">
                No matching questions found
              </h4>
              <p className="text-xs text-slate-500">
                Try searching with different keywords or browse all categories above.
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900">
              Still have a question or need technical help?
            </h4>
            <p className="text-xs text-slate-600">
              Our engineering team responds directly to inquiries.
            </p>
          </div>
          <a href={`mailto:${SITE_CONFIG.supportEmail}`}>
            <Button variant="primary" size="md">
              <Mail className="w-4 h-4 mr-2" />
              Customer Support
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
};
