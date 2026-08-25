"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 20);
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, (scrollTop / docHeight) * 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Deep Dive", href: "/#finpulse-deepdive" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: profile.socials.github, icon: Github },
    { name: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${profile.socials.email}`, icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "glass border-b border-white/10 shadow-2xl backdrop-blur-2xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-gold to-accent-pink transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2.5 font-sans font-bold text-base text-ink tracking-tight hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              <Sparkles size={14} className="animate-spin-slow" />
            </div>
            <span className="tracking-tight">
              vinesh<span className="text-accent-cyan">.</span>
            </span>
          </Link>

          {/* Desktop Nav Pills */}
          <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full glass border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs font-medium px-4 py-1.5 rounded-full text-body hover:text-ink hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-mute hover:text-accent-cyan hover:bg-accent-cyan/10 hover:scale-110 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              );
            })}
            <a
              href="/Vinesh_parthasarathy_resume.pdf"
              download="Vinesh_Parthasarathy_Resume.pdf"
              className="ml-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 text-ink hover:text-accent-cyan hover:border-accent-cyan/30 border border-white/10 transition-all"
            >
              CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex flex-col justify-center items-center relative focus:outline-none z-50 cursor-pointer rounded-full border border-hairline bg-canvas-elevated/70 hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`w-4 h-0.5 bg-ink absolute transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-ink absolute transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-ink absolute transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-canvas/95 backdrop-blur-2xl md:hidden transition-all duration-500 ease-out flex flex-col justify-between p-8 pt-24 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 my-auto">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${idx * 70}ms` : "0ms" }}
              className={`font-sans text-3xl font-bold tracking-tight text-ink hover:text-accent-cyan transition-all duration-300 transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="border-t border-hairline pt-6 space-y-4">
          <div className="flex items-center justify-around">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-sm text-body hover:text-accent-cyan transition-colors"
                >
                  <Icon size={18} className="text-accent-cyan" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
