# PSG Cast Web App 📱 ➔ 💻

> **Modern, Premium, Responsive Website for PSG Cast**  
> High-performance native macOS screen mirroring app for iPhone & iPad. Built with **Vite, React 18, TypeScript, Tailwind CSS, and shadcn/ui**.

---

## 🌟 Key Highlights & Design Aesthetic

- **Apple-Inspired Clean White Aesthetic**: Built on pristine white and soft airy backgrounds (`#FAFAFC` and `#FFFFFF`) with crisp typography, subtle borders (`#E2E8F0`), and vibrant electric blue (`#2563EB`) and indigo accents.
- **Editorial Typography**: Styled with **Plus Jakarta Sans** and **Inter** for exceptional readability and Apple/Stripe-level aesthetic hierarchy.
- **Interactive Screen Mirroring Simulator**: Live interactive device mockup demonstrating iPhone 16 Pro mirroring to a Mac window at 60 FPS with real-time HUD overlays, OBS Clean Capture toggle (`⌘C`), instant screenshots (`⌘S`), and live MP4 recording simulation (`⌘R`).
- **Comprehensive Feature Deep-Dive**: Explains the zero-copy hardware decoding pipeline (`VideoToolbox` H.264 `VTDecompressionSession` ➔ `CVMetalTextureCache` ➔ `Metal` GPU shaders), dual transport architecture (USB Direct Cable ~12ms vs Wi-Fi AirPlay ~35ms), and synchronized CoreAudio AAC playback.
- **MacMint-Inspired Activation & Licensing Portal**:
  - Full email-based token request and verification UI.
  - Automatic query parameter detection (`?token=...`, `?email=...`).
  - Seamless deep-link launch into the native macOS app: `psgcast://activate?token={token}&email={email}&plan={plan}`.
  - Device seat limit enforcement (1 Mac limit with transfer instructions).
  - Rate-limited magic token request form with cooldown timer.
- **Universal macOS Binary Downloads**: Configurable DMG and PKG download URLs, verified SHA-256 checksum with one-click copy, Homebrew Cask installation command (`brew install --cask psgcast`), and detailed system requirements matrix.
- **Searchable & Categorized FAQ**: Real-time keyword filter across USB/Wi-Fi connectivity, OBS Studio setup, licensing, and troubleshooting.
- **Complete Legal Suite**: Dedicated Privacy Policy (`/privacy`) highlighting 100% on-device local privacy and Terms of Service (`/terms`) with Apple trademark disclaimers.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict typing) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **UI Primitives** | shadcn/ui inspired accessible components (Button, Badge, Card, Input, Tabs, Accordion) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |

---

## 📂 Project Structure

```text
PSGCastWebApp/
├── public/
│   ├── assets/               # Genuine PSG Cast macOS app icons & branding
│   ├── favicon.png           # 32x32 Favicon
│   ├── logo.png              # 512x512 Logo
│   ├── robots.txt            # Search engine crawler permissions
│   └── sitemap.xml           # SEO sitemap with page priorities
├── src/
│   ├── components/
│   │   ├── home/             # HeroSection, FeaturesGrid, LatencyComparison, ShortcutsShowcase, DownloadCTA
│   │   ├── layout/           # Sticky Navbar with mobile drawer, rich Footer
│   │   └── ui/               # Button, Badge, Card, Input, Tabs, Accordion
│   ├── config/
│   │   └── site.ts           # Central app configuration, download URLs, shortcuts, system requirements
│   ├── lib/
│   │   └── utils.ts          # cn class-merging utility, formatters
│   ├── pages/
│   │   ├── HomePage.tsx      # Landing page with interactive mockup and benchmarks
│   │   ├── FeaturesPage.tsx  # VideoToolbox, Metal GPU, Dual Transports, OBS mode
│   │   ├── DownloadPage.tsx  # Universal macOS DMG/PKG, SHA-256, 4-step setup, matrix
│   │   ├── ActivatePage.tsx  # Token lookup, deep link trigger, request email, API spec
│   │   ├── FAQPage.tsx       # Searchable & categorized knowledgebase
│   │   ├── PrivacyPage.tsx   # 100% on-device local privacy policy
│   │   ├── TermsPage.tsx     # Terms of service & Apple trademark disclaimer
│   │   ├── ContactPage.tsx   # Direct email support, GitHub issues, and ticket form
│   │   └── NotFoundPage.tsx  # 404 signal loss page
│   ├── services/
│   │   └── api.ts            # Licensing API client, deep link trigger, mock fallback
│   ├── types/
│   │   └── activation.ts     # TypeScript interfaces for licensing, FAQs, messages
│   ├── App.tsx               # Route definitions with ScrollToTop handler
│   ├── index.css             # Apple dark theme tokens, glassmorphism, scrollbars
│   ├── main.tsx              # React DOM mounting
│   └── vite-env.d.ts         # Vite client types & environment interface
├── .env.example              # Documented environment variables template
├── package.json              # Dependencies and build scripts
├── tailwind.config.js        # Theme colors, glow effects, typography
├── tsconfig.json             # TypeScript compiler settings & @/* path alias
└── vite.config.ts            # Vite bundler configuration
```

