import type { Copy } from "./types";

// Espelho de content/pt.ts. Onde o texto em PT é o mesmo do protótipo, segue a tradução do
// i18n.js (v2/); onde o PT mudou depois do i18n, a tradução foi refeita a partir do PT atual.
export const en: Copy = {
  htmlLang: "en",
  meta: {
    title: "Ana Carolina Trama — UX/UI · Product Designer",
    description:
      "From humans to humans. Problems aren't blockers: they're what hasn't been discovered yet.",
  },
  header: { home: "Ana Trama — back to top", langLabel: "language /", navLabel: "Sections" },
  nav: [
    { label: "Home", href: "#inicio" },
    { label: "About", href: "#sobre" },
    { label: "Experience", href: "#exp" },
    { label: "Skills", href: "#comp" },
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
    now: ["Product Designer", "São Paulo, Brazil"],
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
        {
          title: "Expression",
          text: "The more I express myself, the more I connect.",
          alt: "Ana smiling, wearing glasses, a striped top and colorful necklaces",
        },
        {
          title: "Details",
          text: "Whenever I can, I look up at the sky.",
          alt: "Ana in sunglasses, photographed from below against a blue sky with clouds",
        },
        {
          title: "Connection",
          text: "New sounds are also new ways of seeing the world.",
          alt: "Ana wearing headphones, smiling at the camera",
        },
        {
          title: "Nature",
          text: "Stepping out of routine changes my perspective too.",
          alt: "Ana outdoors, with mountains and sky in the background",
        },
      ],
    },
    links: [
      { n: "01", label: "About me", href: "#sobre" },
      { n: "02", label: "Experience", href: "#exp", arrow: true },
      { n: "03", label: "Skills", href: "#comp" },
      { n: "04", label: "Contact", href: "#contato", arrow: true },
    ],
    whatIDo: {
      eyebrow: "what I do /",
      title: "Every problem is unique and deserves individual attention.",
      text: "Each situation calls for a different approach, from adjusting existing interfaces to creating new products. The answer is almost never on the surface.",
      cta: "See my experience →",
    },
  },

  ribbon:
    "qualitative research ✦ quantitative research ✦ benchmark ✦ journey ✦ heuristic analysis ✦ user behavior ✦ design system ✦ accessibility ✦",

  about: {
    kicker: "About me",
    title: "Design is a conversation before it is a screen",
    p1: "I work on digital products end to end. My process covers research, market analysis, user journeys, heuristics and accessibility — from discovery to delivery. In the end, I turn it all into experiences that simplify processes and connect people and businesses.",
    p2: "I design from data, conversations and behavior. AI is part of my process as a support tool, never as a replacement for design judgment.",
    traits: ["Creative", "Communicative", "Curious", "In love with experiences"],
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

  exp: {
    kicker: "Experience",
    title: "Where the work happened",
    items: [
      {
        role: "UX/UI & Product Designer",
        co: "Cast group — Banco do Brasil project",
        period: "2023 — now",
        desc: "On the Banco do Brasil account, I design journeys and interfaces for digital products used by millions of customers, balancing business rules, security and simplicity. In Figma, I build flows, high-fidelity prototypes and components aligned with the design system, with accessibility built in from the start. I use AI as day-to-day support (to synthesize research, explore alternatives and refine copy), but decisions stay grounded in data and in conversations with users. I work side by side with POs, business and engineering in agile squads, from discovery to delivery.",
        tags: ["Banco do Brasil", "Figma", "applied AI", "design system", "accessibility"],
        learn: "In banking, clarity is security too.",
      },
      {
        role: "UX/UI & Product Designer",
        co: "NTT DATA Europe & Latam",
        period: "2021 — 2023",
        desc: "Projects for Itaú Unibanco, Via Varejo and CPFL: web and mobile prototypes based on research and journey mapping; creating, aligning and validating app and website flows; responsive layouts and design systems. I ran user interviews and workshops, validated hypotheses through qualitative and quantitative research, and worked closely with developers to make sure solutions were understood, all within an agile methodology.",
        tags: ["Itaú Unibanco", "Via Varejo", "CPFL", "design system", "agile"],
        learn: "A hypothesis only becomes a solution after it meets the user.",
      },
      {
        role: "UX/UI Designer",
        co: "PeoplePRO — UOL project",
        period: "2020",
        desc: "Allocated to UOL (Universo Online), I designed interfaces, products and services around users' needs: navigation maps, prototypes, layouts and input on the copy. I ran customer research and competitor analysis to find improvements, and created and rolled out UOL's visual language across its products, with styleguides and libraries aligned to the master guide. I also followed layout implementation and presented and defended concepts to internal clients.",
        tags: ["UOL", "styleguide", "prototypes", "customer research"],
        learn: "Visual consistency is what makes a big product feel like one.",
      },
      {
        role: "UX/UI Designer",
        co: "Certsys — DER",
        period: "2020 — 2021",
        desc: "I worked on the discovery and design of critical flows in an app with millions of sessions: continuous research, end-to-end journeys and translating complex business rules into an understandable interface.",
        tags: ["traffic app", "onboarding", "design system"],
        learn: "A documented decision beats a perfect prototype.",
      },
      {
        role: "UX/UI Analyst",
        co: "Duratex — Internship",
        period: "2019 — 2020",
        desc: "I created graphic pieces for major clients, structured marketing emails and designed website and landing page layouts, t-shirt prints and promotional art for products and campaigns.",
        tags: ["graphic design", "email marketing", "web layouts", "campaigns"],
        learn: "Every lesson is one more step toward discovering what we need.",
      },
      {
        role: "Graphic Designer",
        co: "Tech Viking — Digital Consultancy",
        period: "2018 — 2019",
        desc: "I worked in consulting for small and mid-sized companies, focused on improving customer journeys and experience across end-to-end processes, with an emphasis on digital product usability.",
        tags: ["discovery", "prototyping", "handoff", "accessibility"],
        learn: "Every product deserves good usability and every customer a good experience.",
      },
    ],
  },

  skills: {
    kicker: "Skills",
    badge: "Mixtape",
    loading: "Loading...",
    stickers: ["← ask first.", "Error! pretty isn't enough."],
    groups: [
      {
        t: "Research & data",
        items: [
          "UX Research",
          "Quantitative & qualitative research",
          "Heuristic analysis",
          "Benchmarking",
          "Usability testing",
          "Metrics & hypotheses",
        ],
      },
      {
        t: "Strategy",
        items: ["UX Strategy", "Problem framing", "Journey analysis", "Business rules", "Prioritization"],
      },
      {
        t: "Product design",
        items: [
          "Product Design",
          "Interaction Design",
          "Information Architecture",
          "User Flows",
          "UI Design",
          "Prototyping",
        ],
      },
      {
        t: "Systems & quality",
        items: ["Design Systems", "Componentization", "Accessibility", "Usability", "Documentation", "Handoff"],
      },
    ],
    highlight: "user ↔ business. design builds the bridge.",
    figjamNote: "this made sense in FigJam.",
    toolbox: {
      title: "Toolbox.exe",
      lines: ["Figma · FigJam", "AI Tools · Prototyping"],
      minimize: "Minimize Toolbox",
      close: "Close Toolbox",
      open: "Open Toolbox",
    },
    memo: "memo.",
    ctrlz: "ctrl + z is self-care.",
    notes: [
      "RULE #01 — Never assume.",
      "RULE #02 — Ask “why?” Then ask again.",
      "testing > guessing",
    ],
    notesHint: "Draggable sticky note. Use the arrow keys to move it.",
    dragHint: {
      lead: "Psst!",
      mouse: "The sticky notes on this board move — click and drag them around.",
      touch: "The sticky notes on this board move — tap and drag them around.",
    },
    mascot: "Waving mascot",
    year: "1998 ★",
    todo: { title: "to-do:", items: ["✓ ask", "✓ test"] },
    fileTag: "final_version_for_real_03.fig",
    boardEnd: "</board>",
    bazinga: "Bazinga!",
  },

  contact: {
    kicker: "Contact",
    title: "Every problem, a new opportunity.",
    lead: "Complex problems rarely arrive with a perfect brief. There's always a new why.",
    text: "We start by understanding — then we organize, question, test and turn it into something that makes sense.",
    primaryCta: "Start a conversation →",
    linkedinCta: "Connect on LinkedIn ↗",
    form: {
      title: "Lines are open ★",
      code: "form. 04",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      context: "Brief context",
      placeholder:
        "Tell me a bit about the project, opportunity or problem — it doesn't have to be tidy :)",
      submit: "Send message →",
      note: "Opens WhatsApp with your message ready.",
    },
    whatsapp: {
      greeting: "Hi, Ana! I found you through your portfolio.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      context: "Context",
    },
    sent: {
      title: "Almost there. ★",
      text: "I opened WhatsApp with your message ready — just tap send. I answer humans, I promise.",
      retry: "WhatsApp didn't open? Click here",
      again: "Write another message",
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
