import { notFound } from "next/navigation";
import { getDirection, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildLocaleMetadata } from "@/lib/seo/metadata";
import { DocumentLocaleSync } from "@/components/i18n/DocumentLocaleSync";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  return buildLocaleMetadata({ locale, dictionary });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const direction = getDirection(locale);

  return (
    <>
      <DocumentLocaleSync locale={locale} direction={direction} />
      <div dir={direction} className="flex min-h-screen min-h-dvh flex-col">
        <SiteHeader locale={locale} dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </div>
    </>
  );
}
