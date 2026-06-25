import Link from "next/link";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";
import { Locale, withLocale } from "@/lib/i18n/config";

export function ContactSection({
  dictionary,
  locale,
}: {
  dictionary: SiteDictionary;
  locale: Locale;
}) {
  return (
    <section className="section-spacing">
      <div className="app-shell space-y-5">
        <Reveal>
          <div className="surface surface-hover p-6 md:p-8">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
                  <SolarIcon name="solar:chat-round-like-bold-duotone" size={30} className="shrink-0 text-[var(--brand)]" />
                  {dictionary.contact.title}
                </h2>
                <p className="mt-2 text-base text-[var(--text)] md:text-lg">{dictionary.contact.subtitle}</p>
                <p className="mt-3 max-w-3xl leading-8 muted">{dictionary.contact.body}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {dictionary.contact.availability}
                  </span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {dictionary.contact.responseTime}
                  </span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs muted">
                    {dictionary.contact.location}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <a href={`mailto:${dictionary.contact.email}`} className="btn-pro focus-ring inline-flex items-center gap-2">
                    <SolarIcon name="solar:letter-bold-duotone" size={ICON_SIZE.sm} />
                    {dictionary.contact.primaryCta}
                  </a>
                  {/* <Link href={withLocale(locale, "/works")} className="btn-ghost focus-ring inline-flex items-center gap-2">
                    <SolarIcon name="solar:folder-with-files-bold-duotone" size={ICON_SIZE.sm} />
                    {dictionary.contact.secondaryCta}
                  </Link> */}
                </div>
              </div>

              <div className="space-y-2">
                {dictionary.contact.channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="surface-hover inline-flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--brand)]">
                      <SolarIcon name={channel.icon} size={ICON_SIZE.sm} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs muted">{channel.label}</span>
                      <span className="block truncate text-sm text-[var(--text)]">{channel.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
