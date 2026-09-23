"use client";

import { useLanguage } from "./LanguageProvider";
import { SectionKicker } from "./ui/SectionKicker";

/** 02. Trajetória — um card horizontal por experiência, do mais recente (01) ao mais antigo. */
export function Experience() {
  const { t } = useLanguage();
  const e = t.exp;
  const items = e.items.filter((it) => !it.hidden);

  return (
    <section id="exp" className="bg-navy px-[clamp(12px,3vw,36px)] py-[clamp(26px,5vw,64px)]">
      <SectionKicker number="02" label={e.kicker} tone="dark" className="mb-[18px]" />
      <h2 className="m-0 mb-[22px] max-w-[24ch] font-display text-[clamp(24px,4vw,48px)] uppercase leading-none text-cream">
        {e.title}
      </h2>

      <div className="flex flex-col gap-[14px]">
        {items.map((it, i) => (
          <article
            key={`${it.period}-${i}`}
            className="grid grid-cols-1 border-[3px] border-gold bg-cream md:grid-cols-3"
          >
            <div className="flex flex-col gap-[6px] border-navy bg-gold p-5 max-md:border-b-[3px] md:border-r-[3px]">
              <span className="font-display text-[34px] leading-none text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[.12em] text-navy">{it.period}</span>
              <h3 className="m-0 font-display text-[17px] font-normal uppercase leading-[1.15] text-navy">
                {it.role}
              </h3>
              <span className="text-[14px] font-medium text-navy">{it.co}</span>
            </div>

            <div className="flex min-w-0 flex-col gap-3 p-5 md:col-span-2">
              <p className="m-0 text-[15px] leading-[1.65] text-navy">{it.desc}</p>
              <ul className="m-0 flex list-none flex-wrap gap-[6px] p-0">
                {it.tags.map((tag, j) => (
                  <li
                    key={`${tag}-${j}`}
                    className="border-2 border-navy px-[10px] py-[5px] font-mono text-[10px] uppercase text-navy"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="m-0 flex items-center gap-[9px] bg-red px-3 py-[10px]">
                <span aria-hidden="true" className="h-3 w-3 flex-none bg-cream" />
                <span className="font-display text-[13px] uppercase leading-[1.3] text-white">{it.learn}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
