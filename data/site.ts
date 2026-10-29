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
  name: "Tocado & Company", // display / brand name
  shortName: "Tocado",
  logoMark: "TOCADO", // crest text fallback (real logo is used)
  brokerage: "Tocado and Company Inc.", // legal firm name (footer / disclosures)
  tagline: "Experienced Guidance. Personal Service. Carolina Real Estate.",
  marketLabel: "Serving the Carolinas",

  // ── Contact ─────────────────────────────────────────────────
  phone: "(704) 661-3414",
  phoneHref: "tel:+17046613414",
  email: "stephenie@tocadorealty.com",
  // Public-facing office address (no suite number, per owner request)
  address: "13230 Ballantyne Corporate Pl, Charlotte, NC 28277",
  addressParts: {
    street: "13230 Ballantyne Corporate Pl",
    city: "Charlotte",
    region: "NC",
    postalCode: "28277",
  },

  // ── Lead delivery (Formspree → emails Stephenie) ────────────
  // 1. Make a free form at https://formspree.io (set the notification email to
  //    stephenie@tocadorealty.com). 2. Paste the endpoint it gives you below,
  //    e.g. "https://formspree.io/f/abcdwxyz". Until set, forms show success
  //    but won't send — so add this before launch.
  formEndpoint: "[[https://formspree.io/f/YOUR_FORM_ID]]",

  // ── Top bar / hero copy ─────────────────────────────────────
  topBar: "Tocado & Company · Experienced Guidance for the Carolinas",
  heroEyebrow: "20+ Years in Real Estate, Mortgage & Title",
  heroHeadlineMain: "A Different Perspective",
  heroHeadlineAccent: "on Real Estate.",
  heroBody:
    "With more than 20 years of experience in real estate, mortgage lending, mortgage processing, and title insurance, Stephenie Tocado brings knowledge, perspective, and a personal approach to buying and selling homes throughout North Carolina and South Carolina.",

  // ── Social ──────────────────────────────────────────────────
  // Leave blank to hide the icon until the account exists. Paste a URL to show it.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },

  // ── Owner / Broker (REAL — Stephenie Tocado) ────────────────
  founder: {
    name: "Stephenie Tocado",
    title: "Owner, Broker / Broker-in-Charge",
    image: "/images/stephenie-headshot.jpg",
    sinceYear: 2002,
  },

  // ── Legal / compliance (REVIEW WITH BROKER BEFORE LAUNCH) ────
  legal: {
    license: "NC Broker #262424 · SC Broker #101949",
    brokerageLicense: "NC Firm #C34507 · SC Firm #28582",
    canopy: "Canopy MLS · Agent #21910 · Office ID R00814",
    equalHousing: true,
    realtorMark: false, // only set true if legally permitted to use REALTOR®
    idxDisclaimer:
      "Listing information is deemed reliable but not guaranteed and should be independently verified. IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.",
    consent:
      "I agree to be contacted by Tocado & Company by phone, email, and text regarding real estate services. Message and data rates may apply. I can opt out at any time.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
