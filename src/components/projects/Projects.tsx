"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { featuredProjects } from "@/data/portfolio";
import { Tilt } from "../ui/Tilt";
import { Reveal } from "../ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-hairline bg-canvas">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-3 mb-12">
            <div className="font-mono text-xs uppercase tracking-wider text-link font-semibold">
              Featured Work
            </div>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-ink tracking-tight">
              Selected Projects
            </h2>
            <p className="font-sans text-body text-base max-w-xl">
              A showcase of production-grade engineering, frontend architectures, and AI integrations.
            </p>
          </div>
        </Reveal>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((project) => (
            <Reveal key={project.id} delay={200} className="w-full">
              <Tilt className="w-full rounded-md shadow-sm">
                <div className="bg-canvas-elevated border border-hairline rounded-md hover:border-mute/50 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row group h-full">
                {/* Left Side: Detail Context */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Status Indicator */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        {project.status}
                      </span>
                      <span className="text-xs text-mute font-mono">Project Code: VS-01</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-body text-sm md:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlighted Tech Tags */}
                    <div className="mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-faint mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-sm border border-hairline bg-canvas text-xs font-mono text-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Capabilities Bullet list */}
                    <div className="mb-8">
                      <div className="text-xs font-mono uppercase tracking-wider text-faint mb-3">
                        Key Capabilities (Planned & Active)
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-body">
                        {project.capabilities.slice(0, 6).map((cap, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-1 h-1 rounded-full bg-body" />
                            <span>{cap}</span>
                          </li>
                        ))}
                        {project.capabilities.length > 6 && (
                          <li className="text-mute font-mono text-xs flex items-center space-x-2">
                            <span className="w-1 h-1 rounded-full bg-transparent" />
                            <span>+ {project.capabilities.length - 6} more capabilities</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study Call to Action */}
                  <div className="pt-4 border-t border-hairline flex items-center">
                    <Link
                      href={project.caseStudyUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link bg-canvas-elevated text-ink border border-hairline rounded-sm text-sm px-3 h-[32px] hover:bg-hairline-soft active:scale-[0.98] select-none cursor-pointer group/btn space-x-2"
                    >
                      <Eye size={14} fill="currentColor" />
                      <span>
                        <span className="sm:hidden">View Case Study</span>
                        <span className="hidden sm:inline">View Architecture & Case Study</span>
                      </span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Analytical Panel (Visual element) */}
                <div className="lg:w-[360px] bg-canvas border-t lg:border-t-0 lg:border-l border-hairline p-6 flex flex-col justify-center space-y-4">
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
                      Execution Layer Status
                    </div>
                    <div className="bg-canvas-elevated border border-hairline p-3.5 rounded-sm space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-mute">Database Layer</span>
                        <span className="text-emerald-500 font-medium">Ready</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-mute">Prisma Client</span>
                        <span className="text-emerald-500 font-medium">Ready</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-mute">Forecasting Pipeline</span>
                        <span className="text-amber-500 font-medium">Pending</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-mute">LLM Analyzer Node</span>
                        <span className="text-amber-500 font-medium">Building</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
                      Core Metrics Target
                    </div>
                    <div className="bg-canvas-elevated border border-hairline p-3.5 rounded-sm space-y-2.5 font-mono text-xs text-body">
                      <div className="flex items-center justify-between">
                        <span>LCP Vitals</span>
                        <span className="text-ink font-semibold">&lt; 1.2s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Accessibility Score</span>
                        <span className="text-ink font-semibold">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>
          ))}
        </div>

        {/* Future Projects Placeholder */}
        <div className="mt-16 text-center border-t border-hairline pt-12">
          <div className="inline-flex items-center space-x-2 text-mute text-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-mute" />
            <span>More engineering projects coming soon. Keep tracking the pipeline.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
