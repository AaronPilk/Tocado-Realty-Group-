import Link from "next/link";
import Image from "next/image";
import { Agent } from "@/data/team";

export function AgentCard({ agent }: { agent: Agent }) {
  const hasPhoto = Boolean(agent.image);
  return (
    <Link href={`/team/${agent.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden border border-line">
        {hasPhoto ? (
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className={`photo-fill ${agent.treatment === "warm" ? "photo-warm" : "photo-charcoal"}`} />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em]">{agent.name}</h3>
        <p className="text-sm text-muted">{agent.title}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-orange">{agent.office}</p>
      </div>
    </Link>
  );
}
