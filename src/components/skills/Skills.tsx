"use client";

import React from "react";
import { Sparkles, Command } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-hairline bg-canvas">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-3 mb-16">
            <div className="font-mono text-xs uppercase tracking-wider text-link font-semibold">
              Capabilities
            </div>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-ink tracking-tight">
              Technical Arsenal
            </h2>
            <p className="font-sans text-body text-base max-w-xl">
              A comprehensive list of engineering capabilities, programming tools, and core frontend technologies.
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const isAI = category.category.toLowerCase().includes("ai");
            return (
              <Reveal key={idx} delay={idx * 80} className="h-full">
                <div
                  className={`bg-canvas-elevated border rounded-md p-6 flex flex-col justify-between transition-all duration-200 h-full ${
                    isAI
                      ? "border-violet-500/20 dark:border-violet-500/10 shadow-[0_0_12px_rgba(121,40,202,0.02)]"
                      : "border-hairline hover:border-mute/40"
                  }`}
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center space-x-2 mb-4">
                      {isAI ? (
                        <Sparkles size={14} className="text-violet-500" />
                      ) : (
                        <Command size={14} className="text-mute" />
                      )}
                      <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                        {category.category}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-2.5 py-1 rounded-sm text-xs font-mono border transition-all ${
                            isAI
                              ? "bg-violet-500/5 text-violet-700 dark:text-violet-300 border-violet-500/10 hover:bg-violet-500/10"
                              : "bg-canvas text-body border-hairline hover:bg-hairline-soft hover:text-ink"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isAI && (
                    <div className="mt-4 pt-3 border-t border-hairline-soft font-mono text-[10px] text-mute leading-normal">
                      * Actively building applications using LLM API routing and state management logic.
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
