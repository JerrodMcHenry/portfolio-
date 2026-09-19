import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="container page">
      <h1>Projects</h1>
      <p>
        Case studies for flagship projects, including VentureGPS / Startup
        Intelligence Engine and Economic Intelligence, will be published
        here. Each case study will cover the problem, architecture, and
        engineering tradeoffs involved.
      </p>
    </section>
  );
}
