export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  publishedDate: string; // ISO date
  sections: BlogSection[];
  relatedServiceSlugs: string[];
  relatedDistrictSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hali-kac-gunde-kurur",
    title: "Halı Kaç Günde Kurur?",
    seoTitle: "Halı Kaç Günde Kurur? Kuruma Süresini Etkileyen Faktörler",
    metaDescription:
      "Halının kuruma süresi neye göre değişir? Halı türü, kalınlık, hava koşulları ve kurutma yöntemine göre değişen süreleri ve dikkat edilmesi gerekenleri anlatıyoruz.",
    h1: "Halı Kaç Günde Kurur?",
    excerpt:
      "Kuruma süresi tek bir sayı değil; halı türü, kalınlık ve kurutma yöntemine göre değişir. Süreyi etkileyen faktörleri ve neden önemli olduğunu anlatıyoruz.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "Kuruma süresi neden tek bir sayı ile ifade edilemez?",
        paragraphs: [
          "Halı yıkama firmalarına en sık sorulan sorulardan biri kuruma süresi olsa da, bu sürenin tek bir gün sayısıyla cevaplanması yanıltıcı olur. Bir makina halısı ile yoğun dokulu bir el dokuma halının, ya da ince bir kilim ile kalın tüylü bir halının kuruma süresi birbirinden ciddi şekilde farklıdır.",
          "Kuruma süresini asıl belirleyen, halının içindeki nemin ne kadar hızlı buharlaştığıdır — bu da halının yapısı, ortam koşulları ve kullanılan kurutma yöntemine bağlıdır.",
        ],
      },
      {
        heading: "Süreyi etkileyen başlıca faktörler",
        paragraphs: [
          "Halı türü ve kalınlığı: Yün ve el dokuma halılar, lifleri daha fazla su tuttuğu için makina halılarına göre genellikle daha uzun sürede kurur. Tüy yüksekliği arttıkça kuruma süresi de uzar.",
          "Ortam sıcaklığı ve nem oranı: Nemli havalarda (özellikle deniz kıyısına yakın bölgelerde) doğal kuruma yavaşlar, çünkü havadaki nem oranı zaten yüksektir. Kapalı ve havasız bir ortamda bırakılan halı, hava sirkülasyonu olan bir alana göre çok daha yavaş kurur.",
          "Yıkama yöntemi: Halıya ne kadar fazla su/köpük uygulandığı ve fazla suyun ne kadar iyi sıkıldığı/çekildiği, kuruma süresinin en belirleyici parçalarından biridir. Ev koşullarında yapılan yıkamalarda bu adım genellikle ihmal edilir ve halı gereğinden fazla ıslak kalır.",
          "Kurutma ortamı: Doğal havada (gölgede, hava akımı olan bir alanda) kurutma ile kontrollü, havalandırmalı bir tesiste kurutma arasında ciddi fark vardır. Güneşe doğrudan uzun süre maruz bırakmak ise bazı halı türlerinde renk solmasına yol açabilir.",
        ],
      },
      {
        heading: "Yarı kuru halı neden risklidir?",
        paragraphs: [
          "Halı tam kurumadan katlanır, rulo yapılır veya zemine serilirse, halının içinde nem hapsolur. Bu durum küf oluşumuna, kötü kokuya ve zamanla halı tabanının (özellikle latex tabanlı makina halılarında) bozulmasına neden olabilir. Bu yüzden 'erken teslim' her zaman avantaj değildir — kuruma sürecinin eksiksiz tamamlanması, halının ömrü açısından yıkamanın kendisi kadar önemlidir.",
        ],
      },
      {
        heading: "Yakamoz'da kurutma süreci",
        paragraphs: [
          "Yakamoz Halı Yıkama olarak halılarınızı, tam kuruma sağlanmadan teslim etmiyoruz. Kesin bir teslim tarihi ihtiyacınız varsa, halınızın türünü ve ölçüsünü WhatsApp üzerinden paylaşarak size en gerçekçi süreyi netleştirebiliriz.",
        ],
      },
    ],
    relatedServiceSlugs: [],
    relatedDistrictSlugs: [],
  },
  {
    slug: "halida-leke-nasil-cikar",
    title: "Halıda İnatçı Lekeler Nasıl Çıkar?",
    seoTitle: "Halıda İnatçı Lekeler Nasıl Çıkar? Kahve, Şarap, Çamur Lekesi Rehberi",
    metaDescription:
      "Kahve, şarap ve çamur gibi inatçı halı lekelerinde evde ilk müdahale nasıl yapılır, hangi durumlarda profesyonel destek gerekir? Pratik ve güvenli öneriler.",
    h1: "Halıda İnatçı Lekeler Nasıl Çıkar?",
    excerpt:
      "Lekeye doğru ve hızlı müdahale, sonucu büyük ölçüde değiştirir. Evde güvenle uygulayabileceğiniz ilk yardım adımlarını ve ne zaman profesyonel destek gerektiğini anlatıyoruz.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "İlk 10 dakika en kritik zaman dilimidir",
        paragraphs: [
          "Bir sıvı halıya döküldüğü anda, lifin içine ne kadar derine işlediği zamanla artar. Bu yüzden lekeye müdahale etmek için 'sonra hallederim' dememek, mümkünse ilk dakikalarda basit bir ilk yardım uygulamak sonucu doğrudan etkiler.",
        ],
      },
      {
        heading: "Doğru ilk müdahale: ovmak değil, bastırmak",
        paragraphs: [
          "En yaygın hata, lekeyi bir bezle ovalamaktır. Ovmak, lekeyi lif içine daha derin iter ve halının dokusuna zarar verebilir. Bunun yerine temiz, açık renkli bir bez veya kağıt havluyla lekenin üzerine bastırarak sıvıyı emdirmek çok daha etkilidir — dıştan içe değil, kenarlardan merkeze doğru bastırmak lekenin yayılmasını önler.",
        ],
      },
      {
        heading: "Leke türüne göre farklılık gösteren durumlar",
        paragraphs: [
          "Kahve ve çay gibi tanenli lekeler: Soğuk suyla nemlendirilmiş bir bezle bastırmak, sıcak su kullanmaktan daha güvenlidir — sıcak su, tanen içeren lekelerin lif üzerinde 'pişerek' sabitlenmesine yol açabilir.",
          "Şarap ve meyve suyu gibi renkli lekeler: Bu tür lekeler görünürde çıkmış gibi görünse bile, kuruduktan sonra tekrar ortaya çıkabilir (bu duruma 'gölge leke' denir). Bu yüzden ev müdahalesinden sonra bile profesyonel bir kontrol faydalı olabilir.",
          "Çamur ve toprak lekeleri: Islakken ovalamak yerine, önce tamamen kurumasını beklemek ve kuru çamuru fırçalayarak/elektrik süpürgesiyle almak, ardından kalan izi nemli bir bezle almak daha etkili sonuç verir.",
        ],
      },
      {
        heading: "Ne zaman evde denemeyi bırakıp profesyonel destek almalısınız?",
        paragraphs: [
          "El dokuma, yün veya ipek gibi hassas halı türlerinde ev kimyasalları (özellikle amonyak veya çamaşır suyu içeren ürünler) renk akması ve doku bozulmasına yol açabilir — bu tür halılarda risk almamak en güvenlisidir.",
          "Leke zaten kurumuş ve eskimişse, ya da birden fazla kez ev yöntemiyle müdahale edilmiş ama iz hâlâ görünüyorsa, halının derinlemesine ve profesyonel yıkamaya ihtiyacı var demektir.",
        ],
      },
      {
        heading: "Yakamoz'da leke çıkarma yaklaşımımız",
        paragraphs: [
          "Kahve, şarap, çamur gibi inatçı lekelerde halının türüne uygun yöntemle müdahale ediyoruz. Halınızı incelemeden kesin bir sonuç garantisi vermek yerine, önce halıyı görüp değerlendiriyoruz — bu konuda bize WhatsApp'tan fotoğraf gönderebilirsiniz.",
        ],
      },
    ],
    relatedServiceSlugs: [],
    relatedDistrictSlugs: [],
  },
  {
    slug: "hali-yikama-firmasi-secerken-nelere-dikkat-edilmeli",
    title: "Halı Yıkama Firması Seçerken Nelere Dikkat Edilmeli?",
    seoTitle: "Halı Yıkama Firması Seçerken Nelere Dikkat Edilmeli? Kontrol Listesi",
    metaDescription:
      "Halı yıkama firması seçerken sorulması gereken sorular ve dikkat edilmesi gereken noktalar: alım-teslim, fiyatlandırma şeffaflığı, hasar sorumluluğu ve daha fazlası.",
    h1: "Halı Yıkama Firması Seçerken Nelere Dikkat Edilmeli?",
    excerpt:
      "Fiyat tek kriter olmamalı. Alım-teslim şekli, sorumluluk, hizmet bölgesi ve iletişim hızı gibi noktaları kontrol ederek doğru firmayı seçmenin yollarını anlatıyoruz.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "Alım-teslim modeli net mi?",
        paragraphs: [
          "Bazı firmalar sadece belirli saatlerde, bazıları ise tüm gün kapıdan alım-teslim yapıyor. Randevu saatinin nasıl belirlendiğini, alım ve teslimin ücretsiz olup olmadığını ve hangi bölgeleri kapsadığını baştan netleştirmek, sonradan yaşanacak sürpriz maliyetlerin önüne geçer.",
        ],
      },
      {
        heading: "Halı türüne göre yöntem biliyorlar mı?",
        paragraphs: [
          "El dokuma, yün, ipek gibi hassas halılar ile standart makina halısı aynı yöntemle yıkanmamalı. Firmayla görüşürken halınızın türünü belirtip nasıl bir yöntem uygulanacağını sormanız, hem halınızın korunması hem de gerçekçi bir sonuç beklentisi için önemlidir.",
        ],
      },
      {
        heading: "Fiyatlandırma şeffaf mı, sürpriz ücret var mı?",
        paragraphs: [
          "Teklif aşamasında net bir bilgi almak — halı teslim edilirken 'ek işlem ücreti', 'zor leke ücreti' gibi sürpriz kalemlerle karşılaşmamak önemlidir. Güvenilir firmalar, halının türü ve durumuna göre fiyatı teslim almadan önce netleştirir.",
        ],
      },
      {
        heading: "Hasar durumunda sorumluluk kime ait?",
        paragraphs: [
          "Taşıma veya yıkama sırasında oluşabilecek bir hasar durumunda firmanın nasıl bir sorumluluk politikası olduğunu sormak, özellikle değerli veya el dokuma halılar için önemli bir güvence sağlar.",
        ],
      },
      {
        heading: "İletişime ne kadar hızlı ulaşılıyor?",
        paragraphs: [
          "Randevu değişikliği, teslim tarihi sorgusu veya acil bir soru olduğunda firmaya WhatsApp veya telefonla ne kadar hızlı ulaşabildiğiniz, hizmet kalitesinin en somut göstergelerinden biridir — bunu ilk mesajınıza verilen yanıt süresinden bile anlayabilirsiniz.",
        ],
      },
      {
        heading: "Yakamoz'u tercih etme sebepleri",
        paragraphs: [
          "Yakamoz Halı Yıkama olarak Esenyurt, Avcılar, Beylikdüzü, Başakşehir ve Küçükçekmece'nin tamamında ücretsiz kapıdan alım-teslim sağlıyoruz. Fiyatı halının türü ve ölçüsüne göre WhatsApp üzerinden netleştiriyor, sürpriz ücret uygulamıyoruz. Sorularınız için WhatsApp'tan bize ulaşabilirsiniz.",
        ],
      },
    ],
    relatedServiceSlugs: [],
    relatedDistrictSlugs: [
      "esenyurt-hali-yikama",
      "avcilar-hali-yikama",
      "beylikduzu-hali-yikama",
      "basaksehir-hali-yikama",
      "kucukcekmece-hali-yikama",
    ],
  },
  {
    slug: "yorgan-battaniye-ne-siklikla-yikanmali",
    title: "Yorgan ve Battaniye Ne Sıklıkla Yıkanmalı?",
    seoTitle: "Yorgan ve Battaniye Ne Sıklıkla Yıkanmalı?",
    metaDescription:
      "Yorgan ve battaniyelerin ne sıklıkla yıkanması gerektiğini, mevsim değişiminde nelere dikkat edilmesi gerektiğini ve ev tipi çamaşır makinesinin neden yetersiz kalabileceğini anlatıyoruz.",
    h1: "Yorgan ve Battaniye Ne Sıklıkla Yıkanmalı?",
    excerpt:
      "Yorgan ve battaniyeler günlük kullanılan tekstiller gibi sık yıkanmasa da, mevsim geçişlerinde ihmal edilmemesi gereken bir bakım döngüsü var.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "Neden yorgan/battaniye çarşaf kadar sık yıkanmıyor ama ihmal de edilmemeli?",
        paragraphs: [
          "Yorgan ve battaniyeler genelde bir çarşafın veya nevresimin altında kullanıldığı için doğrudan cilt teması sınırlıdır — bu yüzden haftalık yıkama gerektirmezler. Ancak zamanla toz akarı, nem ve deri hücreleri iç dolguya kadar işleyebilir; bu birikim özellikle alerjik hassasiyeti olan kişiler için önemli bir konudur.",
        ],
      },
      {
        heading: "Mevsim geçişleri en doğru zamanlama",
        paragraphs: [
          "Kışlık yorgan ve battaniyeleri dolaba kaldırmadan önce, yazlık olanları ise kullanıma açmadan önce yıkatmak hem uzun süreli depolamada kötü koku/küf oluşumunu engeller hem de bir sonraki sezonda temiz bir şekilde kullanmaya başlamanızı sağlar.",
        ],
      },
      {
        heading: "Ev tipi çamaşır makinesi neden yetersiz kalabilir?",
        paragraphs: [
          "Büyük hacimli yorgan ve battaniyeler, standart ev tipi çamaşır makinelerinin kapasitesini ve durulama gücünü zorlar. Yeterince durulanmayan deterjan kalıntısı hem cilt tahrişine yol açabilir hem de ürünün tam kurumasını zorlaştırır. Ayrıca yüksek sıcaklıkta hijyenik yıkama gerektiren durumlarda (alerjik hassasiyet, toz akarı temizliği gibi) ev makineleri genelde yetersiz kalır.",
        ],
      },
      {
        heading: "Yakamoz'da yorgan ve battaniye yıkama",
        paragraphs: [
          "Yorgan ve battaniyelerinizi alerjik hassasiyete uygun şekilde yüksek sıcaklıkta hijyenik olarak yıkıyor, tam kuruma garantisiyle teslim ediyoruz. Halınızla birlikte veya ayrı olarak, Esenyurt, Avcılar, Beylikdüzü, Başakşehir ve Küçükçekmece'nin tamamında ücretsiz kapıdan alım-teslim ile gönderebilirsiniz.",
        ],
      },
    ],
    relatedServiceSlugs: ["yorgan-battaniye-yikama"],
    relatedDistrictSlugs: [],
  },
  {
    slug: "stor-perde-ne-siklikla-yikanmali",
    title: "Stor Perde Ne Sıklıkla Yıkanmalı ve Nasıl Bakım Yapılır?",
    seoTitle: "Stor Perde Ne Sıklıkla Yıkanmalı? Bakım Rehberi",
    metaDescription:
      "Stor perdeler ne sıklıkla yıkanmalı, evde yıkamanın riskleri neler? Mutfak ve pencere önü gibi yoğun kirlenen alanlar için pratik bakım önerileri.",
    h1: "Stor Perde Ne Sıklıkla Yıkanmalı ve Nasıl Bakım Yapılır?",
    excerpt:
      "Stor perdeler diğer perde türlerine göre daha fazla toz ve güneş ışığına maruz kalır. Ne sıklıkla bakım gerektiğini ve evde yıkamanın neden riskli olabileceğini anlatıyoruz.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "Stor perdeler neden diğer perdelere göre daha hızlı kirlenir?",
        paragraphs: [
          "Stor perdeler genellikle pencereye bitişik monte edildiği için doğrudan dış toza, nem yoğunlaşmasına ve güneş ışığına maruz kalır. Mutfak pencerelerinde ise buna yağ buharı da eklenir — bu da stor perdelerin klasik kumaş perdelere göre daha sık bakım istemesinin başlıca nedenidir.",
        ],
      },
      {
        heading: "Ne sıklıkla bakım yapılmalı?",
        paragraphs: [
          "Toz almak (kuru bezle veya elektrik süpürgesinin yumuşak başlığıyla) aylık bir rutin olarak yapılabilir. Derin/ıslak yıkama ise genelde mevsimlik bir bakım olarak düşünülür — özellikle mutfak ve sokağa bakan pencerelerde bu süre kısalabilir.",
        ],
      },
      {
        heading: "Evde yıkamanın riskleri",
        paragraphs: [
          "Stor perdeler, mekanizmaları (zincir, ip, sarma sistemi) nedeniyle klasik perdeler gibi kolayca sökülüp çamaşır makinesine atılamaz. Yanlış söküm mekanizmaya zarar verebilir; yanlış yıkama yöntemi ise kumaşın gerilmesine veya şeklini kaybetmesine yol açabilir. Bu yüzden stor perde bakımı, diğer tekstil ürünlerine göre daha fazla teknik bilgi gerektirir.",
        ],
      },
      {
        heading: "Yakamoz'da stor perde yıkama süreci",
        paragraphs: [
          "Stor perdelerinizi önce yerinden dikkatlice söküyor, uygun yöntemle yıkıyor, ütülüyor ve isterseniz yeniden yerine asarak teslim ediyoruz. Bu hizmeti halı yıkama ile aynı ücretsiz kapıdan alım-teslim modeliyle, hizmet bölgemizin tamamında sunuyoruz.",
        ],
      },
    ],
    relatedServiceSlugs: ["stor-perde-yikama"],
    relatedDistrictSlugs: [],
  },
  {
    slug: "hali-yikama-sureci-nasil-isler",
    title: "Profesyonel Halı Yıkama Süreci Nasıl İşler?",
    seoTitle: "Profesyonel Halı Yıkama Süreci Nasıl İşler? Adım Adım Anlatım",
    metaDescription:
      "Toz alma, köpüklü yıkama, durulama ve kurutma aşamalarıyla profesyonel halı yıkama süreci adım adım nasıl işler? Her aşamanın neden önemli olduğunu anlatıyoruz.",
    h1: "Profesyonel Halı Yıkama Süreci Nasıl İşler?",
    excerpt:
      "Halı yıkama, tek bir 'yıkama' adımından ibaret değil. Toz alma, köpüklü yıkama ve kurutma aşamalarının her birinin ayrı bir amacı var.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "1. Toz alma: görünmeyen ama en kritik adım",
        paragraphs: [
          "Halı ıslatılmadan önce içindeki toz ve kum alınmazsa, bu partiküller su ile birleşip çamura dönüşür ve halının lifine daha derin işler. Bu yüzden profesyonel yıkamada ilk adım her zaman kuru toz alma işlemidir — doğrudan ıslak yıkamaya geçmek, sonucu ciddi şekilde olumsuz etkiler.",
        ],
      },
      {
        heading: "2. Köpüklü yıkama: neden sadece 'sabunlamak' değildir",
        paragraphs: [
          "Köpüklü yıkama yöntemi, halının liflerine derinlemesine nüfuz ederken aşırı ıslatmayı önler. Aşırı su kullanımı hem kuruma süresini uzatır hem de bazı halı türlerinde taban yapışkanının (latex) zamanla bozulmasına yol açabilir — bu yüzden 'ne kadar çok su o kadar temiz' algısı yanlıştır.",
        ],
      },
      {
        heading: "3. Durulama: deterjan kalıntısı neden önemli?",
        paragraphs: [
          "Yeterince durulanmamış bir halıda kalan deterjan kalıntısı, zamanla tozu daha hızlı çeken yapışkan bir yüzey oluşturur — yani halı yıkandıktan kısa süre sonra daha çabuk kirlenmiş gibi görünebilir. İyi bir durulama adımı, bu sorunun önüne geçer.",
        ],
      },
      {
        heading: "4. Kurutma: sürecin tamamlayıcı adımı",
        paragraphs: [
          "Kuruma süresini etkileyen faktörleri detaylıca ele aldığımız yazımızda anlattığımız gibi, kontrollü ve havalandırmalı bir ortamda tam kurutma, halının hem kokusuz hem de küf riskinden uzak teslim edilmesi için tamamlayıcı bir adımdır.",
        ],
      },
      {
        heading: "Yakamoz'da süreç",
        paragraphs: [
          "Halılarınızı önce tozlarından arındırıyor, ardından köpüklü ve titiz bir yıkama işlemiyle tertemiz hale getiriyoruz. Halılarınız kapınızdan alınır, tertemiz ve tam kurumuş şekilde yine kapınıza teslim edilir.",
        ],
      },
    ],
    relatedServiceSlugs: [],
    relatedDistrictSlugs: [],
  },
  {
    slug: "yeni-eve-tasinirken-hali-perde-bakimi",
    title: "Yeni Eve Taşınırken Halı, Perde ve Yorgan Bakımı İçin Kontrol Listesi",
    seoTitle: "Yeni Eve Taşınırken Halı ve Perde Bakımı İçin Kontrol Listesi",
    metaDescription:
      "Taşınma sürecinde halı, stor perde ve yorgan/battaniyelerin bakımı için pratik bir kontrol listesi — hangi ürünler öncelikli yıkanmalı, ne zaman planlanmalı?",
    h1: "Yeni Eve Taşınırken Halı, Perde ve Yorgan Bakımı İçin Kontrol Listesi",
    excerpt:
      "Taşınma süreci tekstil ürünlerini nakliye tozuna ve kirliliğine maruz bırakır. Yeni eve temiz bir başlangıç için nelere öncelik vermeniz gerektiğini anlatıyoruz.",
    publishedDate: "2026-08-21",
    sections: [
      {
        heading: "Taşınma neden tekstil ürünleri için bir risk dönemi?",
        paragraphs: [
          "Nakliye sırasında halılar, perdeler ve yorganlar genellikle rulo yapılıp kamyona yüklenir, bazen depoda bir süre bekletilir. Bu süreçte toz, nem ve bazen haşere riskiyle karşılaşabilirler. Eski evden yeni eve 'olduğu gibi' taşınan tekstiller, yeni evde de eski evin izlerini taşımaya devam eder.",
        ],
      },
      {
        heading: "Öncelik sırası nasıl olmalı?",
        paragraphs: [
          "Halılar: Taşınmadan önce veya hemen sonra yıkanması en çok fark yaratan üründür — çünkü zemin teması nedeniyle en çok kirlenen tekstil parçasıdır.",
          "Yorgan ve battaniyeler: Uzun süre kapalı bir dolapta veya kutuda beklediyse, kullanıma açmadan önce yıkanması nem/küf riskini önler.",
          "Stor perdeler: Yeni evde pencere ölçüleri farklıysa zaten yeniden monte edilecektir — bu aşama, sökülmüşken yıkama için de iyi bir fırsattır.",
        ],
      },
      {
        heading: "Taşınmadan önce mi, sonra mı planlanmalı?",
        paragraphs: [
          "Mümkünse taşınmadan birkaç gün önce randevu planlamak, yeni eve tertemiz ürünlerle girmenizi sağlar. Ancak taşınma programı sıkışıksa, taşındıktan sonraki ilk haftada da bu süreci tamamlamak hâlâ fayda sağlar — önemli olan sürecin ihmal edilmemesi.",
        ],
      },
      {
        heading: "Yakamoz taşınma sürecinde yanınızda",
        paragraphs: [
          "Başakşehir'de özellikle Kayabaşı ve Kayaşehir gibi hızla büyüyen bölgelerde yeni taşınan haneler için halı, stor perde ve yorgan/battaniye yıkamayı ücretsiz kapıdan alım-teslim ile sunuyoruz — randevuyu taşınma planınıza göre birlikte ayarlıyoruz.",
        ],
      },
    ],
    relatedServiceSlugs: ["stor-perde-yikama", "yorgan-battaniye-yikama"],
    relatedDistrictSlugs: ["basaksehir-hali-yikama"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
