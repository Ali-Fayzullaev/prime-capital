// app/requisites/page.tsx
"use client";

import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import {
  Mail,
  Phone,
  FileText,
  Building2,
  MapPin,
  ListChecks,
  Info,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RequisitesPage() {
  const { t, lang } = useI18n() as {
    t: (k: string) => string;
    lang: "ru" | "kz";
  };
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1)
      router.back();
    else router.push("/");
  };

  return (
    <main className="py-12 px-4 md:px-10">
      <div className="rail">
        {/* TOP BAR с кнопкой Назад */}
        <div className="rail-content mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            aria-label={t("back")}
            className="
              inline-flex items-center gap-2 rounded-full
              text-[var(--pc-ink-light)] hover:bg-black/5
              dark:text-[var(--pc-ink)] dark:hover:bg-white/10
            "
          >
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Button>
        </div>
        <div className="rail-content">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {t("requisites_title")}
          </h1>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <CardBlock
              title={t("requisites_contacts")}
              icon={<Phone className="h-4 w-4" />}
            >
              <Item
                label={t("requisites_phone")}
                value={SITE.phoneMain}
                href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}
              />
              {SITE.fax ? (
                <Item label={t("requisites_fax")} value={SITE.fax} />
              ) : null}
              <Item
                label={t("requisites_email")}
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <Item
                label={t("requisites_address_reg")}
                value={SITE.address}
                icon={<MapPin className="h-3.5 w-3.5" />}
              />
            </CardBlock>

            <CardBlock
              title={t("requisites_company")}
              icon={<Building2 className="h-4 w-4" />}
            >
              <Item
                label={t("requisites_company")}
                value={SITE.legal.companyName}
              />
              <Item
                label={t("requisites_owner")}
                value={SITE.legal.ownerFullName}
              />
              <Item label={t("requisites_iin")} value={SITE.legal.iin} />
              <Item label={t("requisites_oked")} value={SITE.legal.oked} />
            </CardBlock>

            <CardBlock
              title={t("requisites_notice")}
              icon={<FileText className="h-4 w-4" />}
            >
              <Item
                label={t("requisites_notice")}
                value={`№ ${SITE.legal.noticeNo}`}
              />
              <Item
                label={t("requisites_notice_reason")}
                value={SITE.legal.noticeReason}
              />
              <Item
                label={t("requisites_tax")}
                value={SITE.legal.taxAuthority}
                icon={<Info className="h-3.5 w-3.5" />}
              />
            </CardBlock>

            <CardBlock
              title={t("requisites_address_reg")}
              icon={<ListChecks className="h-4 w-4" />}
            >
              <Item label="" value={SITE.legal.regAddress} />
            </CardBlock>
          </div>
        </div>
        <div className="rail-empty" />
      </div>

      {/* schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            email: SITE.email,
            telephone: SITE.phoneMain,
            address: {
              "@type": "PostalAddress",
              streetAddress: "пр-т Әл-Фараби, 44",
              postalCode: "010000",
              addressLocality: "Астана",
              addressCountry: "KZ",
            },
            url: "https://prime-capital.raycon.kz/requisites",
          }),
        }}
      />
    </main>
  );
}

function CardBlock({ title, icon, children }: any) {
  return (
    <div
      className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-5
                    dark:border-white/15 dark:bg-white/10 shadow-sm"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-black/70 dark:text-white/80">
        <span className="inline-grid place-items-center h-7 w-7 rounded-lg bg-[var(--pc-gold)]/15 text-[var(--pc-gold)]">
          {icon}
        </span>
        {title}
      </div>
      <div className="mt-3 grid gap-2">{children}</div>
    </div>
  );
}

function Item({
  label,
  value,
  href,
  icon,
}: {
  label?: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  const content = (
    <div className="flex items-start gap-2 text-sm text-black/80 dark:text-white/85">
      {icon ? <span className="mt-0.5">{icon}</span> : null}
      <div>
        {label ? (
          <div className="text-xs text-black/60 dark:text-white/70">
            {label}
          </div>
        ) : null}
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="hover:text-[var(--pc-gold)]">
      {content}
    </a>
  ) : (
    content
  );
}
