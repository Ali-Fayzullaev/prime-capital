"use client";

import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
  Copyright,
  ScrollText,
  Mail,
} from "lucide-react";

export default function Footer() {
  const { t, lang } = useI18n() as {
    t: (k: string) => string;
    lang: "ru" | "kz";
  };
  const year = new Date().getFullYear();
  const rights =
    lang === "kz" ? "Барлық құқықтар қорғалған." : "Все права защищены.";
  const whatsappLabel =
    lang === "kz" ? "WhatsApp-қа жазу" : "Написать в WhatsApp";

  return (
    <footer className="mt-16">
      {/* верхняя золотая нить */}
      <div className="h-0.5 w-full bg-[var(--pc-gold)]/80" />

      {/* стеклянный блок футера */}
      <div
        className="
          border-t border-black/10 bg-white/70 backdrop-blur px-5 md:px-15
          dark:border-white/15 dark:bg-white/10
        "
      >
        <div className="rail py-10">
          <div className="rail-content grid gap-8 md:grid-cols-3">
            {/* Бренд + копирайт-текст */}
            <div>
              <div className="text-lg font-extrabold tracking-tight">
                Prime <span className="text-[var(--pc-gold)]">Capital</span>
              </div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">
                {t("footer_copy")}
              </p>
              <div className="mt-4 h-[3px] w-24 rounded-full bg-[var(--pc-gold)]/80" />
              <ul className=" space-y-2 mt-3">
                 <li>
                  <Link
                    href="/requisites"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ScrollText className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_requisites")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ScrollText className="h-4 w-4 text-[var(--pc-gold)] group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offer"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ScrollText className="h-4 w-4 text-[var(--pc-gold)] group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_offer")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Быстрые ссылки */}
            <nav className="text-sm">
              <div className="font-semibold mb-3">
                {lang === "kz" ? "Навигация" : "Навигация"}
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ChevronRight className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#refi"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ChevronRight className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_refi")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ChevronRight className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_contact")}
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <ChevronRight className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("reviews")}
                  </a>
                </li>
               
              </ul>
            </nav>

            {/* Контакты */}
            <div className="text-sm">
              <div className="font-semibold mb-3">
                {lang === "kz" ? "Байланыс" : "Контакты"}
              </div>

              <div className="flex items-start gap-2 text-black/80 dark:text-white/85">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--pc-gold)]" />
                <span>{SITE.address}</span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--pc-gold)]" />
                <a
                  href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}
                  className="hover:text-[var(--pc-gold)]"
                >
                  {SITE.phoneMain}
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--pc-gold)]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[var(--pc-gold)]"
                >
                  {SITE.email}
                </a>
              </div>

              {/* Кнопка WhatsApp */}
              <div className="mt-4">
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2 rounded-full px-3 py-1.5
                    border border-[var(--pc-gold)] text-[var(--pc-gold)]
                    hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                    transition-colors text-sm font-semibold
                  "
                >
                  <MessageCircle className="h-4 w-4" />
                  {whatsappLabel}
                </Link>
              </div>
            </div>
          </div>

          {/* нижняя строка */}
          <div className="rail-content mt-8 pt-6 border-t border-black/10 dark:border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-black/60 dark:text-white/70">
            <div className="inline-flex items-center gap-1">
              <Copyright className="h-3.5 w-3.5" />
              <span>
                {year} Prime Capital. {rights}
              </span>
            </div>
            <div className="opacity-80">
              {lang === "kz"
                ? "Құпиялылықты құрметтейміз · Кеңес тегін"
                : "Уважаем конфиденциальность · Консультация бесплатна"}
            </div>
          </div>
        </div>

        {/* правая пустая колонка rail */}
        <div className="rail">
          <div className="rail-empty" />
        </div>
      </div>
    </footer>
  );
}
