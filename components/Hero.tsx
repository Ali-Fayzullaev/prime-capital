"use client";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="pt-12 md:pt-20 pb-10">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {t("hero_title")}
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">{t("hero_sub")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">{t("hero_cta")}</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}>
                {SITE.phoneMain}
              </a>
            </Button>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
            <li>• {t("usp_1")}</li>
            <li>• {t("usp_2")}</li>
            <li>• {t("usp_3")}</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="aspect-video rounded-2xl border bg-muted"
        />
      </div>
    </section>
  );
}
