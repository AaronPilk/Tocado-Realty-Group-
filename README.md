# Tocado Real Estate — North Carolina

Premium real estate website built with Next.js (App Router) + TypeScript + Tailwind.
Live MLS search via Canopy MLS Matrix IDX. Relationship-first brand for Richard Tocado's NC firm.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # produces the static /out folder (deploy this anywhere)
```

This is a **static export** — `npm run build` outputs a plain `/out` folder of HTML/CSS/JS.
Hosting is on **Cloudflare Pages**. Full step-by-step (Formspree leads + Cloudflare + domain):
see **`docs/cloudflare-setup.md`**.

## Go-live checklist (the short version)

1. **Fill in the placeholders.** Open `data/site.ts` and replace everything in `[[ ]]`
   (firm name, brokerage, phone, email, address, license #). Search the whole project
   for `[[` to catch the rest (`data/stats.ts`, `data/ticker.ts`, `data/team.ts`, `data/locations.ts`).
2. **Make forms email your mom.** Create a free Formspree form and paste its endpoint into
   `data/site.ts` → `formEndpoint`. (Details in `docs/cloudflare-setup.md`.)
3. **MLS is already wired** — Canopy Matrix IDX (`idx=90ff36dd`); live listings show in the
   "Full MLS Search" tab on `/search`.
4. **Add real photos** (optional but recommended) — see `docs/launch-checklist.md`.
5. **Legal review** — privacy / terms / IDX disclaimer are templates. Have your
   broker-in-charge and an attorney review before launch.
6. **Deploy to Cloudflare Pages** — connect the GitHub repo, build command `npm run build`,
   output directory `out`, then add your domain. Full guide: `docs/cloudflare-setup.md`.

See `docs/` for the full reference-site audit, build plan, IDX setup, and launch checklist.
