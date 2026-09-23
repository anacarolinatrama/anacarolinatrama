import { cn } from "@/lib/cn";

type Props = {
  text: string;
  /** classes do texto */
  className?: string;
  /** classes da faixa que se move (gap + animação) */
  trackClassName?: string;
};

/** Texto em loop horizontal. O conteúdo é duplicado para o loop ficar contínuo. */
export function Marquee({ text, className, trackClassName }: Props) {
  return (
    <div className={cn("flex w-max", trackClassName)}>
      <span className={cn("whitespace-nowrap", className)}>{text}</span>
      <span aria-hidden="true" className={cn("whitespace-nowrap", className)}>
        {text}
      </span>
    </div>
  );
}
