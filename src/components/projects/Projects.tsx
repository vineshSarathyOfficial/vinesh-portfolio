"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Eye, ExternalLink, CheckCircle2, Sparkles } from "lucide-react";
import { Github } from "@/components/ui/Icons";
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
              A showcase of production-grade engineering, full-stack architectures, and AI conversational copilot integrations.
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
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 size={12} className="text-emerald-500" />
                          {project.status === "Shipped" ? "Production Live" : project.status}
                        </span>
                        <span className="text-xs text-mute font-mono">Project Code: FP-01</span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight mb-3 flex items-center gap-2">
                        <span>{project.title}</span>
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
                          Key Capabilities &amp; Engineering Features
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-body">
                          {project.capabilities.slice(0, 6).map((cap, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span className="w-1 h-1 rounded-full bg-emerald-500" />
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

                    {/* Action Buttons: Live Demo, GitHub, Case Study */}
                    <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-sans font-medium transition-colors bg-link text-white rounded-sm text-sm px-4 h-[34px] hover:opacity-90 active:scale-[0.98] select-none cursor-pointer space-x-1.5 shadow-sm"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-sans font-medium transition-colors bg-canvas-elevated text-ink border border-hairline rounded-sm text-sm px-3.5 h-[34px] hover:bg-hairline-soft active:scale-[0.98] select-none cursor-pointer space-x-1.5"
                        >
                          <Github size={14} />
                          <span>GitHub</span>
                        </a>
                      )}
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-flex items-center justify-center font-sans font-medium transition-colors bg-canvas-elevated text-ink border border-hairline rounded-sm text-sm px-3.5 h-[34px] hover:bg-hairline-soft active:scale-[0.98] select-none cursor-pointer space-x-1.5"
                      >
                        <Eye size={14} />
                        <span>Architecture</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Analytical Panel (Visual element) */}
                  <div className="lg:w-[360px] bg-canvas border-t lg:border-t-0 lg:border-l border-hairline p-6 flex flex-col justify-center space-y-4">
                    <div className="space-y-1">
                      <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
                        Execution Layer Status
                      </div>
                      <div className="bg-canvas-elevated border border-hairline p-3.5 rounded-sm space-y-2.5 font-mono text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-mute flex items-center gap-1">
                            <Sparkles size={11} className="text-link" />
                            AI Copilot
                          </span>
                          <span className="text-emerald-500 font-medium">Gemini 2.5 Flash</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-mute">Database Layer</span>
                          <span className="text-emerald-500 font-medium">PostgreSQL (Neon)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-mute">Gmail Ingestion</span>
                          <span className="text-emerald-500 font-medium">Live &amp; Synced</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-mute">Statement Parser</span>
                          <span className="text-emerald-500 font-medium">PDF &amp; CSV Ready</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-mute">Subscription Engine</span>
                          <span className="text-emerald-500 font-medium">Statistical ML</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
                        Production Performance
                      </div>
                      <div className="bg-canvas-elevated border border-hairline p-3.5 rounded-sm space-y-2 font-mono text-xs text-body">
                        <div className="flex items-center justify-between">
                          <span>Build Status</span>
                          <span className="text-emerald-500 font-semibold">16/16 Routes Pass</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Deployment</span>
                          <span className="text-ink font-semibold">Vercel Edge</span>
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>More engineering projects coming soon. Keep tracking the pipeline.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
