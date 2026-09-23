/**
 * Links e imagens do site (não mudam com o idioma).
 *
 * Fotos: coloque os arquivos em /public/photos e aponte o caminho aqui,
 * ex.: "/photos/perfil.jpg". Enquanto estiver `null`, aparece o placeholder.
 */
export const site = {
  email: "ana.trama@email.com",
  linkedin: "https://www.linkedin.com/",

  photos: {
    /** Retrato vertical da seção "Sobre mim" (proporção 4:5). */
    profile: null as string | null,
    /** Fotos da polaroid do hero (quadradas). A ordem segue as legendas em content/pt.ts. */
    polaroid: [null, null, null, null] as (string | null)[],
  },
};
