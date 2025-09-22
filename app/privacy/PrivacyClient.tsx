// app/privacy/PrivacyClient.tsx
"use client";

import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Section = { title: string; paragraphs: string[]; list?: string[] };

const dict: Record<"ru" | "kz", {
  sections: Section[];
  contacts: { title: string; address: string; email: string; phone: string };
}> = {
  ru: {
    sections: [
      { title: "1. Общие положения", paragraphs: [
        "Настоящая Политика составлена в соответствии с Законом РК от 21.05.2013 № 94-V «О персональных данных и их защите» и определяет порядок обработки и меры безопасности персональных данных ИП «Islam».",
        "Цель Компании — соблюдение прав и свобод человека и гражданина при обработке его персональных данных.",
        "Политика применима ко всей информации, получаемой через сайт https://prime-capital.raycon.kz/.",
      ]},
      { title: "2. Основные понятия", paragraphs: [
        "Используются понятия: автоматизированная обработка, блокирование, информационная система, обезличивание, обработка, оператор (Компания), персональные данные, пользователь, предоставление, распространение, уничтожение.",
      ]},
      { title: "3. Персональные данные, которые может обрабатывать Компания", paragraphs: [
        "ФИО, ИИН, дата рождения; контактные данные (телефон, e-mail, почтовый адрес); данные удостоверения личности; сведения о трудоустройстве/доходах/пенсионных отчислениях; кредитная история; технические данные (IP-адрес, тип устройства, история посещений).",
        "Также обрабатываются обезличенные данные (cookie) с помощью сервисов веб-аналитики (например, Яндекс Метрика, Google Analytics).",
      ]},
      { title: "4. Цели обработки", list: [
        "предоставление финансовых и консультационных услуг;",
        "идентификация клиента;",
        "доступ к личному кабинету;",
        "связь с клиентом (статус заявки и др.);",
        "соблюдение требований законодательства РК;",
        "маркетинговые и аналитические мероприятия;",
        "повышение качества обслуживания.",
      ], paragraphs: [
        "Компания может направлять уведомления о продуктах/услугах и спецпредложениях. Отписка — письмом на prime.capital.astana@gmail.com с пометкой «Отказ от уведомлениях ...».",
      ]},
      { title: "5. Правовые основания", list: [
        "согласие субъекта данных;",
        "необходимость заключения/исполнения договора;",
        "выполнение требований законодательства;",
        "иные законные интересы.",
      ], paragraphs: [
        "Данные обрабатываются при их передаче Пользователем через формы сайта. Обезличенные данные — при разрешенных настройках браузера (cookie, JavaScript).",
      ]},
      { title: "6. Порядок обработки и безопасность", paragraphs: [
        "Компания обеспечивает правовые, организационные и технические меры защиты персональных данных.",
        "Доступ третьих лиц исключен, за исключением случаев, предусмотренных законодательством.",
        "Актуализация данных — по запросу на prime.capital.astana@gmail.com (пометка «Актуализация персональных данных»).",
        "Согласие на обработку может быть отозвано письмом на prime.capital.astana@gmail.com (пометка «Отзыв согласия ...»).",
      ]},
      { title: "7. Передача персональных данных", list: [
        "банкам-партнёрам;",
        "провайдерам IT-услуг и CRM;",
        "государственным органам по запросу;",
        "иным лицам при наличии согласия Клиента.",
      ], paragraphs: []},
      { title: "8. Права клиента", list: [
        "получать информацию об обработке;",
        "требовать исправления/блокирования/удаления;",
        "отозвать согласие;",
        "обжаловать действия Компании в уполномоченные органы.",
      ], paragraphs: []},
      { title: "9. Изменения Политики", paragraphs: [
        "Компания вправе изменять Политику в рамках закона. Новая редакция действует с момента утверждения и публикации на сайте.",
      ]},
      { title: "10. Защита данных", paragraphs: [
        "Применяются технические и организационные меры: шифрование, контроль доступа, аудит, обучение сотрудников.",
      ]},
      { title: "11. Заключительные положения", paragraphs: [
        "Разъяснения по вопросам обработки персональных данных — по адресу prime.capital.astana@gmail.com.",
        "Политика действует бессрочно до замены новой версией. Актуальная версия доступна на сайте.",
      ]},
      { title: "12. Контактная информация", paragraphs: [
        "ИП «Islam». Адрес: Республика Казахстан, г. Астана, проспект Әл-Фараби, 44. E-mail: prime.capital.astana@gmail.com. Телефон: +7 (706) 736-78-86.",
      ]},
    ],
    contacts: { title: "Контакты", address: "Адрес", email: "Электронная почта", phone: "Телефон" },
  },
  kz: {
    sections: [
      { title: "1. Жалпы ережелер", paragraphs: [
        "Осы Саясат ҚР 2013.05.21 №94-V «Жеке деректер және оларды қорғау туралы» Заңына сәйкес әзірленді және ЖК «Islam» жеке деректерді өңдеу тәртібін және қауіпсіздік шараларын айқындайды.",
        "Саясат https://prime-capital.raycon.kz/ сайты арқылы алынған ақпаратқа қолданылады.",
      ]},
      { title: "2. Негізгі ұғымдар", paragraphs: [
        "Автоматтандырылған өңдеу, бұғаттау, ақпараттық жүйе, деректерді жекесіздендіру, өңдеу, оператор (Компания), жеке деректер, пайдаланушы, беру, тарату, жою және т.б.",
      ]},
      { title: "3. Өңделуі мүмкін деректер", paragraphs: [
        "Т.А.Ә., ЖСН, туған күні; байланыс мәліметтері (телефон, e-mail, пошта адресі); жеке куәлік деректері; жұмыс/табыстар/зейнетақы аударымдары; кредиттік тарих; техникалық деректер (IP, құрылғы түрі, кіру тарихы).",
        "Cookie арқылы жекесіздендірілген деректер де өңделеді (мысалы, Яндекс Метрика, Google Analytics).",
      ]},
      { title: "4. Өңдеу мақсаттары", list: [
        "қаржылық және консультациялық қызметтер көрсету;",
        "клиентті сәйкестендіру;",
        "жеке кабинетке қолжеткізу;",
        "клиентпен байланыс (өтініш мәртебесі және т.б.);",
        "ҚР заңнамасын сақтау;",
        "маркетинг және талдау;",
        "қызмет көрсету сапасын арттыру.",
      ], paragraphs: [
        "Компания өнімдер/қызметтер туралы хабарламалар жібере алады. Бас тарту — prime.capital.astana@gmail.com поштасына хат (тақырыпта «Жаңалықтардан бас тарту»).",
      ]},
      { title: "5. Өңдеудің құқықтық негіздері", list: [
        "субъектінің келісімі;",
        "шарт жасасу/орындау қажеттілігі;",
        "заң талаптарын орындау;",
        "өзге заңды мүдделер.",
      ], paragraphs: [
        "Деректер сайт формалары арқылы берілгенде өңделеді. Жекесіздендірілген деректер — браузер параметрлері рұқсат еткенде (cookie, JavaScript).",
      ]},
      { title: "6. Өңдеу тәртібі және қауіпсіздік", paragraphs: [
        "Компания құқықтық, ұйымдастырушылық және техникалық шараларды қолданады.",
        "Үшінші тұлғаларға қолжетімділік заңда көзделген жағдайларды қоспағанда жол берілмейді.",
        "Актуализация — prime.capital.astana@gmail.com поштасына сұрау жіберу арқылы.",
        "Келісімді қайтарып алу — осы адреске хат жіберу арқылы.",
      ]},
      { title: "7. Деректерді беру", list: [
        "серіктес банктерге;",
        "IT және CRM провайдерлеріне;",
        "мемлекеттік органдарға (сұрау бойынша);",
        "клиент келісімі болған жағдайда басқа тұлғаларға.",
      ], paragraphs: []},
      { title: "8. Клиент құқықтары", list: [
        "өңдеу туралы ақпарат алу;",
        "деректерді түзету/бұғаттау/жоюды талап ету;",
        "келісімді кері қайтарып алу;",
        "Компания әрекеттеріне шағым беру.",
      ], paragraphs: []},
      { title: "9. Саясатқа өзгерістер", paragraphs: [
        "Компания заң шеңберінде өзгерістер енгізе алады. Жаңа нұсқа сайтта жарияланған кезден бастап күшіне енеді.",
      ]},
      { title: "10. Деректерді қорғау", paragraphs: [
        "Техникалық және ұйымдастырушылық шаралар: шифрлау, қолжетімділікті бақылау, аудит, қызметкерлерді оқыту.",
      ]},
      { title: "11. Қорытынды ережелер", paragraphs: [
        "Жеке деректерді өңдеу бойынша түсініктемелер — prime.capital.astana@gmail.com.",
        "Саясат жаңа нұсқа қабылданғанға дейін мерзімсіз әрекет етеді.",
      ]},
      { title: "12. Байланыс ақпараты", paragraphs: [
        "ЖК «Islam». Мекенжай: Қазақстан, Астана қ., Әл-Фараби даңғ., 44. E-mail: prime.capital.astana@gmail.com. Телефон: +7 (706) 736-78-86.",
      ]},
    ],
    contacts: { title: "Байланыстар", address: "Мекенжай", email: "Электрондық пошта", phone: "Телефон" },
  },
};

