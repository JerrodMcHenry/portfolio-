export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  themes: string[];
  /**
   * Falls back to the projects index until a dedicated case-study route
   * exists for this project.
   */
  href: string;
}

export const projects: Project[] = [
  {
    slug: "venturegps",
    name: "VentureGPS",
    tagline: "Startup intelligence platform for founders and investors",
    summary:
      "Turns raw company and market signals into structured, comparable analysis — combining a deterministic scoring methodology with AI-assisted research, benchmarking, and secure website ingestion.",
    themes: [
      "Full-stack product engineering",
      "Deterministic scoring methodology",
      "AI-assisted analysis",
      "Secure ingestion (SSRF-hardened)",
      "Automated testing",
    ],
    href: "/projects",
  },
  {
    slug: "economic-intelligence",
    name: "Economic Intelligence",
    tagline: "Backend platform for reliable economic data analysis",
    summary:
      "A data-intensive backend built around reliable ingestion, persistence, and deterministic transformation of economic series, with a deliberate boundary between deterministic domain logic and the AI analysis layered on top.",
    themes: [
      "FastAPI + PostgreSQL",
      "SQLAlchemy data layer",
      "External API integration",
      "Deterministic domain logic",
      "Validation & error handling",
      "Architecture documentation",
    ],
    href: "/projects",
  },
];
