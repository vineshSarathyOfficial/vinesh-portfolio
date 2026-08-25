"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { featuredProjects } from "@/data/portfolio";
import { TextScrub } from "@/components/ui/TextScrub";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({
  project,
  index,
  variant,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
  variant: "desktop" | "mobile";
}) {
  const isDesktop = variant === "desktop";

  return (
    <article
      data-panel={isDesktop ? true : undefined}
      data-reveal={!isDesktop ? true : undefined}
      className={
        isDesktop
          ? "flex h-screen w-screen shrink-0 flex-col justify-end px-6 pb-16 pt-48 md:px-12 md:pb-24"
          : "cinematic-glass rounded-2xl p-6"
      }
    >
      <div className={isDesktop ? "mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-10 lg:grid-cols-12" : "space-y-5"}>
        <div className={isDesktop ? "lg:col-span-7" : undefined}>
          <span className="font-mono text-xs accent-label">0{index + 1}</span>
          <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-[#f5f5f7] md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#a1a1a6] md:mt-5 md:text-lg">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
            {project.technologies.slice(0, isDesktop ? 6 : 5).map((tech) => (
              <span
                key={tech}
                className="tag-accent rounded-full px-2.5 py-1 font-mono text-[10px] text-[#d1d1d6] md:px-3 md:text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-8 md:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cinematic-btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cinematic-btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
            <Link
              href={project.caseStudyUrl}
              className="cinematic-btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              Architecture
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className={isDesktop ? "lg:col-span-5" : undefined}>
          <div className={isDesktop ? "cinematic-glass rounded-2xl p-6 md:p-8" : "rounded-xl border border-white/8 bg-white/3 p-4"}>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#86868b]">Capabilities</p>
            <ul className="capability-list mt-3 space-y-2.5 md:mt-4 md:space-y-3">
              {project.capabilities.slice(0, isDesktop ? 6 : 5).map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-sm text-[#d1d1d6]">
                  <span className="accent-dot mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                  {cap}
                </li>
              ))}
              {project.capabilities.length > (isDesktop ? 6 : 5) && (
                <li className="font-mono text-xs text-[#86868b]">
                  + {project.capabilities.length - (isDesktop ? 6 : 5)} more capabilities
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const useHorizontalScroll = !reducedMotion && !isMobile;

  useEffect(() => {
    if (!useHorizontalScroll || !sectionRef.current || !panelsRef.current) return;

    const panels = panelsRef.current.querySelectorAll("[data-panel]");
    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${sectionRef.current!.offsetWidth * (panels.length - 1)}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [useHorizontalScroll]);

  useEffect(() => {
    if (useHorizontalScroll || !sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll("[data-reveal]");
    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [useHorizontalScroll]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`section-raised section-raised-top-border relative ${useHorizontalScroll ? "overflow-hidden" : "px-6 py-24 md:px-12 md:py-32"}`}
      aria-label="Featured work"
    >
      <div
        className={
          useHorizontalScroll
            ? "absolute inset-x-0 top-0 z-10 px-6 pt-24 md:px-12"
            : "mb-12 md:mb-16"
        }
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.35em]"><span className="accent-label">Selected Work</span></p>
        <h2 className="mt-3 max-w-2xl font-sans text-3xl font-semibold tracking-tight text-[#f5f5f7] md:text-5xl">
          Engineering that ships.
        </h2>
        <div className="mt-5 max-w-xl md:mt-6">
          <TextScrub className="text-sm leading-relaxed text-[#a1a1a6] md:text-lg">
            Production-grade full-stack systems, AI copilots, and performance-first interfaces built to scale.
          </TextScrub>
        </div>
      </div>

      {useHorizontalScroll ? (
        <div ref={panelsRef} className="flex h-screen items-center">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="desktop" />
          ))}
          <article
            data-panel
            className="flex h-screen w-screen shrink-0 items-center justify-center px-6"
          >
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#86868b]">More coming</p>
              <p className="mt-4 text-2xl font-semibold text-[#f5f5f7]">The pipeline is active.</p>
            </div>
          </article>
        </div>
      ) : (
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="mobile" />
          ))}
          <div data-reveal className="rounded-2xl border border-white/8 py-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#86868b]">More coming</p>
            <p className="mt-3 text-lg font-semibold text-[#f5f5f7]">The pipeline is active.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedWork;
