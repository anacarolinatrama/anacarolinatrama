/** Separador com três quadradinhos (vermelho, amarelo, navy). */
export function Divider() {
  return (
    <div
      aria-hidden="true"
      className="my-[clamp(6px,1.4vw,18px)] flex items-center gap-[14px] px-[clamp(12px,3vw,36px)]"
    >
      <span className="h-0 flex-1 border-t-2 border-navy/30" />
      <span className="h-[11px] w-[11px] border-2 border-navy bg-red" />
      <span className="h-[11px] w-[11px] border-2 border-navy bg-gold" />
      <span className="h-[11px] w-[11px] border-2 border-navy bg-navy" />
      <span className="h-0 flex-1 border-t-2 border-navy/30" />
    </div>
  );
}
