import { NextRequest, NextResponse } from "next/server";
import { searchListings } from "@/lib/idx/provider";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams;
    const result = await searchListings({
      query: sp.get("query") || undefined,
      city: sp.get("city") || undefined,
      zip: sp.get("zip") || undefined,
      minPrice: sp.get("minPrice") ? Number(sp.get("minPrice")) : undefined,
      maxPrice: sp.get("maxPrice") ? Number(sp.get("maxPrice")) : undefined,
      beds: sp.get("beds") ? Number(sp.get("beds")) : undefined,
      baths: sp.get("baths") ? Number(sp.get("baths")) : undefined,
      propertyType: sp.get("propertyType") || undefined,
      status: sp.get("status") || undefined,
      page: sp.get("page") ? Number(sp.get("page")) : 1,
      limit: sp.get("limit") ? Number(sp.get("limit")) : 24,
      sort: (sp.get("sort") as never) || "newest",
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("IDX search failed", error);
    return NextResponse.json({ error: "IDX search failed" }, { status: 500 });
  }
}
