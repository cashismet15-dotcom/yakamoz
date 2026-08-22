"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/fiyat-hesapla", label: "Fiyat Hesapla" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center">
          <Image
            src="/media/logo.png"
            alt="Yakamoz Halı Yıkama"
            width={1709}
            height={801}
            priority
            sizes="120px"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-900/80 transition hover:text-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-semibold text-brand-900 hover:text-brand-500"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/siparis-ver"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
          >
            Sipariş Ver
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-brand-200 text-brand-800 lg:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-white px-5 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-900/80 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-brand-100 pt-3">
            <a href={siteConfig.phoneHref} className="text-sm font-semibold text-brand-900">
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/siparis-ver"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Sipariş Ver
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
