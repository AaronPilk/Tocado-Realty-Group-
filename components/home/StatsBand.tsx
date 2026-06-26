import { Stat } from "@/components/ui/Stat";
import { stats } from "@/data/stats";

export function StatsBand() {
  return (
    <section className="bg-forest py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} light />
        ))}
      </div>
    </section>
  );
}
