interface ModelingProject {
  title: string;
  description: string;
  video?: string;
  model: string;
  software: string[];
  alt: string;

  modelSettings: {
    position?: { x: number; y: number; z: number };
    camera?: {
      position?: { x: number; y: number; z: number };
      fov?: number;
      near?: number;
      far?: number;
    };
    scale?: number;

    // Lighting
    lights?: {
      ambient?: {
        color?: number;
        intensity?: number;
      };
      point?: {
        color?: number;
        intensity?: number;
        position?: { x: number; y: number; z: number };
        distance?: number;
        decay?: number;
      };
    };

    // Controls
    controls?: {
      enableDamping?: boolean;
      dampingFactor?: number;
      minDistance?: number;
      maxDistance?: number;
      zoomSpeed?: number;
      autoRotate?: boolean;
      autoRotateSpeed?: number;
    };
    background?: number;
  };
}

export const modelingProjects: ModelingProject[] = [
  {
    title: "Blender Donut",
    description:
      "A realistic 3D model of a donut created in Blender, featuring detailed texturing and materials.",
    video: "/videos/Donuts.mp4",
    model: "/models/WebDonut.gltf",
    software: ["Blender"],
    alt: "3D model of a glazed donut with sprinkles",
    modelSettings: {
      position: { x: 0, y: 0, z: 0 },
      camera: {
        position: { x: 1.5, y: 1.5, z: 0.2 },
        fov: 75,
        near: 0.1,
        far: 1000,
      },
      scale: 2,
      lights: {
        ambient: {
          color: 0xffffff,
          intensity: 0.5,
        },
        point: {
          color: 0xffffff,
          intensity: 100,
          position: { x: 5, y: 5, z: 5 },
          distance: 0,
          decay: 2,
        },
      },
      controls: {
        enableDamping: true,
        dampingFactor: 0.05,
        minDistance: 1,
        maxDistance: 10,
        zoomSpeed: 1.0,
        autoRotate: false,
      },
      background: 0x000000,
    },
  },
  {
    title: "Houdini Ghost",
    description:
      "A 3D model of a ghost created in Houdini, featuring detailed texturing and materials. Animation will be added soon.",
    // video: "/videos/Ghost.mp4",
    model: "/models/GhostBoy.obj",
    software: ["Houdini"],
    alt: "3D model of a ghost",
    modelSettings: {
      position: { x: 0, y: -0.8, z: 1 },
      camera: {
        position: { x: 0, y: 1, z: 3 },
        fov: 75,
      },
      scale: 1.5,
      lights: {
        ambient: {
          color: 0xffffff,
          intensity: 1,
        },
        point: {
          color: 0xffffff,
          intensity: 100,
          position: { x: 2, y: 4, z: 3 },
        },
      },
      controls: {
        enableDamping: true,
        dampingFactor: 0.05,
        minDistance: 5,
        maxDistance: 8,
      },
      background: 0x000000,
    },
  },
];

export type { ModelingProject };
