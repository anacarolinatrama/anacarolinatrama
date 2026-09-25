"use client";

import Image from "next/image";
import { projects, type ProjectMeta } from "@/content/projects";
import { cn } from "@/lib/cn";
import { useLanguage } from "./LanguageProvider";
import { SectionKicker } from "./ui/SectionKicker";

const ACCENT = {
  gold: { shadow: "shadow-[8px_8px_0_#E5A81E]", fill: "bg-gold" },
  red: { shadow: "shadow-[8px_8px_0_#C6362A]", fill: "bg-red" },
  cream: { shadow: "shadow-[8px_8px_0_#12224C]", fill: "bg-cream" },
} as const;

/** Domínio limpo para a barra de endereço: https://avellen.com.br/pt → avellen.com.br/pt */
function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/**
 * Prévia do site desenhada em CSS (nav, título, linhas de texto e botão) na cor de fundo do projeto.
 * Se o projeto tiver `image`, mostra o print no lugar.
 */
function Preview({ p }: { p: ProjectMeta }) {
  const a = ACCENT[p.accent];
  if (p.image) {
    return (
      <Image
        src={p.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
      />
    );
  }
  return (
    <div aria-hidden="true" className="absolute inset-0 flex flex-col gap-[10%] p-[7%]" style={{ background: p.bg }}>
      <div className="flex items-center justify-between">
        <span className={cn("h-[9px] w-[22%]", a.fill)} />
        <span className="flex gap-[6px]">
          <span className="h-[5px] w-6 bg-white/30" />
          <span className="h-[5px] w-6 bg-white/30" />
          <span className="h-[5px] w-6 bg-white/30" />
        </span>
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="font-display text-[clamp(18px,2.4vw,28px)] uppercase leading-[.9] text-white">
          {p.name}
        </span>
        <span className="h-[5px] w-[70%] bg-white/25" />
        <span className="h-[5px] w-[52%] bg-white/25" />
      </div>
      <div className="mt-auto flex items-end justify-between">
        <span className={cn("h-[18px] w-[30%]", a.fill)} />
        <span className="grid grid-cols-3 gap-[4px]">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="h-[14px] w-[18px] border border-white/25" />
          ))}
        </span>
      </div>
    </div>
  );
}

/** 03. Projetos — sites no ar, cada um numa janela de navegador retrô. */
export function Projects() {
  const { t } = useLanguage();
  const pr = t.projects;

  return (
    <section id="projetos" className="relative px-[clamp(12px,3vw,36px)] py-[clamp(26px,5vw,64px)]">
      <SectionKicker number="03" label={pr.kicker} className="mb-[18px]" />
      <div className="mb-[clamp(22px,3vw,36px)] flex flex-col gap-3">
        <h2 className="m-0 font-display text-[clamp(26px,4.2vw,52px)] uppercase leading-[.95] text-navy">
          {pr.title}
        </h2>
        <p className="m-0 max-w-[60ch] text-pretty text-[16px] leading-[1.6] text-navy">{pr.intro}</p>
      </div>

      <ul className="m-0 grid list-none gap-[clamp(18px,2.4vw,28px)] p-0 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const text = pr.items.find((it) => it.id === p.id);
          if (!text) return null;
          const a = ACCENT[p.accent];
          return (
            <li
              key={p.id}
              className={cn("flex min-w-0 flex-col border-[3px] border-navy bg-paper", a.shadow)}
            >
              {/* barra do navegador */}
              <div className="flex items-center gap-2 border-b-[3px] border-navy bg-steel px-[7px] py-[5px]">
                <span aria-hidden="true" className="flex flex-none gap-1">
                  <span className="h-[10px] w-[10px] rounded-full border border-navy bg-red" />
                  <span className="h-[10px] w-[10px] rounded-full border border-navy bg-gold" />
                  <span className="h-[10px] w-[10px] rounded-full border border-navy bg-cream" />
                </span>
                <span className="min-w-0 flex-1 truncate border border-navy bg-paper px-2 py-[2px] font-mono text-[10px] text-navy">
                  {displayUrl(p.url)}
                </span>
              </div>

              {/* prévia */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="relative block aspect-[16/10] overflow-hidden border-b-[3px] border-navy"
              >
                <Preview p={p} />
                <span className="absolute bottom-3 left-3 border-2 border-navy bg-gold px-[7px] py-[3px] font-display text-[13px] leading-none text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>

              {/* texto */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-red">{text.type}</span>
                <h3 className="m-0 font-display text-[20px] font-normal uppercase leading-[1.05] text-navy">{p.name}</h3>
                <p className="m-0 text-pretty text-[14px] leading-[1.6] text-navy">{text.desc}</p>
                <ul className="m-0 flex list-none flex-wrap gap-[6px] p-0">
                  {text.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border-2 border-navy px-[8px] py-[4px] font-mono text-[10px] uppercase text-navy"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-navy/30 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[.12em] text-navy/70">
                    {pr.roleLabel}: <span className="text-navy">{text.role}</span>
                  </span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-navy bg-navy px-4 py-[10px] font-display text-[11px] uppercase tracking-[.04em] text-cream no-underline shadow-[4px_4px_0_#C6362A] transition-[transform,box-shadow] duration-[180ms] ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#C6362A] max-md:min-h-[44px]"
                  >
                    {pr.visit} <span aria-hidden="true">↗</span>
                    <span className="sr-only">— {p.name}</span>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
