export interface ShortcutItem {
  key: string;
  action: string;
  description: string;
}

export interface SystemRequirement {
  category: string;
  minimum: string;
  recommended: string;
}

export interface PlanLocalizedDetails {
  price: number;
  originalPrice: number;
  subtext: string;
  discount: string;
  currency: string;
  symbol: string;
  description: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  badge: string;
  name: string;
  popular: boolean;
  india: PlanLocalizedDetails;
  international: PlanLocalizedDetails;
  checkoutUrl: string;
}

export const SITE_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || "PSG Cast",
  title: "PSG Cast — Ultra-Low Latency iPhone to Mac Screen Mirroring",
  tagline: "Cast iPhone to Mac at 60 FPS with Ultra-Low ~12ms Latency",
  description:
    "High-performance native macOS screen mirroring app for iPhone and iPad. Direct USB cable or Wi-Fi AirPlay into a hardware-accelerated Metal window with OBS Clean Capture and real-time MP4 recording.",
  appVersion: import.meta.env.VITE_APP_VERSION || "1.0.0",
  releaseDate: "September 2026",
  minMacOSVersion: "macOS 14.0 (Sonoma) or newer",
  architecture: "Universal Binary (Apple Silicon M1/M2/M3/M4 & Intel Core 64-bit)",
  minIOSVersion: "iOS 12.0 or iPadOS 12.0 or newer",
  sha256Dmg: "d8e75e3b5a5b51b017463112cace8ab28e86516b4ef88e47ca1c920c5f19cc87",
  dmgSize: "4.8 MB",
  deepLinkScheme: "psgcast",
  
  // Configurable URLs via env
  downloadDmgUrl:
    import.meta.env.VITE_DOWNLOAD_DMG_URL ||
    "https://github.com/alokrathaur/PSG-Cast/releases/download/v1.0.0/PSGCast.dmg",
  downloadPkgUrl:
    import.meta.env.VITE_DOWNLOAD_PKG_URL ||
    "https://github.com/alokrathaur/PSG-Cast/releases/download/v1.0.0/PSGCast.pkg",
  apiUrl:
    import.meta.env.VITE_API_URL ||
    "https://psg-cast-serverless.macmint.workers.dev",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://psgcast.online",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "primestategaming@gmail.com",
  twitterUrl: import.meta.env.VITE_TWITTER_URL || "https://x.com/alok8feb",
  youtubeUrl: import.meta.env.VITE_YOUTUBE_URL || "https://www.youtube.com/@PrimeStateGaming",

  // Core metrics
  metrics: {
    usbLatency: "~12ms",
    wifiLatency: "~35ms",
    maxFps: "60 FPS",
    retinaResolution: "1170 × 2532",
    cloudTelemetry: "0% (Pure On-Device)",
  },

  // Shortcuts
  shortcuts: [
    { key: "⌘ + O", action: "Auto-Connect", description: "Automatically detect and connect to active screen mirror" },
    { key: "⌘ + U", action: "USB Direct Mode", description: "Establish ultra-low latency direct USB cable session" },
    { key: "⌘ + W", action: "Wi-Fi AirPlay Receiver", description: "Start local Bonjour AirPlay screen mirroring service" },
    { key: "⌘ + S", action: "Instant Screenshot", description: "Capture full-resolution PNG to ~/Pictures/PSGCast" },
    { key: "⌘ + R", action: "Record Live MP4", description: "Record high-bitrate MP4 with synchronized AAC audio" },
    { key: "⌘ + C", action: "Clean Capture Mode", description: "Strip window chrome and borders for clean OBS Studio capture" },
    { key: "⌘ + T", action: "Always on Top", description: "Keep floating iPhone window pinned above Xcode and other apps" },
    { key: "⌘ + D", action: "Diagnostics HUD", description: "Toggle moving-average FPS, latency, bitrate and drop counter" },
    { key: "⌘ + .", action: "Disconnect Session", description: "Gracefully disconnect active mirror session" },
    { key: "Esc", action: "Exit Clean Mode", description: "Exit Clean Capture or Fullscreen display" },
  ] as ShortcutItem[],

  // System Requirements
  requirements: [
    {
      category: "Operating System",
      minimum: "macOS Sonoma (14.0)",
      recommended: "macOS Sonoma (14.5+) or macOS Sequoia (15.0+)",
    },
    {
      category: "Processor Architecture",
      minimum: "Intel Core i5 (64-bit)",
      recommended: "Apple Silicon (M1, M2, M3, M4 series)",
    },
    {
      category: "Source Mobile Devices",
      minimum: "iPhone or iPad running iOS 12+",
      recommended: "iPhone 11 through 16 Pro running iOS 17 / 18",
    },
    {
      category: "Connection Transports",
      minimum: "Wi-Fi (same 2.4GHz / 5GHz LAN)",
      recommended: "Direct Lightning or USB-C cable for ~12ms latency, or 5GHz / Wi-Fi 6 LAN",
    },
    {
      category: "Graphics Acceleration",
      minimum: "Metal-compatible GPU",
      recommended: "Apple Silicon integrated 8-core+ GPU with Hardware VideoToolbox decode",
    },
  ] as SystemRequirement[],

  // Localized Pricing Plans (India & International)
  pricingPlans: [
    {
      id: "quarterly",
      badge: "1. Quarterly Plan",
      name: "PSG Cast Pro — 90 Days",
      popular: false,
      india: {
        price: 90,
        originalPrice: 270,
        subtext: "1 Rs/day",
        discount: "67% off",
        currency: "₹",
        symbol: "₹",
        description:
          "Unlock PSG Cast Pro for 90 days. Enjoy iPhone screen mirroring on your Mac, seamless connectivity, and premium features for gaming, streaming, presentations, and content creation. Affordable access at just ₹1 per day in India.",
        features: [
          "60 FPS Retina Screen Mirroring (1170×2532)",
          "Ultra-low ~12ms latency direct USB cable mode",
          "Wi-Fi AirPlay receiver mode (port 7001)",
          "OBS Studio Clean Capture mode (⌘C)",
          "Instant PNG snapshot captures (⌘S)",
          "Audio passthrough with 48kHz stereo sync",
          "90 days of software updates & email support",
        ],
      },
      international: {
        price: 1,
        originalPrice: 9,
        subtext: "$0.01/day",
        discount: "89% off",
        currency: "USD",
        symbol: "$",
        description:
          "Unlock PSG Cast Pro for 90 days. Enjoy iPhone screen mirroring on your Mac, seamless connectivity, and premium features for gaming, streaming, presentations, and content creation. Affordable access at just ~$0.01 per day ($1 for 90 days).",
        features: [
          "60 FPS Retina Screen Mirroring (1170×2532)",
          "Ultra-low ~12ms latency direct USB cable mode",
          "Wi-Fi AirPlay receiver mode (port 7001)",
          "OBS Studio Clean Capture mode (⌘C)",
          "Instant PNG snapshot captures (⌘S)",
          "Audio passthrough with 48kHz stereo sync",
          "90 days of software updates & email support",
        ],
      },
      checkoutUrl: "https://checkout.dodopayments.com/buy/pdt_0NoVWBb7EX3DSTWl4hPh8",
    },
    {
      id: "yearly",
      badge: "2. Yearly Plan",
      name: "PSG Cast Pro — Yearly",
      popular: false,
      india: {
        price: 299,
        originalPrice: 1080,
        subtext: "₹0.82/day",
        discount: "72% off",
        currency: "₹",
        symbol: "₹",
        description:
          "Get 12 months of PSG Cast Pro with unlimited access to supported premium features. Mirror your iPhone to your Mac, enjoy a smooth screen-sharing experience, and enhance your gaming, streaming, development, and presentation workflows. Great value at under ₹0.82 per day.",
        features: [
          "Everything in Quarterly Plan",
          "Full 12 months continuous access",
          "Cost-effective: Under ₹0.82 per day",
          "Priority hardware decoding engine updates",
          "Priority customer support with < 24h turnaround",
          "Instant license re-hosting for Mac upgrades",
        ],
      },
      international: {
        price: 9.99,
        originalPrice: 36,
        subtext: "$0.83/mo",
        discount: "72% off",
        currency: "USD",
        symbol: "$",
        description:
          "Get 12 months of PSG Cast Pro with unlimited access to supported premium features. Mirror your iPhone to your Mac, enjoy a smooth screen-sharing experience, and enhance your gaming, streaming, development, and presentation workflows. Great value at just $0.83 per month ($9.99/year).",
        features: [
          "Everything in Quarterly Plan",
          "Full 12 months continuous access",
          "Cost-effective: Under $0.83 per month ($9.99/yr)",
          "Priority hardware decoding engine updates",
          "Priority customer support with < 24h turnaround",
          "Instant license re-hosting for Mac upgrades",
        ],
      },
      checkoutUrl: "https://checkout.dodopayments.com/buy/pdt_0NoVWUZv6VOozdeYAed2Q",
    },
    {
      id: "lifetime",
      badge: "3. Lifetime Plan",
      name: "PSG Cast Pro — Lifetime",
      popular: true,
      india: {
        price: 999,
        originalPrice: 2999,
        subtext: "One-time",
        discount: "67% off",
        currency: "₹",
        symbol: "₹",
        description:
          "Unlock PSG Cast Pro with a one-time lifetime purchase. Enjoy supported premium features, iPhone-to-Mac screen mirroring, and future updates covered by the lifetime license terms. No recurring subscription fees. One-time ₹999 payment.",
        features: [
          "Everything in Yearly Plan",
          "One-time payment (₹999) — zero recurring fees ever",
          "Lifetime access to all future major version updates",
          "Deep-link 1-click license activation (psgcast://activate)",
          "Commercial & streaming rights for OBS, YouTube & Twitch",
          "VIP Direct Developer Support channel",
        ],
      },
      international: {
        price: 29.99,
        originalPrice: 89.99,
        subtext: "One-time",
        discount: "67% off",
        currency: "USD",
        symbol: "$",
        description:
          "Unlock PSG Cast Pro with a one-time lifetime purchase. Enjoy supported premium features, iPhone-to-Mac screen mirroring, and future updates covered by the lifetime license terms. No recurring subscription fees. One-time $29.99 payment.",
        features: [
          "Everything in Yearly Plan",
          "One-time payment ($29.99) — zero recurring fees ever",
          "Lifetime access to all future major version updates",
          "Deep-link 1-click license activation (psgcast://activate)",
          "Commercial & streaming rights for OBS, YouTube & Twitch",
          "VIP Direct Developer Support channel",
        ],
      },
      checkoutUrl: "https://checkout.dodopayments.com/buy/pdt_0NoVWmxaH4ETmZOImoA7U",
    },
  ] as PricingPlan[],

  // DouWan vs PSG Cast Detailed Comparison
  douwanComparison: {
    title: "PSG Cast vs. DouWan",
    subtitle: "A side-by-side comparison of features, latency, architecture, and privacy.",
    items: [
      {
        feature: "USB Cable Latency",
        psgCast: "~12ms (Direct AVFoundation Mux)",
        douWan: "~50ms - 85ms+ (Driver Bridge)",
        psgCastAdvantage: true,
      },
      {
        feature: "OBS Studio Clean Capture (⌘C)",
        psgCast: "Native borderless window chrome removal",
        douWan: "Manual crop required / border artifacts",
        psgCastAdvantage: true,
      },
      {
        feature: "Rendering Architecture",
        psgCast: "Native Swift & Metal GPU Pipeline (<3% CPU)",
        douWan: "Heavy cross-platform daemon (15-30% CPU)",
        psgCastAdvantage: true,
      },
      {
        feature: "Framerate & Resolution",
        psgCast: "Solid 60 FPS Retina (1170×2532)",
        douWan: "Variable 30-60 FPS (prone to frame drops)",
        psgCastAdvantage: true,
      },
      {
        feature: "Privacy & Telemetry",
        psgCast: "100% On-Device (Zero cloud hops)",
        douWan: "Closed-source background telemetry",
        psgCastAdvantage: true,
      },
      {
        feature: "iOS Companion App",
        psgCast: "Not Required (Native AirPlay & USB)",
        douWan: "Sometimes requires driver profiles",
        psgCastAdvantage: true,
      },
    ],
  },
};

