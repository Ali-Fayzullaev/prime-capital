"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";
import { buildWhatsAppUrl, getWaPhone } from "@/lib/wa";
import { SITE } from "@/lib/site";
import Link from "next/link";

type Lang = "ru" | "kz";

export default function Contact() {
  const { lang } = useI18n() as { lang: Lang };
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [sending, setSending] = useState(false);

  const D = useMemo(() => dict[lang], [lang]);
  const max = 800;

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // авто-активация "Другое/Басқа" при вводе
  const onOtherChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const v = e.target.value.slice(0, max);
    setOther(v);
    if (v.trim() && !selected.includes("other")) {
      setSelected((s) => [...s, "other"]);
    }
    if (!v.trim() && selected.includes("other")) {
      setSelected((s) => s.filter((x) => x !== "other"));
    }
  };

  const canSend =
    selected.filter((x) => x !== "other").length > 0 || other.trim().length > 0;

  // форматирование списка: "A, B и C" / "A, B және C"
  function formatList(items: string[], lang: Lang) {
    if (items.length <= 1) return items[0] || "";
    const last = items[items.length - 1];
    const head = items.slice(0, -1).join(", ");
    const conj = lang === "kz" ? " және " : " и ";
    return head + conj + last;
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!canSend) return;
    setSending(true);

    const topicLabels = selected
      .filter((id) => id !== "other")
      .map((id) => D.chips.find((c) => c.id === id)?.label || "")
      .filter(Boolean);

    const subjects: string[] = [...topicLabels];

    if (other.trim()) {
      subjects.push(`${D.wordOther} — ${other.trim()}`);
    }

    const greet = name
      ? D.greetWithName.replace("{name}", name.trim())
      : D.greetNoName;

    const about =
      subjects.length > 0
        ? `${D.aboutPrefix} ${formatList(subjects, lang)}.`
        : D.fPing;

    const text = encodeURIComponent(`${greet}\n${about}`);

    const phone = getWaPhone(SITE.whatsapp, SITE.phoneMain); // берём цифры
    const textLines = [
      // твой красивый текст:
      name
        ? lang === "kz"
          ? `Сәлеметсіз бе! Менің атым ${name}.`
          : `Здравствуйте! Меня зовут ${name}.`
        : lang === "kz"
        ? "Сәлеметсіз бе!"
        : "Здравствуйте!",
      // пример для тем / «Другое»:
      subjects.length
        ? lang === "kz"
          ? `Мен келесі тақырып бойынша хабарласқым келеді: ${formatList(
              subjects,
              "kz"
            )}.`
          : `Я обращаюсь по поводу: ${formatList(subjects, "ru")}.`
        : lang === "kz"
        ? "Кеңес алғым келеді."
        : "Хочу получить консультацию.",
    ].join("\n");

    // ВАЖНО: передаём «сырой» текст — хелпер сам закодирует
    const url = buildWhatsAppUrl(phone, textLines);
    window.open(url, "_blank", "noopener,noreferrer");
    window.open(`${SITE.whatsapp}?text=${text}`, "_blank");
    setTimeout(() => setSending(false), 400);
  };

  return (
    <section id="contact" className="py-16 px-5 md:px-15">
      <div className="rail">
        <div className="rail-content grid md:grid-cols-2 gap-10">
          {/* LEFT — заголовок */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                            border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                            dark:bg-white/10 dark:text-[var(--pc-ink)] dark:border-white/15"
            >
              {D.badge}
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
              {D.title}
            </h3>

            <p className="mt-2 text-black/70 dark:text-white/80">
              {D.subtitle}
            </p>

            <ul className="mt-6 grid gap-2 text-sm text-black/70 dark:text-white/80">
              <li>• {D.points[0]}</li>
              <li>• {D.points[1]}</li>
              <li>• {D.points[2]}</li>
            </ul>
          </div>

          {/* RIGHT — стеклянная форма с чипсами */}
          <form
            onSubmit={onSubmit}
            className="
              relative overflow-hidden rounded-3xl
              border border-black/10 bg-white/70 backdrop-blur
              dark:border:white/15 dark:bg-white/10
              p-6 md:p-8 shadow-xl grid gap-4
            "
          >
            {/* подсветки */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-12 -left-12 h-60 w-60 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(closest-side,#ffd16688,transparent)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(closest-side,#3a2f6f66,transparent)",
              }}
            />

            <div className="relative z-10 grid gap-3">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`${D.pName} (${D.optional})`}
              />
              {/* Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {D.chips.map((c) => {
                  const active = selected.includes(c.id);
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => toggle(c.id)}
                      aria-pressed={active}
                      aria-label={c.label}
                      className={[
                        "relative rounded-xl px-3 py-2 text-sm text-left transition",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-gold)]/60",
                        active
                          ? // ACTIVE — светлая и тёмная
                            [
                              "border border-[var(--pc-gold)]",
                              "bg-[var(--pc-gold)]/15 text-[var(--pc-gold)]",
                              // в тёмной — делаем заполнение золотом, чтобы контраст был максимальным
                              "dark:bg-[var(--pc-gold)] dark:text-[#2c1f56] dark:border-transparent",
                              "shadow-[0_6px_18px_-8px_rgba(255,209,102,.55)]",
                            ].join(" ")
                          : // INACTIVE
                            [
                              "border border-black/10 bg-white/60 text-[var(--pc-ink-light)] hover:bg-black/5",
                              "dark:border-white/15 dark:bg-white/5 dark:text-[var(--pc-ink)]/85 dark:hover:bg-white/10",
                            ].join(" "),
                      ].join(" ")}
                    >
                      {/* чек-иконка для активных */}
                      {active && (
                        <span
                          className="
            absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full
            bg-[var(--pc-gold)] text-[#2c1f56] text-[10px] font-extrabold
            shadow-[0_6px_16px_-6px_rgba(255,209,102,.7)]
          "
                          aria-hidden
                        >
                          ✓
                        </span>
                      )}
                      {c.label}
                    </button>
                  );
                })}
              </div>
              {/* Другое */}
              {(selected.includes("other") || other) && (
                <div className="grid gap-1.5">
                  <Textarea
                    value={other}
                    onChange={onOtherChange}
                    placeholder={D.pOther}
                    className="min-h-[120px] resize-vertical"
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-black/50 dark:text-white/60">
                      {D.hint}
                    </span>
                    <span className="text-black/50 dark:text-white/60">
                      {other.length}/{max}
                    </span>
                  </div>
                </div>
              )}
              <label className="flex items-start gap-2 text-xs text-black/70 dark:text-white/80">
                <input type="checkbox" required className="mt-0.5" />
                <span>
                  {lang === "ru" ? "Я принимаю " : "Мен қабылдаймын "}
                  <Link
                    href="/offer"
                    className="underline hover:text-[var(--pc-gold)]"
                  >
                    {lang === "ru"
                      ? "условия Публичной оферты"
                      : "Жария оферта шарттарын"}
                  </Link>{" "}
                  {lang === "ru" ? "и" : "және"}{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:text-[var(--pc-gold)]"
                  >
                    {lang === "ru"
                      ? "Политику конфиденциальности"
                      : "Құпиялылық саясатын"}
                  </Link>
                  .
                </span>
              </label>
              <label className="flex items-start gap-2 text-xs text-black/70 dark:text-white/80">
                <input type="checkbox" required className="mt-0.5" />
                <span>
                  {lang === "ru" ? "Согласен на " : "Жеке деректерді "}
                  <Link
                    href="/consent"
                    className="underline hover:text-[var(--pc-gold)]"
                  >
                    {lang === "ru"
                      ? "обработку персональных данных"
                      : "өңдеуге келісемін"}
                  </Link>
                  .
                </span>
              </label>

              <Button
                type="submit"
                disabled={!canSend || sending}
                className="
                  mt-1 font-semibold
                  border border-[var(--pc-gold)] text-[var(--pc-gold)]
                  hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                  dark:border-transparent dark:bg-[var(--pc-gold)] dark:text-[#2c1f56]
                  dark:hover:brightness-110
                "
              >
                {sending ? D.btnSending : D.btnSend}
              </Button>
              <p className="text-xs text-black/55 dark:text-white/60">
                {D.privacy}
              </p>
            </div>
          </form>
        </div>
        <div className="rail-empty" />
      </div>
    </section>
  );
}

