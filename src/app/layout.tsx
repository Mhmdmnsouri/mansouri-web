import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo/metadata";
import { sora, vazirmatn } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamad Shahmansouri | Senior Frontend Engineer",
    template: "%s",
  },
  description: "Official website of Mohamad Shahmansouri (Mhmdmnsouri / Mansouri), Senior Frontend Engineer.",
  keywords: [
    "محمد شاه منصوری",
    "محمد منصوری",
    "منصوری",
    "شاه منصوری",
    "mansouri",
    "shahmansouri",
    "mhmdmnsouri",
    "senior frontend engineer",
    "frontend developer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/fav/icons8-code-lollipop-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/fav/icons8-code-lollipop-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/fav/icons8-code-lollipop-96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: [{ url: "/assets/fav/icons8-code-lollipop-32.png" }],
    apple: [{ url: "/assets/fav/icons8-code-lollipop-76.png", sizes: "76x76", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" suppressHydrationWarning>
      <body className={`${sora.variable} ${vazirmatn.variable} bg-app-bg text-app-text antialiased`}>{children}</body>
    </html>
  );
}
