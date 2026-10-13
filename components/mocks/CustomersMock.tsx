import { Search, SlidersHorizontal } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { AppFrame, Card, StagePill } from "./AppFrame";

/** Replica of the GrowDesk customer list. Demo data only. */
export function CustomersMock({ industry }: { industry: Industry }) {
  const { terms } = industry;
  return (
    <AppFrame industry={industry} active="customers">
      <div className="flex items-end justify-between">
        <div>
          <h3 data-swap className="font-display text-[26px] font-bold tracking-tight">
            {terms.customers}
          </h3>
          <p data-swap className="mt-1 text-sm text-app-muted">
            {industry.stages.reduce((s, x) => s + x.count, 0)} total · {industry.stages.length} stages
          </p>
        </div>
        <span className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white">+ Add</span>
      </div>

      <div className="mt-5 flex gap-3">
        <div className="flex h-10 flex-1 items-center gap-2 rounded-xl border border-app-line bg-white px-3 text-sm text-app-muted">
          <Search className="size-4" /> Search name or phone
        </div>
        <div className="flex h-10 items-center gap-2 rounded-xl border border-app-line bg-white px-3 text-sm text-app-muted">
          <SlidersHorizontal className="size-4" /> Filters
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {industry.stages.map((s, i) => (
          <span
            key={s.name}
            data-swap
            className={`rounded-full border px-3 py-1.5 text-xs font-medium ${i === 0 ? "border-transparent bg-app-fg text-white" : "border-app-line bg-white text-app-muted"}`}
          >
            {s.name} · {s.count}
          </span>
        ))}
      </div>

      <Card className="mt-4 overflow-hidden">
        <div className="grid grid-cols-[1.3fr_1.3fr_1fr_0.9fr_0.8fr] gap-4 border-b border-app-line bg-app-surface-muted/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-app-muted">
          <span>Name</span>
          <span data-swap>{terms.service}</span>
          <span>Phone</span>
          <span>Stage</span>
          <span>Source</span>
        </div>
        {industry.customers.map((c) => (
          <div key={c.name} data-row data-swap className="grid grid-cols-[1.3fr_1.3fr_1fr_0.9fr_0.8fr] items-center gap-4 border-b border-app-line px-5 py-3.5 text-sm last:border-0">
            <span className="flex items-center gap-3 font-semibold">
              <span className="flex size-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--brand)_12%,white)] text-xs font-bold text-brand">
                {c.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </span>
              {c.name}
            </span>
            <span className="truncate text-app-muted">{c.service}</span>
            <span className="tabular-nums text-app-muted">{c.phone}</span>
            <span>
              <StagePill {...industry.stages[c.stage]} />
            </span>
            <span className="text-app-muted">{c.source}</span>
          </div>
        ))}
      </Card>
    </AppFrame>
  );
}
