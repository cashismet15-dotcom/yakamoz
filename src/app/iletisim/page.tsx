import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: { absolute: "İletişim | Yakamoz Halı Yıkama" },
  description:
    "Yakamoz Halı Yıkama'ya telefon, WhatsApp veya e-posta ile ulaşın. Esenyurt, Avcılar, Beylikdüzü, Başakşehir ve Küçükçekmece'de ücretsiz kapıdan alım-teslim.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "İletişim", href: "/iletisim" },
          ]}
        />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
