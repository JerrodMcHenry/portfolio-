import type { EvidenceCategory } from "@/data/evidence";
import styles from "./EvidenceCard.module.css";

interface EvidenceCardProps {
  category: EvidenceCategory;
}

export default function EvidenceCard({ category }: EvidenceCardProps) {
  return (
    <article className={styles.card}>
      <h3>{category.title}</h3>
      <p>{category.description}</p>
    </article>
  );
}
