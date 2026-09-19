export interface ExperienceItem {
  company: string;
  /**
   * Left undefined when the exact title isn't confirmed yet, rather than
   * guessed — render conditionally, never with a placeholder string.
   */
  title?: string;
  context: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Apple",
    title: "Genius",
    context:
      "Worked at the Genius Bar troubleshooting hardware and software issues directly with customers, building an early foundation in technical problem solving.",
  },
  {
    company: "Apple",
    title: "Reliability Technician (Contract)",
    context:
      "Worked with Apple's Reliability Engineering team at the corporate level, gaining direct exposure to hardware reliability work and an engineering environment.",
  },
  {
    company: "LTSE Equity",
    title: "Customer Success Manager",
    context:
      "Worked closely with software engineers while supporting customers using LTSE's software. Seeing engineers investigate logs, debug issues, and troubleshoot software problems became a major influence on the decision to pursue software engineering.",
  },
  {
    company: "Equiniti / Astrella",
    title: "Account Executive",
    context:
      "Continued working in enterprise software and equity-management technology while pursuing computer science and software engineering education.",
  },
  {
    company: "Macrobond",
    title: "Account Executive",
    context:
      "Worked with economic and financial data software while continuing to build software systems independently and deepen engineering skills.",
  },
];
