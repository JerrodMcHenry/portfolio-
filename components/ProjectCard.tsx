import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <h3>{project.name}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.summary}>{project.summary}</p>
      <ul className={styles.themes}>
        {project.themes.map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>
      <Link href={project.href} className={styles.link}>
        View {project.name} details
      </Link>
    </article>
  );
}
