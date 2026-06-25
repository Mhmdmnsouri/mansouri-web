import type { MetadataRoute } from "next";
import { siteDictionaries } from "@/content/site";
import { locales, withLocale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/seo/metadata";

function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: absolute(withLocale(locale)),
      changeFrequency: "weekly",
      priority: 1,
    });

    pages.push({
      url: absolute(withLocale(locale, "/about")),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    pages.push({
      url: absolute(withLocale(locale, "/contact")),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
