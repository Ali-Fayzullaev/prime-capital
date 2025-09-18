"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { t } = useI18n();

  const Nav = ({ onClick }: { onClick?: () => void }) => (
    <ul className="flex flex-col md:flex-row md:items-center gap-5 md:gap-7 text-sm">
      {[
        { href: "#services", label: t("nav_services") },
        { href: "#refi", label: t("nav_refi") },
        { href: "#contact", label: t("nav_contact") },
        { href: "#reviews", label: t("reviews") },
      ].map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            onClick={onClick}
            className="
              relative inline-flex items-center font-medium
              text-[var(--pc-ink-light)]/85 dark:text-[var(--pc-ink)]/85
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
              after:bg-[var(--pc-gold)] after:transition-all hover:after:w-full
              hover:text-[var(--pc-gold)]
            "
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50">
      {/* тонкая золотая нить */}
      <div className="h-0.5 w-full bg-[var(--pc-gold)]/80"></div>

      {/* стеклянная панель, светлая/тёмная */}
      <div
        className="
        px-2  lg:px-5
        backdrop-blur
        supports-[backdrop-filter]:bg-white/65 dark:supports-[backdrop-filter]:bg-white/10
        border-b border-black/10 dark:border-white/15
      "
      >
        <div className="rail">
          <div className="rail-content">
            <div className="h-[var(--header-h)] flex items-center justify-between gap-4 py-2">
              {/* logo & brand */}
              <Link href="#" className="group flex items-center gap-3">
                <Image
                  src="/logo.jpg"
                  alt="Prime Capital"
                  width={44}
                  height={44}
                  className="rounded-3xl ring-1 ring-black/10 dark:ring-white/15 bg-white/60 dark:bg-transparent p-0.5"
                />
                <span className="font-extrabold text-lg tracking-tight text-[var(--pc-ink-light)] dark:text-[var(--pc-ink)]">
                  Prime <span className="text-[var(--pc-gold)]">Capital</span>
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-6">
                <Nav />
              </nav>

              {/* Actions desktop */}
              <div className="hidden sm:flex items-center gap-3">
                {/* в LIGHT — outline gold; в DARK — заливка gold */}
                <a
                  href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}
                  className="
                    inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                    border border-[var(--pc-gold)] text-[var(--pc-gold)]
                    hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                    transition-colors
                    dark:border-transparent dark:bg-[var(--pc-gold)] dark:text-[#2c1f56]
                    dark:hover:brightness-110
                  "
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phoneMain}
                </a>
                <LanguageToggle />
                <ThemeToggle />
              </div>

              {/* Mobile */}
              <div className="flex sm:hidden items-center gap-1">
                <LanguageToggle />
                <ThemeToggle />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Open menu"
                      className="text-[var(--pc-ink-light)] hover:bg-black/5 dark:text-[var(--pc-ink)] dark:hover:bg-white/10"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  {/* Sheet светлый/тёмный */}
                  <SheetContent
                    side="right"
                    className="
                      w-[320px]
                      bg-white/80 text-[var(--pc-ink-light)] backdrop-blur
                      border-l border-black/10
                      dark:bg-[#0F1527] dark:text-[var(--pc-ink)] dark:border-l-0
                    "
                  >
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Image
                          src="/logo.jpg"
                          alt="Prime Capital"
                          width={32}
                          height={32}
                          className="rounded-3xl ring-1 ring-black/10 dark:ring-white/15 bg-white/70 dark:bg-transparent p-0.5"
                        />
                        Prime Capital
                      </SheetTitle>
                    </SheetHeader>

                    <div className="mt-8 space-y-8 px-3">
                      <Nav
                        onClick={() =>
                          (document?.activeElement as HTMLElement)?.blur()
                        }
                      />
                      <a
                        href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}
                        className="
                          inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold
                          border border-[var(--pc-gold)] text-[var(--pc-gold)]
                          hover:bg-[var(--pc-gold)] hover:text-[#2c1f56] transition-colors
                          dark:border-transparent dark:bg-[var(--pc-gold)] dark:text-[#2c1f56]
                          dark:hover:brightness-110
                        "
                      >
                        <Phone className="h-4 w-4" />
                        {SITE.phoneMain}
                      </a>
                      <div className="text-xs/relaxed opacity-80 pt-4 border-t border-black/10 dark:border-white/15">
                        {SITE.address}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          <div className="rail-empty" />
        </div>
      </div>
    </header>
  );
}
