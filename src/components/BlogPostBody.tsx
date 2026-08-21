import Breadcrumb from "@/components/Breadcrumb";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site-config";
import { type BlogPost } from "@/lib/blog";
import { districts } from "@/lib/districts";
import { servicePages } from "@/lib/services";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostBody({ post }: { post: BlogPost }) {
  const relatedServices = servicePages.filter((s) =>
    post.relatedServiceSlugs.includes(s.slug)
  );
  const relatedDistricts = districts.filter((d) =>
    post.relatedDistrictSlugs.includes(d.slug)
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.url}/#business` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-5 pb-16 pt-8 sm:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
          Bilgi Merkezi
        </span>
        <h1 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
          {post.h1}
        </h1>
        <p className="mt-3 text-xs text-brand-900/50">
          Yayın tarihi: {formatDate(post.publishedDate)}
        </p>

        <div className="mt-8 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-bold text-brand-950">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-brand-900/75">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
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

        {(relatedServices.length > 0 || relatedDistricts.length > 0) && (
          <div className="mt-10 border-t border-brand-100 pt-8">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-500">
              İlgili Sayfalar
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-medium text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
                >
                  {s.name}
                </a>
              ))}
              {relatedDistricts.map((d) => (
                <a
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-medium text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
                >
                  {d.name} Halı Yıkama
                </a>
              ))}
            </div>
          </div>
        )}
      </article>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <QuoteForm />
      </section>
    </>
  );
}
