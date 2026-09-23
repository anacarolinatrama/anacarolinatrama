"use client";

import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 px-[clamp(12px,3vw,36px)] pb-[clamp(20px,3vw,40px)] pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-navy">
      <span>{t.footer.text}</span>
      <span className="flex flex-col items-start gap-1 sm:items-end">
        <span className="text-red">{t.footer.end}</span>
        <a href="#inicio" className="text-navy no-underline transition-colors hover:text-red max-md:py-3">
          {t.footer.top}
        </a>
      </span>
    </footer>
  );
}
