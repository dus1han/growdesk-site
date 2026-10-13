import { cn } from "@/lib/cn";

/** GrowDesk sprout mark (same artwork as BasicCRM app/icon.svg). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("shrink-0", className)} aria-hidden>
      <defs>
        <linearGradient id="gd-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c7cff" />
          <stop offset="55%" stopColor="#5b5bf6" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#gd-logo)" />
      <path d="M12 27c0-7.5 5.5-13 15-14-0.6 9.4-6.1 15-14 15" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 28l8.5-8.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-8" />
      <span className="font-display text-[17px] font-bold tracking-tight text-fg">GrowDesk</span>
    </span>
  );
}
