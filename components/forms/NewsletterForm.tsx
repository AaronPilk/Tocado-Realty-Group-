"use client";

import { useState } from "react";
import { submitLead } from "@/lib/forms/submitLead";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    await submitLead({ leadType: "newsletter", email });
    setDone(true);
    setEmail("");
  }

  if (done) {
    return <p className="text-sm text-white/70">You&apos;re on the list — market updates incoming.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm border border-white/20">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-orange px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
      >
        Join
      </button>
    </form>
  );
}
