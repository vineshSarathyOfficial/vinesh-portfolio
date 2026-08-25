"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-glow section-raised-top-border relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32"
      aria-label="Contact"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(110,142,251,0.14)_0%,transparent_55%)]" />

      <p className="font-mono text-[11px] uppercase tracking-[0.35em]"><span className="accent-label">Let&apos;s build</span></p>
      <h2
        ref={headingRef}
        className="mt-6 text-center font-sans text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#f5f5f7]"
      >
        Ready when you are.
      </h2>
      <p className="mt-6 max-w-lg text-center text-lg text-[#a1a1a6]">
        Open to senior engineering roles, consulting, and ambitious product collaborations.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a href={`mailto:${profile.socials.email}`} className="cinematic-btn-primary inline-flex items-center gap-2">
          <Mail size={16} />
          {profile.socials.email}
        </a>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="cinematic-btn-secondary inline-flex items-center gap-2">
          <Github size={16} />
          GitHub
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="cinematic-btn-secondary inline-flex items-center gap-2">
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>

      <p className="mt-20 font-mono text-[10px] uppercase tracking-[0.25em] text-[#48484a]">
        {profile.location} · {new Date().getFullYear()}
      </p>
    </section>
  );
}

export default Contact;
