"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const NAVBAR_OFFSET = 72;
const MOBILE_QUERY = "(max-width: 768px)";

export function unlockPageScroll() {
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.documentElement.style.overflow = "";
}

function getScrollTop(target: HTMLElement) {
  return Math.max(0, target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET);
}

export function scrollToSection(id: string, options?: { instant?: boolean }) {
  const target = document.getElementById(id);
  if (!target) return;

  unlockPageScroll();
  ScrollTrigger.refresh();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  const instant = options?.instant ?? reducedMotion;
  const top = getScrollTop(target);

  window.history.replaceState(null, "", `#${id}`);

  if (isMobile || instant) {
    window.scrollTo({ top, behavior: instant ? "auto" : "smooth" });
    return;
  }

  gsap.to(window, {
    duration: 1.15,
    ease: "power3.inOut",
    scrollTo: { y: top, autoKill: true },
  });
}

export function getHashFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}
