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

export type SkillCard = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  chips: string[];
};

export type Copy = {
  htmlLang: string;
  meta: { title: string; description: string };
  header: { home: string; langLabel: string };
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
      captions: { title: string; text: string }[];
    };
    links: { n: string; label: string; href: string; arrow?: boolean }[];
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
  skills: {
    kicker: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    cards: SkillCard[];
    cta: string;
  };
  exp: {
    kicker: string;
    title: string;
    items: Experience[];
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
