export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Portfolio",
  description:
    "Software engineering portfolio and technical case studies.",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "Engineering", href: "/engineering" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
  ] as NavItem[],
};
