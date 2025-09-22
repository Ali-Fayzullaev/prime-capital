"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, FileDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

type DownloadItem = { lang: "ru" | "kz"; label: string; href: string };

export default function OfferClient({
  ruText,
  kzText,
  downloadable = [],
}: {
  ruText: string;
  kzText?: string;
  downloadable?: DownloadItem[];
}) {
  const router = useRouter();
  const { lang } = useI18n();

  const L = useMemo(() => {
    const RU = {
      back: "Назад",
      title: "Публичная оферта",
      print: "Печать",
    };
    const KZ = {
      back: "Артқа",
      title: "Публикалық оферта",
      print: "Басып шығару",
    };
    return lang === "kz" ? KZ : RU;
  }, [lang]);

  const text = lang === "kz" && kzText ? kzText : ruText;
  const files = downloadable.filter((d) => d.lang === (lang === "kz" ? "kz" : "ru"));

  const back = () => {
    if (history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <main className="py-6 md:py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* top actions */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={back} className="px-2 md:px-3">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">{L.back}</span>
          </Button>
          <div className="flex gap-2">
            {files.map((f) => (
              <Button key={f.href} variant="outline" size="sm" asChild>
                <a href={f.href} download>
                  <FileDown className="h-4 w-4 mr-2" />
                  {f.label}
                </a>
              </Button>
            ))}
            <Button variant="ghost" size="sm" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              {L.print}
            </Button>
          </div>
        </div>

        <header>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{L.title}</h1>
        </header>

        {/* текст оферты — сохраняем разметку документа */}
        <article
          className="
            rounded-2xl border border-black/10 bg-white/70 p-4 sm:p-6 md:p-8
            dark:border-white/15 dark:bg-white/10 shadow-sm
            print:border-0 print:bg-white print:shadow-none
          "
        >
          <pre className="whitespace-pre-wrap break-words text-[15px] leading-relaxed text-black/85 dark:text-white/85">
            {text}
          </pre>
        </article>
      </div>

      {/* mobile sticky bar */}
      <div className="fixed bottom-3 left-0 right-0 z-40 px-3 sm:hidden print:hidden">
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
          {files.map((f) => (
            <Button key={f.href} variant="outline" asChild>
              <a href={f.href} download>
                <FileDown className="h-4 w-4 mr-2" />
                DOCX
              </a>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
