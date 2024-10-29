import { ProjectCategories } from "./types";

export const projects: ProjectCategories = {
  web: [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/username/portfolio",
    },
    // ... other web projects
  ],
  modeling: [
    {
      title: "3D Architectural Visualization",
      description:
        "Photorealistic architectural renderings using modern techniques.",
      technologies: ["Blender", "V-Ray", "Substance Painter"],
      link: "https://example.com/3d-viz",
    },
    // ... other modeling projects
  ],
  misc: [
    {
      title: "IoT Home Automation",
      description:
        "Smart home system with custom hardware and software integration.",
      technologies: ["Raspberry Pi", "Python", "MQTT"],
      link: "https://github.com/username/home-automation",
    },
    // ... other misc projects
  ],
};
