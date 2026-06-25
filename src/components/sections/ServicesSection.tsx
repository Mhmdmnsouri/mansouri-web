import Link from "next/link";
import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

function getServiceIcon(title: string) {
  const key = title.toLowerCase();

  if (key.includes("frontend") || key.includes("فرانت")) {
    return "solar:code-square-bold-duotone";
  }

  if (key.includes("backend") || key.includes("بک")) {
    return "solar:server-square-bold-duotone";
  }

  if (key.includes("ui") || key.includes("ux") || key.includes("design") || key.includes("طراحی")) {
    return "solar:palette-round-bold-duotone";
  }

  if (key.includes("seo") || key.includes("performance") || key.includes("بهینه")) {
    return "solar:chart-2-bold-duotone";
  }

  if (key.includes("business") || key.includes("کسب")) {
    return "solar:briefcase-bold-duotone";
  }

  return "solar:layers-bold-duotone";
}

export function ServicesSection({
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
                <SolarIcon name="solar:layers-bold-duotone" size={30} className="text-[var(--brand)]" />
                {dictionary.services.title}
              </h2>
              <p className="mt-2 text-sm muted md:text-base">{dictionary.services.description}</p>
            </div>
            <Link href={withLocale(locale, "/contact")} className="btn-pro focus-ring inline-flex items-center gap-2">
              <SolarIcon name="solar:rocket-bold-duotone" size={ICON_SIZE.sm} />
              {dictionary.services.cta}
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {dictionary.services.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="surface surface-hover h-full p-5 md:p-6">
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--brand)]">
                    <SolarIcon name={getServiceIcon(service.title)} size={ICON_SIZE.lg} />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <p
                  className="mt-2 text-sm leading-7 muted"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {service.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
