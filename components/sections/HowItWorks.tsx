"use client";

import { useRef } from "react";
import { ease, gsap, MOTION_OK, useGSAP } from "@/components/motion/gsap";
import { RevealText } from "@/components/motion/RevealText";

const steps = [
  { n: "01", title: "Discover", body: "We learn how your business handles customers today." },
  { n: "02", title: "Configure", body: "Your stages, fields, services and branding are set up." },
  { n: "03", title: "Build", body: "Anything extra your workflow needs is built in." },
  { n: "04", title: "Launch", body: "Your team gets its own GrowDesk, ready on day one." },
  { n: "05", title: "Grow", body: "As your business changes, GrowDesk changes with it." },
];

export function HowItWorks() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        gsap.from(q("[data-line]"), { scaleX: 0, transformOrigin: "left", ease: "none", scrollTrigger: { trigger: q("[data-steps]")[0], start: "top 80%", end: "bottom 50%", scrub: 1 } });
        gsap.from(q("[data-step]"), { opacity: 0, y: 30, duration: 0.9, stagger: 0.12, ease: ease.out, scrollTrigger: { trigger: q("[data-steps]")[0], start: "top 75%" } });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="how" aria-labelledby="how-title" className="relative px-4 py-32 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-fg-faint">How it works</p>
        <RevealText
          text="Your CRM, built around you."
          className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
        />
        <h2 id="how-title" className="sr-only">How it works</h2>

        <div data-steps className="relative mt-20">
          <div aria-hidden className="absolute left-0 right-0 top-[11px] hidden h-px bg-hairline md:block">
            <div data-line className="h-full w-full bg-gradient-to-r from-site-accent to-[#14b8a6]" />
          </div>
          <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((s) => (
              <li key={s.n} data-step className="relative">
                <span className="relative z-10 block size-[22px] rounded-full border border-site-accent bg-bg shadow-[0_0_16px_rgb(91_91_246/0.6)]" aria-hidden />
                <p className="mt-6 font-display text-sm font-semibold text-fg-faint">{s.n}</p>
                <p className="mt-1 font-display text-2xl font-semibold tracking-tight">{s.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
