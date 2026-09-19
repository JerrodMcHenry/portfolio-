import type { ReactNode } from "react";
import styles from "./CaseStudySection.module.css";

interface CaseStudySectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function CaseStudySection({
  id,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section id={id} className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
