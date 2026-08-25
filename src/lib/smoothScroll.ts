"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NAVBAR_OFFSET = 72;

export function scrollToSection(id: string, options?: { instant?: boolean }) {
  const target = document.getElementById(id);
  if (!target) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const instant = options?.instant ?? reducedMotion;

  gsap.to(window, {
    duration: instant ? 0 : 1.15,
    ease: "power3.inOut",
    scrollTo: {
      y: target,
      offsetY: NAVBAR_OFFSET,
      autoKill: true,
    },
  });
}

export function getHashFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}
