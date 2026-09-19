import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="container page">
      <h1>Projects</h1>
      <p className={styles.intro}>
        This page covers two flagship projects rather than a large gallery
        of tutorial exercises. Each is a deep engineering case study:
        problem, architecture, decisions, tradeoffs, testing, security, and
        production concerns — not just a feature list.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
