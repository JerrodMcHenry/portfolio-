import Link from "next/link";
import Hero from "@/components/home/Hero";
import QualificationsSummary from "@/components/home/QualificationsSummary";
import ContactCTA from "@/components/home/ContactCTA";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import EvidenceCard from "@/components/EvidenceCard";
import { projects } from "@/data/projects";
import { evidenceCategories } from "@/data/evidence";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Flagship Projects"
            title="Two systems I designed and built end to end"
            description="Selected case studies covering architecture, tradeoffs, and production concerns — not just a feature list."
          />
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.surface}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Engineering Evidence"
            title="Evidence, not adjectives"
            description="A closer look at how these systems were designed, tested, and secured — for anyone evaluating the engineering itself."
          />
          <div className={styles.evidenceGrid}>
            {evidenceCategories.map((category) => (
              <EvidenceCard key={category.title} category={category} />
            ))}
          </div>
          <p className={styles.evidenceFooter}>
            <Link href="/engineering">Read the engineering writeups →</Link>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Background"
            title="Experience & Qualifications"
          />
          <QualificationsSummary />
        </div>
      </section>

      <section className={`${styles.section} ${styles.surface}`}>
        <div className="container">
          <SectionHeading eyebrow="Contact" title="Get in touch" />
          <ContactCTA />
        </div>
      </section>
    </>
  );
}
