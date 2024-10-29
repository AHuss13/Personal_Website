import { readdir } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const imagesDirectory = join(process.cwd(), "public/images");
    const files = await readdir(imagesDirectory, { recursive: true });

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file.toString())
    );

    const images = imageFiles.map((file) => `/images/${file}`);

    return NextResponse.json({ images });
  } catch (error: unknown) {
    console.error("Error loading images:", error);
    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}
