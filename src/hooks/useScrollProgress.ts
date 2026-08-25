"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Returns a normalized scroll progress value (0-1) for the entire page.
 * Also provides per-section progress given section boundaries.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) {
      setProgress(0);
      return;
    }
    setProgress(Math.min(1, Math.max(0, scrollTop / docHeight)));
  }, []);

  useEffect(() => {
    // Set initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return progress;
}

/**
 * Returns progress within a specific scroll range [start, end] mapped to 0-1.
 */
export function getSectionProgress(
  globalProgress: number,
  start: number,
  end: number
): number {
  if (globalProgress <= start) return 0;
  if (globalProgress >= end) return 1;
  return (globalProgress - start) / (end - start);
}
