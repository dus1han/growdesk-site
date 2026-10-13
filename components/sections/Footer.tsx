import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-4 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">The CRM shaped around your business — customers, bookings and follow-ups in one place.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-fg-muted">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
          <a href={site.cta.href} className="transition-colors hover:text-fg">
            Contact
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-fg-faint">© {new Date().getFullYear()} GrowDesk. All rights reserved.</p>
    </footer>
  );
}
