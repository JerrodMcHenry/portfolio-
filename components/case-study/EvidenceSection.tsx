import type { EvidenceLink, Project } from "@/data/projects";
import styles from "./EvidenceSection.module.css";

const kindLabel: Record<EvidenceLink["kind"], string> = {
  repository: "Repository",
  live: "Live application",
  documentation: "Documentation",
  diagram: "Diagram",
  tests: "Tests",
  video: "Video",
};

interface EvidenceSectionProps {
  project: Project;
}

export default function EvidenceSection({ project }: EvidenceSectionProps) {
  return (
    <section id="evidence" className={styles.section}>
      <h2>Evidence</h2>
      <p>
        Source access, architecture documentation, and recorded walkthroughs
        for {project.name} are linked here for reviewers who want to verify
        the engineering directly.
      </p>
      {project.evidenceLinks.length > 0 ? (
        <ul className={styles.list}>
          {project.evidenceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>{" "}
              <span className={styles.kind}>({kindLabel[link.kind]})</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
