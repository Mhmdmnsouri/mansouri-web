import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function ExperienceSection({ dictionary }: { dictionary: SiteDictionary }) {
  return (
    <section className="section-spacing">
      <div className="app-shell space-y-6">
        <Reveal>
          <div>
            <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
              <SolarIcon
                name="solar:case-round-minimalistic-bold-duotone"
                size={30}
                className="text-[var(--brand)]"
              />
              {dictionary.experience.title}
            </h2>
            <p className="mt-2 text-sm muted md:text-base">{dictionary.experience.description}</p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {dictionary.experience.items.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05} className="h-full">
              <article className="surface surface-hover flex h-full flex-col p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.role} · <span className="text-[var(--brand)]">{item.company}</span>
                    </h3>
                    <p className="mt-1 text-xs muted">
                      {item.period} · {item.location}
                    </p>
                  </div>
                  {item.links?.length ? (
                    <div className="flex flex-wrap gap-2">
                        {item.links.map((link) => (
                          <a
                            key={`${item.company}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface-soft)] px-2 py-1 text-[11px] muted transition-all duration-300 ease-[var(--ease-smooth)] hover:border-[var(--brand)] hover:bg-[var(--surface-soft-2)] hover:text-[var(--text)]"
                          >
                            <SolarIcon
                              name="solar:link-round-angle-bold-duotone"
                              size={ICON_SIZE.xs}
                              className="text-[var(--brand)] transition-transform duration-300 ease-[var(--ease-smooth)] group-hover:rotate-44"
                            />
                            {link.label}
                          </a>
                        ))}
                    </div>
                  ) : null}
                </div>

                <p className="mt-3 text-sm muted">{item.summary}</p>

                <ul className="mt-3 space-y-2">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm muted">
                      <SolarIcon
                        name="solar:check-circle-bold-duotone"
                        size={ICON_SIZE.sm}
                        className="mt-0.5 text-[var(--brand)]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted"
                    >
                      {tech}
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
