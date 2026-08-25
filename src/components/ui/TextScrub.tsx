"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextScrubProps {
  children: string;
  className?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  scrubSpeed?: number;
  highlightColor?: string;
}

export function TextScrub({
  children,
  className = "",
  wordClassName = "",
  as: Component = "p",
  scrubSpeed = 1,
  highlightColor = "#ffffff",
}: TextScrubProps) {
  const containerRef = useRef<HTMLElement>(null);
  const words = children.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordElements = el.querySelectorAll<HTMLElement>(".scrub-word");
    if (!wordElements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        {
          opacity: 0.15,
          color: "rgba(255, 255, 255, 0.2)",
          y: 4,
          filter: "blur(1px)",
        },
        {
          opacity: 1,
          color: highlightColor,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 35%",
            scrub: scrubSpeed,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [highlightColor, scrubSpeed]);

  return (
    <Component
      ref={containerRef as any}
      className={`leading-relaxed tracking-tight ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={`scrub-word inline-block mr-[0.28em] transition-colors duration-150 ${wordClassName}`}
          style={{ willChange: "opacity, color, transform" }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}

export default TextScrub;
