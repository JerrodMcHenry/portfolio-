export interface CaseStudySection {
  /** Must match the `id` used by the corresponding <CaseStudySection> in the MDX content. */
  id: string;
  title: string;
}

export interface EvidenceLink {
  label: string;
  href: string;
  kind: "repository" | "live" | "documentation" | "diagram" | "tests" | "video";
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  themes: string[];
  /** Case-study route for this project. */
  href: string;
  /** Only populated once a real, verified URL exists. */
  repositoryUrl?: string;
  liveUrl?: string;
  /** Only populated once a verified project status exists. */
  status?: string;
  /** Ordered table of contents for the case-study page. */
  caseStudySections: CaseStudySection[];
  /** Only real, verified links belong here — never invented. */
  evidenceLinks: EvidenceLink[];
}

const standardCaseStudySections: CaseStudySection[] = [
  { id: "executive-overview", title: "Executive Overview" },
  { id: "system-overview", title: "System Overview" },
  { id: "architecture", title: "Architecture" },
  { id: "engineering-decisions", title: "Engineering Decisions" },
  { id: "production-engineering", title: "Production Engineering" },
  { id: "ai-engineering", title: "AI Engineering" },
  { id: "failures-debugging", title: "Real Failures & Debugging" },
  { id: "scaling-evolution", title: "Scaling & Evolution" },
  { id: "evidence", title: "Evidence" },
];

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
    href: "/projects/venturegps",
    caseStudySections: standardCaseStudySections,
    evidenceLinks: [],
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
    href: "/projects/economic-intelligence",
    caseStudySections: standardCaseStudySections,
    evidenceLinks: [],
  },
];
