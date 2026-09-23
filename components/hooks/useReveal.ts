"use client";

import { useEffect, useRef, useState } from "react";

export type RevealState = "static" | "waiting" | "visible";

/**
 * Animação de entrada ao rolar a página.
 * - No HTML do servidor (e sem JS) o conteúdo fica visível ("static").
 * - Se o elemento começa fora da tela, fica escondido ("waiting") até aparecer ("visible").
 */
export function useReveal<T extends Element>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // já está na tela

    setState("waiting");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("visible");
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, state };
}
