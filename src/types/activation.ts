export type ActivationStatus = "idle" | "loading" | "success" | "error" | "expired" | "cancelled";

export interface LicenseLookupResponse {
  success: boolean;
  token?: string;
  customerEmail?: string;
  customerName?: string;
  plan?: "lifetime" | "yearly" | "quarterly" | "creator" | "pro" | "standard";
  maxDevices?: number;
  activeDevicesCount?: number;
  expiresAt?: string | null;
  status?: "active" | "cancelled" | "expired" | "revoked" | "not_found" | "error";
  message?: string;
}

export interface TokenRequestPayload {
  email: string;
  clientInfo?: string;
}

export interface TokenRequestResponse {
  success: boolean;
  message: string;
  rateLimited?: boolean;
  cooldownSeconds?: number;
}

export interface DeviceActivationPayload {
  token: string;
  installationId: string;
  customerEmail?: string;
}

export interface DeviceActivationResponse {
  success: boolean;
  message: string;
  plan?: string;
  customerEmail?: string;
  maxDevices?: number;
  activeDevicesCount?: number;
  certificate?: string;
}

export interface FaqItem {
  id: string;
  category: "all" | "installation" | "connectivity" | "activation" | "obs" | "troubleshooting" | "audio" | "privacy";
  question: string;
  answer: string;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject: string;
  category: "licensing" | "bug" | "feature" | "general";
  message: string;
}
