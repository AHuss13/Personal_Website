"use client";

import Image from "next/image";
import { useImages } from "@/hooks/useImages";

export function ImageGallery() {
  const { images, loading, error } = useImages();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((imagePath) => (
        <Image
          key={imagePath}
          src={imagePath}
          alt="Gallery image"
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
      ))}
    </div>
  );
}
