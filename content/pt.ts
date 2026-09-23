import type { Copy } from "./types";

export const pt: Copy = {
  htmlLang: "pt-BR",
  meta: {
    title: "Ana Carolina Trama — UX/UI · Product Designer",
    description:
      "De humanos para humanos. Problemas não são impeditivos: são o que ainda não foi descoberto.",
  },
  header: { home: "Ana Trama — voltar ao início", langLabel: "idioma /" },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Quem sou", href: "#sobre" },
    { label: "O que faço", href: "#comp" },
    { label: "Ver cases", href: "#exp" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    hello: "Hello, stranger.",
    firstName: "Ana Carolina",
    lastName: "Trama.",
    badge: "Complex? Good.",
    intro:
      "Eu gosto de problemas complicados. Há 8 anos transformo sistemas, regras e jornadas complexas em experiências digitais claras, humanas e acessíveis.",
    marquee:
      "✦ Product Design — UX Strategy — AI + Design — Research — Accessibility — Complex Systems — ✦",
    cta: "Explore meu trabalho",
    nowLabel: "Atualmente",
    now: ["Product Designer", "São Paulo, Brasil", "Disponível para projetos freelance"],
    solveLabel: "O que eu resolvo",
    solve: [
      "Sistemas complexos. Jornadas extensas. Regras de negócio. Grandes volumes de informação.",
      "Meu trabalho é fazer tudo isso parecer simples para quem usa.",
    ],
    camera: {
      speech: "Que tal pressionar o botão vermelho? :)",
      shutterLabel: "Disparar a câmera e trocar a fotografia",
      brand: "Land 1000",
      model: "sx-70 ✦ light",
      photoPlaceholder: "Foto",
      captions: [
        { title: "Expressão", text: "Quanto mais me expresso, mais me conecto." },
        { title: "Detalhes", text: "Sempre que posso, olho para o céu." },
        { title: "Conexão", text: "Novos sons também são novas formas de enxergar o mundo." },
        { title: "Natureza", text: "Sair da rotina também muda minha perspectiva." },
      ],
    },
    links: [
      { n: "01", label: "Quem sou", href: "#sobre" },
      { n: "02", label: "O que faço", href: "#comp" },
      { n: "03", label: "Ver cases", href: "#exp", arrow: true },
      { n: "04", label: "Contato", href: "#contato", arrow: true },
    ],
  },

  ribbon:
    "pesquisa quali ✦ pesquisa quanti ✦ benchmark ✦ jornada ✦ análise heurística ✦ comportamento do usuário ✦ design system ✦ acessibilidade ✦",

  about: {
    kicker: "Sobre mim",
    title: "Design é conversa antes de ser tela",
    p1: "Trabalho com produtos digitais de ponta a ponta. Meu processo passa por pesquisa, análise de mercado, jornada do usuário, heurísticas e acessibilidade — da descoberta à entrega. No fim, transformo tudo isso em experiências que descompliquem processos e conectem pessoas e negócios.",
    p2: "Desenho a partir de dados, conversas e comportamento. IA faz parte do meu processo como ferramenta de apoio, nunca como substituta da decisão de design.",
    traits: ["Criativa", "Comunicativa", "Curiosa", "Apaixonada por experiências"],
    facts: [
      { k: "Experiência", v: "8 anos" },
      { k: "Setores", v: "Bancos e mídia" },
      { k: "Inegociáveis", v: "Criar conexões" },
      { k: "Entrego", v: "Decisão, não achismo" },
    ],
    photoHint: "sua foto — retrato vertical",
    photoAlt: "Retrato de Ana Carolina Trama",
    fileTag: "foto_de_perfil.png",
    note: "Boas experiências precisam de fundação. É acompanhando o processo de ponta a ponta que eu construo soluções que fazem sentido além da tela.",
  },

  skills: {
    kicker: "Competências",
    eyebrow: "/ como eu atuo /",
    titleA:
      "Da pesquisa à entrega, transformo demandas em experiências mais claras, estratégicas e",
    titleB: "viáveis.",
    cards: [
      {
        num: "01",
        tag: "discovery",
        title: "Research & Discovery",
        desc: "Pesquisa qualitativa e quantitativa, benchmarking, pesquisa de mercado e análise de dados.",
        chips: ["quali", "quanti", "benchmark", "dados"],
      },
      {
        num: "02",
        tag: "systems",
        title: "Experience & Service Strategy",
        desc: "Jornadas, fluxos e processos de ponta a ponta, identificação de gaps, fricções e oportunidades dentro e fora do ambiente digital.",
        chips: ["jornadas", "blueprint", "fluxos", "gaps"],
      },
      {
        num: "03",
        tag: "pessoas",
        title: "Facilitation & Product Alignment",
        desc: "Dinâmicas, workshops, conversas individuais, alinhamento com stakeholders, entendimento de demandas e estruturação de propostas de atuação.",
        chips: ["workshops", "facilitação", "stakeholders", "escopo"],
      },
      {
        num: "04",
        tag: "craft",
        title: "Interaction Design & Prototyping",
        desc: "Fluxos, wireframes, protótipos e construção de soluções consistentes e viáveis para desenvolvimento.",
        chips: ["wireframes", "protótipos", "design system", "handoff"],
      },
      {
        num: "05",
        tag: "evidência",
        title: "Validation, Accessibility & Analytics",
        desc: "Validação, acessibilidade, métricas, analytics e tagueamento para apoiar decisões e evolução contínua da experiência.",
        chips: ["usabilidade", "WCAG", "métricas", "analytics"],
      },
    ],
    cta: "Acesse meus projetos →",
  },

  exp: {
    kicker: "Trajetória",
    title: "Minhas experiências",
    items: [
      {
        // ⚠ conteúdo "a definir" — oculto, como no protótipo (index.html mostra a partir do 2º item)
        hidden: true,
        role: "Cargo a definir",
        co: "Empresa a definir",
        period: "2023 — hoje",
        desc: "Descrição a preencher: contexto do produto, tipo de atuação e principais entregas.",
        tags: ["a definir", "a definir", "a definir"],
        learn: "Aprendizado a preencher.",
      },
      {
        role: "Cargo a definir",
        co: "Empresa a definir",
        period: "2022 — 2023",
        desc: "Descrição a preencher: contexto do produto, tipo de atuação e principais entregas.",
        tags: ["a definir", "a definir", "a definir"],
        learn: "Aprendizado a preencher.",
      },
      {
        role: "Cargo a definir",
        co: "Empresa a definir",
        period: "2021 — 2022",
        desc: "Descrição a preencher: contexto do produto, tipo de atuação e principais entregas.",
        tags: ["a definir", "a definir", "a definir"],
        learn: "Aprendizado a preencher.",
      },
      {
        role: "UX/UI Designer",
        co: "Certsys — DER",
        period: "2020 — 2021",
        desc: "Descoberta e desenho de fluxos críticos em aplicativo com milhões de acessos: pesquisa contínua, jornada ponta a ponta e tradução de regras de negócio complexas em interface compreensível.",
        tags: ["app bancário", "onboarding", "design system"],
        learn: "Decisão documentada vale mais que protótipo perfeito.",
      },
      {
        role: "Analista de UX/UI",
        co: "Duratex — Estágio",
        period: "2019 — 2020",
        desc: "Atuei na criação de peças gráficas para grandes clientes, estruturação de e-mail marketing, layouts de sites e páginas digitais, estampas de camisetas e estruturação de artes para divulgação de produtos e campanhas.",
        tags: ["portal de notícias", "paywall", "acessibilidade"],
        learn: "Todo aprendizado é mais uma etapa para descobrir o que precisamos.",
      },
      {
        role: "Designer Gráfico",
        co: "Tech Viking — Consultoria Digital",
        period: "2018 — 2019",
        desc: "Consultoria para empresas de pequeno e médio porte, com foco em melhorar a jornada e a experiência dos clientes em processos de ponta a ponta. Ênfase em usabilidade de produtos digitais.",
        tags: ["descoberta", "prototipação", "handoff", "acessibilidade"],
        learn: "Todo produto merece uma boa usabilidade e todo cliente uma boa experiência.",
      },
    ],
  },

  contact: {
    kicker: "Contato",
    title: "Para cada problema, uma nova oportunidade.",
    lead: "Problemas complexos raramente chegam com briefing perfeito. Sempre existe um novo porquê.",
    text: "A gente começa entendendo — depois organiza, questiona, testa e transforma em algo que faça sentido.",
    primaryCta: "Começar uma conversa →",
    linkedinCta: "Conectar no LinkedIn ↗",
    form: {
      title: "Linha aberta ★",
      code: "form. 04",
      name: "Nome",
      email: "E-mail",
      phone: "Celular (opcional)",
      context: "Breve contexto",
      placeholder:
        "Me conta um pouco sobre o projeto, oportunidade ou problema — não precisa estar organizado :)",
      submit: "Enviar mensagem →",
      sending: "Enviando…",
      error: "Não consegui enviar agora. Tenta de novo ou escreve direto para",
      mailSubject: "Contato pelo portfólio",
    },
    sent: { title: "Recado recebido. ★", text: "Já chegou por aqui. Respondo humanos, prometo." },
    sentMail: {
      title: "Quase lá. ★",
      text: "Abri seu app de e-mail com a mensagem pronta — é só enviar. Respondo humanos, prometo.",
    },
    phoneAlt: "Telefone fixo transparente dos anos 90",
    phoneLabel: "Fazer o telefone tocar",
  },

  footer: {
    text: "Feito à mão, com pesquisa. © 2026 Ana Carolina Trama",
    end: "You've reached the end. ★",
    top: "[ voltar ao topo ↑ ]",
  },
};
