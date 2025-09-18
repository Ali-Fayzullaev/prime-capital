"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { ShieldCheck, Landmark, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";

type Lang = "ru" | "kz";

const BULLETS: Record<Lang, Record<"s1" | "s2" | "s3" | "s4", string[]>> = {
  ru: {
    s1: [
      "Подберём банк и программу",
      "Без лишних справок и очередей",
      "Сопровождение до одобрения",
    ],
    s2: [
      "Объединим кредиты в один",
      "Снижение ежемесячного платежа",
      "Улучшим ставку и срок",
    ],
    s3: [
      "Решения для ИП и ТОО",
      "Быстрый старт и оборотные",
      "Оптимальные требования",
    ],
    s4: [
      "Анализ кредитной истории",
      "Исправим ключевые факторы",
      "Дадим персональные шаги",
    ],
  },
  kz: {
    s1: [
      "Банк пен бағдарлама таңдаймыз",
      "Артық анықтамасыз, кезексіз",
      "Мақұлдауға дейін алып жүреміз",
    ],
    s2: [
      "Барлық несиені біріне біріктіреміз",
      "Ай сайынғы төлемді төмендетеміз",
      "Пайыз бен мерзімді жақсартамыз",
    ],
    s3: [
      "ЖК/ЖШС үшін шешімдер",
      "Жедел бастау және айналым",
      "Талаптар — қолайлы",
    ],
    s4: [
      "Кредиттік тарихты талдау",
      "Негізгі факторларды түзету",
      "Жеке қадамдар ұсынамыз",
    ],
  },
};

export default function Services() {
  const { t, lang } = useI18n() as { t: (k: string) => string; lang: Lang };

  const items = [
    { key: "s1" as const, Icon: ShieldCheck },
    { key: "s2" as const, Icon: TrendingUp },
    { key: "s3" as const, Icon: Briefcase },
    { key: "s4" as const, Icon: Landmark },
  ];

  return (
    <section id="services" className="py-14 px-4 md:px-10">
      <div className="rail">
        <div className="rail-content">
          {/* Заголовок с зол. линеечкой */}
          <div className="inline-flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t("sec_services_title")}
            </h2>
            <span className="h-[3px] w-24 rounded-full bg-[var(--pc-gold)]/80" />
          </div>

          {/* Карточки */}
          <div className="mt-7 grid md:grid-cols-2 gap-4 md:gap-5">
            {items.map(({ key, Icon }) => {
              const bullets = BULLETS[lang][key];
              return (
                <Card
                  key={key}
                  className="
                    group rounded-2xl overflow-hidden
                    border border-black/10 bg-white/70 backdrop-blur
                    dark:border-white/15 dark:bg-white/10
                    transition
                    hover:border-[var(--pc-gold)]/60 hover:shadow-[0_10px_30px_-10px_rgba(255,209,102,.35)]
                  "
                >
                  <CardHeader className="flex flex-row items-start gap-3">
                    <div
                      className="
                        shrink-0 h-10 w-10 rounded-xl grid place-items-center
                        bg-[var(--pc-gold)]/15 text-[var(--pc-gold)]
                        ring-1 ring-[var(--pc-gold)]/30
                        group-hover:bg-[var(--pc-gold)]/20
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base leading-snug">
                      {t(key)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-5 pt-0">
                    <ul className="text-sm space-y-1.5">
                      {bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-black/75 dark:text-white/85"
                        >
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--pc-gold)] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* нижняя плашка-акцент */}
                    <div
                      className="
                        mt-4 h-[3px] w-full rounded-full
                        bg-gradient-to-r from-[var(--pc-gold)]/70 via-transparent to-transparent
                        opacity-70 group-hover:opacity-100 transition-opacity
                      "
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="rail-empty" />
      </div>
    </section>
  );
}
