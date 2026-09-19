import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
};

export default function VideosPage() {
  return (
    <section className="container page">
      <h1>Videos</h1>
      <p>
        Short recorded walkthroughs of project architecture and technical
        decisions will be added here.
      </p>
    </section>
  );
}
