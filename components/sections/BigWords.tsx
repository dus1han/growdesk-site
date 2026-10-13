"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/components/motion/gsap";

const words = ["Capture.", "Manage.", "Follow up.", "Customise.", "Grow."];

/** Moment 6: one word owns the viewport at a time. Reduced motion shows a static stack. */
export function BigWords() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const items = q("[data-word]");
        const outro = q("[data-outro]")[0];
        gsap.set(q("[data-list]"), { height: "100svh" });
        gsap.set([...items, outro], { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top top", end: `+=${(items.length + 1) * 70}%`, scrub: 0.8, pin: true },
        });
        items.forEach((el, i) => {
          const last = i === items.length - 1;
          tl.fromTo(el, { opacity: 0, scale: 0.7, filter: "blur(20px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out" });
          tl.to(el, { opacity: 0, scale: last ? 1.6 : 1.25, filter: "blur(16px)", duration: 0.5, ease: "power2.in" }, "+=0.3");
        });
        tl.fromTo(outro, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }).to({}, { duration: 0.4 });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Capture, manage, follow up, customise, grow" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgb(91_91_246/0.12),transparent)]" />
      <div data-list className="relative flex flex-col items-center gap-6 py-32">
        {words.map((w, i) => (
          <p
            key={w}
            data-word
            className={
              i === words.length - 1
                ? "bg-gradient-to-br from-white via-[#b4b4ff] to-[#5b5bf6] bg-clip-text px-4 text-center font-display text-[clamp(4rem,17vw,15rem)] font-extrabold leading-none tracking-[-0.06em] text-transparent"
                : "px-4 text-center font-display text-[clamp(3.2rem,13vw,11rem)] font-extrabold leading-none tracking-[-0.055em]"
            }
          >
            {w}
          </p>
        ))}
        <p data-outro className="px-4 text-center font-display text-3xl font-semibold tracking-tight text-fg-muted sm:text-5xl">
          <span>
            That&apos;s <span className="text-fg">GrowDesk</span>.
          </span>
        </p>
      </div>
    </section>
  );
}
