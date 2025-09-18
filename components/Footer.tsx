"use client";

import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t py-8 text-sm text-muted-foreground">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-center md:text-left">{t("footer_copy")}</p>
        <div className="text-center md:text-right">
          <div>{SITE.address}</div>
          <a href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}>{SITE.phoneMain}</a>
        </div>
      </div>
    </footer>
  );
}
