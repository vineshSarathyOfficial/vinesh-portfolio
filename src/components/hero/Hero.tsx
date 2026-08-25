"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { CinematicScene } from "@/components/scene/CinematicScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const scrollProgress = useScrollProgress(sectionRef);

  const sectionHeight = reducedMotion || isMobile ? "min-h-screen" : "h-[135vh]";

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.7 }, 0.2)
        .from(titleLine1Ref.current, { y: 50, opacity: 0, duration: 0.9 }, 0.35)
        .from(titleLine2Ref.current, { y: 40, opacity: 0, duration: 0.8 }, 0.5)
        .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.7 }, 0.65)
        .from(ctaRef.current, { y: 24, opacity: 0, duration: 0.6 }, 0.8)
        .from(scrollHintRef.current, { opacity: 0, duration: 0.5 }, 1.1);

      gsap.to(scrollHintRef.current, {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        delay: 1.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || isMobile || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      })
        .to(contentRef.current, { y: -60, opacity: 0, scale: 0.97, ease: "power2.in" }, 0)
        .to(scrollHintRef.current, { opacity: 0, duration: 0.2 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, isMobile]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${sectionHeight}`}
      aria-label="Introduction"
    >
      <div ref={stickyRef} className="section-deep sticky top-0 h-screen w-full overflow-hidden">
        <CinematicScene
          scrollProgress={reducedMotion || isMobile ? 0 : scrollProgress}
          reducedMotion={reducedMotion}
          isMobile={isMobile}
        />

        <div
          ref={contentRef}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p
            ref={eyebrowRef}
            className="mb-5 font-mono text-[10px] uppercase tracking-[0.32em] md:mb-6 md:text-[11px]"
          >
            <span className="accent-label">Full Stack Engineer · {profile.experienceYears}+ Years · {profile.location}</span>
          </p>

          <h1 className="max-w-5xl font-sans text-[clamp(2.5rem,11vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#f5f5f7]">
            <span ref={titleLine1Ref} className="block">
              {profile.name}
            </span>
            <span ref={titleLine2Ref} className="text-gradient block">
              I build software that ships.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-md text-base leading-relaxed text-[#a1a1a6] md:mt-8 md:max-w-2xl md:text-xl"
          >
            End-to-end engineer turning complex ideas into fast, reliable products — from React
            interfaces and Next.js apps to APIs, databases, and AI-powered features.
          </p>

          <div ref={ctaRef} className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mt-10">
            <a href="#work" className="cinematic-btn-primary w-full sm:w-auto">
              Explore my work
            </a>
            <a
              href="/Vinesh_parthasarathy_resume.pdf"
              download="Vinesh_Parthasarathy_Resume.pdf"
              className="cinematic-btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <Download size={16} />
              Download résumé
            </a>
          </div>
        </div>

        <div
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[#86868b] md:bottom-10 md:gap-2"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.28em] md:text-[10px]">
            {isMobile ? "Swipe up" : "Scroll"}
          </span>
          <ArrowDown size={16} className="md:h-[18px] md:w-[18px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
