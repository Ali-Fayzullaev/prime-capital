"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

type Review = { name: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Николай Денисов",
    text: "Спасибо ребятам с компании, мне везде отказывало, а они мне оформили сумму на 1 млн тенге! Большая благодарность",
  },
  {
    name: "Гулжан",
    text: "Қызымет көрсеттуі маған үнады жылдам әрі тез Олжас жұмысымды біттіріп берді",
  },
  {
    name: "Aruzhan Yesp.",
    text: "Спасибо менеджерам, помогли родителям решить вопрос",
  },
  {
    name: "Eldos Moldagaliyev",
    text: "Огромное спасибо менеджерам! Всё грамотно и чётко отработано. И самое главное — уважение к клиентам.",
  },
  {
    name: "Sanim Saruarova",
    text: "Спасибо менеджерам. Всё чётко отработали. Быстро и удобно. Советую всем!",
  },
  {
    name: "Asemgul",
    text: "Огромная благодарность команде Prime Capital! Мне не одобряли даже товарный кредит ни в одном банке. Но специалисты детально изучили мою ситуацию, нашли причину отказов и помогли её устранить. Благодаря их профессионализму я получила 11 млн тг на развитие бизнеса. Это не просто одобрение — это новый этап в моей жизни. Спасибо за веру и результат!",
  },
  {
    name: "Aziza Zhapparova",
    text: "Помогли оформить кредит на выгодных условиях, одобрили в короткие сроки. Вежливые и профессиональные сотрудники, всё объяснили и сопровождали до конца. Сервис на уровне — работают на результат. Спасибо команде Prime Capital! Рекомендую!",
  },
];

function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const { bg, fg } = getAvatarColors(name);

  return (
    <div
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-semibold"
      style={{ backgroundColor: bg, color: fg }}
      title={name}
      aria-label={name}
    >
      {letters}
    </div>
  );
}

/** ===== helpers ===== **/

// Вкусная палитра (Tailwind 500-шки), выглядит ярко в обеих темах
const PALETTE = [
  "#0ea5e9", // sky-500
  "#22c55e", // green-500
  "#eab308", // yellow-500
  "#ef4444", // red-500
  "#a855f7", // violet-500
  "#14b8a6", // teal-500
  "#f97316", // orange-500
  "#06b6d4", // cyan-500
  "#84cc16", // lime-500
  "#f43f5e", // rose-500
] as const;

function getAvatarColors(seed: string) {
  const idx = Math.abs(hash(seed)) % PALETTE.length;
  const bg = PALETTE[idx];
  const fg = pickTextColor(bg); // #000 или #fff по контрасту
  return { bg, fg };
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h | 0;
}

function pickTextColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const lum = 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b); // WCAG-луминанс
  return lum > 0.6 ? "#111111" : "#ffffff";
}

function hexToRgb(hex: string) {
  const v = hex.replace("#", "");
  const n = parseInt(v, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function toLin(c: number) {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[var(--pc-gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="py-16 px-5 md:px-15" id="reviews">
      <div className="rail">
        <div className="rail-content">
          {/* Заголовок */}
          <div className="flex items-center gap-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t("reviews")}
            </h3>
            <span className="h-[3px] w-24 rounded-full bg-[var(--pc-gold)]/80" />
          </div>

          {/* Карусель */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-7"
          >
            <Carousel
              opts={{ align: "start", loop: true }}
              className="relative"
            >
              {/* Стрелки */}
              <CarouselPrevious
                className={cn(
                  "left-0 -top-12 z-50  md:top-1/2 md:-translate-y-1/2",
                  "border border-black/10 bg-white/70 backdrop-blur text-black/80",
                  "hover:bg-white/80",
                  "dark:border-white/15 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/15"
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </CarouselPrevious>
              <CarouselNext
                className={cn(
                  "right-0 -top-12 z-50 md:top-1/2 md:-translate-y-1/2",
                  "border border-black/10 bg-white/70 backdrop-blur text-black/80",
                  "hover:bg-white/80",
                  "dark:border-white/15 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/15"
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </CarouselNext>

              <CarouselContent className="-ml-3">
                {REVIEWS.map((r, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-3 basis-[90%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <article
                      className="
                        h-full rounded-2xl p-5
                        border border-black/10 bg-white/70 backdrop-blur
                        dark:border-white/15 dark:bg-white/10
                        shadow-sm
                        flex flex-col gap-4
                        transition hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,.2)]
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Initials name={r.name} />
                          <div>
                            <div className="font-semibold leading-tight">
                              {r.name}
                            </div>
                            <Stars />
                          </div>
                        </div>
                        <Quote className="h-5 w-5 text-black/30 dark:text-white/30" />
                      </div>

                      <p className="text-[15px] text-black/80 dark:text-white/85">
                        {r.text}
                      </p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        {/* правая пустая колонка (rail) */}
        <div className="rail-empty" />
      </div>
    </section>
  );
}
