import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL("/fa/about", SITE_URL).toString(),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutPage() {
  redirect("/fa/about");
}
