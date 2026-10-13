"use client";

import { useRef, type ElementType } from "react";
import { cn } from "@/lib/cn";
import { ease, gsap, MOTION_OK, useGSAP } from "./gsap";

interface RevealTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** "scroll" reveals when scrolled into view; "load" plays on mount. */
  trigger?: "scroll" | "load";
  delay?: number;
  /** Applied to each word — use for gradient text, which can't paint through transformed children. */
  wordClassName?: string;
}

/** Word-by-word masked reveal. Screen readers get the plain string. */
export function RevealText({ text, as: Tag = "h2", className, trigger = "scroll", delay = 0, wordClassName }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current!.querySelectorAll("[data-word]"), {
          yPercent: 110,
          rotate: 4,
          opacity: 0,
          duration: 1.1,
          ease: ease.out,
          stagger: 0.06,
          delay,
          scrollTrigger: trigger === "scroll" ? { trigger: ref.current, start: "top 85%" } : undefined,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden className="-mb-[0.1em] inline-block overflow-hidden pb-[0.18em] align-bottom">
          <span data-word className={cn("inline-block will-change-transform", wordClassName)}>
            {word}
          </span>
          {" "}
        </span>
      ))}
    </Tag>
  );
}
