/**
 * Matrix / iframe IDX configuration.
 *
 * When your mom sends her IDX search tool, it will be ONE of these:
 *   1. An iframe URL  → set NEXT_PUBLIC_IDX_IFRAME_SRC and IDX_PROVIDER=matrix-iframe
 *   2. A <script>/widget snippet → set IDX_WIDGET_HTML (server-only) and IDX_PROVIDER=matrix-iframe
 *
 * Determine which it is before pasting (see docs/idx-setup.md). Never put API
 * keys here — those go server-side via the mls-grid / bridge-api providers.
 */
// Canopy MLS Matrix IDX — confirmed integration provided by Richard.
// Used as the default if the env var isn't set, so live search works out of the box.
const CANOPY_MATRIX_IDX =
  "https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=90ff36dd";

export const idxEmbedConfig = {
  iframeSrc: process.env.NEXT_PUBLIC_IDX_IFRAME_SRC || CANOPY_MATRIX_IDX,
  widgetHtml: process.env.IDX_WIDGET_HTML || "",
};

export function hasIdxEmbed(): boolean {
  return Boolean(idxEmbedConfig.iframeSrc || idxEmbedConfig.widgetHtml);
}
