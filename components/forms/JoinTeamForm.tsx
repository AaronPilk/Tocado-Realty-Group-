"use client";

import { useState } from "react";
import { submitLead } from "@/lib/forms/submitLead";
import { siteConfig } from "@/data/site";

export function JoinTeamForm() {
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
      leadType: "join-team",
      firstName: (fd.get("firstName") as string) || undefined,
      lastName: (fd.get("lastName") as string) || undefined,
      email: (fd.get("email") as string) || undefined,
      phone: (fd.get("phone") as string) || undefined,
      licensed: (fd.get("licensed") as string) || undefined,
      message: (fd.get("message") as string) || undefined,
      consent: true,
    });
    if (res.success) setStatus("done");
    else {
      setError(res.error || "Something went wrong.");
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-2xl border border-black/5 shadow-float bg-white px-4 py-3 text-sm focus:border-orange focus:outline-none";
  const label = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-black/60";

  if (status === "done") {
    return (
      <div className="reveal rounded-2xl border border-black/5 shadow-float bg-white p-8 text-center">
        <p className="font-serif text-2xl">Application received.</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll reach out to set up a confidential conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className={label}>First Name</label>
        <input name="firstName" className={input} />
      </div>
      <div>
        <label className={label}>Last Name</label>
        <input name="lastName" className={input} />
      </div>
      <div>
        <label className={label}>Email</label>
        <input name="email" type="email" className={input} />
      </div>
      <div>
        <label className={label}>Phone</label>
        <input name="phone" type="tel" className={input} />
      </div>
      <div className="sm:col-span-2">
        <label className={label}>Are you currently licensed?</label>
        <select name="licensed" className={input} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Yes — actively licensed</option>
          <option>In progress</option>
          <option>No — newly considering real estate</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label}>Tell us about yourself</label>
        <textarea name="message" rows={4} className={input} />
      </div>
      <label className="sm:col-span-2 flex items-start gap-3 text-[12px] leading-5 text-muted">
        <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-orange" />
        <span>{siteConfig.legal.consent}</span>
      </label>
      {status === "error" && <p className="sm:col-span-2 text-sm text-orange">{error}</p>}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-black px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-orange hover:shadow-lg disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending..." : "Apply / Book a Call"}
        </button>
      </div>
    </form>
  );
}
