import Breadcrumb from "@/components/Breadcrumb";
import QuoteForm from "@/components/QuoteForm";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { districts } from "@/lib/districts";
import { type ServicePage } from "@/lib/services";

export default function ServicePageBody({ service }: { service: ServicePage }) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: siteConfig.serviceDistricts.map((d) => ({
      "@type": "City",
      name: d,
    })),
    url: `${siteConfig.url}/${service.slug}`,
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
          { label: service.name, href: `/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 pb-4 pt-8 sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Hizmetlerimiz
        </span>
        <h1 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          {service.h1}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-brand-900/75">
          {service.intro.map((paragraph) => (
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
        <QuoteForm defaultService={service.name} className="max-w-xl" />
      </section>

      <FAQSection items={service.faq} title={`${service.name} Hakkında Sık Sorulan Sorular`} />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="font-heading text-lg font-bold text-brand-950">
          Hizmet Bölgelerimiz
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {districts.map((d) => (
            <a
              key={d.slug}
              href={`/${d.slug}`}
              className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-medium text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
            >
              {d.name} Halı Yıkama
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
