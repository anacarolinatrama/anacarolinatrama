"use client";

import { Marquee } from "./ui/Marquee";
import { useLanguage } from "./LanguageProvider";

/** Faixa vermelha com as especialidades rolando. */
export function Ribbon() {
  const { t } = useLanguage();
  return (
    <div className="mt-[clamp(20px,4vw,44px)] overflow-hidden border-y-[3px] border-navy bg-red py-[9px]">
      <Marquee
        text={t.ribbon}
        trackClassName="animate-ribbon"
        className="pr-[26px] font-display text-[13px] uppercase tracking-[.06em] text-cream"
      />
    </div>
  );
}
