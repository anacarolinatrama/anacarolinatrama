/**
 * Projetos no ar (seção "Projetos"): dados que não mudam com o idioma.
 * Os textos (tipo, descrição, tags) ficam em content/pt.ts e content/en.ts → projects.items,
 * ligados pelo mesmo `id`.
 *
 * `image`: print real da primeira dobra do site (1280×800 reduzido para 800×500, 16:10) em /public/projects.
 * Sem `image`, o card mostra uma prévia desenhada em CSS.
 */
export type ProjectMeta = {
  id: string;
  name: string;
  url: string;
  /** Cor de fundo do site (usada na prévia) */
  bg: string;
  /** Cor de destaque da moldura/prévia, da paleta do portfólio */
  accent: "gold" | "red" | "cream";
  image?: string;
};

export const projects: ProjectMeta[] = [
  { id: "avellen", name: "Avellen", url: "https://avellen.com.br/pt", bg: "#060E1B", accent: "gold", image: "/projects/avellen.webp" },
  { id: "castherm", name: "Castherm", url: "https://castherm.com.br/", bg: "#0A1428", accent: "red", image: "/projects/castherm.webp" },
  { id: "cezar", name: "Cezar Bononi", url: "https://cezarbononi.github.io/", bg: "#060608", accent: "cream", image: "/projects/cezar.webp" },
];
