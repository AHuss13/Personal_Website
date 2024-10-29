import { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border rounded-lg p-6 shadow-md">
      <CardHeader className="p-0 space-y-3">
        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-gray-600">
          {project.description}
        </CardDescription>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full object-cover rounded-lg"
          />
        )}
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200 dark:bg-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View Project →
          </a>
        )}
      </CardContent>
    </Card>
  );
}
