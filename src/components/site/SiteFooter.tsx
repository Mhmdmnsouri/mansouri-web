import { Locale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";

export function SiteFooter({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  const footerChannels = dictionary.contact.channels.filter(
    (channel) =>
      channel.href.startsWith("mailto:") ||
      channel.href.includes("linkedin.com") ||
      channel.href.includes("github.com"),
  );

  return (
    <footer className="mt-10 pb-4 text-sm muted">
      <div className="app-shell">
        <div className="glass-nav flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] px-4 py-4 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.85)] sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {dictionary.brand.name}. {dictionary.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            {footerChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="hover:text-[var(--text)]"
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
