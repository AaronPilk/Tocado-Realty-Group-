import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.email && !body.phone) {
      return NextResponse.json({ error: "Email or phone is required." }, { status: 400 });
    }

    const payload = {
      ...body,
      submittedAt: new Date().toISOString(),
      source: body.sourcePage || "website",
    };

    // Forward to CRM (GoHighLevel / Follow Up Boss / Zapier / Make webhook).
    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      // No CRM yet — log so nothing is lost during setup.
      console.log("[LEAD] (no CRM_WEBHOOK_URL set)", JSON.stringify(payload));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ error: "Lead submission failed." }, { status: 500 });
  }
}
