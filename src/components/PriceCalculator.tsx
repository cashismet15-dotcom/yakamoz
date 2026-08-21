"use client";

import { useMemo, useState } from "react";
import {
  carpetPricing,
  storPerdePricePerMetre,
  yorganBattaniyePricePerAdet,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

type Tab = "hali" | "stor-perde" | "yorgan-battaniye";

const tabs: { id: Tab; label: string }[] = [
  { id: "hali", label: "Halı Yıkama" },
  { id: "stor-perde", label: "Stor Perde" },
  { id: "yorgan-battaniye", label: "Yorgan & Battaniye" },
];

function formatTL(value: number) {
  return `${value.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} ₺`;
}

export default function PriceCalculator({
  defaultTab = "hali",
  className = "",
}: {
  defaultTab?: Tab;
  className?: string;
}) {
  const [tab, setTab] = useState<Tab>(defaultTab);
  const [carpetType, setCarpetType] = useState(carpetPricing[0].type);
  const [m2, setM2] = useState("");
  const [metre, setMetre] = useState("");
  const [adet, setAdet] = useState("");

  const selectedCarpet = carpetPricing.find((c) => c.type === carpetType);

  const result = useMemo(() => {
    if (tab === "hali") {
      const value = parseFloat(m2.replace(",", "."));
      if (!value || value <= 0 || !selectedCarpet?.pricePerM2) return null;
      return value * selectedCarpet.pricePerM2;
    }
    if (tab === "stor-perde") {
      const value = parseFloat(metre.replace(",", "."));
      if (!value || value <= 0) return null;
      return value * storPerdePricePerMetre;
    }
    const value = parseFloat(adet.replace(",", "."));
    if (!value || value <= 0) return null;
    return value * yorganBattaniyePricePerAdet;
  }, [tab, m2, metre, adet, selectedCarpet]);

  const fieldClass =
    "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20";

  function whatsappHref() {
    if (!result) return siteConfig.whatsappHref;
    const detail =
      tab === "hali"
        ? `${carpetType}, ${m2} m²`
        : tab === "stor-perde"
          ? `Stor perde, ${metre} metre`
          : `Yorgan/Battaniye, ${adet} adet`;
    const lines = [
      `Merhaba, ${siteConfig.name} fiyat hesaplama aracından geldim.`,
      `Detay: ${detail}`,
      `Tahmini fiyat: ${formatTL(result)}`,
      "Kesin teklif ve randevu almak istiyorum.",
    ];
    return `${siteConfig.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <div
      className={`rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-7 ${className}`}
    >
      <p className="font-heading text-lg font-bold text-brand-950">
        Fiyat Hesapla
      </p>
      <p className="mt-1 text-sm text-brand-900/65">
        Ölçüyü girin, tahmini fiyatı hemen görün — kesin fiyat için WhatsApp&apos;tan onaylayabilirsiniz.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === t.id
                ? "bg-brand-600 text-white"
                : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {tab === "hali" && (
          <>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-brand-900/80">
                Halı Türü
              </span>
              <select
                className={fieldClass}
                value={carpetType}
                onChange={(e) => setCarpetType(e.target.value)}
              >
                {carpetPricing.map((c) => (
                  <option key={c.type} value={c.type}>
                    {c.type} — {c.pricePerM2} ₺/m²
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-brand-900/80">
                Metrekare (m²)
              </span>
              <input
                type="text"
                inputMode="decimal"
                className={fieldClass}
                placeholder="Örn: 6"
                value={m2}
                onChange={(e) => setM2(e.target.value)}
              />
            </label>
          </>
        )}

        {tab === "stor-perde" && (
          <label className="block text-sm sm:col-span-2">
            <span className="mb-1.5 block font-medium text-brand-900/80">
              Metre ({storPerdePricePerMetre} ₺/metre)
            </span>
            <input
              type="text"
              inputMode="decimal"
              className={fieldClass}
              placeholder="Örn: 3"
              value={metre}
              onChange={(e) => setMetre(e.target.value)}
            />
          </label>
        )}

        {tab === "yorgan-battaniye" && (
          <label className="block text-sm sm:col-span-2">
            <span className="mb-1.5 block font-medium text-brand-900/80">
              Adet ({yorganBattaniyePricePerAdet} ₺/adet)
            </span>
            <input
              type="text"
              inputMode="decimal"
              className={fieldClass}
              placeholder="Örn: 2"
              value={adet}
              onChange={(e) => setAdet(e.target.value)}
            />
          </label>
        )}
      </div>

      {result !== null && (
        <div className="mt-5 rounded-xl bg-brand-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Tahmini Fiyat
          </p>
          <p className="mt-1 font-heading text-2xl font-bold text-brand-950">
            {formatTL(result)}
          </p>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-brand-900/50">
        Fiyatlar halının/ürünün durumuna göre değişebilir; kesin fiyat halıyı
        gördükten sonra netleşir. Sürpriz ek ücret uygulamıyoruz.
      </p>

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:brightness-105"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.01-.37.11-.5.11-.11.25-.29.37-.43.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31s-.87.85-.87 2.08.89 2.41 1.02 2.58c.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
        {result !== null ? "WhatsApp'tan Onaylat" : "WhatsApp'tan Sor"}
      </a>
    </div>
  );
}
