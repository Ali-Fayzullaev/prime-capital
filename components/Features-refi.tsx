"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function FeaturesRefi() {
  const { t } = useI18n();
  const items = ["refi_b1", "refi_b2", "refi_b3", "refi_b4"].map((k) => t(k));
  return (
    <section id="refi" className="py-12">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">{t("refi_title")}</h3>
          <p className="mt-2 text-muted-foreground">{t("refi_sub")}</p>
          <ul className="mt-6 space-y-2">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 mt-0.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-video rounded-2xl border bg-muted" />
      </div>
    </section>
  );
}
