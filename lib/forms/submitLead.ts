import { LeadPayload } from "./types";
import { siteConfig } from "@/data/site";

/**
 * Static-site lead submit: posts directly to Web3Forms, which emails the lead
 * to Stephenie (recipient is set in the Web3Forms account). Collects
 * UTM/referrer/source automatically.
 *
 * Set your key in data/site.ts -> formAccessKey.
 */
export async function submitLead(
  payload: LeadPayload
): Promise<{ success: boolean; error?: string }> {
  const name = [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim();

  const enriched: LeadPayload & Record<string, unknown> = {
    ...payload,
    // Web3Forms fields
    access_key: siteConfig.formAccessKey,
    subject: `New ${payload.leadType} lead — ${siteConfig.name}`,
    from_name: name || `${siteConfig.name} website`,
    ...(payload.email ? { replyto: payload.email } : {}),
    botcheck: false, // honeypot (must stay false for real submissions)
    // Context
    sourcePage: payload.sourcePage || (typeof window !== "undefined" ? window.location.pathname : ""),
    referrer: typeof document !== "undefined" ? document.referrer : "",
    timestamp: new Date().toISOString(),
    ...readUtm(),
  };

  const endpoint = siteConfig.formEndpoint;
  const accessKey = siteConfig.formAccessKey;

  // Key not configured yet (still a placeholder) — don't hard-fail in dev.
  if (!endpoint || !accessKey || accessKey.includes("[[")) {
    if (typeof console !== "undefined") {
      console.warn("[LEAD] Web3Forms access key not set in data/site.ts. Lead:", enriched);
    }
    return { success: true };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(enriched),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data?.success === false) {
      return { success: false, error: data?.message || "Submission failed. Please call us." };
    }
    return { success: true };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}

function readUtm() {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  return {
    utm_source: sp.get("utm_source") || undefined,
    utm_medium: sp.get("utm_medium") || undefined,
    utm_campaign: sp.get("utm_campaign") || undefined,
  };
}
