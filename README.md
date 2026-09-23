# anacarolina.araujo

Portfólio de **Ana Carolina Trama** — UX/UI · Product Designer.
Identidade "Bloco 90": blocos de cor chapada, contornos navy, sombras deslocadas e tipografia pesada. Bilíngue PT/EN.

Feito com **Next.js (App Router) + React + Tailwind CSS**, a partir do handoff de design (`design_handoff_portfolio/index.html`).

## Rodando localmente

Precisa do [Node.js](https://nodejs.org) 20.9 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Outros comandos: `npm run build` (build de produção), `npm run start` (serve o build), `npm run typecheck`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Todos os textos em português | `content/pt.ts` |
| Todos os textos em inglês | `content/en.ts` |
| E-mail, LinkedIn e fotos | `content/site.ts` |
| Cores, fontes, sombras, animações | `tailwind.config.ts` e `app/globals.css` |
| Título/descrição da aba e redes sociais | `app/layout.tsx` (usa `meta` de `content/pt.ts`) |

### Fotos

1. Coloque as imagens em `public/photos/` (ex.: `perfil.jpg`, `polaroid-1.jpg`…).
2. Aponte os caminhos em `content/site.ts`:
   ```ts
   photos: {
     profile: "/photos/perfil.jpg",           // retrato vertical 4:5
     polaroid: ["/photos/polaroid-1.jpg", …], // quadradas, na ordem das legendas
   }
   ```
Enquanto o valor for `null`, aparece o placeholder tracejado.

### Experiências

Ficam em `exp.items` (`content/pt.ts` / `content/en.ts`), do mais recente para o mais antigo.
Itens com `hidden: true` não aparecem no site (o primeiro, "a definir", está oculto como no protótipo).

### Formulário de contato

Sem configuração, o botão "Enviar" abre o app de e-mail da pessoa com a mensagem pronta para `site.email`.
Para receber direto (sem depender do app de e-mail), crie um formulário grátis no [Formspree](https://formspree.io)
e defina a variável `NEXT_PUBLIC_FORM_ENDPOINT` com a URL dele (local: arquivo `.env.local`; Vercel: *Settings → Environment Variables*).

## Deploy na Vercel

1. Suba este repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório `anacarolina.araujo`.
3. A Vercel detecta Next.js sozinha — é só clicar em **Deploy**.
4. (Opcional) Adicione `NEXT_PUBLIC_FORM_ENDPOINT` nas variáveis de ambiente e um domínio próprio em *Settings → Domains*.

Cada `git push` na branch `main` publica uma nova versão automaticamente.

## Estrutura

```
app/
  layout.tsx          fontes (next/font) + metadata
  page.tsx            composição das seções
  globals.css         base + keyframes + reduced-motion
  icon.svg            favicon "AT"
components/
  Header.tsx          header fixo + troca PT/EN
  hero/Hero.tsx       hero + câmera polaroid (hero/PolaroidCamera.tsx)
  Ribbon.tsx          faixa vermelha rolando
  About.tsx           01. Sobre mim (+ CityScape.tsx)
  Skills.tsx          02. Competências
  Experience.tsx      03. Trajetória
  Contact.tsx         Contato (+ ContactForm.tsx)
  Footer.tsx
  LanguageProvider.tsx  idioma atual (lembrado no navegador)
  ui/                 SectionKicker, Divider, Marquee, PhotoSlot
content/              textos PT/EN + links/fotos
public/               telefone-90.png, photos/
```
