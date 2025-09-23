// app/documents/page.tsx
import type { Metadata } from "next";
import DocumentsClient from "./DocumentsClient";

export const metadata: Metadata = {
  title: "Документы — Prime Capital",
  description: "Публичная оферта, политика конфиденциальности и бланки для скачивания.",
};

export default function DocumentsPage() {
  // Файлы лежат в /public — ссылки можно давать как /имя-файла
  const docs = [
    {
      id: "offer",
      href: "/public-offer-ru.docx",
      ext: "DOCX",
      // RU / KZ названия — локализуем на клиенте
      title_ru: "Публичная оферта (RU)",
      title_kz: "Публичная оферта (RU)",
      note_ru: "Условия оказания услуг",
      note_kz: "Қызмет көрсету шарттары",
    },
    {
      id: "privacy",
      href: "/polit-conf-ru.docx",
      ext: "DOCX",
      title_ru: "Политика конфиденциальности (RU)",
      title_kz: "Құпиялылық саясаты (RU)",
      note_ru: "Персональные данные и защита",
      note_kz: "Жеке деректерді қорғау",
    },
    {
      id: "notification",
      href: "/notification-ru-kz.docx",
      ext: "DOCX",
      title_ru: "Уведомление ИП (RU/KZ)",
      title_kz: "ЖК туралы хабарлама (RU/KZ)",
      note_ru: "Реквизиты и регистрационные данные",
      note_kz: "Деректер мен тіркеу мәліметтері",
    },
    {
      id: "consent",
      href: "/consent-blank.docx",
      ext: "DOCX",
      title_ru: "Согласие на обработку ПД (бланк)",
      title_kz: "Жеке деректерді өңдеуге келісім (бланк)",
      note_ru: "Бланк для подписания",
      note_kz: "Қол қоюға арналған бланк",
    },
  ];

  return <DocumentsClient docs={docs} />;
}
