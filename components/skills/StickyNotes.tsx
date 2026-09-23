"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Posição/cor inicial de cada post-it (valores do protótipo). */
const LAYOUT = [
  { cls: "bg-gold text-navy", x: 4, y: 0, rot: -3 },
  { cls: "bg-cream text-navy", x: 22, y: 74, rot: 2.5 },
  { cls: "bg-red text-cream", x: 10, y: 184, rot: -1.5 },
];

type Offset = { dx: number; dy: number };

type Props = { notes: string[]; hint: string };

/**
 * Post-its arrastáveis (mouse, toque ou setas do teclado).
 * Sem biblioteca: pointer events na janela, offset relativo à posição inicial.
 */
export function StickyNotes({ notes, hint }: Props) {
  const hintId = useId();
  const [offs, setOffs] = useState<Offset[]>(() => notes.map(() => ({ dx: 0, dy: 0 })));
  const [dragging, setDragging] = useState<number | null>(null);
  // o último post-it mexido fica por cima dos outros
  const [front, setFront] = useState<number | null>(null);
  const offsRef = useRef(offs);
  offsRef.current = offs;
  const cleanup = useRef<(() => void) | null>(null);

  useEffect(() => () => cleanup.current?.(), []);

  const moveTo = (i: number, next: Offset) =>
    setOffs((prev) => prev.map((o, j) => (j === i ? next : o)));

  const onPointerDown = (i: number, e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const start = { x: e.clientX, y: e.clientY, ...(offsRef.current[i] ?? { dx: 0, dy: 0 }) };

    const move = (ev: PointerEvent) =>
      moveTo(i, { dx: start.dx + ev.clientX - start.x, dy: start.dy + ev.clientY - start.y });
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      cleanup.current = null;
      setDragging(null);
    };

    cleanup.current?.();
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    cleanup.current = up;
    setDragging(i);
    setFront(i);
  };

  const onKeyDown = (i: number, e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 30 : 10;
    const delta: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const d = delta[e.key];
    if (!d) return;
    e.preventDefault();
    setFront(i);
    const o = offsRef.current[i] ?? { dx: 0, dy: 0 };
    moveTo(i, { dx: o.dx + d[0], dy: o.dy + d[1] });
  };

  return (
    <>
      <span id={hintId} className="sr-only">
        {hint}
      </span>
      {notes.map((text, i) => {
        const l = LAYOUT[i % LAYOUT.length];
        const o = offs[i] ?? { dx: 0, dy: 0 };
        return (
          <div
            key={i}
            tabIndex={0}
            aria-describedby={hintId}
            onPointerDown={(e) => onPointerDown(i, e)}
            onKeyDown={(e) => onKeyDown(i, e)}
            style={{ left: l.x + o.dx, top: l.y + o.dy, transform: `rotate(${l.rot}deg)` }}
            className={cn(
              "absolute w-[150px] cursor-grab touch-none select-none border-2 border-navy p-3 shadow-[4px_4px_0_rgba(18,34,76,.35)]",
              l.cls,
              front === i ? "z-[3]" : "z-[2]",
              dragging === i && "cursor-grabbing",
            )}
          >
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[-9px] -ml-[6px] h-3 w-3 rounded-full border-2 border-navy bg-red"
            />
            <span className="block font-mono text-[11px] leading-[1.45]">{text}</span>
          </div>
        );
      })}
    </>
  );
}
