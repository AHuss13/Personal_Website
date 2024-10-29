import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "View my portfolio of projects and work",
};

export default function Projects() {
  return (
    <section className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link
          href="/projects/web-development"
          className="text-2xl font-semibold text-blue-600 hover:underline"
        >
          Web Development
        </Link>
        <Link
          href="/projects/3d-modeling"
          className="text-2xl font-semibold text-blue-600 hover:underline"
        >
          3D Modeling
        </Link>
        <Link
          href="/projects/other"
          className="text-2xl font-semibold text-blue-600 hover:underline"
        >
          Other
        </Link>
      </div>
    </section>
  );
}
