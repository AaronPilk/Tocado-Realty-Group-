import { PageHero } from "./PageHero";
import { Section } from "./Section";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} treatment="charcoal" />
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          {updated && (
            <p className="mb-8 text-[12px] uppercase tracking-[0.14em] text-muted">
              Last updated: {updated}
            </p>
          )}
          <div className="space-y-5 text-sm leading-7 text-black/80 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-black [&_a]:text-orange [&_a]:underline">
            {children}
          </div>
        </div>
      </Section>
    </>
  );
}
