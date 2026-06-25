export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "fa" ? "rtl" : "ltr";
}

export function withLocale(locale: Locale, path = ""): string {
  const normalized = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `/${locale}${normalized}`;
}
