import { LeadPayload } from "./types";

/** Client-side helper: collects UTM/referrer and POSTs the lead to /api/forms. */
export async function submitLead(
  payload: LeadPayload
): Promise<{ success: boolean; error?: string }> {
  const enriched: LeadPayload = {
    ...payload,
    sourcePage: payload.sourcePage || (typeof window !== "undefined" ? window.location.pathname : ""),
    referrer: typeof document !== "undefined" ? document.referrer : "",
    timestamp: new Date().toISOString(),
    ...readUtm(),
  };

  try {
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enriched),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { success: false, error: data.error || "Submission failed." };
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
