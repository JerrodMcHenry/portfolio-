import Link from "next/link";
import { siteConfig } from "@/data/site";
import Nav from "./Nav";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          {siteConfig.name}
        </Link>
        <Nav />
      </div>
    </header>
  );
}
