"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Primary">
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="visuallyHidden">
          {open ? "Close menu" : "Open menu"}
        </span>
        <span className={styles.icon} aria-hidden="true" />
      </button>
      <ul
        id="primary-navigation"
        className={styles.list}
        data-open={open}
      >
        {siteConfig.nav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
