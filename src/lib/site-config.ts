// Gerçek işletme bilgileri değiştiğinde bu dosyayı güncellemeniz yeterli;
// telefon, hizmet bölgesi ve saatler siteye buradan otomatik yansır.
export const siteConfig = {
  name: "Yakamoz Halı Yıkama",
  domain: "yakamozhaliyikama.com.tr",
  url: "https://yakamozhaliyikama.com.tr",
  phoneDisplay: "0850 840 93 03",
  phoneHref: "tel:+908508409303",
  whatsappHref: "https://wa.me/908508409303",
  email: "yakamozhaliyikamaa@gmail.com",
  city: "İstanbul",
  // Yakamoz'un fiziksel/müşteriye açık bir dükkanı yok; ücretsiz kapıdan
  // alım-teslim modeliyle aşağıdaki ilçelerde hizmet veriliyor.
  serviceDistricts: [
    "Esenyurt",
    "Avcılar",
    "Beylikdüzü",
    "Başakşehir",
    "Küçükçekmece",
  ],
  serviceArea:
    "İstanbul Avrupa Yakası (Esenyurt, Avcılar, Beylikdüzü, Başakşehir, Küçükçekmece) ücretsiz kapıdan alım-teslim",
  hours: [
    { day: "Pazartesi – Cumartesi", time: "08:00 – 20:00" },
    { day: "Pazar", time: "10:00 – 18:00" },
  ],
  socials: {
    instagram: "https://www.instagram.com/yakamozhaliyikamaaa/",
    facebook: "https://www.facebook.com/profile.php?id=61593143406568",
  },
};
