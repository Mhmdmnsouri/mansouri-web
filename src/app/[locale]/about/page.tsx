import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildLocaleMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { AboutDetailSection } from "@/components/sections/AboutDetailSection";

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
    title: dictionary.nav.about,
    description: dictionary.about.body,
    path: "/about",
  });
}

export default async function AboutPage({
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: dictionary.nav.home, path: `/${locale}` },
              { name: dictionary.nav.about, path: `/${locale}/about` },
            ]),
          ),
        }}
      />

      <div className="pt-12 md:pt-16">
        <AboutDetailSection locale={locale} dictionary={dictionary} />
      </div>
    </>
  );
}
