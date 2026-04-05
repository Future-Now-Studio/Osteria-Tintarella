"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "words" splits by word, "lines" treats each child as a line */
  mode?: "words" | "block";
  stagger?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  mode = "block",
  stagger = 0.06,
}: TextRevealProps) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (mode === "words" && typeof children === "string") {
    const words = children.split(" ");
    return (
      <div ref={ref} className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <span
              className="inline-block transition-all duration-700"
              style={{
                transform: visible ? "translateY(0)" : "translateY(110%)",
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? `${delay + i * stagger}s` : "0s",
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <div
        className="transition-all duration-1000"
        style={{
          transform: visible ? "translateY(0)" : "translateY(100%)",
          opacity: visible ? 1 : 0,
          transitionDelay: visible ? `${delay}s` : "0s",
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
