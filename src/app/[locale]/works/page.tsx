import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildLocaleMetadata } from "@/lib/seo/metadata";
// import { PageIntro } from "@/components/sections/PageIntro";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";

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
    title: dictionary.nav.works,
    description: dictionary.projects.description,
    path: "/works",
    noIndex: true,
  });
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }
  notFound();
}
