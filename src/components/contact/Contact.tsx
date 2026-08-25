"use client";

import React, { useRef, useState } from "react";
import { Mail, ArrowUpRight, Download, Check, Copy, Sparkles, Send } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextScrub } from "@/components/ui/TextScrub";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-cinematic min-h-screen flex items-center justify-center relative py-28"
    >
      {/* Dynamic atmospheric backdrops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent-cyan/5 blur-[220px]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-pink/5 blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-accent-gold/5 blur-[160px]" />
      </div>

      <div className="grid-lines" />

      <div className="relative z-10 mx-auto max-w-5xl w-full px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-mono bg-accent-gold/10 text-accent-gold border border-accent-gold/30 mb-8">
          <Sparkles size={12} className="animate-spin-slow" />
          <span>Get In Touch • Available for Senior Full Stack Roles</span>
        </div>

        {/* Big Apple Keynote Finale Headline */}
        <h2 className="font-sans font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ink tracking-tighter text-shadow-deep leading-[0.92]">
          Let&apos;s Build
          <br />
          <span className="gradient-text-warm">Something</span>
          <br />
          <span className="gradient-text-cyan">Remarkable.</span>
        </h2>

        {/* Subtitle with Scrub */}
        <div className="mt-8 mb-12 max-w-xl mx-auto">
          <TextScrub
            className="font-sans text-body text-base md:text-lg leading-relaxed"
            highlightColor="#ffffff"
          >
            Looking for a Senior Full-Stack Engineer who pairs rigorous architectural standards with obsession over user experience? Let&apos;s connect.
          </TextScrub>
        </div>

        {/* Interactive Action Hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {/* Email Action */}
          <SpotlightCard
            onClick={() => window.open(`mailto:${profile.socials.email}`)}
            spotlightColor="rgba(0, 255, 255, 0.15)"
            className="p-6 border border-accent-cyan/30 bg-accent-cyan/5 hover:border-accent-cyan cursor-pointer transition-all flex flex-col items-center justify-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-accent-cyan/20 text-accent-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div className="font-sans font-bold text-sm text-ink flex items-center gap-1">
              <span>Send Direct Email</span>
              <ArrowUpRight size={13} className="text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="font-mono text-xs text-accent-cyan truncate max-w-[200px]">
              {profile.socials.email}
            </span>
          </SpotlightCard>

          {/* Copy Email Quick Shortcut */}
          <SpotlightCard
            onClick={copyEmail}
            spotlightColor="rgba(212, 175, 55, 0.15)"
            className="p-6 border border-white/10 bg-canvas-elevated/60 hover:border-accent-gold/40 cursor-pointer transition-all flex flex-col items-center justify-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 text-accent-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
            </div>
            <div className="font-sans font-bold text-sm text-ink">
              {copied ? "Copied to Clipboard!" : "Copy Email Address"}
            </div>
            <span className="font-mono text-xs text-mute">
              {copied ? "Ready to paste" : "One-click copy"}
            </span>
          </SpotlightCard>

          {/* Download Resume */}
          <a
            href="/Vinesh_parthasarathy_resume.pdf"
            download="Vinesh_Parthasarathy_Resume.pdf"
            className="block"
          >
            <SpotlightCard
              spotlightColor="rgba(255, 0, 110, 0.15)"
              className="p-6 h-full border border-white/10 bg-canvas-elevated/60 hover:border-accent-pink/40 cursor-pointer transition-all flex flex-col items-center justify-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 text-accent-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download size={20} />
              </div>
              <div className="font-sans font-bold text-sm text-ink flex items-center gap-1">
                <span>Download Resume</span>
                <ArrowUpRight size={13} className="text-accent-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="font-mono text-xs text-mute">PDF format • Updated</span>
            </SpotlightCard>
          </a>
        </div>

        {/* Social Pill Strip */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass text-xs font-mono text-body hover:text-accent-cyan hover:border-accent-cyan/30 hover:scale-105 transition-all"
          >
            <Github size={15} />
            <span>GitHub Profile</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass text-xs font-mono text-body hover:text-accent-cyan hover:border-accent-cyan/30 hover:scale-105 transition-all"
          >
            <Linkedin size={15} />
            <span>LinkedIn Network</span>
          </a>
        </div>

        {/* Footer info bar */}
        <div className="border-t border-hairline pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-mute space-y-2 sm:space-y-0">
          <div>© {currentYear} {profile.name}. Crafted with Next.js 16 &amp; Three.js.</div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse-glow" />
            <span className="text-ink">BASED IN {profile.location.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
