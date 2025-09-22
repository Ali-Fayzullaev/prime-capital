// app/privacy/page.tsx
import { SITE } from "@/lib/site";
import PrivacyClient from "./PrivacyClient"; // клиентский компонент

export const metadata = {
  title: `Политика конфиденциальности — ${SITE.name}`,
  description: `Правила обработки персональных данных на сайте ${SITE.name}`,
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
