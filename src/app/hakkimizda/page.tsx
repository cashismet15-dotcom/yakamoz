import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Hakkımızda | Yakamoz Halı Yıkama" },
  description:
    "Yakamoz Halı Yıkama; geniş tesisi, tam otomatik makineleri ve leke çıkarma uzmanlığıyla İstanbul Avrupa Yakası'nda fabrikadan doğrudan, ücretsiz kapıdan alım-teslim hizmeti sunar.",
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Hakkımızda", href: "/hakkimizda" },
          ]}
        />

        <section className="mx-auto max-w-3xl px-5 pb-16 pt-8 sm:px-8">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
            Hakkımızda
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
            Fabrikadan Doğrudan, Kapınıza Kadar
          </h1>

          <div className="mt-6 space-y-4 leading-relaxed text-brand-900/75">
            <p>
              Yakamoz Halı Yıkama olarak İstanbul Avrupa Yakası&apos;nda —
              Esenyurt, Avcılar, Beylikdüzü, Başakşehir ve
              Küçükçekmece&apos;de — halı, stor perde ve yorgan/battaniye
              yıkama hizmeti veriyoruz. Müşteriye açık bir mağazamız yok;
              bunun yerine geniş tesisimizde, tam otomatik makinelerle
              çalışıyor ve halınızı kapınızdan alıp yine kapınıza teslim
              ediyoruz.
            </p>
            <p>
              Klasik halı yıkama anlayışında müşteri ya halıyı bir dükkana
              götürür ya da yerinde, sınırlı ekipmanla yapılan bir yıkamayla
              yetinir. Biz bu modeli tersine çevirdik: dükkan yerine
              doğrudan fabrika hizmeti — halınız, sokaktaki bir mağazada
              değil, tam otomatik makinelerin bulunduğu tesisimizde
              yıkanıyor.
            </p>
            <p>
              Makina halısından el dokuma ve yün halıya kadar farklı halı
              türlerini dokusuna uygun yöntemlerle yıkıyor, özellikle leke
              çıkarma konusunda uzmanlaştığımız bir alanda çalışıyoruz —
              kahve, şarap, çamur gibi inatçı lekelerde halının türüne göre
              doğru müdahaleyi biliyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-base font-bold text-brand-950">
                Geniş Tesis, Tam Otomatik Makineler
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                Halılarınız, ev koşullarında ulaşılamayacak kapasitede tam
                otomatik makinelerin bulunduğu geniş tesisimizde
                yıkanıyor.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-base font-bold text-brand-950">
                Leke Çıkarmada Uzmanlaşma
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                Farklı leke ve halı türlerine göre değişen, doğru yöntemi
                bilerek uyguladığımız bir konumuz.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-base font-bold text-brand-950">
                Fabrikadan Doğrudan Hizmet
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                Aracı bir dükkan yok — halınız doğrudan tesisimizde
                yıkanıp size geri döner.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-base font-bold text-brand-950">
                Ücretsiz Kapıdan Alım-Teslim
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                5 ilçenin tamamında, hiçbir ek ücret olmadan kapınızdan
                alıp kapınıza teslim ediyoruz.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href="/siparis-ver"
              className="rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-400/25 transition hover:bg-gold-300"
            >
              Sipariş Ver
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
