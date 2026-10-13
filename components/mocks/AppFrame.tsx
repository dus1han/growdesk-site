import { CalendarDays, CreditCard, LayoutDashboard, Lock, Settings2, Users } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import type { Industry } from "@/lib/industries";

export type Screen = "dashboard" | "customers" | "bookings" | "payments" | "administration";

/**
 * Window chrome + sidebar replica of the GrowDesk app shell
 * (BasicCRM components/layout/sidebar.tsx, nav-items.ts).
 */
export function AppFrame({
  industry,
  active = "dashboard",
  children,
  className,
}: {
  industry: Industry;
  active?: Screen;
  children: React.ReactNode;
  className?: string;
}) {
  const nav: { id: Screen; label: string; icon: typeof Users }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "customers", label: industry.terms.customers, icon: Users },
    { id: "bookings", label: industry.terms.bookings, icon: CalendarDays },
    { id: "payments", label: "Payments", icon: CreditCard },
  ];
  const isDefault = industry.id === "clinic";

  return (
    <div
      className={cn("app-ui flex h-full w-full flex-col overflow-hidden rounded-[18px] bg-app-bg", className)}
      style={{ ["--brand" as string]: industry.accent }}
    >
      {/* Window bar */}
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-app-line bg-white px-4">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex h-6 w-72 items-center justify-center gap-1.5 rounded-md bg-app-surface-muted text-[11px] text-app-muted">
          <Lock className="size-3" />
          <span data-swap>{industry.brand.toLowerCase().replace(/\s+/g, "")}.app</span>
        </div>
        <span className="w-12" />
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <aside className="flex w-[232px] shrink-0 flex-col border-r border-app-line bg-white">
          <div className="flex h-16 items-center gap-3 pl-5">
            {isDefault ? (
              <LogoMark className="size-9" />
            ) : (
              <span data-swap className="flex size-9 items-center justify-center rounded-xl bg-brand font-display text-base font-bold text-white">
                {industry.initial}
              </span>
            )}
            <p data-swap className="truncate font-display text-[17px] font-bold tracking-tight">
              {industry.brand}
            </p>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-4">
            {nav.map(({ id, label, icon: Icon }) => (
              <div
                key={id}
                className={cn(
                  "relative flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium",
                  id === active ? "text-brand" : "text-app-muted",
                )}
              >
                {id === active && <span className="absolute inset-0 rounded-xl bg-brand opacity-[0.09]" />}
                <Icon className="relative size-[18px]" />
                <span data-swap className="relative">
                  {label}
                </span>
              </div>
            ))}
            <p className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-app-muted/70">Management</p>
            <div className="flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-app-muted">
              <Settings2 className="size-[18px]" />
              Administration
            </div>
          </nav>
          <div className="flex items-center gap-3 border-t border-app-line p-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-app-surface-muted text-xs font-semibold text-app-muted">
              {industry.terms.staff.replace("Dr. ", "").replace("Coach ", "").slice(0, 2).toUpperCase()}
            </span>
            <div className="min-w-0">
              <p data-swap className="truncate text-sm font-semibold">
                {industry.terms.staff}
              </p>
              <p className="text-xs text-app-muted">Admin</p>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-hidden p-7">{children}</main>
      </div>
    </div>
  );
}

export function StagePill({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{ backgroundColor: `${color}1a`, color }}
    >
      <span className="size-1.5 rounded-full" style={{ backgroundColor: color }} />
      {name}
    </span>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-app-line bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04),0_4px_16px_-4px_rgb(15_23_42/0.06)]", className)}>
      {children}
    </div>
  );
}
