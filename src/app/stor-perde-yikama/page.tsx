import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import ServicePageBody from "@/components/ServicePageBody";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("stor-perde-yikama")!;

export const metadata: Metadata = {
  title: { absolute: service.seoTitle },
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: service.seoTitle,
    description: service.metaDescription,
    url: `/${service.slug}`,
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePageBody service={service} />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
