"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function ModelingWork() {
  const modelingProjects = [
    {
      title: "Blender Donut",
      description: "A clip of a donut model I made in Blender.",
      video: "/videos/Donuts.mp4",
      software: ["Blender"],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-purple-600">3D Modeling</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelingProjects.map((project, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-red-600 text-2xl">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.software.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm font-semibold rounded-full text-white bg-orange-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.video && (
                  <video
                    className="w-full rounded-lg"
                    controls
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
