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
