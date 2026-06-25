import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildLocaleMetadata } from "@/lib/seo/metadata";
import { personJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AvailabilitySection } from "@/components/sections/AvailabilitySection";
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
  return buildLocaleMetadata({ locale, dictionary });
}

export default async function LocaleHomePage({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale, dictionary)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(locale, dictionary)) }} />
      <HeroSection locale={locale} dictionary={dictionary} />
      <ServicesSection locale={locale} dictionary={dictionary} />
      <SkillsSection dictionary={dictionary} />
      <ExperienceSection dictionary={dictionary} />
      {/* <ProjectsSection locale={locale} dictionary={dictionary} limit={3} /> */}
      {/* <TestimonialsSection locale={locale} dictionary={dictionary} /> */}
      <AvailabilitySection locale={locale} dictionary={dictionary} />
      <ProcessSection locale={locale} dictionary={dictionary} />
      <ContactSection dictionary={dictionary} locale={locale} />
    </>
  );
}
