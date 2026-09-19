import Link from "next/link";
import type { EngineeringTopic } from "@/data/engineering";
import styles from "./EngineeringTopicCard.module.css";

interface EngineeringTopicCardProps {
  topic: EngineeringTopic;
}

export default function EngineeringTopicCard({
  topic,
}: EngineeringTopicCardProps) {
  return (
    <article className={styles.card}>
      <h3>{topic.title}</h3>
      <p className={styles.summary}>{topic.summary}</p>
      <Link href={`/engineering/${topic.slug}`} className={styles.link}>
        View {topic.title}
      </Link>
    </article>
  );
}
