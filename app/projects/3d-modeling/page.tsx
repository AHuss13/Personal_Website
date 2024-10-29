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
  // TODO: Add projects
  const modelingProjects = [
    {
      title: "Architectural Visualization",
      description:
        "3D visualization of modern architectural designs focusing on realistic materials and lighting",
      images: [], // Add image paths
      software: ["Blender", "3ds Max"],
    },
    {
      title: "Character Modeling",
      description:
        "Detailed character models with proper topology for animation and games",
      images: [], // Add image paths
      software: ["ZBrush", "Maya"],
    },
    {
      title: "Product Visualization",
      description: "Photorealistic 3D product renders for commercial use",
      images: [], // Add image paths
      software: ["Blender", "KeyShot"],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-purple-600">
          3D Modeling Portfolio (Currently Filler)
        </h1>

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
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Add image gallery or preview here */}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
