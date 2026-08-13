const reasons = [
  {
    title: "Ücretsiz Kapıdan Alım-Teslim",
    desc: "Siz sadece arayın, gerisini biz halledelim. Ankara geneli alım ve teslimat ücretsizdir.",
  },
  {
    title: "Organik ve Sağlıklı Yıkama",
    desc: "Cilt ve solunum yollarına duyarlı, çevre dostu deterjanlarla evcil hayvan ve çocuklar için güvenli yıkama.",
  },
  {
    title: "Sigortalı ve Güvenli Taşıma",
    desc: "Halılarınız taşıma sırasında sigorta kapsamındadır, gönül rahatlığıyla teslim edebilirsiniz.",
  },
  {
    title: "Hızlı ve Zamanında Teslimat",
    desc: "Belirlenen tarihte, tertemiz ve kurumuş halde kapınıza kadar teslim garantisi.",
  },
  {
    title: "Uygun ve Şeffaf Fiyatlandırma",
    desc: "Sürpriz ek ücret yok; teklif aşamasında net fiyat, kapıda ödeme kolaylığı.",
  },
  {
    title: "Güler Yüzlü ve Deneyimli Ekip",
    desc: "Eğitimli, nazik ve özenli ekibimizle her adımda size güler yüzlü bir hizmet.",
  },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
            Neden Yakamoz
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
            Halınıza Gösterdiğimiz Özeni
            <br className="hidden sm:block" /> Fark Edeceksiniz
          </h2>
          <p className="mt-4 max-w-md text-brand-900/70">
            Kuruluşumuzdan bu yana binlerce eve ve iş yerine hizmet verdik.
            Amacımız sadece temizlik değil, uzun ömürlü ve sağlıklı bir ev
            ortamı sunmak.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-heading text-2xl font-bold text-brand-700">
                24 Saat
              </p>
              <p className="mt-1 text-xs text-brand-900/60">
                İçinde Alım Randevusu
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-heading text-2xl font-bold text-brand-700">
                4.9 / 5
              </p>
              <p className="mt-1 text-xs text-brand-900/60">
                Müşteri Memnuniyeti
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-400/20 text-gold-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-sm font-bold text-brand-950">
                  {r.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-brand-900/65">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
