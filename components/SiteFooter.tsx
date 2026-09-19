import { siteConfig } from "@/data/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <p>Built with Next.js.</p>
      </div>
    </footer>
  );
}
