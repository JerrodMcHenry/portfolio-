import { education } from "@/data/qualifications";
import styles from "./EducationList.module.css";

export default function EducationList() {
  return (
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
  );
}
