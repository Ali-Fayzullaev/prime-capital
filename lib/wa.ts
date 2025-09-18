// lib/wa.ts
export function buildWhatsAppUrl(phoneLike: string, message?: string) {
  const digits = (phoneLike || "").replace(/\D/g, ""); // только цифры
  // детектим мобилку ТОЛЬКО на клиенте
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Windows Phone|Mobi/i.test(navigator.userAgent);

  const base = isMobile
    ? new URL("https://api.whatsapp.com/send")
    : new URL("https://web.whatsapp.com/send");

  if (digits) base.searchParams.set("phone", digits);
  if (message && message.trim()) base.searchParams.set("text", message.trim());
  return base.toString();
}

// удобная утилита: откуда брать телефон
export function getWaPhone(s1?: string, s2?: string) {
  const a = (s1 || "").replace(/\D/g, "");
  const b = (s2 || "").replace(/\D/g, "");
  return a || b || "";
}
