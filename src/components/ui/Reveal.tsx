"use client";

import React, { useRef, useState, useEffect } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export function Reveal({ children, delay = 0, className = "", duration = 600 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Animate only once
        }
      },
      {
        threshold: 0.05, // Trigger early when 5% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Offset trigger line slightly from viewport bottom
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-[transform,opacity] ${className} ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
