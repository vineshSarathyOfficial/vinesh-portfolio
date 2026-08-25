"use client";

import React, { useRef, useState, useEffect } from "react";
import { Briefcase, Calendar, BookOpen, Terminal, Sparkles, Code2, Award, Compass } from "lucide-react";
import { experiences, skillCategories, philosophies, currentFocus, profile } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextScrub } from "@/components/ui/TextScrub";

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeExp, setActiveExp] = useState<number>(0);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Fog overlay */}
      <div className="fog-overlay" />

      {/* Accent light glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full bg-accent-pink/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-accent-pink/10 text-accent-pink border border-accent-pink/20">
            <Award size={12} />
            <span>Career Milestones &amp; Craft</span>
          </div>

          <h2 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink tracking-tighter text-shadow-3d">
            Experience &amp; Expertise
          </h2>

          <TextScrub
            className="font-sans text-body text-base md:text-lg max-w-2xl mx-auto"
            highlightColor="#ff006e"
          >
            Over 7+ years of engineering leadership across high-throughput enterprise platforms, scalable e-commerce, and real-time streaming architectures.
          </TextScrub>
        </div>

        {/* 2-Column Experience + Arsenal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Laser Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-gold flex items-center gap-2 mb-6">
              <Briefcase size={14} />
              <span>Career Trajectory</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <SpotlightCard
                  key={idx}
                  onClick={() => setActiveExp(idx)}
                  spotlightColor="rgba(212, 175, 55, 0.12)"
                  className={`p-6 sm:p-7 border transition-all duration-300 cursor-pointer ${
                    activeExp === idx
                      ? "border-accent-gold/50 bg-canvas-elevated/90 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                      : "border-white/5 bg-canvas-elevated/50 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-sans font-bold text-xl text-ink tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-gold" />
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-mute text-xs font-mono">
                      <Calendar size={12} className="text-accent-gold" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="text-sm font-sans font-semibold text-accent-gold/90 mb-4">
                    {exp.company}
                  </div>

                  {exp.focus && exp.focus.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.focus.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md border border-hairline bg-canvas/60 text-xs font-mono text-body hover:border-accent-cyan/30 hover:text-accent-cyan transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Arsenal & Philosophies */}
          <div className="lg:col-span-5 space-y-10">
            {/* Technical Arsenal */}
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan flex items-center gap-2 mb-6">
                <Code2 size={14} />
                <span>Technical Arsenal</span>
              </div>

              <div className="space-y-4">
                {skillCategories.slice(0, 4).map((category, idx) => {
                  const isAI = category.category.toLowerCase().includes("ai");
                  return (
                    <SpotlightCard
                      key={idx}
                      spotlightColor={isAI ? "rgba(255, 0, 110, 0.15)" : "rgba(0, 255, 255, 0.12)"}
                      className={`p-5 border transition-all duration-300 ${
                        isAI ? "border-accent-pink/30 bg-accent-pink/5" : "border-white/5 bg-canvas-elevated/60"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        {isAI ? (
                          <Sparkles size={14} className="text-accent-pink animate-spin-slow" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                        )}
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-bold">
                          {category.category}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all duration-300 ${
                              isAI
                                ? "bg-accent-pink/10 text-accent-pink border-accent-pink/20 hover:bg-accent-pink/20"
                                : "bg-canvas/60 text-body border-hairline hover:text-accent-cyan hover:border-accent-cyan/30"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>

            {/* Engineering Philosophies */}
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-gold flex items-center gap-2 mb-6">
                <Compass size={14} />
                <span>Engineering Philosophy</span>
              </div>

              <div className="space-y-3">
                {philosophies.map((phil, idx) => (
                  <SpotlightCard
                    key={idx}
                    spotlightColor="rgba(212, 175, 55, 0.12)"
                    className="p-4 border border-white/5 bg-canvas-elevated/40 hover:border-accent-gold/30 transition-all"
                  >
                    <div className="flex items-center space-x-2 text-ink font-semibold font-sans text-sm tracking-tight">
                      <span className="text-accent-gold font-mono text-xs">0{idx + 1}.</span>
                      <span>{phil.title}</span>
                    </div>
                    <p className="font-sans text-xs text-body leading-relaxed pl-6 mt-1">
                      {phil.description}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Current Focus Capsules */}
            <SpotlightCard
              spotlightColor="rgba(0, 255, 255, 0.12)"
              className="p-6 border border-accent-cyan/20 bg-canvas-elevated/70"
            >
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan mb-4 flex items-center gap-2">
                <Sparkles size={13} />
                <span>Current Active Focus</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-ink font-mono text-[10px] uppercase font-bold">
                    <BookOpen size={12} className="text-accent-cyan" />
                    <span>Learning</span>
                  </div>
                  <ul className="space-y-1 font-sans text-xs text-body">
                    {currentFocus.learning.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-1.5 text-accent-cyan">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-ink font-mono text-[10px] uppercase font-bold">
                    <Terminal size={12} className="text-accent-gold" />
                    <span>Building</span>
                  </div>
                  <ul className="space-y-1 font-sans text-xs text-body">
                    {currentFocus.building.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-1.5 text-accent-gold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-ink font-mono text-[10px] uppercase font-bold">
                    <Sparkles size={12} className="text-accent-pink" />
                    <span>Exploring</span>
                  </div>
                  <ul className="space-y-1 font-sans text-xs text-body">
                    {currentFocus.exploring.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-1.5 text-accent-pink">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
