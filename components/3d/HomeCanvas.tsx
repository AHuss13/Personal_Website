"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function HomeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const moveTimeout = useRef<NodeJS.Timeout>();
  const [boxSize] = useState(0.75);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create wall of tiles
    const tiles: THREE.Mesh[] = [];
    const tileGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.25);
    const tileMaterial = new THREE.MeshStandardMaterial({
      color: theme === "dark" ? 0x00ff00 : 0x4eff4e,
      metalness: theme === "dark" ? 1 : 0.7,
      roughness: theme === "dark" ? 0.4 : 0.6,
    });

    // Create grid of tiles
    const rows = Math.floor(window.innerHeight / (boxSize * 80));
    const cols = Math.floor(window.innerWidth / (boxSize * 82));
    const spacing = 0.5;

    const totalWidth = cols * spacing;
    const totalHeight = rows * spacing;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const tile = new THREE.Mesh(tileGeometry, tileMaterial);

        // Position tiles
        tile.position.x = j * spacing - (totalWidth - spacing) / 2;
        tile.position.y = i * spacing - (totalHeight - spacing) / 2;
        tile.position.z = 0;

        tiles.push(tile);
        scene.add(tile);
      }
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      theme === "dark" ? 0.5 : 0.8
    );
    ambientLight.position.set(0, 0, 10);
    scene.add(ambientLight);

    // Add point light that follows mouse
    const pointLight = new THREE.PointLight(0xffffff, theme === "dark" ? 1 : 5);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // Mouse move handler
    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      // Calculate position relative to the container
      mousePosition.current = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
      };

      // Update light position
      pointLight.position.x = mousePosition.current.x * 3;
      pointLight.position.y = mousePosition.current.y * 2;

      isMoving.current = true;
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }

      moveTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);
    };

    // Touch move for mobile
    const onTouchMove = (event: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const touch = event.touches[0];

      mousePosition.current = {
        x: ((touch.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((touch.clientY - rect.top) / rect.height) * 2 + 1,
      };

      pointLight.position.x = mousePosition.current.x * 4;
      pointLight.position.y = mousePosition.current.y * 4;

      isMoving.current = true;
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }

      moveTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);
    };

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Tile rotation movement
      if (isMoving.current) {
        tiles.forEach((tile) => {
          // Calculate direction from tile to mouse
          const directionX = pointLight.position.x - tile.position.x;
          const directionY = pointLight.position.y - tile.position.y;
          const directionZ = 3 - tile.position.z; // 3 is the pointLight's z position

          // Target point
          const target = new THREE.Vector3(
            tile.position.x + directionX,
            tile.position.y + directionY,
            tile.position.z + directionZ
          );

          // Look at target point
          tile.lookAt(target);

          tile.quaternion.slerp(
            new THREE.Quaternion().setFromEuler(tile.rotation),
            0.1
          );
        });
      }

      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("resize", handleResize);

    animate();

    // Cleanup
    return () => {
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", handleResize);

      // Dispose of geometries and materials
      tileGeometry.dispose();
      tileMaterial.dispose();
      tiles.length = 0;

      // Dispose of renderer
      renderer.dispose();
      container?.removeChild(renderer.domElement);
    };
  }, [boxSize, theme]);

  return (
    <div
      ref={containerRef}
      className="home-canvas"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}
