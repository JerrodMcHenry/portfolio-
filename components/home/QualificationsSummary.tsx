import Link from "next/link";
import { education, professionalPerspective } from "@/data/qualifications";
import styles from "./QualificationsSummary.module.css";

export default function QualificationsSummary() {
  return (
    <div className={styles.grid}>
      <div>
        <h3>Education</h3>
        <ul className={styles.list}>
          {education.map((item) => (
            <li key={item.credential}>
              <p className={styles.credential}>
                {item.credential}
                {item.inProgress ? (
                  <span className={styles.inProgress}> — in progress</span>
                ) : null}
              </p>
              <p className={styles.institution}>{item.institution}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Professional perspective</h3>
        <p>{professionalPerspective}</p>
        <Link href="/about" className={styles.link}>
          Read the full background
        </Link>
      </div>
    </div>
  );
}
