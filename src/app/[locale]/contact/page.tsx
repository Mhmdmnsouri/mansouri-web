import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildLocaleMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/components/sections/ContactSection";

export const dynamic = "force-static";

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
  return buildLocaleMetadata({
    locale,
    dictionary,
    title: dictionary.nav.contact,
    description: dictionary.contact.body,
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <div className="flex min-h-[calc(100dvh-12rem)] w-full items-center justify-center">
      <ContactSection dictionary={dictionary} locale={locale} />
    </div>
  );
}
