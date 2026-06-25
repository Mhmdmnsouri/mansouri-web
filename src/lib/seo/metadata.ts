import type { Metadata } from "next";
import { Locale, withLocale } from "@/lib/i18n/config";
import { SiteDictionary } from "@/content/site";

export const SITE_URL = "https://mhmdmnsouri.ir";

function absolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildLocaleMetadata({
  locale,
  dictionary,
  title,
  description,
  path = "",
  noIndex = false,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const localizedPath = withLocale(locale, path);
  const pageTitle = title ?? dictionary.seo.title;
  const pageDescription = description ?? dictionary.seo.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: dictionary.seo.keywords,
    applicationName: dictionary.brand.name,
    authors: [{ name: dictionary.brand.name, url: absolute(withLocale(locale)) }],
    creator: dictionary.brand.name,
    publisher: dictionary.brand.name,
    category: "Portfolio",
    alternates: {
      canonical: localizedPath,
      languages: {
        fa: absolute(withLocale("fa", path)),
        en: absolute(withLocale("en", path)),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      url: absolute(localizedPath),
      title: pageTitle,
      description: pageDescription,
      siteName: dictionary.brand.name,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
  };
}