export default function PrivacyClient() {
  const { t, lang } = useI18n() as { t: (k: string) => string; lang: "ru" | "kz" };
  const router = useRouter();
  const D = dict[lang];

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <main className="py-12 px-4 md:px-10">
      <div className="rail">
        {/* top bar */}
        <div className="rail-content mb-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            aria-label={t("back")}
            className="inline-flex items-center gap-2 rounded-full
                       text-[var(--pc-ink-light)] hover:bg-black/5
                       dark:text-[var(--pc-ink)] dark:hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Button>

          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                          border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                          dark:bg-white/10 dark:text-[var(--pc-ink)] dark:border-white/15">
            <Shield className="h-3.5 w-3.5" />
            {/* дату можно поменять при обновлении текста */}
            22.09.2025
          </div>
        </div>

        {/* content */}
        <div className="rail-content">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {lang === "ru" ? "Политика конфиденциальности" : "Құпиялылық саясаты"}
          </h1>

          <article className="mt-6 space-y-6 text-[15px] leading-relaxed text-black/80 dark:text-white/85">
            {D.sections.map((sec, i) => (
              <section key={i} className="rounded-2xl border border-black/10 bg-white/70 p-5
                                          dark:border-white/15 dark:bg-white/10">
                <h2 className="font-semibold text-[var(--pc-ink-light)] dark:text-[var(--pc-ink)]">
                  {sec.title}
                </h2>
                <div className="mt-2 space-y-2">
                  {sec.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                  {sec.list && (
                    <ul className="list-disc pl-5 space-y-1">
                      {sec.list.map((li, idx) => <li key={idx}>{li}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {/* Контакты */}
            <section className="rounded-2xl border border-black/10 bg-white/70 p-5
                                dark:border-white/15 dark:bg-white/10">
              <h2 className="font-semibold text-[var(--pc-ink-light)] dark:text-[var(--pc-ink)]">
                {D.contacts.title}
              </h2>
              <div className="mt-3 grid gap-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-[var(--pc-gold)]" />
                  <div>
                    <div className="text-xs opacity-70">{D.contacts.address}</div>
                    <div className="font-medium">{SITE.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-[var(--pc-gold)]" />
                  <div>
                    <div className="text-xs opacity-70">{D.contacts.email}</div>
                    <a className="font-medium hover:text-[var(--pc-gold)]" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-[var(--pc-gold)]" />
                  <div>
                    <div className="text-xs opacity-70">{D.contacts.phone}</div>
                    <a className="font-medium hover:text-[var(--pc-gold)]" href={`tel:${SITE.phoneMain.replace(/\s/g,"")}`}>
                      {SITE.phoneMain}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>

        <div className="rail-empty" />
      </div>

      {/* schema.org (клиентом допустимо) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: `${SITE.name} — Privacy Policy`,
            url: "https://prime-capital.raycon.kz/privacy",
            publisher: { "@type": "Organization", name: SITE.name },
            inLanguage: lang,
          }),
        }}
      />
    </main>
  );
}
