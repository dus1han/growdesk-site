"use client";

import { useRef } from "react";
import { DashboardMock } from "@/components/mocks/DashboardMock";
import { ScaleToFit } from "@/components/mocks/ScaleToFit";
import { ease, gsap, MOTION_OK, useGSAP } from "@/components/motion/gsap";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { defaultIndustry } from "@/lib/industries";
import { site } from "@/lib/site";

/**
 * Moment 1: the product emerges from darkness, tilts upright and approaches
 * until it owns the viewport.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);

        // Intro on load
        gsap
          .timeline({ defaults: { ease: ease.out } })
          .from(q("[data-mark]"), { scale: 0.6, opacity: 0, filter: "blur(10px)", duration: 1.4 })
          .from(q("[data-sub]"), { y: 20, opacity: 0, duration: 1 }, 0.9)
          .from(q("[data-ctas] > *"), { y: 16, opacity: 0, duration: 0.9, stagger: 0.08 }, 1.05)
          .from(q("[data-rise]"), { y: 160, opacity: 0, duration: 1.8 }, 0.7);

        // Scroll: copy recedes, product tilts upright and rises to fill the stage.
        const product = q("[data-product]")[0] as HTMLElement;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top top", end: "+=140%", scrub: 1, pin: true, invalidateOnRefresh: true },
        });
        tl.fromTo(q("[data-tilt]"), { rotateX: 30, scale: 0.86, filter: "brightness(0.6)" }, { rotateX: 0, scale: 1, filter: "brightness(1)", ease: "none" }, 0)
          .to(q("[data-copy]"), { y: -100, opacity: 0, filter: "blur(8px)", duration: 0.35, ease: "power1.in" }, 0)
          .to(product, { y: () => -(product.offsetTop - 96), duration: 0.9, ease: "power1.inOut" }, 0.1)
          .to(q("[data-glow]"), { opacity: 1, scale: 1.3, ease: "none" }, 0)
          .to({}, { duration: 0.15 });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="grain relative h-svh min-h-[560px] overflow-hidden motion-reduce:h-auto motion-reduce:pb-24">
      {/* Ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[90vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgb(91_91_246/0.22),transparent)]" />
        <div data-glow className="absolute left-1/2 top-[55%] h-[60vh] w-[70vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgb(91_91_246/0.28),transparent)] opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div data-copy className="relative mx-auto max-w-5xl px-4 pt-[max(14svh,104px)] text-center">
        <div data-mark className="mx-auto mb-[min(2rem,3svh)] flex size-14 items-center justify-center">
          <LogoMark className="size-14 drop-shadow-[0_0_30px_rgb(91_91_246/0.6)]" />
        </div>
        <RevealText
          as="h1"
          trigger="load"
          delay={0.35}
          text="Turn every customer into your next opportunity."
          wordClassName="text-gradient"
          className="mx-auto max-w-4xl font-display text-[clamp(2.3rem,min(7.5vw,9svh),6.2rem)] font-bold leading-[0.98] tracking-[-0.045em]"
        />
        <p data-sub className="mx-auto mt-[min(1.75rem,3svh)] max-w-xl text-[17px] leading-relaxed text-fg-muted sm:text-lg">
          GrowDesk brings your customers, opportunities, appointments and follow-ups into one CRM — shaped around the way you work.
        </p>
        <div data-ctas className="mt-[min(2.25rem,4svh)] flex flex-wrap items-center justify-center gap-3">
          <Button href={site.cta.href}>{site.cta.label}</Button>
          <Button href="#features" variant="ghost">
            See how it works
          </Button>
        </div>
      </div>

      <div data-product id="product" className="relative mx-auto mt-14 w-full max-w-[min(72rem,calc((100svh-120px)*1.6))] px-4 [perspective:1600px]">
        <div data-rise>
          <div data-tilt className="origin-[50%_0%] will-change-transform">
            <div className="rounded-[22px] bg-gradient-to-b from-white/25 to-white/[0.03] p-px shadow-[0_40px_120px_-30px_rgb(91_91_246/0.55)]">
              <ScaleToFit className="overflow-hidden rounded-[21px]">
                <DashboardMock industry={defaultIndustry} />
              </ScaleToFit>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
