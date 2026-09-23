"use client";

import type { Lang } from "@/content";
import { cn } from "@/lib/cn";
import { useLanguage } from "./LanguageProvider";

const LANGS: { id: Lang; label: string }[] = [
  { id: "pt", label: "PT-BR" },
  { id: "en", label: "EN-US" },
];

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-[90] border-b-4 border-gold bg-navy">
      <div className="flex flex-wrap items-center justify-between gap-[10px] px-[clamp(12px,3vw,32px)] py-[10px]">
        <a href="#inicio" aria-label={t.header.home} className="flex items-center gap-[9px] no-underline">
          <span className="grid h-8 w-8 -rotate-6 place-items-center bg-gold font-display text-[14px] text-navy">
            AT
          </span>
          <span className="font-display text-[13px] uppercase tracking-[.02em] text-cream">Ana Trama</span>
        </a>

        <div className="flex items-center gap-[6px]">
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-gold">{t.header.langLabel}</span>
          {LANGS.map(({ id, label }) => {
            const active = lang === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setLang(id)}
                className={cn(
                  "cursor-pointer border-2 border-gold px-3 py-[7px] font-display text-[11px] uppercase tracking-[.06em] transition-colors max-md:min-h-[44px]",
                  active ? "bg-gold text-navy" : "bg-transparent text-gold hover:bg-gold/15",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <nav
        aria-label="Seções"
        className="no-scrollbar flex border-t-2 border-navy bg-cream max-md:overflow-x-auto md:flex-wrap"
      >
        {t.nav.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="flex flex-[1_0_auto] items-center justify-center whitespace-nowrap border-r-2 border-navy px-[14px] py-[10px] text-center font-display text-[11px] uppercase tracking-[.08em] text-navy no-underline transition-colors hover:bg-red hover:text-cream max-md:min-h-[44px]"
          >
            {it.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
