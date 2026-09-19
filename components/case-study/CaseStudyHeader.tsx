import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "./CaseStudyHeader.module.css";

interface CaseStudyHeaderProps {
  project: Project;
}

export default function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/projects" className={styles.back}>
          ← All projects
        </Link>
        <h1>{project.name}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
        <ul className={styles.themes}>
          {project.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
