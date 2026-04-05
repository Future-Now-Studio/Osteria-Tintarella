"use client";

import { useEffect, useCallback } from "react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const current = images[currentIndex];

  const goPrev = useCallback(() => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  }, [currentIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
        aria-label="Schließen"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-4 text-white/70 hover:text-white p-2"
        aria-label="Vorheriges Bild"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="max-w-3xl max-h-[80vh] mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current?.src}
          alt={current?.alt}
          className="w-full max-h-[70vh] object-contain rounded-xl"
        />
        <p className="mt-4 text-white/60 text-sm text-center">
          {current?.alt} ({currentIndex + 1}/{images.length})
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-4 text-white/70 hover:text-white p-2"
        aria-label="Nächstes Bild"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
