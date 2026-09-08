export type ServicePage = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "stor-perde-yikama",
    name: "Stor Perde Yıkama",
    seoTitle: "Stor Perde Yıkama | Ücretsiz Kapıdan Alım-Teslim",
    metaDescription:
      "Stor perdeleriniz sökülür, yıkanır, ütülenir ve yerine asılır. Hizmet verdiğimiz tüm ilçelerde ücretsiz kapıdan alım-teslim.",
    h1: "Stor Perde Yıkama",
    intro: [
      "Stor perdeler, kumaş yapıları gereği evde yıkanması zor ve yanlış yıkandığında şeklini kaybedebilen bir tekstil türü. Yakamoz Halı Yıkama olarak stor perdelerinizi önce yerinden dikkatlice söküyor, uygun yöntemle yıkıyor, ütülüyor ve isterseniz yeniden yerine asarak teslim ediyoruz — süreç boyunca perdenizle ilgilenmeniz gerekmiyor.",
      "Bu hizmeti hizmet verdiğimiz tüm ilçelerde, halı yıkama ile aynı ücretsiz kapıdan alım-teslim modeliyle sunuyoruz; halınızla birlikte stor perdenizi de tek randevuda gönderebilirsiniz.",
    ],
    faq: [
      {
        question: "Perdeyi sökme ve asma işini de siz mi yapıyorsunuz?",
        answer:
          "Evet, söküm ve montaj (talep ederseniz) hizmetin bir parçası; ekstra bir işlem yapmanız gerekmiyor.",
      },
      {
        question: "Sadece stor perde için de randevu alabilir miyim, halı şart mı?",
        answer: "Hayır, sadece stor perde için de ayrı randevu alabilirsiniz.",
      },
      {
        question: "Hangi bölgelerde bu hizmeti veriyorsunuz?",
        answer:
          "Ankara ve İstanbul'da hizmet verdiğimiz ilçelerin tamamında; bölge sayfalarından kendi ilçenizi görebilirsiniz.",
      },
    ],
  },
  {
    slug: "yorgan-battaniye-yikama",
    name: "Yorgan & Battaniye Yıkama",
    seoTitle: "Yorgan ve Battaniye Yıkama | Ücretsiz Kapıdan Alım-Teslim",
    metaDescription:
      "Yorgan ve battaniyeleriniz yüksek sıcaklıkta hijyenik yıkanır, tam kurutularak teslim edilir. Hizmet verdiğimiz tüm ilçelerde ücretsiz servis.",
    h1: "Yorgan & Battaniye Yıkama",
    intro: [
      "Yorgan ve battaniyeler, hacimleri nedeniyle evde yıkanması ve kurutulması en zor tekstil ürünleri arasında. Yakamoz Halı Yıkama olarak yorgan ve battaniyelerinizi alerjik hassasiyete uygun şekilde yüksek sıcaklıkta hijyenik olarak yıkıyor, tam kuruma garantisiyle teslim ediyoruz.",
      "Hizmet verdiğimiz tüm ilçelerde ücretsiz kapıdan alım-teslim ile hizmet veriyoruz; mevsim değişiminde yorgan/battaniyelerinizi halınızla birlikte veya ayrı olarak gönderebilirsiniz.",
    ],
    faq: [
      {
        question: "Kaç adet yorgan/battaniye gönderebilirim, bir sınır var mı?",
        answer:
          "Belirli bir üst sınır yok; adet ve ölçüye göre teklif WhatsApp üzerinden netleştirilir.",
      },
      {
        question: "Alerjik hassasiyetim var, uygun mu?",
        answer:
          "Evet, yüksek sıcaklıkta hijyenik yıkama süreci alerjik hassasiyete uygun şekilde uygulanıyor.",
      },
      {
        question: "Halı ile aynı randevuda gönderebilir miyim?",
        answer: "Evet, aynı alım-teslim turunda halınızla birlikte gönderebilirsiniz.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
