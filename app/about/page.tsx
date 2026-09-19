import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="container page">
      <h1>About</h1>
      <p>
        Background, experience, and how to get in touch will be added here.
      </p>
    </section>
  );
}
