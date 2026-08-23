"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-hairline bg-canvas">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-3 mb-16">
            <div className="font-mono text-xs uppercase tracking-wider text-link font-semibold">
              History
            </div>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-ink tracking-tight">
              Professional Experience
            </h2>
            <p className="font-sans text-body text-base max-w-xl">
              7+ years of engineering experience across agency, enterprise, and product environments.
            </p>
          </div>
        </Reveal>

        {/* Timeline Layout */}
        <div className="relative border-l border-hairline ml-4 md:ml-6 pl-8 md:pl-10 space-y-12 max-w-3xl">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 100} className="relative group">
              {/* Timeline Bullet Node */}
              <span className="absolute -left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border border-hairline bg-canvas-elevated text-mute group-hover:text-ink group-hover:border-mute transition-all duration-200 shadow-sm">
                <Briefcase size={12} className="md:w-3.5 md:h-3.5" />
              </span>

              {/* Timeline Card */}
              <div className="space-y-3">
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-ink tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-mute text-xs md:text-sm font-sans">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company Name */}
                <div className="text-sm font-sans font-semibold text-body">
                  {exp.company}
                </div>

                {/* Focus / Stack list */}
                {exp.focus && exp.focus.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[10px] uppercase text-faint tracking-wider">
                      Areas of Responsibility & Tech
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {exp.focus.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-sm border border-hairline bg-canvas-elevated text-xs font-mono text-body"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
