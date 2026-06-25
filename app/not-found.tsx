import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream px-6 py-24 text-center">
      <div>
        <Eyebrow className="block">404</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">This page wandered off the market.</h1>
        <p className="mt-4 text-sm text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="orange">Back Home</Button>
          <Button href="/search" variant="outlineDark">Search Homes</Button>
        </div>
      </div>
    </section>
  );
}
