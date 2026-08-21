export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection({
  items,
  title = "Sık Sorulan Sorular",
}: {
  items: FAQItem[];
  title?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="font-heading text-2xl font-bold text-brand-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
        {items.map((item) => (
          <div key={item.question} className="p-6">
            <h3 className="font-heading text-base font-bold text-brand-950">
              {item.question}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
