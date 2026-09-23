"use client";

import { useState } from "react";

type Props = {
  title: string;
  lines: string[];
  labels: { minimize: string; close: string; open: string };
};

type BoxState = "open" | "min" | "closed";

/** Janelinha retrô "Toolbox.exe": minimizar deixa só a barra; fechar vira um atalho para reabrir. */
export function Toolbox({ title, lines, labels }: Props) {
  const [box, setBox] = useState<BoxState>("open");

  if (box === "closed") {
    return (
      <button
        type="button"
        onClick={() => setBox("open")}
        aria-label={labels.open}
        className="flex cursor-pointer items-center gap-[6px] self-start border-2 border-navy bg-steel px-2 py-1 font-mono text-[10px] uppercase tracking-[.1em] text-navy shadow-[3px_3px_0_rgba(18,34,76,.35)] max-md:min-h-[44px]"
      >
        <span aria-hidden="true" className="h-[9px] w-[9px] border border-navy bg-gold" />
        {title}
      </button>
    );
  }

  const winBtn =
    "relative h-[14px] w-[14px] cursor-pointer border border-navy p-0 font-mono text-[9px] leading-none before:absolute before:-inset-[8px] before:content-['']";

  return (
    <div className="border-[3px] border-navy bg-navy shadow-[6px_6px_0_#C6362A]">
      <div className="flex items-center justify-between gap-2 border-b-[3px] border-navy bg-steel px-[7px] py-1">
        <span className="font-mono text-[10px] uppercase tracking-[.1em] text-navy">{title}</span>
        <span className="flex gap-1">
          <button
            type="button"
            onClick={() => setBox((b) => (b === "min" ? "open" : "min"))}
            aria-label={labels.minimize}
            aria-expanded={box === "open"}
            className={`${winBtn} bg-cream text-navy`}
          >
            _
          </button>
          <button
            type="button"
            onClick={() => setBox("closed")}
            aria-label={labels.close}
            className={`${winBtn} bg-red text-cream`}
          >
            ×
          </button>
        </span>
      </div>
      {box === "open" && (
        <div className="p-3 font-mono text-[12px] leading-[1.7] text-cream">
          {lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
