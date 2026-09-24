"use client";

import { useState } from "react";
import type { Copy } from "@/content";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useLanguage } from "./LanguageProvider";

const labelCls =
  "flex flex-col gap-1 font-mono text-[9px] uppercase tracking-[.16em] text-navy";
const fieldCls =
  "border-2 border-navy bg-paper px-[10px] py-3 font-mono text-[16px] normal-case tracking-normal text-navy placeholder:text-navy/45 focus:shadow-[3px_3px_0_#E5A81E] focus:outline-none md:py-[9px] md:text-[13px]";

type Fields = { nome: string; email: string; celular: string; contexto: string };

/** Limpa o texto digitado: tira espaços sobrando e linhas em branco repetidas. */
function clean(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const PARTICLES = new Set(["da", "de", "do", "das", "dos", "e"]);

/** Nome todo em MAIÚSCULAS ou minúsculas vira "Nome Sobrenome"; nomes com caixa mista ficam como estão. */
function formatName(raw: string) {
  if (raw !== raw.toUpperCase() && raw !== raw.toLowerCase()) return raw;
  return raw
    .toLowerCase()
    .split(" ")
    .map((w, i) => (i > 0 && PARTICLES.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

/** Formata telefone BR para leitura: +55 (11) 98765-4321. Outros formatos ficam como digitados. */
function formatPhone(raw: string) {
  const d = raw.replace(/\D/g, "");
  const br = d.length === 13 && d.startsWith("55") ? d.slice(2) : d.length === 11 || d.length === 10 ? d : null;
  if (!br) return raw;
  const ddd = br.slice(0, 2);
  const num = br.slice(2);
  const split = num.length === 9 ? 5 : 4;
  return `+55 (${ddd}) ${num.slice(0, split)}-${num.slice(split)}`;
}

/** Monta o texto da mensagem (o WhatsApp entende *negrito*). */
function buildMessage(f: Fields, w: Copy["contact"]["whatsapp"]) {
  const lines = [
    w.greeting,
    "",
    `*${w.name}:* ${formatName(f.nome)}`,
    `*${w.email}:* ${f.email.toLowerCase()}`,
  ];
  if (f.celular) lines.push(`*${w.phone}:* ${formatPhone(f.celular)}`);
  if (f.contexto) lines.push("", `*${w.context}:*`, f.contexto);
  return lines.join("\n");
}

function whatsappUrl(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Abre o WhatsApp em outra aba; se o navegador bloquear, abre na mesma aba. */
function openWhatsApp(url: string) {
  const win = window.open(url, "_blank");
  if (win) win.opener = null;
  else window.location.href = url;
}

type Props = {
  firstFieldRef: React.RefObject<HTMLInputElement | null>;
  highlight: boolean;
  /** Avisa o pai quando a mensagem foi enviada (o telefone muda de posição). */
  onSentChange?: (sent: boolean) => void;
};

/**
 * Formulário de contato: junta os campos numa mensagem formatada e abre
 * o WhatsApp da Ana (site.whatsapp) com o texto pronto para enviar.
 */
export function ContactForm({ firstFieldRef, highlight, onSentChange }: Props) {
  const { t } = useLanguage();
  const c = t.contact;
  const f = c.form;
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields: Fields = {
      nome: clean(data.get("nome")),
      email: clean(data.get("email")),
      celular: clean(data.get("celular")),
      contexto: clean(data.get("contexto")),
    };
    const url = whatsappUrl(buildMessage(fields, c.whatsapp));
    openWhatsApp(url);
    setSentUrl(url);
    onSentChange?.(true);
  };

  if (sentUrl) {
    return (
      <div
        id="form-contato"
        role="status"
        className="relative z-[3] flex flex-col gap-3 border-[3px] border-navy bg-cream p-[clamp(20px,3vw,30px)] shadow-[10px_10px_0_#12224C]"
      >
        <strong className="font-display text-[clamp(18px,2.4vw,26px)] uppercase text-navy">{c.sent.title}</strong>
        <span className="font-mono text-[13px] leading-[1.55] text-navy">{c.sent.text}</span>
        <span className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px]">
          <a href={sentUrl} target="_blank" rel="noreferrer" className="text-red underline hover:text-navy">
            {c.sent.retry} ↗
          </a>
          <button
            type="button"
            onClick={() => {
              setSentUrl(null);
              onSentChange?.(false);
            }}
            className="cursor-pointer border-0 bg-transparent p-0 text-navy underline hover:text-red"
          >
            {c.sent.again}
          </button>
        </span>
      </div>
    );
  }

  return (
    <form
      id="form-contato"
      onSubmit={onSubmit}
      className={cn(
        "relative z-[3] flex flex-col gap-3 border-[3px] border-navy bg-cream p-[clamp(16px,2.4vw,24px)] transition-shadow duration-200",
        highlight ? "shadow-[10px_10px_0_#E5A81E]" : "shadow-[10px_10px_0_#12224C]",
      )}
    >
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[15px] uppercase text-navy">{f.title}</span>
        <span className="font-mono text-[9px] uppercase tracking-[.14em] text-red">{f.code}</span>
      </div>

      <label className={labelCls}>
        {f.name}
        <input ref={firstFieldRef} type="text" name="nome" required autoComplete="name" className={fieldCls} />
      </label>
      <label className={labelCls}>
        {f.email}
        <input type="email" name="email" required autoComplete="email" className={fieldCls} />
      </label>
      <label className={labelCls}>
        {f.phone}
        <input type="tel" name="celular" autoComplete="tel" className={fieldCls} />
      </label>
      <label className={labelCls}>
        {f.context}
        <textarea
          name="contexto"
          rows={3}
          placeholder={f.placeholder}
          className={cn(fieldCls, "resize-y leading-[1.5]")}
        />
      </label>

      <span className="font-mono text-[10px] leading-[1.4] text-navy/70">{f.note}</span>
      <div>
        <button
          type="submit"
          className="cursor-pointer border-[3px] border-navy bg-red px-5 py-[13px] font-display text-[13px] uppercase text-cream shadow-[5px_5px_0_#12224C] transition-[transform,box-shadow] duration-[180ms] ease-in-out hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#12224C]"
        >
          {f.submit}
        </button>
      </div>
    </form>
  );
}