---

## 🔑 Licensing & Activation Architecture

Inspired by the MacMint activation pattern, PSG Cast uses a zero-trust, server-authoritative entitlement model:

```text
[ Web Activation Portal ]
        │
        ├── 1. User enters Token or Email
        │      ▼
        ├── 2. GET /api/license/lookup?query={token|email}
        │      │
        │      ├── Valid Token Returned
        │      ▼
        ├── 3. Trigger Deep Link: psgcast://activate?token={token}&email={email}&plan=lifetime
        │      │
        │      ▼
[ Future PSG Cast macOS App ]
        │
        ├── 1. Receives incoming URL: psgcast://activate?token=...
        ├── 2. Retrieves or generates random Installation UUID in macOS Keychain
        ├── 3. POST /api/license/activate
        │      Payload: { token, installationId, customerEmail }
        │
        ├── 4. Server verifies entitlement & checks device limit (Strict 1 Mac per license):
        │      ├── If active on another Mac ──► HTTP 409 Conflict (Seat Limit Reached)
        │      └── If within limit         ──► HTTP 200 OK + Signed Entitlement Certificate
        │
        └── 5. Mac app stores certificate locally; unlocks all Pro capabilities offline.
```

### Supported Activation States on Web:
1. **Idle**: Prompt for token or email with sample demo button (`PSG-PRO-LIFETIME-DEMO-2026`).
2. **Loading / Validating**: Animated spinner contacting the licensing backend.
3. **Success**: Displays active token, associated email, seat count (1/1 Mac), "Open PSG Cast" deep link button, and "Copy Token" button.
4. **Error**: User-friendly feedback for mistyped or unrecognized tokens.
5. **Expired**: Clear expiration notice with renewal call-to-action.
6. **Token Request**: Anti-spam rate-limited email submission form with 60-second cooldown timer.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (based on `.env.example`):

```bash
# Site & Branding Configuration
VITE_APP_NAME="PSG Cast"
VITE_SITE_URL="https://psgcast.app"
VITE_BASE_PATH="./"

# Licensing & Activation Backend API
VITE_API_URL="https://api.psgcast.app"

# macOS App Binary Downloads
VITE_APP_VERSION="1.0.0"
VITE_DOWNLOAD_DMG_URL="https://github.com/alokrathaur/PSG-Cast/releases/download/v1.0.0/PSGCast.dmg"
VITE_DOWNLOAD_PKG_URL="https://github.com/alokrathaur/PSG-Cast/releases/download/v1.0.0/PSGCast.pkg"

# Support & Socials
VITE_SUPPORT_EMAIL="primestategaming@gmail.com"
VITE_TWITTER_URL="https://x.com/alok8feb"
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Production Build & Validation
```bash
npm run build
```
Generates optimized, minified production assets in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment

### Cloudflare Pages
1. Connect your repository to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add environment variables in Cloudflare Dashboard.

### Vercel
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Set `VITE_BASE_PATH="/<repository-name>/"` in `.env` if using a repository subpath, or leave as `./` for custom root domains.
2. Deploy the `dist` folder to the `gh-pages` branch using GitHub Actions.

---

## ⚖️ Legal & Trademarks

Apple, Mac, macOS, iPhone, iPad, AirPlay, Metal, and Xcode are trademarks of Apple Inc., registered in the U.S. and other countries and regions. PSG Cast is an independent product and is not affiliated with or endorsed by Apple Inc.
