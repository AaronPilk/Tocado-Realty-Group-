/**
 * Cloudflare Pages Function — /api/valuation
 * Calls the RentCast AVM with the API key hidden server-side, returns an
 * estimate + value range to the browser. Static site stays static; Cloudflare
 * runs this on top.
 *
 * Setup: Cloudflare Pages → Settings → Variables → add RENTCAST_API_KEY.
 * Get a free key at https://app.rentcast.io (free tier ~50 lookups/month).
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const address = url.searchParams.get("address");

  if (!address) return json({ error: "Please enter a property address." }, 400);
  if (!env.RENTCAST_API_KEY) {
    return json({ error: "Valuation isn't connected yet. Please request a custom valuation below." }, 503);
  }

  const api = new URL("https://api.rentcast.io/v1/avm/value");
  api.searchParams.set("address", address);
  // Optional details improve accuracy if provided
  for (const k of ["propertyType", "bedrooms", "bathrooms", "squareFootage"]) {
    const v = url.searchParams.get(k);
    if (v) api.searchParams.set(k, v);
  }

  try {
    const res = await fetch(api.toString(), {
      headers: { "X-Api-Key": env.RENTCAST_API_KEY, Accept: "application/json" },
    });

    if (!res.ok) {
      return json(
        { error: "We couldn't estimate that address automatically. Request a custom valuation below." },
        200
      );
    }

    const data = await res.json();
    if (!data || typeof data.price !== "number") {
      return json(
        { error: "No estimate available for that address. Request a custom valuation below." },
        200
      );
    }

    return json({
      price: data.price,
      low: data.priceRangeLow ?? null,
      high: data.priceRangeHigh ?? null,
    });
  } catch {
    return json({ error: "Something went wrong. Please try again or request a custom valuation." }, 200);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
