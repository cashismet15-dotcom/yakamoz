const steps = [
  {
    no: "01",
    title: "Randevu Alın",
    desc: "Telefon veya WhatsApp ile arayın, size en uygun alım gününü birlikte belirleyelim.",
  },
  {
    no: "02",
    title: "Kapınızdan Alalım",
    desc: "Ekibimiz belirlenen saatte adresinize gelir, halılarınızı ücretsiz olarak teslim alır.",
  },
  {
    no: "03",
    title: "Yıkama & Kurutma",
    desc: "Tesisimizde derinlemesine yıkama, leke çıkarma ve tam kurutma işlemleri uygulanır.",
  },
  {
    no: "04",
    title: "Kapınıza Teslim",
    desc: "Tertemiz ve kokusuz halılarınız, kararlaştırılan tarihte adresinize teslim edilir.",
  },
];

export default function Process() {
  return (
    <section id="surec" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Nasıl Çalışıyoruz
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          4 Adımda Sorunsuz Bir Deneyim
        </h2>
      </div>

      <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-brand-100 lg:block" />
        {steps.map((step) => (
          <div key={step.no} className="relative rounded-2xl bg-white">
            <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-brand-700 font-heading font-bold text-white">
              {step.no}
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-brand-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
