import Link from "next/link";
import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function AvailabilitySection({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="section-spacing pt-0">
      <div className="app-shell">
        <Reveal>
          <div className="surface surface-hover overflow-hidden p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
                  <SolarIcon name="solar:clock-circle-bold-duotone" size={30} className="text-[var(--brand)]" />
                  {dictionary.availability.title}
                </h2>
                <p className="mt-2 max-w-2xl muted">{dictionary.availability.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--brand)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--brand)]">
                    {dictionary.availability.status}
                  </span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {dictionary.availability.nextSlot}
                  </span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {dictionary.availability.timezone}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 muted">{dictionary.availability.note}</p>
              </div>

              <div className="space-y-2">
                {dictionary.availability.modes.map((mode) => (
                  <div
                    key={mode}
                    className="inline-flex w-full items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3 text-sm"
                  >
                    <SolarIcon name="solar:check-circle-bold-duotone" size={ICON_SIZE.sm} className="text-[var(--brand)]" />
                    <span className="text-[var(--text)]">{mode}</span>
                  </div>
                ))}

                <Link href={withLocale(locale, "/contact")} className="btn-pro focus-ring mt-2 inline-flex w-full items-center justify-center gap-2">
                  <SolarIcon name="solar:calendar-mark-bold-duotone" size={ICON_SIZE.sm} />
                  {dictionary.availability.cta}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

