import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="iletisim" className="bg-brand-950 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-gold-400">
          İletişim
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
          Ücretsiz Teklif İçin Hemen Ulaşın
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100/70">
          Formla uğraşmayın; tek bir arama veya mesajla halılarınızın alım
          gününü birlikte belirleyelim.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-base font-bold text-brand-950 shadow-lg shadow-gold-400/25 transition hover:bg-gold-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.7c0 .6-.4 1-1 1C10.6 21.3 2.7 13.4 2.7 3.7c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:brightness-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.01-.37.11-.5.11-.11.25-.29.37-.43.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31s-.87.85-.87 2.08.89 2.41 1.02 2.58c.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
            </svg>
            WhatsApp&apos;tan Yaz
          </a>
        </div>

        <div className="mx-auto mt-16 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 text-left ring-1 ring-white/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
              E-posta
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block break-words text-sm font-medium text-white hover:text-gold-300"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 text-left ring-1 ring-white/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
              Hizmet Bölgesi
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-100/80">
              {siteConfig.serviceDistricts.join(", ")}
            </p>
            <p className="mt-1 text-xs text-brand-100/50">
              Ücretsiz kapıdan alım-teslim
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 text-left ring-1 ring-white/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
              Çalışma Saatleri
            </p>
            <dl className="mt-2 space-y-1 text-sm text-brand-100/80">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt>{h.day}</dt>
                  <dd className="font-medium text-white">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
