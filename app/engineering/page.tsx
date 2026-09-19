import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering",
};

export default function EngineeringPage() {
  return (
    <section className="container page">
      <h1>Engineering</h1>
      <p>
        Deeper technical writeups covering architecture decisions, testing
        strategy, failure modes, and scaling considerations will be
        published here for engineers and interviewers who want to inspect
        implementation detail.
      </p>
    </section>
  );
}
