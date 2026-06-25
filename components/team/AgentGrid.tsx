"use client";

import { useState, useMemo } from "react";
import { team, teamOffices } from "@/data/team";
import { AgentCard } from "./AgentCard";

export function AgentGrid() {
  const [query, setQuery] = useState("");
  const [office, setOffice] = useState("All");

  const filtered = useMemo(() => {
    return team.filter((a) => {
      const matchesOffice = office === "All" || a.office === office;
      const matchesQuery =
        !query ||
        `${a.name} ${a.title} ${a.specialty}`.toLowerCase().includes(query.toLowerCase());
      return matchesOffice && matchesQuery;
    });
  }, [query, office]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search agents..."
          className="w-full border border-line bg-white px-4 py-3 text-sm focus:border-orange focus:outline-none md:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {teamOffices.map((o) => (
            <button
              key={o}
              onClick={() => setOffice(o)}
              className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                office === o ? "bg-black text-white" : "border border-line text-black/70 hover:border-black"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {filtered.map((a) => (
          <AgentCard key={a.slug} agent={a} />
        ))}
      </div>
    </div>
  );
}
