/* ============================================================
   NoctiDev — site content
   Edit anything here. Values flagged with a TODO note are
   placeholders meant to be replaced with your real data.
   ============================================================ */
window.SITE = {
  user: "noctidev",
  host: "arch",
  path: "~",

  ascii: [
    " _   _    ___     ____  _____  ___ ",
    "| \\ | |  / _ \\   / ___||_   _||_ _|",
    "|  \\| | | | | | | |      | |   | | ",
    "| |\\  | | |_| | | |___   | |   | | ",
    "|_| \\_|  \\___/   \\____|  |_|  |___|",
    "      n  i  g  h  t   ·   s  h  i  f  t   ·   d  e  v",
  ].join("\n"),

  neofetch: {
    titleName: "noctidev",
    titleHost: "arch",
    rows: [
      ["OS",        "Arch Linux x86_64"],
      ["Host",      "personal-rig / ThinkPad"],
      ["Kernel",    "6.9-zen"],
      ["Shell",     "zsh + starship"],
      ["Editor",   "neovim"],
      ["WM",        "Hyprland"],
      ["Langs",     ["Rust", "PHP", "Bash", "SQL"]],
      ["Focus",     ["Backend", "Systems", "APIs"]],
      ["Uptime",    "~7 yrs in the trenches"],
    ],
  },

  // about
  about: {
    lead: [
      "Hey — soy **NoctiDev**, backend developer y <hl>Rust enthusiast</hl>.",
      "Vivo en la terminal: construyo servicios rápidos, fiables y bien tipados,",
      "casi siempre sobre Linux. Vengo del mundo PHP y hoy paso la mayor parte",
      "del tiempo escribiendo Rust — me obsesionan los sistemas que no se caen",
      "a las 3 a.m. y el código que se lee como prosa.",
    ].join(" "),
    meta: [
      ["Role",     "Backend Developer",  true],
      ["Stack",    "Rust · PHP · Linux", false],
      ["Based in", "Remote / CET",       false], /* TODO */
      ["Status",   "Open to projects",   true], /* TODO */
    ],
  },

  // projects   (lang sets the accent color)
  projects: [
    {
      name: "ferro-queue",
      lang: "Rust",
      color: "var(--c-orange)",
      stars: 642, /* TODO */
      desc: "Cola de trabajos distribuida y persistente sobre Postgres. Reintentos con backoff, prioridades y dead-letter, con un cliente async de cero dependencias pesadas.",
      tags: ["tokio", "sqlx", "async", "jobs"],
      url: "#",
    },
    {
      name: "nocti-cli",
      lang: "Rust",
      color: "var(--c-orange)",
      stars: 318, /* TODO */
      desc: "Mi navaja suiza de terminal: scaffolding de proyectos, snippets y automatizaciones de dotfiles. Binario único, arranque instantáneo.",
      tags: ["clap", "tui", "dx"],
      url: "#",
    },
    {
      name: "phpx-router",
      lang: "PHP",
      color: "var(--c-purple)",
      stars: 271, /* TODO */
      desc: "Router HTTP minimalista para PHP moderno (8.3+): atributos, middleware tipado y matching compilado. Pensado para microservicios ligeros.",
      tags: ["php8", "psr", "router"],
      url: "#",
    },
    {
      name: "lumen-logs",
      lang: "Rust",
      color: "var(--c-orange)",
      stars: 156, /* TODO */
      desc: "Agregador de logs estructurados con parsing en streaming y consultas tipo SQL sobre stdin. Pensado para depurar en producción sin salir de la shell.",
      tags: ["streaming", "observability", "cli"],
      url: "#",
    },
  ],

  // skills
  skills: [
    {
      group: "Languages",
      items: [
        ["Rust",        5, "daily driver"],
        ["PHP",         4, "8+ years"],
        ["SQL",         4, "postgres"],
        ["Bash",        4, "glue everything"],
        ["TypeScript",  3, "when needed"],
      ],
    },
    {
      group: "Backend & APIs",
      items: [
        ["Axum / Actix", 5, "rust web"],
        ["Tokio",        4, "async runtime"],
        ["Laravel",      4, "php"],
        ["REST · gRPC",  4, ""],
      ],
    },
    {
      group: "Infra & Data",
      items: [
        ["Linux",        5, "arch btw"],
        ["PostgreSQL",   4, ""],
        ["Docker",       4, ""],
        ["Redis",        4, ""],
        ["Nginx",        3, ""],
      ],
    },
    {
      group: "Tooling",
      items: [
        ["Neovim",       5, "lua-pilled"],
        ["Git",          5, ""],
        ["CI/CD",        4, "gh actions"],
        ["Nix",          3, "learning"],
      ],
    },
  ],

  // experience  (newest first)
  experience: [
    {
      hash: "a1f9c2e",
      role: "Senior Backend Engineer",
      company: "Lumina Systems", /* TODO */
      when: "2023 — present",
      what: [
        "Lidero la migración de servicios críticos de PHP a Rust (Axum), bajando p99 de 480ms a 70ms.",
        "Diseño de APIs internas gRPC y una capa de colas propia sobre Postgres.",
      ],
      stack: ["Rust", "Axum", "Postgres", "gRPC", "Docker"],
    },
    {
      hash: "7b3d0a4",
      role: "Backend Developer",
      company: "Adriatic Labs", /* TODO */
      when: "2020 — 2023",
      what: [
        "Construí y mantuve APIs en Laravel para una plataforma SaaS con +200k usuarios.",
        "Introduje testing, CI y observabilidad; reduje incidencias en producción ~40%.",
      ],
      stack: ["PHP", "Laravel", "MySQL", "Redis"],
    },
    {
      hash: "3e8f1b9",
      role: "Full-Stack Developer",
      company: "Freelance", /* TODO */
      when: "2018 — 2020",
      what: [
        "Entregué webs y APIs a medida para pymes, de principio a fin sobre VPS Linux.",
      ],
      stack: ["PHP", "Linux", "Nginx", "JS"],
    },
  ],

  // links (footer / social command)
  links: [
    ["GitHub",   "github.com/noctidev",     "#"], /* TODO */
    ["Email",    "hi@noctidev.sh",          "mailto:hi@noctidev.sh"], /* TODO */
    ["X",        "x.com/noctidev",          "#"], /* TODO */
  ],
};
