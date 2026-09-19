import Link from "next/link";
import type {
  EngineeringEvidenceKind,
  EngineeringEvidenceLink,
} from "@/data/engineering";
import styles from "./EvidenceLink.module.css";

const kindLabel: Record<EngineeringEvidenceKind, string> = {
  "case-study": "Case study",
  source: "Source",
  diagram: "Diagram",
  adr: "ADR",
  journal: "Engineering journal",
  test: "Test",
  "security-test": "Security test",
  "debugging-story": "Debugging story",
  video: "Video",
  benchmark: "Benchmark",
  deployment: "Deployment",
};

interface EvidenceLinkProps {
  link: EngineeringEvidenceLink;
}

export default function EvidenceLink({ link }: EvidenceLinkProps) {
  const isInternal = link.href.startsWith("/");

  return (
    <li>
      {isInternal ? (
        <Link href={link.href} className={styles.link}>
          {link.label}
        </Link>
      ) : (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {link.label}
          <span className="visuallyHidden"> (opens in a new tab)</span>
        </a>
      )}{" "}
      <span className={styles.kind}>({kindLabel[link.kind]})</span>
    </li>
  );
}
