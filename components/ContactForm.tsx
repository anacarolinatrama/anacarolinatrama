"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useLanguage } from "./LanguageProvider";

/**
 * Para receber as mensagens, defina NEXT_PUBLIC_FORM_ENDPOINT (ex.: Formspree).
 * Sem endpoint, o envio abre o app de e-mail da pessoa com a mensagem já escrita.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const labelCls =
  "flex flex-col gap-1 font-mono text-[9px] uppercase tracking-[.16em] text-navy";
const fieldCls =
  "border-2 border-navy bg-paper px-[10px] py-3 font-mono text-[16px] normal-case tracking-normal text-navy placeholder:text-navy/45 focus:shadow-[3px_3px_0_#E5A81E] focus:outline-none md:py-[9px] md:text-[13px]";

type Props = {
  firstFieldRef: React.RefObject<HTMLInputElement | null>;
  highlight: boolean;
};

export function ContactForm({ firstFieldRef, highlight }: Props) {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ENDPOINT) {
      const body = [
        `${f.name}: ${data.get("nome") ?? ""}`,
        `${f.email}: ${data.get("email") ?? ""}`,
        `${f.phone}: ${data.get("celular") ?? ""}`,
        "",
        String(data.get("contexto") ?? ""),
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(f.mailSubject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent" || status === "mailto") {
    const done = status === "sent" ? t.contact.sent : t.contact.sentMail;
    return (
      <div
        id="form-contato"
        role="status"
        className="relative z-[3] flex flex-col gap-2 border-[3px] border-navy bg-cream p-[clamp(20px,3vw,30px)] shadow-[10px_10px_0_#12224C]"
      >
        <strong className="font-display text-[clamp(18px,2.4vw,26px)] uppercase text-navy">{done.title}</strong>
        <span className="font-mono text-[13px] leading-[1.55] text-navy">{done.text}</span>
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

      {status === "error" && (
        <p role="alert" className="m-0 font-mono text-[12px] leading-[1.5] text-red">
          {f.error}{" "}
          <a href={`mailto:${site.email}`} className="text-navy underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="cursor-pointer self-start border-[3px] border-navy bg-red px-5 py-[13px] font-display text-[13px] uppercase text-cream shadow-[5px_5px_0_#12224C] transition-[transform,box-shadow] duration-[180ms] ease-in-out hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#12224C] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}
