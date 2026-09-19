import type { Metadata } from "next";
import EngineeringTopicCard from "@/components/engineering/EngineeringTopicCard";
import { engineeringTopics } from "@/data/engineering";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Engineering",
};

export default function EngineeringPage() {
  return (
    <section className="container page">
      <h1>Engineering Evidence</h1>
      <div className={styles.intro}>
        <p>
          A working record of the engineering principles behind the systems
          I build — from programming and backend architecture to databases,
          networking, security, infrastructure, system design, and
          production AI.
        </p>
        <p>
          Each topic connects a concept to why it matters and — where the
          evidence supports it — where I&apos;ve actually applied it in
          VentureGPS, Economic Intelligence, or this portfolio itself. Some
          topics are more developed than others; that&apos;s intentional.
          This isn&apos;t a blog or a set of course notes — it&apos;s a
          working record I can defend, and it grows as I do.
        </p>
      </div>
      <h2 className="visuallyHidden">Engineering topics</h2>
      <div className={styles.grid}>
        {engineeringTopics.map((topic) => (
          <EngineeringTopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </section>
  );
}
