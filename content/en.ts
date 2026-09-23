import type { Copy } from "./types";

// Tradução do conteúdo atual em PT. Textos que estavam só em PT no protótipo
// (hero, competências, contato) foram traduzidos aqui — vale uma revisão da Ana.
export const en: Copy = {
  htmlLang: "en",
  meta: {
    title: "Ana Carolina Trama — UX/UI · Product Designer",
    description:
      "From humans to humans. Problems aren't blockers: they're what hasn't been discovered yet.",
  },
  header: { home: "Ana Trama — back to top", langLabel: "language /" },
  nav: [
    { label: "Home", href: "#inicio" },
    { label: "About", href: "#sobre" },
    { label: "What I do", href: "#comp" },
    { label: "See cases", href: "#exp" },
    { label: "Contact", href: "#contato" },
  ],

  hero: {
    hello: "Hello, stranger.",
    firstName: "Ana Carolina",
    lastName: "Trama.",
    badge: "Complex? Good.",
    intro:
      "I like complicated problems. For 8 years I've been turning complex systems, rules and journeys into clear, human and accessible digital experiences.",
    marquee:
      "✦ Product Design — UX Strategy — AI + Design — Research — Accessibility — Complex Systems — ✦",
    cta: "Explore my work",
    nowLabel: "Currently",
    now: ["Product Designer", "São Paulo, Brazil", "Available for freelance projects"],
    solveLabel: "What I solve",
    solve: [
      "Complex systems. Long journeys. Business rules. Large volumes of information.",
      "My job is to make all of it feel simple for the people using it.",
    ],
    camera: {
      speech: "How about pressing the red button? :)",
      shutterLabel: "Fire the camera and switch the photo",
      brand: "Land 1000",
      model: "sx-70 ✦ light",
      photoPlaceholder: "Photo",
      captions: [
        { title: "Expression", text: "The more I express myself, the more I connect." },
        { title: "Details", text: "Whenever I can, I look up at the sky." },
        { title: "Connection", text: "New sounds are also new ways of seeing the world." },
        { title: "Nature", text: "Stepping out of routine changes my perspective too." },
      ],
    },
    links: [
      { n: "01", label: "About me", href: "#sobre" },
      { n: "02", label: "What I do", href: "#comp" },
      { n: "03", label: "See cases", href: "#exp", arrow: true },
      { n: "04", label: "Contact", href: "#contato", arrow: true },
    ],
  },

  ribbon:
    "qualitative research ✦ quantitative research ✦ benchmark ✦ journey ✦ heuristic analysis ✦ user behavior ✦ design system ✦ accessibility ✦",

  about: {
    kicker: "About me",
    title: "Design is a conversation before it is a screen",
    p1: "I work on digital products end to end. My process goes through research, market analysis, user journeys, heuristics and accessibility — from discovery to delivery. In the end, I turn all of it into experiences that simplify processes and connect people and businesses.",
    p2: "I design from data, conversations and behavior. AI is part of my process as a support tool, never as a replacement for design judgment.",
    traits: ["Creative", "Outspoken", "Curious", "In love with experiences"],
    facts: [
      { k: "Experience", v: "8 years" },
      { k: "Industries", v: "Banking & media" },
      { k: "Non-negotiables", v: "Creating connections" },
      { k: "I deliver", v: "Decisions, not guesses" },
    ],
    photoHint: "your photo — vertical portrait",
    photoAlt: "Portrait of Ana Carolina Trama",
    fileTag: "profile_photo.png",
    note: "Good experiences need a foundation. By following the process end to end, I build solutions that make sense beyond the screen.",
  },

  skills: {
    kicker: "Skills",
    eyebrow: "/ how I work /",
    titleA:
      "From research to delivery, I turn demands into clearer, more strategic and",
    titleB: "feasible experiences.",
    cards: [
      {
        num: "01",
        tag: "discovery",
        title: "Research & Discovery",
        desc: "Qualitative and quantitative research, benchmarking, market research and data analysis.",
        chips: ["qual", "quant", "benchmark", "data"],
      },
      {
        num: "02",
        tag: "systems",
        title: "Experience & Service Strategy",
        desc: "End-to-end journeys, flows and processes, spotting gaps, friction and opportunities inside and outside the digital space.",
        chips: ["journeys", "blueprint", "flows", "gaps"],
      },
      {
        num: "03",
        tag: "people",
        title: "Facilitation & Product Alignment",
        desc: "Dynamics, workshops, one-on-one conversations, stakeholder alignment, understanding demands and shaping proposals.",
        chips: ["workshops", "facilitation", "stakeholders", "scope"],
      },
      {
        num: "04",
        tag: "craft",
        title: "Interaction Design & Prototyping",
        desc: "Flows, wireframes, prototypes and consistent solutions that are feasible to build.",
        chips: ["wireframes", "prototypes", "design system", "handoff"],
      },
      {
        num: "05",
        tag: "evidence",
        title: "Validation, Accessibility & Analytics",
        desc: "Validation, accessibility, metrics, analytics and tagging to support decisions and the continuous evolution of the experience.",
        chips: ["usability", "WCAG", "metrics", "analytics"],
      },
    ],
    cta: "See my projects →",
  },

  exp: {
    kicker: "Experience",
    title: "Where the work happened",
    items: [
      {
        hidden: true,
        role: "Role TBD",
        co: "Company TBD",
        period: "2023 — now",
        desc: "Description TBD: product context, scope of work and main deliverables.",
        tags: ["TBD", "TBD", "TBD"],
        learn: "Takeaway TBD.",
      },
      {
        role: "Role TBD",
        co: "Company TBD",
        period: "2022 — 2023",
        desc: "Description TBD: product context, scope of work and main deliverables.",
        tags: ["TBD", "TBD", "TBD"],
        learn: "Takeaway TBD.",
      },
      {
        role: "Role TBD",
        co: "Company TBD",
        period: "2021 — 2022",
        desc: "Description TBD: product context, scope of work and main deliverables.",
        tags: ["TBD", "TBD", "TBD"],
        learn: "Takeaway TBD.",
      },
      {
        role: "UX/UI Designer",
        co: "Certsys — DER",
        period: "2020 — 2021",
        desc: "Discovery and design of critical flows in an app with millions of sessions: continuous research, end-to-end journeys and translating complex business rules into an understandable interface.",
        tags: ["banking app", "onboarding", "design system"],
        learn: "A documented decision beats a perfect prototype.",
      },
      {
        role: "UX/UI Analyst",
        co: "Duratex — Internship",
        period: "2019 — 2020",
        desc: "Created graphic pieces for major clients, structured email marketing, designed website and landing page layouts, t-shirt prints and promotional art for products and campaigns.",
        tags: ["news portal", "paywall", "accessibility"],
        learn: "Every lesson is one more step toward discovering what we need.",
      },
      {
        role: "Graphic Designer",
        co: "Tech Viking — Digital Consultancy",
        period: "2018 — 2019",
        desc: "Consulting for small and mid-sized companies, focused on improving customer journeys and experience across end-to-end processes. Emphasis on digital product usability.",
        tags: ["discovery", "prototyping", "handoff", "accessibility"],
        learn: "Every product deserves good usability and every customer a good experience.",
      },
    ],
  },

  contact: {
    kicker: "Contact",
    title: "Every problem, a new opportunity.",
    lead: "Complex problems rarely arrive with a perfect brief. There's always a new why.",
    text: "We start by understanding — then we organize, question, test and turn it into something that makes sense.",
    primaryCta: "Start a conversation →",
    linkedinCta: "Connect on LinkedIn ↗",
    form: {
      title: "Line open ★",
      code: "form. 04",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      context: "Short context",
      placeholder:
        "Tell me a bit about the project, opportunity or problem — it doesn't need to be organized :)",
      submit: "Send message →",
      sending: "Sending…",
      error: "Couldn't send it right now. Try again or write directly to",
      mailSubject: "Contact from portfolio",
    },
    sent: { title: "Message received. ★", text: "It got here. I answer humans, I promise." },
    sentMail: {
      title: "Almost there. ★",
      text: "I opened your email app with the message ready — just hit send. I answer humans, I promise.",
    },
    phoneAlt: "Transparent 90s landline phone",
    phoneLabel: "Make the phone ring",
  },

  footer: {
    text: "Handmade, with research. © 2026 Ana Carolina Trama",
    end: "You've reached the end. ★",
    top: "[ back to top ↑ ]",
  },
};
