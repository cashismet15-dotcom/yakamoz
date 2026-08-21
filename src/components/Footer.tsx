import { siteConfig } from "@/lib/site-config";
import { districts } from "@/lib/districts";
import { servicePages } from "@/lib/services";

const quickLinks = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#fiyat-hesapla", label: "Fiyat Hesapla" },
  { href: "/#bolgeler", label: "Bölgeler" },
  { href: "/blog", label: "Blog" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 font-heading text-lg font-bold text-gold-400">
                Y
              </span>
              <span className="font-heading text-lg font-bold text-white">
                Yakamoz Halı Yıkama
              </span>
            </div>
            <p className="mt-4 text-sm italic text-gold-300">
              Temizlikte güven, hizmette kalite!
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/60">
              {siteConfig.serviceArea}.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">
              Hızlı Linkler
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">
              Hizmetlerimiz
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Halı Yıkama</li>
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <a href={`/${s.slug}`} className="hover:text-gold-300">
                    {s.name}
                  </a>
                </li>
              ))}
              <li>Leke Çıkarma</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">
              Hizmet Bölgeleri
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {districts.map((d) => (
                <li key={d.slug}>
                  <a href={`/${d.slug}`} className="hover:text-gold-300">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">
              İletişim
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-gold-300">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-300">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-brand-100/60">
                {siteConfig.serviceDistricts.join(", ")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Yakamoz Halı Yıkama. Tüm hakları
            saklıdır.
          </p>
          <div className="flex gap-4">
            <a href={siteConfig.socials.instagram} className="hover:text-gold-300">
              Instagram
            </a>
            <a href={siteConfig.socials.facebook} className="hover:text-gold-300">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
