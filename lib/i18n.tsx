"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Lang = "ru" | "kz";
type Dict = Record<Lang, Record<string, string>>;

const DICT: Dict = {
  ru: {
    nav_services: "Услуги",
    nav_refi: "Рефинансирование",
    nav_contact: "Контакты",
    hero_title: "Надёжный союзник в сфере кредитования",
    hero_sub:
      "Предлагаем честные, понятные и выгодные условия. Сопровождаем на каждом этапе и постоянно улучшаем сервис.",
    hero_cta: "Бесплатная консультация",
    usp_1: "Пониженные ставки и прозрачные условия",
    usp_2: "90% вероятность одобрения",
    usp_3: "Быстрое и удобное оформление",
    sec_services_title: "Услуги",
    s1: "Помощь в оформлении залогового/беззалогового кредита",
    s2: "Рефинансирование существующих кредитов",
    s3: "Кредиты для ИП/ТОО",
    s4: "Улучшение кредитного рейтинга",
    refi_title: "Платишь по нескольким кредитам? Устал от процентов?",
    refi_sub: "Пора навести порядок — рефинансируй!",
    refi_b1: "Объединение всех кредитов в один",
    refi_b2: "Снижение ежемесячного платежа",
    refi_b3: "Выгодная ставка",
    refi_b4: "Удобный график",
    cta_title: "Нужны деньги срочно?",
    cta_sub: "Выдаем до 5 000 000 тг без подтверждения дохода.",
    contact_title: "Оставьте номер — перезвоним и проконсультируем бесплатно",
    contact_name: "Ваше имя",
    contact_phone: "Телефон",
    contact_msg: "Комментарий (необязательно)",
    contact_send: "Отправить",
    reviews: "Отзывы клиентов",
    footer_copy:
      "Мы работаем офлайн и сопровождаем весь процесс лично. Подберём лучшие условия.",
    nav_requisites: "Реквизиты",
    requisites_title: "Реквизиты и данные компании",
    requisites_company: "Наименование ИП",
    requisites_owner: "Владелец (ФИО)",
    requisites_iin: "ИИН",
    requisites_oked: "ОКЭД",
    requisites_notice: "Уведомление о начале деятельности",
    requisites_notice_reason: "Причина подачи",
    requisites_tax: "Орган государственных доходов",
    requisites_address_reg: "Адрес места нахождения",
    requisites_contacts: "Контакты",
    requisites_phone: "Номер телефона",
    requisites_fax: "Номер факса",
    requisites_email: "Электронная почта",
    back: "Назад",
    nav_privacy: "Политика конфиденциальности",
    privacy_title: "Политика конфиденциальности",
    updated: "Обновлено",
  },
  kz: {
    nav_services: "Қызметтер",
    nav_refi: "Рефинанcирлеу",
    nav_contact: "Байланыс",
    hero_title: "Несиелеуде сенімді серіктес",
    hero_sub:
      "Адал, түсінікті және тиімді шарттарды ұсынамыз. Әр қадамда бірге боламыз.",
    hero_cta: "Тегін консультация",
    usp_1: "Төмен пайыздар, ашық шарттар",
    usp_2: "90% мақұлдау ықтималдығы",
    usp_3: "Жылдам және ыңғайлы рәсімдеу",
    sec_services_title: "Қызметтер",
    s1: "Кепілді/кепілсіз несие рәсімдеуге көмек",
    s2: "Бар несиелерді тиімді қайта қаржыландыру",
    s3: "ЖК/ЖШС үшін несиелер",
    s4: "Кредиттік рейтингті жақсарту",
    refi_title: "Бірнеше несиең бар ма? Пайыздар шаршатты ма?",
    refi_sub: "Қаржыны реттейік — рефинанcирлеу!",
    refi_b1: "Барлық несиелерді біреуіне біріктіру",
    refi_b2: "Ай сайынғы төлемді төмендету",
    refi_b3: "Тиімді пайыздық мөлшерлеме",
    refi_b4: "Ыңғайлы төлем кестесі",
    cta_title: "Шұғыл қаржы керек пе?",
    cta_sub: "5 000 000 тг дейін табысты растаусыз.",
    contact_title: "Тегін кеңес алу үшін нөмір қалдырыңыз",
    contact_name: "Атыңыз",
    contact_phone: "Телефон",
    contact_msg: "Пікір (міндетті емес)",
    contact_send: "Жіберу",
    reviews: "Клиенттердің пікірлері",
    footer_copy:
      "Біз офлайн жұмыс істейміз және бүкіл процесті жеке алып жүреміз. Ең жақсы шарттарды таңдаймыз.",
    nav_requisites: "Реквизиттер",
    requisites_title: "Компания реквизиттері",
    requisites_company: "ЖК атауы",
    requisites_owner: "Иесі (Т.А.Ә.)",
    requisites_iin: "ЖСН",
    requisites_oked: "ЭҚЖЖ",
    requisites_notice: "Кәсіпкерлікті бастау туралы хабарлама",
    requisites_notice_reason: "Тапсыру себебі",
    requisites_tax: "Мемлекеттік кірістер органы",
    requisites_address_reg: "Орналасқан жері",
    requisites_contacts: "Байланыстар",
    requisites_phone: "Телефон нөмірі",
    requisites_fax: "Факс нөмірі",
    requisites_email: "Электрондық пошта",
    back: "Артқа",
    nav_privacy: "Құпиялылық саясаты",
    privacy_title: "Құпиялылық саясаты",
    updated: "Жаңартылған",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "ru" || saved === "kz") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => (k: string) => DICT[lang][k] ?? k, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
