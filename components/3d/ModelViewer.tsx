"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ModelingProject } from "@/lib/data/modelingProjects";

interface ModelViewerProps {
  modelPath: string;
  settings?: ModelingProject["modelSettings"];
}

export function ModelViewer({ modelPath, settings = {} }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 400 });
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    animationFrameId?: number;
  }>();

  // Handle initial container size
  useEffect(() => {
    if (!containerRef.current) return;

    // Store ref value in a variable for cleanup
    const container = containerRef.current;

    const updateSize = () => {
      if (!container) return;
      const width = container.clientWidth;
      setContainerSize({ width, height: 400 });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!containerRef.current || containerSize.width === 0) return;

    // Store ref value in a variable for cleanup
    const container = containerRef.current;

    // Clean up previous scene if it exists
    if (sceneRef.current) {
      const { renderer, controls, animationFrameId } = sceneRef.current;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(settings.background ?? 0x000000);

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      settings.lights?.ambient?.intensity ?? 1
    );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      0xffffff,
      settings.lights?.point?.intensity ?? 1
    );
    pointLight.position.set(
      settings.lights?.point?.position?.x ?? 5,
      settings.lights?.point?.position?.y ?? 5,
      settings.lights?.point?.position?.z ?? 5
    );
    scene.add(pointLight);

    // Default camera settings
    const DEFAULT_CAMERA = {
      position: { x: 0, y: 0, z: 5 },
      fov: 75,
    };

    const camera = new THREE.PerspectiveCamera(
      settings.camera?.fov ?? 75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      settings.camera?.near ?? 0.1,
      settings.camera?.far ?? 1000
    );

    // Use default position unless overridden by settings
    camera.position.set(
      settings.camera?.position?.x ?? DEFAULT_CAMERA.position.x,
      settings.camera?.position?.y ?? DEFAULT_CAMERA.position.y,
      settings.camera?.position?.z ?? DEFAULT_CAMERA.position.z
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Configure controls
    controls.enableDamping = settings.controls?.enableDamping ?? true;
    controls.dampingFactor = settings.controls?.dampingFactor ?? 0.05;
    controls.screenSpacePanning = true;

    // Set up mouse buttons
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    };
    controls.minDistance = settings.controls?.minDistance ?? 1;
    controls.maxDistance = settings.controls?.maxDistance ?? 10;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };

    // Configure zoom
    controls.enableZoom = true;
    controls.zoomSpeed = settings.controls?.zoomSpeed ?? 1.0;
    controls.minDistance = 0;
    controls.maxDistance = 10;

    // Set initial camera target to origin
    controls.target.set(0, 0, 0);
    controls.update();

    if (modelPath.endsWith(".obj")) {
      const loader = new OBJLoader();
      loader.load(modelPath, (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = (settings.scale ?? 2) / maxDim;
        obj.scale.multiplyScalar(scale);

        if (settings.position) {
          obj.position.set(
            settings.position.x,
            settings.position.y,
            settings.position.z
          );
        }

        scene.add(obj);
      });
    } else if (modelPath.endsWith(".gltf") || modelPath.endsWith(".glb")) {
      const loader = new GLTFLoader();
      loader.load(modelPath, (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = (settings.scale ?? 2) / maxDim;
        model.scale.multiplyScalar(scale);

        if (settings.position) {
          model.position.set(
            settings.position.x,
            settings.position.y,
            settings.position.z
          );
        }

        scene.add(model);
      });
    }

    const animate = () => {
      const frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      // Store animation frame ID for cleanup
      if (sceneRef.current) {
        sceneRef.current.animationFrameId = frameId;
      }
    };

    // Store scene references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      controls,
    };

    animate();

    const handleResize = () => {
      if (!container || !sceneRef.current) return;
      const { camera, renderer } = sceneRef.current;
      const width = container.clientWidth;
      camera.aspect = width / containerSize.height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, containerSize.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (sceneRef.current) {
        const { renderer, controls, animationFrameId } = sceneRef.current;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        controls.dispose();
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      sceneRef.current = undefined;
    };
  }, [modelPath, settings, containerSize.width, containerSize.height]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: `${containerSize.height}px`,
        position: "relative",
      }}
      className="rounded-lg"
    />
  );
}
