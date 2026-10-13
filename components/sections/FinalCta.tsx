"use client";

import { useRef } from "react";
import { ease, gsap, MOTION_OK, useGSAP } from "@/components/motion/gsap";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { site } from "@/lib/site";

/** Moment 8: quiet, almost black, one glow. */
export function FinalCta() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        gsap.from(q("[data-glow]"), { opacity: 0, scale: 0.5, duration: 2, ease: ease.out, scrollTrigger: { trigger: root.current, start: "top 70%" } });
        gsap.from(q("[data-fade]"), { opacity: 0, y: 24, duration: 1, stagger: 0.1, ease: ease.out, scrollTrigger: { trigger: root.current, start: "top 55%" } });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="contact" aria-labelledby="contact-title" className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-32">
      <div data-glow aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(91_91_246/0.25),transparent)]" />
      <div className="relative text-center">
        <div data-fade className="mx-auto mb-10 w-fit">
          <LogoMark className="size-14 drop-shadow-[0_0_30px_rgb(91_91_246/0.6)]" />
        </div>
        <RevealText
          text="Tell us how you work."
          className="font-display text-[clamp(2.6rem,7vw,5.8rem)] font-bold leading-[1] tracking-[-0.045em]"
        />
        <p id="contact-title" data-fade className="mx-auto mt-6 max-w-lg text-lg text-fg-muted">
          We&apos;ll shape GrowDesk around your customers, your stages and your team.
        </p>
        <div data-fade className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={site.contact.whatsapp} external>
            Start a conversation
          </Button>
          <Button href="#customise" variant="ghost">
            Explore GrowDesk
          </Button>
        </div>
      </div>
    </section>
  );
}
