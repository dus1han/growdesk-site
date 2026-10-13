import { Bell, CalendarClock, CalendarDays, UserRoundSearch } from "lucide-react";
import type { BookingStatus, Industry } from "@/lib/industries";
import { AppFrame, Card } from "./AppFrame";

const statusStyle: Record<BookingStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-700",
  "Checked in": "bg-sky-50 text-sky-700",
  Booked: "bg-[color-mix(in_srgb,var(--brand)_10%,white)] text-brand",
};

/** Replica of the GrowDesk dashboard (BasicCRM components/dashboard/*). Demo data only. */
export function DashboardMock({ industry }: { industry: Industry }) {
  const { stats, terms } = industry;
  const cards = [
    { label: terms.bookingsToday, value: stats.today, note: stats.todayNote, icon: CalendarDays, tone: "text-brand", noteTone: "text-emerald-600" },
    { label: "Upcoming", value: stats.upcoming, note: stats.upcomingNote, icon: CalendarClock, tone: "text-sky-600" },
    { label: "Follow-ups", value: stats.followUps, note: stats.followUpsNote, icon: Bell, tone: "text-amber-600", noteTone: stats.followUpsNote.includes("overdue") ? "text-red-600" : undefined },
    { label: `Potential ${terms.customers}`, value: stats.potential, note: stats.potentialNote, icon: UserRoundSearch, tone: "text-teal-600", noteTone: stats.potentialNote.startsWith("+") ? "text-emerald-600" : undefined },
  ];
  const stageTotal = industry.stages.reduce((s, x) => s + x.count, 0);

  return (
    <AppFrame industry={industry} active="dashboard">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-app-muted">Thursday, 2 October</p>
          <h3 data-swap className="mt-1 font-display text-[26px] font-bold tracking-tight">
            Good morning, {terms.staff}
          </h3>
        </div>
        <span className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_var(--brand)]">
          + New booking
        </span>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {cards.map((c) => (
          <Card key={c.label} className="relative overflow-hidden p-5">
            <div className="flex items-start justify-between gap-2">
              <p data-swap className="text-sm font-medium text-app-muted">
                {c.label}
              </p>
              <span className={`flex size-9 items-center justify-center rounded-xl bg-white shadow-sm ${c.tone}`}>
                <c.icon className="size-[18px]" />
              </span>
            </div>
            <p data-swap data-count={c.value} className="mt-4 font-display text-3xl font-bold tracking-tight">
              {c.value}
            </p>
            <p data-swap className={`mt-1 text-xs text-app-muted ${c.noteTone ?? ""}`}>
              {c.note}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-[1.45fr_1fr] gap-4">
        <Card className="p-5">
          <p data-swap className="font-display text-[15px] font-semibold">
            {terms.bookingsToday}
          </p>
          <ul className="mt-3 divide-y divide-app-line">
            {industry.today.map((b) => (
              <li key={b.time + b.name} data-swap className="flex items-center gap-4 py-3">
                <span className="w-12 font-display text-sm font-semibold tabular-nums">{b.time}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{b.name}</span>
                  <span className="block truncate text-xs text-app-muted">{b.service}</span>
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[b.status]}`}>{b.status}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <p data-swap className="font-display text-[15px] font-semibold">
              Potential {terms.customers}
            </p>
            <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-app-surface-muted">
              {industry.stages.map((s) => (
                <span key={s.name} data-bar style={{ width: `${(s.count / stageTotal) * 100}%`, backgroundColor: s.color }} />
              ))}
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {industry.stages.map((s) => (
                <li key={s.name} data-swap className="flex items-center gap-2 text-xs">
                  <span className="size-2 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="flex-1 text-app-muted">{s.name}</span>
                  <span className="font-semibold tabular-nums">{s.count}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <p className="font-display text-[15px] font-semibold">Follow-ups</p>
            <ul className="mt-2 space-y-2.5">
              {industry.followUps.map((f) => (
                <li key={f.name} data-swap className="flex items-center justify-between text-sm">
                  <span className="font-medium">{f.name}</span>
                  <span className={`text-xs ${f.overdue ? "font-medium text-red-600" : "text-app-muted"}`}>{f.when}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}
