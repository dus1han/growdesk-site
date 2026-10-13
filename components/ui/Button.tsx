"use client";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/cn";
import { gsap } from "@/components/motion/gsap";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}

/** CTA link with a restrained magnetic pull and arrow nudge (desktop pointer only). */
export function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current!.getBoundingClientRect();
    gsap.to(ref.current, {
      x: (e.clientX - r.left - r.width / 2) * 0.18,
      y: (e.clientY - r.top - r.height / 2) * 0.25,
      duration: 0.4,
      ease: "power3.out",
    });
  };
  const onLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-[background-color,box-shadow,color] duration-300",
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_0_0_var(--site-accent-glow)] hover:shadow-[0_0_40px_4px_var(--site-accent-glow)]"
          : "text-fg ring-1 ring-hairline hover:bg-white/[0.06] hover:ring-white/20",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </a>
  );
}
