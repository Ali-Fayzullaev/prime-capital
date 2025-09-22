"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, FileDown } from "lucide-react";
import { useRouter } from "next/navigation";

type Lang = "ru" | "kz";

export default function ConsentClient() {
  const { lang } = useI18n() as { lang: Lang };
  const router = useRouter();

  const L = useMemo(() => {
    const RU = {
      back: "Назад",
      print: "Печать",
      download: "Скачать бланк",
      downloadDocx: "Скачать .docx",
      hint: "Для электронного согласия на сайте используйте чекбокс в форме заявки.",
      title: "Согласие на обработку персональных данных",
      subtitle:
        "Бланк для подписания клиентом. Можно распечатать и подписать офлайн.",
    };
    const KZ = {
      back: "Артқа",
      print: "Басып шығару",
      download: "Бланкты жүктеу",
      downloadDocx: ".docx жүктеу",
      hint:
        "Электрондық келісім үшін сайттағы өтінім формасындағы құсбелгіні қолданыңыз.",
      title: "Жеке деректерді өңдеуге келісім",
      subtitle:
        "Клиент қол қоятын бланк. Басып шығарып, офлайн қол қоюға болады.",
    };
    return lang === "ru" ? RU : KZ;
  }, [lang]);

  const back = () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.back();
    else router.push("/");
  };

  const [pdfExists, setPdfExists] = useState<boolean>(false);
  const [docxExists, setDocxExists] = useState<boolean>(false);

  // Проверяем наличие файлов в /public
  useEffect(() => {
    const check = async () => {
      try {
        const pdf = await fetch("/consent-blank.pdf", { method: "HEAD" });
        setPdfExists(pdf.ok);
      } catch {}
      try {
        const docx = await fetch("/consent-blank.docx", { method: "HEAD" });
        setDocxExists(docx.ok);
      } catch {}
    };
    check();
  }, []);

  return (
    <main className="py-6 md:py-10 px-4 md:px-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Верхняя панель действий */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={back} className="px-2 md:px-3">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">{L.back}</span>
          </Button>

          <div className="flex gap-2">
            {pdfExists && (
              <Button variant="outline" size="sm" asChild>
                <a href="/consent-blank.pdf" download>
                  <FileDown className="h-4 w-4 mr-2" />
                  {L.download}
                </a>
              </Button>
            )}
            {docxExists && (
              <Button variant="outline" size="sm" asChild>
                <a href="/consent-blank.docx" download>
                  <FileDown className="h-4 w-4 mr-2" />
                  {L.downloadDocx}
                </a>
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              {L.print}
            </Button>
          </div>
        </div>

        {/* Заголовок */}
        <header className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {L.title}
          </h1>
          <p className="text-sm text-black/70 dark:text-white/80">{L.subtitle}</p>
        </header>

        {/* Тело документа: аккуратная карточка, хорошо читается на мобилке */}
        <article
          className="
            rounded-2xl border border-black/10 bg-white/70 p-4 sm:p-6 md:p-8
            dark:border-white/15 dark:bg-white/10 space-y-4
            shadow-sm
            print:border-0 print:bg-white print:shadow-none
          "
        >
          <p className="text-sm leading-relaxed text-black/85 dark:text-white/85">
            Я, ___________________________________________________________________________________________________________________________,
            <br />
            (фамилия, имя, отчество)
          </p>

          <p className="text-sm leading-relaxed">
            Документ, удостоверяющий личность __________________________________________ № __________________________________________
            <br />
            (вид документа)
            <br />
            выдан __________________________________________ (кем и когда)
          </p>

          <p className="text-sm leading-relaxed">
            зарегистрированный(ая) по адресу: ___________________________________________________________________, именуемый(ая) далее
            «Заказчик», согласен(а) на обработку моих персональных данных: Индивидуальный предприниматель «Islam» (Справка о
            государственной регистрации юридического лица от 15.04.2024 № KZ77UWQ07835337), в лице директора Ислам Эльмира
            Куаншевна, именуемый далее «Исполнитель», совместно именуемые «Стороны», заключили настоящее Согласие о
            нижеследующем:
          </p>

          <p className="text-sm leading-relaxed">
            Заказчик даёт согласие на обработку Исполнителем своих персональных данных, в т.ч. на сбор, систематизацию, накопление,
            хранение, использование персональных данных для рассмотрения заявки Клиента на получение банковских и/или других услуг,
            исполнения операций/платежей и др., в соответствии с Законом РК от 21.05.2013 № 94-V «О персональных данных и их защите»,
            Законом РК от 24.11.2015 № 418-V «Об информатизации» и иными НПА РК.
          </p>

          <p className="text-sm leading-relaxed">
            Настоящее согласие может быть отозвано мною в любой момент по соглашению сторон. В случае неправомерного использования
            предоставленных данных согласие отзывается письменным заявлением.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="text-sm leading-relaxed">
              ________________________________ <br /> Подпись
            </div>
            <div className="text-sm leading-relaxed">
              ________________________________ <br /> ФИО
            </div>
          </div>

          <hr className="my-4 border-black/10 dark:border-white/15" />

          <p className="text-sm leading-relaxed">
            Подтверждаю, что ознакомлен(а) с положениями Закона РК от 21.05.2013 № 94-V «О персональных данных и их защите»,
            Закона РК от 24.11.2015 № 418-V «Об информатизации» и иными НПА РК; права и міндеттер маған түсіндірілді.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="text-sm leading-relaxed">
              ________________________________ <br /> Подпись
            </div>
            <div className="text-sm leading-relaxed">
              ________________________________ <br /> ФИО
            </div>
          </div>
        </article>

        {/* Подсказка */}
        <p className="text-xs text-black/60 dark:text-white/60">{L.hint}</p>
      </div>

      {/* Мобильная «липкая» панель действий */}
      <div
        className="
          fixed bottom-3 left-0 right-0 z-40 px-3 sm:hidden
          print:hidden
        "
      >
        <div
          className="
            mx-auto max-w-md rounded-2xl
            border border-black/10 bg-white/90 backdrop-blur p-2
            dark:border-white/15 dark:bg-white/10
            shadow-lg flex items-center justify-between gap-2
          "
        >
          <Button onClick={() => window.print()} className="flex-1">
            <Printer className="h-4 w-4 mr-2" />
            {L.print}
          </Button>
          {pdfExists && (
            <Button variant="outline" asChild>
              <a href="/consent-blank.pdf" download>
                <FileDown className="h-4 w-4 mr-2" />
                PDF
              </a>
            </Button>
          )}
          {docxExists && (
            <Button variant="outline" asChild>
              <a href="/consent-blank.docx" download>
                <FileDown className="h-4 w-4 mr-2" />
                DOCX
              </a>
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
