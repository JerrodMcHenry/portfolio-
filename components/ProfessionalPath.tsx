import { experience } from "@/data/experience";
import styles from "./ProfessionalPath.module.css";

export default function ProfessionalPath() {
  return (
    <ol className={styles.timeline}>
      {experience.map((item) => (
        <li key={`${item.company}-${item.title ?? ""}`}>
          <p className={styles.company}>
            {item.company}
            {item.title ? (
              <span className={styles.jobTitle}> — {item.title}</span>
            ) : null}
          </p>
          <p className={styles.context}>{item.context}</p>
        </li>
      ))}
    </ol>
  );
}
