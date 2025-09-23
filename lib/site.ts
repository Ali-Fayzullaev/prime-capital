export type SiteConfig = {
  address: string;
  phoneMain: string;
  email: string;
  whatsapp: string;
  mapUrl?: string; // ← опционально
};

export const SITE = {
  whatsapp: "https://wa.me/77067367886",

  name: "Prime Capital",
  // основной публичный телефон (виден в хедере, CTA, контактах)
  phoneMain: "+7 706 736 78 86",
  // если нужен второй
  phoneAlt: "+7 706 736 78 86",
  // чисто цифровой для WhatsApp/тел: можно брать из phoneMain хелпером
  waPhone: "77067367886",

  // новый адрес клиента
  address: "010000, проспект Әл-Фараби, д. 44, Астана, Казахстан",

  // новые контакты
  email: "Prime.capital.astana@gmail.com",
  fax: "", // если появится — впиши сюда

  // юридический блок (реквизиты ИП)
  legal: {
    // Наименование ИП
    companyName: "ИП Islam",
    // Владелец
    ownerFullName: "ИСЛАМ ЭЛЬМИРА КУАНШЕВНА",
    // ИИН
    iin: "970801450850",
    // ОКЭД (5 знаков)
    oked: "64999",
    // Уведомление о начале деятельности
    noticeNo: "KZ77UWQ07835337",
    // Орган гос. доходов
    taxAuthority:
      'ГУ "Управление государственных доходов по Есильскому району Департамента государственных доходов по городу Астане Комитета государственных доходов Министерства финансов РК"',
    // Причина подачи
    noticeReason: "изменение данных, указанных в уведомлении",
    // Адрес места нахождения (можно дублировать address)
    regAddress: "010000, проспект Әл-Фараби, д. 44, Астана, Казахстан",
  },
} as const;

export const SITES: SiteConfig = {
  address: "010000, проспект Әл-Фараби, д. 44",
  phoneMain: "+7 (706) 736-78-86",
  email: "prime.capital.astana@gmail.com",
  whatsapp: "https://wa.me/77067367886",
  // mapUrl: "https://yandex.kz/maps/..." // если появится — подставим
};
