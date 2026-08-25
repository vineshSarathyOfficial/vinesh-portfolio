"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/portfolio";
import { TextScrub } from "@/components/ui/TextScrub";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !itemsRef.current) return;

    const items = itemsRef.current.querySelectorAll("[data-exp-item]");
    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="experience" ref={sectionRef} className="section-deep section-raised-top-border relative px-6 py-32 md:px-12 md:py-40" aria-label="Experience">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em]"><span className="accent-label">Experience</span></p>
        <h2 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-[#f5f5f7] md:text-5xl">
          Seven years of craft.
        </h2>
        <div className="mt-6 max-w-2xl">
          <TextScrub className="text-base leading-relaxed text-[#a1a1a6] md:text-lg">
            From enterprise platforms at Comcast to AI-powered products — building systems that perform at scale.
          </TextScrub>
        </div>

        <div ref={itemsRef} className="mt-20 space-y-0 border-t border-white/10">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              data-exp-item
              className="group grid grid-cols-1 gap-4 border-b border-white/10 py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-[#86868b]">{exp.period}</p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold text-[#f5f5f7]">{exp.role}</h3>
                <p className="mt-1 text-[#a1a1a6]">{exp.company}</p>
              </div>
              <div className="md:col-span-5">
                <div className="flex flex-wrap gap-2">
                  {exp.focus.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/4 px-2.5 py-1 font-mono text-[10px] text-[#86868b] transition-colors group-hover:border-white/15 group-hover:text-[#d1d1d6]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
