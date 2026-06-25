"use client";

import { useState } from "react";
import { submitLead } from "@/lib/forms/submitLead";
import { LeadType } from "@/lib/forms/types";
import { siteConfig } from "@/data/site";

type Field =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "propertyAddress"
  | "desiredLocation"
  | "budget"
  | "timeline"
  | "message";

const fieldMeta: Record<Field, { label: string; type?: string; full?: boolean; placeholder?: string }> = {
  firstName: { label: "First Name" },
  lastName: { label: "Last Name" },
  email: { label: "Email", type: "email" },
  phone: { label: "Phone", type: "tel" },
  propertyAddress: { label: "Property Address", full: true },
  desiredLocation: { label: "Desired Location / City", full: true },
  budget: { label: "Budget" },
  timeline: { label: "Timeline" },
  message: { label: "Message", full: true },
};

export function LeadForm({
  leadType,
  fields = ["firstName", "lastName", "email", "phone", "message"],
  listingId,
  submitLabel = "Submit",
  dark = false,
}: {
  leadType: LeadType;
  fields?: Field[];
  listingId?: string;
  submitLabel?: string;
  dark?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get("consent")) {
      setError("Please agree to be contacted before submitting.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    const res = await submitLead({
      leadType,
      listingId,
      firstName: (fd.get("firstName") as string) || undefined,
      lastName: (fd.get("lastName") as string) || undefined,
      email: (fd.get("email") as string) || undefined,
      phone: (fd.get("phone") as string) || undefined,
      propertyAddress: (fd.get("propertyAddress") as string) || undefined,
      desiredLocation: (fd.get("desiredLocation") as string) || undefined,
      budget: (fd.get("budget") as string) || undefined,
      timeline: (fd.get("timeline") as string) || undefined,
      message: (fd.get("message") as string) || undefined,
      consent: true,
    });
    if (res.success) {
      setStatus("done");
    } else {
      setError(res.error || "Something went wrong.");
      setStatus("error");
    }
  }

  const labelColor = dark ? "text-white/60" : "text-black/60";
  const inputClass = dark
    ? "w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-orange focus:outline-none"
    : "w-full rounded-2xl border border-black/5 shadow-float bg-white px-4 py-3 text-sm focus:border-orange focus:outline-none";

  if (status === "done") {
    return (
      <div className={`rounded-2xl border p-8 text-center ${dark ? "border-white/20 text-white" : "border-black/5 bg-white shadow-float"}`}>
        <p className="font-serif text-2xl">Thank you — we&apos;ll be in touch shortly.</p>
        <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-muted"}`}>
          Need something sooner? Call us at {siteConfig.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {fields.map((f) => {
        const meta = fieldMeta[f];
        return (
          <div key={f} className={meta.full ? "sm:col-span-2" : ""}>
            <label className={`mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] ${labelColor}`}>
              {meta.label}
            </label>
            {f === "message" ? (
              <textarea name={f} rows={4} placeholder={meta.placeholder} className={inputClass} />
            ) : (
              <input name={f} type={meta.type || "text"} placeholder={meta.placeholder} className={inputClass} />
            )}
          </div>
        );
      })}

      <label className={`sm:col-span-2 flex items-start gap-3 text-[12px] leading-5 ${dark ? "text-white/60" : "text-muted"}`}>
        <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-orange" />
        <span>{siteConfig.legal.consent}</span>
      </label>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-orange">{error}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-orange px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-black hover:shadow-lg disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
