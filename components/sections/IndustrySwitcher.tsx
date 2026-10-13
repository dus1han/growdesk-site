"use client";

import { useEffect, useRef, useState } from "react";
import { CustomersMock } from "@/components/mocks/CustomersMock";
import { DashboardMock } from "@/components/mocks/DashboardMock";
import { ScaleToFit } from "@/components/mocks/ScaleToFit";
import { ease, gsap, MOTION_OK, ScrollTrigger, useGSAP } from "@/components/motion/gsap";
import { RevealText } from "@/components/motion/RevealText";
import { cn } from "@/lib/cn";
import { industries } from "@/lib/industries";

const views = [
  { id: "dashboard", label: "Dashboard" },
  { id: "customers", label: "Customers" },
] as const;
type View = (typeof views)[number]["id"];

const changes = ["Name & logo", "Colours", "Terminology", "Stages", "Fields", "Workflows"];

/** Signature moment: one CRM, re-themed live for different businesses. */
export function IndustrySwitcher() {
  const root = useRef<HTMLElement>(null);
  const [idx, setIdx] = useState(0);
  const [view, setView] = useState<View>("dashboard");
  const [userTookOver, setUserTookOver] = useState(false);
  const [inView, setInView] = useState(false);
  const busy = useRef(false);
  const industry = industries[idx];

  const swap = (apply: () => void) => {
    if (busy.current) return;
    const els = root.current!.querySelectorAll("[data-swap]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return apply();
    busy.current = true;
    gsap.to(els, {
      opacity: 0,
      y: -6,
      filter: "blur(4px)",
      duration: 0.18,
      stagger: 0.004,
      ease: "power2.in",
      onComplete: () => {
        apply();
        busy.current = false;
      },
    });
  };

  // Animate the new labels in after each change.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          root.current!.querySelectorAll("[data-swap]"),
          { opacity: 0, y: 8, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.008, ease: ease.out },
        );
        gsap.from(root.current!.querySelectorAll("[data-bar]"), { scaleX: 0, transformOrigin: "left", duration: 0.8, stagger: 0.05, ease: ease.out });
      });
    },
    { scope: root, dependencies: [idx, view], revertOnUpdate: false },
  );

  // Entrance + in-view tracking for auto-play.
  useGSAP(
    () => {
      ScrollTrigger.create({ trigger: root.current, start: "top 60%", end: "bottom 40%", onToggle: (st) => setInView(st.isActive) });
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(root.current!.querySelector("[data-window]"), {
          y: 80,
          rotateX: 12,
          opacity: 0,
          duration: 1.4,
          ease: ease.out,
          scrollTrigger: { trigger: root.current!.querySelector("[data-window]"), start: "top 90%" },
        });
      });
    },
    { scope: root },
  );

  useEffect(() => {
    if (userTookOver || !inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => swap(() => setIdx((i) => (i + 1) % industries.length)), 3800);
    return () => window.clearInterval(t);
  }, [userTookOver, inView]);

  const pick = (i: number) => {
    setUserTookOver(true);
    if (i !== idx) swap(() => setIdx(i));
  };

  return (
    <section ref={root} id="customise" aria-labelledby="customise-title" className="relative py-32 sm:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-[60vh] max-w-5xl rounded-[100%] opacity-30 blur-3xl transition-colors duration-700" style={{ background: `radial-gradient(closest-side, ${industry.accent}, transparent)` }} />

      <div className="relative mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-fg-faint">Built around you</p>
        <RevealText
          text="One CRM. Shaped around your business."
          className="mx-auto mt-4 max-w-3xl text-center font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
        />
        <p id="customise-title" className="mx-auto mt-6 max-w-xl text-center text-lg text-fg-muted">
          Same GrowDesk underneath. Your name, your stages and your words on top.
        </p>

        {/* Industry tabs */}
        <div className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Industry" className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-hairline bg-white/[0.03] p-1 [scrollbar-width:none]">
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                role="tab"
                aria-selected={i === idx}
                aria-controls="industry-panel"
                onClick={() => pick(i)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 sm:px-5",
                  i === idx ? "bg-white text-black" : "text-fg-muted hover:text-fg",
                )}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-4 text-sm">
          {views.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setUserTookOver(true);
                if (v.id !== view) swap(() => setView(v.id));
              }}
              aria-pressed={v.id === view}
              className={cn("border-b pb-1 transition-colors", v.id === view ? "border-fg text-fg" : "border-transparent text-fg-faint hover:text-fg-muted")}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div id="industry-panel" role="tabpanel" aria-label={`${industry.label} example`} className="mt-10 [perspective:1600px]">
          <div data-window className="rounded-[22px] bg-gradient-to-b from-white/25 to-white/[0.03] p-px shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)]">
            <ScaleToFit className="overflow-hidden rounded-[21px]">
              {view === "dashboard" ? <DashboardMock industry={industry} /> : <CustomersMock industry={industry} />}
            </ScaleToFit>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-fg-muted" aria-label="What changes per business">
          {changes.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: industry.accent }} />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-fg-faint">Example businesses and data are fictional.</p>
      </div>
    </section>
  );
}
