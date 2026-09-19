import type { ReactNode } from "react";
import styles from "./CaseStudyCallout.module.css";

interface CaseStudyCalloutProps {
  kind: "decision" | "failure";
  title: string;
  children: ReactNode;
}

const badgeLabel: Record<CaseStudyCalloutProps["kind"], string> = {
  decision: "Decision",
  failure: "Failure",
};

export default function CaseStudyCallout({
  kind,
  title,
  children,
}: CaseStudyCalloutProps) {
  return (
    <div className={styles.callout} data-kind={kind}>
      <p className={styles.badge}>{badgeLabel[kind]}</p>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
