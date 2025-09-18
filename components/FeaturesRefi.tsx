"use client";

import { Check, ArrowRight, PiggyBank, Percent } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type Lang = "ru" | "kz";

export default function FeaturesRefi() {
  const { t, lang } = useI18n() as { t: (k: string) => string; lang: Lang };
  const D = dict[lang];
  const items = ["refi_b1", "refi_b2", "refi_b3", "refi_b4"].map((k) => t(k));

  return (
    <section id="refi" className="py-16 px-4 md:px-10">
      <div className="rail">
        <div className="rail-content grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT — текст и буллеты */}
          <div>
            <div className="inline-flex items-center gap-3">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {t("refi_title")}
              </h3>
              <span className="h-[3px] w-24 rounded-full bg-[var(--pc-gold)]/80" />
            </div>
            <p className="mt-3 text-black/70 dark:text-white/80">
              {t("refi_sub")}
            </p>

            <ul className="mt-6 space-y-3">
              {items.map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-0.5 text-[var(--pc-gold)]" />
                  <span className="text-[15px] text-black/80 dark:text-white/85">
                    {it}
                  </span>
                </li>
              ))}
            </ul>

            {/* мини-бейджи преимуществ */}
            <div className="mt-6 flex flex-wrap gap-2">
              <BadgeSoft>{D.badge1}</BadgeSoft>
              <BadgeSoft>{D.badge2}</BadgeSoft>
              <BadgeSoft>{D.badge3}</BadgeSoft>
            </div>
          </div>

          {/* RIGHT — стеклянная карточка «До / После» */}
          <div
            className="
              relative rounded-3xl overflow-hidden shadow-xl
              border border-black/10 bg-white/70 backdrop-blur
              dark:border-white/15 dark:bg-white/10
              p-5 md:p-7
            "
          >
            {/* мягкие ореолы */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full blur-3xl opacity-25"
              style={{
                background:
                  "radial-gradient(closest-side,#ffd16666,transparent)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full blur-3xl opacity-25"
              style={{
                background:
                  "radial-gradient(closest-side,#3a2f6f55,transparent)",
              }}
            />

            {/* шапка карточки */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-black/70 dark:text-white/80">
                <Percent className="h-4 w-4 text-[var(--pc-gold)]" />
                {D.header}
              </div>
              <div className="text-xs px-2 py-1 rounded-full bg-[var(--pc-gold)]/15 text-[var(--pc-gold)] ring-1 ring-[var(--pc-gold)]/30">
                {D.example}
              </div>
            </div>

            {/* сравнение */}
            <div className="relative z-10 mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Panel
                title={D.before}
                amount="146 000 ₸/мес"
                hint={D.beforeHint}
                tone="before"
              />
              <div className="hidden sm:flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-black/50 dark:text-white/60" />
              </div>
              <Panel
                title={D.after}
                amount="98 000 ₸/мес"
                hint={D.afterHint}
                tone="after"
              />
            </div>

            {/* подвал карточки */}
            <div
              className="
                relative z-10 mt-5 rounded-2xl p-4
                border border-black/10 bg-white/70
                dark:border-white/15 dark:bg-white/10
                flex items-center justify-between gap-3
              "
            >
              <div>
                <div className="text-xs text-black/60 dark:text-white/70">
                  {D.savingTitle}
                </div>
                <div className="text-base font-semibold text-[var(--pc-ink-light)] dark:text-[var(--pc-ink)]">
                  {D.savingPrefix}{" "}
                  <span className="text-[var(--pc-gold)]">48 000 ₸/мес</span>
                </div>
              </div>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm
                           bg-[var(--pc-gold)] text-[#2c1f56] font-semibold hover:brightness-110 transition"
              >
                <PiggyBank className="h-4 w-4" />
                {D.cta}
              </a>
            </div>
          </div>
        </div>

        {/* правая пустая колонка rail */}
        <div className="rail-empty" />
      </div>
    </section>
  );
}

/* ——— Вспомогательные компоненты ——— */

function BadgeSoft({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-black/70 border border-black/10
                     dark:bg-white/10 dark:text-white/80 dark:border-white/15"
    >
      {children}
    </span>
  );
}

function Panel({
  title,
  amount,
  hint,
  tone,
}: {
  title: string;
  amount: string;
  hint: string;
  tone: "before" | "after";
}) {
  const isAfter = tone === "after";
  return (
    <div
      className={`
        rounded-2xl p-4
        border ${
          isAfter
            ? "border-[var(--pc-gold)]/60"
            : "border-black/10 dark:border-white/15"
        }
        ${isAfter ? "bg-[var(--pc-gold)]/15" : "bg-white/60 dark:bg-white/10"}
        ring-1 ${isAfter ? "ring-[var(--pc-gold)]/20" : "ring-transparent"}
      `}
    >
      <div className="text-xs font-semibold text-black/60 dark:text-white/70">
        {title}
      </div>
      <div
        className={`mt-1 text-lg font-extrabold ${
          isAfter ? "text-[var(--pc-gold)]" : "text-black/80 dark:text-white/85"
        }`}
      >
        {amount}
      </div>
      <div className="text-xs mt-1 text-black/60 dark:text-white/70">
        {hint}
      </div>
    </div>
  );
}

/* ——— Локальная таблица RU/KZ для этой секции ——— */
const dict: Record<
  "ru" | "kz",
  {
    header: string;
    example: string;
    before: string;
    after: string;
    beforeHint: string;
    afterHint: string;
    savingTitle: string;
    savingPrefix: string;
    cta: string;
    badge1: string;
    badge2: string;
    badge3: string;
  }
> = {
  ru: {
    header: "Рефинансирование — выгода на платеже",
    example: "Пример",
    before: "До",
    after: "После",
    beforeHint: "несколько кредитов",
    afterHint: "единый платёж",
    savingTitle: "Оценка выгоды",
    savingPrefix: "Экономия ≈",
    cta: "Узнать условия",
    badge1: "0% скрытых комиссий",
    badge2: "Индивидуальные условия",
    badge3: "Сопровождение до результата",
  },
  kz: {
    header: "Рефинанcирлеу — төлемдегі пайда",
    example: "Мысал",
    before: "Дейін",
    after: "Кейін",
    beforeHint: "бірнеше несие",
    afterHint: "бір төлем",
    savingTitle: "Пайданы бағалау",
    savingPrefix: "Үнем ≈",
    cta: "Шарттарды білу",
    badge1: "Жасырын комиссия — 0%",
    badge2: "Жеке шарттар",
    badge3: "Нәтижеге дейін алып жүру",
  },
};
