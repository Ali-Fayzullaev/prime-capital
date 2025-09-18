"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { ShieldCheck, Landmark, Briefcase, TrendingUp } from "lucide-react";

export default function Services() {
  const { t } = useI18n();
  const items = [
    { key: "s1", Icon: ShieldCheck }, // Помощь в оформлении залогового/беззалогового кредита
    { key: "s2", Icon: TrendingUp },  // Рефинансирование
    { key: "s3", Icon: Briefcase },   // Кредиты для ИП/ТОО
    { key: "s4", Icon: Landmark },    // Улучшение кредитного рейтинга
  ];

  return (
    <section id="services" className="py-14 px-5 md:px-15">
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
            {items.map(({ key, Icon }, i) => (
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
                      shrink-0 h-10 w-10 rounded-xl
                      grid place-items-center
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
                  <ul className="text-sm text-black/70 dark:text-white/80 space-y-1.5">
                    {/* Микро-подсказки — нейтральные, подходят под любые услуги */}
                    <li>— Консультация и подбор условий</li>
                    <li>— Сопровождение документов</li>
                    <li>— Быстрые сроки рассмотрения</li>
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
            ))}
          </div>
        </div>
        <div className="rail-empty" />
      </div>
    </section>
  );
}
