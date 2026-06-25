import { siteConfig } from "@/data/site";

export function TopBar() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto flex max-w-container items-center justify-center px-6 py-2.5 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
          {siteConfig.topBar}
        </p>
      </div>
    </div>
  );
}
