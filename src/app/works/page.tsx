import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL("/fa", SITE_URL).toString(),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function WorksPage() {
  redirect("/fa");
}
