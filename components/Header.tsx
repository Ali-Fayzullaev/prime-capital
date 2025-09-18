"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container h-[var(--header-h)] flex items-center justify-between gap-4">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Prime Capital"
            width={44}
            height={44}
            className="rounded"
          />
          <span className="font-semibold text-lg">Prime Capital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:opacity-80">
            {t("nav_services")}
          </a>
          <a href="#refi" className="hover:opacity-80">
            {t("nav_refi")}
          </a>
          <a href="#contact" className="hover:opacity-80">
            {t("nav_contact")}
          </a>
        </nav>
        <div className="flex items-center gap-1">
          <a
            href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}
            className="hidden sm:flex items-center gap-2 px-3 text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>{SITE.phoneMain}</span>
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
