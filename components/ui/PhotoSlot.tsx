import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string | null;
  alt: string;
  placeholder: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Foto que preenche o container pai (que precisa ser `relative`).
 * Sem `src`, mostra um placeholder tracejado — igual ao <image-slot> do protótipo.
 */
export function PhotoSlot({ src, alt, placeholder, sizes, priority, className }: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-cream/70",
        className,
      )}
    >
      <span aria-hidden="true" className="absolute inset-2 border-[1.5px] border-dashed border-current opacity-60" />
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-8 9" />
      </svg>
      <span className="font-mono text-[10px] uppercase tracking-[.14em]">{placeholder}</span>
    </div>
  );
}
