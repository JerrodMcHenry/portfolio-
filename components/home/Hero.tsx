import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getContactLinks } from "@/data/contact";
import styles from "./Hero.module.css";

export default function Hero() {
  const resumeLink = getContactLinks().find((link) => link.label === "Resume");

  return (
    <section className={`container ${styles.hero}`}>
      <h1>{siteConfig.name}</h1>
      <p className={styles.role}>{siteConfig.role}</p>
      <p className={styles.summary}>
        I build reliable backend systems and AI-enabled products, and I own
        the engineering behind them end to end: architecture, deterministic
        business logic, testing, security, and production behavior.
      </p>
      <div className={styles.actions}>
        <Link href="/projects" className={styles.primary}>
          View Projects
        </Link>
        <Link href="/engineering">Engineering Evidence</Link>
        {resumeLink ? (
          <Link href={resumeLink.href}>{resumeLink.label}</Link>
        ) : null}
      </div>
    </section>
  );
}
