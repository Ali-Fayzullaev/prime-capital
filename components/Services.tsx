"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export default function Services() {
  const { t } = useI18n();
  const items = ["s1", "s2", "s3", "s4"].map((k) => t(k));
  return (
    <section id="services" className="py-12 border-t">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">
          {t("sec_services_title")}
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">{it}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {/* можно добавить детали */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
