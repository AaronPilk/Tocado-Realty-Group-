# Build Plan & Architecture

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel-ready · mobile-first.

## Architecture

```
app/                     Routes (pages + /api routes)
components/
  layout/                TopBar, Header, MobileNav, Footer
  home/                  Hero, TrustStrip, SalesTicker, StatsBand,
                         FounderStory, BuyerSellerCards, ProcessTimeline, OfficeLocations
  idx/                   IDXEmbed, ListingCard, ListingGrid
  team/                  AgentCard, AgentGrid
  forms/                 LeadForm (reusable), JoinTeamForm, NewsletterForm
  ui/                    Button, Section, Eyebrow, Stat, PageHero, LegalPage, JsonLd
lib/
  idx/                   types, provider (abstraction), mock-provider, matrix-embed
  forms/                 submitLead, types
  seo/                   metadata, schema
  utils.ts
data/                    site (central config), nav, stats, ticker, team, locations, mock-listings
docs/                    this folder
public/images/           richard.png (real) + folders for team/locations photos
```

## Key design decisions

- **One central config** (`data/site.ts`) — all firm details + legal live here. Swap `[[ ]]` placeholders to go live.
- **IDX provider abstraction** (`lib/idx/provider.ts`) — switch backends with one env var
  (`mock` → `matrix-iframe` → `mls-grid`/`bridge-api`) with no component changes.
- **One form pipeline** — every form posts to `/api/forms`, which forwards to a CRM webhook.
- **Image placeholders** — sections use elegant CSS treatments (`.photo-warm/.photo-dark/.photo-charcoal`)
  so the site looks polished immediately; swap each for a real `<Image>` when photos arrive.
- **SEO built in** — per-page metadata, sitemap, robots, JSON-LD (RealEstateAgent, Breadcrumb, FAQ).

## What's real vs. placeholder
- **Real:** Richard's bio/story (20+ yrs, since 2002, NC+SC licensed), her portrait, Canopy MLS IDX, Charlotte-metro market focus.
- **Placeholder (`[[ ]]`):** firm name, brokerage, phone, email, address, license #s, stats, ticker entries, extra agents, social links.

## Build status
`npm run build` → ✅ 33 routes, typecheck clean, no errors.
