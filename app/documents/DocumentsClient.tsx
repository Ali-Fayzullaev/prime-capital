// app/documents/DocumentsClient.tsx
"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, Download, FileText, ShieldCheck, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils"; // если нет utils/cn — замени на простую конкатенацию классов

type DocItem = {
  id: string;
  href: string;
  ext: string;
  title_ru: string;
  title_kz: string;
  note_ru: string;
  note_kz: string;
};

export default function DocumentsClient({ docs }: { docs: DocItem[] }) {
  const { lang } = useI18n() as { lang: "ru" | "kz" };

  const title = lang === "kz" ? "Құжаттар" : "Документы";
  const subtitle =
    lang === "kz"
      ? "Пайдалы құжаттарды осы жерден жүктеп алыңыз: оферта, құпиялылық саясаты және бланктар."
      : "Скачайте важные документы: публичная оферта, политика конфиденциальности и бланки.";
  const backLabel = lang === "kz" ? "Артқа" : "Назад";
  const downloadLabel = lang === "kz" ? "Жүктеп алу" : "Скачать";

  return (
    <section className="py-14 px-5 md:px-15">
      <div className="rail">
        <div className="rail-content">
          {/* шапка */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <Link
              href="/"
              className="
                inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold
                border border-black/10 bg-white/70 hover:bg-black/5
                dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15
                transition-colors
              "
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>

            <div
              className="
                inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                dark:border-white/15 dark:bg-white/10 dark:text-[var(--pc-ink)]
              "
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Prime Capital
            </div>
          </div>

          {/* заголовок */}
          <div className="inline-flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
            <span className="h-[3px] w-24 rounded-full bg-[var(--pc-gold)]/80" />
          </div>
          <p className="mt-2 text-black/70 dark:text-white/80">{subtitle}</p>

          {/* карточки документов */}
          <div
            className="
              mt-8 grid gap-4
              sm:grid-cols-2 lg:grid-cols-3
            "
          >
            {docs.map((d) => {
              const titleText = lang === "kz" ? d.title_kz : d.title_ru;
              const noteText = lang === "kz" ? d.note_kz : d.note_ru;

              return (
                <article
                  key={d.id}
                  className={cn(
                    "group rounded-2xl overflow-hidden p-5",
                    "border border-black/10 bg-white/70 backdrop-blur shadow-sm",
                    "dark:border-white/15 dark:bg-white/10",
                    "transition hover:border-[var(--pc-gold)]/60 hover:shadow-[0_10px_30px_-10px_rgba(255,209,102,.35)]"
                  )}
                >
                  {/* иконка + заголовок */}
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        shrink-0 h-10 w-10 rounded-xl grid place-items-center
                        bg-[var(--pc-gold)]/15 text-[var(--pc-gold)]
                        ring-1 ring-[var(--pc-gold)]/30
                        group-hover:bg-[var(--pc-gold)]/20
                      "
                    >
                      <FileText className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-snug line-clamp-2">
                        {titleText}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-black/60 dark:text-white/70">
                        <span
                          className="
                            inline-flex items-center rounded-full px-2 py-0.5
                            bg-black/5 dark:bg-white/10
                          "
                        >
                          {d.ext}
                        </span>
                        <span className="opacity-80">{noteText}</span>
                      </div>
                    </div>
                  </div>

                  {/* кнопка скачать */}
                  <div className="mt-4 flex items-center justify-between">
                    <div
                      className="
                        h-[3px] w-1/2 rounded-full
                        bg-gradient-to-r from-[var(--pc-gold)]/70 via-transparent to-transparent
                        opacity-70 group-hover:opacity-100 transition-opacity
                      "
                    />
                    <Link
                      href={d.href}
                      download
                      className="
                        inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold
                        border border-[var(--pc-gold)] text-[var(--pc-gold)]
                        hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                        transition-colors
                      "
                    >
                      <Download className="h-4 w-4" />
                      {downloadLabel}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* подсказка */}
          <div
            className="
              mt-8 rounded-2xl p-4
              border border-black/10 bg-white/70
              dark:border-white/15 dark:bg-white/10
              flex items-center gap-3 text-sm
            "
          >
            <ScrollText className="h-4 w-4 text-[var(--pc-gold)]" />
            <span className="text-black/70 dark:text-white/80">
              {lang === "kz"
                ? "Құжаттар .DOCX форматында. Ашылмаса — файлды жүктеп алып, кез келген офистік бағдарламада ашыңыз."
                : "Документы в формате .DOCX. Если не открывается в браузере — скачайте и откройте в офисной программе."}
            </span>
          </div>
        </div>

        <div className="rail-empty" />
      </div>
    </section>
  );
}
