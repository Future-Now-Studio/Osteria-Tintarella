"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-in"
    | "scale-in"
    | "slide-left"
    | "slide-right"
    | "clip-up"
    | "clip-left"
    | "clip-right";
  delay?: number;
  threshold?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  duration,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass: Record<string, string> = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "scale-in": "animate-scale-in",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "clip-up": "animate-clip-up",
    "clip-left": "animate-clip-left",
    "clip-right": "animate-clip-right",
  };

  const initialStyle: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-12",
    "fade-in": "opacity-0",
    "scale-in": "opacity-0 scale-90",
    "slide-left": "opacity-0 -translate-x-20",
    "slide-right": "opacity-0 translate-x-20",
    "clip-up": "opacity-0",
    "clip-left": "opacity-0",
    "clip-right": "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? animClass[animation] : initialStyle[animation]
      }`}
      style={
        visible
          ? {
              animationDelay: `${delay}s`,
              ...(duration ? { animationDuration: `${duration}s` } : {}),
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
