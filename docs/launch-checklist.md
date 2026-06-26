# Launch Checklist

## 1. Content / brand (required) — edit `data/site.ts`
- [ ] Firm name + brokerage name
- [ ] Phone, email, office address
- [ ] License # and brokerage license #
- [ ] Social links (Instagram / Facebook / LinkedIn)
- [ ] Logo mark text (or drop a real logo — see images below)
- [ ] `data/stats.ts` — real, verifiable numbers (don't claim what you can't back up)
- [ ] `data/ticker.ts` — real recent closings only
- [ ] `data/team.ts` — real agents (or remove the placeholder ones)
- [ ] `data/locations.ts` — trim/expand to the actual NC markets served

> Tip: search the whole project for `[[` to find every remaining placeholder.

## 2. MLS / IDX — DONE ✅
- [x] Canopy Matrix IDX iframe wired (`.env.local`)
- [ ] Confirm IDX disclaimer wording + brokerage attribution with Canopy + broker-in-charge

## 3. CRM / leads (required)
- [ ] Set `CRM_WEBHOOK_URL` in `.env.local` (GoHighLevel / Follow Up Boss / Zapier / Make)
- [ ] Submit a test lead and confirm it lands in the CRM
- [ ] Optionally set `FORM_TO_EMAIL` for email notifications

## 4. Photos (recommended)
Drop real images in `public/images/` and swap the CSS placeholders for `<Image>`:
- [ ] `hero-home.jpg` → in `components/home/Hero.tsx`
- [ ] Buyer/seller card photos → `components/home/BuyerSellerCards.tsx`
- [ ] Location photos → `public/images/locations/` (referenced in `data/locations.ts`)
- [ ] Agent headshots → `public/images/team/` (referenced in `data/team.ts`)
- [ ] Richard's portrait is already in place ✅

## 5. Legal (required before launch)
- [ ] Attorney review: `/privacy-policy`, `/terms`, `/accessibility`
- [ ] Broker-in-charge review: `/idx-disclaimer` + footer attribution
- [ ] Confirm consent language in `data/site.ts` (`legal.consent`)
- [ ] Set REALTOR® mark usage (`legal.realtorMark`) only if legally permitted

## 6. Tracking (optional)
- [ ] `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_META_PIXEL_ID` in `.env.local`

## 7. Deploy
- [ ] Push to GitHub
- [ ] Import in Vercel
- [ ] Add all `.env.local` vars to Vercel project settings
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live domain
- [ ] Point the domain's DNS to Vercel

## 8. Final QA
- [ ] `npm run build` passes (currently ✅)
- [ ] Test on 1440 / 1280 / tablet / mobile
- [ ] Header nav + mobile menu
- [ ] Live MLS search loads on `/search`
- [ ] Every form submits
- [ ] Footer legal links work
- [ ] No `[[ ]]` placeholders left visible
