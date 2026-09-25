"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/content";
import { cv } from "@/content/cv";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useLanguage } from "../LanguageProvider";

const LANGS: { id: Lang; label: string }[] = [
  { id: "pt", label: "PT-BR" },
  { id: "en", label: "EN-US" },
];

/** +5511989085697 → +55 11 98908-5697 */
function prettyPhone(digits: string) {
  const m = digits.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `+${m[1]} ${m[2]} ${m[3]}-${m[4]}` : `+${digits}`;
}

/** Título de seção do CV: rótulo + régua amarela (versão compacta do SectionKicker). */
function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="m-0 mb-3 flex break-after-avoid items-center gap-2 font-display text-[13px] font-normal uppercase tracking-[.04em] text-navy">
      {children}
      <span aria-hidden="true" className="h-[5px] flex-1 border-y-[1.5px] border-navy bg-gold" />
    </h2>
  );
}

/**
 * Página /cv — currículo no visual do portfólio, em PT/EN (?lang=pt|en),
 * com botão que abre a impressão do navegador já formatada em A4 para salvar como PDF.
 */
export function CvPage() {
  const { lang, setLang, t, ready } = useLanguage();
  const c = cv[lang];
  const [host, setHost] = useState("");

  // mantém ?lang= na URL (link compartilhável no idioma certo) e o título da aba
  useEffect(() => {
    if (!ready) return; // espera o idioma vindo da URL/navegador antes de reescrever a URL
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
    document.title = c.meta.title;
    setHost(window.location.host);
  }, [lang, c.meta.title, ready]);

  const downloadPdf = () => {
    // o nome do arquivo sugerido pelo navegador vem do <title>
    const previous = document.title;
    document.title = c.meta.pdfName;
    window.print();
    document.title = previous;
  };

  const contacts = [
    { label: site.email, href: `mailto:${site.email}` },
    { label: prettyPhone(site.whatsapp), href: `https://wa.me/${site.whatsapp}` },
    { label: site.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), href: site.linkedin },
    ...(host ? [{ label: host, href: `/?lang=${lang}` }] : []),
  ];

  return (
    <div className="min-h-screen bg-cream print:bg-white">
      {/* ---------- barra de ações (não sai no PDF) ---------- */}
      <div className="sticky top-0 z-50 border-b-4 border-gold bg-navy print:hidden">
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-3 px-[clamp(12px,3vw,24px)] py-[10px]">
          <a href={`/?lang=${lang}`} className="flex items-center gap-[9px] text-cream no-underline hover:text-gold">
            <span className="grid h-8 w-8 -rotate-6 place-items-center bg-gold font-display text-[14px] text-navy">
              AT
            </span>
            <span className="font-display text-[12px] uppercase tracking-[.04em]">← {c.ui.back}</span>
          </a>

          <div className="flex flex-wrap items-center gap-[10px]">
            <div className="flex items-center gap-[6px]">
              <span className="font-mono text-[9px] uppercase tracking-[.16em] text-gold">{c.ui.langLabel}</span>
              {LANGS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={lang === id}
                  onClick={() => setLang(id)}
                  className={cn(
                    "cursor-pointer border-2 border-gold px-3 py-[7px] font-display text-[11px] uppercase tracking-[.06em] transition-colors max-md:min-h-[44px]",
                    lang === id ? "bg-gold text-navy" : "bg-transparent text-gold hover:bg-gold/15",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={downloadPdf}
              title={c.ui.printHint}
              className="cursor-pointer border-2 border-navy bg-red px-4 py-[9px] font-display text-[12px] uppercase tracking-[.04em] text-cream shadow-[4px_4px_0_#E5A81E] transition-[transform,box-shadow] duration-[180ms] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#E5A81E] max-md:min-h-[44px]"
            >
              ↓ {c.ui.download}
            </button>
          </div>
        </div>
        <p className="m-0 bg-cream px-3 py-[6px] text-center font-mono text-[10px] tracking-[.06em] text-navy/70">
          {c.ui.printHint}
        </p>
      </div>

      {/* ---------- folha ---------- */}
      <main className="px-[clamp(8px,3vw,24px)] py-[clamp(16px,4vw,40px)] print:p-0">
        <article className="cv-sheet mx-auto max-w-[210mm] border-[3px] border-navy bg-paper shadow-[10px_10px_0_#12224C] print:max-w-none print:border-0 print:shadow-none">
          {/* cabeçalho */}
          <header className="relative overflow-hidden bg-navy px-[clamp(18px,4vw,36px)] py-[clamp(20px,4vw,30px)] text-cream">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-[34%] opacity-90"
              style={{
                backgroundImage: "repeating-conic-gradient(#1B3072 0% 25%, #12224C 0% 50%)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative flex flex-col gap-3">
              <h1 className="m-0 font-display text-[clamp(28px,5vw,40px)] font-normal uppercase leading-[.9] tracking-[-.02em]">
                {t.hero.firstName} <span className="text-gold">{t.hero.lastName}</span>
              </h1>
              <p className="m-0 self-start border-2 border-navy bg-gold px-3 py-[6px] font-display text-[clamp(13px,1.8vw,16px)] uppercase leading-none text-navy shadow-[4px_4px_0_#C6362A]">
                {t.hero.role}
              </p>
              <ul className="m-0 mt-1 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 font-mono text-[10.5px] tracking-[.02em] text-cream/90">
                <li>{c.location}</li>
                {contacts.map((ct) => (
                  <li key={ct.href}>
                    <a href={ct.href} className="text-cream no-underline hover:text-gold">
                      {ct.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)] print:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)]">
            {/* coluna principal (vem primeiro no celular) */}
            <div className="flex flex-col gap-6 p-[clamp(18px,3.4vw,30px)] md:order-2 print:order-2">
              <section>
                <CvHeading>{c.sections.summary}</CvHeading>
                <p className="m-0 text-[13px] leading-[1.6] text-navy">{c.summary}</p>
              </section>

              <section>
                <CvHeading>{c.sections.experience}</CvHeading>
                <ol className="m-0 flex list-none flex-col gap-4 p-0">
                  {t.exp.items
                    .filter((it) => !it.hidden)
                    .map((it) => (
                      <li
                        key={`${it.co}-${it.period}`}
                        className="break-inside-avoid border-b border-dashed border-navy/30 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <h3 className="m-0 font-display text-[13px] font-normal uppercase leading-[1.2] text-navy">
                            {it.role}
                          </h3>
                          <span className="whitespace-nowrap bg-gold px-[6px] py-[2px] font-mono text-[10px] uppercase tracking-[.08em] text-navy">
                            {it.period}
                          </span>
                        </div>
                        <p className="m-0 mt-[2px] text-[12.5px] font-medium text-red">{it.co}</p>
                        <p className="m-0 mt-2 text-[12.5px] leading-[1.55] text-navy">{it.desc}</p>
                        {it.tags.length > 0 && (
                          <p className="m-0 mt-2 font-mono text-[10px] uppercase tracking-[.06em] text-navy/70">
                            {it.tags.join(" · ")}
                          </p>
                        )}
                      </li>
                    ))}
                </ol>
              </section>
            </div>

            {/* coluna lateral */}
            <aside className="flex flex-col gap-6 border-navy bg-cream p-[clamp(18px,3.4vw,26px)] max-md:border-t-2 md:order-1 md:border-r-2 print:order-1 print:border-r-2">
              <section className="break-inside-avoid">
                <CvHeading>{c.sections.tools}</CvHeading>
                <div className="flex flex-col gap-3">
                  {c.tools.map((g) => (
                    <div key={g.t}>
                      <h3 className="m-0 mb-[6px] font-mono text-[9.5px] font-semibold uppercase tracking-[.14em] text-red">
                        {g.t}
                      </h3>
                      <ul className="m-0 flex list-none flex-wrap gap-[5px] p-0">
                        {g.items.map((it) => (
                          <li
                            key={it}
                            className="border border-navy/40 bg-paper px-[6px] py-[3px] font-mono text-[10px] text-navy"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="break-inside-avoid">
                <CvHeading>{c.sections.skills}</CvHeading>
                <div className="flex flex-col gap-3">
                  {t.skills.groups.map((g) => (
                    <div key={g.t}>
                      <h3 className="m-0 mb-1 font-mono text-[9.5px] font-semibold uppercase tracking-[.14em] text-red">
                        {g.t}
                      </h3>
                      <p className="m-0 text-[11.5px] leading-[1.5] text-navy">{g.items.join(" · ")}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="break-inside-avoid">
                <CvHeading>{c.sections.education}</CvHeading>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {c.education.map((e) => (
                    <li key={`${e.course}-${e.school}`} className="text-[11.5px] leading-[1.45] text-navy">
                      <strong className="block font-display text-[11.5px] font-normal uppercase">{e.course}</strong>
                      {e.school}
                      <span className="block font-mono text-[10px] text-navy/70">{e.period}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="break-inside-avoid">
                <CvHeading>{c.sections.languages}</CvHeading>
                <ul className="m-0 flex list-none flex-col gap-1 p-0">
                  {c.languages.map((l) => (
                    <li key={l.name} className="flex justify-between gap-2 text-[11.5px] text-navy">
                      <span className="font-medium">{l.name}</span>
                      <span className="font-mono text-[10px] uppercase text-navy/70">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}
