"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function Contact() {
  const { t } = useI18n();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString() ?? "";
    const phone = fd.get("phone")?.toString() ?? "";
    const msg = fd.get("message")?.toString() ?? "";
    const text = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nКомментарий: ${msg}`
    );
    window.open(`${SITE.whatsapp}?text=${text}`, "_blank");
  };
  return (
    <section id="contact" className="py-12">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold">{t("contact_title")}</h3>
          <p className="mt-2 text-muted-foreground">{SITE.address}</p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-3">
          <Input name="name" placeholder={t("contact_name")} required />
          <Input name="phone" placeholder={t("contact_phone")} required />
          <Textarea name="message" placeholder={t("contact_msg")} />
          <Button type="submit" className="mt-2">
            {t("contact_send")}
          </Button>
        </form>
      </div>
    </section>
  );
}
