import { siteConfig } from "@/lib/site-config";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-brand-900/60">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="font-medium text-brand-900/80">
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="hover:text-brand-600">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
