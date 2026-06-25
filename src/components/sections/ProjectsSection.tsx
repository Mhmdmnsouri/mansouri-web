import Link from "next/link";
import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function ProjectsSection({
  locale,
  dictionary,
  limit,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
  limit?: number;
}) {
  const isFa = locale === "fa";
  const items = typeof limit === "number" ? dictionary.projects.items.slice(0, limit) : dictionary.projects.items;

  return (
    <section className="section-spacing">
      <div className="app-shell space-y-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
                <SolarIcon name="solar:case-minimalistic-bold-duotone" size={30} className="text-[var(--brand)]" />
                {dictionary.projects.title}
              </h2>
              <p className="mt-2 text-sm muted md:text-base">{dictionary.projects.description}</p>
            </div>
            {limit ? (
              <Link href={withLocale(locale, "/works")} className="btn-pro focus-ring inline-flex items-center gap-2">
                {dictionary.projects.viewAll}
                <SolarIcon name={isFa ? "solar:alt-arrow-left-line-duotone" : "solar:alt-arrow-right-line-duotone"} size={ICON_SIZE.sm} />
              </Link>
            ) : null}
          </div>
        </Reveal>

        <div className="grid-auto-fit">
          {items.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="surface surface-hover h-full p-5">
                <div className="mb-4 flex items-center justify-between text-xs muted">
                  <span>{project.year}</span>
                  <span className="inline-flex items-center gap-1">
                    <SolarIcon name="solar:code-square-bold-duotone" size={ICON_SIZE.xs} />
                    {project.tags[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm muted">{project.summary}</p>
                <Link
                  href={withLocale(locale, `/works/${project.slug}`)}
                  className="group mt-4 inline-flex items-center gap-1 text-sm text-[var(--brand)] transition-opacity hover:opacity-90"
                >
                  {dictionary.projects.openProject}
                  <span
                    className={`transition-transform duration-200 ${isFa ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
                  >
                    <SolarIcon
                      name={isFa ? "solar:arrow-left-line-duotone" : "solar:arrow-right-line-duotone"}
                      size={ICON_SIZE.sm}
                    />
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


