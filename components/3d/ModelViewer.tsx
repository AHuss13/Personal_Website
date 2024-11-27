"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface ModelViewerProps {
  modelPath: string;
}

export function ModelViewer({ modelPath }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Capture the current value
    const container = containerRef.current;

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(1, 2, 5);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add a hemisphere light for better ambient lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0;
    controls.maxDistance = 8;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    controls.target.set(0, 0, 0);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Handle materials
            if (mesh.material) {
              // Handle both single materials and material arrays
              const materials = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material];

              materials.forEach((material) => {
                // Force double-sided rendering
                material.side = THREE.DoubleSide;
                // Ensure proper color space
                if ("map" in material && material.map) {
                  (material.map as THREE.Texture).colorSpace =
                    THREE.SRGBColorSpace;
                }
                // Disable transparency unless specifically needed
                material.transparent = false;
                // Enable proper depth testing
                material.depthTest = true;
                material.depthWrite = true;
                // Update material
                material.needsUpdate = true;
              });
            }
          }
        });

        scene.add(gltf.scene);

        // Center and scale model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5 / maxDim;
        gltf.scene.scale.setScalar(scale);

        gltf.scene.position.sub(center.multiplyScalar(scale));

        // Update controls target to center of model
        controls.target.copy(gltf.scene.position);
        controls.update();

        // Make sure to use the same position after model loads
        camera.position.set(1, 2, 5);
        controls.target.set(0, 0, 0);
        controls.update();
      },
      (progress: { loaded: number; total: number }) => {
        const percentComplete = (progress.loaded / progress.total) * 100;
        console.log(`Loading: ${percentComplete}%`);
      },
      (error: unknown) => {
        console.error("Error loading model:", error);
      }
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    // Enhanced cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      // Dispose of scene resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          }
        }
      });

      // Dispose of renderer
      renderer.dispose();
      container?.removeChild(renderer.domElement);

      // Stop animation loop
      renderer.setAnimationLoop(null);
    };
  }, [modelPath]);

  return (
    <div ref={containerRef} className="w-full h-[400px] rounded-lg relative" />
  );
}
