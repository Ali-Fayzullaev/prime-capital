// app/consent/page.tsx
import { SITE } from "@/lib/site";
import ConsentClient from "./ConsentClient";

export const metadata = {
  title: `Согласие на обработку персональных данных — ${SITE.name}`,
  description: "Бланк согласия на обработку персональных данных для клиентов",
};

export default function ConsentPage() {
  return <ConsentClient />;
}
