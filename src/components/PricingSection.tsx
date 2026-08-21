import PriceCalculator from "@/components/PriceCalculator";

export default function PricingSection() {
  return (
    <section id="fiyat-hesapla" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Fiyat Hesaplama
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          Fiyatınızı Hemen Öğrenin
        </h2>
        <p className="mt-4 text-brand-900/70">
          Fabrikamızda yıkanan halınızın, stor perdenizin veya
          yorgan/battaniyenizin tahmini fiyatını aşağıdan hesaplayın —
          sürpriz ücret yok, net fiyatlandırma.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl px-5 sm:px-8">
        <PriceCalculator />
      </div>
    </section>
  );
}
