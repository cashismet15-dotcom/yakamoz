// Gerçek işletme bilgileri değiştiğinde bu dosyayı güncellemeniz yeterli;
// telefon, hizmet bölgesi ve saatler siteye buradan otomatik yansır.
const istanbulDistricts = [
  "Esenyurt",
  "Avcılar",
  "Beylikdüzü",
  "Başakşehir",
  "Küçükçekmece",
];

const ankaraDistricts = [
  "Çankaya",
  "Ümitköy",
  "Çayyolu",
  "Bağlıca",
  "Mustafa Kemal",
  "Yapracık",
  "Eryaman",
  "Susuz",
  "Batıkent",
  "Yenikent",
];

const osmaniyeDistricts = ["Osmaniye"];

export const siteConfig = {
  name: "Yakamoz Halı Yıkama",
  domain: "www.yakamozhaliyikama.com.tr",
  url: "https://www.yakamozhaliyikama.com.tr",
  phoneDisplay: "0850 840 93 03",
  phoneHref: "tel:+908508409303",
  whatsappHref: "https://wa.me/908508409303",
  email: "yakamozhaliyikamaa@gmail.com",
  // Yakamoz'un fiziksel/müşteriye açık bir dükkanı yok; ücretsiz kapıdan
  // alım-teslim modeliyle aşağıdaki şehir ve ilçelerde hizmet veriliyor.
  serviceCities: [
    { name: "İstanbul", districts: istanbulDistricts },
    { name: "Ankara", districts: ankaraDistricts },
    { name: "Osmaniye", districts: osmaniyeDistricts },
  ],
  serviceDistricts: [
    ...istanbulDistricts,
    ...ankaraDistricts,
    ...osmaniyeDistricts,
  ],
  serviceArea:
    "İstanbul, Ankara ve Osmaniye'de ücretsiz kapıdan alım-teslim ile halı, stor perde, yorgan ve battaniye yıkama",
  hours: [
    { day: "Pazartesi – Cumartesi", time: "08:00 – 20:00" },
    { day: "Pazar", time: "10:00 – 18:00" },
  ],
  socials: {
    instagram: "https://www.instagram.com/yakamozhaliyikamaaa/",
    facebook: "https://www.facebook.com/profile.php?id=61593143406568",
  },
};
