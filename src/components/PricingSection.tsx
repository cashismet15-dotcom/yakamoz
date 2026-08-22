import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="fiyat-hesapla" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Fiyat Hesaplama
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          Fiyatınızı Hemen Öğrenin
        </h2>
        <p className="mt-4 text-brand-900/70">
          Halınızın, stor perdenizin veya yorgan/battaniyenizin tahmini
          fiyatını hesaplayın, tesisimizden gerçek görüntüleri izleyin —
          sürpriz ücret yok, net fiyatlandırma.
        </p>
        <Link
          href="/fiyat-hesapla"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
        >
          Fiyat Hesapla
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
