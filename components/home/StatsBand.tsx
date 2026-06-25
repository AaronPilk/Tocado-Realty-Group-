import { Stat } from "@/components/ui/Stat";
import { stats } from "@/data/stats";

export function StatsBand() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-10 px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} light />
        ))}
      </div>
    </section>
  );
}
