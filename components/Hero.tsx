"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  Check,
  ShieldCheck,
  Percent,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      className="
        relative overflow-hidden px-5 md:px-15 
        pt-12 md:pt-20 pb-12
      "
    >
      {/* мягкие подсветки фона в секции */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 350px at 10% 0, #3a2f6f22 0%, transparent 60%), radial-gradient(600px 300px at 95% 10%, #ffd1661a 0%, transparent 60%)",
        }}
      />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: текст и призывы */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* бейджик сверху */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                          border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                          dark:bg-white/10 dark:text-[var(--pc-ink)] dark:border-white/15"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Prime Capital
          </div>

          {/* заголовок */}
          <h1
            className="
              mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight
              text-[var(--pc-ink-light)] dark:text-[var(--pc-ink)]
            "
          >
            <span className="block">{t("hero_title")}</span>
            <span
              className="
                bg-clip-text text-transparent
                bg-gradient-to-r from-[var(--pc-gold)] via-[#ffe49b] to-[var(--pc-gold)]
              "
            >
              {t("hero_cta")}
            </span>
          </h1>

          {/* подзаголовок */}
          <p className="mt-4 text-lg text-black/70 dark:text-white/80">
            {t("hero_sub")}
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* primary (light: контур золото → ховер заливка; dark: сразу заливка) */}
            <Button
              asChild
              size="lg"
              className="
                font-semibold
                border border-[var(--pc-gold)] text-[var(--pc-gold)]
                hover:bg-[var(--pc-gold)] hover:text-[#2c1f56]
                dark:border-transparent dark:bg-[var(--pc-gold)] dark:text-[#2c1f56]
                dark:hover:brightness-110
              "
            >
              <a href="#contact">{t("hero_cta")}</a>
            </Button>

            {/* secondary: звонок */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                border-black/10 text-[var(--pc-ink-light)]
                hover:bg-black/5
                dark:border-white/15 dark:text-[var(--pc-ink)] dark:hover:bg-white/10
              "
            >
              <a href={`tel:${SITE.phoneMain.replace(/\s/g, "")}`}>
                {SITE.phoneMain}
              </a>
            </Button>
          </div>

          {/* преимущества */}
          <ul className="mt-6 grid gap-3 text-sm">
            <li className="flex items-start gap-2 text-black/70 dark:text-white/80">
              <Check className="h-5 w-5 text-[var(--pc-gold)] shrink-0 mt-0.5" />
              <span>{t("usp_1")}</span>
            </li>
            <li className="flex items-start gap-2 text-black/70 dark:text-white/80">
              <Check className="h-5 w-5 text-[var(--pc-gold)] shrink-0 mt-0.5" />
              <span>{t("usp_2")}</span>
            </li>
            <li className="flex items-start gap-2 text-black/70 dark:text-white/80">
              <Check className="h-5 w-5 text-[var(--pc-gold)] shrink-0 mt-0.5" />
              <span>{t("usp_3")}</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
    relative aspect-[16/11] rounded-3xl
    overflow-hidden shadow-xl
    ring-1 ring-black/10 dark:ring-white/15
  "
        >
          {/* Видео */}
          <VideoAmbient />

          {/* декоративные блики поверх (еле заметные) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-25"
            style={{
              background: "radial-gradient(closest-side,#ffd16666,transparent)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full blur-3xl opacity-25"
            style={{
              background: "radial-gradient(closest-side,#3a2f6f55,transparent)",
            }}
          />

          {/* тонкий градиент, чтобы текст/иконки читались */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/35 via-transparent to-transparent dark:from-[#0b1220]/45" />
        </motion.div>
      </div>
    </section>
  );
}

function VideoAmbient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setMuted] = useState(true);
  const [isPlaying, setPlaying] = useState(true);

  const toggleMute = () => {
    setMuted((m) => !m);
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      await videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src="/hero2.mp4" // <-- файл положи в public/hero.mp4
        // poster="/hero-poster.jpg"   // <-- постер в public/hero-poster.jpg
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="h-full w-full object-cover"
      />

      {/* бейдж/лейбл сверху слева */}
      <div className="absolute left-3 top-3">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                         border border-black/10 bg-white/70 text-[var(--pc-ink-light)]
                         dark:bg-white/10 dark:text-[var(--pc-ink)] dark:border-white/15"
        >
          Видео-превью
        </span>
      </div>

      {/* контролы (пауза/звук) снизу слева */}
      <div className="absolute left-3 bottom-3 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full
                     bg-white/70 text-black/80 border border-black/10
                     hover:bg-white/80 transition
                     dark:bg-white/10 dark:text-white/90 dark:border-white/15 dark:hover:bg-white/15"
          aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full
                     bg-white/70 text-black/80 border border-black/10
                     hover:bg-white/80 transition
                     dark:bg-white/10 dark:text-white/90 dark:border-white/15 dark:hover:bg-white/15"
          aria-label={isMuted ? "Включить звук" : "Выключить звук"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </>
  );
}
