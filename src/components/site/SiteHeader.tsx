"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { LocaleSwitcher } from "@/components/site/LocaleSwitcher";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export function SiteHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!headerRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const navItems: NavItem[] = [
    { href: withLocale(locale), label: dictionary.nav.home, icon: "solar:home-2-bold-duotone" },
    { href: withLocale(locale, "/about"), label: dictionary.nav.about, icon: "solar:user-rounded-bold-duotone" },
    // { href: withLocale(locale, "/works"), label: dictionary.nav.works, icon: "solar:case-minimalistic-bold-duotone" },
    { href: withLocale(locale, "/contact"), label: dictionary.nav.contact, icon: "solar:chat-round-dots-bold-duotone" },
  ];

  return (
    <header ref={headerRef} className="sticky top-3 z-50">
      <div className="app-shell">
        <div className="glass-nav flex h-16 items-center justify-between gap-3 rounded-2xl border border-[var(--border)] px-3 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.85)] md:px-4">
          <Link href={withLocale(locale)} className="flex min-w-0 flex-col">
            <strong className="truncate text-sm md:text-base">{dictionary.brand.name}</strong>
            <span className="truncate text-xs muted">{dictionary.brand.role}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 nav-link rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-[var(--surface-soft-2)] text-[var(--text)]"
                      : "muted hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  <SolarIcon name={item.icon} size={ICON_SIZE.sm} className={active ? "text-[var(--brand)]" : ""} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LocaleSwitcher locale={locale} label={dictionary.languageSwitchLabel} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <SolarIcon name="line-md:close-small" size={ICON_SIZE.lg} />
            ) : (
              <SolarIcon name="solar:hamburger-menu-linear" size={ICON_SIZE.lg} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        id="mobile-nav"
        className={`app-shell relative z-50 mt-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-[max-height,opacity,transform] duration-300 ease-[var(--ease-smooth)] md:hidden ${
          open ? "max-h-[420px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="grid gap-2 px-3 py-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`inline-flex items-center gap-2 nav-link rounded-lg px-3 py-2 text-sm transition ${
                  active
                    ? "bg-[var(--surface-soft-2)] text-[var(--text)]"
                    : "muted hover:bg-[var(--surface-soft)]"
                }`}
              >
                <SolarIcon name={item.icon} size={ICON_SIZE.sm} className={active ? "text-[var(--brand)]" : ""} />
                {item.label}
              </Link>
            );
          })}

          <div className="mt-1 flex items-center gap-2">
            <LocaleSwitcher locale={locale} label={dictionary.languageSwitchLabel} />
          </div>
        </div>
      </div>
    </header>
  );
}
