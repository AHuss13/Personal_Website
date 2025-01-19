"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { motion } from "framer-motion";
import { ModelViewer } from "@/components/3d/ModelViewer";
import Head from "next/head";
import { modelingProjects } from "@/lib/data/modelingProjects";

export default function ModelingWork() {
  const title = "3D Modeling Portfolio";
  const description =
    "Explore my 3D modeling projects created with Blender and other tools. View interactive 3D models and animations.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      <main
        className="container mx-auto px-4 py-8"
        aria-labelledby="page-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="page-title" className="text-3xl font-bold mb-8 text-primary">
            3D Modeling Portfolio
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {modelingProjects.map((project, index) => (
              <Card key={index} className="h-full" role="listitem">
                <CardHeader>
                  <CardTitle className="text-red-600 text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex flex-wrap gap-2 mb-4"
                    aria-label="Technologies used"
                  >
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
                      className="w-full rounded-lg pb-4"
                      controls
                      muted
                      loop
                      playsInline
                      aria-label={`Video demonstration of ${project.title}`}
                    >
                      <source src={project.video} type="video/mp4" />
                      <track
                        kind="captions"
                        src={`/captions/${project.title.toLowerCase()}.vtt`}
                        label="English"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <b>
                    <u>Controls:</u>
                  </b>
                  <br />
                  Right mouse button to <b>Pan</b>
                  <br />
                  Left mouse button to <b>Rotate</b>
                  <br />
                  Scroll wheel to <b>Zoom</b>
                  <div className="flex flex-col gap-4 mt-4">
                    <ModelViewer
                      modelPath={project.model}
                      settings={project.modelSettings}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}
