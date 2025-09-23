// app/requisites/page.tsx
"use client";

import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import {
  Phone,
  FileText,
  Building2,
  MapPin,
  ListChecks,
  Info,
  ArrowLeft,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ElementType, SVGProps } from "react";

export default function RequisitesPage() {
  const data = {
    number: "KZ77UWQ07835337",
    oked: "64999",
    address: "010000, проспект Әл-Фараби, д. 44",
    phone: "+7 (706) 736-78-86",
    email: "prime.capital.astana@gmail.com",
    // если есть локальный файл — положи в public/ и пропиши путь:
    docHref: "/notification-ru-kz.docx", // или .docx, если нужно
  };

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
          <div className="mt-5 flex flex-wrap gap-3">
            {data.docHref && (
              <Link
                href={data.docHref}
                download
                className="
                    inline-flex items-center gap-2 rounded-full px-3 py-1.5
                    border border-[var(--pc-gold)] text-[var(--pc-gold)]
                    hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                    transition-colors text-sm font-semibold
                  "
              >
                <FileDown className="h-4 w-4" />
                {lang === "kz" ? "Құжатты жүктеу" : "Скачать документ"}
              </Link>
            )}
            <Link
              href="/requisites"
              className="
                  inline-flex items-center gap-2 rounded-full px-3 py-1.5
                  border border-black/10 text-[var(--pc-ink-light)]
                  hover:bg-black/5
                  dark:border-white/15 dark:text-[var(--pc-ink)] dark:hover:bg-white/10
                  text-sm font-semibold
                "
            >
              {lang === "kz" ? "Артқа" : "Назад"}
            </Link>
          </div>
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
type IconType = ElementType<SVGProps<SVGSVGElement>>;

type CardBlockProps = { title: string; icon: ReactNode; children: ReactNode };

function CardBlock({ title, icon, children }: CardBlockProps) {
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
