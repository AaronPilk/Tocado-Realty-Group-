import { LeadPayload } from "./types";
import { siteConfig } from "@/data/site";

/**
 * Static-site lead submit: posts directly to Formspree, which emails the lead
 * to Stephenie. Collects UTM/referrer/source automatically.
 *
 * Set the endpoint in data/site.ts -> formEndpoint.
 */
export async function submitLead(
  payload: LeadPayload
): Promise<{ success: boolean; error?: string }> {
  const enriched: LeadPayload & Record<string, unknown> = {
    ...payload,
    sourcePage: payload.sourcePage || (typeof window !== "undefined" ? window.location.pathname : ""),
    referrer: typeof document !== "undefined" ? document.referrer : "",
    timestamp: new Date().toISOString(),
    _subject: `New ${payload.leadType} lead — ${siteConfig.name}`,
    ...readUtm(),
  };

  const endpoint = siteConfig.formEndpoint;

  // Endpoint not configured yet (still a placeholder) — don't hard-fail in dev.
  if (!endpoint || endpoint.includes("[[")) {
    if (typeof console !== "undefined") {
      console.warn("[LEAD] Formspree endpoint not set in data/site.ts. Lead:", enriched);
    }
    return { success: true };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(enriched),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { success: false, error: data?.error || "Submission failed. Please call us." };
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
