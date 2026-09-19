import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={`container ${styles.hero}`}>
      <h1>Software engineering portfolio</h1>
      <p>
        This site collects case studies and technical writeups from two
        flagship projects, VentureGPS and Economic Intelligence, alongside
        supporting engineering notes. Content is being added incrementally.
      </p>
      <div className={styles.actions}>
        <Link href="/projects" className={styles.primary}>
          View projects
        </Link>
        <Link href="/engineering">Read engineering notes</Link>
      </div>
    </section>
  );
}
