/**
 * ─────────────────────────────────────────────────────────────
 * CENTRAL SITE CONFIG  —  EDIT THIS FILE TO GO LIVE
 * ─────────────────────────────────────────────────────────────
 * Everything wrapped in [[ ]] is a placeholder. Search the project
 * for "[[" to find anything still needing real info. Replace the
 * values below and the whole site updates.
 */

export const siteConfig = {
  // ── Brand / firm ────────────────────────────────────────────
  name: "Tocado Realty Group",
  shortName: "Tocado",
  logoMark: "TRG", // crest text until a real logo is supplied
  brokerage: "Tocado Realty Group", // her own NC brokerage firm
  tagline: "Guiding Your Carolina Move.",
  marketLabel: "Serving North Carolina",

  // ── Contact ─────────────────────────────────────────────────
  phone: "(704) 839-5599",
  phoneHref: "tel:+17048395599",
  email: "richardtocado@gmail.com",
  address: "Charlotte, North Carolina", // [[add full office street address when ready]]

  // ── Lead delivery (Formspree → emails Richard) ────────────
  // 1. Make a free form at https://formspree.io (set the notification email to
  //    your mom's address). 2. Paste the endpoint it gives you below, e.g.
  //    "https://formspree.io/f/abcdwxyz". Until set, forms show success but
  //    won't send — so add this before launch.
  formEndpoint: "[[https://formspree.io/f/YOUR_FORM_ID]]",

  // ── Top bar / hero copy ─────────────────────────────────────
  topBar: "Tocado Realty Group · Serving North Carolina",
  heroEyebrow: "Relationship-First Real Estate Across North Carolina",
  heroHeadlineMain: "Carolina Real Estate,",
  heroHeadlineAccent: "Made Personal.",
  heroBody:
    "From the first showing to closing day, we help buyers, sellers, and families move across North Carolina with honest guidance, sharp strategy, and care that doesn't end at the keys.",

  // ── Social ──────────────────────────────────────────────────
  // Leave blank to hide the icon until the account exists. Paste a URL to show it.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },

  // ── Founder (REAL — Richard Tocado) ───────────────────────
  founder: {
    name: "Richard Tocado",
    title: "Founder & Lead Broker",
    image: "/images/richard.jpg",
    sinceYear: 2002,
  },

  // ── Legal / compliance (REVIEW WITH BROKER BEFORE LAUNCH) ────
  legal: {
    license: "NC Broker License #262424",
    brokerageLicense: "NC Firm License #C34507",
    equalHousing: true,
    realtorMark: false, // only set true if legally permitted to use REALTOR®
    idxDisclaimer:
      "Listing information is deemed reliable but not guaranteed and should be independently verified. IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.",
    consent:
      "I agree to be contacted by Tocado Realty Group by phone, email, and text regarding real estate services. Message and data rates may apply. I can opt out at any time.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
