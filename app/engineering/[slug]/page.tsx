import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  engineeringTopics,
  getEngineeringTopic,
  getRelatedProjects,
} from "@/data/engineering";
import ConceptCard from "@/components/engineering/ConceptCard";
import EvidenceLink from "@/components/engineering/EvidenceLink";
import styles from "./page.module.css";

interface EngineeringTopicPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return engineeringTopics.map((topic) => ({ slug: topic.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: EngineeringTopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getEngineeringTopic(slug);

  if (!topic) {
    return {};
  }

  return {
    title: topic.title,
    description: topic.summary,
  };
}

export default async function EngineeringTopicPage({
  params,
}: EngineeringTopicPageProps) {
  const { slug } = await params;
  const topic = getEngineeringTopic(slug);

  if (!topic) {
    notFound();
  }

  const appliedConcepts = topic.concepts.filter(
    (concept) => concept.projectApplication,
  );
  const relatedProjects = getRelatedProjects(topic);

  return (
    <article className="container page">
      <Link href="/engineering" className={styles.back}>
        ← All engineering topics
      </Link>
      <h1>{topic.title}</h1>
      <p className={styles.overview}>{topic.overview}</p>

      {topic.concepts.length > 0 ? (
        <section className={styles.section}>
          <h2>Core Concepts</h2>
          <div className={styles.conceptsGrid}>
            {topic.concepts.map((concept) => (
              <ConceptCard key={concept.title} concept={concept} />
            ))}
          </div>
        </section>
      ) : null}

      {appliedConcepts.length > 0 ? (
        <section className={styles.section}>
          <h2>Applied Evidence</h2>
          <dl className={styles.appliedList}>
            {appliedConcepts.map((concept) => (
              <div key={concept.title} className={styles.appliedItem}>
                <dt>{concept.title}</dt>
                <dd>
                  <p>{concept.projectApplication}</p>
                  {concept.evidence && concept.evidence.length > 0 ? (
                    <ul className={styles.evidenceList}>
                      {concept.evidence.map((link) => (
                        <EvidenceLink key={link.href} link={link} />
                      ))}
                    </ul>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {topic.stillLearning ? (
        <section className={styles.section}>
          <h2>What I&apos;m Still Learning</h2>
          <p>{topic.stillLearning}</p>
        </section>
      ) : null}

      {relatedProjects.length > 0 ? (
        <section className={styles.section}>
          <h2>Related Projects</h2>
          <ul className={styles.relatedList}>
            {relatedProjects.map((project) => (
              <li key={project.slug}>
                <Link href={project.href}>{project.name}</Link>
                <span className={styles.relatedTagline}>
                  {" "}
                  — {project.tagline}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
