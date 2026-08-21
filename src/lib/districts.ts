export type District = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  mahalleler: string[];
  mahalleNote: string;
  faq: { question: string; answer: string }[];
};

export const districts: District[] = [
  {
    slug: "esenyurt-hali-yikama",
    name: "Esenyurt",
    seoTitle: "Esenyurt Halı Yıkama | Ücretsiz Kapıdan Alım-Teslim",
    metaDescription:
      "Esenyurt'ta halı, stor perde, yorgan ve battaniye yıkama; ücretsiz kapıdan alım-teslim ile Pınar, Mehterçeşme, Yeşilkent ve çevresine hizmet veriyoruz. WhatsApp'tan hemen teklif alın.",
    h1: "Esenyurt Halı Yıkama",
    intro: [
      "Esenyurt, 1 milyonu aşan nüfusuyla Türkiye'nin en kalabalık ilçesi ve İstanbul'un en yoğun yerleşim alanlarından biri. Bu yoğunluk, günlük hayatta pratik bir sorunu da beraberinde getiriyor: çok katlı sitelerde ve apartmanlarda ağır bir halıyı asansöre taşımak, aracınıza sığdırmak, sonra da bir yıkama noktasına götürüp geri getirmek. Yakamoz Halı Yıkama olarak bu süreci tersine çeviriyoruz — siz sadece bizi arayın veya WhatsApp'tan yazın, halılarınızı kapınızdan alıp tertemiz şekilde yine kapınıza teslim ediyoruz.",
      "Esenyurt'ta sürekli yeni konut projeleri hayata geçiyor; yeni taşınan haneler için halı, stor perde ve yorgan/battaniye yıkama genellikle taşınma sonrası ilk ihtiyaçlardan biri oluyor. Makina halısından el dokuma ve yün halıya kadar farklı halı türlerini, dokusuna zarar vermeden yıkıyoruz.",
    ],
    mahalleler: [
      "Pınar",
      "Mehterçeşme",
      "Yeşilkent",
      "Esenkent",
      "Örnek",
      "Cumhuriyet",
      "İnönü",
      "Fatih",
      "Namık Kemal",
    ],
    mahalleNote:
      "Esenyurt genelinde ücretsiz kapıdan alım-teslim hizmeti veriyoruz; en yoğun çalıştığımız mahallelerden bazıları yukarıda listelidir.",
    faq: [
      {
        question: "Esenyurt'ta fiziksel bir şubeniz var mı, halıyı bırakabilir miyim?",
        answer:
          "Hayır, müşteriye açık bir mağazamız yok. Tüm hizmet, adresinizden ücretsiz alım ve teslimle yürüyor; siz sadece randevu saatinde evde/iş yerinde olmanız yeterli.",
      },
      {
        question: "Hangi halı türlerini yıkıyorsunuz?",
        answer:
          "Makina halısı, bambu halı, akrilik halı, el dokuma halı ve yün (makina yün dahil) halı türlerini yıkıyoruz.",
      },
      {
        question: "Fiyat nasıl belirleniyor?",
        answer:
          "Fiyat; halının türü, ölçüsü ve adedine göre değişir. WhatsApp'tan fotoğraf/ölçü paylaşarak birkaç dakika içinde net bir teklif alabilirsiniz.",
      },
      {
        question: "Koltuk yıkama hizmetiniz var mı?",
        answer:
          "Şu an için hayır — halı, stor perde, yorgan ve battaniye yıkama konusunda uzmanlaştık.",
      },
    ],
  },
  {
    slug: "avcilar-hali-yikama",
    name: "Avcılar",
    seoTitle: "Avcılar Halı Yıkama | Sahil ve Üniversite Bölgesine Ücretsiz Servis",
    metaDescription:
      "Avcılar'da halı, stor perde ve yorgan yıkama hizmeti; Üniversite, Cihangir, Yeşilkent ve tüm mahallelere ücretsiz kapıdan alım-teslim. WhatsApp'tan hemen teklif alın.",
    h1: "Avcılar Halı Yıkama",
    intro: [
      "Avcılar, Marmara Denizi kıyısında yer alan ve İstanbul Üniversitesi-Cerrahpaşa'nın en büyük yerleşkesine ev sahipliği yapan bir ilçe. Bu ikili karakter — bir yandan sahil şeridindeki aileler, bir yandan kampüs çevresindeki öğrenci ve kiracı yoğunluğu — halı bakımında da farklı ihtiyaçlar doğuruyor: sahile yakın evlerde nem nedeniyle halı ve perdelerin daha sık bakım istemesi, öğrenci evlerinde ise taşınma dönemlerinde hızlı ve güvenilir bir yıkama çözümüne duyulan ihtiyaç.",
      "Yakamoz Halı Yıkama olarak Avcılar'ın tamamında ücretsiz kapıdan alım-teslim hizmeti veriyoruz; halınızı Üniversite mahallesindeki bir öğrenci evinden de, Denizköşkler'deki bir sahil dairesinden de aynı özenle alıp teslim ediyoruz.",
    ],
    mahalleler: [
      "Avcılar Merkez",
      "Ambarlı",
      "Cihangir",
      "Gümüşpala",
      "Denizköşkler",
      "Üniversite",
      "Mustafa Kemal Paşa",
      "Firuzköy",
      "Tahtakale",
      "Yeşilkent",
    ],
    mahalleNote: "Avcılar'ın 10 mahallesinin tamamına hizmet veriyoruz.",
    faq: [
      {
        question: "Kampüse yakın bir öğrenci evinden alım yapabilir misiniz?",
        answer:
          "Evet, Üniversite mahallesi dahil Avcılar'ın her noktasından ücretsiz alım yapıyoruz; randevu saatini WhatsApp üzerinden birlikte belirliyoruz.",
      },
      {
        question: "Stor perde yıkama için de aynı hizmet geçerli mi?",
        answer:
          "Evet — stor perdeleriniz sökülür, yıkanır, ütülenir ve talep ederseniz yerine asılır.",
      },
      {
        question: "Halı yıkama için evde bulunmam şart mı?",
        answer:
          "Alım ve teslim sırasında sizin veya yetkilendirdiğiniz birinin adreste olması gerekiyor; randevu saatini önceden netleştiriyoruz.",
      },
      {
        question: "Yorgan ve battaniyeleri de aynı seferde verebilir miyim?",
        answer:
          "Evet, halı ile birlikte yorgan ve battaniyelerinizi de aynı alım-teslim turunda gönderebilirsiniz.",
      },
    ],
  },
  {
    slug: "beylikduzu-hali-yikama",
    name: "Beylikdüzü",
    seoTitle: "Beylikdüzü Halı Yıkama | E-5 ve TEM Hattına Hızlı Ulaşım",
    metaDescription:
      "Beylikdüzü'nde halı, stor perde, yorgan ve battaniye yıkama; Gürpınar, Yakuplu, Marmara, Kavaklı ve tüm mahallelere ücretsiz kapıdan alım-teslim.",
    h1: "Beylikdüzü Halı Yıkama",
    intro: [
      "Beylikdüzü, kuzeyden E-5 (D-100) karayoluna, güneyden ise tamamen Marmara Denizi'ne komşu; TEM Otoyolu'na da Esenyurt üzerinden kolayca bağlanıyor. İlçenin bu konumu, ekibimizin randevuları güne yayarak planlamasını ve Beylikdüzü'ndeki yoğun site ve rezidans bölgelerine düzenli olarak hizmet götürmesini kolaylaştırıyor.",
      "Beylikdüzü'nde site yönetimleriyle veya bireysel dairelerle çalışıyor, halılarınızı kapınızdan alıp yıkama sonrası yine kapınıza teslim ediyoruz — aracınızla bir yıkama noktasına gitmenize gerek kalmıyor.",
    ],
    mahalleler: [
      "Adnan Kahveci",
      "Barış",
      "Büyükşehir",
      "Cumhuriyet",
      "Dereağzı",
      "Gürpınar",
      "Kavaklı",
      "Marmara",
      "Sahil",
      "Yakuplu",
    ],
    mahalleNote: "Beylikdüzü'nün 10 mahallesinin tamamına hizmet veriyoruz.",
    faq: [
      {
        question: "Site içinden toplu alım yapıyor musunuz?",
        answer:
          "Evet, aynı sitede birden fazla daireden halı/perde/yorgan alımını tek randevuda planlayabiliyoruz; site yönetiminizle veya komşularınızla koordineli randevu için bize yazabilirsiniz.",
      },
      {
        question:
          "Sahil mahallesinde nem nedeniyle halılarda oluşan koku/leke sorunlarıyla ilgileniyor musunuz?",
        answer:
          "Evet, köpüklü ve titiz yıkama sürecimiz nem kaynaklı koku ve lekelerde de etkili sonuç veriyor.",
      },
      {
        question: "Randevu saatini nasıl belirliyoruz?",
        answer:
          "Telefon veya WhatsApp üzerinden yazışarak size uygun gün ve saati birlikte netleştiriyoruz.",
      },
      {
        question: "Battaniye ve yorgan yıkamada özel bir işlem var mı?",
        answer:
          "Evet, alerjik hassasiyete uygun şekilde yüksek sıcaklıkta hijyenik yıkama ve tam kurutma uyguluyoruz.",
      },
    ],
  },
  {
    slug: "basaksehir-hali-yikama",
    name: "Başakşehir",
    seoTitle: "Başakşehir Halı Yıkama | Kayaşehir ve Bahçeşehir'e Ücretsiz Servis",
    metaDescription:
      "Başakşehir'de halı, stor perde ve yorgan yıkama; Kayabaşı, Başak, Güvercintepe, Bahçeşehir ve çevresine ücretsiz kapıdan alım-teslim hizmeti.",
    h1: "Başakşehir Halı Yıkama",
    intro: [
      "Başakşehir'in kuzeyinde yer alan Kayabaşı ve çevresi, son yıllarda Türkiye'nin en büyük uydu kent projelerinden biri olan Kayaşehir ile hızla büyüyor; yeni konut bloklarına sürekli yeni haneler taşınıyor. Yeni bir eve taşınmak çoğu zaman halıların, perdelerin ve yorganların da temiz bir başlangıçla yerleştirilmesi anlamına geliyor — Yakamoz Halı Yıkama olarak bu süreçte ücretsiz kapıdan alım-teslim ile yanınızdayız.",
      "Başakşehir'de Kayabaşı'ndaki yeni sitelerden Başak ve Güvercintepe'deki yerleşik mahallelere, Bahçeşehir'in 1. ve 2. kısımlarına kadar ilçenin genelinde hizmet veriyoruz.",
    ],
    mahalleler: [
      "Altınşehir",
      "Bahçeşehir 1. Kısım",
      "Bahçeşehir 2. Kısım",
      "Başak",
      "Başakşehir",
      "Güvercintepe",
      "İkitelli OSB",
      "Kayabaşı",
      "Şahintepe",
      "Şamlar",
      "Ziya Gökalp",
    ],
    mahalleNote: "Başakşehir'in 11 mahallesinin tamamına hizmet veriyoruz.",
    faq: [
      {
        question:
          "Yeni taşındığım bir eve halı/perde getirtebilir miyim, yoksa önce yıkanmış mı olmalı?",
        answer:
          "Yeni evinize taşınmadan önce veya taşındıktan hemen sonra halı, stor perde ve yorganlarınızı alıp yıkayıp teslim edebiliriz; randevuyu taşınma planınıza göre ayarlıyoruz.",
      },
      {
        question: "Kayabaşı/Kayaşehir bölgesinden alım yapıyor musunuz?",
        answer:
          "Evet, Kayabaşı dahil Başakşehir'in tüm mahallelerinden ücretsiz alım-teslim hizmeti veriyoruz.",
      },
      {
        question: "Bahçeşehir 1. ve 2. Kısım arasında fark var mı?",
        answer:
          "Hizmet açısından fark yok — ikisinde de aynı ücretsiz kapıdan alım-teslim süreciyle çalışıyoruz.",
      },
      {
        question: "Stor perde söküm ve montajını da siz mi yapıyorsunuz?",
        answer:
          "Evet, söküm, yıkama, ütüleme ve yerine asma dahil komple bir hizmet sunuyoruz.",
      },
    ],
  },
  {
    slug: "kucukcekmece-hali-yikama",
    name: "Küçükçekmece",
    seoTitle: "Küçükçekmece Halı Yıkama | Halkalı ve Göl Çevresine Servis",
    metaDescription:
      "Küçükçekmece'de halı, stor perde ve yorgan yıkama; Halkalı, Atakent, Kanarya, Sultanmurat ve tüm mahallelere ücretsiz kapıdan alım-teslim hizmeti.",
    h1: "Küçükçekmece Halı Yıkama",
    intro: [
      "Küçükçekmece, adını taşıyan gölün doğu kıyısında yer alan Halkalı'dan Kanarya ve Atakent gibi yoğun konut mahallelerine kadar geniş bir yerleşim dokusuna sahip; aynı zamanda 200'ün üzerinde fabrika ve sanayi sitesiyle İstanbul'un önemli sanayi bölgelerinden biri. E-5, TEM ve Marmaray'ın kesiştiği bu konum, hem ev hem de iş yeri müşterilerine aynı gün içinde hizmet planlamamızı kolaylaştırıyor.",
      "Yakamoz Halı Yıkama olarak Küçükçekmece'de konut halılarının yanı sıra, talep eden iş yerleri için de halı ve döşeme temizliğine ücretsiz kapıdan alım-teslim ile ulaşıyoruz.",
    ],
    mahalleler: [
      "Atakent",
      "Atatürk",
      "Beşyol",
      "Cennet",
      "Cumhuriyet",
      "Fatih",
      "Fevzi Çakmak",
      "Gültepe",
      "Halkalı Merkez",
      "İnönü",
      "İstasyon",
      "Kanarya",
      "Kartaltepe",
      "Kemalpaşa",
      "Mehmet Akif",
      "Söğütlüçeşme",
      "Sultanmurat",
      "Tevfikbey",
      "Yarımburgaz",
      "Yenimahalle",
      "Yeşilova",
    ],
    mahalleNote: "Küçükçekmece'nin 21 mahallesinin tamamına hizmet veriyoruz.",
    faq: [
      {
        question: "Halkalı'dan alım yapıyor musunuz?",
        answer:
          "Evet, Halkalı Merkez dahil Küçükçekmece'nin tüm mahallelerinden ücretsiz alım-teslim hizmetimiz var.",
      },
      {
        question: "İş yerim/ofisim için halı yıkama talep edebilir miyim?",
        answer:
          "Evet, konut halılarının yanında iş yerleri için de talep üzerine hizmet veriyoruz; ihtiyacınızı WhatsApp'tan iletmeniz yeterli.",
      },
      {
        question:
          "Göle yakın nemli bölgelerde halı kokusu sorunu yaşıyoruz, çözüyor musunuz?",
        answer:
          "Evet, köpüklü yıkama ve tam kurutma sürecimiz nem kaynaklı koku sorunlarında da etkili sonuç veriyor.",
      },
      {
        question: "Yorgan ve battaniye yıkama için ayrı randevu mu almalıyım?",
        answer: "Hayır, halı ile aynı randevuda yorgan ve battaniyelerinizi de alabiliyoruz.",
      },
    ],
  },
];

export function getDistrictBySlug(slug: string) {
  return districts.find((d) => d.slug === slug);
}
