"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { ShieldCheck, MessageCircle } from "lucide-react";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="py-16 px-5 md:px-15">
      <div className="rail">
        <div
          className="
            rail-content relative overflow-hidden rounded-3xl
            border border-black/10 bg-white/70 backdrop-blur
            dark:border-white/15 dark:bg-white/10
            px-6 md:px-10 py-10 text-center shadow-xl
          "
        >
          {/* мягкие подсветки */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full blur-3xl opacity-25"
            style={{ background: "radial-gradient(closest-side,#ffd16688,transparent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full blur-3xl opacity-25"
            style={{ background: "radial-gradient(closest-side,#3a2f6f66,transparent)" }}
          />

          {/* бейдж */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                          border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                          dark:bg-white/10 dark:text-[var(--pc-ink)] dark:border-white/15">
            <ShieldCheck className="h-3.5 w-3.5" />
            Prime Capital • Астана
          </div>

          {/* заголовок */}
          <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">
            {t("cta_title")}
          </h3>
          <p className="mt-2 text-base md:text-lg text-black/70 dark:text-white/80">
            {t("cta_sub")}
          </p>

          {/* кнопки */}
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            {/* WhatsApp — gold (light: outline → hover fill, dark: сразу fill) */}
            <Button
              asChild
              size="lg"
              className="
                font-semibold
                border border-[var(--pc-gold)] text-[var(--pc-gold)]
                hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                dark:border-transparent dark:bg-[var(--pc-gold)] dark:text-[#2c1f56]
                dark:hover:brightness-110
              "
            >
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>

            {/* Звонок — спокойная кнопка */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                border-black/10 text-[var(--pc-ink-light)]
                hover:bg-black/5
                dark:border-white/15 dark:text-[var(--pc-ink)] dark:hover:bg-white/10
              "
            >
              <a href={`tel:${SITE.phoneAlt.replace(/\s/g, "")}`}>{SITE.phoneAlt}</a>
            </Button>
          </div>

          {/* мини-доверие + адрес */}
          <div className="mt-6 text-xs md:text-sm text-black/60 dark:text-white/70">
            Консультация бесплатна · {SITE.address}
          </div>

          {/* нижняя золотая нитка */}
          <div className="mt-8 h-[3px] w-28 mx-auto rounded-full bg-[var(--pc-gold)]/80" />
        </div>

        <div className="rail-empty" />
      </div>
    </section>
  );
}
