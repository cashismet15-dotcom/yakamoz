"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const serviceOptions = [
  "Halı Yıkama",
  "Stor Perde Yıkama",
  "Yorgan & Battaniye Yıkama",
];

type QuoteFormProps = {
  defaultService?: string;
  defaultDistrict?: string;
  className?: string;
};

export default function QuoteForm({
  defaultService,
  defaultDistrict,
  className = "",
}: QuoteFormProps) {
  const [service, setService] = useState(
    defaultService ?? serviceOptions[0]
  );
  const [district, setDistrict] = useState(
    defaultDistrict ?? siteConfig.serviceDistricts[0]
  );
  const [detail, setDetail] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      `Merhaba, ${siteConfig.name}'dan teklif almak istiyorum.`,
      `Hizmet: ${service}`,
      `Bölge: ${district}`,
      detail.trim() ? `Detay: ${detail.trim()}` : null,
      name.trim() ? `İsim: ${name.trim()}` : null,
    ].filter(Boolean);

    const url = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-7 ${className}`}
    >
      <p className="font-heading text-lg font-bold text-brand-950">
        Hızlı Teklif Al
      </p>
      <p className="mt-1 text-sm text-brand-900/65">
        Bilgileri girin, hazır mesajınız WhatsApp&apos;a düşsün — fiyatı
        birlikte netleştirelim.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-brand-900/80">
            Hizmet
          </span>
          <select
            className={fieldClass}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-brand-900/80">
            Bölge
          </span>
          <select
            className={fieldClass}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            {siteConfig.serviceDistricts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium text-brand-900/80">
            Ölçü / Adet (opsiyonel)
          </span>
          <input
            type="text"
            className={fieldClass}
            placeholder="Örn: 2 adet 200x300 halı"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium text-brand-900/80">
            İsim (opsiyonel)
          </span>
          <input
            type="text"
            className={fieldClass}
            placeholder="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:brightness-105"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.01-.37.11-.5.11-.11.25-.29.37-.43.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31s-.87.85-.87 2.08.89 2.41 1.02 2.58c.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
        WhatsApp&apos;tan Teklif Al
      </button>
    </form>
  );
}
