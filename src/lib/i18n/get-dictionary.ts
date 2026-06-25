import { defaultLocale, Locale } from "@/lib/i18n/config";
import { siteDictionaries } from "@/content/site";

export function getDictionary(locale: Locale) {
  return siteDictionaries[locale] ?? siteDictionaries[defaultLocale];
}
