import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Breadcrumb from "@/components/Breadcrumb";
import PriceCalculator from "@/components/PriceCalculator";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Fiyat Hesapla | Yakamoz Halı Yıkama" },
  description:
    "Halı, stor perde veya yorgan/battaniye yıkama fiyatınızı hemen hesaplayın. Esenyurt, Avcılar, Beylikdüzü, Başakşehir ve Küçükçekmece'de ücretsiz kapıdan alım-teslim.",
  alternates: { canonical: "/fiyat-hesapla" },
};

export default function FiyatHesaplaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-brand-900 sparkle-bg">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300 ring-1 ring-white/15">
              Fiyat Hesapla
            </span>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Yakamoz Halı Yıkama
            </h1>
            <p className="mt-3 text-base text-brand-100/90 sm:text-lg">
              Esenyurt · Avcılar · Beylikdüzü · Başakşehir · Küçükçekmece
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-100/80 sm:text-base">
              Ücretsiz kapıdan alım-teslim ile hizmet veriyoruz. Aşağıdan
              ölçünüzü girip fiyatınızı hemen görebilir, tesisimizden gerçek
              görüntüleri izleyebilirsiniz.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-lg font-bold text-brand-950 shadow-lg shadow-gold-400/25 transition hover:bg-gold-300"
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
          </div>
        </section>

        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Fiyat Hesapla", href: "/fiyat-hesapla" },
          ]}
        />

        <section className="mx-auto max-w-3xl px-5 pb-4 pt-4 sm:px-8">
          <h2 className="font-heading text-xl font-bold text-brand-950 sm:text-2xl">
            Tesisimizden Görüntüler
          </h2>
          <p className="mt-2 text-sm text-brand-900/65">
            Halılarınız bu tesiste yıkanıyor — merak ettiğiniz süreci
            yakından izleyebilirsiniz.
          </p>
          <div className="mt-5 flex justify-center">
            <video
              className="max-h-[70vh] w-auto rounded-2xl shadow-lg"
              src="/media/tesis-video.mp4"
              controls
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
          <h2 className="font-heading text-xl font-bold text-brand-950 sm:text-2xl">
            Fiyatınızı Hesaplayın
          </h2>
          <p className="mt-2 text-sm text-brand-900/65">
            Hizmet türünü seçip ölçünüzü girin, tahmini fiyatı hemen görün.
          </p>
          <div className="mt-5">
            <PriceCalculator />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
