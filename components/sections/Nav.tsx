"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-500 ease-out sm:px-5",
          scrolled || open
            ? "h-14 border border-hairline bg-black/55 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl"
            : "h-16 border border-transparent",
        )}
      >
        <a href="#top" aria-label="GrowDesk home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cta.href}
            className="hidden h-9 items-center rounded-full bg-white px-4 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_24px_2px_var(--site-accent-glow)] sm:inline-flex"
          >
            {site.cta.label}
          </a>
          <button
            className="flex size-10 items-center justify-center rounded-full text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-4 top-[76px] rounded-2xl border border-hairline bg-black/80 p-3 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 font-display text-lg font-semibold text-fg">
              {l.label}
            </a>
          ))}
          <a
            href={site.cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 flex h-12 items-center justify-center rounded-xl bg-white font-semibold text-black"
          >
            {site.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
