// app/offer/page.tsx
import { SITE } from "@/lib/site";
import OfferClient from "./OfferClient";

export const metadata = {
  title: `Публичная оферта — ${SITE.name}`,
  description: `Публичная оферта на оказание услуг ИП «Islam» (${SITE.name}).`,
};

export default function OfferPage() {
  return <OfferClient />;
}
