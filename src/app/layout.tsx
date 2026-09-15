import type { Metadata } from "next";
import "@fontsource/bodoni-moda/500.css";
import "@fontsource/bodoni-moda/600.css";
import "@fontsource/bodoni-moda/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "BABSJIDDS | Travelling & Chandelling",
  description:
    "BABSJIDDS Services Nigeria Limited — visa and travel assistance, and ship chandelling supplies for vessels calling at Nigerian ports.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-ink font-body text-porcelain antialiased">
        {children}
      </body>
    </html>
  );
}
