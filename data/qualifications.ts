export interface EducationItem {
  credential: string;
  institution: string;
  inProgress?: boolean;
}

export const education: EducationItem[] = [
  {
    credential: "M.S. Software Engineering — AI Focus",
    institution: "Western Governors University",
  },
  {
    credential: "B.A. Computer Science",
    institution: "Thomas Edison State University",
  },
];

export const professionalPerspective =
  "Alongside software engineering, I bring experience from enterprise technology and financial/economic data environments — direct exposure to customers, business requirements, and real-world workflows. That context shapes how I approach engineering: not only how to build a system, but why it needs to work a particular way for the people and businesses depending on it.";
