import type { CaseStudySection } from "@/data/projects";
import styles from "./CaseStudyNav.module.css";

interface CaseStudyNavProps {
  sections: CaseStudySection[];
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  return (
    <nav className={styles.nav} aria-label="Case study sections">
      <ul className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
