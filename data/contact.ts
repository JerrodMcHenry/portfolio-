export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Only populate a field once the underlying asset/URL actually exists.
 * `getContactLinks` filters out anything left undefined, so the homepage
 * never renders a placeholder or dead link.
 */
interface ContactLinksConfig {
  resumeHref?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const contactLinksConfig: ContactLinksConfig = {
  // Sourced from the repository's configured git remote (origin).
  githubUrl: "https://github.com/JerrodMcHenry",
};

export function getContactLinks(): ContactLink[] {
  const links: ContactLink[] = [];

  if (contactLinksConfig.resumeHref) {
    links.push({ label: "Resume", href: contactLinksConfig.resumeHref });
  }
  if (contactLinksConfig.githubUrl) {
    links.push({
      label: "GitHub",
      href: contactLinksConfig.githubUrl,
      external: true,
    });
  }
  if (contactLinksConfig.linkedinUrl) {
    links.push({
      label: "LinkedIn",
      href: contactLinksConfig.linkedinUrl,
      external: true,
    });
  }

  return links;
}
