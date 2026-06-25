import Link from "next/link";
import { SiteDictionary } from "@/content/site";
import { Locale, withLocale } from "@/lib/i18n/config";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function TestimonialsSection({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  const isFa = locale === "fa";

  return (
    <section className="section-spacing">
      <div className="app-shell space-y-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
                <SolarIcon name="solar:verified-check-bold-duotone" size={30} className="text-[var(--brand)]" />
                {dictionary.testimonials.title}
              </h2>
              <p className="mt-2 text-sm muted md:text-base">{dictionary.testimonials.description}</p>
            </div>
            <Link href={withLocale(locale, "/contact")} className="btn-pro focus-ring inline-flex items-center gap-2">
              <SolarIcon name="solar:chat-round-line-duotone" size={ICON_SIZE.sm} />
              {isFa ? "شروع همکاری" : "Start Collaboration"}
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.testimonials.items.map((item, index) => (
            <Reveal key={`${item.name}-${item.company}`} delay={index * 0.05}>
              <div className="h-full">
                <article className="surface surface-hover flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-1 text-[var(--brand)]">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <SolarIcon key={star} name="solar:star-bold-duotone" size={ICON_SIZE.xs} />
                    ))}
                  </div>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {item.result}
                  </span>
                </div>

                <p className="mt-4 flex-1 leading-8 text-[var(--text)]">"{item.quote}"</p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--brand)]">
                    <SolarIcon name="solar:user-circle-bold-duotone" size={ICON_SIZE.md} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">{item.name}</p>
                    <p className="text-xs muted">
                      {item.role} - {item.company}
                    </p>
                  </div>
                </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
