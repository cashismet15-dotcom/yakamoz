import Breadcrumb from "@/components/Breadcrumb";
import PriceCalculator from "@/components/PriceCalculator";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { districts, type District } from "@/lib/districts";
import { servicePages } from "@/lib/services";

export default function DistrictPageBody({ district }: { district: District }) {
  const otherDistricts = districts.filter((d) => d.slug !== district.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Halı Yıkama",
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: { "@type": "City", name: district.name },
    url: `${siteConfig.url}/${district.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: `${district.name} Halı Yıkama`, href: `/${district.slug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 pb-4 pt-8 sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Hizmet Bölgesi
        </span>
        <h1 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          {district.h1}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-brand-900/75">
          {district.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-105"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-2xl border border-brand-100 bg-white p-7 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-brand-950">
              {district.name}&apos;de Hizmet Verdiğimiz Mahalleler
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-brand-900/75 sm:grid-cols-3">
              {district.mahalleler.map((mahalle) => (
                <li key={mahalle}>{mahalle}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-brand-900/55">{district.mahalleNote}</p>
          </div>

          <PriceCalculator />
        </div>
      </section>

      <FAQSection
        items={district.faq}
        title={`${district.name} Halı Yıkama Hakkında Sık Sorulan Sorular`}
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="font-heading text-lg font-bold text-brand-950">
          Diğer Hizmet Bölgelerimiz
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {otherDistricts.map((d) => (
            <a
              key={d.slug}
              href={`/${d.slug}`}
              className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-medium text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
            >
              {d.name} Halı Yıkama
            </a>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {servicePages.map((s) => (
            <a
              key={s.slug}
              href={`/${s.slug}`}
              className="text-sm font-medium text-brand-600 underline hover:text-brand-700"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
