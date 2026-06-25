import Link from "next/link";
import { withLocale, Locale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function HeroSection({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  const isFa = locale === "fa";

  const highlights = isFa
    ? [
      "UI سریع و مقیاس‌پذیر (Performance-first)",
      "معماری کامپوننت تمیز و قابل نگهداری",
      "API + دیتابیس‌فهم؛ تصمیم‌های مبتنی بر داده",
      "Workflow حرفه‌ای با AI (تحلیل، کدنویسی، تست)",
    ]
    : [
      "Performance-first, scalable UI",
      "Clean, maintainable component architecture",
      "API & database-aware, data-informed decisions",
      "Pro AI workflow (analysis, coding, testing)",
    ];
  const quickStats = [
    { value: "4+", label: isFa ? "سال تجربه" : "Years" },
    { value: "20+", label: isFa ? "پروژه" : "Projects" },
    { value: "100+", label: isFa ? "فیچر" : "Features" },
  ];

  return (
    <section className="section-spacing">
      <div className="app-shell">
        <Reveal>
          <div className="surface relative overflow-hidden p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_6%,rgba(255,255,255,0.09),transparent_34%),radial-gradient(circle_at_86%_4%,rgba(148,84,171,0.34),transparent_38%),radial-gradient(circle_at_70%_78%,rgba(148,84,171,0.16),transparent_34%)]" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div className="max-w-3xl space-y-5">
                <span className="badge-pro inline-flex items-center gap-2">
                  <SolarIcon name="solar:magic-stick-3-bold-duotone" size={ICON_SIZE.sm} />
                  {dictionary.hero.badge}
                </span>

                <h1 className="text-3xl font-semibold leading-tight md:text-5xl">{dictionary.hero.title}</h1>
                <p className="max-w-2xl leading-8 muted md:text-lg">{dictionary.hero.subtitle}</p>


                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {/* <Link href={withLocale(locale, "/works")} className="btn-pro focus-ring inline-flex items-center gap-2">
                    <SolarIcon name="solar:folder-with-files-bold-duotone" size={ICON_SIZE.sm} />
                    {dictionary.hero.primaryCta}
                  </Link> */}
                  <Link href={withLocale(locale, "/contact")} className="btn-pro focus-ring inline-flex items-center gap-2">
                    <SolarIcon name="solar:letter-bold-duotone" size={ICON_SIZE.sm} />
                    {dictionary.hero.secondaryCta}
                  </Link>
                </div>
              </div>

              <aside className="border-glow-trace surface-hover relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[linear-gradient(160deg,var(--surface-soft)_0%,var(--surface-soft-2)_100%)] p-4 md:p-5">
                <p className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[var(--brand)]">
                  <SolarIcon name="solar:chart-square-bold-duotone" size={ICON_SIZE.xs} />
                  {isFa ? "نمای سریع" : "Quick Snapshot"}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {quickStats.map((item) => (
                    <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2 py-3 text-center">
                      <p className="text-base font-semibold text-[var(--heading)] md:text-lg">{item.value}</p>
                      <p className="mt-1 text-[11px] muted">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
                  <p className="text-xs leading-6 muted">
                    {isFa
                      ? "تمرکز من: ساخت تجربه‌های کاربری روان، با زیرساخت فنی محکم و قابل توسعه است."
                      : "My focus is building smooth user experiences with a solid, scalable technical foundation."}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted"
                    >
                      <SolarIcon name="solar:check-circle-bold-duotone" size={ICON_SIZE.xs} className="text-[var(--brand)]" />
                      {item}
                    </span>
                  ))}
                </div>

              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
