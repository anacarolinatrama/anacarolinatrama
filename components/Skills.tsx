"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "./hooks/useReveal";
import { useLanguage } from "./LanguageProvider";
import { SectionKicker } from "./ui/SectionKicker";

/** Paleta de cada card, na ordem: paper · navy · gold · cream · red. */
const THEMES = [
  {
    card: "bg-paper border-navy/50 hover:border-red hover:shadow-[0_0_0_2px_rgba(198,54,42,.18)]",
    rule: "border-navy/[.22]",
    num: "text-red",
    tag: "text-navy/55",
    title: "text-navy",
    desc: "text-navy/85",
    chip: "text-navy/80 bg-cream border-navy/25",
  },
  {
    card: "bg-navy border-navy hover:border-gold hover:shadow-[0_0_0_2px_rgba(229,168,30,.3)]",
    rule: "border-cream/30",
    num: "text-gold",
    tag: "text-cream/60",
    title: "text-cream",
    desc: "text-cream/[.86]",
    chip: "text-cream bg-transparent border-cream/45",
  },
  {
    card: "bg-gold border-navy/55 hover:border-navy hover:shadow-[0_0_0_2px_rgba(18,34,76,.2)]",
    rule: "border-navy/35",
    num: "text-red",
    tag: "text-navy/65",
    title: "text-navy",
    desc: "text-navy/[.88]",
    chip: "text-navy/[.82] bg-cream border-navy/30",
  },
  {
    card: "bg-cream border-navy/50 hover:border-red hover:shadow-[0_0_0_2px_rgba(198,54,42,.18)]",
    rule: "border-navy/[.28]",
    num: "text-red",
    tag: "text-navy/60",
    title: "text-navy",
    desc: "text-navy/[.86]",
    chip: "text-navy/80 bg-paper border-navy/25",
  },
  {
    card: "bg-red border-red hover:border-navy hover:shadow-[0_0_0_2px_rgba(18,34,76,.25)]",
    rule: "border-cream/35",
    num: "text-gold",
    tag: "text-cream/[.72]",
    title: "text-cream",
    desc: "text-cream/90",
    chip: "text-cream bg-transparent border-cream/50",
  },
];

export function Skills() {
  const { t } = useLanguage();
  const s = t.skills;
  const { ref, state } = useReveal<HTMLDivElement>();

  return (
    <section
      id="comp"
      className="relative overflow-hidden px-[clamp(12px,3vw,36px)] pb-[clamp(26px,3.4vw,48px)] pt-[clamp(14px,2vw,26px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-[22%] h-[200px] w-[200px] opacity-[.08]"
        style={{
          backgroundImage: "radial-gradient(#12224C 1.5px, transparent 1.6px)",
          backgroundSize: "12px 12px",
        }}
      />

      <SectionKicker number="02" label={s.kicker} className="mb-[clamp(20px,2.6vw,32px)]" />

      <div className="relative mb-[clamp(24px,3vw,44px)] flex flex-col gap-3">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-red">
          <span aria-hidden="true" className="h-[7px] w-[7px] bg-red" />
          {s.eyebrow}
        </span>
        <h2 className="m-0 font-display text-[clamp(17px,1.6vw,25px)] uppercase leading-[1.2] text-navy">
          {s.titleA}
          <br className="hidden lg:inline" /> {s.titleB}
        </h2>
      </div>

      <div ref={ref} className="relative flex flex-wrap items-stretch gap-[clamp(14px,1.4vw,18px)]">
        {s.cards.map((c, i) => {
          const th = THEMES[i % THEMES.length];
          return (
            <article
              key={c.num}
              style={{ animationDelay: `${0.02 + i * 0.05}s` }}
              className={cn(
                "flex min-w-0 flex-[1_1_210px] flex-col gap-[10px] border-2 p-[clamp(16px,1.5vw,22px)] transition-[border-color,box-shadow] duration-[180ms] ease-in-out",
                th.card,
                state === "waiting" && "opacity-0",
                state === "visible" && "animate-rise",
              )}
            >
              <div className={cn("flex items-center justify-between gap-2 border-b pb-[10px]", th.rule)}>
                <span className={cn("font-display text-[15px] tracking-[.06em]", th.num)}>{c.num}</span>
                <span className={cn("font-mono text-[9px] uppercase tracking-[.16em]", th.tag)}>{c.tag}</span>
              </div>
              <h3
                className={cn(
                  "m-0 text-balance font-display text-[clamp(14px,1.05vw,16px)] uppercase leading-[1.18]",
                  th.title,
                )}
              >
                {c.title}
              </h3>
              <p className={cn("m-0 text-pretty text-[13.5px] leading-[1.6]", th.desc)}>{c.desc}</p>
              <div className={cn("mt-auto flex flex-wrap gap-[5px] border-t border-dashed pt-[14px]", th.rule)}>
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className={cn(
                      "whitespace-nowrap border px-[7px] py-1 font-mono text-[10px] tracking-[.04em]",
                      th.chip,
                    )}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="relative mt-[clamp(18px,2.2vw,28px)] flex flex-wrap items-center justify-between gap-[14px]">
        <a
          href="#exp"
          className="inline-flex items-center gap-2 border-2 border-navy bg-navy px-5 py-[13px] font-display text-[12px] uppercase tracking-[.04em] text-cream no-underline shadow-[5px_5px_0_#C6362A] transition-[transform,box-shadow] duration-[180ms] ease-in-out hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#C6362A]"
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
