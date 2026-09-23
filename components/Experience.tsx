"use client";

import { useLanguage } from "./LanguageProvider";
import { SectionKicker } from "./ui/SectionKicker";

export function Experience() {
  const { t } = useLanguage();
  const e = t.exp;
  const items = e.items.filter((it) => !it.hidden);

  return (
    <section id="exp" className="flex flex-col gap-3 bg-navy px-[clamp(12px,3vw,36px)] py-[clamp(26px,5vw,64px)]">
      <SectionKicker number="03" label={e.kicker} tone="dark" className="mb-[18px]" />
      <h2 className="m-0 mb-[22px] font-display text-[clamp(24px,4vw,48px)] uppercase leading-none text-cream">
        {e.title}
      </h2>

      <div className="flex flex-wrap items-stretch gap-[14px]">
        {items.map((it, i) => (
          <article
            key={`${it.period}-${i}`}
            className="flex min-w-0 flex-[1_1_300px] flex-col border-[3px] border-gold bg-cream"
          >
            <div className="flex flex-col gap-[5px] border-b-[3px] border-navy bg-gold p-[18px]">
              <h3 className="m-0 font-display text-[16px] font-normal uppercase leading-[1.15] text-navy">{it.role}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[.12em] text-navy">{it.period}</span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3 p-[18px]">
              <p className="m-0 text-pretty text-[14px] leading-[1.62] text-navy">{it.desc}</p>
              <ul className="m-0 flex list-none flex-wrap gap-[6px] p-0">
                {it.tags.map((tag, j) => (
                  <li
                    key={`${tag}-${j}`}
                    className="border-2 border-navy px-[9px] py-[5px] font-mono text-[10px] uppercase text-navy"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
