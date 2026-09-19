export interface EvidenceCategory {
  title: string;
  description: string;
}

export const evidenceCategories: EvidenceCategory[] = [
  {
    title: "Architecture & System Design",
    description:
      "Service boundaries, data flow, and tradeoffs reasoned about explicitly, not left implicit in the code.",
  },
  {
    title: "Backend & APIs",
    description:
      "APIs built with clear request/response contracts, input validation, and error handling as first-class concerns.",
  },
  {
    title: "Data & Databases",
    description:
      "Relational schema design and persistence layers built for correctness against real data, not just the happy path.",
  },
  {
    title: "Testing & Reliability",
    description:
      "Automated tests covering core business logic and known failure modes, not just top-level happy paths.",
  },
  {
    title: "Security",
    description:
      "Deliberate handling of untrusted input, including SSRF protections around website ingestion and other external-data entry points.",
  },
  {
    title: "Production AI",
    description:
      "AI used as one component inside deterministic systems, with a clear line between what the model suggests and what the business logic guarantees.",
  },
];
