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
  Mail,
  FileText,
  FileSignature,
  Shield,
  ScrollText,
  MessageSquareQuote,
} from "lucide-react";

export default function Footer() {
  const { t, lang } = useI18n() as {
    t: (k: string) => string;
    lang: "ru" | "kz";
  };

  const year = new Date().getFullYear();
  const rights = lang === "kz" ? "Барлық құқықтар қорғалған." : "Все права защищены.";
  const whatsappLabel = lang === "kz" ? "WhatsApp-қа жазу" : "Написать в WhatsApp";
  const navTitle = lang === "kz" ? "Навигация" : "Навигация";
  const contactsTitle = lang === "kz" ? "Байланыс" : "Контакты";
  const docsTitle = lang === "kz" ? "Құжаттар" : "Документы";
  const privacyTagline =
    lang === "kz"
      ? "Құпиялылықты құрметтейміз · Кеңес тегін"
      : "Уважаем конфиденциальность · Консультация бесплатна";

  // кликабельная карта: если в SITE нет mapUrl — строим по адресу
  const mapUrl = (SITE as any).mapUrl || `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`;

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
          <div className="rail-content grid gap-10 md:grid-cols-4">
            {/* Бренд + копирайт-текст */}
            <div>
              <div className="text-lg font-extrabold tracking-tight">
                Prime <span className="text-[var(--pc-gold)]">Capital</span>
              </div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">
                {t("footer_copy")}
              </p>
              <div className="mt-4 h-[3px] w-24 rounded-full bg-[var(--pc-gold)]/80" />

              {/* быстрые “юридические” ссылки (дубли сверху в отдельном блоке ниже) */}
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="/requisites"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                    aria-label={t("nav_requisites")}
                  >
                    <ScrollText className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_requisites")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offer"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                    aria-label={t("nav_offer")}
                  >
                    <FileText className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_offer")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                    aria-label={t("nav_privacy")}
                  >
                    <Shield className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consent"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                    aria-label={lang === "ru" ? "Согласие на обработку ПД" : "Жеке деректерді өңдеуге келісім"}
                  >
                    <FileSignature className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {lang === "ru" ? "Согласие на обработку ПД" : "Жеке деректерді өңдеуге келісім"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Навигация */}
            <nav className="text-sm">
              <div className="font-semibold mb-3">{navTitle}</div>
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
                    <MessageSquareQuote className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("reviews")}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Документы (повтор, но с отдельными иконками и в своей колонке) */}
            <nav className="text-sm">
              <div className="font-semibold mb-3">{docsTitle}</div>
              <ul className="space-y-2">
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
                    href="/offer"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <FileText className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_offer")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <Shield className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {t("nav_privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consent"
                    className="group inline-flex items-center gap-2 hover:text-[var(--pc-gold)]"
                  >
                    <FileSignature className="h-4 w-4 text-[var(--pc-gold)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    {lang === "ru" ? "Согласие на обработку ПД" : "Жеке деректерді өңдеуге келісім"}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Контакты */}
            <div className="text-sm">
              <div className="font-semibold mb-3">{contactsTitle}</div>

              <div className="flex items-start gap-2 text-black/80 dark:text-white/85">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--pc-gold)]" />
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[var(--pc-gold)]"
                  aria-label={SITE.address}
                >
                  {SITE.address}
                </a>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--pc-gold)]" />
                <a
                  href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}
                  className="hover:text-[var(--pc-gold)]"
                  aria-label={SITE.phoneMain}
                >
                  {SITE.phoneMain}
                </a>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--pc-gold)]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[var(--pc-gold)]"
                  aria-label={SITE.email}
                >
                  {SITE.email}
                </a>
              </div>

              {/* Кнопка WhatsApp */}
              <div className="mt-4">
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener"
                  aria-label={whatsappLabel}
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
            <div className="opacity-80">{privacyTagline}</div>
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
