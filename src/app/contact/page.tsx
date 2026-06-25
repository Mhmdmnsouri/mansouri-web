import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL("/fa/contact", SITE_URL).toString(),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactPage() {
  redirect("/fa/contact");
}
