const services = [
  {
    title: "Halı Yıkama",
    desc: "Her cins ve boyutta halınız, modern makinelerimizle derinlemesine ve dokusuna zarar vermeden yıkanır.",
    icon: (
      <path
        d="M3 8h18M3 8v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M3 8l2-4h14l2 4M7 12h.01M7 16h.01M11 12h6M11 16h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Koltuk Yıkama",
    desc: "Evinizden çıkmadan yerinde veya fabrikada; kumaş ve deri koltuklara özel yöntemlerle yıkama.",
    icon: (
      <path
        d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 12h18v5a1 1 0 0 1-1 1h-1v2h-2v-2H7v2H5v-2H4a1 1 0 0 1-1-1v-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Yorgan & Battaniye",
    desc: "Alerjik hassasiyete uygun, yüksek sıcaklıkta hijyenik yıkama ve tam kuruma garantisi.",
    icon: (
      <path
        d="M4 4h16v16H4V4Zm0 5h16M9 9v11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Perde Yıkama",
    desc: "Söküm, yıkama, ütüleme ve yerine asma dahil komple perde bakım hizmeti.",
    icon: (
      <path
        d="M4 3h16M6 3v16a2 2 0 0 0 2 2M18 3v16a2 2 0 0 1-2 2M9 3c0 5-2 6-2 11s2 6 2 6M15 3c0 5 2 6 2 11s-2 6-2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Leke Çıkarma",
    desc: "Kahve, şarap, çamur gibi inatçı lekelerde uzman müdahale ile eski haline döndürme.",
    icon: (
      <path
        d="M12 3c3 4 6 7.2 6 10.5A6 6 0 0 1 6 13.5C6 10.2 9 7 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Kurumsal Hizmetler",
    desc: "Ofis, otel, restoran ve iş yerleri için periyodik anlaşmalı halı ve döşeme temizliği.",
    icon: (
      <path
        d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M4 21h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Hizmetlerimiz
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          İhtiyacınız Olan Her Temizlik Hizmeti
        </h2>
        <p className="mt-4 text-brand-900/70">
          Evinizin ve iş yerinizin dokuya sahip her yüzeyi için uzman ekip ve
          modern ekipmanlarla profesyonel çözümler.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-brand-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {s.icon}
              </svg>
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-brand-950">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
