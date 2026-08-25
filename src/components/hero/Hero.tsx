"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Mail, Download, Sparkles, ChevronDown, Layers, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";
import { TextScrub } from "@/components/ui/TextScrub";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    setMouseOffset({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="section-cinematic min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-16"
    >
      {/* Dynamic atmospheric lighting */}
      <div className="fog-overlay" />
      <div className="grid-lines" />

      {/* Floating Ambient Glow Orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-cyan/10 blur-[180px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mouseOffset.x * 30}px), ${mouseOffset.y * 30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-accent-pink/5 blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * -20}px, ${mouseOffset.y * -20}px)`,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 flex flex-col items-center text-center">
        {/* Availability Badge — Apple Pill */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass border border-accent-cyan/30 text-xs font-mono text-accent-cyan shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:border-accent-cyan/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
            </span>
            <span className="tracking-wide">Available for Senior Full Stack Roles</span>
          </div>
        </div>

        {/* Massive Apple-Grade Hero Headline */}
        <div
          className={`mt-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h1
            ref={headlineRef}
            className="font-sans font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[132px] text-ink tracking-tighter leading-[0.9] text-shadow-deep select-none"
            style={{
              transform: `perspective(1000px) rotateX(${mouseOffset.y * -3}deg) rotateY(${mouseOffset.x * 3}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="gradient-text-cyan drop-shadow-[0_0_35px_rgba(0,255,255,0.3)]">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
        </div>

        {/* Dynamic Spec Capsule Row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2.5 mt-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono glass border border-white/10 text-body">
            <Terminal size={12} className="text-accent-gold" />
            {profile.role}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono glass border border-white/10 text-body">
            <Sparkles size={12} className="text-accent-cyan" />
            {profile.experienceYears}+ Years Production Experience
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono glass border border-white/10 text-body">
            <Layers size={12} className="text-accent-pink" />
            Next.js 16 • React 19 • PostgreSQL
          </span>
        </div>

        {/* Scrubbed Subtitle Statement */}
        <div
          className={`mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <TextScrub
            className="font-sans text-base sm:text-lg md:text-xl text-body leading-relaxed"
            highlightColor="#ffffff"
          >
            Architecting ultra-fast, resilient web applications with full-stack Next.js, Node.js, distributed databases, and conversational AI copilot intelligence.
          </TextScrub>
        </div>

        {/* Action Buttons — Apple Glassmorphism & Neon Glow */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mt-8 transition-all duration-1000 delay-[900ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => {
              const el = document.getElementById("finpulse-deepdive") || document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center space-x-2.5 px-8 h-[54px] rounded-full font-sans font-semibold text-base bg-accent-cyan text-black hover:bg-cyan-300 shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_45px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Engineering Story</span>
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </button>

          <a
            href="/Vinesh_parthasarathy_resume.pdf"
            download="Vinesh_Parthasarathy_Resume.pdf"
            className="inline-flex items-center justify-center space-x-2 px-8 h-[54px] rounded-full font-sans font-medium text-base glass text-ink hover:text-accent-gold hover:border-accent-gold/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center space-x-6 mt-8 transition-all duration-1000 delay-[1100ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mute hover:text-accent-cyan hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mute hover:text-accent-cyan hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.socials.email}`}
            className="text-mute hover:text-accent-gold hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Apple Scroll Down Cue */}
        <button
          onClick={() => {
            const el = document.getElementById("finpulse-deepdive") || document.getElementById("projects");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`mt-12 flex flex-col items-center space-y-2 text-mute hover:text-accent-cyan transition-all duration-1000 delay-[1300ms] cursor-pointer group ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
            Scroll to Enter Showcase
          </span>
          <ChevronDown size={18} className="animate-bounce text-accent-cyan" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
