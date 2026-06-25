"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n/config";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const target = locale === "fa" ? "en" : "fa";

  const href = useMemo(() => {
    if (!pathname || pathname === "/") {
      return `/${target}`;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return `/${target}`;
    }

    segments[0] = target;
    return `/${segments.join("/")}`;
  }, [pathname, target]);

  return (
    <Link
      href={href}
      className="focus-ring inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm muted transition hover:text-[var(--text)]"
      aria-label="Switch language"
    >
      <SolarIcon name="solar:global-bold-duotone" size={ICON_SIZE.sm} />
      {label}
    </Link>
  );
}
