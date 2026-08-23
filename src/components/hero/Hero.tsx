"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";
import { Button } from "../ui/Button";
import { TokenStudio } from "./TokenStudio";



export function Hero() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      requestAnimationFrame(() => {
        setScrollOffset(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-0 lg:h-[calc(100vh-4rem)] lg:min-h-[680px] flex items-center border-b border-hairline bg-canvas">
      {/* Subtle Mesh Gradient Background */}
      <div
        className="mesh-gradient-container"
        style={isMobile ? undefined : { transform: `translateY(${scrollOffset * 0.35}px)` }}
      >
        <div className="mesh-blob-1" />
        <div className="mesh-blob-2" />
        <div className="mesh-blob-3" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Panel: Content */}
        <div
          className="lg:col-span-7 flex flex-col items-start space-y-6 transition-all duration-100 ease-out will-change-transform"
          style={isMobile ? undefined : {
            transform: `translateY(${scrollOffset * 0.08}px)`,
            opacity: Math.max(0, 1 - scrollOffset / 450),
          }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-hairline bg-canvas-elevated text-xs font-mono text-mute">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Senior Roles</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-none">
              {profile.name}
            </h1>
            <h2 className="font-sans font-medium text-lg md:text-xl lg:text-2xl text-body max-w-2xl">
              {profile.role}
            </h2>
            <p className="font-sans text-base md:text-lg text-body max-w-xl leading-relaxed">
              I build fast, scalable, and thoughtful web applications with React, Next.js, Node.js, and modern full-stack architecture.
            </p>
            <p className="font-sans text-sm md:text-base text-mute max-w-xl">
              {profile.experienceYears}+ years of experience building production-grade web applications, scalable backend APIs, and solving complex engineering problems.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
            <Button
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="primary"
              className="group flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const el = document.getElementById("experience");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="secondary"
              className="flex items-center justify-center"
            >
              View Experience
            </Button>
            <a
              href="/Vinesh_parthasarathy_resume.pdf"
              download="Vinesh_Parthasarathy_Resume.pdf"
              className="inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link bg-canvas-elevated text-ink border border-hairline rounded-pill text-base px-6 h-[44px] hover:bg-hairline-soft active:scale-[0.98] select-none cursor-pointer flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4 pt-4 text-mute border-t border-hairline w-full max-w-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-faint">Connect:</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-ink transition-colors flex items-center space-x-1 text-sm font-sans"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-ink transition-colors flex items-center space-x-1 text-sm font-sans"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              className="text-body hover:text-ink transition-colors flex items-center space-x-1 text-sm font-sans"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        {/* Right Panel: Interactive Editor Panel */}
        <div
          className="lg:col-span-5 w-full flex justify-center transition-all duration-100 ease-out will-change-transform"
          style={isMobile ? undefined : {
            transform: `translateY(${scrollOffset * 0.16}px)`,
            opacity: Math.max(0, 1 - scrollOffset / 550),
          }}
        >
          {/* commented the tilt intenstionally */}
          {/* <Tilt className="w-full max-w-md rounded-md shadow-sm"> */}
            <TokenStudio />
          {/* </Tilt> */}
      </div>
      </div>
    </section>
  );
}

export default Hero;
