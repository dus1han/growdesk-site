/**
 * Public origin, baked in at build time from the SITE_URL build arg / repository
 * variable (see docs/deployment.md). Only a real https hostname is indexable —
 * an IP preview must never compete with the real domain in search.
 */
const origin = (process.env.SITE_URL ?? "").replace(/\/+$/, "");
export const siteUrl = origin || undefined;
export const indexable = /^https:\/\/[^/]+\.[^/]+/.test(origin) && !/^https:\/\/\d{1,3}(\.\d{1,3}){3}(:|\/|$)/.test(origin);

/** Site-wide copy and destinations. Change the contact channel here only. */
export const site = {
  title: "GrowDesk — Turn Customer Relationships Into Growth",
  description:
    "GrowDesk is a CRM shaped around your business — customers, opportunities, appointments and follow-ups in one simple workspace.",
  nav: [
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Customise", href: "#customise" },
    { label: "How it works", href: "#how" },
  ],
  /** Primary CTA — scrolls to the contact section. */
  cta: { label: "Get in touch", href: "#contact" },
  contact: {
    // TODO(decision): confirm the contact channel before launch.
    whatsapp: "https://wa.me/94759281696?text=" + encodeURIComponent("Hi, I'd like to know more about GrowDesk."),
  },
} as const;
