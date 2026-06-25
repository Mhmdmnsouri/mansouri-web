import Link from "next/link";
import { SiteDictionary } from "@/content/site";
import { Locale, withLocale } from "@/lib/i18n/config";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function AboutDetailSection({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="app-shell space-y-6 pb-14">
      <Reveal>
        <div className="surface surface-hover p-6 md:p-8">
          <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
            <SolarIcon name="solar:user-id-bold-duotone" size={30} className="text-[var(--brand)]" />
            {dictionary.about.title}
          </h2>
          <p className="mt-3 text-base text-[var(--text)] md:text-lg">{dictionary.about.subtitle}</p>
          <p className="mt-4 leading-8 muted">{dictionary.about.body}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {dictionary.about.stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.05}
            className={/فوکوس اصلی|primary focus/i.test(stat.label) ? "col-span-2 md:col-span-1" : ""}
          >
            <div className="surface surface-hover p-5">
              <p className="text-2xl font-semibold text-[var(--brand)] md:text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="surface surface-hover p-6">
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold md:text-xl">
              <SolarIcon name="solar:layers-minimalistic-bold-duotone" size={ICON_SIZE.lg} className="text-[var(--brand)]" />
              {locale === "fa" ? "حوزه‌های تمرکز" : "Focus Areas"}
            </h3>
            <ul className="mt-4 space-y-3">
              {dictionary.about.focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm muted">
                  <SolarIcon name="solar:check-circle-bold-duotone" size={ICON_SIZE.sm} className="mt-0.5 text-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface surface-hover p-6">
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold md:text-xl">
              <SolarIcon name="solar:compass-big-bold-duotone" size={ICON_SIZE.lg} className="text-[var(--brand)]" />
              {locale === "fa" ? "رویکرد کاری" : "Work Principles"}
            </h3>
            <ul className="mt-4 space-y-3">
              {dictionary.about.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm muted">
                  <SolarIcon name="solar:star-circle-bold-duotone" size={ICON_SIZE.sm} className="mt-0.5 text-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="surface surface-hover p-6 md:p-8">
          <h3 className="inline-flex items-center gap-2 text-lg font-semibold md:text-xl">
            <SolarIcon name="solar:route-bold-duotone" size={ICON_SIZE.lg} className="text-[var(--brand)]" />
            {dictionary.about.journeyTitle}
          </h3>
          <p className="mt-3 leading-8 muted">{dictionary.about.journey}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {dictionary.experience.items.slice(0, 3).map((exp) => (
              <span key={`${exp.company}-${exp.role}`} className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                {exp.role} - {exp.company}
              </span>
            ))}
          </div>
          <Link href={withLocale(locale, "/contact")} className="btn-pro focus-ring mt-6 inline-flex items-center gap-2">
            <SolarIcon name="solar:letter-bold-duotone" size={ICON_SIZE.sm} />
            {dictionary.about.cta}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
