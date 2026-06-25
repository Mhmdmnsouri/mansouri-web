import Link from "next/link";
import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function ProcessSection({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="section-spacing">
      <div className="app-shell space-y-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
                <SolarIcon name="solar:route-bold-duotone" size={30} className="text-[var(--brand)]" />
                {dictionary.process.title}
              </h2>
              <p className="mt-2 text-sm muted md:text-base">{dictionary.process.description}</p>
            </div>
            <Link href={withLocale(locale, "/contact")} className="btn-pro focus-ring inline-flex items-center gap-2">
              <SolarIcon name="solar:rocket-bold-duotone" size={ICON_SIZE.sm} />
              {dictionary.process.cta}
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {dictionary.process.items.map((step, index) => (
            <Reveal key={`${step.phase}-${step.title}`} delay={index * 0.06}>
              <article className="surface surface-hover h-full p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--brand)]">{step.phase}</p>
                    <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  </div>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {step.duration}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 muted">{step.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {step.outputs.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted"
                    >
                      <SolarIcon name="solar:check-circle-bold-duotone" size={ICON_SIZE.xs} className="text-[var(--brand)]" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

