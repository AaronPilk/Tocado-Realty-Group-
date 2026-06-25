# IDX / MLS Setup

## Current status: CONNECTED ✅

Your mom provided the IDX code. We identified the integration type:

```html
<iframe src="https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=90ff36dd"></iframe>
```

- **MLS:** Canopy MLS (Charlotte region — correct for a Charlotte-based NC firm)
- **Method:** Matrix IDX **iframe embed** (NOT an API, NOT a script widget)
- **Integration type:** frameable Matrix IDX search tool

### How it's wired

| Where | What |
|---|---|
| `.env.local` | `IDX_PROVIDER=matrix-iframe` + `NEXT_PUBLIC_IDX_IFRAME_SRC=...idx=90ff36dd` |
| `lib/idx/matrix-embed.ts` | Holds the URL (falls back to the Canopy URL if env is unset) |
| `components/idx/IDXEmbed.tsx` | Renders the iframe |
| `app/search/page.tsx` | The live search page (branded header + embed) |

Nothing else needs to change. The `/search` page shows the real, live Canopy MLS search.

## If the IDX code ever changes

Just update one line in `.env.local`:

```bash
NEXT_PUBLIC_IDX_IFRAME_SRC=https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=NEW_CODE
```

## If you later want a CUSTOM search (your own UI, not the iframe)

That requires API access, not the iframe. Canopy supports it via **MLS Grid (RESO Web API)**.
The architecture is already built for this:

1. Get MLS Grid credentials (requires a separate Canopy data license + signed agreement).
2. Create `lib/idx/mls-grid.ts` (the mapper template is in the project brief / `CLAUDE.md`).
3. Uncomment the `mls-grid` line in `lib/idx/provider.ts`.
4. Set `IDX_PROVIDER=mls-grid`, `MLS_GRID_BASE_URL`, `MLS_GRID_TOKEN` in `.env.local`.

The custom listing UI (cards, grid, detail pages, inquiry forms) already exists and will
light up automatically — it currently runs on preview data for development.

## Compliance reminders

- **Never** put MLS API keys in client-side code (the `NEXT_PUBLIC_` iframe URL is fine — it's a public IDX link).
- Display the IDX disclaimer + brokerage attribution (already in the footer and `/idx-disclaimer`).
- Confirm exact disclaimer wording and attribution rules with Canopy MLS + your broker-in-charge before launch.
- Never scrape Zillow/Realtor.com/Redfin or other MLS pages.
