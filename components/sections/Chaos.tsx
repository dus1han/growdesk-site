"use client";

import { CalendarX2, Mail, MessageCircle, PhoneMissed, Table2 } from "lucide-react";
import { useRef } from "react";
import { ease, gsap, MOTION_OK, useGSAP } from "@/components/motion/gsap";
import { LogoMark } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

/** x/y are desktop positions (% of stage); mx/my override them on small screens. Keep clear of the centre band where the headline sits. */
type Fragment = { x: number; y: number; r: number; mobile?: boolean; mx?: number; my?: number; node: React.ReactNode };

const fragments: Fragment[] = [
  {
    x: 5, y: 15, r: -7, mobile: true, mx: 4, my: 13,
    node: (
      <div className="w-56 rounded-2xl rounded-bl-sm bg-[#dcf8c6] p-3 text-[13px] text-[#1f2c1a] shadow-xl">
        <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-[#25803d]"><MessageCircle className="size-3" /> WhatsApp</p>
        Hi! Is Thursday 4pm still available? 🙏
        <span className="mt-1 block text-right text-[10px] text-black/40">21:47</span>
      </div>
    ),
  },
  {
    x: 72, y: 12, r: 6, mobile: true, mx: 56, my: 26,
    node: (
      <div className="w-44 bg-[#fde68a] p-4 font-[cursive] text-[15px] leading-snug text-[#5b4a12] shadow-xl [clip-path:polygon(0_0,100%_0,100%_88%,90%_100%,0_100%)]">
        Call Sara back re: price??
      </div>
    ),
  },
  {
    x: 2, y: 68, r: 4,
    node: (
      <div className="w-64 overflow-hidden rounded-lg border border-black/10 bg-white text-[11px] text-slate-700 shadow-xl">
        <p className="flex items-center gap-1.5 bg-[#107c41] px-2.5 py-1.5 text-[11px] font-semibold text-white"><Table2 className="size-3" /> customers_FINAL_v3.xlsx</p>
        {[["Name", "Phone", "Status"], ["Omar F.", "555 0163", "??"], ["Lina H.", "555 0119", "booked"], ["Daniel", "", "call back"]].map((row, i) => (
          <div key={i} className={cn("grid grid-cols-3 border-b border-slate-200", i === 0 && "bg-slate-100 font-semibold")}>
            {row.map((c, j) => <span key={j} className="border-r border-slate-200 px-2 py-1 last:border-0">{c}</span>)}
          </div>
        ))}
      </div>
    ),
  },
  {
    x: 80, y: 66, r: -5, mobile: true, mx: 48, my: 70,
    node: (
      <div className="w-48 rounded-2xl bg-white p-3.5 text-slate-800 shadow-xl">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-red-500"><CalendarX2 className="size-3.5" /> Oct 14</p>
        <p className="mt-1.5 text-sm font-semibold line-through decoration-red-400">Daniel · 11:00</p>
        <p className="text-sm font-semibold">Daniel · 14:00?</p>
      </div>
    ),
  },
  {
    x: 27, y: 81, r: -3, mobile: true, mx: 4, my: 83,
    node: (
      <div className="w-60 rounded-2xl bg-[#18181b] p-3 text-[13px] text-white shadow-xl ring-1 ring-white/10">
        <p className="mb-1.5 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] bg-clip-text text-[11px] font-bold text-transparent">Instagram · Direct</p>
        How much for the bridal package?
      </div>
    ),
  },
  {
    x: 60, y: 80, r: 4,
    node: (
      <div className="flex w-52 items-center gap-3 rounded-2xl bg-white/95 p-3 text-slate-800 shadow-xl">
        <span className="flex size-9 items-center justify-center rounded-full bg-red-100 text-red-600"><PhoneMissed className="size-4" /></span>
        <span><span className="block text-sm font-semibold">Missed call</span><span className="text-xs text-slate-500">+1 555 0163 · 3×</span></span>
      </div>
    ),
  },
  {
    x: 40, y: 11, r: 3,
    node: (
      <div className="w-60 rounded-xl bg-white p-3 text-slate-800 shadow-xl">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500"><Mail className="size-3" /> Re: Re: Fwd: booking</p>
        <p className="mt-1 text-[13px]">Sorry, which date did we agree on?</p>
      </div>
    ),
  },
];

/** Moment 2: scattered customer information collapses into GrowDesk. */
export function Chaos() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const stage = q("[data-stage]")[0] as HTMLElement;
        const frags = q("[data-frag]") as HTMLElement[];

        // Idle drift, independent of scroll.
        q("[data-float]").forEach((el, i) =>
          gsap.to(el, { y: gsap.utils.random(-14, 14), x: gsap.utils.random(-8, 8), rotate: gsap.utils.random(-2, 2), duration: gsap.utils.random(2.6, 4), ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.2 }),
        );

        const toCenter = (el: HTMLElement, axis: "x" | "y") =>
          axis === "x"
            ? stage.offsetWidth / 2 - (el.offsetLeft + el.offsetWidth / 2)
            : stage.offsetHeight / 2 - (el.offsetTop + el.offsetHeight / 2);

        // Entry: fragments and headline arrive while the section scrolls in, so the pin never opens empty.
        gsap
          .timeline({ scrollTrigger: { trigger: root.current, start: "top 85%", end: "top top", scrub: 1 } })
          .from(frags, { opacity: 0, scale: 0.7, y: 80, filter: "blur(8px)", stagger: 0.05, ease: ease.soft })
          .from(q("[data-head] > *"), { y: 50, opacity: 0, stagger: 0.08 }, 0.2);

        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "+=200%", scrub: 1, pin: true, invalidateOnRefresh: true },
          })
          .to({}, { duration: 0.25 })
          .addLabel("collapse")
          .to(q("[data-head]"), { opacity: 0, y: -40, filter: "blur(10px)", duration: 0.25 }, "collapse")
          .to(frags, { x: (_, el) => toCenter(el, "x"), y: (_, el) => toCenter(el, "y"), rotate: 0, scale: 0.15, opacity: 0, duration: 0.45, ease: "power3.in", stagger: 0.02 }, "collapse")
          .fromTo(q("[data-flash]"), { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1.6, duration: 0.18, ease: "power2.out" }, "collapse+=0.42")
          .to(q("[data-flash]"), { opacity: 0, scale: 2.4, duration: 0.3 }, ">")
          .from(q("[data-brand]"), { scale: 0.3, opacity: 0, filter: "blur(16px)", duration: 0.35, ease: ease.out }, "collapse+=0.45")
          .from(q("[data-brand-line]"), { y: 24, opacity: 0, duration: 0.25 }, ">-0.1")
          .to({}, { duration: 0.2 });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-labelledby="chaos-title" className="relative h-svh overflow-hidden">
      <div data-stage className="absolute inset-0 mx-auto max-w-7xl">
        {fragments.map((f, i) => (
          <div
            key={i}
            data-frag
            aria-hidden
            className={cn(
              "absolute left-[var(--mx)] top-[var(--my)] origin-top-left md:left-[var(--x)] md:top-[var(--y)] md:origin-center",
              !f.mobile && "hidden md:block",
              "max-md:scale-[0.72]",
            )}
            style={
              {
                "--x": `${f.x}%`,
                "--y": `${f.y}%`,
                "--mx": `${f.mx ?? f.x}%`,
                "--my": `${f.my ?? f.y}%`,
                rotate: `${f.r}deg`,
              } as React.CSSProperties
            }
          >
            <div data-float>{f.node}</div>
          </div>
        ))}

        <div data-flash aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -ml-40 -mt-40 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(124_124_255/0.9),rgb(91_91_246/0.25),transparent)] opacity-0" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center motion-reduce:justify-end motion-reduce:pb-[12vh]">
          <div data-brand className="flex items-center gap-4">
            <LogoMark className="size-16 drop-shadow-[0_0_40px_rgb(91_91_246/0.8)] sm:size-20" />
            <span className="font-display text-5xl font-bold tracking-[-0.04em] sm:text-7xl">GrowDesk</span>
          </div>
          <p data-brand-line className="mt-6 text-lg text-fg-muted sm:text-xl">
            One workspace for every customer.
          </p>
        </div>
      </div>

      <div data-head className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center motion-reduce:pb-[25vh]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-fg-faint">Sound familiar?</p>
        <h2 id="chaos-title" className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em]">
          Customer management shouldn&apos;t feel like a second job.
        </h2>
      </div>
    </section>
  );
}
