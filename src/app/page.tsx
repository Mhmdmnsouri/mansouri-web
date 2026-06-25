import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(`/${defaultLocale}`, SITE_URL).toString(),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function IndexPage() {
  redirect(`/${defaultLocale}`);
}
