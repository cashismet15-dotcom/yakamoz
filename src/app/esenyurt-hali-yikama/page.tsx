import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import DistrictPageBody from "@/components/DistrictPageBody";
import { getDistrictBySlug } from "@/lib/districts";

const district = getDistrictBySlug("esenyurt-hali-yikama")!;

export const metadata: Metadata = {
  title: { absolute: district.seoTitle },
  description: district.metaDescription,
  alternates: { canonical: `/${district.slug}` },
  openGraph: {
    title: district.seoTitle,
    description: district.metaDescription,
    url: `/${district.slug}`,
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <DistrictPageBody district={district} />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
