"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  ShieldAlert,
  Zap,
  ChevronRight,
  Code2,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { featuredProjects } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextScrub } from "@/components/ui/TextScrub";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"capabilities" | "architecture" | "pipeline">("capabilities");

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-cinematic min-h-screen py-32 relative"
    >
      {/* Ambient Fog Overlay */}
      <div className="fog-overlay" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
        {/* Section Header with Apple-Style Text Scrub */}
        <div className="space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            <Sparkles size={12} className="animate-spin-slow" />
            <span>Featured Engineering</span>
          </div>

          <h2 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink tracking-tighter text-shadow-3d">
            Selected Architecture
          </h2>

          <TextScrub
            className="font-sans text-body text-base md:text-lg max-w-2xl mx-auto"
            highlightColor="#00ffff"
          >
            Production-grade full-stack architectures engineered for scale, conversational intelligence, and sub-50ms latency.
          </TextScrub>
        </div>

        {/* Featured Projects with Apple-Style Spotlight Card */}
        <div className="space-y-16">
          {featuredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(0, 255, 255, 0.15)"
              className="p-8 md:p-12 border border-white/10 shadow-2xl bg-canvas-elevated/80 backdrop-blur-xl"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column: Project Details */}
                <div className="flex-1 flex flex-col justify-between space-y-8">
                  <div>
                    {/* Status badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 size={13} />
                        Production Live &amp; Shipped
                      </span>
                      <span className="text-xs text-mute font-mono px-2.5 py-1 rounded-full glass">
                        Ref: ARCH-01 / FINPULSE
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-3xl sm:text-4xl text-ink tracking-tight hover:text-accent-cyan transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-body text-sm sm:text-base leading-relaxed mt-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-mute mb-3 flex items-center gap-1.5">
                        <Code2 size={13} className="text-accent-cyan" />
                        Production Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg border border-hairline bg-canvas/60 text-xs font-mono text-body hover:border-accent-cyan/40 hover:text-accent-cyan hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Tab Switcher for Capabilities vs Architecture */}
                    <div className="mt-8">
                      <div className="flex items-center gap-2 border-b border-hairline pb-2 mb-4">
                        <button
                          onClick={() => setActiveTab("capabilities")}
                          className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                            activeTab === "capabilities"
                              ? "bg-accent-cyan/20 text-accent-cyan font-bold border border-accent-cyan/30"
                              : "text-mute hover:text-ink"
                          }`}
                        >
                          Key Capabilities
                        </button>
                        <button
                          onClick={() => setActiveTab("architecture")}
                          className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                            activeTab === "architecture"
                              ? "bg-accent-gold/20 text-accent-gold font-bold border border-accent-gold/30"
                              : "text-mute hover:text-ink"
                          }`}
                        >
                          System Highlights
                        </button>
                      </div>

                      {activeTab === "capabilities" && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 animate-fadeIn">
                          {project.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-body">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {activeTab === "architecture" && (
                        <div className="space-y-2.5 font-mono text-xs text-body animate-fadeIn">
                          <div className="p-3 rounded-lg glass border border-hairline flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <Zap size={14} className="text-accent-cyan" />
                              Serverless Neon DB Connection Pooling
                            </span>
                            <span className="text-accent-cyan font-bold">100% Edge</span>
                          </div>
                          <div className="p-3 rounded-lg glass border border-hairline flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <Layers size={14} className="text-accent-gold" />
                              Stateless JWT Auth with Auth.js v5
                            </span>
                            <span className="text-accent-gold font-bold">Zero Cold Start</span>
                          </div>
                          <div className="p-3 rounded-lg glass border border-hairline flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <Database size={14} className="text-accent-pink" />
                              Prisma Schema Migration CI/CD
                            </span>
                            <span className="text-accent-pink font-bold">Automated</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-6 border-t border-hairline flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 h-[46px] rounded-full font-sans font-semibold text-sm bg-accent-cyan text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 h-[46px] rounded-full font-sans font-medium text-sm glass text-ink hover:text-accent-cyan hover:border-accent-cyan/30 hover:scale-105 transition-all duration-300"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                    <Link
                      href={project.caseStudyUrl}
                      className="inline-flex items-center space-x-2 px-6 h-[46px] rounded-full font-sans font-medium text-sm glass text-ink hover:text-accent-gold hover:border-accent-gold/30 hover:scale-105 transition-all duration-300"
                    >
                      <span>Deep Case Study</span>
                      <ChevronRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Apple-Style Execution Telemetry Box */}
                <div className="lg:w-[360px] flex flex-col justify-between space-y-6 bg-black/30 p-6 rounded-2xl border border-white/5">
                  <div className="space-y-3">
                    <div className="font-mono text-xs uppercase text-accent-cyan tracking-widest flex items-center justify-between">
                      <span>Execution Layer</span>
                      <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    </div>

                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="glass p-3 rounded-lg flex justify-between items-center">
                        <span className="text-mute">AI Model</span>
                        <span className="text-accent-cyan font-semibold">Gemini 2.5 Flash</span>
                      </div>
                      <div className="glass p-3 rounded-lg flex justify-between items-center">
                        <span className="text-mute">Database</span>
                        <span className="text-accent-gold font-semibold">PostgreSQL (Neon)</span>
                      </div>
                      <div className="glass p-3 rounded-lg flex justify-between items-center">
                        <span className="text-mute">Gmail Webhook</span>
                        <span className="text-emerald-400 font-semibold">Active &amp; Synced</span>
                      </div>
                      <div className="glass p-3 rounded-lg flex justify-between items-center">
                        <span className="text-mute">Duplicate Hash</span>
                        <span className="text-accent-pink font-semibold">SHA-256 Check</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-xl space-y-2 font-mono text-xs border-accent-cyan/20">
                    <div className="text-[10px] text-mute uppercase tracking-wider">
                      Edge Benchmark
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body">Route Coverage</span>
                      <span className="text-accent-cyan font-bold">16 / 16 PASS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body">Edge Host</span>
                      <span className="text-ink font-bold">Vercel Edge</span>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
