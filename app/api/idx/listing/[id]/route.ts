import { NextRequest, NextResponse } from "next/server";
import { getListing } from "@/lib/idx/provider";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const listing = await getListing(params.id);
    if (!listing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(listing);
  } catch (error) {
    console.error("IDX listing fetch failed", error);
    return NextResponse.json({ error: "IDX listing fetch failed" }, { status: 500 });
  }
}
