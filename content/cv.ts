import type { Lang } from "./types";

/**
 * Textos da página /cv (currículo).
 * Experiências e competências vêm do mesmo conteúdo do portfólio (content/pt.ts / en.ts),
 * então editar uma experiência lá atualiza o CV também.
 */
export type CvCopy = {
  meta: { title: string; description: string; pdfName: string };
  ui: { back: string; download: string; printHint: string; langLabel: string };
  sections: {
    summary: string;
    experience: string;
    tools: string;
    skills: string;
    education: string;
    languages: string;
    contact: string;
  };
  location: string;
  summary: string;
  /** Ferramentas por grupo (confirmadas pelo Cezar em 25/09/2026) */
  tools: { t: string; items: string[] }[];
  /** Formação, da mais recente para a mais antiga */
  education: { course: string; school: string; period: string }[];
  languages: { name: string; level: string }[];
};

export const cv: Record<Lang, CvCopy> = {
  pt: {
    meta: {
      title: "Currículo — Ana Carolina Trama",
      description: "Currículo de Ana Carolina Trama, UX/UI & Product Designer.",
      pdfName: "Ana-Carolina-Trama-CV-PT",
    },
    ui: {
      back: "Portfólio",
      download: "Baixar PDF",
      printHint: "Na janela que abrir, escolha “Salvar como PDF”.",
      langLabel: "idioma /",
    },
    sections: {
      summary: "Resumo",
      experience: "Experiência",
      tools: "Ferramentas",
      skills: "Competências",
      education: "Formação",
      languages: "Idiomas",
      contact: "Contato",
    },
    location: "São Paulo, Brasil",
    summary:
      "UX/UI & Product Designer com 8 anos de experiência em produtos digitais para banco, mídia, varejo, energia e trânsito. Hoje atuo no Banco do Brasil pela Cast group, desenhando jornadas, fluxos e componentes de design system com acessibilidade desde o início. Trabalho perto de PO, negócio e desenvolvimento, e levo cada fluxo para teste com usuários antes da entrega.",
    tools: [
      { t: "Design e protótipo", items: ["Figma", "FigJam", "Sketch", "Illustrator", "Photoshop"] },
      { t: "Teste e prototipação", items: ["InVision", "Maze", "NVDA", "VoiceOver", "TalkBack", "Stark"] },
      { t: "Colaboração", items: ["Miro", "Notion", "Jira", "Confluence"] },
      { t: "IA", items: ["ChatGPT", "Claude", "Figma AI"] },
    ],
    education: [
      { course: "Formação em UX & UI Design", school: "UX Unicórnio", period: "2025" },
      { course: "Formação em Design Thinking & UX Strategy", school: "ALURA", period: "2021 — 2025" },
      { course: "Design Gráfico", school: "Universidade Anhembi Morumbi", period: "2021 — 2023" },
    
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário" },
    ],
  },

  en: {
    meta: {
      title: "Résumé — Ana Carolina Trama",
      description: "Résumé of Ana Carolina Trama, UX/UI & Product Designer.",
      pdfName: "Ana-Carolina-Trama-CV-EN",
    },
    ui: {
      back: "Portfolio",
      download: "Download PDF",
      printHint: "In the dialog that opens, choose “Save as PDF”.",
      langLabel: "language /",
    },
    sections: {
      summary: "Summary",
      experience: "Experience",
      tools: "Tools",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
    },
    location: "São Paulo, Brazil",
    summary:
      "UX/UI & Product Designer with 8 years of experience in digital products for banking, media, retail, energy and transit. I currently work on the Banco do Brasil account through Cast group, designing journeys, flows and design system components with accessibility built in from the start. I work closely with POs, business and engineering, and every flow goes through user testing before delivery.",
    tools: [
      { t: "Design & prototyping", items: ["Figma", "FigJam", "Sketch", "Illustrator", "Photoshop"] },
      { t: "Testing & prototypes", items: ["InVision", "Maze", "NVDA", "VoiceOver", "TalkBack", "Stark"] },
      { t: "Collaboration", items: ["Miro", "Notion", "Jira", "Confluence"] },
      { t: "AI", items: ["ChatGPT", "Claude", "Figma AI"] },
    ],
    education: [
      { course: "UX & UI Design Program", school: "UX Unicórnio", period: "2025" },
      { course: "Design Thinking & UX Strategy Program", school: "ALURA", period: "2021 — 2025" },
      { course: "Graphic Design", school: "Anhembi Morumbi University", period: "2021 — 2023" },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
  },
};
