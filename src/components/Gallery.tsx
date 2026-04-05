"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryProps {
  images: GalleryImage[];
  categories: string[];
}

export default function Gallery({ images, categories }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "Alle"
      ? images
      : images.filter(
          (img) =>
            img.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <>
      {/* Filter */}
      <div className="flex gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
              activeFilter === cat
                ? "bg-red text-white"
                : "bg-white text-gold hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIndex(i)}
            className="aspect-square rounded-xl cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
