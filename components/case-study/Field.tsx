import type { ReactNode } from "react";
import styles from "./Field.module.css";

interface FieldProps {
  label: string;
  children: ReactNode;
}

export default function Field({ label, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <p className={styles.label}>{label}</p>
      {children}
    </div>
  );
}
