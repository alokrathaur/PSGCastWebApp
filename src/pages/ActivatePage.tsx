import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  KeyRound,
  Copy,
  Check,
  Sparkles,
  Laptop,
  AlertTriangle,
  XCircle,
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

  // Verify / Lookup state
  const [inputQuery, setInputQuery] = useState("");
  const [status, setStatus] = useState<ActivationStatus>("idle");
  const [lookupResult, setLookupResult] = useState<LicenseLookupResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);
  const [hasAttemptedAutoLaunch, setHasAttemptedAutoLaunch] = useState(false);

  // Set document title
  useEffect(() => {
    document.title = "Activate License — PSG Cast";
    window.scrollTo(0, 0);
  }, []);

  // URL query parameter auto-detection
  useEffect(() => {
    const tokenParam = searchParams.get("token");
    const emailParam = searchParams.get("email") || searchParams.get("customer_email");
    const paymentIdParam =
      searchParams.get("payment_id") ||
      searchParams.get("paymentId") ||
      searchParams.get("subscription_id") ||
      searchParams.get("checkout_id") ||
      searchParams.get("id");
    const queryParam = tokenParam || emailParam || paymentIdParam || searchParams.get("query");

    if (emailParam) {
      setInputQuery(emailParam.trim());
    } else if (queryParam) {
      setInputQuery(queryParam.trim());
    }

    if (queryParam) {
      const clean = queryParam.trim();
      handleExecuteLookup(clean);
    }
  }, [searchParams]);

  // Central lookup execution with auto-retry for in-flight webhooks
  const handleExecuteLookup = async (queryToLookup: string, retryCount = 0) => {
    if (!queryToLookup.trim()) return;
    setStatus("loading");
    setErrorMessage(null);

    const res = await apiService.lookupLicense(queryToLookup);

    if (res.success && res.token) {
      setLookupResult(res);
      setStatus("success");
      // Auto-fill customer email into input field if available
      if (res.customerEmail) {
        setInputQuery(res.customerEmail);
      }
      // Trigger deep link if user entered directly or was redirected from checkout
      if (!hasAttemptedAutoLaunch) {
        apiService.triggerMacAppDeepLink(res.token, res.customerEmail, res.plan);
        setHasAttemptedAutoLaunch(true);
      }
    } else if (res.status === "cancelled") {
      setLookupResult(res);
      setStatus("cancelled");
      setErrorMessage(res.message || "Your subscription has been cancelled. Reactivate your subscription to use PSG Cast Pro.");
    } else if (retryCount < 2 && (queryToLookup.startsWith("pay_") || queryToLookup.startsWith("sub_") || queryToLookup.includes("@"))) {
      // If Dodo checkout redirected immediately and webhook is still in transit (1-2s), retry gently
      setTimeout(() => {
        handleExecuteLookup(queryToLookup, retryCount + 1);
      }, 1500);
    } else if (res.status === "expired") {
      setLookupResult(res);
      setStatus("expired");
      setErrorMessage(res.message || "Your PSG Cast subscription or license has expired.");
    } else {
      setLookupResult(res);
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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <Badge variant="glow" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            License & Entitlement Portal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Activate PSG Cast
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Enter your license token or purchase email to activate PSG Cast on your Mac.
          </p>
        </div>

        {/* Direct Activation Card */}
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
                  className="w-full justify-center shadow-md shadow-blue-500/20 font-semibold"
                >
                  Verify & Launch Mac App
                </Button>
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
                  Need help? Make sure you entered the exact email address used on your receipt, or contact Customer Support.
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
                <Link to="/pricing">
                  <Button variant="outline" size="sm" className="border-amber-300 text-amber-800 hover:bg-white font-semibold">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            )}

            {/* Status 5: Cancelled */}
            {status === "cancelled" && (
              <div className="mt-8 p-6 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4 animate-in fade-in-50 duration-200">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
                  Subscription Cancelled / Inactive
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  The subscription associated with this account or token has been cancelled. To continue enjoying unlimited 60 FPS low-latency mirroring, please renew your subscription or upgrade to a Lifetime license.
                </p>
                <div className="pt-1">
                  <Link to="/pricing">
                    <Button variant="gradient" size="sm" className="font-semibold shadow-sm">
                      Reactivate / View Plans
                    </Button>
                  </Link>
                </div>
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
      </div>
    </main>
  );
};

export default ActivatePage;
