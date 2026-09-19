import type { Metadata } from "next";
import ProfessionalPath from "@/components/ProfessionalPath";
import EducationList from "@/components/EducationList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="container page">
      <h1>From Working Around Software to Building It</h1>

      <div className={styles.narrative}>
        <p className={styles.lede}>
          My path into software engineering hasn&apos;t been traditional.
        </p>
        <p>
          I started at Apple&apos;s Genius Bar, troubleshooting hardware and
          software issues directly with customers — hands-on technical work
          that built an early foundation in problem solving. I later worked
          on contract as a Reliability Technician with Apple&apos;s
          Reliability Engineering team at the corporate level, which put me
          directly inside an engineering environment for the first time.
        </p>
        <p>
          At LTSE Equity, I worked as a Customer Success Manager, supporting
          customers on LTSE&apos;s software and working closely with the
          engineers responsible for it. Watching those engineers investigate
          logs, debug issues, and troubleshoot real software problems became
          a major influence on my decision to pursue software engineering
          myself.
        </p>
        <p>
          I began studying computer science and software engineering while
          continuing to work professionally — including through account
          executive roles at Equiniti/Astrella and Macrobond. Along the way,
          the software I worked with grew more technical: SaaS platforms,
          equity-management software, APIs, economic and financial data
          systems, and more recently MCP-related technology.
        </p>
        <p>
          Over time, I realized I wanted to do more than understand,
          explain, support, and sell software. I wanted to build it.
        </p>
        <p>
          That&apos;s what VentureGPS and Economic Intelligence represent:
          the engineering work I&apos;ve been building myself, applying that
          education to real problems — architecture, APIs, databases,
          deterministic business logic, testing, security, debugging, AI
          integration, and production-oriented system design.
        </p>
        <p>
          I haven&apos;t previously held a professional Software Engineer
          title, and I don&apos;t want this portfolio to imply otherwise. It
          exists to show the engineering work I can do now, how I think
          about building reliable software, and the path I&apos;ve taken to
          get here.
        </p>
        <p>
          My next step is turning that progression into my first
          professional software engineering role.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Professional path</h2>
        <ProfessionalPath />
      </div>

      <div className={styles.section}>
        <h2>Education</h2>
        <EducationList />
      </div>
    </section>
  );
}
