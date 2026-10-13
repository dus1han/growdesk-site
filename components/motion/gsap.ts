"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ease = {
  out: "expo.out",
  inOut: "power3.inOut",
  soft: "power2.out",
} as const;

/** Media query under which motion runs. Elements' natural (CSS) state is the reduced-motion state. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 768px)";

export { gsap, ScrollTrigger, useGSAP };
