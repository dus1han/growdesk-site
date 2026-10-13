# GrowDesk Marketing Site — Development Plan

Brief: [claude.md](claude.md). Product source of truth: `D:\Personal\BasicCRM`.

## Positioning

- Headline: **Turn every customer into your next opportunity.**
- Core idea: **Your workflow. Your stages. Your CRM.** — GrowDesk is shaped around each business.
- Audience: appointment- and relationship-based businesses. Clinics lead (proven), others via the industry switcher.
- Copy rule: features not in the current build are presented as **"tailored to your business"**, never as "included".

## Feature tiers

| Tier | Features | On the site |
|---|---|---|
| **Core** | Customers, profiles, stages, bookings & calendar, follow-ups, payments, activity, dashboard, roles, Capture extension (WhatsApp Web / Instagram), WhatsApp bot API, live booking updates | Cinematic feature scenes |
| **Configurable** | Stages, custom fields, lead sources, services, payment methods, branding (name/logo/tagline), opening hours, currency, time zone | "Make it yours" scene |
| **Built for you** | Reports & charts, pipeline board, reminders (email/SMS/WhatsApp), online booking page, invoices & quotes, client portal, multi-branch, inventory, ERP/accounting integration, website forms, AI assistant, dark mode, mobile app | Modules gallery + integrations |

Real stages (CRM seed): Interested → Follow-up → Customer (Lost). Journey scene uses Lead → Interested → Follow-up → Booked → Completed → Returning, relabelled per industry.

## Architecture

- Standalone Next.js 16 / React 19 / Tailwind v4 app in this folder. BasicCRM is untouched (its `/` redirects to `/dashboard`, and it ships per client).
- GSAP + ScrollTrigger + Lenis for motion. No framer-motion.
- Static export (`output: 'export'`), served by Caddy on the VPS.
- Product UI = **themeable replica components** driven by a `config` prop (terminology, stages, fields, accent, logo) with fictional demo data per industry. No real customer data, no screenshots in the page.
- Brand: indigo `#5b5bf6` single accent, sprout logo, Plus Jakarta Sans (display) + Inter (body). Dark site, light product UI inside it.

## Page flow

1. Nav (floating, blurs on scroll)
2. Hero — product emerges from darkness and approaches
3. Chaos → GrowDesk — fragments collapse into the logo
4. Meet GrowDesk — product intro zoom
5. Know every customer — list → profile
6. Know where every opportunity stands — stage journey
7. Never lose track of what's next — calendar / bookings
8. Follow up when it matters — follow-up timeline
9. Capture — the Chrome extension over a WhatsApp-style chat
10. One customer, one view — card expands into full profile
11. Dashboard at a glance
12. **Industry switcher** — one CRM, relabelled live per industry
13. **Make it yours** — blank CRM configured step by step on scroll
14. CAPTURE. MANAGE. FOLLOW UP. CUSTOMISE. GROW.
15. **Modules gallery** — tailored modules with small animated previews
16. **Integrations constellation**
17. **How it works** — Discover → Configure → Build → Launch → Grow
18. Screen marathon
19. Final CTA — "Tell us how you work. We'll shape GrowDesk around it."
20. Footer

## Phases

| Phase | Work | Est. | Status |
|---|---|---|---|
| P0 | Foundation: app, tokens, fonts, GSAP/Lenis, reduced motion, animation utilities | ½ d | **done** |
| P1 | Themeable replica components + industry configs + demo data | 2–3 d | **in progress** — Dashboard + Customers mocks, 5 industries done |
| P2 | Static story — all sections, copy, responsive | 1 d | |
| P3 | Signature moments incl. industry switcher + make-it-yours | 4–5 d | |
| P4 | Modules, integrations, how-it-works, nav, cursor, mobile variants | 2–3 d | |
| P5 | SEO, OpenGraph, accessibility, performance | 1 d | |
| P6 | Deploy — Caddy, domain, CI | ½ d | **in progress** — Docker + CI + scripts ready and verified locally; see docs/deployment.md |
| P7 | Creative-director review passes (brief §54–56) | ongoing | |

Total ≈ 12–14 working days.

## Open decisions

1. Industries for the switcher — default: Clinic, Salon & Spa, Consultancy, Real Estate, Fitness.
2. Modules to feature — default: the "Built for you" list above.
3. CTA channel (WhatsApp / form / email) — currently points to the in-page `#contact` section; set in `lib/site.ts`.
4. Domain.
