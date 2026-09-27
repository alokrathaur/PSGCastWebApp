import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  KeyRound,
  Mail,
  Copy,
  Check,
  Sparkles,
  Laptop,
  AlertTriangle,
  XCircle,
  Clock,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { apiService } from "@/services/api";
import { LicenseLookupResponse, ActivationStatus } from "@/types/activation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const ActivatePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Tab state: 'verify' | 'request' | 'spec'
  const [activeTab, setActiveTab] = useState<"verify" | "request" | "spec">("verify");

  // Verify / Lookup state
  const [inputQuery, setInputQuery] = useState("");
  const [status, setStatus] = useState<ActivationStatus>("idle");
  const [lookupResult, setLookupResult] = useState<LicenseLookupResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);
  const [hasAttemptedAutoLaunch, setHasAttemptedAutoLaunch] = useState(false);

  // Token Request state
  const [requestEmail, setRequestEmail] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestSuccessMessage, setRequestSuccessMessage] = useState<string | null>(null);
  const [requestErrorMessage, setRequestErrorMessage] = useState<string | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Set document title
  useEffect(() => {
    document.title = "Activate License & Request Token — PSG Cast";
    window.scrollTo(0, 0);
  }, []);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const timer = setInterval(() => {
      setCooldownRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownRemaining]);

  // URL query parameter auto-detection (like MacMint flow)
  useEffect(() => {
    const tokenParam = searchParams.get("token");
    const emailParam = searchParams.get("email") || searchParams.get("customer_email");
    const queryParam = tokenParam || emailParam || searchParams.get("query");

    if (queryParam) {
      const clean = queryParam.trim();
      setInputQuery(clean);
      handleExecuteLookup(clean);
    }
  }, [searchParams]);

  // Central lookup execution
  const handleExecuteLookup = async (queryToLookup: string) => {
    if (!queryToLookup.trim()) return;
    setStatus("loading");
    setErrorMessage(null);

    const res = await apiService.lookupLicense(queryToLookup);
    setLookupResult(res);

    if (res.success && res.token) {
      setStatus("success");
      // Trigger deep link if user entered directly or was redirected from checkout
      if (!hasAttemptedAutoLaunch) {
        apiService.triggerMacAppDeepLink(res.token, res.customerEmail, res.plan);
        setHasAttemptedAutoLaunch(true);
      }
    } else if (res.status === "expired") {
      setStatus("expired");
      setErrorMessage(res.message || "Your PSG Cast subscription or license has expired.");
    } else {
      setStatus("error");
      setErrorMessage(
        res.message || "No active license found. Please check your purchase email or license token."
      );
    }
  };

  // Submit manual lookup form
  const handleManualLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExecuteLookup(inputQuery);
  };

  // Submit token request form
  const handleRequestTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestEmail.trim()) return;

    setIsRequesting(true);
    setRequestSuccessMessage(null);
    setRequestErrorMessage(null);

    const res = await apiService.requestActivationToken({ email: requestEmail });
    setIsRequesting(false);

    if (res.success) {
      setRequestSuccessMessage(res.message);
      setCooldownRemaining(res.cooldownSeconds || 60);
    } else {
      if (res.rateLimited) {
        setCooldownRemaining(res.cooldownSeconds || 60);
      }
      setRequestErrorMessage(res.message);
    }
  };

  const handleCopyToken = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const handleManualDeepLinkTrigger = () => {
    if (lookupResult?.token) {
      apiService.triggerMacAppDeepLink(
        lookupResult.token,
        lookupResult.customerEmail,
        lookupResult.plan
      );
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            License & Entitlement Portal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Activate PSG Cast
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Enter your license token or purchase email to activate PSG Cast on your Mac, or request an activation token sent directly to your inbox.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("verify")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "verify"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-xs"
            }`}
          >
            <KeyRound className="w-4 h-4" />
            Enter License Token / Email
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("request")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "request"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-600"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-xs"
            }`}
          >
            <Mail className="w-4 h-4" />
            Request / Resend Token
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("spec")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "spec"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 border border-purple-600"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-xs"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Mac App API Architecture
          </button>
        </div>

        {/* Tab 1: Verify & Deep Link */}
        {activeTab === "verify" && (
          <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
            <Card className="border-slate-200 bg-white p-6 sm:p-8 shadow-md">
              <form onSubmit={handleManualLookupSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="token-input" className="text-sm font-bold text-slate-900">
                    License Token or Purchase Email
                  </label>
                  <p className="text-xs text-slate-500">
                    Paste your <code>PSG-PRO-LIFETIME-...</code> token or the email address used during purchase.
                  </p>
                  <Input
                    id="token-input"
                    type="text"
                    placeholder="e.g. PSG-PRO-LIFETIME-A8F2-99CD or user@example.com"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    icon={<KeyRound className="w-4 h-4 text-slate-400" />}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    type="submit"
                    variant="gradient"
                    size="md"
                    isLoading={status === "loading"}
                    className="w-full sm:flex-1 justify-center shadow-md shadow-blue-500/20 font-semibold"
                  >
                    Verify & Launch Mac App
                  </Button>

                  {/* Sample test token fill button */}
                  <button
                    type="button"
                    onClick={() => {
                      setInputQuery("PSG-PRO-LIFETIME-DEMO-2026");
                      handleExecuteLookup("PSG-PRO-LIFETIME-DEMO-2026");
                    }}
                    className="text-xs text-blue-600 hover:text-blue-700 underline font-mono shrink-0 py-2 font-medium"
                  >
                    Try Sample Pro Token
                  </button>
                </div>
              </form>

              {/* Status 1: Loading */}
              {status === "loading" && (
                <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mx-auto" />
                  <p className="text-sm text-slate-600 font-mono">
                    Verifying entitlement with licensing server...
                  </p>
                </div>
              )}

              {/* Status 2: Success */}
              {status === "success" && lookupResult && (
                <div className="mt-8 p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-5 animate-in fade-in-50 duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Active License Verified
                    </div>
                    <Badge variant="glow" className="text-xs uppercase bg-blue-100 text-blue-800 border-blue-200">
                      {lookupResult.plan || "Pro Lifetime"}
                    </Badge>
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                      <span className="text-slate-500 font-semibold">Token:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-700 font-bold select-all">
                          {lookupResult.token}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyToken(lookupResult.token!)}
                          className="text-slate-400 hover:text-slate-700 transition-colors"
                          title="Copy Token"
                        >
                          {copiedToken ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                      <span className="text-slate-500 font-semibold">Associated Email:</span>
                      <span className="text-slate-800 font-medium">{lookupResult.customerEmail || "N/A"}</span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                      <span className="text-slate-500 font-semibold">Machine Seats:</span>
                      <span className="text-emerald-700 font-bold">
                        {lookupResult.activeDevicesCount || 1} / {lookupResult.maxDevices || 1} Mac Active
                      </span>
                    </div>
                  </div>

                  {/* Deep link launcher button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      type="button"
                      variant="gradient"
                      size="md"
                      onClick={handleManualDeepLinkTrigger}
                      className="w-full sm:flex-1 justify-center shadow-md shadow-blue-500/25 font-semibold"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Open PSG Cast to Activate
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => handleCopyToken(lookupResult.token!)}
                      className="w-full sm:w-auto justify-center font-semibold"
                    >
                      {copiedToken ? "Copied!" : "Copy Token"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans text-center">
                    If PSG Cast is installed on this Mac, clicking "Open PSG Cast" will automatically open the app and configure your Pro features via <code>{SITE_CONFIG.deepLinkScheme}://activate</code>.
                  </p>
                </div>
              )}

              {/* Status 3: Error */}
              {status === "error" && errorMessage && (
                <div className="mt-8 p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <XCircle className="w-5 h-5 shrink-0" />
                    Activation Verification Failed
                  </div>
                  <p className="text-xs text-rose-800 leading-relaxed">{errorMessage}</p>
                  <p className="text-xs text-slate-500 pt-1">
                    Need help? Make sure you entered the exact email address used on your receipt, or request a fresh token below.
                  </p>
                </div>
              )}

              {/* Status 4: Expired */}
              {status === "expired" && (
                <div className="mt-8 p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-4">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    License Expired
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    This PSG Cast license has expired. To continue enjoying 60 FPS mirroring with low latency, please purchase a Lifetime license.
                  </p>
                  <Link to="/download">
                    <Button variant="outline" size="sm" className="border-amber-300 text-amber-800 hover:bg-white font-semibold">
                      View Lifetime Plans
                    </Button>
                  </Link>
                </div>
              )}
            </Card>

            {/* Quick helper card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-blue-600" />
                Transferring your license to a new Mac?
              </h4>
              <p className="leading-relaxed">
                Each license entitles you to 1 active Mac at a time. To transfer to a new Mac, open PSG Cast on your old Mac, go to <strong>Preferences &gt; License</strong>, and click <strong>Deactivate</strong>. Then activate on your new Mac.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Request / Resend Token */}
        {activeTab === "request" && (
          <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
            <Card className="border-slate-200 bg-white p-6 sm:p-8 shadow-md">
              <form onSubmit={handleRequestTokenSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="req-email" className="text-sm font-bold text-slate-900">
                    Purchase Email Address
                  </label>
                  <p className="text-xs text-slate-500">
                    We will look up your license and dispatch an activation link and token code directly to your email.
                  </p>
                  <Input
                    id="req-email"
                    type="email"
                    placeholder="e.g. developer@company.com"
                    value={requestEmail}
                    onChange={(e) => setRequestEmail(e.target.value)}
                    icon={<Mail className="w-4 h-4 text-slate-400" />}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="md"
                  isLoading={isRequesting}
                  disabled={cooldownRemaining > 0}
                  className="w-full justify-center shadow-md shadow-indigo-500/20 font-semibold"
                >
                  {cooldownRemaining > 0 ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Wait {cooldownRemaining}s before requesting again
                    </span>
                  ) : (
                    "Send Me My Activation Token"
                  )}
                </Button>
              </form>

              {/* Feedback Banners */}
              {requestSuccessMessage && (
                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                  <p className="leading-relaxed">{requestSuccessMessage}</p>
                </div>
              )}

              {requestErrorMessage && (
                <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                  <p className="leading-relaxed">{requestErrorMessage}</p>
                </div>
              )}
            </Card>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-900">
                Security & Anti-Spam Policy
              </h4>
              <p className="leading-relaxed">
                Token requests are rate-limited to 5 attempts per IP address per hour. If your email is on file, a single-use verification link will arrive within 2 minutes. Please check your spam folder if it does not appear immediately.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Mac App API Architecture */}
        {activeTab === "spec" && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    macOS App & Licensing API Contract
                  </h3>
                  <p className="text-xs text-purple-600 font-mono font-semibold">
                    Specification for future PSGCast macOS implementation
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Following the proven MacMint pattern, PSG Cast uses cryptographic token verification, privacy-first Keychain installation IDs, and authoritative backend server checks. Client-side activation claims are never trusted alone.
              </p>

              {/* Endpoint 1: Deep Link */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-600 font-bold">1. macOS Custom URL Scheme</span>
                  <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-600">Deep Link</Badge>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 select-all break-all font-medium">
                  psgcast://activate?token=PSG-PRO-LIFETIME-XXXX&email=user@example.com&plan=lifetime
                </div>
              </div>

              {/* Endpoint 2: Device Activation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-700 font-bold">2. Machine Activation Endpoint</span>
                  <span className="text-slate-500 font-mono text-[11px]">POST /api/license/activate</span>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-100 space-y-2 shadow-inner">
                  <div className="text-slate-400 text-[11px]">// Request Payload from Mac App:</div>
                  <pre className="text-slate-200">
{`{
  "token": "PSG-PRO-LIFETIME-A8F2-99CD",
  "installationId": "UUID_IN_MACOS_KEYCHAIN",
  "customerEmail": "user@example.com"
}`}
                  </pre>
                  <div className="text-slate-400 text-[11px] pt-2">// Server Response (Status 200 OK):</div>
                  <pre className="text-emerald-400">
{`{
  "success": true,
  "plan": "lifetime",
  "maxDevices": 1,
  "activeDevicesCount": 1,
  "certificate": "SIGNED_ENTITLEMENT_ED25519_..."
}`}
                  </pre>
                </div>
              </div>

              {/* Endpoint 3: Device Limit Enforcement */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">3. Multi-Device Conflict (1 Mac Limit)</span>
                  <span className="text-slate-500 font-mono text-[11px]">HTTP 409 Conflict</span>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 font-mono text-xs text-amber-900">
{`{
  "success": false,
  "message": "Device limit reached (1/1 Mac). License already active on another machine.",
  "maxDevices": 1,
  "activeDevicesCount": 1
}`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
