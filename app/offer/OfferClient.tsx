"use client";

import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { ArrowLeft, ScrollText, ShieldCheck, Printer, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OfferClient() {
  const { lang } = useI18n() as { lang: "ru" | "kz" };
  const router = useRouter();

  // фиксированные факты из вашего файла
  const meta = {
    number: "KZ77UWQ07835337",
    appNo: "Приложение № 1 к приказу № 34-П от 03.06.2025",
    approvedBy: "Директор ИП “Islam” — Ислам Э.К.",
    approvedAt: "03.06.2025",
    lastUpdated: "03.06.2025",
  };

  const title = lang === "ru"
    ? "Публичная оферта на оказание услуг ИП «Islam»"
    : "ЖК «Islam» қызметтерін көрсетуге арналған жария оферта";

  // мини оглавление
  const toc = [
    { id: "status", ru: "1. Правовой статус Договора", kz: "1. Шарттың құқықтық мәртебесі" },
    { id: "terms", ru: "2. Понятия", kz: "2. Анықтамалар" },
    { id: "service", ru: "3. Порядок оказания Услуг", kz: "3. Қызмет көрсету тәртібі" },
    { id: "accept", ru: "4. Прием и исполнение Запроса", kz: "4. Өтінішті қабылдау/орындау" },
    { id: "refund", ru: "5. Возврат денежных средств", kz: "5. Қаражатты қайтару" },
    { id: "io", ru: "6. Информационный обмен", kz: "6. Ақпарат алмасу" },
    { id: "rights", ru: "7. Права и обязанности", kz: "7. Тараптардың құқықтары/міндеттері" },
    { id: "liability", ru: "8. Ответственность", kz: "8. Жауапкершілік" },
    { id: "disputes", ru: "9. Споры", kz: "9. Дауларды шешу" },
    { id: "term", ru: "10. Срок действия", kz: "10. Қолданылу мерзімі" },
    { id: "misc", ru: "11. Иные условия", kz: "11. Өзге шарттар" },
    { id: "requisites", ru: "12. Реквизиты ИП «Islam»", kz: "12. ЖК «Islam» деректемелері" },
  ];

  const back = () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <main className="py-10 px-4 md:px-10">
      <div className="rail">
        {/* top bar */}
        <div className="rail-content mb-4 flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={back}
            className="inline-flex items-center gap-2 rounded-full
                       text-[var(--pc-ink-light)] hover:bg-black/5
                       dark:text-[var(--pc-ink)] dark:hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === "ru" ? "Назад" : "Артқа"}
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2"
              aria-label="Печать/Скачать PDF"
            >
              <Printer className="h-4 w-4" />
              {lang === "ru" ? "Печать" : "Басып шығару"}
            </Button>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                            border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                            dark:bg-white/10 dark:text-[var(--pc-ink)] dark:border-white/15">
              <ShieldCheck className="h-3.5 w-3.5" />
              {meta.lastUpdated}
            </div>
          </div>
        </div>

        <div className="rail-content">
          {/* шапка */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-5
                          dark:border-white/15 dark:bg-white/10">
            <div className="text-xs opacity-70">{meta.appNo}</div>
            <h1 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
              {title}
            </h1>
            <div className="mt-2 text-sm text-black/70 dark:text-white/80">
              № {meta.number} • {meta.approvedBy} • {meta.approvedAt}
            </div>

            {/* важная справка */}
            <div className="mt-4 text-sm text-black/80 dark:text-white/85">
              {lang === "ru" ? (
                <>
                  Настоящий договор является публичной офертой. Совершая действия на сайте, указанные в оферте,
                  Пользователь подтверждает акцепт условий.
                </>
              ) : (
                <>
                  Осы құжат жария оферта болып табылады. Сайттағы офертада көрсетілген әрекеттерді орындау арқылы
                  Пайдаланушы шарт талаптарын қабылдайды.
                </>
              )}
            </div>

            {/* оглавление */}
            <div className="mt-5 flex flex-wrap gap-2">
              {toc.map(x => (
                <a
                  key={x.id}
                  href={`#${x.id}`}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs
                             border border-black/10 bg-white/60 hover:bg-black/5
                             dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  <LinkIcon className="h-3 w-3" />
                  {lang === "ru" ? x.ru : x.kz}
                </a>
              ))}
            </div>
          </div>

          {/* разделы (содержимое сокращено — вставляйте нужные абзацы по мере необходимости) */}
          <Article id="status" title={toc[0][lang === "ru" ? "ru" : "kz"]}>
            {lang === "ru" ? (
              <>
                <p>Оферта адресована физическим лицам и является официальным предложением заключить договор по ст. 395 ГК РК.</p>
                <p>Акцепт — совершение действий по оплате/получению выплат на Сайте Системы; каждый факт действий — отдельный договор.</p>
                <p>Сайт Системы: https://prime-capital.raycon.kz/</p>
                <p>Информация об ИП «Islam»: ИИН 970801450850; адрес: РК, г. Астана, пр. Әл-Фараби, 44; телефон: 8 706 736-78-86; e-mail: prime.capital.astana@gmail.com</p>
              </>
            ) : (
              <>
                <p>Оферта жеке тұлғаларға арналған және ҚР АК 395-бабына сәйкес шарт жасасуға ресми ұсыныс болып табылады.</p>
                <p>Акцепт — Сайтта төлем/төлем алу әрекеттерін жасау; әр әрекет — жеке келісім.</p>
                <p>Жүйе сайты: https://prime-capital.raycon.kz/</p>
                <p>ЖК «Islam»: ЖСН 970801450850; мекенжай: ҚР, Астана қ., Әл-Фараби даңғ., 44; тел.: 8 706 736-78-86; e-mail: prime.capital.astana@gmail.com</p>
              </>
            )}
          </Article>

          <Article id="terms" title={toc[1][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Используются термины: Банк-партнёр, Запрос о приёме Оплаты/получении Выплаты, Платёжная страница, Платёжная услуга, Эмитент и др."
              : "Терминдер: Серіктес банк, Төлемді қабылдау/төлем алу туралы сұрау, Төлем беті, Төлем қызметі, Эмитент және т.б."}
            </p>
          </Article>

          <Article id="service" title={toc[2][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Основание — Запрос Пользователя. Услуги оказываются незамедлительно посредством Системы, с привлечением Банка-партнёра."
              : "Негіз — Пайдаланушының Өтініші. Қызметтер Жүйе арқылы дереу көрсетіледі, Серіктес банк тартылады."}
            </p>
            <p>{lang === "ru"
              ? "Комиссия взимается по действующим тарифам и не уменьшает сумму оплаты."
              : "Комиссия қолданыстағы тарифтер бойынша алынады және төлем сомасын азайтпайды."}
            </p>
          </Article>

          <Article id="accept" title={toc[3][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Пользователь знакомится с условиями, вводит параметры, подтверждает согласие и совершает действие на Платёжной странице."
              : "Пайдаланушы шарттармен танысады, параметрлерді енгізеді, келісімін растайды және Төлем бетінде әрекет жасайды."}
            </p>
          </Article>

          <Article id="refund" title={toc[4][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Возврат средств проводится с участием Банка-партнёра по заявлению и при наличии технической возможности."
              : "Қаражатты қайтару — Серіктес банк қатысуымен, өтініш негізінде және техникалық мүмкіндік болғанда."}
            </p>
          </Article>

          <Article id="io" title={toc[5][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Информационный обмен — в реальном времени; документы фиксируются и хранятся не менее 5 лет."
              : "Ақпарат алмасу — нақты уақыт режимінде; құжаттар кемінде 5 жыл сақталады."}
            </p>
          </Article>

          <Article id="rights" title={toc[6][lang === "ru" ? "ru" : "kz"]}>
            <ul className="list-disc pl-5 space-y-1">
              <li>{lang === "ru" ? "Обязанности ИП «Islam»: работа системы, конфиденциальность, информирование." : "ЖК «Islam» міндеттері: жүйенің жұмысы, құпиялылық, хабардар ету."}</li>
              <li>{lang === "ru" ? "Права: менять партнёров/лимиты, вносить изменения в договор с уведомлением на сайте." : "Құқықтары: серіктестер/лимиттерді өзгерту, сайтта жариялап шартты өзгерту."}</li>
              <li>{lang === "ru" ? "Обязанности Пользователя: корректность данных, оплата комиссий, ознакомление с условиями." : "Пайдаланушы міндеттері: мәліметтердің дұрыстығы, комиссия төлеу, шарттармен танысу."}</li>
            </ul>
          </Article>

          <Article id="liability" title={toc[7][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Ответственность сторон по законодательству РК. Форс-мажор и сбои третьих лиц — без ответственности."
              : "Тараптардың жауапкершілігі ҚР заңнамасына сәйкес. Форс-мажор және үшінші тұлғалардың ақаулары — жауапкершіліктен босатады."}
            </p>
          </Article>

          <Article id="disputes" title={toc[8][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Претензионный порядок, затем суд в соответствии с законодательством РК."
              : "Шағымдану тәртібі, одан әрі ҚР заңнамасына сәйкес сотта қаралады."}
            </p>
          </Article>

          <Article id="term" title={toc[9][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Договор действует с момента акцепта и до исполнения обязательств либо отзыва оферты на сайте."
              : "Шарт акцепт сәтінен бастап, міндеттемелер орындалғанға дейін немесе офертаны сайтта кері қайтарып алғанға дейін күшінде."}
            </p>
          </Article>

          <Article id="misc" title={toc[10][lang === "ru" ? "ru" : "kz"]}>
            <p>{lang === "ru"
              ? "Персональные данные обрабатываются по Закону РК «О персональных данных и их защите». Согласие даётся акцептом оферты."
              : "Жеке деректер ҚР «Жеке деректер және оларды қорғау туралы» Заңына сәйкес өңделеді. Келісім офертаны қабылдаумен беріледі."}
            </p>
          </Article>

          <Article id="requisites" title={toc[11][lang === "ru" ? "ru" : "kz"]}>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label={lang === "ru" ? "Наименование" : "Атауы"} value="ИП «Islam»" />
              <Field label={lang === "ru" ? "ИИН" : "ЖСН"} value="970801450850" />
              <Field label={lang === "ru" ? "Юр. адрес" : "Заңды мекенжай"} value="РК, г. Астана, р-н Сарыарка, проспект Әл-Фараби, 44" />
              <Field label={lang === "ru" ? "Факт. адрес" : "Нақты мекенжай"} value="РК, г. Астана, р-н Сарыарка, проспект Әл-Фараби, 44" />
              <Field label="ИИК" value="KZ38722S000026288098" />
              <Field label={lang === "ru" ? "Банк" : "Банк"} value='АО «Kaspi Bank», г. Астана' />
              <Field label="БИК" value="CASPKZKA" />
              <Field label={lang === "ru" ? "Директор" : "Директор"} value="Ислам Эльмира Куаншевна" />
              <Field label={lang === "ru" ? "Телефон" : "Телефон"} value="+7 (706) 736-78-86" />
              <Field label="E-mail" value="prime.capital.astana@gmail.com" />
            </div>
          </Article>

          {/* подвал */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <ScrollText className="h-4 w-4 text-[var(--pc-gold)]" />
            <span className="opacity-70">
              {lang === "ru" ? "Полная версия оферты размещена на этой странице. При необходимости по запросу направим копию на email." :
                                "Оферта толық нұсқасы осы бетте орналастырылған. Қажет болса, электрондық поштаға жібереміз."}
            </span>
            <Link href="/privacy" className="underline hover:text-[var(--pc-gold)]">
              {lang === "ru" ? "Политика конфиденциальности" : "Құпиялылық саясаты"}
            </Link>
          </div>
        </div>

        <div className="rail-empty" />
      </div>
    </main>
  );
}

function Article({ id, title, children }:{ id:string; title:string; children:React.ReactNode }) {
  return (
    <section id={id} className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-5
                                 dark:border-white/15 dark:bg-white/10">
      <h2 className="font-semibold text-[var(--pc-ink-light)] dark:text-[var(--pc-ink)]">{title}</h2>
      <div className="mt-2 space-y-2 text-[15px] leading-relaxed text-black/80 dark:text-white/85">
        {children}
      </div>
    </section>
  );
}

function Field({ label, value }:{ label:string; value:string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white/60 p-3
                    dark:border-white/15 dark:bg-white/10">
      <div className="text-xs opacity-60">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
