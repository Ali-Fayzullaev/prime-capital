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
      <body className="min-h-dvh antialiased">
        <Providers>
          <div className="page-lux min-h-dvh">
            <div className="rail">
              <main className="rail-content">{children}</main>
              <div className="rail-empty" />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