/* локальная i18n-таблица с новыми фразами */
const dict: Record<
  "ru" | "kz",
  {
    badge: string;
    title: string;
    subtitle: string;
    points: string[];
    chips: { id: string; label: string }[];
    pName: string;
    optional: string;
    pOther: string;
    hint: string;
    btnSend: string;
    btnSending: string;
    privacy: string;
    // новое:
    greetWithName: string;
    greetNoName: string;
    aboutPrefix: string;
    wordOther: string;
    fPing: string;
  }
> = {
  ru: {
    badge: "Быстрый контакт",
    title: "Оставьте сообщение — ответим в WhatsApp",
    subtitle: "Выберите тему обращения или напишите своё. Имя — по желанию.",
    points: [
      "Бесплатная консультация",
      "Без лишних формальностей",
      "Отвечаем оперативно",
    ],
    chips: [
      { id: "secured", label: "Кредит под/без залога" },
      { id: "refi", label: "Рефинансирование" },
      { id: "smb", label: "Кредит для ИП/ТОО" },
      { id: "score", label: "Улучшение кредитного рейтинга" },
      { id: "urgent", label: "Срочно нужны деньги" },
      { id: "advice", label: "Нужна консультация" },
      { id: "other", label: "Другое" },
    ],
    pName: "Ваше имя",
    optional: "необязательно",
    pOther: "Опишите вашу ситуацию…",
    hint: "Можно просто выбрать темы выше — этого достаточно",
    btnSend: "Отправить сообщение в WhatsApp",
    btnSending: "Отправляем…",
    privacy:
      "Сообщение отправится через WhatsApp. Ваши данные не передаются третьим лицам.",
    // новое:
    greetWithName: "Здравствуйте! Меня зовут {name}.",
    greetNoName: "Здравствуйте!",
    aboutPrefix: "Я обращаюсь по поводу:",
    wordOther: "Другое",
    fPing: "Здравствуйте! Хочу получить консультацию.",
  },
  kz: {
    badge: "Жылдам байланыс",
    title: "Хабарлама қалдырыңыз — WhatsApp-та жауап береміз",
    subtitle:
      "Тақырыпты таңдаңыз немесе өз өтінішіңізді жазыңыз. Атыңыз — міндетті емес.",
    points: [
      "Тегін консультация",
      "Қосымша формалдықтарсыз",
      "Жедел жауап береміз",
    ],
    chips: [
      { id: "secured", label: "Кепілді/кепілсіз несие" },
      { id: "refi", label: "Рефинанcирлеу" },
      { id: "smb", label: "ЖК/ЖШС үшін несие" },
      { id: "score", label: "Кредиттік рейтингті жақсарту" },
      { id: "urgent", label: "Шұғыл қаражат керек" },
      { id: "advice", label: "Кеңес керек" },
      { id: "other", label: "Басқа" },
    ],
    pName: "Атыңыз",
    optional: "міндетті емес",
    pOther: "Жағдайыңызды сипаттаңыз…",
    hint: "Жоғарыдан бір-екі тақырыпты таңдау жеткілікті",
    btnSend: "WhatsApp арқылы хабарлама жіберу",
    btnSending: "Жіберілуде…",
    privacy:
      "Хабарлама WhatsApp арқылы жіберіледі. Деректеріңіз үшінші тұлғаларға берілмейді.",
    // новое:
    greetWithName: "Сәлеметсіз бе! Менің атым {name}.",
    greetNoName: "Сәлеметсіз бе!",
    aboutPrefix: "Мен келесі тақырып бойынша хабарласқым келеді:",
    wordOther: "Басқа",
    fPing: "Сәлеметсіз бе! Кеңес алғым келеді.",
  },
};
