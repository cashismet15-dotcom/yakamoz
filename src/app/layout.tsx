import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const title =
  "Yakamoz Halı Yıkama | Esenyurt, Avcılar, Beylikdüzü Halı Yıkama";
const description =
  "Yakamoz Halı Yıkama; Esenyurt, Avcılar, Beylikdüzü, Başakşehir ve Küçükçekmece'de ücretsiz kapıdan alım-teslim ile halı, stor perde, yorgan ve battaniye yıkamada garantili hizmet sunar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "halı yıkama",
    "esenyurt halı yıkama",
    "avcılar halı yıkama",
    "beylikdüzü halı yıkama",
    "başakşehir halı yıkama",
    "küçükçekmece halı yıkama",
    "halı yıkama fabrikası",
    "stor perde yıkama",
    "yorgan yıkama",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DryCleaningOrLaundry",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      email: siteConfig.email,
      areaServed: siteConfig.serviceDistricts.map((district) => ({
        "@type": "City",
        name: district,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      sameAs: [siteConfig.socials.instagram, siteConfig.socials.facebook],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "tr-TR",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${jakarta.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
