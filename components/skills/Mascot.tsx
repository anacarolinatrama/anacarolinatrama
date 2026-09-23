/** Mascote amarelo acenando (fica escondido atrás dos post-its). Feito só com divs, como no protótipo. */
export function Mascot({ label, className }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={className}>
      <div className="absolute left-[6px] top-[14px] h-[58px] w-16 rounded-[50%_50%_44%_44%] border-2 border-navy bg-gold" />
      <div className="absolute left-[14px] top-[2px] h-4 w-[10px] -rotate-[18deg] rounded-[6px] border-2 border-navy bg-gold" />
      <div className="absolute left-[50px] top-[2px] h-4 w-[10px] rotate-[18deg] rounded-[6px] border-2 border-navy bg-gold" />
      <div className="absolute left-6 top-[34px] h-2 w-2 rounded-full bg-navy" />
      <div className="absolute left-11 top-[34px] h-2 w-2 rounded-full bg-navy" />
      <div className="absolute left-8 top-[46px] h-[7px] w-3 rounded-[0_0_8px_8px] border-2 border-t-0 border-navy bg-red" />
      <div className="absolute left-4 top-[44px] h-[5px] w-[9px] rounded-full bg-red opacity-70" />
      <div className="absolute left-[51px] top-[44px] h-[5px] w-[9px] rounded-full bg-red opacity-70" />
      <div className="absolute left-[60px] top-[26px] h-4 w-4 origin-[8px_14px] animate-wave rounded-full border-2 border-navy bg-gold" />
    </div>
  );
}
