import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import EvidenceSection from "@/components/case-study/EvidenceSection";
import styles from "./page.module.css";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const { default: CaseStudyContent } = await import(
    `@/content/projects/${project.slug}.mdx`
  );

  return (
    <article>
      <CaseStudyHeader project={project} />
      <div className={`container ${styles.layout}`}>
        <CaseStudyNav sections={project.caseStudySections} />
        <div className={styles.content}>
          <CaseStudyContent />
          <EvidenceSection project={project} />
        </div>
      </div>
    </article>
  );
}
