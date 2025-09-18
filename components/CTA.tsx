"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function CTA() {
  const { t } = useI18n();
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container text-center">
        <h3 className="text-2xl font-bold">{t("cta_title")}</h3>
        <p className="mt-2 text-muted-foreground">{t("cta_sub")}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href={`tel:${SITE.phoneAlt.replace(/\s/g, "")}`}>
              {SITE.phoneAlt}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
