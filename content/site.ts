/**
 * Links e imagens do site (não mudam com o idioma).
 *
 * Fotos: ficam em /public/photos. Para trocar, substitua o arquivo (mesmo nome)
 * ou aponte outro caminho aqui. Com `null`, aparece o placeholder tracejado.
 */
export const site = {
  email: "ana.trama@email.com",
  linkedin: "https://www.linkedin.com/",

  photos: {
    /** Retrato vertical da seção "Sobre mim" (proporção 4:5). */
    profile: "/photos/perfil.webp" as string | null,
    /** Fotos da polaroid do hero. A ordem segue as legendas em content/pt.ts. */
    polaroid: [
      "/photos/polaroid-1.webp",
      "/photos/polaroid-2.webp",
      "/photos/polaroid-3.webp",
      "/photos/polaroid-4.webp",
    ] as (string | null)[],
  },
};
