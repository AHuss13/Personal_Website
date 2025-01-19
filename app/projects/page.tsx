import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/Card";

export const metadata = {
  title: "Projects",
  description: "View my portfolio of projects and work",
};

export default function Projects() {
  return (
    <section className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-6">
        My Projects (with placeholder images)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="transition-shadow hover:shadow-xl">
          <Link
            href="/projects/web-development"
            className="group relative flex flex-col items-center justify-center rounded-lg "
          >
            {/* TODO: Replace with actual images */}
            <Image
              src="https://loremflickr.com/300/300"
              alt="Web Development"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <CardTitle className="text-2xl font-semibold text-blue-600 group-hover:underline">
              Web Development
            </CardTitle>
          </Link>
        </Card>
        <Card className="transition-shadow hover:shadow-xl">
          <Link
            href="/projects/3d-modeling"
            className="group relative flex flex-col items-center justify-center rounded-lg "
          >
            <Image
              src="/images/GhostShed.png"
              alt="3D Modeling"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <CardTitle className="text-2xl font-semibold text-blue-600 group-hover:underline">
              3D Modeling
            </CardTitle>
          </Link>
        </Card>
        <Card className="transition-shadow hover:shadow-xl">
          <Link
            href="/projects/other"
            className="group relative flex flex-col items-center justify-center rounded-lg h-full"
          >
            <Image
              src="https://via.assets.so/game.png?id=3&q=95&w=300&h=200&fit=fill"
              alt="Other Projects"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <CardTitle className="text-2xl font-semibold text-blue-600 group-hover:underline">
              Other
            </CardTitle>
          </Link>
        </Card>
      </div>
    </section>
  );
}
