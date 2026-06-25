# Tocado Real Estate — North Carolina

Premium real estate website built with Next.js (App Router) + TypeScript + Tailwind.
Live MLS search via Canopy MLS Matrix IDX. Relationship-first brand for Stephenie Tocado's NC firm.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Go-live checklist (the short version)

1. **Fill in the placeholders.** Open `data/site.ts` and replace everything in `[[ ]]`
   (firm name, brokerage, phone, email, address, license #). Search the whole project
   for `[[` to catch the rest (`data/stats.ts`, `data/ticker.ts`, `data/team.ts`, `data/locations.ts`).
2. **Add your CRM webhook.** In `.env.local`, set `CRM_WEBHOOK_URL` to your GoHighLevel /
   Follow Up Boss / Zapier inbound webhook. Until then, leads are logged server-side.
3. **MLS is already wired** — Canopy Matrix IDX (`idx=90ff36dd`) in `.env.local`.
4. **Add real photos** (optional but recommended) — see `docs/launch-checklist.md`.
5. **Legal review** — privacy / terms / IDX disclaimer are templates. Have your
   broker-in-charge and an attorney review before launch.
6. **Deploy to Vercel** — push to GitHub, import in Vercel, add the env vars from `.env.local`.

See `docs/` for the full reference-site audit, build plan, IDX setup, and launch checklist.
