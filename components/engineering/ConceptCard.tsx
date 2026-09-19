import type { EngineeringConcept } from "@/data/engineering";
import styles from "./ConceptCard.module.css";

interface ConceptCardProps {
  concept: EngineeringConcept;
}

export default function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <article className={styles.card}>
      <h3>{concept.title}</h3>
      <p>{concept.summary}</p>
      {concept.whyItMatters ? (
        <p className={styles.whyItMatters}>
          <strong>Why it matters: </strong>
          {concept.whyItMatters}
        </p>
      ) : null}
    </article>
  );
}
