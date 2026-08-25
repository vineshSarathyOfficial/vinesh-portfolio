"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextScrubProps {
  children: string;
  className?: string;
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
}

export function TextScrub({
  children,
  className = "",
  trigger,
  start = "top 80%",
  end = "top 30%",
}: TextScrubProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = children.split("");
    el.innerHTML = chars
      .map((char) => `<span class="inline-block opacity-20">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const spans = el.querySelectorAll("span");
    const tween = gsap.to(spans, {
      opacity: 1,
      stagger: 0.02,
      ease: "none",
      scrollTrigger: {
        trigger: trigger ?? el,
        start,
        end,
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [children, trigger, start, end]);

  return <p ref={ref} className={className} aria-label={children} />;
}
