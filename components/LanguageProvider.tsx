"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { copy, type Copy, type Lang } from "@/content";

const STORAGE_KEY = "portfolio-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
  /** true depois que o idioma inicial (URL ou navegador) já foi aplicado */
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  const [ready, setReady] = useState(false);

  // idioma inicial: ?lang=pt|en na URL tem prioridade; senão, a última escolha salva no navegador
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "pt" || fromUrl === "en") {
      setLangState(fromUrl);
    } else {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "pt" || saved === "en") setLangState(saved);
      } catch {
        /* storage indisponível: segue em PT */
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = copy[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignora */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: copy[lang], ready }), [lang, setLang, ready]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage precisa estar dentro de <LanguageProvider>");
  return ctx;
}
