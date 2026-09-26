export const PROFILE = {
  name: "José Saúl Burgos",
  handle: "Osmait",
  headline: "Backend engineer",
  // From the GitHub profile README.
  focus:
    "Backend engineer focused on reliable services and distributed systems. I also build native Linux apps and developer tools, mostly in Go, Rust and Zig, because I like to understand how things work from the inside.",
  email: "saulburgos07@gmail.com",
  links: {
    github: "https://github.com/Osmait",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-sa%C3%BAl-burgos-35680b244/",
    x: "https://x.com/saulburgos20",
  },
  role: {
    title: "Software Engineer",
    company: "SkoolScout LLC",
    arrangement: "Contract · remote",
    companyLocation: "New York, United States",
    start: "2024-03",
    // Skills used in the role (LinkedIn list plus Rust, confirmed by José).
    skills: ["Java", "Rust", "Spring Boot", "Gradle", "Terraform", "AWS", "CI/CD", "Node.js", "TypeScript", "Next.js"],
  },
  stack: {
    languages: ["Go", "Rust", "Zig", "TypeScript", "Java", "Python", "C"],
    backend: ["Gin", "Spring Boot", "NestJS", "FastAPI", "axum", "PostgreSQL", "Redis", "RabbitMQ"],
    infra: ["Docker", "Kubernetes", "Terraform", "AWS", "Prometheus", "Linux"],
  },
} as const;
