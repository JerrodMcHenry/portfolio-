import Link from "next/link";
import ProfessionalPath from "@/components/ProfessionalPath";
import EducationList from "@/components/EducationList";
import styles from "./QualificationsSummary.module.css";

export default function QualificationsSummary() {
  return (
    <div className={styles.grid}>
      <div>
        <h3>Professional path</h3>
        <ProfessionalPath />
        <Link href="/about" className={styles.link}>
          Read the full transition story
        </Link>
      </div>
      <div>
        <h3>Education</h3>
        <EducationList />
      </div>
    </div>
  );
}
