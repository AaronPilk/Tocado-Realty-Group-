import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

/** Standard luxury section: vertical rhythm + centered max-width container. */
export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 lg:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-container px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
