import { siteConfig } from "@/lib/site-config";

const badges = [
  { value: "İstanbul Avrupa Yakası", label: "Ücretsiz Servis" },
  { value: "5.000+", label: "Temizlenen Halı" },
  { value: "%100", label: "Garantili Hizmet" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-900 sparkle-bg">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300 ring-1 ring-white/15">
            Esenyurt · Avcılar · Beylikdüzü · Başakşehir · Küçükçekmece
          </span>

          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            İstanbul&apos;da Halılar Tertemiz!
            <br />
            <span className="text-gold-400">Yakamoz</span> Gibi Parlasın
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100/90 sm:text-lg">
            Yakamoz Halı Yıkama olarak halılarınızı önce tozlarından
            arındırıyor, ardından köpüklü ve titiz bir yıkama işlemiyle
            tertemiz hale getiriyoruz. Halılarınız kapınızdan alınır, tertemiz
            şekilde kapınıza teslim edilir — Esenyurt, Avcılar, Beylikdüzü,
            Başakşehir ve Küçükçekmece&apos;de ücretsiz servis, garantili
            hizmet ve güler yüzlü ekiple.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#iletisim"
              className="rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-400/25 transition hover:bg-gold-300"
            >
              Ücretsiz Teklif Al
            </a>
            <a
              href={siteConfig.phoneHref}
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-8 sm:gap-4">
            {badges.map((badge) => (
              <div key={badge.label}>
                <p className="font-heading text-lg font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                  {badge.value}
                </p>
                <p className="mt-1 text-xs text-brand-100/70 sm:text-sm">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 shadow-2xl ring-1 ring-white/10">
            <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_25%_15%,#ffffff_1px,transparent_1px),radial-gradient(circle_at_70%_45%,#ffffff_1px,transparent_1px),radial-gradient(circle_at_40%_70%,#ffffff_1px,transparent_1px),radial-gradient(circle_at_85%_80%,#ffffff_1px,transparent_1px)] [background-size:60px_60px,80px_80px,50px_50px,70px_70px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid h-28 w-28 place-items-center rounded-full bg-gold-400/90 text-brand-950 shadow-xl shadow-gold-400/30 sm:h-36 sm:w-36">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 16c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 11c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute bottom-6 left-0 right-0 px-6 text-center text-sm text-brand-100/70">
              Fotoğraf alanı — ekip / çalışma görseli
            </p>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
            <p className="font-heading text-lg font-bold text-brand-900">
              Ücretsiz
            </p>
            <p className="text-xs text-brand-500">Kapıdan Alım-Teslim</p>
          </div>
        </div>
      </div>
    </section>
  );
}
