# Hosting on Cloudflare Pages + Domain

This site is a **static export** — a plain folder of HTML/CSS/JS (`out/`). Cloudflare
just serves the files. No server, no "app" to manage.

---

## Step 1 — Make leads email your mom (Formspree, ~3 min)

The forms (contact, valuation, buyer/seller, showing, join-team) email leads via Formspree.

1. Go to **https://formspree.io** → sign up (free plan is fine).
2. Create a new form. Set the notification email to **your mom's email address**.
3. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
4. Open **`data/site.ts`** and paste it into `formEndpoint`:
   ```ts
   formEndpoint: "https://formspree.io/f/abcdwxyz",
   ```
5. Commit + push (see Step 3). The first real submission triggers a one-time Formspree
   confirmation email — click the link in it once and you're live.

> Until you set this, forms show a success message but don't send. Set it before launch.

---

## Step 2 — Deploy to Cloudflare Pages

1. Go to **https://dash.cloudflare.com** → **Workers & Pages** → **Create** → **Pages** tab →
   **Connect to Git**.
2. Authorize GitHub and pick the repo: **`AaronPilk/Tocado-Realty-Group-`**.
3. On the build settings screen, enter exactly:
   - **Framework preset:** `Next.js (Static HTML Export)` — if it's not listed, choose `None`.
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Click **Save and Deploy**. First build takes ~1–2 minutes.
5. You get a live URL like `tocado-realty-group.pages.dev`. Check it.

Every time you `git push`, Cloudflare auto-rebuilds and redeploys. No manual steps.

---

## Step 3 — Push your latest changes

```
cd "/Users/pilksclaes/Stepehenie Tocado Real estste" && rm -f .git/index.lock && git add -A && git commit -m "Static export + Formspree for Cloudflare hosting" && git push
```

---

## Step 4 — Connect your domain

1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `tocadorealtygroup.com`).
3. **If the domain is registered at Cloudflare:** it's one click — done.
   **If it's registered elsewhere (GoDaddy, Namecheap, etc.):** Cloudflare shows you a
   CNAME (or nameservers) to add at your registrar. Add it, wait for it to verify
   (minutes to a few hours). Cloudflare auto-issues the SSL certificate.

---

## After it's live — final checks
- [ ] Visit the `.pages.dev` URL, click through every page
- [ ] Submit a test form → confirm it lands in your mom's inbox
- [ ] `/search` → "Full MLS Search" tab loads the live Canopy listings
- [ ] No `[[ ]]` placeholders visible (phone, email, brokerage, license #)
- [ ] Set `NEXT_PUBLIC_SITE_URL` (Cloudflare Pages → Settings → Environment variables) to
      your real domain so the sitemap/SEO tags use it, then redeploy.

## Notes
- The custom listing grid + Featured Properties run on **sample data** (clearly labeled).
  Real Canopy listings show in the **Full MLS Search** tab (iframe). To put real homes in
  the custom grid, add the MLS Grid API later — see `docs/idx-setup.md`.
- Real photos: drop them in `public/images/` and swap the gradient placeholders.
