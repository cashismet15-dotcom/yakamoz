import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Breadcrumb from "@/components/Breadcrumb";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: { absolute: "Sipariş Ver | Yakamoz Halı Yıkama" },
  description:
    "Halı, stor perde veya yorgan/battaniye yıkama siparişinizi ölçünüzü girip fiyatı gördükten sonra hemen verin — ücretsiz kapıdan alım-teslim.",
  alternates: { canonical: "/siparis-ver" },
};

export default function SiparisVerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Sipariş Ver", href: "/siparis-ver" },
          ]}
        />

        <section className="mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-8">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
            Sipariş Ver
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
            Ölçünüzü Girin, Kapınıza Ücretsiz Servis Çağırın
          </h1>
          <p className="mt-4 text-brand-900/70">
            Hizmet türünü seçin, ölçüyü girin, fiyatı görün — ardından isim,
            telefon ve adresinizi paylaşarak ücretsiz kapıdan alım-teslim
            için servis çağırabilirsiniz. Talebiniz WhatsApp üzerinden bize
            iletilir, size dönüş yaparız.
          </p>

          <div className="mt-10">
            <OrderForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
