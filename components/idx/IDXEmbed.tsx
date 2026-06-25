import { idxEmbedConfig, hasIdxEmbed } from "@/lib/idx/matrix-embed";

type IDXEmbedProps = {
  title?: string;
  minHeight?: number;
};

/**
 * Renders the live MLS search.
 * - iframe URL  → Canopy Matrix IDX (current setup)
 * - widget HTML → script/widget vendors
 * - neither     → clear "not connected" state (never shown once env is set)
 */
export function IDXEmbed({ title = "Search Homes", minHeight = 1000 }: IDXEmbedProps) {
  const { iframeSrc, widgetHtml } = idxEmbedConfig;

  if (iframeSrc) {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-black/5 shadow-float bg-white">
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full"
          style={{ minHeight }}
          loading="lazy"
        />
      </div>
    );
  }

  if (widgetHtml) {
    return (
      <div
        className="w-full rounded-2xl border border-black/5 shadow-float bg-white"
        dangerouslySetInnerHTML={{ __html: widgetHtml }}
      />
    );
  }

  if (!hasIdxEmbed()) {
    return (
      <div className="border border-dashed border-line bg-white p-12 text-center">
        <p className="font-serif text-2xl">MLS Search Not Connected Yet</p>
        <p className="mt-3 text-sm text-muted">
          Set <code className="font-mono">NEXT_PUBLIC_IDX_IFRAME_SRC</code> (or paste widget code)
          to activate live property search.
        </p>
      </div>
    );
  }

  return null;
}
