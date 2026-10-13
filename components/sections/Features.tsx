"use client";

import { useRef } from "react";
import { ease, gsap, MOTION_OK, useGSAP } from "@/components/motion/gsap";
import { RevealText } from "@/components/motion/RevealText";

/** Feature tiers. Copy rule: "Built for you" items are tailored, never presented as included. */
const tiers = [
  {
    tag: "Core",
    title: "Everything a customer-led business runs on.",
    items: ["Customers & profiles", "Stages", "Bookings & calendar", "Follow-ups", "Payments", "Activity history", "Live dashboard", "Roles & permissions", "Lead capture from WhatsApp & Instagram", "WhatsApp booking bot"],
  },
  {
    tag: "Configurable",
    title: "Set up the way you already work.",
    items: ["Your stages", "Custom fields", "Lead sources", "Services & pricing", "Payment methods", "Your name & logo", "Opening hours", "Currency & time zone"],
  },
  {
    tag: "Built for you",
    title: "Need more? We build it in.",
    items: ["Reports & charts", "Pipeline board", "Automated reminders", "Online booking page", "Invoices & quotes", "Client portal", "Multi-branch", "ERP & accounting integration", "AI assistant"],
  },
];

export function Features() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        root.current!.querySelectorAll<HTMLElement>("[data-tier]").forEach((tier) => {
          gsap.from(tier.querySelectorAll("[data-item]"), {
            opacity: 0,
            y: 18,
            duration: 0.8,
            stagger: 0.04,
            ease: ease.out,
            scrollTrigger: { trigger: tier, start: "top 75%" },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="features" aria-labelledby="features-title" className="relative px-4 py-32 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-fg-faint">What&apos;s inside</p>
        <RevealText
          text="Know every customer. Never miss what's next."
          className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
        />
        <h2 id="features-title" className="sr-only">Features</h2>

        <div className="mt-20 divide-y divide-hairline border-y border-hairline">
          {tiers.map((t) => (
            <div key={t.tag} data-tier className="grid gap-8 py-12 md:grid-cols-[0.8fr_1.6fr] md:gap-16">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-site-accent">{t.tag}</p>
                <p className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{t.title}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2.5">
                {t.items.map((item) => (
                  <li key={item} data-item className="rounded-full border border-hairline bg-white/[0.02] px-4 py-2 text-[15px] text-fg-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
