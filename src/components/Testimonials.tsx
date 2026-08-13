const testimonials = [
  {
    name: "Doğrulanmış Müşteri — Ayşe K.",
    text: "Halılarımı kapımdan alıp tertemiz, kokusuz ve zamanında teslim ettiler. Fiyatı da gayet uygundu, kesinlikle tavsiye ederim.",
  },
  {
    name: "Doğrulanmış Müşteri — Mehmet Y.",
    text: "Koltuk yıkama hizmeti aldık, kumaşa hiç zarar vermeden yıllardır çıkmayan lekeleri bile çıkardılar. Çok memnun kaldık.",
  },
  {
    name: "Doğrulanmış Müşteri — Zeynep A.",
    text: "İlgili ve nazik ekip, randevu saatine tam uydular. Yorgan ve battaniyelerimiz yumuşacık ve mis gibi kokarak geldi.",
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Müşteri Yorumları
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          Bize Güvenenler Ne Diyor?
        </h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-brand-100 bg-white p-7 shadow-sm"
          >
            <div className="flex gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.9 6.1 20.2l1.3-6.5L2.5 9.2l6.6-.7z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/75">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-5 font-heading text-sm font-bold text-brand-950">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
