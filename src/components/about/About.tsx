"use client";

import React from "react";
import { Sparkles, Terminal, BookOpen } from "lucide-react";
import { profile, philosophies, currentFocus } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-hairline bg-canvas">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Bio & Current Focus */}
        <Reveal delay={100} className="lg:col-span-7">
          <div className="space-y-12">
          {/* Bio block */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-link font-semibold">
              Background
            </div>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-ink tracking-tight">
              About Me
            </h2>
            <p className="font-sans text-body text-base md:text-lg leading-relaxed max-w-2xl">
              {profile.bio}
            </p>
          </div>

          {/* Current Focus Block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-hairline">
            {/* Learning */}
            <div className="space-y-2">
              <div className="flex items-center space-x-1.5 text-ink">
                <BookOpen size={14} className="text-mute" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Learning
                </h4>
              </div>
              <ul className="space-y-1 font-sans text-sm text-body">
                {currentFocus.learning.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Building */}
            <div className="space-y-2">
              <div className="flex items-center space-x-1.5 text-ink">
                <Terminal size={14} className="text-mute" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Building
                </h4>
              </div>
              <ul className="space-y-1 font-sans text-sm text-body">
                {currentFocus.building.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exploring */}
            <div className="space-y-2">
              <div className="flex items-center space-x-1.5 text-ink">
                <Sparkles size={14} className="text-violet-500" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Exploring
                </h4>
              </div>
              <ul className="space-y-1 font-sans text-sm text-body">
                {currentFocus.exploring.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </Reveal>

        {/* Right Side: How I Build (Philosophies) */}
        <Reveal delay={300} className="lg:col-span-5">
          <div className="space-y-6">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-mute">
              Engineering Philosophy
            </div>
            <h3 className="font-sans font-semibold text-xl text-ink tracking-tight">
              How I Build
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {philosophies.map((phil, idx) => (
              <div
                key={idx}
                className="bg-canvas-elevated border border-hairline rounded-md p-4 space-y-1 transition-all duration-200 hover:border-mute/40"
              >
                <div className="flex items-center space-x-2 text-ink font-semibold font-sans text-sm tracking-tight">
                  <span className="text-mute font-mono text-xs">0{idx + 1}.</span>
                  <span>{phil.title}</span>
                </div>
                <p className="font-sans text-xs text-body leading-relaxed pl-5">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
