// app/offer/page.tsx
import type { Metadata } from "next";
import OfferClient from "./OfferClient";
import { OFFER_RU } from "./offer-ru";
import { OFFER_KZ } from "./offer-kz";

export const metadata: Metadata = {
  title: "Публичная оферта — Prime Capital",
  description: "Публичная оферта ИП «Islam» — условия оказания услуг",
};

export default function OfferPage() {
  return (
    <OfferClient
      ruText={OFFER_RU}
      kzText={OFFER_KZ}
      // если файл лежит в /public/public-offer-ru.docx, ссылка будет /public-offer-ru.docx
      downloadable={[
        { lang: "ru", label: "Скачать оферту (DOCX)", href: "/public-offer-ru.docx" },
        // если позже будет казахская версия
        // { lang: "kz", label: "Оферта (DOCX)", href: "/public-offer-kz.docx" },
      ]}
    />
  );
}
