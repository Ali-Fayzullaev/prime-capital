"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Lang = "ru" | "kz";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n() as { lang: Lang; setLang: (l: Lang) => void };

  // локализуем подписи кнопки/меню
  const label = lang === "kz" ? "Тіл" : "Язык";
  const ruLabel = lang === "kz" ? "Орыс тілі" : "Русский";
  const kzLabel = lang === "kz" ? "Қазақ тілі" : "Казахский";
  const hint   = lang === "kz" ? "Alt+L — ауыстыру" : "Alt+L — переключение";

  // хоткей Alt+L для быстрого переключения
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && (e.key.toLowerCase() === "l")) {
        e.preventDefault();
        const next: Lang = lang === "ru" ? "kz" : "ru";
        setLang(next);
        try { localStorage.setItem("lang", next); } catch {}
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lang, setLang]);

  // прогружать сохранённый язык (если i18n это не делает сам)
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && saved !== lang) setLang(saved);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const change = (next: Lang) => {
    setLang(next);
    try { localStorage.setItem("lang", next); } catch {}
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={label}
          title={hint}
          className="
            h-9 px-2 rounded-full
            text-[var(--pc-ink-light)] hover:bg-black/5
            dark:text-[var(--pc-ink)] dark:hover:bg-white/10
          "
        >
          <div className="inline-flex items-center gap-1.5">
            <Languages className="h-4 w-4" />
            <span className="font-semibold tracking-wide">{lang.toUpperCase()}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          min-w-[180px]
          border border-black/10 bg-white/80 backdrop-blur
          dark:border-white/15 dark:bg-[#0F1527]
        "
      >
        <DropdownMenuLabel className="text-xs opacity-80">{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => change("ru")}
          className="cursor-pointer flex items-center justify-between"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-grid place-items-center h-5 w-5 rounded-full bg-black/5 text-[10px] dark:bg-white/10">RU</span>
            {ruLabel}
          </span>
          {lang === "ru" && <Check className="h-4 w-4 text-[var(--pc-gold)]" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => change("kz")}
          className="cursor-pointer flex items-center justify-between"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-grid place-items-center h-5 w-5 rounded-full bg-black/5 text-[10px] dark:bg-white/10">KZ</span>
            {kzLabel}
          </span>
          {lang === "kz" && <Check className="h-4 w-4 text-[var(--pc-gold)]" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
