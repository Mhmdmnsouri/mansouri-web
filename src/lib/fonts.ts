import localFont from "next/font/local";

export const vazirmatn = localFont({
  src: [
    {
      path: "../../public/assets/fonts/fa/Vazirmatn[wght].woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-fa",
  display: "swap",
  preload: true,
});

export const sora = localFont({
  src: [
    {
      path: "../../public/assets/fonts/en/Sora-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/en/Sora-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/en/Sora-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-en",
  display: "swap",
  preload: true,
});
