export type Lang = "pt" | "en";

export type NavItem = { label: string; href: string };

export type Experience = {
  role: string;
  co: string;
  period: string;
  desc: string;
  tags: string[];
  learn: string;
  /** Oculta o item no site sem apagar o conteúdo. */
  hidden?: boolean;
};

export type SkillGroup = { t: string; items: string[] };

export type Copy = {
  htmlLang: string;
  meta: { title: string; description: string };
  header: { home: string; langLabel: string; navLabel: string };
  nav: NavItem[];
  hero: {
    hello: string;
    firstName: string;
    lastName: string;
    badge: string;
    intro: string;
    marquee: string;
    cta: string;
    nowLabel: string;
    now: string[];
    solveLabel: string;
    solve: string[];
    camera: {
      speech: string;
      shutterLabel: string;
      brand: string;
      model: string;
      photoPlaceholder: string;
      /** title/text = legenda da polaroid; alt = descrição da foto para leitores de tela */
      captions: { title: string; text: string; alt: string }[];
    };
    links: { n: string; label: string; href: string; arrow?: boolean }[];
    /** Bloco "o que eu faço", logo abaixo do hero */
    whatIDo: { eyebrow: string; title: string; text: string; cta: string };
  };
  ribbon: string;
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    traits: string[];
    facts: { k: string; v: string }[];
    photoHint: string;
    photoAlt: string;
    fileTag: string;
    note: string;
  };
  exp: {
    kicker: string;
    title: string;
    items: Experience[];
  };
  skills: {
    kicker: string;
    badge: string;
    loading: string;
    stickers: [string, string];
    groups: SkillGroup[];
    highlight: string;
    figjamNote: string;
    toolbox: { title: string; lines: string[]; minimize: string; close: string; open: string };
    memo: string;
    ctrlz: string;
    notes: string[];
    notesHint: string;
    mascot: string;
    year: string;
    todo: { title: string; items: string[] };
    fileTag: string;
    boardEnd: string;
    bazinga: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    text: string;
    primaryCta: string;
    linkedinCta: string;
    form: {
      title: string;
      code: string;
      name: string;
      email: string;
      phone: string;
      context: string;
      placeholder: string;
      submit: string;
      sending: string;
      error: string;
      mailSubject: string;
    };
    sent: { title: string; text: string };
    sentMail: { title: string; text: string };
    phoneAlt: string;
    phoneLabel: string;
  };
  footer: { text: string; end: string; top: string };
};
