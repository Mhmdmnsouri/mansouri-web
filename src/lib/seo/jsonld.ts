import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";
import { SITE_URL } from "@/lib/seo/metadata";

function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function personJsonLd(locale: Locale, dictionary: SiteDictionary) {
  const socialLinks = dictionary.contact.channels
    .map((channel) => channel.href)
    .filter((href) => href.startsWith("http"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dictionary.brand.name,
    alternateName: [
      "محمد شاه منصوری",
      "محمد منصوری",
      "منصوری",
      "شاه منصوری",
      "Mohamad Shahmansouri",
      "Mohamad Mansouri",
      "Mansouri",
      "Shahmansouri",
      "Mhmdmnsouri",
    ],
    givenName: "Mohamad",
    familyName: "Mansouri",
    jobTitle: dictionary.brand.role,
    url: absolute(withLocale(locale)),
    email: `mailto:${dictionary.contact.email}`,
    sameAs: socialLinks,
    knowsAbout: [
      "Frontend Development",
      "Senior Frontend Engineering",
      "UI/UX",
      "Next.js",
      "React",
      "Technical SEO",
    ],
  };
}

export function websiteJsonLd(locale: Locale, dictionary: SiteDictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dictionary.seo.title,
    alternateName: ["Mohamad Shahmansouri", "Mhmdmnsouri", "Mansouri"],
    description: dictionary.seo.description,
    url: absolute(withLocale(locale)),
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${absolute(withLocale(locale))}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}
