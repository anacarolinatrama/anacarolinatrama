"use client";

import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/cn";
import { useLanguage } from "../LanguageProvider";
import { PolaroidCamera } from "./PolaroidCamera";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="inicio" className="relative px-[clamp(12px,3vw,36px)] pt-[clamp(20px,4vw,44px)]">
      <div className="relative overflow-hidden border-[3px] border-navy bg-navy p-[clamp(20px,4vw,48px)] shadow-[12px_12px_0_#E5A81E] max-sm:shadow-[8px_8px_0_#E5A81E]">
        {/* xadrez decorativo */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[44%] opacity-90"
          style={{
            backgroundImage: "repeating-conic-gradient(#1B3072 0% 25%, #12224C 0% 50%)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative flex flex-wrap items-start justify-between gap-[clamp(28px,5vw,64px)]">
          {/* ---------- coluna de texto ---------- */}
          <div className="flex min-w-[min(280px,100%)] max-w-[620px] flex-[1_1_380px] flex-col gap-[clamp(14px,2vw,22px)]">
            <div className="flex flex-wrap items-center gap-[10px]">
              <span className="inline-block bg-gold px-[10px] py-[5px] font-mono text-[10px] uppercase tracking-[.2em] text-navy">
                {h.hello}
              </span>
              <span aria-hidden="true" className="text-[15px] text-red">
                ★
              </span>
            </div>

            <div className="flex flex-wrap items-end gap-[14px]">
              <h1 className="m-0 max-w-[15ch] font-display text-[clamp(34px,6.6vw,82px)] uppercase leading-[.86] tracking-[-.03em] text-cream">
                {h.firstName}
                <br />
                <span className="text-gold">{h.lastName}</span>
              </h1>
              <span className="mb-[10px] inline-flex -rotate-[4deg] items-center gap-[6px] whitespace-nowrap rounded-[3px] border-2 border-navy bg-red px-[9px] py-[5px] font-mono text-[10px] uppercase tracking-[.14em] text-cream shadow-[3px_3px_0_#12224C]">
                {h.badge} <span className="text-gold">→</span>
              </span>
            </div>

            <p className="m-0 max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,18px)] leading-[1.5] text-mist">
              {h.intro}
            </p>

            <div className="flex flex-col items-start gap-4">
              <div
                className="w-full overflow-hidden border-y border-slate py-[7px]"
                style={{
                  maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
                  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
                }}
              >
                <Marquee
                  text={h.marquee}
                  trackClassName="animate-marquee"
                  className="pr-[22px] font-mono text-[10px] uppercase tracking-[.18em] text-cream"
                />
              </div>

              <a
                href="#exp"
                className="inline-flex items-center gap-2 rounded-[6px] border-2 border-navy bg-gold px-[14px] py-[9px] font-display text-[12px] uppercase tracking-[.1em] text-navy no-underline shadow-[4px_4px_0_#12224C] transition-colors hover:bg-red hover:text-cream max-md:min-h-[44px]"
              >
                {h.cta} <span className="font-mono text-[13px]">→</span>
              </a>
            </div>

            <div className="flex flex-col gap-[6px] border-t-2 border-gold pt-[14px]">
              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-gold">{h.nowLabel}</span>
              <span className="text-[13px] leading-[1.5] text-cream">
                {h.now.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="mt-[10px] font-mono text-[10px] uppercase tracking-[.2em] text-gold">
                {h.solveLabel}
              </span>
              <span className="text-[13px] leading-[1.5] text-mist">
                {h.solve.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* ---------- coluna da câmera ---------- */}
          <div className="flex min-w-[min(240px,100%)] flex-[0_1_clamp(240px,32vw,400px)] flex-col gap-[clamp(16px,2.4vw,26px)]">
            <PolaroidCamera />

            <div className="flex flex-col gap-[2px]">
              {h.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "flex items-baseline gap-[10px] border-t border-slate py-2 font-display text-[13px] uppercase tracking-[.08em] text-cream no-underline transition-colors hover:text-gold max-md:py-3",
                    i === h.links.length - 1 && "border-b",
                  )}
                >
                  <span className="font-mono text-red">{l.n}</span>— {l.label}
                  {l.arrow && <span className="text-gold">↗</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
