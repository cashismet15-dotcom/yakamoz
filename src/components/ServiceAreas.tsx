import { districts } from "@/lib/districts";

export default function ServiceAreas() {
  return (
    <section id="bolgeler" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
            Hizmet Bölgelerimiz
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
            İstanbul Avrupa Yakası&apos;nda 5 İlçede Ücretsiz Servis
          </h2>
          <p className="mt-4 text-brand-900/70">
            Aşağıdaki ilçelerin tamamında kapıdan alım-teslim ile hizmet
            veriyoruz — bölgenize özel sayfada mahalle kapsamımızı ve sık
            sorulan soruları bulabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((d) => (
            <a
              key={d.slug}
              href={`/${d.slug}`}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <h3 className="font-heading text-lg font-bold text-brand-950 group-hover:text-brand-600">
                {d.name} Halı Yıkama
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                {d.mahalleNote}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Bölge sayfasını görüntüle
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
