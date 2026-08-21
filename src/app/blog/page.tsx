import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: "Bilgi Merkezi | Yakamoz Halı Yıkama" },
  description:
    "Halı, stor perde ve yorgan/battaniye bakımı hakkında pratik rehberler: kuruma süresi, leke çıkarma, doğru firma seçimi ve daha fazlası.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog", href: "/blog" }]} />

        <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-500">
            Bilgi Merkezi
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-brand-950 sm:text-4xl">
            Halı, Perde ve Tekstil Bakımı Hakkında
          </h1>
          <p className="mt-4 max-w-2xl text-brand-900/70">
            Halınızın, stor perdenizin ve yorganınızın ömrünü uzatmak için
            pratik ve doğru bilgiler.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-brand-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <p className="text-xs text-brand-900/50">
                  {formatDate(post.publishedDate)}
                </p>
                <h2 className="mt-2 font-heading text-lg font-bold text-brand-950 group-hover:text-brand-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
