"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

export default function PhotoCarousel({
  photos,
  aspect = "aspect-[4/3]",
}: {
  photos: Photo[];
  aspect?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className={`relative ${aspect} overflow-hidden rounded-2xl`}>
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
}
