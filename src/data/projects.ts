// Public GitHub repositories only. Facts checked against each repo's README and
// manifests (September 2026). Private repositories never appear on the site.

export type Kind = "backend" | "systems";

export interface Project {
  id: string;
  title: string;
  repo: string;
  /** backend = services and distributed systems; systems = native apps and developer tools */
  kind: Kind;
  featured: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
  updated: string;
  commits: number;
  demo?: string;
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "continuity-lab",
    title: "Continuity Lab",
    repo: "Osmait/Continuity-Lab",
    kind: "backend",
    featured: true,
    summary:
      "Git Smart HTTP served by disposable nodes, while MinIO holds the authoritative write-ahead log, refs and snapshots.",
    highlights: [
      "Pushes commit with a conditional If-Match write on the head object instead of a leader",
      "Nodes rebuild their caches from a snapshot plus WAL replay; HMAC-signed UDP gossip is only a speed-up",
      "Failpoints, chaos and concurrency scripts, and a read-only React console for WAL and node health",
    ],
    tech: ["Go", "MinIO", "S3", "Git", "Docker", "Prometheus", "React", "TypeScript"],
    updated: "2026-08-30",
    commits: 2,
    note: "Educational and local-only by design.",
  },
  {
    id: "gestor",
    title: "Gestor de Presupuesto",
    repo: "Osmait/GestorDePresupuesto",
    kind: "backend",
    featured: true,
    summary:
      "Personal finance app with a Go (Gin) clean-architecture backend on PostgreSQL and a Next.js front end.",
    highlights: [
      "PostgreSQL row-level security isolates each user's data inside the database",
      "Trigger-based audit trail snapshots rows before and after changes on eight financial tables",
      "Refresh-token rotation with reuse detection, rate limiting, background workers and SSE notifications",
    ],
    tech: ["Go", "Gin", "PostgreSQL", "Next.js", "TypeScript", "Docker", "SQLite"],
    updated: "2026-07-28",
    commits: 738,
    demo: "https://gestor-de-presupuesto.vercel.app",
    note: "A long-running learning playground.",
  },
  {
    id: "atomis",
    title: "Atomis",
    repo: "Osmait/atomis",
    kind: "systems",
    featured: true,
    summary:
      "Local-first code playground for Zig, Rust, Go, TypeScript, Python, C and C++, with Monaco, real language servers, native execution and inline runtime values.",
    highlights: [
      "Rust/axum orchestrator speaks a WebSocket protocol to a React and Monaco UI",
      "Inline values come from per-language AST instrumentation, without changing the visible code",
      "A Linux Landlock sandbox confines each session to its workspace, with no TCP",
    ],
    tech: ["Rust", "axum", "TypeScript", "React", "Zig", "Go", "Python", "C", "C++", "Tauri", "Docker", "Playwright"],
    updated: "2026-09-09",
    commits: 144,
  },
  {
    id: "sbql",
    title: "sbql",
    repo: "Osmait/sbql",
    kind: "systems",
    featured: true,
    summary:
      "SQL workspace on a headless Rust core, with a Ratatui terminal UI and a native SwiftUI macOS app for PostgreSQL, SQLite and Redis.",
    highlights: [
      "The core owns connections, pagination, schema introspection and mutations; UIs are thin clients",
      "Sorting and filtering rewrite the SQL syntax tree instead of concatenating strings",
      "The SwiftUI app calls the same Rust engine through UniFFI; passwords live in the system keyring",
    ],
    tech: ["Rust", "Ratatui", "SQLx", "PostgreSQL", "SQLite", "Redis", "Swift", "SwiftUI", "UniFFI"],
    updated: "2026-08-14",
    commits: 121,
  },
  {
    id: "lectern",
    title: "Lectern",
    repo: "Osmait/lectern",
    kind: "systems",
    featured: true,
    summary:
      "Native Linux PDF reader in Zig that renders with Poppler and Cairo behind an SDL3 interface, with bookmarks, dark mode and freehand notes.",
    highlights: [
      "A background worker pre-renders neighbouring pages so turning a page never blocks the window",
      "Notes autosave to an atomically written sidecar file; the PDF itself is never modified",
      "The idle window uses no CPU, and native tests compare screenshots against golden images",
    ],
    tech: ["Zig", "C", "SDL3", "Poppler", "Cairo"],
    updated: "2026-09-05",
    commits: 7,
  },
  {
    id: "ghline",
    title: "ghline & diffline",
    repo: "Osmait/ghline",
    kind: "systems",
    featured: true,
    summary:
      "Two Rust terminal interfaces: ghline browses GitHub through the gh CLI, diffline reviews a local diff and sends line-anchored notes to a coding agent.",
    highlights: [
      "One shared crate (palette, fuzzy matcher, lexer, drawing primitives) behind two binaries",
      "Review notes are anchored to file lines, not screen rows, and sent as one grouped message",
      "Release archives ship with SHA-256 checksums and GitHub provenance attestations",
    ],
    tech: ["Rust", "Ratatui", "crossterm", "Git"],
    updated: "2026-08-31",
    commits: 123,
  },
  {
    id: "hitt",
    title: "hitt",
    repo: "Osmait/hitt",
    kind: "systems",
    featured: true,
    summary:
      "Terminal API client in Rust: a TUI and a scriptable CLI for HTTP collections, environments, request chaining, assertions, load tests, WebSocket and SSE.",
    highlights: [
      "Imports cURL, Postman, OpenAPI 3 and HAR; exports cURL, Postman and Markdown docs",
      "Request chains pull values out with JSONPath, headers or cookies and pass them to the next step",
      "Built-in load testing reports p50 to p99 latency",
    ],
    tech: ["Rust", "Ratatui", "Tokio", "reqwest", "WebSocket", "SSE"],
    updated: "2026-03-11",
    commits: 25,
    note: "Work in progress; gRPC execution is not wired up yet.",
  },
  {
    id: "redsocial",
    title: "Social Network Microservices",
    repo: "Osmait/redsocialMicroservices",
    kind: "backend",
    featured: false,
    summary:
      "Polyglot social network split into services: Go gateway and auth, NestJS posts, FastAPI comments, Spring Boot users, and a Next.js front end.",
    highlights: [
      "Kubernetes manifests for every service plus Postgres",
      "The post service publishes over RabbitMQ; services expose Prometheus metrics",
      "GitHub Actions builds and pushes each service image",
    ],
    tech: ["Go", "Gin", "NestJS", "TypeScript", "FastAPI", "Python", "Spring Boot", "Java", "PostgreSQL", "RabbitMQ", "Kubernetes", "Docker", "Prometheus", "Next.js"],
    updated: "2024-04-26",
    commits: 169,
  },
  {
    id: "prestamos",
    title: "Préstamos SB API",
    repo: "Osmait/prestamosSB-api",
    kind: "backend",
    featured: false,
    summary: "Spring Boot REST API for a loans app, with Spring Security JWT authentication, JPA and PostgreSQL.",
    highlights: ["JWT authentication with jjwt and Spring Security"],
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker"],
    updated: "2023-11-18",
    commits: 33,
  },
  {
    id: "coderunner",
    title: "CodeRunner Web",
    repo: "Osmait/codeRunner-web",
    kind: "backend",
    featured: false,
    summary:
      "Go service that runs submitted code inside per-language Docker containers and streams stdout and stderr back over WebSockets. The early ancestor of Atomis.",
    highlights: ["Output is piped out of docker run and streamed through a notifier", "A Cobra CLI exposes run, languages and webserver commands"],
    tech: ["Go", "Docker", "WebSocket", "React", "TypeScript", "Cobra"],
    updated: "2024-10-16",
    commits: 21,
  },
  {
    id: "tuxgo",
    title: "TuxGo",
    repo: "Osmait/tuxgo",
    kind: "systems",
    featured: false,
    summary: "tmux session manager that builds sessions, windows and nested pane layouts from local or global YAML configs.",
    highlights: ["Hierarchical split layouts and glob-based project matching", "Directory history ranked by recency and frequency, with a Bubble Tea picker"],
    tech: ["Go", "Bubble Tea", "Cobra", "tmux"],
    updated: "2026-02-17",
    commits: 19,
  },
  {
    id: "agentline",
    title: "agentline.nvim",
    repo: "Osmait/agentline.nvim",
    kind: "systems",
    featured: false,
    summary: "Neovim plugin that sends a selection or buffer, with a question, to coding agents running under herdr, or starts one in the current project.",
    highlights: ["Selections travel with their location and filetype-tagged code", "Multiline message editor and an agent picker"],
    tech: ["Lua", "Neovim"],
    updated: "2026-08-19",
    commits: 8,
  },
];

export const KIND_LABEL: Record<Kind, string> = {
  backend: "Backend & distributed systems",
  systems: "Native apps & developer tools",
};

/** Technologies ranked by how many public projects use them. */
export function techEnergy(projects: Project[] = PROJECTS) {
  const counts = new Map<string, string[]>();
  for (const p of projects) for (const t of p.tech) counts.set(t, [...(counts.get(t) ?? []), p.id]);
  return [...counts.entries()]
    .map(([name, used]) => ({ name, n: used.length, used }))
    .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
}
