"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0.1 = subtle, 0.3 = dramatic
  scale?: number; // initial scale to allow room for parallax
  className?: string;
  overlay?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  scale = 1.15,
  className = "",
  overlay = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "100px" }
    );
    observer.observe(el);

    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setOffset((clamped - 0.5) * speed * 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden w-full h-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{
          transform: isVisible
            ? `scale(${scale}) translateY(${offset}px)`
            : `scale(${scale})`,
          transition: "transform 0.1s linear",
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-navy/10 pointer-events-none" />
      )}
    </div>
  );
}
