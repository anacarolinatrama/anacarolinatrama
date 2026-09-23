"use client";

import { useEffect, useRef, useState } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useLanguage } from "../LanguageProvider";

/**
 * Câmera instantânea do hero. O botão vermelho dispara o flash e troca a foto/legenda.
 */
export function PolaroidCamera() {
  const { t } = useLanguage();
  const cam = t.hero.camera;
  const count = Math.max(1, Math.min(cam.captions.length, site.photos.polaroid.length));

  const [shot, setShot] = useState(0);
  const [flashing, setFlashing] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const shoot = () => {
    timers.current.forEach(clearTimeout);
    setFlashing(true);
    timers.current = [
      setTimeout(() => setShot((s) => (s + 1) % count), 170),
      setTimeout(() => setFlashing(false), 320),
    ];
  };

  const current = shot % count;
  const caption = cam.captions[current];

  return (
    <div className="flex w-full max-w-[320px] flex-col items-center self-end">
      {/* balão de fala */}
      <div className="flex flex-col gap-3">
        <div className="relative z-[5] mb-3 max-w-[230px] self-start rounded-[8px] border-2 border-navy bg-cream px-[11px] py-2 font-mono text-[11px] leading-[1.35] text-navy shadow-[3px_3px_0_#C6362A]">
          {cam.speech}
          <span
            aria-hidden="true"
            className="absolute bottom-[-9px] left-6 h-3 w-3 rotate-45 border-b-2 border-r-2 border-navy bg-cream"
          />
        </div>
      </div>

      {/* corpo da câmera */}
      <div className="relative z-[4] flex w-full flex-col items-center">
        <div className="flex h-[14px] w-[52%] items-center justify-evenly rounded-t-[4px] border-[3px] border-b-0 border-navy bg-shell px-[6px]">
          <span className="h-[5px] w-[12%] animate-flash border border-navy bg-cream" />
          <span className="h-[5px] w-[12%] border border-navy bg-cream" />
          <span className="h-[5px] w-[12%] border border-navy bg-cream" />
          <span className="h-[5px] w-[12%] border border-navy bg-cream" />
        </div>

        <div className="flex w-[84%] items-center justify-between gap-2 rounded-t-[10px] border-[3px] border-b-0 border-navy bg-shell px-3 py-2">
          <span className="font-display text-[10px] uppercase tracking-[.16em] text-navy">{cam.brand}</span>
          <span aria-hidden="true" className="h-3 w-[26px] rounded-[2px] bg-navy" />
        </div>

        <div className="relative w-full overflow-hidden rounded-[8px_8px_12px_12px] border-[3px] border-navy bg-shell px-[14px] pt-[14px] shadow-[8px_8px_0_#C6362A]">
          <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 flex w-4 flex-col border-r-[3px] border-navy">
            <span className="flex-1 bg-moss" />
            <span className="flex-1 bg-gold" />
            <span className="flex-1 bg-red" />
            <span className="flex-1 bg-royal" />
          </div>

          <div className="ml-[22px] flex items-center justify-between gap-3">
            {/* lente */}
            <div
              aria-hidden="true"
              className="relative flex aspect-square w-[clamp(70px,10vw,96px)] items-center justify-center rounded-full border-4 border-steel bg-navy"
            >
              <div className="aspect-square w-[56%] rounded-full border-2 border-periwinkle bg-royal" />
              <div className="absolute left-[23%] top-[19%] aspect-square w-[16%] rounded-full bg-cream opacity-85" />
            </div>

            <div className="flex flex-col items-end gap-[9px]">
              <button
                type="button"
                onClick={shoot}
                aria-label={cam.shutterLabel}
                className="relative h-[26px] w-[26px] cursor-pointer rounded-full border-[3px] border-navy bg-red p-0 shadow-[2px_2px_0_#12224C] before:absolute before:-inset-[10px] before:content-[''] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              />
              <div aria-hidden="true" className="h-[10px] w-[46px] rounded-[5px] border-2 border-navy bg-steel" />
              <span className="font-mono text-[9px] uppercase tracking-[.12em] text-navy">{cam.model}</span>
            </div>
          </div>

          <div aria-hidden="true" className="-mx-[14px] mt-[14px] flex h-[18px] items-center justify-center bg-navy">
            <span className="h-[6px] w-[74%] rounded-[3px] bg-ink" />
          </div>
        </div>
      </div>

      {/* foto que sai da câmera */}
      <div className="relative z-[2] -mt-[6px] w-[88%] animate-eject rounded-[6px] border-2 border-navy bg-white px-[10px] pt-[10px] shadow-[6px_6px_0_rgba(18,34,76,.45)]">
        <div className="relative aspect-square overflow-hidden rounded-[3px] bg-navy">
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              aria-hidden={i !== current}
              className={cn(
                "absolute inset-0 transition-opacity duration-[450ms] ease-in-out",
                i === current ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <PhotoSlot
                src={site.photos.polaroid[i] ?? null}
                alt={cam.captions[i]?.text ?? ""}
                placeholder={`${cam.photoPlaceholder} ${i + 1}`}
                sizes="280px"
                className="rounded-[3px]"
              />
            </div>
          ))}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 bg-white transition-opacity duration-[280ms] ease-in-out",
              flashing ? "opacity-100" : "opacity-0",
            )}
          />
        </div>
        <div className="px-[2px] pb-3 pt-[10px]" aria-live="polite">
          <strong className="block font-display text-[13px] uppercase tracking-[.02em] text-navy">
            {caption.title}
          </strong>
          <em className="font-mono text-[11px] text-slate">{caption.text}</em>
        </div>
      </div>
    </div>
  );
}
