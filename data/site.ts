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
  brokerage: "[[Brokerage Name]]", // NC requires brokerage affiliation — still needed
  tagline: "Real Estate, Done With Intention.",
  marketLabel: "Serving North Carolina",

  // ── Contact ─────────────────────────────────────────────────
  phone: "(704) 555-0142", // [[MOCK — replace with real number]]
  phoneHref: "tel:+17045550142",
  email: "[[hello@tocadorealtygroup.com]]",
  address: "[[Office Address, Charlotte, NC 28200]]",

  // ── Lead delivery (Formspree → emails Stephenie) ────────────
  // 1. Make a free form at https://formspree.io (set the notification email to
  //    your mom's address). 2. Paste the endpoint it gives you below, e.g.
  //    "https://formspree.io/f/abcdwxyz". Until set, forms show success but
  //    won't send — so add this before launch.
  formEndpoint: "[[https://formspree.io/f/YOUR_FORM_ID]]",

  // ── Top bar / hero copy ─────────────────────────────────────
  topBar: "Tocado Realty Group · Serving North Carolina",
  heroEyebrow: "North Carolina Real Estate, Built With Intention",
  heroHeadlineMain: "Real Estate,",
  heroHeadlineAccent: "Done With Intention.",
  heroBody:
    "A relationship-first team guiding buyers, sellers, and families across North Carolina with clarity, strategy, and long-term care.",

  // ── Social ──────────────────────────────────────────────────
  social: {
    instagram: "[[https://instagram.com/yourfirm]]",
    facebook: "[[https://facebook.com/yourfirm]]",
    linkedin: "[[https://linkedin.com/company/yourfirm]]",
    youtube: "",
  },

  // ── Founder (REAL — Stephenie Tocado) ───────────────────────
  founder: {
    name: "Stephenie Tocado",
    title: "Founder & Lead Broker",
    image: "/images/stephenie.png",
    sinceYear: 2002,
  },

  // ── Legal / compliance (REVIEW WITH BROKER BEFORE LAUNCH) ────
  legal: {
    license: "[[License #: __________ ]]",
    brokerageLicense: "[[Brokerage License #: __________ ]]",
    equalHousing: true,
    realtorMark: false, // only set true if legally permitted to use REALTOR®
    idxDisclaimer:
      "Listing information is deemed reliable but not guaranteed and should be independently verified. IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.",
    consent:
      "I agree to be contacted by [[Firm Name]] by phone, email, and text regarding real estate services. Message and data rates may apply. I can opt out at any time.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
