import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — кредитование и рефинансирование`,
  description:
    "Пониженные ставки, бесплатная консультация, сопровождение на каждом этапе.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className=" container mx-auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
