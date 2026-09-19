export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Jerrod McHenry",
  role: "Software Engineer — Backend Systems & Production AI",
  description:
    "Software engineering portfolio of Jerrod McHenry: backend systems and production AI, with case studies covering architecture, testing, and security.",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "Engineering", href: "/engineering" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
  ] as NavItem[],
};
