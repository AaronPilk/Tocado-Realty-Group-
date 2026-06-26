# Reference Site Audit — thebolosgroup.com (structure/style direction only)

We recreated the **layout, structure, spacing, and luxury feel** as an original site.
No copy, images, logos, listing data, or code were taken from the reference. All content
is original and specific to Richard Tocado's NC firm.

## Sitemap (recreated, original)

```
/                     Home
/search               Live MLS search (Canopy Matrix IDX)
/search/results       Server-rendered results (custom-search mode)
/listing/[id]         Listing detail + showing request
/featured-listings    Curated featured homes
/buy                  Buyer landing + FAQ + inquiry
/sell                 Seller landing + valuation
/home-valuation       Free valuation form
/team                 Meet the team + agent grid
/team/[slug]          Agent profile
/why-list-with-us     Listing marketing + 10-day plan
/join-the-team        Recruiting + application
/our-story            Brand story + core values
/locations            NC markets
/locations/[slug]     City landing (SEO)
/contact              Contact
/privacy-policy /terms /accessibility /idx-disclaimer   Legal
```

## Global design system (original interpretation)

| Token | Value |
|---|---|
| Black | `#090909` |
| Charcoal | `#171717` |
| Ivory | `#f1ede6` |
| Cream | `#f7f4ef` |
| Orange accent | `#f04b16` |
| Muted text | `#7a7a7a` |
| Border | `#d8d2c8` |
| Heading font | Playfair Display (serif) |
| Body/nav font | Inter (sans) |

- Uppercase orange eyebrows with wide letter-spacing (`tracking-[0.22em]`).
- Serif headlines with an italic orange accent phrase.
- Generous whitespace, centered `max-w-[1180px]` containers, thin `#d8d2c8` borders.
- Four button variants: orange, black, outline-dark, outline-light.

## Header
Thin black top bar (brokerage + market) → ivory sticky main nav → logo left, centered nav,
phone + Contact button right. Collapses to a full-screen black hamburger menu on mobile.

## Homepage sections (top → bottom)
1. Full-viewport hero — crest mark, eyebrow chip, serif headline + orange italic, 3 CTAs, social row.
2. Trust/review strip (Zillow / Google / Realtor.com cards).
3. Black sales ticker (recent closings, auto-scroll).
4. Black stat band (4 stats).
5. Founder split block — **real Richard bio** + portrait + mini-stats.
6. Buyer/Seller service cards.
7. Charcoal process timeline (6 steps, alternating).
8. Office/markets accordion + image card.

## Listing / search behavior
Live MLS via Canopy Matrix **iframe** on `/search`. A full custom-search UI (cards, grid,
filters, detail, inquiry) is also built and runs on preview data — ready for an API provider.

## Forms
Contact, valuation, buyer/listing inquiry, schedule showing, join-team, newsletter, agent
contact. All route through one `/api/forms` endpoint → CRM webhook, with UTM/referrer capture
and a compliance consent checkbox.

## Footer
Black. Brand + reviews + social · Services · Markets · Newsletter. Legal row with
privacy/terms/accessibility/IDX links, brokerage attribution, IDX disclaimer, Equal Housing.

## Compliance boundary honored
Recreated UX and styling direction only. Original copy/branding throughout. Real MLS path
(no faked production data — preview listings are dev-only and never shown in production).
